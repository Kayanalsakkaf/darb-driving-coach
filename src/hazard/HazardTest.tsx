/* Hazard perception test (DVSA logic): intro, practice clip, 14 timed clips,
   results and review. Animated canvas scenes plus optional user videos from
   public/hazard/clips.json. */
import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { useStore, today, uid } from "../lib/store";
import { scoreClip, segments, passMarkFor, type ClipScore, type Win } from "./engine";
import { PRACTICE, SCENES, type Scene } from "./scenes";
import { renderScene } from "./render";
import "./hazard.css";

type VideoClip = { id: string; src: string; en: string; ar: string; windows: Win[]; capEn?: string; capAr?: string };
type Clip = { type: "scene"; id: string; en: string; ar: string; capEn: string; capAr: string; windows: Win[]; dur: number; scene: Scene } | ({ type: "video"; dur: number } & VideoClip);
type Mode = "test" | "practice" | "review";

const fromScene = (s: Scene): Clip => ({ type: "scene", id: s.id, en: s.en, ar: s.ar, capEn: s.capEn, capAr: s.capAr, windows: s.windows, dur: s.dur, scene: s });
const base = () => (import.meta.env.BASE_URL || "/").replace(/\/?$/, "/");
const fmt = (t: number) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, "0")}`;

function useVideoClips() {
  const [clips, setClips] = useState<VideoClip[]>([]);
  useEffect(() => {
    let live = true;
    fetch(base() + "hazard/clips.json")
      .then((r) => (r.ok ? r.json() : []))
      .then((j: unknown) => {
        if (!live || !Array.isArray(j)) return;
        setClips(j.filter((c: any) => c && typeof c.src === "string" && Array.isArray(c.windows) && c.windows.length).map((c: any, i: number) => ({
          id: String(c.id ?? "video-" + i), src: c.src, en: String(c.en ?? c.id ?? "Video clip"), ar: String(c.ar ?? c.en ?? "مقطع فيديو"),
          windows: c.windows.map((w: any) => [Number(w[0]), Number(w[1])] as Win), capEn: c.capEn, capAr: c.capAr,
        })));
      })
      .catch(() => {});
    return () => { live = false; };
  }, []);
  return clips;
}

/* ---------------- Timeline ---------------- */
function Timeline({ dur, t, clicks, windows, onSeek }: { dur: number; t: number; clicks: number[]; windows?: Win[]; onSeek?: (t: number) => void }) {
  const { ar } = useStore();
  const pct = (x: number) => `${Math.max(0, Math.min(100, (x / dur) * 100))}%`;
  return (
    <div className="hz-tl" dir="ltr" aria-hidden={!onSeek}>
      <div className="hz-tl-track">
        <div className="hz-tl-prog" style={{ width: pct(t) }} />
        {windows?.map((w, i) => (
          <div key={i} className="hz-tl-win" style={{ left: pct(w[0]), width: `${((w[1] - w[0]) / dur) * 100}%` }}>
            {[5, 4, 3, 2, 1].map((p) => <span key={p} className={"s" + p}>{p}</span>)}
          </div>
        ))}
        {clicks.map((c, i) => <span key={i} className="hz-flag" style={{ left: pct(c) }} title={c.toFixed(1) + "s"} />)}
      </div>
      {onSeek && (
        <input className="hz-seek" type="range" min={0} max={dur} step={0.1} value={t} onChange={(e) => onSeek(Number(e.target.value))}
          aria-label={ar ? "موضع المقطع" : "Clip position"} aria-valuetext={fmt(t)} />
      )}
    </div>
  );
}

/* ---------------- Player ---------------- */
function Player({ clip, mode, clicks: given, onDone }: { clip: Clip; mode: Mode; clicks?: number[]; onDone?: (clicks: number[]) => void }) {
  const { ar, L } = useStore();
  const canvas = useRef<HTMLCanvasElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const [t, setT] = useState(0);
  const [dur, setDur] = useState(clip.dur);
  const [clicks, setClicks] = useState<number[]>(given || []);
  const [playing, setPlaying] = useState(mode !== "review");
  const [pulse, setPulse] = useState(0);
  const tRef = useRef(0);
  const clicksRef = useRef<number[]>(given || []);
  const done = useRef(false);
  const review = mode === "review";

  const finish = useCallback(() => {
    if (done.current || review) return;
    done.current = true;
    onDone?.(clicksRef.current);
  }, [onDone, review]);

  // Canvas loop: wall-clock time drives a deterministic timeline.
  useEffect(() => {
    if (clip.type !== "scene") return;
    const cv = canvas.current!;
    const ctx = cv.getContext("2d")!;
    let raf = 0;
    let last = performance.now();
    const W = 960, H = 540;
    const fit = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const w = cv.clientWidth || W;
      cv.width = Math.round(w * dpr); cv.height = Math.round((w * H / W) * dpr);
    };
    fit();
    const ro = new ResizeObserver(fit); ro.observe(cv);
    let lastUi = 0;
    const loop = (now: number) => {
      const dt = Math.min(0.1, (now - last) / 1000); last = now;
      if (playingRef.current) tRef.current = Math.min(clip.dur, tRef.current + dt);
      const k = cv.width / W;
      ctx.setTransform(k, 0, 0, k, 0, 0);
      renderScene(ctx, clip.scene, tRef.current, { W, H });
      if (review) drawWindowBadge(ctx, clip.windows, tRef.current, W, ar);
      if (now - lastUi > 100 || tRef.current >= clip.dur) { lastUi = now; setT(tRef.current); }
      if (tRef.current >= clip.dur && !review) { finish(); return; }
      if (tRef.current >= clip.dur && review) { playingRef.current = false; setPlaying(false); }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, [clip, review, finish, ar]);

  const playingRef = useRef(playing);
  playingRef.current = playing;

  // Video timing
  useEffect(() => {
    if (clip.type !== "video") return;
    const v = video.current!;
    let raf = 0;
    const tick = () => { tRef.current = v.currentTime; setT(v.currentTime); raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick);
    const meta = () => setDur(v.duration || clip.dur);
    const end = () => finish();
    const noPause = () => { if (!review && !v.ended) void v.play().catch(() => {}); };
    v.addEventListener("loadedmetadata", meta); v.addEventListener("ended", end); v.addEventListener("pause", noPause);
    if (!review) void v.play().catch(() => {});
    return () => { cancelAnimationFrame(raf); v.removeEventListener("loadedmetadata", meta); v.removeEventListener("ended", end); v.removeEventListener("pause", noPause); };
  }, [clip, review, finish]);

  useEffect(() => { if (!review) stage.current?.focus(); }, [review]);

  const flag = () => {
    if (review || done.current) return;
    const c = [...clicksRef.current, Math.round(tRef.current * 100) / 100];
    clicksRef.current = c; setClicks(c); setPulse((p) => p + 1);
  };
  const seek = (x: number) => {
    tRef.current = x; setT(x);
    if (video.current) video.current.currentTime = x;
  };
  const toggle = () => {
    if (clip.type === "video") { const v = video.current!; if (v.paused) void v.play(); else v.pause(); setPlaying(v.paused); return; }
    if (!playing && tRef.current >= clip.dur) tRef.current = 0;
    setPlaying(!playing);
  };

  const label = review
    ? (ar ? "إعادة المقطع مع نافذة التقييم" : "Clip replay with scoring window")
    : (ar ? "مقطع إدراك المخاطر. اضغط المسافة أو Enter أو المس الشاشة عند رؤية خطر يتطوّر." : "Hazard clip. Press Space or Enter, click or tap whenever you see a developing hazard.");

  return (
    <div className="hz-player">
      <div ref={stage} className={"hz-stage" + (review ? " review" : "")} tabIndex={0} role={review ? "img" : "button"} aria-label={label}
        onPointerDown={(e) => { if (!review) { e.preventDefault(); stage.current?.focus(); flag(); } }}
        onKeyDown={(e) => { if (!review && (e.key === " " || e.key === "Spacebar" || e.code === "Space" || e.key === "Enter")) { e.preventDefault(); if (!e.repeat) flag(); } }}
        onContextMenu={(e) => e.preventDefault()}>
        {clip.type === "scene"
          ? <canvas ref={canvas} className="hz-canvas" />
          : <video ref={video} className="hz-canvas" src={base() + clip.src.replace(/^\//, "")} playsInline preload="auto" controls={false} disablePictureInPicture />}
        {!review && <span key={pulse} className={"hz-pulse" + (pulse ? " on" : "")} aria-hidden="true" />}
        {!review && <span className="hz-count" aria-live="polite">{ar ? "النقرات" : "Clicks"}: {clicks.length}</span>}
      </div>
      <Timeline dur={dur} t={t} clicks={clicks} windows={review ? clip.windows : undefined} onSeek={review ? seek : undefined} />
      <div className="hz-ctrl">
        <span className="hz-time" dir="ltr">{fmt(t)} / {fmt(dur)}</span>
        {review
          ? <button className="btn sm" onClick={toggle}>{playing ? (ar ? "إيقاف مؤقت" : "Pause") : (ar ? "تشغيل" : "Play")}</button>
          : <span className="muted">{ar ? "لا يمكن إيقاف المقطع أو إرجاعه أثناء الاختبار." : "Clips can't be paused or rewound during the test."}</span>}
        {review && <span className="muted">{L({ en: clip.en, ar: clip.ar })}</span>}
      </div>
    </div>
  );
}

function drawWindowBadge(ctx: CanvasRenderingContext2D, wins: Win[], t: number, W: number, ar: boolean) {
  for (const w of wins) {
    if (t < w[0] || t > w[1]) continue;
    const seg = segments(w);
    let p = 5;
    for (let i = 0; i < 5; i++) if (t >= seg[i]) p = 5 - i;
    ctx.setTransform(ctx.getTransform());
    ctx.fillStyle = "rgba(0,102,61,0.92)"; ctx.fillRect(W - 230, 16, 214, 44);
    ctx.fillStyle = "#fff"; ctx.font = "700 20px Overpass, 'Noto Kufi Arabic', sans-serif"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillText(ar ? `نافذة التقييم: ${p} نقاط` : `Scoring window: ${p} pts`, W - 123, 38);
  }
}

/* ---------------- Page ---------------- */
type Phase = { p: "intro" } | { p: "practice" } | { p: "practiceDone"; r: ClipScore } | { p: "ready"; i: number } | { p: "play"; i: number } | { p: "results" } | { p: "review"; i: number };

export function HazardPage() {
  const { ar, L, set, user } = useStore();
  const videos = useVideoClips();
  const [useVideos, setUseVideos] = useState(false);
  const [phase, setPhase] = useState<Phase>({ p: "intro" });
  const [results, setResults] = useState<ClipScore[]>([]);
  const saved = useRef(false);
  const reduced = useMemo(() => typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches, []);

  const clips = useMemo<Clip[]>(() => [
    ...SCENES.map(fromScene),
    ...(useVideos ? videos.map((v) => ({ ...v, type: "video" as const, dur: 60 })) : []),
  ], [useVideos, videos]);
  const practice = useMemo(() => fromScene(PRACTICE), []);

  const total = results.reduce((a, r) => a + r.score, 0);
  const max = clips.reduce((a, c) => a + c.windows.length * 5, 0);
  const pass = passMarkFor(max);

  const start = () => { setResults([]); saved.current = false; setPhase({ p: "ready", i: 0 }); };
  const onClipDone = (i: number) => (clicks: number[]) => {
    const r = scoreClip(clips[i].windows, clicks);
    setResults((rs) => { const n = rs.slice(); n[i] = r; return n; });
    setPhase(i + 1 < clips.length ? { p: "ready", i: i + 1 } : { p: "results" });
  };

  useEffect(() => {
    if (phase.p !== "results" || saved.current || results.length !== clips.length) return;
    saved.current = true;
    const score = results.reduce((a, r) => a + r.score, 0);
    set((n) => { n.attempts.push({ id: uid("hp"), userId: user.id, date: today(), kind: "practice", score, total: max }); });
  }, [phase, results, clips.length, max, set, user.id]);

  const cheatMsg = ar
    ? "رصدنا نمط نقر سريع أو متواصل أو منتظم في هذا المقطع، لذا حصلت على صفر فيه. انقر فقط عند رؤية خطر يتطوّر."
    : "We detected a rapid, continuous or rhythmic clicking pattern in this clip, so it scores 0. Only click when you see a hazard developing.";

  let body: ReactNode;
  if (phase.p === "intro") {
    body = (
      <section className="hz-intro">
        <p className="hz-lede">{ar
          ? "ستشاهد ١٤ مقطعاً، مدة كل منها نحو دقيقة. يحتوي كل مقطع على خطر واحد على الأقل يتطوّر، وأحدها يحتوي على خطرين. انقر (أو المس الشاشة أو اضغط المسافة) كلما رأيت خطراً يبدأ بالتطوّر."
          : "You'll watch 14 clips of about a minute each. Every clip has at least one developing hazard, and one clip has two. Click (or tap, or press Space) whenever you see a hazard starting to develop."}</p>
        <ul className="hz-rules">
          <li>{ar ? "كلما نقرت أبكر خلال تطوّر الخطر، زادت نقاطك: من ٥ إلى ١." : "The earlier you respond while the hazard develops, the more you score: 5 down to 1."}</li>
          <li>{ar ? "النقر قبل بدء الخطر أو بعد فوات الأوان يعطي صفراً، لكنه لا يُخصم منك." : "Clicking before the hazard starts or too late scores 0, but isn't penalised."}</li>
          <li>{ar ? "النقر السريع المتكرر أو المنتظم يُلغي نقاط المقطع كاملاً." : "Rapid, continuous or rhythmic clicking scores 0 for the whole clip."}</li>
          <li>{ar ? "لا يمكن إيقاف المقاطع أو إرجاعها. تظهر علامة على الشريط عند كل نقرة." : "Clips can't be paused or rewound. A flag appears on the bar each time you click."}</li>
          <li>{ar ? `درجة النجاح ${pass} من ${max}.` : `Pass mark: ${pass} out of ${max}.`}</li>
        </ul>
        {reduced && <p className="hz-note" role="note">{ar ? "لاحظنا تفعيل إعداد تقليل الحركة. هذا الاختبار يعتمد على مقاطع متحركة، ويمكنك التوقف بين المقاطع متى شئت." : "Your device asks for reduced motion. This test relies on moving clips; you can rest between clips as long as you like."}</p>}
        {videos.length > 0 && (
          <label className="hz-check"><input type="checkbox" checked={useVideos} onChange={(e) => setUseVideos(e.target.checked)} />
            {ar ? `أضف مقاطع الفيديو الخاصة (${videos.length})` : `Include my video clips (${videos.length})`}</label>
        )}
        <div className="hz-actions">
          <button className="btn big" onClick={() => setPhase({ p: "practice" })}>{ar ? "ابدأ بمقطع تدريبي" : "Start with a practice clip"}</button>
          <button className="btn ghost" onClick={start}>{ar ? "تخطَّ إلى الاختبار" : "Skip to the test"}</button>
        </div>
      </section>
    );
  } else if (phase.p === "practice") {
    body = <><h2 className="hz-h">{L({ en: practice.en, ar: practice.ar })}</h2><Player key="practice" clip={practice} mode="practice" onDone={(c) => setPhase({ p: "practiceDone", r: scoreClip(practice.windows, c) })} /></>;
  } else if (phase.p === "practiceDone") {
    body = (
      <section>
        <h2 className="hz-h">{ar ? `نتيجة التدريب: ${phase.r.score} من ${phase.r.max}` : `Practice score: ${phase.r.score} out of ${phase.r.max}`}</h2>
        {phase.r.cheat && <p className="hz-warn" role="alert">{cheatMsg}</p>}
        <p>{L({ en: practice.capEn, ar: practice.capAr })}</p>
        <Player key="practice-review" clip={practice} mode="review" clicks={phase.r.clicks} />
        <div className="hz-actions">
          <button className="btn big" onClick={start}>{ar ? "ابدأ الاختبار" : "Start the test"}</button>
          <button className="btn ghost" onClick={() => setPhase({ p: "practice" })}>{ar ? "أعد التدريب" : "Try practice again"}</button>
        </div>
      </section>
    );
  } else if (phase.p === "ready") {
    body = (
      <section className="hz-ready">
        <p className="hz-step">{ar ? `المقطع ${phase.i + 1} من ${clips.length}` : `Clip ${phase.i + 1} of ${clips.length}`}</p>
        <button className="btn big" autoFocus onClick={() => setPhase({ p: "play", i: phase.i })}>{ar ? "شغّل المقطع" : "Play clip"}</button>
        <p className="muted">{ar ? "المس المقطع أو اضغط المسافة عند رؤية خطر يتطوّر." : "Tap the clip or press Space when you see a developing hazard."}</p>
      </section>
    );
  } else if (phase.p === "play") {
    body = <><p className="hz-step">{ar ? `المقطع ${phase.i + 1} من ${clips.length}` : `Clip ${phase.i + 1} of ${clips.length}`}</p><Player key={"t" + phase.i} clip={clips[phase.i]} mode="test" onDone={onClipDone(phase.i)} /></>;
  } else if (phase.p === "results") {
    const passed = total >= pass;
    body = (
      <section>
        <div className={"hz-score " + (passed ? "pass" : "fail")}>
          <strong dir="ltr">{total} / {max}</strong>
          <span>{passed ? (ar ? "ناجح" : "Pass") : (ar ? "لم تنجح بعد" : "Not yet a pass")} · {ar ? `درجة النجاح ${pass}` : `pass mark ${pass}`}</span>
        </div>
        <table className="hz-table">
          <thead><tr><th>#</th><th>{ar ? "المقطع" : "Clip"}</th><th>{ar ? "الدرجة" : "Score"}</th><th><span className="sr-only">{ar ? "مراجعة" : "Review"}</span></th></tr></thead>
          <tbody>{clips.map((c, i) => { const r = results[i]; return (
            <tr key={c.id}><td>{i + 1}</td><td>{L({ en: c.en, ar: c.ar })}{r?.cheat && <span className="hz-tag">{ar ? "نمط نقر" : "click pattern"}</span>}</td>
              <td dir="ltr">{r ? `${r.score} / ${r.max}` : "–"}</td>
              <td><button className="btn sm ghost" onClick={() => setPhase({ p: "review", i })}>{ar ? "راجع" : "Review"}</button></td></tr>); })}</tbody>
        </table>
        <div className="hz-actions"><button className="btn" onClick={() => setPhase({ p: "intro" })}>{ar ? "اختبار جديد" : "New test"}</button></div>
      </section>
    );
  } else {
    const i = phase.i, c = clips[i], r = results[i];
    body = (
      <section>
        <p className="hz-step">{ar ? `مراجعة المقطع ${i + 1} من ${clips.length}` : `Reviewing clip ${i + 1} of ${clips.length}`}</p>
        <h2 className="hz-h">{L({ en: c.en, ar: c.ar })} <span dir="ltr" className="hz-pts">{r ? `${r.score}/${r.max}` : ""}</span></h2>
        {r?.cheat && <p className="hz-warn" role="alert">{cheatMsg}</p>}
        <p>{L({ en: c.capEn || "", ar: c.capAr || c.capEn || "" })}</p>
        {r && <ul className="hz-hz">{r.hazards.map((h, k) => (
          <li key={k}>{ar ? `الخطر ${k + 1}: ` : `Hazard ${k + 1}: `}<span dir="ltr">{h.window[0].toFixed(1)}–{h.window[1].toFixed(1)}s</span>
            {" · "}{h.best != null ? (ar ? `أفضل نقرة عند ${h.best.toFixed(1)} ث` : `best click at ${h.best.toFixed(1)}s`) : (ar ? "لا نقرة داخل النافذة" : "no click inside the window")}
            {" · "}<strong>{h.score} {ar ? "نقاط" : "pts"}</strong></li>))}</ul>}
        <Player key={"r" + i} clip={c} mode="review" clicks={r?.clicks || []} />
        <div className="hz-actions">
          <button className="btn ghost" disabled={i === 0} onClick={() => setPhase({ p: "review", i: i - 1 })}>{ar ? "السابق" : "Previous"}</button>
          <button className="btn ghost" disabled={i === clips.length - 1} onClick={() => setPhase({ p: "review", i: i + 1 })}>{ar ? "التالي" : "Next"}</button>
          <button className="btn" onClick={() => setPhase({ p: "results" })}>{ar ? "العودة للنتائج" : "Back to results"}</button>
        </div>
      </section>
    );
  }

  return (
    <main className="page hz" id="main">
      <header className="hz-head">
        <h1>{ar ? "اختبار إدراك المخاطر" : "Hazard perception test"}</h1>
        <p className="muted">{ar ? "وفق منطق اختبار DVSA البريطاني، بمشاهد من الطرق السعودية. القيادة على اليمين." : "Follows the UK DVSA hazard perception logic, with Saudi road scenes. Traffic drives on the right."}</p>
      </header>
      {body}
    </main>
  );
}
