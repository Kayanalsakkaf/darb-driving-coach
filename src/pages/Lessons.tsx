import { Link, useParams } from "react-router-dom";
import { Check, ArrowLeft, ArrowRight, NotebookPen } from "lucide-react";
import { useStore, setSkill } from "../lib/store";
import { LESSONS, LES, SK, COURSE } from "../lib/data";
import { TOPICS, topicTitle, figCount } from "../lib/progress";
import { Checklist, LevelPicker, Md, NextPrev, SrcTag, StageHead } from "../components/ui";
import { Diagram } from "../components/sources";
import { SUMMARIES } from "../components/rules";

const WHERE = { yard: { en: "Yard training", ar: "التدريب في الساحة", dEn: "Private ground, away from traffic: control, steering and the test manoeuvres.", dAr: "أرض خاصة بعيدا عن المرور: التحكم والتوجيه ومناورات الاختبار." }, road: { en: "Road training", ar: "التدريب على الطريق", dEn: "Real traffic in the school car with its instructor.", dAr: "مرور حقيقي في سيارة المدرسة مع مدربها." } };

/** Theory topics a lesson relies on: its chapters' topics plus the topics of every skill it trains. */
export function topicsForLesson(l: any) {
  const ids = new Set<string>([...l.ch.map((c: string) => COURSE.chToSec[c]), ...l.skills.map((k: number) => "k" + k)]);
  return TOPICS.filter((t) => ids.has(t.id));
}

