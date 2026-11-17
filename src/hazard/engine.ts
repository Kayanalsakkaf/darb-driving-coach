/* Hazard perception scoring, following the DVSA logic:
   - each scoring window is split into 5 equal segments worth 5,4,3,2,1 (0 outside);
   - a hazard scores the best click inside its window;
   - rapid / continuous / rhythmic clicking scores 0 for the whole clip. */

export type Win = [number, number];

export const PASS_MARK = 44;
export const MAX_PER_HAZARD = 5;

/** Points a single click at time t earns in window w (0 before or after). */
export function clickPoints(w: Win, t: number): number {
  const [s, e] = w;
  if (t < s || t > e) return 0;
  const seg = Math.min(4, Math.floor(((t - s) / (e - s)) * 5));
  return 5 - seg;
}

/** Segment boundaries of a window, for drawing: 6 times from start to end. */
export const segments = (w: Win) => Array.from({ length: 6 }, (_, i) => w[0] + ((w[1] - w[0]) * i) / 5);

export type CheatReason = "burst" | "rhythm" | "too-many" | null;

/** Detects clicking patterns that the DVSA test treats as cheating. */
export function detectCheat(clicks: number[]): CheatReason {
  const c = [...clicks].sort((a, b) => a - b);
  if (c.length >= 15) return "too-many";
  // 7 or more clicks within any 5-second span.
  for (let i = 0; i + 6 < c.length; i++) if (c[i + 6] - c[i] <= 5) return "burst";
  // Regular rhythm: 6+ consecutive clicks evenly spaced (low variation, under 3 s apart).
  for (let i = 0; i + 5 < c.length; i++) {
    const gaps = [1, 2, 3, 4, 5].map((k) => c[i + k] - c[i + k - 1]);
    const mean = gaps.reduce((a, b) => a + b, 0) / gaps.length;
    const sd = Math.sqrt(gaps.reduce((a, g) => a + (g - mean) ** 2, 0) / gaps.length);
    if (mean < 3 && sd / mean < 0.15) return "rhythm";
  }
  return null;
}

export type HazardScore = { window: Win; score: number; best: number | null };
export type ClipScore = { clicks: number[]; cheat: CheatReason; hazards: HazardScore[]; score: number; max: number };

export function scoreClip(windows: Win[], clicks: number[]): ClipScore {
  const cheat = detectCheat(clicks);
  const hazards = windows.map((w) => {
    let score = 0;
    let best: number | null = null;
    for (const t of clicks) {
      const p = clickPoints(w, t);
      if (p > score) { score = p; best = t; }
    }
    return { window: w, score: cheat ? 0 : score, best };
  });
  return { clicks, cheat, hazards, score: hazards.reduce((a, h) => a + h.score, 0), max: windows.length * MAX_PER_HAZARD };
}

/** Pass mark scaled to the number of hazards (44/75 for the standard 15 hazards). */
export const passMarkFor = (max: number) => (max === 75 ? PASS_MARK : Math.ceil((PASS_MARK / 75) * max));
