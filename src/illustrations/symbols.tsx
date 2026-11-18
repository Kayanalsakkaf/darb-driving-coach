// Road-sign-style pictograms for checklist ids. 48x48 grid, 2.5 stroke.
import type { JSX, ReactNode } from "react";
import { C } from "./kit";

const S = (bg: string, shape: "circle" | "square" | "tri", label: string, kids: ReactNode) =>
  ({ size = 48 }: { size?: number }) => (
    <svg viewBox="0 0 48 48" width={size} height={size} role="img" aria-label={label} xmlns="http://www.w3.org/2000/svg">
      {shape === "circle" && <circle cx={24} cy={24} r={22} fill={bg} />}
      {shape === "square" && <rect x={2} y={2} width={44} height={44} rx={8} fill={bg} />}
      {shape === "tri" && <path d="M24 3 L46 43 H2 Z" fill="#fff" stroke={C.red} strokeWidth={4} strokeLinejoin="round" />}
      <g fill="none" stroke={shape === "tri" ? C.ink : "#fff"} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">{kids}</g>
    </svg>
  );

export const CHECK_SYMBOLS: Record<string, (p: { size?: number }) => JSX.Element> = {
  controls: S(C.blue, "circle", "Controls", <><circle cx={24} cy={24} r={13} /><circle cx={24} cy={24} r={3} /><path d="M11 24 H21 M27 24 H37 M24 27 V37" /></>),
  cockpit: S(C.blue, "circle", "Cockpit", <><path d="M16 36 V22 Q16 14 22 12 M16 36 H32 M30 30 L30 36" /><path d="M18 14 L32 32" /></>),
  movingoff: S(C.prio, "circle", "Moving off", <><path d="M30 38 V22 Q30 14 22 14 H14" /><path d="M18 10 L14 14 L18 18" /><path d="M34 38 V30" strokeDasharray="2 3" /></>),
  lanes: S(C.blue, "square", "Lanes", <><path d="M12 38 V10 M24 38 V32 M24 26 V20 M24 14 V10 M36 38 V10" /><path d="M30 34 V18 M27 21 L30 17 L33 21" /></>),
  junctions: S(C.ink, "tri", "Junctions", <><path d="M24 40 V24 M14 24 H34" strokeWidth={4} /></>),
  roundabouts: S(C.blue, "circle", "Roundabouts", <><path d="M24 12 A12 12 0 0 1 36 24" /><path d="M36 24 A12 12 0 0 1 24 36" /><path d="M24 36 A12 12 0 0 1 12 24" /><path d="M33 19 L36 24 L40 20 M29 35 L24 36 L26 40 M12 29 L12 24 L8 26" /></>),
  parking: S(C.blue, "square", "Parking", <path d="M18 36 V12 H26 Q33 12 33 19 Q33 26 26 26 H18" strokeWidth={4} />),
  mock: S(C.green, "square", "Mock test", <><rect x={13} y={10} width={22} height={28} rx={3} /><path d="M18 20 L21 23 L27 16 M18 30 H30" /></>),
  week: S(C.green, "square", "Week plan", <><rect x={10} y={13} width={28} height={24} rx={3} /><path d="M10 20 H38 M17 9 V15 M31 9 V15 M16 26 H20 M24 26 H28 M16 31 H20" /></>),
  day: S(C.amber, "circle", "On the day", <><circle cx={24} cy={24} r={7} /><path d="M24 9 V12 M24 36 V39 M9 24 H12 M36 24 H39 M13 13 L15 15 M33 33 L35 35 M35 13 L33 15 M13 35 L15 33" /></>),
  school: S(C.ink, "tri", "School", <><circle cx={19} cy={22} r={2.5} /><circle cx={29} cy={20} r={2.5} /><path d="M19 26 V34 M16 40 L19 34 L22 40 M29 24 V33 M26 40 L29 33 L32 40 M19 28 L29 27" /></>),
};
