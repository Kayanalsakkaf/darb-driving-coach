import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { NotebookPen, ClipboardCheck, ListChecks, Flag, IdCard } from "lucide-react";
import { TheoryTestPage } from "./TheoryTest";
import { YouTube, VIDEOS } from "../components/YouTube";
import { LogPage } from "./Log";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useStore, setSkill } from "../lib/store";
import { SKILLS, SKILL_GROUPS, LEVELS, CH, LESSONS, THEORY_ONLY, CAR } from "../lib/data";
import { STAGES, READY_STEPS, BOOK_STEPS, DVSA_BOOKING } from "../lib/journey";
import { useStageStatus, CORE_SKILLS, TOPICS, topicTitle, useSkillLevels } from "../lib/progress";
import { Checklist, LevelPicker, Md, NextPrev, Shield, SrcTag, StageHead, StepList } from "../components/ui";
import { Blocks } from "./Theory";
import { SKILL_COVERS } from "../illustrations";
import { STAGE_HUE } from "../components/Street";

/* ---------- Home: where am I on the road ---------- */
export function JourneyPage() {
  const { L, ar, user, p } = useStore();
  const st = useStageStatus();
  const next = STAGES.find((x) => x.id === st.next)!;
  const Fwd = ar ? ArrowLeft : ArrowRight;
  const firstTopic = TOPICS.find((t) => !p.read[t.id]);
  const firstLesson = LESSONS.find((l) => !p.lessons[l.id]);
  void firstTopic;
  const action = !p.read.L0 ? { to: "/lessons/L0", label: ar ? "L0 · قبل الدرس الأول" : "L0 · Before your first lesson" }
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
            <li key={x.id} className={"road-stop " + state} style={{ ["--stop-hue" as any]: STAGE_HUE[x.id] }}>
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

export function SkillsPage() {
  const { L, ar, p, set, user, s: st } = useStore();
  const loc = useLocation();
  useEffect(() => { if (loc.hash === "#log" || new URLSearchParams(loc.search).get("lesson")) setTimeout(() => document.getElementById("log")?.scrollIntoView({ behavior: "smooth" }), 50); }, [loc.key]);
  const groups = Object.entries(SKILL_GROUPS).filter(([g]) => g !== "M");
  const logs = st.logs.filter((x) => x.userId === user.id).slice().sort((a, b) => (a.date < b.date ? -1 : 1));
  const history = (id: string) => logs.flatMap((x) => x.skills.filter((k) => k.id === id).map((k) => ({ date: x.date, level: k.level, lessons: x.lessons, notes: x.notes })));
  const auto = useSkillLevels();
  const counts = LEVELS.map((l) => CORE_SKILLS.filter((k) => (auto[k.id]?.level || 0) === l.n).length);
  return (
    <main className="page skills">
      <StageHead id="skills" />
      <section className="check-top">
        <h2 className="plate">✅ {ar ? "قوائم التحقق" : "Checklists"}</h2>
        <div className="check-grid">
          {["cockpit", "movingoff", "lanes", "junctions", "roundabouts", "parking"].map((c) => <Checklist key={c} id={c} />)}
        </div>
      </section>
      <section className="scale-explainer" aria-labelledby="scale-h">
        <h2 id="scale-h">{ar ? `مقياس المهارات: أين ${user.name} الآن؟` : `The skill scale: where is ${user.name} now?`}</h2>
        <ol className="scale-road">
          {LEVELS.map((l, i) => (
            <li key={l.n} className={"lv-" + l.n}>
              <span className="scale-name">{L(l)}</span>
              <span className="scale-desc">{ar ? l.dAr : l.dEn}</span>
              <span className="scale-count"><bdi>{counts[i]}</bdi> {ar ? "مهارة" : counts[i] === 1 ? "skill" : "skills"}</span>
            </li>
          ))}
        </ol>
        <p className="muted small">{ar ? "تمتلئ المستويات تلقائيا من الخطوات المنجزة والدروس المكتملة والجلسات المسجلة ومربعات «أتقنته»؛ «مستقل» يحتاج 3 جلسات أو أكثر وكل مربعات «أتقنته». قيّم يدويا للتعديل (اضغط المستوى نفسه مرة أخرى للعودة إلى التلقائي). «التأمل» يقيّمه شخص دائما. «مستقل» يعني جاهز للاختبار." : "Levels fill in automatically from ticked steps, finished lessons, logged sessions and the “You’ve got it when” boxes: Independent needs 3+ sessions and every “You’ve got it when” box ticked. Rate by hand to override (tap the same level again to go back to automatic). Reflection is always rated by a person. Independent means test-ready."}</p>
      </section>

      {groups.map(([g, gv]) => (
        <section key={g} className="skill-group">
          {SKILL_COVERS[g] ? <div className="sg-cover" aria-hidden="true">{(() => { const C = SKILL_COVERS[g]; return <C />; })()}</div> : null}
          <h2>{L(gv)} {g === "I" ? <SrcTag src="moroor" /> : <SrcTag src="dvsa" at="Ready to Pass" />}</h2>
          <ul className="skill-rows">
            {SKILLS.filter((k) => k.g === g).map((k) => {
              const lv = auto[k.id]?.level || 0;
              const hasTopic = TOPICS.some((t) => t.id === "k" + k.id);
              const h = history(k.id);
              return (
                <li key={k.id} className={lv >= 4 ? "ready" : ""}>
                  <div className="sk-name">
                    <b>{k.id}.</b> {hasTopic ? <Link to={"/theory/k" + k.id}>{L(k)}</Link> : L(k)}
                    <small>{ar ? k.l4Ar : k.l4En}</small>
                    {h.length ? <span className="sk-trail" aria-label={ar ? "التقدم عبر الجلسات" : "Progress across sessions"}>{h.slice(-6).map((x, i) => <span key={i} className={"trail-dot lv-" + x.level} title={x.date + " · " + L(LEVELS[x.level - 1]) + (x.lessons.length ? " · " + x.lessons.join(", ") : "")}>{L(LEVELS[x.level - 1]).slice(0, ar ? 3 : 1)}</span>)}<small><bdi>{h[h.length - 1].date}</bdi></small></span> : p.skills[k.id] ? <small className="stamp">{p.skills[k.id].at}</small> : null}
                  </div>
                  <LevelPicker value={p.skills[k.id]?.level || 0} auto={auto[k.id]} label={L(k)} onChange={(n) => setSkill(set, user.id, k.id, n)} />
                </li>
              );
            })}
          </ul>
        </section>
      ))}

      <section id="log" className="anchor log-block">
        <h2 className="plate"><NotebookPen size={18} aria-hidden="true" /> {ar ? "سجل الجلسات والملاحظات" : "Session log and notes"}</h2>
        <LogPage embedded />
      </section>

      <NextPrev id="skills" />
    </main>
  );
}

export function TestsPage() {
  const { L, ar } = useStore();
  const tests = CH["c-tests"];
  const licSteps = [
    { id: "lic-fee", src: "darb" as const, en: "Pay the licence fee on Absher", ar: "ادفع رسوم الرخصة عبر أبشر", dEn: "After passing the practical test.", dAr: "بعد اجتياز الاختبار العملي." },
    { id: "lic-collect", src: "darb" as const, en: "Collect the licence", ar: "استلم الرخصة", dEn: "A private licence is valid for up to 10 years, for up to 9 people including the driver, and vehicles up to 3500 kg.", dAr: "الرخصة الخاصة صالحة حتى 10 سنوات، لما يصل إلى 9 أشخاص مع السائق، ومركبات حتى 3500 كغ." },
  ];
  const parts: [string, string, string, any][] = [
    ["paperwork", "📋", ar ? "الأوراق والتسجيل" : "Paperwork and enrolment", ClipboardCheck],
    ["theory", "📝", ar ? "الاختبار النظري" : "The theory test", ListChecks],
    ["practical", "🚗", ar ? "الاختبار العملي" : "The practical test", Flag],
    ["licence", "🪪", ar ? "استلام الرخصة" : "Getting the licence", IdCard],
  ];
  return (
    <main className="page">
      <StageHead id="tests" />
      <ol className="part-road">{parts.map(([id, e, t], i) => <li key={id}><a href={"#" + id} onClick={(ev) => { ev.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); }}><span className="pr-no">{i + 1}</span><span aria-hidden="true">{e}</span> {t}</a></li>)}</ol>

      <section id="paperwork" className="anchor">
        <h2 className="plate"><span className="sec-no">1</span> {parts[0][2]}</h2>
        <StepList steps={READY_STEPS} />
        <Checklist id="school" />
      </section>

      <section id="theory" className="anchor">
        <h2 className="plate"><span className="sec-no">2</span> {parts[1][2]}</h2>
        <TheoryTestPage embedded />
      </section>

      <section id="practical" className="anchor">
        <h2 className="plate"><span className="sec-no">3</span> {parts[2][2]}</h2>
        <StepList steps={BOOK_STEPS} />
        {tests ? <section className="know"><h3>{ar ? "ماذا يتضمن الاختبار" : "What the test involves"} <SrcTag src="darb" /></h3><ul>{tests.teach.map((x: any, k: number) => <li key={k}><Md text={ar ? x.ar : x.en} /></li>)}</ul><Blocks blocks={tests.blocks} /></section> : null}
        <div className="yt-grid"><YouTube v={VIDEOS.driving} /><YouTube v={VIDEOS.tellme} /></div>
        <div className="check-grid"><Checklist id="week" /><Checklist id="day" /></div>
        <Checklist id="mock" />
        <section className="reference">
          <h3>{ar ? "للمقارنة: الحجز في بريطانيا" : "For comparison: booking in the UK"} <SrcTag src="dvsa" /></h3>
          <p className="muted measure">{ar ? "مرجع فقط. لا ينطبق على الرخصة السعودية." : "Reference only. Does not apply to the Saudi licence."}</p>
          <StepList steps={DVSA_BOOKING} bucket={null} />
        </section>
      </section>

      <section id="licence" className="anchor">
        <h2 className="plate"><span className="sec-no">4</span> {parts[3][2]}</h2>
        <StepList steps={licSteps} />
        {CH["c-licence"] ? <section className="know"><h3>{L(CH["c-licence"])} <SrcTag src="darb" /></h3><ul>{CH["c-licence"].teach.map((x: any, k: number) => <li key={k}><Md text={L(x)} /></li>)}</ul><Blocks blocks={CH["c-licence"].blocks} /></section> : null}
      </section>
      <NextPrev id="tests" />
    </main>
  );
}

