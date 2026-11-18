/* Illustrations are optional modules: the app works before they exist and picks them up when they do. */
const scenes = import.meta.glob("./scenes.tsx", { eager: true }) as Record<string, any>;
const covers = import.meta.glob("./covers.tsx", { eager: true }) as Record<string, any>;
const symbols = import.meta.glob("./symbols.tsx", { eager: true }) as Record<string, any>;
const first = (m: Record<string, any>) => Object.values(m)[0] || {};
export const SCENES: Record<string, { en: string; ar: string; C: (p: { ar: boolean }) => any }> = first(scenes).SCENES || {};
export const LESSON_SCENES: Record<string, string[]> = first(scenes).LESSON_SCENES || {};
export const SKILL_COVERS: Record<string, (p: any) => any> = first(covers).SKILL_COVERS || {};
export const CHECK_SYMBOLS: Record<string, (p: { size?: number }) => any> = first(symbols).CHECK_SYMBOLS || {};
