import { Link, useParams } from "react-router-dom";
import { Check, ArrowLeft, ArrowRight, NotebookPen, BookOpen, Car, Footprints, Target, ParkingSquare, Route, Milestone, GraduationCap } from "lucide-react";
import { useStore, setSkill } from "../lib/store";
import { LESSONS, LES, SK, THEORY_ONLY, FIG, FIGURES, DIAGRAMS, HC, hcImg, CAR, SIGN_PLAN, SIGN, META } from "../lib/data";
import { TOPICS, topicTitle } from "../lib/progress";
import { Checklist, LevelPicker, Md, NextPrev, SrcTag, StageHead, ColourKey } from "../components/ui";
import { firstLessonPack } from "../lib/lesson0";
import { Diagram, HbFigure } from "../components/sources";
import { KINDS } from "../components/rules";
import { SCENES, LESSON_SCENES } from "../illustrations";

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

/** "130", "142–144", "38, 43" -> [130, 142, 143, 144, 38, 43] */
export function pages(ref?: string) {
  if (!ref) return [] as number[];
  return String(ref).split(/[,،]/).flatMap((part) => { const m = part.match(/(\d+)\s*[–-]\s*(\d+)/); if (m) { const a = +m[1], b = +m[2]; return b - a < 40 ? Array.from({ length: b - a + 1 }, (_, i) => a + i) : [a, b]; } const n = part.match(/\d+/); return n ? [+n[0]] : []; });
}
/** Every Moroor figure and DVSA diagram/picture behind a set of theory points. */
export function picturesFor(points: any[], dg: string[] = []) {
  const mp = new Set(points.filter((b) => b.src === "moroor").flatMap((b) => pages(b.ref)));
  const hr = new Set(points.filter((b) => b.src === "dvsa").flatMap((b) => pages(b.ref)));
  const ids = new Set(points.map((b) => b.fig).filter(Boolean));
  const moroor = FIGURES.filter((f) => mp.has(f.page) || ids.has(f.id));
  const diagrams = DIAGRAMS.filter((d) => dg.includes(d.id) || (typeof d.rule === "number" && hr.has(d.rule)));
  const hcPics = [...hr].flatMap((n) => (HC.rules[String(n)]?.b || []).filter((b: any) => b.k === "img").map((b: any) => ({ key: b.key, rule: n })));
  return { moroor, diagrams, hcPics };
}

function Pictures({ points, dg }: { points: any[]; dg?: string[] }) {
  const { ar } = useStore();
  const { moroor, diagrams, hcPics } = picturesFor(points, dg);
  if (!moroor.length && !diagrams.length && !hcPics.length) return null;
  return (
    <div className="lesson-pics">
      <h3>{ar ? "الصور والرسوم" : "Pictures and diagrams"} <span className="count-note">{moroor.length + diagrams.length + hcPics.length}</span></h3>
      {moroor.length ? <><p className="pics-src"><SrcTag src="moroor" /></p><div className="figs strip">{moroor.map((f, k) => <HbFigure key={f.id} f={f} n={k + 1} />)}</div></> : null}
      {diagrams.length || hcPics.length ? <><p className="pics-src"><SrcTag src="dvsa" /></p><div className="figs strip">{diagrams.map((d) => <Diagram key={d.id} id={d.id} />)}{hcPics.map((h) => <figure key={h.key} className="hbfig"><img src={hcImg(h.key)} alt="" loading="lazy" /><figcaption><span className="fig-no">{ar ? "قاعدة" : "Rule"} {h.rule}</span></figcaption></figure>)}</div></> : null}
    </div>
  );
}

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
      <ol className="lesson-list l0">
        <li className={p.read["L0"] ? "done" : ""}><Link to="/lessons/L0"><span className="l-id">L0</span><span className="l-main"><span className="l-name">{ar ? "قبل الدرس الأول" : "Before your first lesson"}</span><span className="l-meta">{ar ? "كل ما لا تغطيه الدروس العملية من النظري ودليل السيارة" : "Everything from the theory and the car manual that the practical lessons don't cover"}</span></span><span className="l-state">{p.read["L0"] ? <Check size={18} strokeWidth={3} /> : null}</span></Link></li>
      </ol>
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
      <NextPrev id="lessons" />
    </main>
  );
}

