import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Check, X, Timer, Flag, ListChecks, Eye, TriangleAlert } from "lucide-react";
import "../data/bank.js";
import { useStore, today, uid } from "../lib/store";
import { NextPrev, SrcTag, StageHead, StepList } from "../components/ui";
import { THEORY_BOOK } from "../lib/journey";

type Q = { id: string; topic: string; q: any; o: any[]; a: number[]; x?: any; src?: "moroor" | "dvsa"; ref?: string; img?: string; caseId?: string };
const BANK: { topics: Record<string, { en: string; ar: string }>; questions: Q[]; cases: { id: string; story: any; qs: Q[] }[] } = (window as any).DC_DATA.bank;
export const MOCK = { n: 50, minutes: 57, pass: 43 };
const shuffle = <T,>(a: T[]) => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
const norm = (q: any): Q => ({ ...q, a: Array.isArray(q.a) ? q.a : [q.a] });
function shuffleOpts(q: Q): Q { const order = shuffle(q.o.map((_, i) => i)); return { ...q, o: order.map((i) => q.o[i]), a: q.a.map((x) => order.indexOf(x)) }; }

/** 45 questions spread across all 14 topics, then one 5-question case study at the end, like the UK test. */
function buildMock(): Q[] {
  const topics = Object.keys(BANK.topics);
  const pool = BANK.questions.map(norm);
  const picked: Q[] = [];
  const per = Math.floor(45 / topics.length);
  topics.forEach((t) => picked.push(...shuffle(pool.filter((q) => q.topic === t)).slice(0, per)));
  const rest = shuffle(pool.filter((q) => !picked.includes(q))).slice(0, 45 - picked.length);
  const cs = BANK.cases[Math.floor(Math.random() * BANK.cases.length)];
  return [...shuffle([...picked, ...rest]), ...cs.qs.map((q) => ({ ...norm(q), caseId: cs.id }))].map(shuffleOpts);
}
const same = (a: number[] = [], b: number[]) => a.length === b.length && a.every((x) => b.includes(x));

