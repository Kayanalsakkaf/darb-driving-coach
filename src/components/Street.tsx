/* The street from home to Moroor: the journey progress tracker.
   Each stage is a stretch of road ending at a traffic light; lessons are speed bumps; the car sits where you are. */
import { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useStore } from "../lib/store";
import { STAGES } from "../lib/journey";
import { LESSONS } from "../lib/data";
import { useStageStatus } from "../lib/progress";

const W = 1240, H = 150, X0 = 92, X1 = 1150, ROAD_Y = 92;
const segW = (X1 - X0) / STAGES.length;
export const STAGE_HUE: Record<string, string> = {
  theory: "#1f56b3", car: "#c75d0e", lessons: "#13703f", skills: "#7a3fb0", ready: "#0d7c86", "theory-test": "#a86b00", tests: "#c4271c", licence: "#00663d",
};

export function Street() {
  const { L, ar, p } = useStore();
  const st = useStageStatus();
  const nav = useNavigate();
  const loc = useLocation();
  const box = useRef<HTMLDivElement>(null);
  const current = STAGES.find((x) => loc.pathname.startsWith(x.path));
  // car position: finished stages + fraction of the first unfinished one
  const idx = STAGES.findIndex((x) => x.id === st.next);
  const doneAll = STAGES.every((x) => st[x.id].done);
  const carX = doneAll ? X1 + 10 : X0 + segW * idx + segW * Math.min(0.92, st[st.next].pct / 100);
  const lessonsStage = STAGES.findIndex((x) => x.id === "lessons");
  useEffect(() => {
    const el = box.current; if (!el) return;
    const target = ((current ? STAGES.indexOf(current) + 0.5 : idx + 0.5) * segW + X0) / W * el.scrollWidth;
    requestAnimationFrame(() => el.scrollTo({ left: ar ? -(el.scrollWidth - target - el.clientWidth / 2) : target - el.clientWidth / 2 }));
  }, [current?.id, idx, ar]);
  return (
    <div className="street-wrap" ref={box}>
      <svg className="street" viewBox={`0 0 ${W} ${H}`} role="group" aria-label={ar ? "الطريق من البيت إلى المرور" : "The road from home to Moroor"} style={{ direction: "ltr" }}>
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
        {/* Moroor */}
        <g transform={`translate(${X1 + 18} ${ROAD_Y - 80})`} className="moroor">
          <rect x="0" y="10" width="64" height="44" fill="#00663d" rx="3" /><rect x="3" y="13" width="58" height="38" fill="none" stroke="#fff" strokeWidth="1.5" rx="2" />
          <text x="32" y="38" textAnchor="middle" className="st-sign">{ar ? "المرور" : "MOROOR"}</text>
          <rect x="29" y="54" width="6" height="14" fill="#8a9690" />
        </g>
        {/* lesson speed bumps */}
        {LESSONS.map((l, i) => {
          const x = X0 + segW * lessonsStage + 10 + (i * (segW - 20)) / Math.max(1, LESSONS.length - 1);
          const done = !!p.lessons[l.id];
          return <rect key={l.id} x={x - 2.5} y={ROAD_Y - 24} width="5" height="48" rx="2" fill={done ? "url(#bump)" : "#596069"} opacity={done ? 1 : 0.8}><title>{l.id} · {L(l)}</title></rect>;
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
        {/* the car */}
        <g className="st-car" style={{ transform: `translate(${carX - 22}px, ${ROAD_Y + 2}px)` }} aria-hidden="true">
          <rect x="0" y="0" width="44" height="20" rx="6" fill="#ffffff" stroke="#16201b" strokeWidth="1.5" />
          <rect x="22" y="3" width="13" height="14" rx="3" fill="#9cc6e8" />
          <rect x="41" y="3" width="3" height="5" rx="1" fill="#ffe27a" /><rect x="41" y="12" width="3" height="5" rx="1" fill="#ffe27a" />
          <rect x="2" y="-3" width="9" height="4" rx="1.5" fill="#16201b" /><rect x="30" y="-3" width="9" height="4" rx="1.5" fill="#16201b" />
          <rect x="2" y="19" width="9" height="4" rx="1.5" fill="#16201b" /><rect x="30" y="19" width="9" height="4" rx="1.5" fill="#16201b" />
          <rect x="4" y="6" width="8" height="8" rx="1.5" fill="#f2b705" /><text x="8" y="12.5" textAnchor="middle" className="st-L">L</text>
        </g>
      </svg>
    </div>
  );
}
