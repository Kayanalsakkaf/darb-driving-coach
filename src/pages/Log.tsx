import { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Download, Trash2, Upload, UserPlus } from "lucide-react";
import { useStore, today, uid, migrate, setSkill, type LogEntry } from "../lib/store";
import { LESSONS, LES, SK } from "../lib/data";
import { LevelPicker } from "../components/ui";

export function LogPage() {
  const { L, ar, s, set, user } = useStore();
  const [qs] = useSearchParams();
  const startLesson = qs.get("lesson") || "";
  const blank = (lid: string) => ({ date: today(), dur: 60, lesson: lid, area: "", by: "", notes: "", next: "", skills: (LES[lid]?.skills || []).map((k: number) => ({ id: String(k), level: 0 })) });
  const [d, setD] = useState(() => blank(startLesson));
  const [saved, setSaved] = useState("");
  const mine = s.logs.filter((x) => x.userId === user.id).slice().reverse();
  const hours = Math.round(mine.reduce((n, x) => n + x.durationMin, 0) / 6) / 10;
  const save = () => {
    const e: LogEntry = { id: uid("log"), userId: user.id, by: d.by.trim(), date: d.date, durationMin: +d.dur || 0, lesson: d.lesson, area: d.area, skills: d.skills.filter((x: any) => x.level > 0), notes: d.notes, next: d.next };
    set((n) => { n.logs.push(e); });
    e.skills.forEach((x) => setSkill(set, user.id, x.id, x.level));
    setD(blank("")); setSaved(ar ? "حُفظ الدرس." : "Lesson saved.");
  };
  return (
    <main className="page log">
      <h1>{ar ? `سجل دروس ${user.name}` : `${user.name}'s lesson log`}</h1>
      <p className="lede">{mine.length} {ar ? "درس مسجل" : "lessons logged"} · {hours} {ar ? "ساعة" : "hours"}</p>
      <form className="log-form" onSubmit={(e) => { e.preventDefault(); save(); }}>
        <h2>{ar ? "سجّل درسا" : "Log a lesson"}</h2>
        <div className="fields">
          <label>{ar ? "التاريخ" : "Date"}<input type="date" required value={d.date} onChange={(e) => setD({ ...d, date: e.target.value })} /></label>
          <label>{ar ? "المدة (دقائق)" : "Minutes"}<input type="number" min={0} step={5} value={d.dur} onChange={(e) => setD({ ...d, dur: +e.target.value })} /></label>
          <label>{ar ? "الدرس" : "Lesson"}
            <select value={d.lesson} onChange={(e) => setD({ ...blank(e.target.value), date: d.date, dur: d.dur, by: d.by, area: d.area })}>
              <option value="">{ar ? "تدريب حر" : "Free practice"}</option>
              {LESSONS.map((l) => <option key={l.id} value={l.id}>{l.id} · {L(l)}</option>)}
            </select>
          </label>
          <label>{ar ? "سجّله" : "Logged by"}<input value={d.by} placeholder={ar ? "الاسم" : "Name"} onChange={(e) => setD({ ...d, by: e.target.value })} /></label>
          <label className="wide">{ar ? "المكان" : "Where"}<input value={d.area} onChange={(e) => setD({ ...d, area: e.target.value })} /></label>
        </div>
        {d.skills.length ? (
          <ul className="skill-rows compact">
            {d.skills.map((x: any, k: number) => (
              <li key={x.id}><span className="sk-name"><b>{x.id}.</b> {L(SK[x.id])}</span>
                <LevelPicker value={x.level} label={L(SK[x.id])} onChange={(n) => setD({ ...d, skills: d.skills.map((y: any, j: number) => (j === k ? { ...y, level: n } : y)) })} /></li>
            ))}
          </ul>
        ) : null}
        <label className="wide">{ar ? "ما الذي سار جيدا؟ ما الذي يحتاج عملا؟" : "What went well? What needs work?"}<textarea rows={3} value={d.notes} onChange={(e) => setD({ ...d, notes: e.target.value })} /></label>
        <label className="wide">{ar ? "التركيز في الدرس القادم" : "Focus next time"}<input value={d.next} onChange={(e) => setD({ ...d, next: e.target.value })} /></label>
        <p className="done-row"><button className="btn" type="submit">{ar ? "حفظ" : "Save lesson"}</button> <span role="status">{saved}</span></p>
      </form>
      <section>
        <h2>{ar ? "الدروس السابقة" : "Past lessons"}</h2>
        {mine.length ? (
          <ol className="log-list">
            {mine.map((x) => (
              <li key={x.id}>
                <div className="log-top"><b>{x.date}</b> · {x.lesson ? x.lesson + " " + L(LES[x.lesson]) : ar ? "تدريب حر" : "Free practice"} · {x.durationMin} {ar ? "د" : "min"}{x.by ? " · " + x.by : ""}
                  <button className="icon-btn" aria-label={ar ? "حذف" : "Delete"} onClick={() => { if (confirm(ar ? "حذف هذا السجل؟" : "Delete this entry?")) set((n) => { n.logs = n.logs.filter((y) => y.id !== x.id); }); }}><Trash2 size={15} /></button></div>
                {x.skills.length ? <p className="muted">{x.skills.map((k) => `${k.id}: ${k.level}`).join(" · ")}</p> : null}
                {x.notes ? <p>{x.notes}</p> : null}
                {x.next ? <p><b>{ar ? "التالي:" : "Next:"}</b> {x.next}</p> : null}
              </li>
            ))}
          </ol>
        ) : <p className="empty">{ar ? "لا دروس مسجلة بعد. سجّل أول درس أعلاه." : "No lessons logged yet. Log the first one above."}</p>}
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
