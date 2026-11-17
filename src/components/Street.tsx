/* The street from home to Moroor: the journey progress tracker.
   Each stage is a stretch of road ending at a traffic light; lessons are speed bumps; the car sits where you are. */
import { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useStore } from "../lib/store";
import { STAGES, stageOf } from "../lib/journey";
import { LESSONS } from "../lib/data";
import { useStageStatus } from "../lib/progress";

const W = 1240, H = 150, X0 = 92, X1 = 1132, ROAD_Y = 92;
const segW = (X1 - X0) / STAGES.length;
export const STAGE_HUE: Record<string, string> = {
  theory: "#1f56b3", car: "#c75d0e", lessons: "#13703f", skills: "#7a3fb0", tests: "#c4271c", licence: "#0d7c86",
};

export function Street() {
  const { L, ar, p } = useStore();
  const st = useStageStatus();
  const nav = useNavigate();
  const loc = useLocation();
  const box = useRef<HTMLDivElement>(null);
  const current = stageOf(loc.pathname);
  // the car moves with lessons: one speed bump per lesson along the whole road; the car sits just past the last lesson done
  const idx = STAGES.findIndex((x) => x.id === st.next);
  const bumpX = (i: number) => X0 + 30 + (i * (X1 - X0 - 60)) / Math.max(1, LESSONS.length - 1);
  const doneCount = LESSONS.filter((l) => p.lessons[l.id]).length;
  const lastDone = LESSONS.reduce((m, l, i) => (p.lessons[l.id] ? i : m), -1);
  const carX = doneCount === LESSONS.length ? X1 + 8 : lastDone < 0 ? X0 - 20 : bumpX(lastDone) + 26;
  useEffect(() => {
    const el = box.current; if (!el) return;
    const target = ((current ? STAGES.indexOf(current) + 0.5 : idx + 0.5) * segW + X0) / W * el.scrollWidth;
    requestAnimationFrame(() => el.scrollTo({ left: ar ? -(el.scrollWidth - target - el.clientWidth / 2) : target - el.clientWidth / 2 }));
  }, [current?.id, idx, ar]);
  return (
    <div className="street-wrap" ref={box}>
      <svg className="street" viewBox={`0 -22 ${W} ${H + 22}`} role="group" aria-label={ar ? "الطريق من البيت إلى المرور" : "The road from home to Moroor"} style={{ direction: "ltr" }}>
        <defs>
          <pattern id="bump" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="5" height="10" fill="#f2b705" /><rect x="5" width="5" height="10" fill="#1b1b1b" /></pattern>
        </defs>
        {/* verge and road */}
        <rect x="0" y={ROAD_Y - 26} width={W} height="52" fill="#3b4148" rx="4" />
        <rect x="0" y={ROAD_Y - 28} width={W} height="3" fill="#cfd5d1" />
        <rect x="0" y={ROAD_Y + 25} width={W} height="3" fill="#cfd5d1" />
        <line x1="0" x2={W} y1={ROAD_Y} y2={ROAD_Y} stroke="#f4f6f4" strokeWidth="3" strokeDasharray="22 16" opacity="0.75" />
        {/* travelled road */}
        <rect x="0" y={ROAD_Y - 26} width={Math.max(0, carX)} height="52" fill="#2f353b" />
        {/* home */}
        <g transform={`translate(18 ${ROAD_Y - 66})`} className="house">
          <path d="M0 30 L28 6 L56 30 Z" fill="#c75d0e" /><rect x="7" y="28" width="42" height="30" fill="#f4e9da" stroke="#6b4a00" strokeWidth="1.5" /><rect x="22" y="38" width="12" height="20" fill="#6b4a00" />
          <text x="28" y="-2" textAnchor="middle" className="st-label">{ar ? "البيت" : "Home"}</text>
        </g>
        {/* Moroor: the traffic department building with its logo */}
        <g transform={`translate(${X1 + 10} ${ROAD_Y - 92})`} className="moroor">
          <rect x="-4" y="60" width="86" height="6" fill="#cfd5d1" />
          <rect x="0" y="14" width="78" height="48" fill="#efe7d6" stroke="#8b7d62" strokeWidth="1.2" />
          <rect x="-3" y="10" width="84" height="6" fill="#00663d" />
          <rect x="22" y="0" width="34" height="12" fill="#efe7d6" stroke="#8b7d62" strokeWidth="1.2" />
          {[6, 18, 54, 66].map((x) => <rect key={x} x={x} y="22" width="7" height="10" fill="#6c8aa3" />)}
          {[6, 18, 54, 66].map((x) => <rect key={"b" + x} x={x} y="38" width="7" height="10" fill="#6c8aa3" />)}
          <rect x="31" y="44" width="16" height="18" fill="#5a4630" />
          <circle cx="39" cy="30" r="11" fill="#fff" stroke="#00663d" strokeWidth="1.2" />
          <image href="img/brand/moroor.png" x="30" y="21" width="18" height="18" />
          <text x="39" y="-4" textAnchor="middle" className="st-label">{ar ? "المرور" : "Moroor"}</text>
        </g>
        {/* lesson speed bumps along the whole road */}
        {LESSONS.map((l, i) => {
          const x = bumpX(i);
          const done = !!p.lessons[l.id];
          return <g key={l.id} className="bump" onClick={() => nav("/lessons/" + l.id)}><rect x={x - 3} y={ROAD_Y - 24} width="6" height="48" rx="2.5" fill={done ? "url(#bump)" : "#59606a"} /><title>{l.id} · {L(l)}{done ? " ✓" : ""}</title></g>;
        })}
        {/* stages: stretch label + traffic light at the end */}
        {STAGES.map((x, i) => {
          const s = st[x.id];
          const xs = X0 + segW * i, xe = xs + segW;
          const state = s.done ? "green" : x.id === st.next ? "amber" : "red";
          const here = current?.id === x.id;
          return (
            <g key={x.id} className={"st-stop" + (here ? " here" : "")} role="link" tabIndex={0} aria-label={`${x.n}. ${L(x)}: ${s.done ? (ar ? "تم" : "done") : s.label}`}
              onClick={() => nav(x.path)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); nav(x.path); } }}>
              <rect x={xs + 2} y={ROAD_Y - 26} width={segW - 4} height="52" fill="transparent" />
              {here ? <rect x={xs + 2} y={ROAD_Y + 29} width={segW - 4} height="4" rx="2" fill={STAGE_HUE[x.id]} /> : null}
              <text x={xs + segW / 2} y={ROAD_Y + 50} textAnchor="middle" className={"st-name" + (here ? " on" : "")} style={{ direction: ar ? "rtl" : "ltr" }}>{x.n} · {ar ? x.sAr : x.sEn}</text>
              {/* traffic light */}
              <g transform={`translate(${xe - 7} ${ROAD_Y - 72})`}>
                <rect x="5" y="38" width="4" height="12" fill="#5f6b65" />
                <rect x="0" y="0" width="14" height="40" rx="4" fill="#16201b" />
                <circle cx="7" cy="8" r="4.2" fill={state === "red" ? "#ff4b3e" : "#3a2724"} className={state === "red" ? "lamp" : ""} />
                <circle cx="7" cy="20" r="4.2" fill={state === "amber" ? "#ffbe1a" : "#3a3324"} className={state === "amber" ? "lamp blink" : ""} />
                <circle cx="7" cy="32" r="4.2" fill={state === "green" ? "#35d07f" : "#22382c"} className={state === "green" ? "lamp" : ""} />
              </g>
              {s.pct > 0 && !s.done ? <text x={xs + segW / 2} y={ROAD_Y - 34} textAnchor="middle" className="st-pct">{s.pct}%</text> : null}
            </g>
          );
        })}
        {/* the car: a blue Suzuki Fronx, seen from above */}
        <g className="st-car" style={{ transform: `translate(${carX - 24}px, ${ROAD_Y + 1}px)` }} aria-hidden="true">
          <rect x="3" y="-3" width="9" height="4" rx="1.5" fill="#111" /><rect x="34" y="-3" width="9" height="4" rx="1.5" fill="#111" />
          <rect x="3" y="20" width="9" height="4" rx="1.5" fill="#111" /><rect x="34" y="20" width="9" height="4" rx="1.5" fill="#111" />
          <path d="M2 4 Q2 0 7 0 H40 Q48 1 48 7 V14 Q48 20 40 21 H7 Q2 21 2 17 Z" fill="#1e5fbf" stroke="#0d2f66" strokeWidth="1.2" />
          <path d="M14 3 H31 Q35 3 36 6 V15 Q35 18 31 18 H14 Q11 18 11 15 V6 Q11 3 14 3 Z" fill="#163f7d" />
          <path d="M31 4 Q36 4 38 10.5 Q36 17 31 17 Z" fill="#9cc6e8" />
          <path d="M14 4.5 Q11 5 11 10.5 Q11 16 14 16.5 Z" fill="#9cc6e8" />
          <rect x="44" y="2.5" width="4" height="4" rx="1" fill="#ffe27a" /><rect x="44" y="14.5" width="4" height="4" rx="1" fill="#ffe27a" />
          <rect x="1.5" y="3" width="2" height="4" fill="#e5483d" /><rect x="1.5" y="14" width="2" height="4" fill="#e5483d" />
          <rect x="18" y="8" width="9" height="5" rx="1" fill="#f2b705" /><text x="22.5" y="12.2" textAnchor="middle" className="st-L">L</text>
        </g>
      </svg>
    </div>
  );
}
