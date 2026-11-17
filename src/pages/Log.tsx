import { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Check, Download, Pencil, Trash2, Upload, UserPlus, X } from "lucide-react";
import { useStore, today, uid, migrate, setSkill, type LogEntry } from "../lib/store";
import { LESSONS, LES, SK, LEVELS } from "../lib/data";
import { LevelPicker } from "../components/ui";

type Draft = { id?: string; date: string; dur: number; lessons: string[]; area: string; by: string; notes: string; next: string; skills: { id: string; level: number }[]; markDone: boolean };

/** Skills trained by a set of lessons, keeping any levels already entered. */
function skillsFor(lessons: string[], prev: { id: string; level: number }[]) {
  const ids = [...new Set(lessons.flatMap((l) => (LES[l]?.skills || []).map(String)))];
  const extra = prev.filter((p) => p.level > 0 && !ids.includes(p.id)).map((p) => p.id);
  return [...ids, ...extra].map((id) => ({ id, level: prev.find((p) => p.id === id)?.level || 0 }));
}

export function LogPage() {
  const { L, ar, s, set, user } = useStore();
  const [qs] = useSearchParams();
  const start = qs.get("lesson");
  const blank = (ls: string[] = []): Draft => ({ date: today(), dur: 60, lessons: ls, area: "", by: s.users.find((u) => u.id === s.activeUser)?.name || "", notes: "", next: "", skills: skillsFor(ls, []), markDone: true });
  const [d, setD] = useState<Draft>(() => blank(start ? [start] : []));
  const [saved, setSaved] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const mine = s.logs.filter((x) => x.userId === user.id).slice().sort((a, b) => (a.date < b.date ? 1 : -1));
  const hours = Math.round(mine.reduce((n, x) => n + x.durationMin, 0) / 6) / 10;
  const people = [...new Set([...s.users.map((u) => u.name), ...s.logs.map((l) => l.by).filter(Boolean)])];

  const toggleLesson = (id: string) => {
    const ls = d.lessons.includes(id) ? d.lessons.filter((x) => x !== id) : [...d.lessons, id].sort((a, b) => LESSONS.findIndex((l) => l.id === a) - LESSONS.findIndex((l) => l.id === b));
    setD({ ...d, lessons: ls, skills: skillsFor(ls, d.skills) });
  };
  const save = () => {
    const e: LogEntry = { id: d.id || uid("log"), userId: user.id, by: d.by.trim(), date: d.date, durationMin: +d.dur || 0, lessons: d.lessons, area: d.area, skills: d.skills.filter((x) => x.level > 0), notes: d.notes, next: d.next };
    set((n) => {
      const i = n.logs.findIndex((x) => x.id === e.id);
      if (i >= 0) n.logs[i] = e; else n.logs.push(e);
      if (d.markDone) { const pp = n.progress[user.id] ||= { lessons: {}, theory: {}, checks: {}, skills: {}, known: {}, read: {}, steps: {} } as any; d.lessons.forEach((l) => { pp.lessons[l] ||= { at: d.date }; }); }
    });
    e.skills.forEach((x) => setSkill(set, user.id, x.id, x.level));
    setSaved(d.id ? (ar ? "حُدّث السجل." : "Entry updated.") : ar ? "حُفظت الجلسة." : "Session saved.");
    setD(blank());
  };
  const edit = (x: LogEntry) => {
    setD({ id: x.id, date: x.date, dur: x.durationMin, lessons: x.lessons, area: x.area, by: x.by, notes: x.notes, next: x.next, skills: skillsFor(x.lessons, x.skills), markDone: false });
    setSaved(""); formRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const groups: [string, string, string][] = [...new Set(LESSONS.map((l) => l.where))].map((w) => [w, w, w]);

  return (
    <main className="page log">
      <h1>{ar ? `سجل ${user.name}` : `${user.name}'s log`}</h1>
      <p className="lede"><bdi>{mine.length}</bdi> {ar ? "جلسة" : "sessions"} · <bdi>{hours}</bdi> {ar ? "ساعة" : "hours"}</p>

      <form ref={formRef} className={"log-form" + (d.id ? " editing" : "")} onSubmit={(e) => { e.preventDefault(); save(); }}>
        <h2>{d.id ? (ar ? "تعديل الجلسة" : "Edit session") : ar ? "سجّل جلسة" : "Log a session"}</h2>
        <div className="fields">
          <label>{ar ? "التاريخ" : "Date"}<input type="date" required value={d.date} onChange={(e) => setD({ ...d, date: e.target.value })} /></label>
          <label>{ar ? "المدة (دقائق)" : "Minutes"}<input type="number" min={0} step={5} value={d.dur} onChange={(e) => setD({ ...d, dur: +e.target.value })} /></label>
          <label>{ar ? "سجّلها" : "Logged by"}<input list="people" value={d.by} onChange={(e) => setD({ ...d, by: e.target.value })} /><datalist id="people">{people.map((p) => <option key={p} value={p} />)}</datalist></label>
          <label>{ar ? "المكان" : "Where"}<input value={d.area} placeholder={ar ? "مثال: مواقف فارغة، حي هادئ" : "e.g. empty car park, quiet streets"} onChange={(e) => setD({ ...d, area: e.target.value })} /></label>
        </div>

        <fieldset className="lesson-pick">
          <legend>{ar ? "الدروس التي غطتها الجلسة" : "Lessons covered in this session"} <span className="muted">· {ar ? "اختر واحدا أو أكثر" : "pick one or more"}</span></legend>
          {groups.map(([w]) => (
            <div key={w} className="pick-row">
              {LESSONS.filter((l) => l.where === w).map((l) => {
                const on = d.lessons.includes(l.id);
                return <button type="button" key={l.id} className={"pick" + (on ? " on" : "")} aria-pressed={on} onClick={() => toggleLesson(l.id)} title={L(l)}>{on ? <Check size={13} strokeWidth={3} /> : null}<b>{l.id}</b> <span>{L(l)}</span></button>;
              })}
            </div>
          ))}
          {d.lessons.length ? <label className="inline-check"><input type="checkbox" checked={d.markDone} onChange={(e) => setD({ ...d, markDone: e.target.checked })} /> {ar ? "علّم هذه الدروس كمنجزة" : "Mark these lessons as done"}</label> : <p className="muted small">{ar ? "بلا درس محدد = تدريب حر." : "No lesson picked = free practice."}</p>}
        </fieldset>

        {d.skills.length ? (
          <>
            <h3>{ar ? "كيف كان أداؤك؟" : "How did it go?"}</h3>
            <ul className="skill-rows compact">
              {d.skills.map((x, k) => (
                <li key={x.id}><span className="sk-name"><b>{x.id}.</b> {L(SK[x.id])}</span>
                  <LevelPicker value={x.level} label={L(SK[x.id])} onChange={(n) => setD({ ...d, skills: d.skills.map((y, j) => (j === k ? { ...y, level: n } : y)) })} /></li>
              ))}
            </ul>
          </>
        ) : null}
        <label className="wide">{ar ? "ما الذي سار جيدا؟ ما الذي يحتاج عملا؟" : "What went well? What needs work?"}<textarea rows={3} value={d.notes} onChange={(e) => setD({ ...d, notes: e.target.value })} /></label>
        <label className="wide">{ar ? "التركيز في الجلسة القادمة" : "Focus next time"}<input value={d.next} onChange={(e) => setD({ ...d, next: e.target.value })} /></label>
        <p className="done-row">
          <button className="btn" type="submit"><Check size={16} strokeWidth={3} /> {d.id ? (ar ? "حفظ التعديل" : "Save changes") : ar ? "حفظ الجلسة" : "Save session"}</button>
          {d.id ? <button type="button" className="btn ghost" onClick={() => setD(blank())}><X size={16} /> {ar ? "إلغاء" : "Cancel"}</button> : null}
          <span role="status">{saved}</span>
        </p>
      </form>

      <section>
        <h2>{ar ? "الجلسات السابقة" : "Past sessions"}</h2>
        {mine.length ? (
          <ol className="log-list">
            {mine.map((x) => (
              <li key={x.id} className={d.id === x.id ? "editing" : ""}>
                <div className="log-top">
                  <b><bdi>{x.date}</bdi></b> · <bdi>{x.durationMin}</bdi> {ar ? "دقيقة" : "min"}{x.by ? " · " + x.by : ""}{x.area ? " · " + x.area : ""}
                  <span className="log-actions">
                    <button className="icon-btn edit" aria-label={ar ? "تعديل" : "Edit"} onClick={() => edit(x)}><Pencil size={15} /> {ar ? "تعديل" : "Edit"}</button>
                    <button className="icon-btn" aria-label={ar ? "حذف" : "Delete"} onClick={() => { if (confirm(ar ? "حذف هذه الجلسة؟" : "Delete this session?")) set((n) => { n.logs = n.logs.filter((y) => y.id !== x.id); }); }}><Trash2 size={15} /></button>
                  </span>
                </div>
                <p className="log-lessons">{x.lessons.length ? x.lessons.map((l) => <span key={l} className="chip static"><b>{l}</b> {LES[l] ? L(LES[l]) : ""}</span>) : <span className="muted">{ar ? "تدريب حر" : "Free practice"}</span>}</p>
                {x.skills.length ? <p className="log-skills">{x.skills.map((k) => <span key={k.id}>{L(SK[k.id]) || k.id} <b className="lvchip">{k.level} · {L(LEVELS[k.level - 1])}</b></span>)}</p> : null}
                {x.notes ? <p>{x.notes}</p> : null}
                {x.next ? <p><b>{ar ? "التالي:" : "Next:"}</b> {x.next}</p> : null}
              </li>
            ))}
          </ol>
        ) : <p className="empty">{ar ? "لا جلسات مسجلة بعد. سجّل أول جلسة أعلاه." : "No sessions logged yet. Log the first one above."}</p>}
      </section>
    </main>
  );
}

export function SettingsPage() {
  const { ar, s, set, replace } = useStore();
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const file = useRef<HTMLInputElement>(null);
  const exportJson = () => {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify(s, null, 1)], { type: "application/json" }));
    a.download = `darb-${today()}.json`; a.click();
  };
  const importJson = async (f: File) => {
    try { const st = migrate(JSON.parse(await f.text())); if (!st) throw 0; replace(st); setMsg(ar ? "تم الاستيراد." : "Imported."); }
    catch { setMsg(ar ? "الملف ليس نسخة درب صالحة." : "That file is not a valid Darb backup."); }
  };
  return (
    <main className="page settings">
      <h1>{ar ? "الإعدادات" : "Settings"}</h1>
      <section>
        <h2>{ar ? "المتعلمون" : "Learners"}</h2>
        <p className="muted measure">{ar ? "حساب واحد مشترك على هذا الجهاز. لكل متعلم تقدمه وسجله الخاص." : "One shared account on this device. Each learner has their own progress and log."}</p>
        <ul className="users">
          {s.users.map((u) => (
            <li key={u.id}>
              <input aria-label={ar ? "الاسم" : "Name"} value={u.name} onChange={(e) => set((n) => { n.users.find((x) => x.id === u.id)!.name = e.target.value; })} />
              {u.id === s.activeUser ? <span className="pill">{ar ? "نشط" : "Active"}</span> : <button className="btn ghost sm" onClick={() => set((n) => { n.activeUser = u.id; })}>{ar ? "اختر" : "Switch to"}</button>}
              {s.users.length > 1 ? <button className="icon-btn" aria-label={ar ? "حذف" : "Remove"} onClick={() => { if (confirm(ar ? `حذف ${u.name} وكل تقدمه؟` : `Remove ${u.name} and all their progress?`)) set((n) => { n.users = n.users.filter((x) => x.id !== u.id); delete n.progress[u.id]; n.logs = n.logs.filter((x) => x.userId !== u.id); n.attempts = n.attempts.filter((x) => x.userId !== u.id); if (n.activeUser === u.id) n.activeUser = n.users[0].id; }); }}><Trash2 size={15} /></button> : null}
            </li>
          ))}
        </ul>
        <form className="add-user" onSubmit={(e) => { e.preventDefault(); if (!name.trim()) return; set((n) => { const id = uid("learner"); n.users.push({ id, name: name.trim() }); n.activeUser = id; }); setName(""); }}>
          <input value={name} placeholder={ar ? "اسم المتعلم" : "Learner's name"} onChange={(e) => setName(e.target.value)} />
          <button className="btn" type="submit"><UserPlus size={16} /> {ar ? "أضف متعلما" : "Add learner"}</button>
        </form>
      </section>
      <section>
        <h2>{ar ? "النسخ الاحتياطي" : "Backup"}</h2>
        <p className="muted measure">{ar ? "البيانات محفوظة في هذا المتصفح فقط. صدّرها لنقلها إلى جهاز آخر. يقبل الاستيراد أيضا نسخ درب القديمة." : "Data is saved in this browser only. Export to move it to another device. Import also accepts backups from the earlier Darb."}</p>
        <p className="done-row">
          <button className="btn" onClick={exportJson}><Download size={16} /> {ar ? "تصدير JSON" : "Export JSON"}</button>
          <button className="btn ghost" onClick={() => file.current?.click()}><Upload size={16} /> {ar ? "استيراد" : "Import"}</button>
          <input ref={file} type="file" accept="application/json,.json" hidden onChange={(e) => e.target.files?.[0] && importJson(e.target.files[0])} />
          <span role="status">{msg}</span>
        </p>
      </section>
    </main>
  );
}
