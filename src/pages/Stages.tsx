import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useStore, setSkill } from "../lib/store";
import { SKILLS, SKILL_GROUPS, LEVELS, CH, LESSONS } from "../lib/data";
import { STAGES, READY_STEPS, BOOK_STEPS, DVSA_BOOKING } from "../lib/journey";
import { useStageStatus, CORE_SKILLS, TOPICS, topicTitle } from "../lib/progress";
import { Checklist, LevelPicker, Md, NextPrev, Shield, SrcTag, StageHead, StepList } from "../components/ui";
import { Blocks } from "./Theory";

/* ---------- Home: where am I on the road ---------- */
export function JourneyPage() {
  const { L, ar, user, p } = useStore();
  const st = useStageStatus();
  const next = STAGES.find((x) => x.id === st.next)!;
  const Fwd = ar ? ArrowLeft : ArrowRight;
  const firstTopic = TOPICS.find((t) => !p.read[t.id]);
  const firstLesson = LESSONS.find((l) => !p.lessons[l.id]);
  const action = next.id === "theory" && firstTopic ? { to: "/theory/" + firstTopic.id, label: topicTitle(firstTopic, L) }
    : next.id === "lessons" && firstLesson ? { to: "/lessons/" + firstLesson.id, label: firstLesson.id + " · " + L(firstLesson) }
    : { to: next.path, label: L(next) };
  return (
    <main className="page home">
      <section className="next-exit" aria-labelledby="next-h">
        <div className="next-sign">
          <span className="next-label">{ar ? "المخرج التالي" : "Next exit"}</span>
          <div className="next-row"><Shield n={next.n} size="lg" /><h1 id="next-h">{L(next)}</h1></div>
          <p>{ar ? next.dAr : next.dEn}</p>
          <Link className="btn big on-sign" to={action.to}>{action.label} <Fwd size={18} /></Link>
        </div>
        <p className="for">{ar ? `الطريق إلى رخصة ${user.name}` : `The road to ${user.name}'s licence`}</p>
      </section>
      <ol className="road">
        {STAGES.map((x) => {
          const s = st[x.id];
          const state = s.done ? "done" : x.id === st.next ? "here" : "ahead";
          return (
            <li key={x.id} className={"road-stop " + state}>
              <Link to={x.path}>
                <Shield n={x.n} />
                <span className="rs-main"><span className="rs-name">{L(x)}</span><span className="rs-desc">{ar ? x.dAr : x.dEn}</span></span>
                <span className="rs-state">{s.done ? <><Check size={14} strokeWidth={3} /> {ar ? "تم" : "Done"}</> : state === "here" ? (ar ? "أنت هنا" : "You are here") : ""}<small>{s.label}</small></span>
              </Link>
            </li>
          );
        })}
      </ol>
      <section className="sources-note">
        <h2>{ar ? "المصادر" : "Sources"}</h2>
        <ul>
          <li><SrcTag src="moroor" /> {ar ? "دليل القيادة النظري للمتدرب، الإدارة العامة للمرور، الإصدار 1، أبريل 2022. المصدر الأساسي." : "Theoretical Driving Handbook (Trainee), General Department of Traffic, Ver 1, April 2022. The primary source."}</li>
          <li><SrcTag src="dvsa" /> {ar ? "نظام الطرق البريطاني وسجل مهارات DVSA. مرجع داعم؛ عند الاختلاف يطبق النظام السعودي." : "The Highway Code and the DVSA Ready to Pass skills record. Supporting reference; where they differ, Saudi rules apply."}</li>
          <li><SrcTag src="fronx" /> {ar ? "دليل مالك سوزوكي فرونكس." : "Suzuki Fronx owner's manual."}</li>
          <li><SrcTag src="darb" /> {ar ? "ملاحظات تدريبية كتبت لهذا التطبيق." : "Coaching notes written for this app."}</li>
        </ul>
        <p className="muted small">{ar ? "أداة دراسة خاصة غير رسمية، وليست صادرة عن الإدارة العامة للمرور أو تابعة لها." : "Unofficial private study tool. Not produced by or affiliated with the General Department of Traffic (Moroor)."}</p>
      </section>
    </main>
  );
}

export function ReadyPage() {
  const { L, ar } = useStore();
  return (
    <main className="page">
      <StageHead id="ready" />
      <StepList steps={READY_STEPS} />
      {CH["c-driver"] ? <section className="know"><h2>{L(CH["c-driver"])} <SrcTag src="darb" /></h2><ul>{CH["c-driver"].teach.map((x: any, k: number) => <li key={k}><Md text={L(x)} /></li>)}</ul></section> : null}
      <Checklist id="school" />
      <p className="muted">{ar ? "اقرأ أيضا:" : "Also read:"} <Link to="/theory/k1">{ar ? "المسؤوليات النظامية" : "Legal responsibilities"}</Link> · <Link to="/theory/k3">{ar ? "إعداد المقصورة" : "Cockpit checks"}</Link></p>
      <NextPrev id="ready" />
    </main>
  );
}

