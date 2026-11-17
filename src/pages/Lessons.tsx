import { Link, useParams } from "react-router-dom";
import { Check, ArrowLeft, ArrowRight, NotebookPen, BookOpen, Car, Footprints, Target, ParkingSquare, Route, Milestone, GraduationCap } from "lucide-react";
import { useStore, setSkill } from "../lib/store";
import { LESSONS, LES, SK, THEORY_ONLY, FIG } from "../lib/data";
import { TOPICS, topicTitle } from "../lib/progress";
import { Checklist, LevelPicker, Md, NextPrev, SrcTag, StageHead, ColourKey } from "../components/ui";
import { Diagram, HbFigure } from "../components/sources";
import { KINDS } from "../components/rules";

export const WHERE: Record<string, { en: string; ar: string; dEn: string; dAr: string; Icon: any }> = {
  quiet: { en: "Quiet roads and car parks", ar: "طرق هادئة ومواقف فارغة", dEn: "With your instructor, away from busy traffic: control, steering and the test manoeuvres.", dAr: "مع مدربك بعيدا عن الزحام: التحكم والتوجيه ومناورات الاختبار.", Icon: ParkingSquare },
  road: { en: "Town and city roads", ar: "طرق المدينة", dEn: "Real traffic: junctions, lights, roundabouts, U-turns.", dAr: "مرور حقيقي: تقاطعات وإشارات ودوارات ودوران للخلف.", Icon: Route },
  highway: { en: "Highways", ar: "الطرق السريعة", dEn: "Joining, lane discipline and leaving at speed.", dAr: "الدخول والالتزام بالمسار والخروج بسرعة.", Icon: Milestone },
};
const APPLIES: Record<string, { en: string; ar: string }> = {
  fronx: { en: "Your Fronx", ar: "فرونكس فقط" },
  all: { en: "All cars", ar: "كل السيارات" },
  manual: { en: "Manual cars", ar: "السيارات اليدوية" },
};
const ORDER = ["never", "must", "priority", "number", "danger", "tip"];

/** Theory topics a lesson relies on. */
export function topicsForLesson(l: any) {
  const ids = new Set<string>([...(l.before || []).map((b: any) => b.topic).filter(Boolean), ...l.skills.map((k: number) => "k" + k)]);
  return TOPICS.filter((t) => ids.has(t.id));
}

export function LessonsPage() {
  const { L, ar, p, s, user } = useStore();
  const logged = new Set(s.logs.filter((x) => x.userId === user.id).flatMap((x) => x.lessons));
  return (
    <main className="page">
      <StageHead id="lessons" />
      <div className="how-it-works">
        <div><BookOpen size={22} /><b>{ar ? "قبل أن نبدأ" : "Before we start"}</b><span>{ar ? "اقرأ النظري للدرس" : "Read the lesson's theory"}</span></div>
        <div><Footprints size={22} /><b>{ar ? "خطوة بخطوة" : "Step by step"}</b><span>{ar ? "تدرب مع المدرب" : "Practise with the instructor"}</span></div>
        <div><Target size={22} /><b>{ar ? "تحقق" : "Check"}</b><span>{ar ? "هل أتقنته؟" : "Have you got it?"}</span></div>
        <div><NotebookPen size={22} /><b>{ar ? "سجّل" : "Log"}</b><span>{ar ? "سجّل الجلسة" : "Log the session"}</span></div>
      </div>
      {Object.entries(WHERE).map(([w, info]) => {
        const list = LESSONS.filter((l) => l.where === w);
        if (!list.length) return null;
        const done = list.filter((l) => p.lessons[l.id]).length;
        return (
          <section key={w} className="lesson-group">
            <h2><info.Icon size={22} aria-hidden="true" /> {L(info)} <span className="count">{done}/{list.length}</span></h2>
            <p className="muted">{ar ? info.dAr : info.dEn}</p>
            <ol className="lesson-list">
              {list.map((l) => (
                <li key={l.id} className={p.lessons[l.id] ? "done" : ""}>
                  <Link to={"/lessons/" + l.id}>
                    <span className="l-id">{l.id}</span>
                    <span className="l-main"><span className="l-name">{L(l)}</span><span className="l-meta">{ar ? "الأسبوع" : "Week"} {l.wk} · {l.before.length} {ar ? "نقطة نظرية" : "theory points"} · {l.steps.length} {ar ? "خطوات" : "steps"}{logged.has(l.id) ? (ar ? " · مسجل" : " · logged") : ""}</span></span>
                    <span className="l-state">{p.lessons[l.id] ? <Check size={18} strokeWidth={3} /> : null}</span>
                  </Link>
                </li>
              ))}
            </ol>
          </section>
        );
      })}
      <section className="lesson-group">
        <h2><GraduationCap size={22} aria-hidden="true" /> {ar ? "نظري فقط" : "Theory only"}</h2>
        <p className="muted">{ar ? "أشياء لا تُتدرب عليها في السيارة لكنها في الاختبار." : "Things you can't practise in the car but will be tested on."}</p>
        <ol className="lesson-list">
          {THEORY_ONLY.map((t) => (
            <li key={t.id} className={p.read["to:" + t.id] ? "done" : ""}><Link to={"/lessons/" + t.id}><span className="l-id">{t.id}</span><span className="l-main"><span className="l-name">{L(t)}</span><span className="l-meta">{t.points.length} {ar ? "نقطة" : "points"}</span></span><span className="l-state">{p.read["to:" + t.id] ? <Check size={18} strokeWidth={3} /> : null}</span></Link></li>
          ))}
        </ol>
      </section>
      <NextPrev id="lessons" />
    </main>
  );
}