export function LessonsPage() {
  const { L, ar, p, s, user } = useStore();
  const logged = new Set(s.logs.filter((x) => x.userId === user.id).map((x) => x.lesson));
  return (
    <main className="page">
      <StageHead id="lessons" />
      <p className="measure">{ar ? "كل درس يذكر المهارات التي يدربها والموضوعات النظرية التي يعتمد عليها. اقرأ النظري قبل الدرس، وسجّل الدرس بعده." : "Each lesson lists the skills it trains and the theory it relies on. Read the theory before, log the lesson after."}</p>
      {(["yard", "road"] as const).map((w) => (
        <section key={w} className="lesson-group">
          <h2>{L(WHERE[w])}</h2>
          <p className="muted">{ar ? WHERE[w].dAr : WHERE[w].dEn}</p>
          <ol className="lesson-list">
            {LESSONS.filter((l) => l.where === w).map((l) => {
              const topics = topicsForLesson(l);
              const read = topics.filter((t) => p.read[t.id]).length;
              return (
                <li key={l.id} className={p.lessons[l.id] ? "done" : ""}>
                  <Link to={"/lessons/" + l.id}>
                    <span className="l-id">{l.id}</span>
                    <span className="l-main"><span className="l-name">{L(l)}</span><span className="l-meta">{ar ? "الأسبوع" : "Week"} {l.wk} · {ar ? "النظري" : "Theory"} {read}/{topics.length}{logged.has(l.id) ? (ar ? " · مسجل" : " · logged") : ""}</span></span>
                    <span className="l-state">{p.lessons[l.id] ? <Check size={18} strokeWidth={3} /> : null}</span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </section>
      ))}
      <NextPrev id="lessons" />
    </main>
  );
}

export function LessonPage() {
  const { id = "" } = useParams();
  const { L, ar, p, toggle, set, user } = useStore();
  const l = LES[id];
  if (!l) return <main className="page"><p>{ar ? "الدرس غير موجود." : "Lesson not found."} <Link to="/lessons">{ar ? "الدروس" : "Lessons"}</Link></p></main>;
  const i = LESSONS.indexOf(l), prev = LESSONS[i - 1], next = LESSONS[i + 1];
  const topics = topicsForLesson(l);
  const Back = ar ? ArrowRight : ArrowLeft, Fwd = ar ? ArrowLeft : ArrowRight;
  const checks = l.id === "L10" || l.id === "L21" ? ["mock"] : [];
  return (
    <main className="page lesson">
      <nav className="crumbs"><Link to="/lessons">{ar ? "الدروس العملية" : "Practical lessons"}</Link> <span>/</span> {l.where === "yard" ? L(WHERE.yard) : L(WHERE.road)}</nav>
      <div className="lesson-head">
        <span className="shield shield-lg"><span>{l.id}</span></span>
        <div><h1>{L(l)}</h1><p className="muted">{ar ? "الأسبوع" : "Week"} {l.wk}</p></div>
      </div>

      <section className="before">
        <h2>{ar ? "النظري الذي يغطيه هذا الدرس" : "Theory this lesson covers"}</h2>
        <p className="muted">{ar ? "اقرأها قبل الدرس." : "Read these before the lesson."}</p>
        <ul className="theory-links">
          {topics.map((t) => {
            const figs = figCount(t);
            return (
              <li key={t.id} className={p.read[t.id] ? "read" : ""}>
                <Link to={"/theory/" + t.id}>{topicTitle(t, L)}</Link>
                <span className="t-meta">{t.hb.length ? <SrcTag src="moroor" /> : null}{t.hc.length ? <SrcTag src="dvsa" /> : null}{figs ? <span className="pill">{figs} {ar ? "صورة" : "figures"}</span> : null}{p.read[t.id] ? <span className="readmark"><Check size={14} strokeWidth={3} /> {ar ? "مقروء" : "Read"}</span> : null}</span>
                {SUMMARIES[t.id]?.length ? <ul className="key-rules">{SUMMARIES[t.id].filter((r) => r.kind === "never" || r.kind === "must" || r.kind === "priority").slice(0, 3).map((r, k) => <li key={k} className={"rk-" + r.kind}><Md text={L(r)} /></li>)}</ul> : null}
              </li>
            );
          })}
        </ul>
      </section>

      <section>
        <h2>{ar ? "خطة الدرس" : "Lesson plan"} <SrcTag src="darb" /></h2>
        <ul className="plan">{l.items.map((it: any, k: number) => {
          const key = `ls:${l.id}:${k}`, on = !!p.checks[key];
          return <li key={k} className={on ? "on" : ""}><label><input type="checkbox" checked={on} onChange={() => toggle("checks", key)} /><span className="box" aria-hidden="true"><Check size={14} strokeWidth={3} /></span><span className="txt"><Md text={L(it)} /></span></label></li>;
        })}</ul>
      </section>

      {l.dg?.length ? <section><h2>{ar ? "رسوم توضيحية" : "Diagrams"}</h2><div className="dg-grid">{l.dg.map((d: string) => <Diagram key={d} id={d} />)}</div></section> : null}
      {checks.map((c) => <Checklist key={c} id={c} />)}

      <section>
        <h2>{ar ? "قيّم نفسك بعد الدرس" : "Rate yourself after the lesson"} <SrcTag src="dvsa" at="Ready to Pass" /></h2>
        <ul className="skill-rows">
          {l.skills.map((k: number) => { const sk = SK[String(k)]; if (!sk) return null; const lv = p.skills[sk.id]?.level || 0; return (
            <li key={k}><span className="sk-name"><b>{sk.id}.</b> {L(sk)}</span><LevelPicker value={lv} label={L(sk)} onChange={(n) => setSkill(set, user.id, sk.id, n)} /></li>
          ); })}
        </ul>
      </section>

      <p className="done-row">
        <Link className="btn ghost" to={"/log?lesson=" + l.id}><NotebookPen size={16} /> {ar ? "سجّل هذا الدرس" : "Log this lesson"}</Link>
        <button className={"btn" + (p.lessons[l.id] ? " ghost" : "")} onClick={() => toggle("lessons", l.id)}>{p.lessons[l.id] ? <><Check size={16} strokeWidth={3} /> {ar ? "منجز " + p.lessons[l.id].at : "Done " + p.lessons[l.id].at}</> : ar ? "علّم الدرس كمنجز" : "Mark lesson done"}</button>
      </p>
      <nav className="pager">
        {prev ? <Link to={"/lessons/" + prev.id} className="pager-prev"><Back size={16} /><span><small>{prev.id}</small>{L(prev)}</span></Link> : <span />}
        {next ? <Link to={"/lessons/" + next.id} className="pager-next"><span><small>{next.id}</small>{L(next)}</span><Fwd size={16} /></Link> : <span />}
      </nav>
    </main>
  );
}
