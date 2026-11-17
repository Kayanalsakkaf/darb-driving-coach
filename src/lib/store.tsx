/* Local-only store: one shared account on this device, any number of learners.
   Everything lives in localStorage; Settings exports and imports JSON. */
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "en" | "ar";
export type User = { id: string; name: string };
export type Progress = {
  lessons: Record<string, { at: string }>;
  theory: Record<string, { at: string }>;
  checks: Record<string, { at: string }>;
  skills: Record<string, { level: number; at: string }>;
  known: Record<string, boolean>;
  read: Record<string, { at: string }>;
  steps: Record<string, { at: string }>;
};
export type LogEntry = { id: string; userId: string; by: string; date: string; durationMin: number; lesson: string; area: string; skills: { id: string; level: number }[]; notes: string; next: string };
export type Attempt = { id: string; userId: string; date: string; kind: "mock" | "practice"; score: number; total: number };
export type State = { schema: 3; app: "darb"; users: User[]; activeUser: string; lang: Lang; gearbox: "auto" | "manual"; progress: Record<string, Progress>; logs: LogEntry[]; attempts: Attempt[] };

const KEY = "darb.v3";
export const today = () => new Date().toISOString().slice(0, 10);
export const uid = (p: string) => p + "-" + Math.random().toString(36).slice(2, 9);
const emptyProgress = (): Progress => ({ lessons: {}, theory: {}, checks: {}, skills: {}, known: {}, read: {}, steps: {} });

function fresh(): State {
  return { schema: 3, app: "darb", users: [{ id: "learner-hind", name: "Hind" }], activeUser: "learner-hind", lang: "en", gearbox: "auto", progress: {}, logs: [], attempts: [] };
}

/** Accepts a v3 state or the earlier Darb v2 export and returns a v3 state. */
export function migrate(raw: any): State | null {
  if (!raw || raw.app !== "darb") return null;
  if (raw.schema === 3) return { ...fresh(), ...raw };
  if (raw.schema === 2) {
    const s = fresh();
    s.users = (raw.profiles?.learners || s.users).map((u: any) => ({ id: u.id, name: u.name }));
    s.activeUser = raw.session?.learnerId || s.users[0].id;
    s.lang = raw.session?.lang === "ar" ? "ar" : "en";
    const names: Record<string, string> = {};
    [...(raw.profiles?.learners || []), ...(raw.profiles?.instructors || [])].forEach((p: any) => (names[p.id] = p.name));
    for (const [id, p] of Object.entries<any>(raw.progress || {})) s.progress[id] = { ...emptyProgress(), ...p };
    s.logs = (raw.logs || []).map((l: any) => ({ id: l.id, userId: l.learnerId, by: names[l.instructorId] || "", date: l.date, durationMin: l.durationMin || 0, lesson: l.lesson || "", area: l.area || "", skills: (l.skills || []).map((x: any) => ({ id: String(x.skillId || x.id), level: x.level })), notes: l.notes || "", next: l.next || "" }));
    s.attempts = (raw.attempts || []).map((a: any) => ({ id: a.id || uid("a"), userId: a.learnerId, date: a.date || a.at || today(), kind: a.kind === "practice" ? "practice" : "mock", score: a.score ?? 0, total: a.total ?? 50 }));
    return s;
  }
  return null;
}

function load(): State {
  try { const s = migrate(JSON.parse(localStorage.getItem(KEY) || "null")); if (s) return s; } catch { /* fall through */ }
  try { const s = migrate(JSON.parse(localStorage.getItem("darb.v2") || "null")); if (s) return s; } catch { /* fall through */ }
  return fresh();
}

type Ctx = {
  s: State;
  set: (fn: (s: State) => void) => void;
  replace: (s: State) => void;
  p: Progress;
  user: User;
  lang: Lang;
  ar: boolean;
  /** Pick the string for the current language from {en, ar} or a pair. */
  L: (x: any) => string;
  toggle: (bucket: "lessons" | "theory" | "checks" | "read" | "steps", key: string) => void;
};
const StoreCtx = createContext<Ctx>(null as any);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [s, setS] = useState<State>(load);
  useEffect(() => { localStorage.setItem(KEY, JSON.stringify(s)); }, [s]);
  useEffect(() => {
    document.documentElement.lang = s.lang === "ar" ? "ar" : "en";
    document.documentElement.dir = s.lang === "ar" ? "rtl" : "ltr";
  }, [s.lang]);
  const set = useCallback((fn: (s: State) => void) => setS((prev) => { const next: State = structuredClone(prev); fn(next); return next; }), []);
  const value = useMemo<Ctx>(() => {
    const user = s.users.find((u) => u.id === s.activeUser) || s.users[0];
    const p = { ...emptyProgress(), ...(s.progress[user.id] || {}) };
    const ar = s.lang === "ar";
    return {
      s, set, replace: setS, p, user, lang: s.lang, ar,
      L: (x: any) => (x == null ? "" : typeof x === "string" ? x : Array.isArray(x) ? (ar ? x[1] : x[0]) : ar ? x.ar ?? x.en : x.en ?? x.ar),
      toggle: (bucket, key) => set((n) => {
        const pp = (n.progress[user.id] = { ...emptyProgress(), ...(n.progress[user.id] || {}) });
        const b = pp[bucket] as Record<string, any>;
        if (b[key]) delete b[key]; else b[key] = { at: today() };
      }),
    };
  }, [s, set]);
  return <StoreCtx.Provider value={value}>{children}</StoreCtx.Provider>;
}
export const useStore = () => useContext(StoreCtx);

export function setSkill(set: Ctx["set"], userId: string, skillId: string, level: number) {
  set((n) => {
    const pp = (n.progress[userId] = { ...emptyProgress(), ...(n.progress[userId] || {}) });
    if (level <= 0) delete pp.skills[skillId]; else pp.skills[skillId] = { level, at: today() };
  });
}
