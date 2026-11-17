import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Check, X, Timer } from "lucide-react";
import { useStore, today, uid } from "../lib/store";
import { QUESTIONS, QTOPICS, SIGNS } from "../lib/data";
import { NextPrev, SrcTag, StageHead } from "../components/ui";
import { TOPICS } from "../lib/progress";

type Q = { id: string; q: any; o: any[]; a: number; x?: any; img?: string; src?: { hb?: number; hc?: number | string }; t: string };
const shuffle = <T,>(a: T[]) => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };

function signQ(): Q {
  const pool = SIGNS.filter((s) => s.imgs?.length && s.tier === 1);
  const s = pool[Math.floor(Math.random() * pool.length)];
  const wrong = shuffle(pool.filter((x) => x.id !== s.id && x.cat === s.cat)).slice(0, 3);
  const opts = shuffle([s, ...wrong]);
  const im = s.imgs.find((i: any) => i.o === "ksa") || s.imgs[0];
  return { id: "s-" + s.id, t: "signs", img: im.src, q: { en: "What does this sign mean?", ar: "ماذا تعني هذه الإشارة؟" }, o: opts.map((o) => ({ en: o.en, ar: o.ar })), a: opts.indexOf(s), src: im.o === "ksa" ? { hb: s.hb } : undefined };
}
function shuffleOpts(q: Q): Q {
  const order = shuffle(q.o.map((_, i) => i));
  return { ...q, o: order.map((i) => q.o[i]), a: order.indexOf(q.a) };
}

