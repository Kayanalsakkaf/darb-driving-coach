import { useStore } from "./store";
import { COURSE, LESSONS, SKILLS, CAR, SK } from "./data";
import { READY_STEPS, BOOK_STEPS, STAGES, type StageId } from "./journey";

/** Theory topics: the course sections that carry source reading (Moroor or Highway Code). */
export const TOPICS: any[] = COURSE.sections.filter((s: any) => s.hb.length || s.hc.length);
export const topicTitle = (sec: any, L: (x: any) => string) => (sec.skill ? L(SK[String(sec.skill)]) : L(sec));
export const CORE_SKILLS = SKILLS.filter((s) => s.g !== "M");
export const LICENCE_STEPS = ["lic-fee", "lic-collect"];

export type StageState = { pct: number; done: boolean; label: string };

export function useStageStatus(): Record<StageId, StageState> & { next: StageId } {
  const { p, s, user, ar } = useStore();
  const f = (a: number, b: number, unitEn: string, unitAr: string): StageState => ({ pct: b ? Math.round((a / b) * 100) : 0, done: b > 0 && a >= b, label: `${a} / ${b} ${ar ? unitAr : unitEn}` });
  const ready = f(READY_STEPS.filter((x) => p.steps[x.id]).length, READY_STEPS.length, "steps", "خطوات");
  const theory = f(TOPICS.filter((t) => p.read[t.id]).length, TOPICS.length, "topics read", "موضوعات مقروءة");
  const carKeys = CAR.sections.map((c: any) => "car:" + c.id);
  const car = f(carKeys.filter((k: string) => p.read[k]).length, carKeys.length, "sections read", "أقسام مقروءة");
  const mocks = s.attempts.filter((a) => a.userId === user.id && a.kind === "mock" && a.total >= 40);
  const last3 = mocks.slice(-3);
  const streak = last3.length === 3 && last3.every((a) => a.score >= 43);
  const best = mocks.reduce((m, a) => Math.max(m, Math.round((a.score / a.total) * 100)), 0);
  const tt: StageState = { pct: streak ? 100 : best, done: streak, label: mocks.length ? (ar ? `أفضل نتيجة ${best}%` : `Best mock ${best}%`) : ar ? "لا اختبارات بعد" : "No mocks yet" };
  const lessons = f(LESSONS.filter((l) => p.lessons[l.id]).length, LESSONS.length, "lessons done", "دروس منجزة");
  const skills = f(CORE_SKILLS.filter((k) => (p.skills[k.id]?.level || 0) >= 4).length, CORE_SKILLS.length, "skills at level 4+", "مهارات بالمستوى 4+");
  const tests = f(BOOK_STEPS.filter((x) => p.steps[x.id]).length, BOOK_STEPS.length, "steps", "خطوات");
  const licence = f(LICENCE_STEPS.filter((k) => p.steps[k]).length, LICENCE_STEPS.length, "steps", "خطوات");
  const all = { ready, theory, car, "theory-test": tt, lessons, skills, tests, licence } as Record<StageId, StageState>;
  const next = (STAGES.find((x) => !all[x.id].done)?.id || "licence") as StageId;
  return Object.assign(all, { next });
}

/** Number of Moroor figures inside a topic's handbook page ranges. */
import { HBU, FIGURES } from "./data";
export function figCount(t: any) {
  return t.hb.reduce((n: number, h: any) => {
    const u = HBU[Array.isArray(h) ? h[0] : h]; if (!u) return n;
    const a = Array.isArray(h) ? h[1] : u.from, b = Array.isArray(h) ? h[2] : u.to;
    return n + FIGURES.filter((f) => f.page >= a && f.page <= b).length;
  }, 0);
}