export function LicencePage() {
  const { L, ar, p, toggle } = useStore();
  const law = CH["c-law"];
  const fines = THEORY_ONLY.find((t) => t.id === "T2");
  const vehicleLaw = THEORY_ONLY.find((t) => t.id === "T4");
  const checks = CAR.sections.find((x: any) => x.id === "checks");
  return (
    <main className="page">
      <StageHead id="licence" />
      <h2 className="plate"><span aria-hidden="true">⚖️</span> {ar ? "المخالفات والغرامات والنقاط" : "Violations, fines and points"}</h2>
      {law ? <section className="know"><h3>{L(law)} <SrcTag src="darb" /></h3><ul>{law.teach.map((x: any, k: number) => <li key={k}><Md text={L(x)} /></li>)}</ul><Blocks blocks={law.blocks} /></section> : null}
      {fines ? <ul className="rule-flat">{fines.points.map((b: any, k: number) => <li key={k} className={"rk-" + b.kind}><Md text={L(b)} /> <SrcTag src={b.src} at={b.ref ? (ar ? "ص " : "p. ") + b.ref : undefined} /></li>)}</ul> : null}
      <p><Link className="btn ghost" to="/theory/k1">{ar ? "النص الكامل في دليل المرور" : "Full text in the Moroor handbook"}</Link></p>
      {vehicleLaw ? <><h2 className="plate"><span aria-hidden="true">🚘</span> {L(vehicleLaw)}</h2><ul className="rule-flat">{vehicleLaw.points.map((b: any, k: number) => <li key={k} className={"rk-" + b.kind}><Md text={L(b)} /> <SrcTag src={b.src} at={b.ref ? (ar ? "ص " : "p. ") + b.ref : undefined} /></li>)}</ul></> : null}
      {checks ? (
        <>
          <h2 className="plate"><span aria-hidden="true">🔧</span> {ar ? "صيانة السيارة" : "Looking after the car"}</h2>
          <ul className="rule-flat">{checks.items.filter((it: any) => it.variant !== "manual").map((it: any) => <li key={it.id} className="rk-tip"><Md text={L(it)} /> <SrcTag src="fronx" at={(ar ? "ص " : "p. ") + it.page} /></li>)}</ul>
        </>
      ) : null}
      <p className="done-row"><button className={"btn" + (p.read.after ? " ghost" : "")} onClick={() => toggle("read", "after")}>{p.read.after ? <><Check size={16} strokeWidth={3} /> {ar ? "مقروء" : "Read"}</> : ar ? "علّم كمقروء" : "Mark as read"}</button></p>
      <NextPrev id="licence" />
    </main>
  );
}