export function SkillsPage() {
  const { L, ar, p, set, user } = useStore();
  const groups = Object.entries(SKILL_GROUPS).filter(([g]) => g !== "M");
  return (
    <main className="page skills">
      <StageHead id="skills" />
      <p className="measure">{ar ? "قيّم نفسك بصدق في كل مهارة على مقياس DVSA من 1 إلى 5. المستوى 4 يعني جاهز للاختبار." : "Rate yourself honestly on every skill using the DVSA 1 to 5 scale. Level 4 means test-ready."}</p>
      <dl className="level-key">{LEVELS.map((l) => <div key={l.n}><dt><span className="lv fill cur"><span>{l.n}</span></span> {L(l)}</dt><dd>{ar ? l.dAr : l.dEn}</dd></div>)}</dl>
      {groups.map(([g, gv]) => (
        <section key={g} className="skill-group">
          <h2>{L(gv)} {g === "I" ? <SrcTag src="moroor" /> : <SrcTag src="dvsa" at="Ready to Pass" />}</h2>
          <ul className="skill-rows">
            {SKILLS.filter((k) => k.g === g).map((k) => {
              const lv = p.skills[k.id]?.level || 0;
              const hasTopic = TOPICS.some((t) => t.id === "k" + k.id);
              return (
                <li key={k.id} className={lv >= 4 ? "ready" : ""}>
                  <div className="sk-name">
                    <b>{k.id}.</b> {hasTopic ? <Link to={"/theory/k" + k.id}>{L(k)}</Link> : L(k)}
                    <small>{ar ? k.l4Ar : k.l4En}</small>
                    {p.skills[k.id] ? <small className="stamp">{p.skills[k.id].at}</small> : null}
                  </div>
                  <LevelPicker value={lv} label={L(k)} onChange={(n) => setSkill(set, user.id, k.id, n)} />
                </li>
              );
            })}
          </ul>
        </section>
      ))}
      <h2 className="section-title">{ar ? "قوائم التحقق" : "Checklists"}</h2>
      <div className="check-grid">
        {["cockpit", "movingoff", "lanes", "junctions", "roundabouts", "parking"].map((c) => <Checklist key={c} id={c} />)}
      </div>
      <p className="muted">{CORE_SKILLS.length} {ar ? "مهارة" : "skills"}</p>
      <NextPrev id="skills" />
    </main>
  );
}

export function TestsPage() {
  const { ar } = useStore();
  const tests = CH["c-tests"];
  return (
    <main className="page">
      <StageHead id="tests" />
      <h2 className="section-title">{ar ? "المسار السعودي" : "The Saudi route"}</h2>
      <StepList steps={BOOK_STEPS} />
      {tests ? <section className="know"><h2>{ar ? "صيغة الاختبارين" : "What the tests involve"} <SrcTag src="darb" /></h2><ul>{tests.teach.map((x: any, k: number) => <li key={k}><Md text={ar ? x.ar : x.en} /></li>)}</ul><Blocks blocks={tests.blocks} /></section> : null}
      <div className="check-grid">
        <Checklist id="week" />
        <Checklist id="day" />
      </div>
      <Checklist id="mock" />
      <section className="reference">
        <h2>{ar ? "للمقارنة: الحجز في بريطانيا" : "For comparison: booking in the UK"} <SrcTag src="dvsa" /></h2>
        <p className="muted measure">{ar ? "مرجع فقط. لا ينطبق على الرخصة السعودية." : "Reference only. Does not apply to the Saudi licence."}</p>
        <StepList steps={DVSA_BOOKING} bucket={null} />
      </section>
      <NextPrev id="tests" />
    </main>
  );
}

export function LicencePage() {
  const { L, ar, p } = useStore();
  const steps = [
    { id: "lic-fee", src: "darb" as const, en: "Pay the licence fee on Absher", ar: "ادفع رسوم الرخصة عبر أبشر", dEn: "After passing the practical test.", dAr: "بعد اجتياز الاختبار العملي." },
    { id: "lic-collect", src: "darb" as const, en: "Collect the licence", ar: "استلم الرخصة", dEn: "A private licence is valid for up to 10 years, for up to 9 people including the driver, and vehicles up to 3500 kg.", dAr: "الرخصة الخاصة صالحة حتى 10 سنوات، لما يصل إلى 9 أشخاص مع السائق، ومركبات حتى 3500 كغ." },
  ];
  const lic = CH["c-licence"], law = CH["c-law"];
  return (
    <main className="page">
      <StageHead id="licence" />
      <StepList steps={steps} />
      {[lic, law].filter(Boolean).map((c) => (
        <section key={c.id} className="know"><h2>{L(c)} <SrcTag src="darb" /></h2><ul>{c.teach.map((x: any, k: number) => <li key={k}><Md text={L(x)} /></li>)}</ul><Blocks blocks={c.blocks} /></section>
      ))}
      <p><Link className="btn" to="/theory/k1">{ar ? "اقرأ المخالفات والنقاط في دليل المرور" : "Read violations and points in the Moroor handbook"}</Link> {p.read.k1 ? <span className="readmark"><Check size={14} /> {ar ? "مقروء" : "Read"}</span> : null}</p>
      <NextPrev id="licence" />
    </main>
  );
}
