/* Lesson 0: everything from the theory and the car manual that no practical lesson teaches.
   Studied before the first lesson. Computed from the data so it stays complete as lessons change. */
import { LESSONS, THEORY_ONLY, CAR } from "./data";

const SUMMARIES = (): Record<string, any[]> => (window as any).DC_DATA?.summaries || {};

export function firstLessonPack() {
  const used = new Set<string>(LESSONS.flatMap((l: any) => [...(l.before || []), ...(l.car || [])].map((b: any) => b.en)));
  const toUsed = new Set<string>(THEORY_ONLY.flatMap((t) => t.points.map((b: any) => b.en)));
  const leftoverRules = Object.entries(SUMMARIES()).flatMap(([topic, pts]) => pts.filter((b) => !used.has(b.en) && !toUsed.has(b.en)).map((b) => ({ ...b, topic })));
  const carRefs = LESSONS.flatMap((l: any) => (l.car || []).map((c: any) => String(c.ref || ""))).join(" ");
  const carPages = new Set((carRefs.match(/\d+-\d+/g) || []) as string[]);
  const carLeft = CAR.sections.map((sec: any) => ({ ...sec, items: sec.items.filter((it: any) => it.variant !== "manual" && !carPages.has(String(it.page))) })).filter((sec: any) => sec.items.length);
  return { theoryOnly: THEORY_ONLY, leftoverRules, carLeft };
}
