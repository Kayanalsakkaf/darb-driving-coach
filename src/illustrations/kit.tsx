// Shared drawing kit for Darb teaching illustrations (top-down, right-hand traffic).
import type { ReactNode } from "react";

export const C = {
  road: "#3b4148",
  paint: "#f4f6f4",
  kerb: "#cfd5d1",
  ground: "#e8e4d8",
  sand: "#e9dcbf",
  green: "#00663d",
  blue: "#1f56b3",
  red: "#c4271c",
  prio: "#13703f",
  amber: "#f2b705",
  fronx: "#1e5fbf",
  ink: "#1d2327",
  glass: "#bfe3ff",
  white: "#ffffff",
  grey: "#9aa3ab",
  car2: "#e9ecef",
  car3: "#c4271c",
  cone: "rgba(242,183,5,0.28)",
  danger: "rgba(196,39,28,0.22)",
};

export type SignalMode = "l" | "r" | "hz";

/** Top-down car. r=0 faces up (north). Body 22x40. */
export function Car({ x, y, r = 0, c = C.fronx, learner, sig, s = 1, ghost }: {
  x: number; y: number; r?: number; c?: string; learner?: boolean; sig?: SignalMode; s?: number; ghost?: boolean;
}) {
  const fill = learner ? C.fronx : c;
  const ind = (side: -1 | 1) => (
    <g fill={C.amber} stroke={C.ink} strokeWidth={1}>
      <circle cx={side * 10} cy={-18} r={3} />
      <circle cx={side * 10} cy={18} r={3} />
    </g>
  );
  return (
    <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`} opacity={ghost ? 0.4 : 1}>
      <rect x={-13.5} y={-9} width={4} height={5} rx={1.5} fill={fill} stroke={C.ink} strokeWidth={1.5} />
      <rect x={9.5} y={-9} width={4} height={5} rx={1.5} fill={fill} stroke={C.ink} strokeWidth={1.5} />
      <rect x={-11} y={-20} width={22} height={40} rx={7} fill={fill} stroke={C.ink} strokeWidth={2} />
      <path d="M-8 -12 Q0 -16 8 -12 L7 -6 L-7 -6 Z" fill={C.glass} stroke={C.ink} strokeWidth={1} />
      <rect x={-7.5} y={-5} width={15} height={15} rx={3} fill="rgba(0,0,0,0.38)" />
      <path d="M-7 12 L7 12 L6 16 L-6 16 Z" fill={C.glass} stroke={C.ink} strokeWidth={1} />
      {learner && (
        <g>
          <rect x={-4} y={-2} width={8} height={9} rx={1} fill={C.amber} stroke={C.ink} strokeWidth={0.8} />
          <path d="M-1.5 0 V5 H2" fill="none" stroke={C.ink} strokeWidth={1.4} />
        </g>
      )}
      {sig === "l" && ind(-1)}
      {sig === "r" && ind(1)}
      {sig === "hz" && (<>{ind(-1)}{ind(1)}</>)}
    </g>
  );
}

/** Lorry/bus, r=0 faces up. Length 80. */
export function Truck({ x, y, r = 0, c = "#e9ecef", bus }: { x: number; y: number; r?: number; c?: string; bus?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${r})`}>
      {bus ? (
        <>
          <rect x={-14} y={-42} width={28} height={84} rx={5} fill={C.amber} stroke={C.ink} strokeWidth={2} />
          <rect x={-11} y={-40} width={22} height={6} rx={2} fill={C.glass} stroke={C.ink} strokeWidth={1} />
          <line x1={-14} y1={-20} x2={14} y2={-20} stroke={C.ink} strokeWidth={1} />
        </>
      ) : (
        <>
          <rect x={-13} y={-42} width={26} height={18} rx={4} fill={c} stroke={C.ink} strokeWidth={2} />
          <rect x={-10} y={-40} width={20} height={5} rx={1.5} fill={C.glass} stroke={C.ink} strokeWidth={1} />
          <rect x={-14} y={-22} width={28} height={64} rx={2} fill="#d7dce0" stroke={C.ink} strokeWidth={2} />
        </>
      )}
      <rect x={-17} y={-36} width={3} height={6} fill={C.ink} />
      <rect x={14} y={-36} width={3} height={6} fill={C.ink} />
    </g>
  );
}

export function Person({ x, y, c = C.red, s = 1 }: { x: number; y: number; c?: string; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <ellipse cx={0} cy={2} rx={7} ry={5} fill={c} stroke={C.ink} strokeWidth={1.5} />
      <circle cx={0} cy={-1} r={4} fill="#8a5a3c" stroke={C.ink} strokeWidth={1.5} />
    </g>
  );
}

export function Tx({ x, y, children, size = 11, anchor = "middle", c = C.ink, bold, ar, halo = true }: {
  x: number; y: number; children: ReactNode; size?: number; anchor?: "start" | "middle" | "end"; c?: string; bold?: boolean; ar?: boolean; halo?: boolean;
}) {
  // In RTL, flip start/end so labels hug the same side visually.
  return (
    <text x={x} y={y} fontSize={size} textAnchor={anchor} fill={c} fontWeight={bold ? 700 : 600}
      fontFamily="system-ui, 'Segoe UI', Tahoma, sans-serif" direction={ar ? "rtl" : "ltr"}
      stroke={halo ? "#ffffff" : "none"} strokeWidth={halo ? 3 : 0} paintOrder="stroke" strokeLinejoin="round">
      {children}
    </text>
  );
}