export function TheoryTestPage() {
  const { L, ar, s, set, user } = useStore();
  const [run, setRun] = useState<null | { kind: "mock" | "practice"; qs: Q[]; i: number; picks: number[][]; flags: boolean[]; end?: number; review?: boolean; finished?: boolean }>(null);
  const [now, setNow] = useState(Date.now());
  useEffect(() => { if (!run?.end || run.finished) return; const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t); }, [run?.end, run?.finished]);
  const caseOf = useMemo(() => Object.fromEntries(BANK.cases.map((c) => [c.id, c])), []);

  const start = (kind: "mock" | "practice", topic?: string) => {
    const qs = kind === "mock" ? buildMock() : shuffle(BANK.questions.map(norm).filter((q) => !topic || q.topic === topic)).slice(0, 15).map(shuffleOpts);
    setRun({ kind, qs, i: 0, picks: [], flags: [], end: kind === "mock" ? Date.now() + MOCK.minutes * 60000 : undefined });
  };
  const finish = (r: NonNullable<typeof run>) => {
    const score = r.qs.filter((q, i) => same(r.picks[i], q.a)).length;
    set((n) => { n.attempts.push({ id: uid("a"), userId: user.id, date: today(), kind: r.kind, score, total: r.qs.length }); });
    setRun({ ...r, finished: true, review: false });
  };
  useEffect(() => { if (run?.end && !run.finished && now > run.end) finish(run); });

  /* ---------- in a test ---------- */
  if (run && !run.finished) {
    const left = run.end ? Math.max(0, Math.round((run.end - now) / 1000)) : 0;
    if (run.review) {
      const unanswered = run.qs.filter((_, i) => !run.picks[i]?.length).length;
      return (
        <main className="page quiz">
          <h1>{ar ? "راجع إجاباتك" : "Review your answers"}</h1>
          <p className="lede">{unanswered ? (ar ? `${unanswered} بلا إجابة.` : `${unanswered} unanswered.`) : ar ? "أجبت عن كل الأسئلة." : "All questions answered."} {run.flags.filter(Boolean).length ? (ar ? `${run.flags.filter(Boolean).length} معلّمة.` : `${run.flags.filter(Boolean).length} flagged.`) : ""}</p>
          <ol className="review-grid">{run.qs.map((_, i) => <li key={i}><button className={(run.picks[i]?.length ? "ans" : "") + (run.flags[i] ? " flag" : "")} onClick={() => setRun({ ...run, i, review: false })}>{i + 1}{run.flags[i] ? <Flag size={11} /> : null}</button></li>)}</ol>
          <p className="done-row"><button className="btn ghost" onClick={() => setRun({ ...run, review: false })}>{ar ? "عودة" : "Back to questions"}</button><button className="btn" onClick={() => finish(run)}>{ar ? "إنهاء الاختبار" : "End test"}</button></p>
        </main>
      );
    }
    const q = run.qs[run.i], picked = run.picks[run.i] || [];
    const need = q.a.length;
    const answered = picked.length === need;
    const fb = run.kind === "practice" && answered;
    const cs = q.caseId ? caseOf[q.caseId] : null;
    const pick = (k: number) => {
      if (fb) return;
      const cur = run.picks[run.i] || [];
      const nextPick = need === 1 ? [k] : cur.includes(k) ? cur.filter((x) => x !== k) : [...cur, k].slice(-need);
      setRun({ ...run, picks: Object.assign([...run.picks], { [run.i]: nextPick }) });
    };
    return (
      <main className="page quiz">
        <div className="quiz-bar">
          <span>{run.kind === "mock" ? (ar ? "اختبار تجريبي" : "Mock test") : ar ? "تدريب" : "Practice"} · <bdi>{run.i + 1} / {run.qs.length}</bdi></span>
          {run.end ? <span className={"timer" + (left < 300 ? " low" : "")}><Timer size={16} /> <bdi>{Math.floor(left / 60)}:{String(left % 60).padStart(2, "0")}</bdi></span> : null}
          {run.kind === "mock" ? <button className={"btn ghost sm" + (run.flags[run.i] ? " flagged" : "")} aria-pressed={!!run.flags[run.i]} onClick={() => setRun({ ...run, flags: Object.assign([...run.flags], { [run.i]: !run.flags[run.i] }) })}><Flag size={14} /> {ar ? "علّم" : "Flag"}</button> : null}
          <button className="btn ghost sm" onClick={() => { if (confirm(ar ? "الخروج من الاختبار؟" : "Leave this test?")) setRun(null); }}>{ar ? "خروج" : "Quit"}</button>
        </div>
        <div className="meter"><i style={{ width: ((run.i + 1) / run.qs.length) * 100 + "%" }} /></div>
        {cs ? <aside className="case-story"><b>{ar ? "دراسة حالة" : "Case study"}</b><p>{L(cs.story)}</p></aside> : null}
        <h2 className="q">{L(q.q)}</h2>
        {need > 1 ? <p className="mark-n">{ar ? `اختر ${need} إجابات` : `Mark ${need} answers`}</p> : null}
        {q.img ? <img className="q-img" src={q.img} alt="" /> : null}
        <ol className="opts">
          {q.o.map((o, k) => {
            const on = picked.includes(k);
            const cls = fb ? (q.a.includes(k) ? " right" : on ? " wrong" : "") : on ? " picked" : "";
            return <li key={k}><button className={"opt" + cls} aria-pressed={on} disabled={fb} onClick={() => pick(k)}><span className="opt-letter">{"ABCD"[k]}</span><span className="opt-txt">{L(o)}</span>{fb && q.a.includes(k) ? <Check size={18} /> : fb && on ? <X size={18} /> : null}</button></li>;
          })}
        </ol>
        {fb ? <p className={"explain " + (same(picked, q.a) ? "ok" : "bad")}><b>{same(picked, q.a) ? (ar ? "صحيح. " : "Correct. ") : ar ? "ليس تماما. " : "Not quite. "}</b>{q.x ? L(q.x) : null} {q.src ? <SrcTag src={q.src} at={q.ref ? (q.src === "moroor" ? (ar ? "ص " : "p. ") : ar ? "قاعدة " : "Rule ") + q.ref : undefined} /> : null}</p> : null}
        <div className="quiz-nav">
          <button className="btn ghost" disabled={run.i === 0} onClick={() => setRun({ ...run, i: run.i - 1 })}>{ar ? "السابق" : "Previous"}</button>
          {run.i < run.qs.length - 1
            ? <button className="btn" onClick={() => setRun({ ...run, i: run.i + 1 })}>{ar ? "التالي" : "Next"}</button>
            : run.kind === "mock" ? <button className="btn" onClick={() => setRun({ ...run, review: true })}>{ar ? "مراجعة" : "Review"}</button>
            : <button className="btn" disabled={!answered} onClick={() => finish(run)}>{ar ? "إنهاء" : "Finish"}</button>}
        </div>
      </main>
    );
  }

  /* ---------- results ---------- */
  if (run?.finished) {
    const score = run.qs.filter((q, i) => same(run.picks[i], q.a)).length;
    const pass = run.kind === "mock" ? score >= MOCK.pass : score / run.qs.length >= 0.86;
    const byTopic = Object.keys(BANK.topics).map((t) => { const qs = run.qs.map((q, i) => ({ q, i })).filter((x) => x.q.topic === t); return { t, n: qs.length, ok: qs.filter((x) => same(run.picks[x.i], x.q.a)).length }; }).filter((x) => x.n);
    return (
      <main className="page quiz results">
        <div className={"result-sign " + (pass ? "pass" : "fail")}>
          <span>{pass ? (ar ? "ناجح" : "PASS") : ar ? "لم تنجح بعد" : "NOT YET"}</span>
          <b><bdi>{score} / {run.qs.length}</bdi></b>
          {run.kind === "mock" ? <small>{ar ? `درجة النجاح ${MOCK.pass}` : `Pass mark ${MOCK.pass}`}</small> : null}
        </div>
        <h2>{ar ? "حسب الموضوع" : "By topic"}</h2>
        <ul className="topic-bars">{byTopic.map((x) => <li key={x.t}><span>{L(BANK.topics[x.t])}</span><span className="tb"><i style={{ width: (x.ok / x.n) * 100 + "%" }} className={x.ok / x.n >= 0.86 ? "good" : x.ok / x.n >= 0.6 ? "mid" : "low"} /></span><bdi>{x.ok}/{x.n}</bdi>{x.ok < x.n ? <button className="chip" onClick={() => start("practice", x.t)}>{ar ? "تدرّب" : "Practise"}</button> : null}</li>)}</ul>
        <h2>{ar ? "الأخطاء" : "What you missed"}</h2>
        <ol className="review">
          {run.qs.map((q, i) => same(run.picks[i], q.a) ? null : (
            <li key={i}><b>{L(q.q)}</b>{q.img ? <img src={q.img} alt="" className="q-img sm" /> : null}<br />
              <mark className="k-never"><X size={13} /> {run.picks[i]?.length ? run.picks[i].map((k) => L(q.o[k])).join(" + ") : ar ? "بلا إجابة" : "No answer"}</mark><br />
              <mark className="k-prio"><Check size={13} /> {q.a.map((k) => L(q.o[k])).join(" + ")}</mark>{q.x ? <p className="muted">{L(q.x)}</p> : null}
            </li>))}
        </ol>
        <p><button className="btn" onClick={() => setRun(null)}>{ar ? "تم" : "Done"}</button></p>
      </main>
    );
  }

  /* ---------- start ---------- */
  const mine = s.attempts.filter((a) => a.userId === user.id);
  const mocks = mine.filter((a) => a.kind === "mock" && a.total >= 40);
  return (
    <main className="page">
      <StageHead id="theory-test" />
      <div className="test-cards">
        <section className="test-card">
          <ListChecks size={28} aria-hidden="true" />
          <h2>{ar ? "اختبار الأسئلة" : "Multiple-choice test"}</h2>
          <ul className="facts"><li><b>{MOCK.n}</b> {ar ? "سؤالا" : "questions"}</li><li><b>{MOCK.minutes}</b> {ar ? "دقيقة" : "minutes"}</li><li><b>{MOCK.pass}</b> {ar ? "للنجاح" : "to pass"}</li></ul>
          <p>{ar ? "على النمط البريطاني: أسئلة من 14 مجالا ودراسة حالة في النهاية. يمكنك تعليم الأسئلة ومراجعتها قبل الإنهاء." : "UK style: questions from all 14 areas and a case study at the end. Flag questions and review before you finish."}</p>
          <button className="btn big" onClick={() => start("mock")}>{ar ? "ابدأ الاختبار" : "Start mock test"}</button>
        </section>
        <section className="test-card hp">
          <Eye size={28} aria-hidden="true" />
          <h2>{ar ? "إدراك المخاطر" : "Hazard perception"}</h2>
          <ul className="facts"><li><b>14</b> {ar ? "مقطعا" : "clips"}</li><li><b>75</b> {ar ? "نقطة" : "points"}</li><li><b>44</b> {ar ? "للنجاح" : "to pass"}</li></ul>
          <p>{ar ? "اضغط عندما ترى خطرا يتطور. كلما أسرعت زادت نقاطك، لكن الضغط المتكرر يلغي المقطع." : "Click when you see a hazard developing. The earlier, the more points, but rapid clicking scores zero."}</p>
          <Link className="btn big" to="/theory-test/hazard">{ar ? "ابدأ" : "Start hazard test"}</Link>
        </section>
      </div>
      {mocks.length ? (
        <section>
          <h2>{ar ? "نتائجك" : "Your mock results"}</h2>
          <ol className="scores">{mocks.slice(-12).map((a) => { const pc = Math.round((a.score / a.total) * 100); return <li key={a.id} className={a.score >= MOCK.pass ? "pass" : ""}><span className="bar" style={{ height: pc + "%" }} /><span className="v">{a.score}</span><span className="d">{a.date.slice(5)}</span></li>; })}</ol>
          <p className="muted small"><TriangleAlert size={13} /> {ar ? "الهدف: ثلاثة اختبارات متتالية بنتيجة 43 أو أكثر." : "Goal: three mocks in a row at 43 or more."}</p>
        </section>
      ) : null}
      <section>
        <h2>{ar ? "تدرّب حسب الموضوع" : "Practise by topic"}</h2>
        <p className="muted">{ar ? "15 سؤالا مع الشرح بعد كل إجابة." : "15 questions, with the explanation after each answer."}</p>
        <div className="topic-buttons">
          {Object.entries(BANK.topics).map(([k, v]) => <button key={k} className="chip" onClick={() => start("practice", k)}>{L(v)} <bdi className="muted">{BANK.questions.filter((q) => q.topic === k).length}</bdi></button>)}
        </div>
      </section>
      <section>
        <h2>{ar ? "حجز الاختبار النظري" : "Booking the theory test"}</h2>
        <StepList steps={THEORY_BOOK} />
      </section>
      <NextPrev id="theory-test" />
    </main>
  );
}
