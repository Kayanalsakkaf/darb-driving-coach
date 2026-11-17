/* Content loader. data/*.js are the original content files; they attach to window.DC_DATA. */
import "../data/meta.js";
import "../data/signs.js";
import "../data/course.js";
import "../data/questions.js";
import "../data/diagrams.js";
import "../data/hb.js";
import "../data/hc.js";
import "../data/lessons.js";
import car from "../data/car.js";
import figures, { points as figPoints } from "../data/figures.js";

export type Bi = { en: string; ar: string };
export type Block = { k: string; [x: string]: any };
const D: any = (window as any).DC_DATA;

export const META = D.meta;
export const SIGNS: any[] = D.signs;
export const COURSE = D.course;
export const QUESTIONS: any[] = D.questions;
export const QTOPICS: Record<string, Bi> = D.qtopics;
export const DIAGRAMS: any[] = D.diagrams;
export const HB: any[] = D.hb;
export const HC: { rules: Record<string, any>; order: string[]; units: Record<string, any> } = D.hc;
export const CAR: any = car;
/* Figure files use PDF page numbers; the app uses printed page numbers (PDF - 1). */
const pp = (f: any) => (f.printedPage ?? f.page - 1);
export const FIGURES: { id: string; page: number; src: string; ar: string; en: string; topic: string }[] = (figures as any[]).map((f) => ({ ...f, page: pp(f), src: "img/hbf/" + f.src }));
export const FIG_POINTS: { page: number; topic: string; ar: string; en: string }[] = ((figPoints as any[]) || []).map((f) => ({ ...f, page: pp(f) }));

export const CHAPTERS: any[] = COURSE.chapters;
export const LESSONS: any[] = D.lessons2.lessons;
export const THEORY_ONLY: { id: string; en: string; ar: string; points: any[] }[] = D.lessons2.theoryOnly;
export const FIG = Object.fromEntries((figures as any[]).map((f) => [f.id, { ...f, page: f.printedPage ?? f.page - 1, src: "img/hbf/" + f.src }]));
export const CHECKLISTS: Record<string, { en: string; ar: string; items: [string, string][] }> = COURSE.checklists;
export const LEVELS: { n: number; en: string; ar: string; dEn: string; dAr: string }[] = COURSE.levels;
export const SKILL_GROUPS: Record<string, Bi> = COURSE.skillGroups;

export type Skill = { id: string; en: string; ar: string; g: string; where: string; ksa: boolean; tEn: string; tAr: string; l4En: string; l4Ar: string; ch: string[] };
export const SKILLS: Skill[] = COURSE.skills.map((a: any[]) => ({ id: String(a[0]), en: a[1], ar: a[2], g: a[3], where: a[4], ksa: !!a[6], tEn: a[7], tAr: a[8], l4En: a[9], l4Ar: a[10], ch: a[11] || [] }));

const by = <T extends Record<string, any>>(a: T[], k = "id") => Object.fromEntries(a.map((x) => [x[k], x])) as Record<string, T>;
export const CH = by(CHAPTERS), LES = by(LESSONS), SK = by(SKILLS), HBU = by(HB), DG = by(DIAGRAMS), SIGN = by(SIGNS);

/** Handbook figures that fall inside a handbook unit's page range. */
export function figuresForUnit(id: string) {
  const u = HBU[id]; if (!u) return [];
  return FIGURES.filter((f) => f.page >= u.from && f.page <= u.to);
}
export function pointsForUnit(id: string) {
  const u = HBU[id]; if (!u) return [];
  return FIG_POINTS.filter((f) => f.page >= u.from && f.page <= u.to);
}
/** Highway Code unit ids ("hc-junctions") -> block lists. */
export function hcUnit(id: string) { return HC.units[id.replace(/^hc-/, "")] || HC.units[id]; }
export const hbPage = (p: number) => `img/pages/hb-p${String(p).padStart(3, "0")}.webp`;
export const hcImg = (key: string) => {
  const name = key.replace("/", "-");
  return `img/pages/${name}.jpeg`;
};
export const chaptersForLesson = (l: any) => (l.ch || []).map((c: string) => CH[c]).filter(Boolean);
export const lessonsForChapter = (cid: string) => LESSONS.filter((l) => (l.ch || []).includes(cid));