export function Step({ x, y, n, c = C.ink }: { x: number; y: number; n: number | string; c?: string }) {
  return (
    <g>
      <circle cx={x} cy={y} r={9} fill={c} stroke="#fff" strokeWidth={2} />
      <text x={x} y={y + 4} fontSize={11} textAnchor="middle" fill="#fff" fontWeight={700} fontFamily="system-ui, sans-serif">{n}</text>
    </g>
  );
}

/** Arrow along a path; head at (hx,hy) pointing at angle deg (0 = east, 90 = south). */
export function Arrow({ d, head, c = C.ink, dashed, w = 2.5 }: { d: string; head: [number, number, number]; c?: string; dashed?: boolean; w?: number }) {
  const [hx, hy, a] = head;
  return (
    <g>
      <path d={d} fill="none" stroke={c} strokeWidth={w} strokeDasharray={dashed ? "7 5" : undefined} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M0 0 L-10 -5.5 L-10 5.5 Z" fill={c} transform={`translate(${hx} ${hy}) rotate(${a})`} />
    </g>
  );
}

/** Dimension line between two points with end ticks and label at mid. */
export function Dim({ x1, y1, x2, y2, label, ar, c = C.ink, off = -8 }: { x1: number; y1: number; x2: number; y2: number; label: string; ar?: boolean; c?: string; off?: number }) {
  const ang = Math.atan2(y2 - y1, x2 - x1);
  const nx = -Math.sin(ang) * 5, ny = Math.cos(ang) * 5;
  const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
  const vertical = Math.abs(x2 - x1) < Math.abs(y2 - y1);
  return (
    <g stroke={c} strokeWidth={1.5}>
      <line x1={x1} y1={y1} x2={x2} y2={y2} />
      <line x1={x1 - nx} y1={y1 - ny} x2={x1 + nx} y2={y1 + ny} />
      <line x1={x2 - nx} y1={y2 - ny} x2={x2 + nx} y2={y2 + ny} />
      <g stroke="none">
        <Tx x={vertical ? mx + (off < 0 ? -8 : 8) : mx} y={vertical ? my + 4 : my + off} anchor={vertical ? (off < 0 ? "end" : "start") : "middle"} size={10} c={c} ar={ar}>{label}</Tx>
      </g>
    </g>
  );
}

export function Dashes({ x1, y1, x2, y2, c = C.paint, w = 2, dash = "10 8" }: { x1: number; y1: number; x2: number; y2: number; c?: string; w?: number; dash?: string }) {
  return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth={w} strokeDasharray={dash} />;
}

/** Painted give-way triangle on the road (points toward approaching driver = pointing down when r=0). */
export function GiveWayPaint({ x, y, r = 0 }: { x: number; y: number; r?: number }) {
  return <path d="M-7 -9 L7 -9 L0 9 Z" transform={`translate(${x} ${y}) rotate(${r})`} fill="none" stroke={C.paint} strokeWidth={2} />;
}

/** Painted lane arrow, r=0 points up. kind: s straight, r right, l left. */
export function LaneArrow({ x, y, kind, r = 0 }: { x: number; y: number; kind: "s" | "r" | "l" | "lu"; r?: number }) {
  const d = {
    s: "M0 10 V-6 M-4 -2 L0 -8 L4 -2",
    r: "M0 10 V-2 Q0 -6 5 -6 M2 -9 L7 -6 L2 -3",
    l: "M0 10 V-2 Q0 -6 -5 -6 M-2 -9 L-7 -6 L-2 -3",
    lu: "M2 10 V-4 Q2 -9 -3 -9 Q-7 -9 -7 -3 V2 M-10 -1 L-7 4 L-4 -1",
  }[kind];
  return <path d={d} transform={`translate(${x} ${y}) rotate(${r})`} fill="none" stroke={C.paint} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />;
}

export function Frame({ w, h, label, children, bg = C.ground }: { w: number; h: number; label: string; children: ReactNode; bg?: string }) {
  return (
    <svg viewBox={`0 0 ${w} ${h}`} role="img" aria-label={label} width="100%" style={{ display: "block", height: "auto" }} xmlns="http://www.w3.org/2000/svg">
      <title>{label}</title>
      <rect x={0} y={0} width={w} height={h} rx={10} fill={bg} />
      {children}
    </svg>
  );
}

/** Traffic light head (vertical). on: index of lit lamps */
export function Signal({ x, y, on, s = 1, flash }: { x: number; y: number; on: ("r" | "a" | "g")[]; s?: number; flash?: boolean }) {
  const col = { r: C.red, a: C.amber, g: "#1fa35a" } as const;
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <rect x={-11} y={-32} width={22} height={64} rx={5} fill="#22272b" stroke={C.ink} strokeWidth={2} />
      {(["r", "a", "g"] as const).map((k, i) => (
        <circle key={k} cx={0} cy={-19 + i * 19} r={7} fill={on.includes(k) ? col[k] : "#4a5157"} />
      ))}
      {flash && on.includes("a") && (
        <g stroke={C.amber} strokeWidth={2} strokeLinecap="round">
          <line x1={-15} y1={0} x2={-20} y2={0} /><line x1={15} y1={0} x2={20} y2={0} />
          <line x1={-14} y1={-6} x2={-18} y2={-10} /><line x1={14} y1={-6} x2={18} y2={-10} />
          <line x1={-14} y1={6} x2={-18} y2={10} /><line x1={14} y1={6} x2={18} y2={10} />
        </g>
      )}
    </g>
  );
}