export function TheoryTestPage() {
  const { L, ar, s, set, user } = useStore();
  const [run, setRun] = useState<null | { kind: "mock" | "practice"; qs: Q[]; i: number; picks: number[]; end?: number; finished?: boolean }>(null);
  const [now, setNow] = useState(Date.now());
  useEffect(() => { if (!run?.end || run.finished) return; const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t); }, [run?.end, run?.finished]);

  const mine = s.attempts.filter((a) => a.userId === user.id);
  const start = (kind: "mock" | "practice", topic?: string) => {
    let qs: Q[];
    if (kind === "mock") qs = shuffle([...shuffle(QUESTIONS).slice(0, 18), ...Array.from({ length: 12 }, signQ)]).map(shuffleOpts);
    else qs = (topic === "signs" ? Array.from({ length: 15 }, signQ) : shuffle(QUESTIONS.filter((q) => !topic || q.t === topic)).slice(0, 15)).map(shuffleOpts);
    setRun({ kind, qs, i: 0, picks: [], end: kind === "mock" ? Date.now() + 30 * 60 * 1000 : undefined });
  };
  const finish = (r: NonNullable<typeof run>) => {
    const score = r.qs.filter((q, i) => r.picks[i] === q.a).length;
    set((n) => { n.attempts.push({ id: uid("a"), userId: user.id, date: today(), kind: r.kind, score, total: r.qs.length }); });
    setRun({ ...r, finished: true });
  };
  useEffect(() => { if (run?.end && !run.finished && now > run.end) finish(run); });

  if (run && !run.finished) {
    const q = run.qs[run.i], picked = run.picks[run.i];
    const answered = picked !== undefined;
    const left = run.end ? Math.max(0, Math.round((run.end - now) / 1000)) : 0;
    const showFeedback = run.kind === "practice" && answered;
    return (
      <main className="page quiz">
        <div className="quiz-bar">
          <span>{run.kind === "mock" ? (ar ? "اختبار تجريبي" : "Mock test") : ar ? "تدريب" : "Practice"} · {run.i + 1} / {run.qs.length}</span>
          {run.end ? <span className="timer"><Timer size={16} /> {Math.floor(left / 60)}:{String(left % 60).padStart(2, "0")}</span> : null}
          <button className="btn ghost sm" onClick={() => setRun(null)}>{ar ? "إنهاء" : "Quit"}</button>
        </div>
        <div className="meter"><i style={{ width: ((run.i + 1) / run.qs.length) * 100 + "%" }} /></div>
        <h2 className="q">{L(q.q)}</h2>
        {q.img ? <img className="q-img" src={q.img} alt="" /> : null}
        <ol className="opts">
          {q.o.map((o, k) => {
            const cls = showFeedback ? (k === q.a ? " right" : k === picked ? " wrong" : "") : picked === k ? " picked" : "";
            return <li key={k}><button className={"opt" + cls} disabled={showFeedback} onClick={() => setRun({ ...run, picks: Object.assign([...run.picks], { [run.i]: k }) })}>{L(o)}{showFeedback && k === q.a ? <Check size={16} /> : showFeedback && k === picked ? <X size={16} /> : null}</button></li>;
          })}
        </ol>
        {showFeedback && q.x ? <p className="explain">{L(q.x)} {q.src?.hb ? <SrcTag src="moroor" at={(ar ? "ص " : "p. ") + q.src.hb} /> : q.src?.hc ? <SrcTag src="dvsa" at={(ar ? "قاعدة " : "Rule ") + q.src.hc} /> : null}</p> : null}
        <div className="quiz-nav">
          <button className="btn ghost" disabled={run.i === 0} onClick={() => setRun({ ...run, i: run.i - 1 })}>{ar ? "السابق" : "Back"}</button>
          {run.i < run.qs.length - 1
            ? <button className="btn" disabled={!answered} onClick={() => setRun({ ...run, i: run.i + 1 })}>{ar ? "التالي" : "Next"}</button>
            : <button className="btn" disabled={!answered} onClick={() => finish(run)}>{ar ? "إنهاء وتصحيح" : "Finish and mark"}</button>}
        </div>
      </main>
    );
  }

  if (run?.finished) {
    const score = run.qs.filter((q, i) => run.picks[i] === q.a).length, pct = Math.round((score / run.qs.length) * 100);
    return (
      <main className="page quiz">
        <h1>{score} / {run.qs.length} <span className={pct >= 90 ? "k-prio" : "k-must"}>{pct}%</span></h1>
        <p className="lede">{pct >= 90 ? (ar ? "ممتاز. ثلاث نتائج متتالية بنسبة 90% تعني أنك جاهز لحجز الاختبار." : "Good. Three in a row at 90% means you are ready to book.") : ar ? "راجع الأخطاء أدناه ثم أعد المحاولة." : "Review the misses below, then go again."}</p>
        <ol className="review">
          {run.qs.map((q, i) => run.picks[i] === q.a ? null : (
            <li key={i}><b>{L(q.q)}</b>{q.img ? <img src={q.img} alt="" className="q-img sm" /> : null}<br />
              <span className="k-must"><X size={14} /> {run.picks[i] !== undefined ? L(q.o[run.picks[i]]) : ar ? "بلا إجابة" : "No answer"}</span><br />
              <span className="k-prio"><Check size={14} /> {L(q.o[q.a])}</span>{q.x ? <p className="muted">{L(q.x)}</p> : null}
            </li>))}
        </ol>
        <p><button className="btn" onClick={() => setRun(null)}>{ar ? "رجوع" : "Done"}</button></p>
      </main>
    );
  }

  const mocks = mine.filter((a) => a.kind === "mock");
  return (
    <main className="page">
      <StageHead id="theory-test" />
      <section className="start-panel">
        <div>
          <h2>{ar ? "اختبار تجريبي مؤقت" : "Timed mock test"}</h2>
          <p>{ar ? "30 سؤالا في 30 دقيقة: قواعد وإشارات، دون تصحيح حتى النهاية. الهدف ثلاث نتائج متتالية بنسبة 90% أو أكثر." : "30 questions in 30 minutes: rules and signs, marked at the end. Aim for three in a row at 90% or more."}</p>
          <p className="muted">{ar ? "صيغة الاختبار الرسمي تختلف بين المدارس؛ اسأل مدرستك عن عدد الأسئلة ودرجة النجاح." : "The real format varies by school; ask yours for the question count and pass mark."} <Link to="/tests">{ar ? "الحجز" : "Booking"}</Link></p>
        </div>
        <button className="btn big" onClick={() => start("mock")}>{ar ? "ابدأ الاختبار" : "Start mock"}</button>
      </section>
      {mocks.length ? (
        <section>
          <h2>{ar ? "النتائج" : "Results"}</h2>
          <ol className="scores">{mocks.slice(-10).map((a) => { const pc = Math.round((a.score / a.total) * 100); return <li key={a.id} className={pc >= 90 ? "pass" : ""}><span className="bar" style={{ height: pc + "%" }} /><span className="v">{pc}</span><span className="d">{a.date.slice(5)}</span></li>; })}</ol>
        </section>
      ) : null}
      <section>
        <h2>{ar ? "تدرب حسب الموضوع" : "Practise by topic"}</h2>
        <p className="muted">{ar ? "15 سؤالا مع الشرح بعد كل إجابة." : "15 questions with the explanation after each answer."}</p>
        <div className="topic-buttons">
          <button className="chip" onClick={() => start("practice")}>{ar ? "كل الموضوعات" : "All topics"} ({QUESTIONS.length})</button>
          {Object.entries(QTOPICS).map(([k, v]) => { const n = QUESTIONS.filter((q) => q.t === k).length; return n ? <button key={k} className="chip" onClick={() => start("practice", k)}>{L(v)} ({n})</button> : null; })}
          <button className="chip" onClick={() => start("practice", "signs")}>{ar ? "الإشارات" : "Signs"}</button>
        </div>
        <p className="muted">{ar ? `قبل البدء، اقرأ موضوعات النظري (${TOPICS.length}).` : `Before you start, read the ${TOPICS.length} theory topics.`} <Link to="/theory">{ar ? "النظري" : "Theory"}</Link></p>
      </section>
      <NextPrev id="theory-test" />
    </main>
  );
}
