// Wide banner covers for skill groups A–I (640x160).
import type { JSX, ReactNode } from "react";
import { C, Car, Truck, Person, Dashes, Signal, LaneArrow, GiveWayPaint } from "./kit";

const B = ({ children, sky = "#dfe9f2", label }: { children: ReactNode; sky?: string; label: string }) => (
  <svg viewBox="0 0 640 160" role="img" aria-label={label} width="100%" style={{ display: "block", height: "auto" }} xmlns="http://www.w3.org/2000/svg">
    <rect width={640} height={160} rx={12} fill={sky} />
    {children}
  </svg>
);
const HRoad = ({ y = 70, h = 70 }: { y?: number; h?: number }) => (
  <><rect x={0} y={y} width={640} height={h} fill={C.road} /><Dashes x1={0} y1={y + h / 2} x2={640} y2={y + h / 2} /></>
);

export const SKILL_COVERS: Record<"A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I", (p: {}) => JSX.Element> = {
  A: () => (
    <B label="Basics">
      <rect x={0} y={110} width={640} height={50} fill={C.road} />
      <rect x={0} y={104} width={640} height={6} fill={C.kerb} />
      <circle cx={320} cy={60} r={40} fill="none" stroke={C.ink} strokeWidth={8} />
      <circle cx={320} cy={60} r={9} fill={C.ink} /><path d="M280 60 H311 M329 60 H360 M320 69 V100" stroke={C.ink} strokeWidth={6} />
      <Car x={140} y={132} r={90} learner /><Car x={500} y={132} r={90} c={C.car2} />
    </B>
  ),
  B: () => (
    <B label="Control and positioning">
      <HRoad y={40} h={90} />
      <Car x={200} y={108} r={90} learner />
      <path d="M230 108 H420" stroke={C.fronx} strokeWidth={2.5} strokeDasharray="7 5" />
      <Car x={500} y={108} r={90} c={C.car2} />
      <path d="M232 128 V136 M488 128 V136 M232 132 H488" stroke={C.amber} strokeWidth={2} />
    </B>
  ),
  C: () => (
    <B label="Observation, signals and planning">
      <HRoad y={50} h={80} />
      <path d="M300 110 L120 70 L120 130 Z" fill={C.cone} />
      <path d="M340 110 L560 60 L560 130 Z" fill="rgba(31,86,179,0.18)" />
      <Car x={320} y={110} r={90} learner sig="l" />
      <Signal x={600} y={40} on={["g"]} s={0.6} />
    </B>
  ),
  D: () => (
    <B label="Junctions, roundabouts and crossings">
      <rect x={0} y={60} width={640} height={60} fill={C.road} />
      <circle cx={320} cy={90} r={70} fill={C.road} /><circle cx={320} cy={90} r={28} fill="#8fbf7a" stroke={C.kerb} strokeWidth={4} />
      {[0, 1, 2, 3, 4, 5].map(i => <rect key={i} x={70 + i * 14} y={60} width={8} height={60} fill={C.paint} />)}
      <Car x={400} y={50} r={-60} learner /><Person x={40} y={90} />
      <GiveWayPaint x={520} y={75} r={90} />
    </B>
  ),
  E: () => (
    <B label="Manoeuvres">
      <rect x={0} y={20} width={640} height={140} fill={C.road} />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => <line key={i} x1={100 + i * 44} y1={20} x2={100 + i * 44} y2={90} stroke={C.paint} strokeWidth={2} />)}
      <Car x={166} y={55} c={C.car2} /><Car x={298} y={55} r={180} learner /><Car x={430} y={55} c={C.car3} />
      <path d="M380 130 Q300 130 298 90" fill="none" stroke={C.fronx} strokeWidth={2.5} strokeDasharray="7 5" />
    </B>
  ),
  F: () => (
    <B label="Road types">
      <path d="M0 160 L250 40 L390 40 L640 160 Z" fill={C.road} />
      <path d="M320 40 L320 160" stroke={C.paint} strokeWidth={2} strokeDasharray="10 8" />
      <path d="M285 40 L210 160 M355 40 L430 160" stroke={C.paint} strokeWidth={2} strokeDasharray="10 8" />
      <rect x={250} y={8} width={140} height={28} rx={4} fill={C.green} stroke="#fff" strokeWidth={2} />
      <Car x={370} y={120} learner /><Truck x={250} y={110} />
    </B>
  ),
  G: () => (
    <B label="Conditions" sky="#e9dcbf">
      <HRoad y={80} h={70} />
      <circle cx={560} cy={40} r={22} fill={C.amber} />
      <rect x={0} y={0} width={360} height={160} fill="rgba(222,205,170,0.55)" />
      {[60, 140, 220, 300].map(x => <path key={x} d={`M${x} 20 q10 -10 20 0 q10 10 20 0`} stroke="#b9a37a" strokeWidth={2} fill="none" />)}
      <path d="M440 132 L560 118 L560 146 Z" fill="rgba(255,236,150,0.6)" />
      <Car x={420} y={132} r={90} learner />
    </B>
  ),
  H: () => (
    <B label="Routes">
      <path d="M0 120 Q160 40 320 100 T640 60" fill="none" stroke={C.road} strokeWidth={36} />
      <path d="M0 120 Q160 40 320 100 T640 60" fill="none" stroke={C.paint} strokeWidth={2} strokeDasharray="10 8" />
      <circle cx={80} cy={88} r={10} fill={C.prio} stroke="#fff" strokeWidth={3} />
      <path d="M600 30 a14 14 0 1 1 -1 0 Z M600 58 l-12 -18 h24 Z" fill={C.red} />
      <Car x={330} y={100} r={80} learner />
    </B>
  ),
  I: () => (
    <B label="Saudi extras" sky="#f0e4c6">
      <path d="M0 110 Q120 70 240 105 T480 95 T640 100 V160 H0 Z" fill={C.sand} />
      <rect x={0} y={120} width={640} height={40} fill={C.road} />
      <line x1={0} y1={128} x2={640} y2={128} stroke={C.paint} strokeWidth={0} />
      <path d="M150 104 l18 -14 l18 14 M160 96 v-8" stroke="#8a5a3c" strokeWidth={3} fill="none" />
      <path d="M420 98 q8 -16 22 -10 q10 -14 20 0 l6 14 h-10 v-10 h-8 l-4 10 h-10 v-8 z" fill="#b07b47" />
      <rect x={520} y={36} width={60} height={60} rx={6} fill={C.blue} stroke="#fff" strokeWidth={3} />
      <g transform="translate(550 66) scale(1.4)"><LaneArrow x={0} y={0} kind="lu" /></g>
      <Car x={260} y={140} r={90} learner />
    </B>
  ),
};