/** The signs this lesson introduces, large, with where to find each in the Signs tab. */
function LessonSigns({ id }: { id: string }) {
  const { L, ar, p } = useStore();
  const plan = SIGN_PLAN[id];
  if (!plan?.signs.length) return null;
  const list = plan.signs.map((s) => SIGN[s]).filter(Boolean);
  const before = LESSONS.slice(0, LESSONS.findIndex((l) => l.id === id)).reduce((n, l) => n + (SIGN_PLAN[l.id]?.signs.length || 0), 0);
  const total = Object.values(SIGN_PLAN).reduce((n, v) => n + v.signs.length, 0);
  return (
    <div className="lesson-signs">
      <h3>🚦 {ar ? `إشارات هذا الدرس (${list.length})` : `Signs in this lesson (${list.length})`}</h3>
      <p className="muted small">{L(plan.why)} · <bdi>{before + list.length}/{total}</bdi> {ar ? "إشارة بنهاية هذا الدرس" : "signs met by the end of this lesson"}</p>
      <ul className="ls-grid">
        {list.map((x) => (
          <li key={x.id} className={p.known[x.id] ? "known" : ""}>
            <span className="ls-imgs">{x.imgs.map((im: any) => <span key={im.src} className="ls-img"><img src={im.src} alt="" loading="lazy" /><SrcTag src={im.o === "ksa" ? "moroor" : "dvsa"} /></span>)}</span>
            <b>{L(x)}</b>
            {x.mEn ? <span className="ls-mean">{ar ? x.mAr : x.mEn}</span> : null}
            <Link className="ls-where" to={"/theory/signs?cat=" + x.cat + "&sign=" + x.id}>📍 {ar ? "في تبويب الإشارات: " : "Signs tab: "}{L(META.cats[x.cat])}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Theory points grouped by kind (Never, Must, Priority...), one heading per group instead of a badge on every line. */
function Points({ points }: { points: any[] }) {
  const { L, ar } = useStore();
  let n = 0;
  return (
    <div className="pt-groups">
      {ORDER.map((kind) => {
        const list = points.filter((b) => b.kind === kind);
        if (!list.length) return null;
        const K = KINDS[kind as keyof typeof KINDS];
        return (
          <section key={kind} className={"pt-group rk-" + kind}>
            <h3 className="pt-head">{K ? <K.Icon size={17} strokeWidth={2.5} aria-hidden="true" /> : null}{K ? L(K) : kind}<span className="pt-count">{list.length}</span></h3>
            <ul>
              {list.map((b, k) => {
                const f = b.fig ? FIG[b.fig] : null;
                return (
                  <li key={k}>
                    <p><Md text={L(b)} /> <SrcTag src={b.src} at={b.ref ? (b.src === "moroor" ? (ar ? "ص " : "p. ") : b.src === "dvsa" ? (ar ? "قاعدة " : "Rule ") : "") + b.ref : undefined} /></p>
                    {f ? <HbFigure f={f} n={++n} /> : null}
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </div>
  );
}

/** Lesson at a glance: where, what you'll practise, the 3 rules that matter most, and progress. */
function Glance({ l }: { l: any }) {
  const { L, ar, p } = useStore();
  const where = WHERE[l.where] || WHERE.road;
  const key = l.before.filter((b: any) => b.kind === "never" || b.kind === "must").slice(0, 3);
  const steps = l.steps.filter((_: any, k: number) => p.checks[`st:${l.id}:${k}`]).length;
  const signs = SIGN_PLAN[l.id]?.signs.length || 0;
  return (
    <div className="glance">
      <div className="gl-facts">
        <span><where.Icon size={16} aria-hidden="true" /> {L(where)}</span>
        <span>📖 {l.before.length} {ar ? "نقطة نظرية" : "theory points"}</span>
        {signs ? <span>🚦 {signs} {ar ? "إشارة جديدة" : "new signs"}</span> : null}
        <span>👣 <bdi>{steps}/{l.steps.length}</bdi> {ar ? "خطوات" : "steps done"}</span>
      </div>
      {key.length ? <div className="gl-key"><b>{ar ? "أهم ما يجب تذكره" : "If you remember only three things"}</b><ol>{key.map((b: any, k: number) => <li key={k}><Md text={L(b)} /></li>)}</ol></div> : null}
    </div>
  );
}

export function LessonPage() {
  const { id = "" } = useParams();
  const { L, ar, p, toggle, set, user } = useStore();
  const Back = ar ? ArrowRight : ArrowLeft, Fwd = ar ? ArrowLeft : ArrowRight;
  if (id === "L0") {
    const pack = firstLessonPack();
    return (
      <main className="page lesson">
        <nav className="crumbs"><Link to="/lessons">{ar ? "الدروس العملية" : "Practical lessons"}</Link></nav>
        <div className="lesson-head"><span className="shield shield-lg"><span>L0</span></span><div><h1>{ar ? "قبل الدرس الأول" : "Before your first lesson"}</h1><p className="muted">{ar ? "ادرس هذا في البيت. لا يُتدرب عليه في السيارة، لكنه في الاختبار." : "Study this at home. You can't practise it in the car, but it is in the test."}</p></div></div>
        <ColourKey />
        {pack.theoryOnly.map((t, k) => (
          <section key={t.id} className="anchor">
            <h2 className="plate"><span className="sec-no">{k + 1}</span> <GraduationCap size={18} aria-hidden="true" /> {L(t)}</h2>
            <Points points={t.points} />
            <Pictures points={t.points} />
          </section>
        ))}
        {pack.leftoverRules.length ? <section className="anchor"><h2 className="plate"><span className="sec-no">{pack.theoryOnly.length + 1}</span> <BookOpen size={18} aria-hidden="true" /> {ar ? "قواعد أخرى" : "Other rules"}</h2><Points points={pack.leftoverRules} /><Pictures points={pack.leftoverRules} /></section> : null}
        {pack.carLeft.length ? (
          <section className="anchor">
            <h2 className="plate"><span className="sec-no">{pack.theoryOnly.length + 2}</span> <Car size={18} aria-hidden="true" /> {ar ? "من دليل السيارة" : "From the car manual"}</h2>
            {pack.carLeft.map((sec: any) => (
              <div key={sec.id}><h3>{L(sec)}</h3>
                <ul className="car-notes">{sec.items.map((it: any) => <li key={it.id}><span className={"applies ap-" + (it.variant === "both" || !it.variant ? "fronx" : "fronx")}>{L(APPLIES.fronx)}</span><span><Md text={L(it)} /> <span className="muted">· {ar ? "ص" : "p."} {it.page}</span></span></li>)}</ul>
              </div>
            ))}
          </section>
        ) : null}
        <p className="done-row"><button className={"btn" + (p.read.L0 ? " ghost" : "")} onClick={() => toggle("read", "L0")}>{p.read.L0 ? <><Check size={16} strokeWidth={3} /> {ar ? "تمت الدراسة" : "Studied"}</> : ar ? "علّم كمدروس" : "Mark as studied"}</button></p>
        <nav className="pager"><span /><Link to={"/lessons/" + LESSONS[0].id} className="pager-next"><span><small>{LESSONS[0].id}</small>{L(LESSONS[0])}</span><Fwd size={16} /></Link></nav>
      </main>
    );
  }
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
        <div><h1>{L(l)}</h1><p className="muted">{ar ? "الأسبوع" : "Week"} {l.wk}</p></div>
      </div>
      <Glance l={l} />
      {LESSON_SCENES[l.id]?.length ? <div className="scenes">{LESSON_SCENES[l.id].map((sid) => { const S = SCENES[sid]; return S ? <figure key={sid} className="scene"><S.C ar={ar} /><figcaption>{L(S)}</figcaption></figure> : null; })}</div> : null}

      <section id="before" className="anchor before-block">
        <h2 className="plate"><span className="sec-no">1</span> <BookOpen size={18} aria-hidden="true" /> {ar ? "النظري: قبل أن نبدأ" : "Theory: before we start"}</h2>
        <p className="muted measure">{ar ? "النظري الذي ستحتاجه في هذا الدرس، من دليل المرور ونظام الطرق البريطاني. اقرأه قبل أن تجلس خلف المقود." : "The theory this lesson uses, from the Moroor handbook and the Highway Code. Read it before you get in the driving seat."}</p>
        <ColourKey />
        <Points points={l.before} />
        <Pictures points={l.before} dg={l.dg} />
        <LessonSigns id={l.id} />
        {topics.length ? <p className="row"><span className="muted">{ar ? "للمزيد:" : "Read more:"}</span> {topics.map((t) => <Link key={t.id} className="chip" to={"/theory/" + t.id}>{p.read[t.id] ? <Check size={13} strokeWidth={3} /> : null}{topicTitle(t, L)}</Link>)}</p> : null}
      </section>

      {l.car?.length ? (
        <section id="car" className="anchor">
          <h2 className="plate"><span className="sec-no">2</span> <Car size={18} aria-hidden="true" /> {ar ? "معرفة السيارة" : "Car know-how"}</h2>
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
        <h2 className="plate"><span className="sec-no">3</span> <Footprints size={18} aria-hidden="true" /> {ar ? "خطة التدريب العملي" : "Practical plan"} <span className="plate-count"><bdi>{stepsDone}/{l.steps.length}</bdi></span></h2>
        <ol className="steps-simple">
          {l.steps.map((st: any, k: number) => {
            const on = !!p.checks[stepKey(k)];
            return (
              <li key={k} className={on ? "on" : ""}>
                <button className="step-tick" aria-pressed={on} aria-label={(ar ? "الخطوة " : "Step ") + (k + 1)} onClick={() => toggle("checks", stepKey(k))}>{on ? <Check size={18} strokeWidth={3} /> : k + 1}</button>
                <div className="step-body"><p><Md text={L(st)} />{st.applies === "fronx" ? <span className="applies ap-fronx">{L(APPLIES.fronx)}</span> : null}</p>{st.why ? <p className="why-line"><span>{ar ? "ماذا يعني هذا؟" : "What this means:"}</span> <Md text={L(st.why)} /></p> : null}</div>
              </li>
            );
          })}
        </ol>
      </section>

      <section id="check" className="anchor">
        <h3 className="got-h"><Target size={18} aria-hidden="true" /> {ar ? "أتقنته عندما…" : "You've got it when…"}</h3>
        <ul className="got-it">{l.check.map((c: any, k: number) => <li key={k}><Check size={16} strokeWidth={3} aria-hidden="true" /> <Md text={L(c)} /></li>)}</ul>
      </section>
      {checks.map((c) => <Checklist key={c} id={c} />)}

      <section id="rate" className="anchor">
        <h2 className="plate"><span className="sec-no">4</span> <NotebookPen size={18} aria-hidden="true" /> {ar ? `قيّم ${user.name}` : `Rate ${user.name}`} <SrcTag src="dvsa" at="Ready to Pass" /></h2>
        <p className="muted measure">{ar ? "التقييم يظهر تلقائيا في صفحة المهارات، مع سجل الجلسات والملاحظات." : "Ratings show up automatically on the Skills page, with the session log and notes."}</p>
        <ul className="skill-rows">
          {l.skills.map((k: number) => { const sk = SK[String(k)]; if (!sk) return null; const lv = p.skills[sk.id]?.level || 0; return (
            <li key={k}><span className="sk-name"><b>{sk.id}.</b> {L(sk)}<small>{ar ? sk.l4Ar : sk.l4En}</small></span><LevelPicker value={lv} label={L(sk)} onChange={(n) => setSkill(set, user.id, sk.id, n)} /></li>
          ); })}
        </ul>
        <p className="done-row">
          <Link className="btn ghost" to={"/skills?lesson=" + l.id + "#log"}><NotebookPen size={16} /> {ar ? "سجّل الجلسة وملاحظاتها" : "Log this session and notes"}</Link>
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