function Points({ points }: { points: any[] }) {
  const { L, ar } = useStore();
  const sorted = [...points].sort((a, b) => ORDER.indexOf(a.kind) - ORDER.indexOf(b.kind));
  return (
    <ul className="before-list">
      {sorted.map((b, k) => {
        const K = KINDS[b.kind as keyof typeof KINDS];
        const f = b.fig ? FIG[b.fig] : null;
        return (
          <li key={k} className={"bp rk-" + b.kind}>
            <span className="bp-kind">{K ? <K.Icon size={15} strokeWidth={2.5} aria-hidden="true" /> : null}{K ? L(K) : ""}</span>
            <div className="bp-body">
              <p><Md text={L(b)} /> <SrcTag src={b.src} at={b.ref ? (b.src === "moroor" ? (ar ? "ص " : "p. ") : b.src === "dvsa" ? (ar ? "قاعدة " : "Rule ") : "") + b.ref : undefined} /></p>
              {f ? <HbFigure f={f} n={k + 1} /> : null}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export function LessonPage() {
  const { id = "" } = useParams();
  const { L, ar, p, toggle, set, user } = useStore();
  const Back = ar ? ArrowRight : ArrowLeft, Fwd = ar ? ArrowLeft : ArrowRight;
  const to = THEORY_ONLY.find((t) => t.id === id);
  if (to) {
    return (
      <main className="page lesson">
        <nav className="crumbs"><Link to="/lessons">{ar ? "الدروس" : "Lessons"}</Link> <span>/</span> {ar ? "نظري فقط" : "Theory only"}</nav>
        <div className="lesson-head"><span className="shield shield-lg"><span>{to.id}</span></span><div><h1>{L(to)}</h1></div></div>
        <ColourKey />
        <Points points={to.points} />
        <p className="done-row"><button className={"btn" + (p.read["to:" + to.id] ? " ghost" : "")} onClick={() => toggle("read", "to:" + to.id)}>{p.read["to:" + to.id] ? <><Check size={16} strokeWidth={3} /> {ar ? "مقروء" : "Read"}</> : ar ? "علّم كمقروء" : "Mark as read"}</button></p>
      </main>
    );
  }
  const l = LES[id];
  if (!l) return <main className="page"><p>{ar ? "الدرس غير موجود." : "Lesson not found."} <Link to="/lessons">{ar ? "الدروس" : "Lessons"}</Link></p></main>;
  const i = LESSONS.indexOf(l), prev = LESSONS[i - 1], next = LESSONS[i + 1];
  const topics = topicsForLesson(l);
  const checks = l.id === "L10" || l.id === "L21" ? ["mock"] : [];
  const where = WHERE[l.where] || WHERE.road;
  const stepKey = (k: number) => `st:${l.id}:${k}`;
  const stepsDone = l.steps.filter((_: any, k: number) => p.checks[stepKey(k)]).length;
  return (
    <main className="page lesson">
      <nav className="crumbs"><Link to="/lessons">{ar ? "الدروس العملية" : "Practical lessons"}</Link> <span>/</span> {L(where)}</nav>
      <div className="lesson-head">
        <span className="shield shield-lg"><span>{l.id}</span></span>
        <div><h1>{L(l)}</h1><p className="muted">{ar ? "الأسبوع" : "Week"} {l.wk} · <where.Icon size={15} aria-hidden="true" /> {L(where)}</p></div>
      </div>
      <nav className="on-page" aria-label={ar ? "في هذه الصفحة" : "On this page"}>
        {[["before", ar ? "١ قبل أن نبدأ" : "1 Before we start"], ["car", ar ? "٢ السيارة" : "2 The car"], ["steps", ar ? "٣ خطوة بخطوة" : "3 Step by step"], ["check", ar ? "٤ هل أتقنته؟" : "4 Got it?"], ["rate", ar ? "٥ قيّم وسجّل" : "5 Rate and log"]].map(([a, t]) => <a key={a} href={"#" + a} onClick={(e) => { e.preventDefault(); document.getElementById(a)?.scrollIntoView({ behavior: "smooth" }); }}>{t}</a>)}
      </nav>

      <section id="before" className="anchor before-block">
        <h2 className="plate"><BookOpen size={18} aria-hidden="true" /> {ar ? "قبل أن نبدأ" : "Before we start"}</h2>
        <p className="muted measure">{ar ? "النظري الذي ستحتاجه في هذا الدرس، من دليل المرور ونظام الطرق البريطاني. اقرأه قبل أن تجلس خلف المقود." : "The theory this lesson uses, from the Moroor handbook and the Highway Code. Read it before you get in the driving seat."}</p>
        <ColourKey />
        <Points points={l.before} />
        {topics.length ? <p className="row"><span className="muted">{ar ? "للمزيد:" : "Read more:"}</span> {topics.map((t) => <Link key={t.id} className="chip" to={"/theory/" + t.id}>{p.read[t.id] ? <Check size={13} strokeWidth={3} /> : null}{topicTitle(t, L)}</Link>)}</p> : null}
        {l.dg?.length ? <div className="dg-grid">{l.dg.map((d: string) => <Diagram key={d} id={d} />)}</div> : null}
      </section>

      {l.car?.length ? (
        <section id="car" className="anchor">
          <h2 className="plate"><Car size={18} aria-hidden="true" /> {ar ? "السيارة في هذا الدرس" : "The car in this lesson"}</h2>
          <ul className="car-notes">
            {l.car.map((c: any, k: number) => (
              <li key={k} className={"ap-" + c.applies}>
                <span className={"applies ap-" + c.applies}>{L(APPLIES[c.applies] || APPLIES.all)}</span>
                <span><Md text={L(c)} />{c.ref ? <span className="muted"> · {c.ref}</span> : null}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section id="steps" className="anchor">
        <h2 className="plate"><Footprints size={18} aria-hidden="true" /> {ar ? "خطوة بخطوة" : "Step by step"} <span className="plate-count"><bdi>{stepsDone}/{l.steps.length}</bdi></span></h2>
        <ol className="steps-simple">
          {l.steps.map((st: any, k: number) => {
            const on = !!p.checks[stepKey(k)];
            return (
              <li key={k} className={on ? "on" : ""}>
                <button className="step-tick" aria-pressed={on} aria-label={(ar ? "الخطوة " : "Step ") + (k + 1)} onClick={() => toggle("checks", stepKey(k))}>{on ? <Check size={18} strokeWidth={3} /> : k + 1}</button>
                <p><Md text={L(st)} />{st.applies === "fronx" ? <span className="applies ap-fronx">{L(APPLIES.fronx)}</span> : null}</p>
              </li>
            );
          })}
        </ol>
      </section>

      <section id="check" className="anchor">
        <h2 className="plate"><Target size={18} aria-hidden="true" /> {ar ? "أتقنته عندما…" : "You've got it when…"}</h2>
        <ul className="got-it">{l.check.map((c: any, k: number) => <li key={k}><Check size={16} strokeWidth={3} aria-hidden="true" /> <Md text={L(c)} /></li>)}</ul>
      </section>
      {checks.map((c) => <Checklist key={c} id={c} />)}

      <section id="rate" className="anchor">
        <h2 className="plate"><NotebookPen size={18} aria-hidden="true" /> {ar ? "قيّم نفسك وسجّل" : "Rate yourself and log"} <SrcTag src="dvsa" at="Ready to Pass" /></h2>
        <ul className="skill-rows">
          {l.skills.map((k: number) => { const sk = SK[String(k)]; if (!sk) return null; const lv = p.skills[sk.id]?.level || 0; return (
            <li key={k}><span className="sk-name"><b>{sk.id}.</b> {L(sk)}<small>{ar ? sk.l4Ar : sk.l4En}</small></span><LevelPicker value={lv} label={L(sk)} onChange={(n) => setSkill(set, user.id, sk.id, n)} /></li>
          ); })}
        </ul>
        <p className="done-row">
          <Link className="btn ghost" to={"/log?lesson=" + l.id}><NotebookPen size={16} /> {ar ? "سجّل جلسة" : "Log a session"}</Link>
          <button className={"btn" + (p.lessons[l.id] ? " ghost" : "")} onClick={() => toggle("lessons", l.id)}>{p.lessons[l.id] ? <><Check size={16} strokeWidth={3} /> {ar ? "منجز " + p.lessons[l.id].at : "Done " + p.lessons[l.id].at}</> : ar ? "علّم الدرس كمنجز" : "Mark lesson done"}</button>
        </p>
      </section>
      <nav className="pager">
        {prev ? <Link to={"/lessons/" + prev.id} className="pager-prev"><Back size={16} /><span><small>{prev.id}</small>{L(prev)}</span></Link> : <span />}
        {next ? <Link to={"/lessons/" + next.id} className="pager-next"><span><small>{next.id}</small>{L(next)}</span><Fwd size={16} /></Link> : <span />}
      </nav>
    </main>
  );
}
