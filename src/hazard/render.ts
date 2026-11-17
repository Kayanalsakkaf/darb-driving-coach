/* Canvas 2D driver's-eye renderer for hazard scenes: straight road, pinhole
   projection, painter's algorithm, distance fog for dust and night. */
import { drive, LW, type Actor, type Face, type Kind, type Scene } from "./scenes";

const CAM_H = 1.25;
const NEAR = 1.2;
const FAR = 320;

type Compiled = { z: (t: number) => number };
const cache = new WeakMap<Scene, Compiled>();
const compiled = (s: Scene) => {
  let c = cache.get(s);
  if (!c) { c = drive(s.speed); cache.set(s, c); }
  return c;
};

function interp(keys: number[][], t: number): number[] {
  if (t <= keys[0][0]) return keys[0].slice(1);
  for (let i = 0; i < keys.length - 1; i++) {
    const a = keys[i], b = keys[i + 1];
    if (t <= b[0]) {
      const u = (t - a[0]) / (b[0] - a[0] || 1);
      return a.slice(1).map((v, j) => v + (b[j + 1] - v) * u);
    }
  }
  return keys[keys.length - 1].slice(1);
}
const hash = (n: number) => { const x = Math.sin(n * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };
const inGaps = (z: number, gaps?: [number, number][]) => !!gaps?.some(([a, b]) => z > a && z < b);

const DIMS: Record<Kind, { w: number; h: number; len: number }> = {
  car: { w: 1.8, h: 1.45, len: 4.5 }, suv: { w: 1.95, h: 1.8, len: 4.8 }, truck: { w: 2.5, h: 3.5, len: 10 },
  bus: { w: 2.5, h: 3.0, len: 11 }, ped: { w: 0.5, h: 1.75, len: 0.4 }, child: { w: 0.4, h: 1.15, len: 0.3 },
  ball: { w: 0.24, h: 0.24, len: 0.24 }, camel: { w: 0.7, h: 2.1, len: 2.4 }, moto: { w: 0.7, h: 1.5, len: 2 }, bike: { w: 0.5, h: 1.3, len: 1.6 },
};

export type View = { W: number; H: number };

export function renderScene(ctx: CanvasRenderingContext2D, s: Scene, t: number, v: View) {
  const { W, H } = v;
  const e = s.env;
  const camZ = compiled(s).z(t);
  const camX = interp(s.camX, t)[0];
  const f = W * 0.82;
  const hor = H * 0.44;
  const P = (x: number, y: number, z: number) => {
    const dz = z - camZ;
    return { x: W / 2 + ((x - camX) * f) / dz, y: hor + ((CAM_H - y) * f) / dz, s: f / dz, dz };
  };
  const night = !!e.night, dust = !!e.dust;
  const fogColor = night ? "#04060a" : dust ? "#c8a678" : e.look === "desert" ? "#e9dcc0" : "#dfe7ea";
  const fogDist = night ? 42 : dust ? 34 : 420;
  const vis = (dz: number) => Math.exp(-Math.max(0, dz) / fogDist);

  /* --- sky and ground --- */
  const sky = ctx.createLinearGradient(0, 0, 0, hor);
  if (night) { sky.addColorStop(0, "#02040a"); sky.addColorStop(1, "#0b1020"); }
  else if (dust) { sky.addColorStop(0, "#b58e5c"); sky.addColorStop(1, fogColor); }
  else { sky.addColorStop(0, e.look === "desert" ? "#8fc0e4" : "#7fb4dc"); sky.addColorStop(1, fogColor); }
  ctx.fillStyle = sky; ctx.fillRect(0, 0, W, hor + 1);
  const groundCol = night ? "#0c0d10" : e.look === "desert" ? "#dcb983" : e.look === "highway" ? "#d4c4a0" : "#cdbfa4";
  ctx.fillStyle = groundCol; ctx.fillRect(0, hor, W, H - hor);

  if (e.look === "desert" && !dust && !night) { // distant dunes
    ctx.fillStyle = "#d3ae74";
    ctx.beginPath(); ctx.moveTo(0, hor);
    for (let i = 0; i <= 24; i++) { const xx = (i / 24) * W; ctx.lineTo(xx, hor - 6 - 10 * Math.abs(Math.sin(i * 1.7 + e.seed))); }
    ctx.lineTo(W, hor); ctx.fill();
  }

  const quad = (pts: [number, number, number][], fill: string) => {
    const zs = pts.map((p) => p[2]);
    if (Math.max(...zs) <= camZ + NEAR) return;
    const q = pts.map(([x, y, z]) => P(x, y, Math.max(z, camZ + NEAR)));
    ctx.fillStyle = fill; ctx.beginPath(); ctx.moveTo(q[0].x, q[0].y);
    for (let i = 1; i < q.length; i++) ctx.lineTo(q[i].x, q[i].y);
    ctx.closePath(); ctx.fill();
  };
  const zN = camZ + NEAR, zF = camZ + FAR;
  const half = e.median / 2 + e.lanes * LW;
  const park = e.parking === "parallel" ? 2.5 : e.parking === "bays" ? 5.5 : 0;
  const edgeR = half + park, edgeL = -half - (e.parking === "parallel" ? 0 : 0);
  const road = night ? "#1a1b1e" : "#5b5e62";
  const walk = night ? "#16171a" : e.look === "desert" ? "#d0ad78" : "#c9c3b6";
  const line = night ? "#9b9b8c" : "#f4f4ee";

  // pavements / shoulders
  if (e.look === "city" || e.look === "suburb") {
    quad([[edgeR, 0, zN], [edgeR + 3.5, 0, zN], [edgeR + 3.5, 0, zF], [edgeR, 0, zF]], walk);
    quad([[edgeL - 3.5, 0, zN], [edgeL, 0, zN], [edgeL, 0, zF], [edgeL - 3.5, 0, zF]], walk);
  }
  quad([[edgeL, 0, zN], [edgeR, 0, zN], [edgeR, 0, zF], [edgeL, 0, zF]], road);
  if (park) quad([[half, 0, zN], [edgeR, 0, zN], [edgeR, 0, zF], [half, 0, zF]], night ? "#1d1e21" : "#676a6e");

  for (const m of s.marks) {
    if (m.type === "sideroad") {
      const xa = m.side > 0 ? edgeR : edgeL, xb = m.side > 0 ? edgeR + 60 : edgeL - 60;
      quad([[xa, 0, m.z], [xb, 0, m.z], [xb, 0, m.z + m.w], [xa, 0, m.z + m.w]], road);
      const sl = m.side > 0 ? edgeR + 0.3 : edgeL - 0.3; // give-way line
      quad([[sl, 0.01, m.z + 0.4], [sl + 0.3 * m.side, 0.01, m.z + 0.4], [sl + 0.3 * m.side, 0.01, m.z + m.w / 2], [sl, 0.01, m.z + m.w / 2]], line);
    } else if (m.type === "ramp") {
      const x0 = m.side > 0 ? half : -half, x1 = x0 + LW * m.side;
      quad([[x0, 0, m.z0], [x1, 0, m.z0 + 30], [x1, 0, m.z1 - 40], [x0, 0, m.z1]], road);
    } else if (m.type === "roundabout") {
      const ring = (r: number, col: string) => {
        const pts: [number, number, number][] = [];
        for (let i = 0; i <= 40; i++) { const a = (i / 40) * Math.PI * 2; pts.push([Math.cos(a) * r, 0, m.z + Math.sin(a) * r]); }
        const near = pts.filter((p) => p[2] > camZ + NEAR);
        if (near.length < 3) return;
        quad(near, col);
      };
      ring(m.r + 9, road);
      ring(m.r + 0.4, "#e8e4da");
      ring(m.r, night ? "#13241a" : "#7aa35a");
    }
  }

  // lane markings
  const dashes = (x: number, dash: number, gap: number, w = 0.14, col = line) => {
    const start = Math.floor(zN / (dash + gap)) * (dash + gap);
    for (let z = start; z < zF; z += dash + gap) {
      if (inGaps(z, e.medianGaps) && Math.abs(x) < e.median) continue;
      if (s.marks.some((m) => m.type === "roundabout" && Math.abs(z - m.z) < m.r + 9)) continue;
      quad([[x - w / 2, 0, z], [x + w / 2, 0, z], [x + w / 2, 0, z + dash], [x - w / 2, 0, z + dash]], col);
    }
  };
  dashes(half - 0.25, 400, 0, 0.15); dashes(-half + 0.25, 400, 0, 0.15);
  for (let i = 1; i < e.lanes; i++) { dashes(ourLane(i), 3, 9); dashes(-ourLane(i), 3, 9); }
  function ourLane(i: number) { return e.median / 2 + i * LW; }
  if (e.median === 0) dashes(0, 4, 6, 0.15, e.look === "desert" ? "#f2c230" : line);
  else {
    // raised central reservation with optional U-turn gaps
    const step = 8, start = Math.floor(zN / step) * step;
    for (let z = start; z < zF; z += step) {
      if (inGaps(z + step / 2, e.medianGaps)) continue;
      quad([[-e.median / 2, 0, z], [e.median / 2, 0, z], [e.median / 2, 0, z + step], [-e.median / 2, 0, z + step]], night ? "#14171a" : e.look === "highway" || e.look === "desert" ? "#b9a888" : "#8c9a6a");
    }
  }

  // night headlight pool
  if (night) {
    const g = ctx.createRadialGradient(W / 2, H, 10, W / 2, H * 0.75, W * 0.55);
    g.addColorStop(0, "rgba(255,240,200,0.32)"); g.addColorStop(1, "rgba(255,240,200,0)");
    ctx.fillStyle = g; ctx.fillRect(0, hor, W, H - hor);
  }
  // ground fog
  if (fogDist < 1000) {
    const g = ctx.createLinearGradient(0, hor, 0, H);
    for (const dz of [FAR, 160, 80, 40, 20, 10, 5]) {
      const y = hor + (CAM_H * f) / dz;
      if (y > H) continue;
      g.addColorStop(Math.min(1, (y - hor) / (H - hor)), hexA(fogColor, 1 - vis(dz)));
    }
    ctx.fillStyle = g; ctx.fillRect(0, hor, W, H - hor);
  } else {
    const g = ctx.createLinearGradient(0, hor, 0, hor + 40);
    g.addColorStop(0, hexA(fogColor, 0.9)); g.addColorStop(1, hexA(fogColor, 0));
    ctx.fillStyle = g; ctx.fillRect(0, hor, W, 40);
  }

  /* --- objects (painter's algorithm) --- */
  type D = { z: number; draw: () => void };
  const list: D[] = [];
  const pushObj = (z: number, draw: (a: number) => void) => {
    const dz = z - camZ;
    if (dz < NEAR || dz > FAR) return;
    list.push({ z, draw: () => { ctx.globalAlpha = Math.max(0, Math.min(1, vis(dz))); draw(vis(dz)); ctx.globalAlpha = 1; } });
  };

  // buildings / scenery
  if (e.look === "city" || e.look === "suburb") {
    const step = e.look === "city" ? 16 : 22;
    for (let k = Math.floor(zN / step) - 1; k * step < zF; k++) {
      const z = k * step;
      for (const side of [1, -1] as const) {
        if (side > 0 && inGaps(z + step / 2, e.buildGaps)) continue;
        if (s.marks.some((m) => m.type === "sideroad" && m.side === side && z + step > m.z - 2 && z < m.z + m.w + 2)) continue;
        if (s.marks.some((m) => m.type === "roundabout" && Math.abs(z - m.z) < m.r + 14)) continue;
        const r = hash(k * 7 + side * 3 + e.seed);
        const hgt = e.look === "city" ? 6 + r * 12 : 3 + r * 3.5;
        const x = side > 0 ? edgeR + 4.5 + (e.look === "suburb" ? 3 : 0) : edgeL - 4.5 - (e.look === "suburb" ? 3 : 0);
        const col = night ? "#101216" : ["#e6dccb", "#d9cdb6", "#efe8dc", "#cdbfa6", "#e2d6c2"][Math.floor(r * 5)];
        pushObj(z, () => building(x, z, z + step - 3, hgt, side, col, r));
        if (e.look === "suburb" && r > 0.4) pushObj(z + step - 2, () => palm(x - side * 2.2, z + step - 2));
      }
      if (e.look === "city" && k % 2 === 0) pushObj(z, () => lamp(edgeR + 0.6, z, -1));
    }
  } else {
    const step = e.look === "highway" ? 40 : 55;
    for (let k = Math.floor(zN / step); k * step < zF; k++) {
      const z = k * step;
      if (e.look === "highway") pushObj(z, () => lamp(0, z, 0));
      const r = hash(k + e.seed);
      if (r > 0.5) pushObj(z + 9, () => shrub((e.look === "desert" ? 1 : 1) * (half + 6 + r * 30), z + 9));
      if (r < 0.5) pushObj(z + 21, () => shrub(-(half + 6 + r * 40), z + 21));
    }
  }
  if (e.barrier) {
    const step = 6;
    for (let z = Math.floor(zN / step) * step; z < zF; z += step) pushObj(z, () => {
      const a = P(-0.2, 0.9, z), b = P(0.2, 0, z + step);
      ctx.fillStyle = "#bfc3c6"; ctx.fillRect(a.x, a.y, b.x - a.x, (0.9 * f) / (z - camZ) * 0.35);
    });
  }

  // parked cars
  if (e.parking) {
    const step = e.parking === "bays" ? 3 : 7;
    for (let k = Math.floor(zN / step) - 1; k * step < zF; k++) {
      const z = k * step + 1;
      if (hash(k * 3.3 + e.seed) < 0.2 || inGaps(z, e.parkedGaps) || inGaps(z + 2, e.parkedGaps)) continue;
      const col = CARCOL[Math.floor(hash(k + 9 + e.seed) * CARCOL.length)];
      if (e.parking === "bays") pushObj(z, () => vehicle("car", half + 2.75, z, "side", 1, col, {}));
      else pushObj(z, () => vehicle("car", half + 1.25, z, "rear", 1, col, {}));
    }
  }

  // landmarks
  for (const m of s.marks) {
    if (m.type === "mosque") pushObj(m.z, () => mosque(m.side > 0 ? edgeR + 8 : edgeL - 8, m.z, m.side));
    if (m.type === "gantry") pushObj(m.z, () => gantry(m.z, m.en, m.ar));
    if (m.type === "sign") pushObj(m.z, () => sign(m.side > 0 ? edgeR + 1 : edgeL - 1, m.z, m.icon));
    if (m.type === "roundabout") pushObj(m.z, () => palm(0, m.z));
  }

  // ambient traffic
  const vOn = 13;
  if (e.oncoming) {
    const n = Math.max(1, Math.round(e.oncoming));
    for (let i = 0; i < n; i++) {
      const lane = e.lanes > 1 ? i % e.lanes : 0;
      const rel = mod(hash(i + e.seed) * 300 + i * (300 / n) - vOn * t - camZ, 340) - 20;
      if (e.oncoming < 1 && i === 0 && hash(e.seed) > e.oncoming) continue;
      const z = camZ + rel;
      if (s.marks.some((m) => m.type === "roundabout" && Math.abs(z - m.z) < m.r + 12)) continue;
      const kind: Kind = hash(i * 5 + e.seed) > 0.8 ? "truck" : hash(i * 2 + e.seed) > 0.5 ? "suv" : "car";
      pushObj(z, () => vehicle(kind, -(e.median / 2 + (lane + 0.5) * LW), z, "front", 1, CARCOL[(i * 3 + e.seed) % CARCOL.length], {}));
    }
  }
  for (const sd of e.sameDir || []) {
    for (let i = 0; i < sd.n; i++) {
      const rel = mod(i * (260 / sd.n) + 30 + sd.dv * t * (i % 2 ? 1 : 0.6), 260) - 25;
      const z = camZ + rel;
      pushObj(z, () => vehicle(i % 4 === 3 ? "suv" : "car", e.median / 2 + (sd.lane + 0.5) * LW, z, "rear", 1, CARCOL[(i * 5 + e.seed) % CARCOL.length], {}));
    }
  }

  // scene actors
  for (const a of s.actors) {
    const [x, z] = interp(a.k, t);
    const [x2, z2] = interp(a.k, t + 0.1);
    const moving = Math.hypot(x2 - x, z2 - z) > 0.03;
    let face: Face = a.kind === "ped" || a.kind === "child" ? "rear" : "rear", dir = Math.sign(x2 - x) || 1;
    if (a.face) for (const [ft, fc, fd] of a.face) if (t >= ft) { face = fc; dir = fd ?? dir; }
    pushObj(z, () => {
      const on = (w?: [number, number]) => !!w && t >= w[0] && t <= w[1];
      const blinkOn = Math.floor(t * 3) % 2 === 0;
      const blink = a.blink?.find((b) => t >= b[0] && t <= b[1]);
      const opts: VOpts = {
        brake: !!a.brake?.some((b) => on(b)), reverse: on(a.reverse),
        blinkL: (a.hazard && blinkOn) || (!!blink && blink[2] === "l" && blinkOn),
        blinkR: (a.hazard && blinkOn) || (!!blink && blink[2] === "r" && blinkOn),
        stopArm: a.stopArm,
      };
      if (a.kind === "ped" || a.kind === "child") person(x, z, a.kind === "child" ? 0.66 : 1, a.color || "#eee", moving ? t : 0);
      else if (a.kind === "ball") ball(x, z, a.color || "#e33", t);
      else if (a.kind === "camel") camel(x, z, dir, moving ? t : 0);
      else vehicle(a.kind, x, z, face, dir, a.color || "#ccc", opts);
    });
  }

  list.sort((a, b) => b.z - a.z);
  for (const d of list) d.draw();

  if (dust) { ctx.fillStyle = "rgba(200,166,120,0.18)"; ctx.fillRect(0, 0, W, H); }
  // dashboard edge for a driver's-eye cue
  ctx.fillStyle = night ? "#050506" : "#1c1f22";
  ctx.beginPath(); ctx.moveTo(0, H); ctx.lineTo(0, H * 0.94); ctx.quadraticCurveTo(W / 2, H * 0.89, W, H * 0.94); ctx.lineTo(W, H); ctx.fill();

  /* ---------- drawing helpers (closures over projection) ---------- */
  function building(x: number, z1: number, z2: number, h: number, side: 1 | -1, col: string, r: number) {
    const za = Math.max(z1, camZ + NEAR);
    const depth = 14;
    const xo = x + side * depth;
    // front face (facing camera)
    if (z1 > camZ + NEAR) {
      const a = P(Math.min(x, xo), h, z1), b = P(Math.max(x, xo), 0, z1);
      ctx.fillStyle = shade(col, 0.9); ctx.fillRect(a.x, a.y, b.x - a.x, b.y - a.y);
    }
    quad([[x, 0, za], [x, 0, z2], [x, h, z2], [x, h, za]], col);
    // windows
    if (h > 4 && z2 - camZ < 140) {
      ctx.fillStyle = night ? (r > 0.5 ? "#e8c46a" : "#1d2028") : "rgba(40,60,70,0.55)";
      for (let fl = 1; fl < h / 3.2; fl++) for (let wz = z1 + 1.5; wz < z2 - 1; wz += 3.2) {
        if (wz < camZ + NEAR) continue;
        if (night && hash(wz * 1.3 + fl) < 0.6) continue;
        quad([[x, fl * 3.2 - 1.6, wz], [x, fl * 3.2 - 1.6, wz + 1.4], [x, fl * 3.2 - 0.3, wz + 1.4], [x, fl * 3.2 - 0.3, wz]], ctx.fillStyle as string);
      }
    }
  }
  function lamp(x: number, z: number, arm: number) {
    const b = P(x, 0, z), tp = P(x, 8, z), hd = P(x + arm * 1.6 + (arm === 0 ? 0 : 0), 8, z);
    ctx.strokeStyle = night ? "#222" : "#6d7276"; ctx.lineWidth = Math.max(1, 0.18 * b.s);
    ctx.beginPath(); ctx.moveTo(b.x, b.y); ctx.lineTo(tp.x, tp.y); ctx.lineTo(hd.x, hd.y); ctx.stroke();
    if (night) glow(hd.x, hd.y + 2, 1.6 * b.s, "255,214,150");
  }
  function palm(x: number, z: number) {
    const b = P(x, 0, z), tp = P(x, 6.5, z);
    ctx.strokeStyle = "#7a5a33"; ctx.lineWidth = Math.max(1, 0.35 * b.s);
    ctx.beginPath(); ctx.moveTo(b.x, b.y); ctx.lineTo(tp.x, tp.y); ctx.stroke();
    ctx.strokeStyle = night ? "#0f1a12" : "#3f7a3a"; ctx.lineWidth = Math.max(1, 0.25 * b.s);
    for (let i = 0; i < 7; i++) {
      const ang = (i / 7) * Math.PI * 2;
      ctx.beginPath(); ctx.moveTo(tp.x, tp.y);
      ctx.quadraticCurveTo(tp.x + Math.cos(ang) * 1.6 * b.s, tp.y - 0.8 * b.s, tp.x + Math.cos(ang) * 2.6 * b.s, tp.y + Math.abs(Math.sin(ang)) * 0.6 * b.s + 0.8 * b.s);
      ctx.stroke();
    }
  }
  function shrub(x: number, z: number) {
    const b = P(x, 0, z);
    ctx.fillStyle = night ? "#0d0f0d" : "#8a8a4e";
    ctx.beginPath(); ctx.ellipse(b.x, b.y - 0.35 * b.s, 0.9 * b.s, 0.45 * b.s, 0, 0, Math.PI * 2); ctx.fill();
  }
  function mosque(x: number, z: number, side: number) {
    const b = P(x, 0, z), s0 = b.s;
    ctx.fillStyle = night ? "#15171b" : "#f1ece1";
    ctx.fillRect(b.x - 8 * s0, b.y - 7 * s0, 16 * s0, 7 * s0);
    ctx.fillStyle = night ? "#1c2026" : "#d8cfb9";
    ctx.beginPath(); ctx.ellipse(b.x, b.y - 7 * s0, 4.2 * s0, 4.6 * s0, 0, Math.PI, 0); ctx.fill();
    const mx = b.x + side * 9 * s0;
    ctx.fillStyle = night ? "#15171b" : "#efe9dc"; ctx.fillRect(mx - 0.9 * s0, b.y - 20 * s0, 1.8 * s0, 20 * s0);
    ctx.fillStyle = night ? "#2a2f36" : "#2f7a55"; ctx.fillRect(mx - 1.2 * s0, b.y - 14 * s0, 2.4 * s0, 0.8 * s0);
    ctx.beginPath(); ctx.moveTo(mx - 0.9 * s0, b.y - 20 * s0); ctx.lineTo(mx, b.y - 23 * s0); ctx.lineTo(mx + 0.9 * s0, b.y - 20 * s0); ctx.fill();
    ctx.fillStyle = "rgba(30,60,60,0.6)";
    for (let i = -2; i <= 2; i++) { ctx.beginPath(); ctx.ellipse(b.x + i * 2.8 * s0, b.y - 3 * s0, 0.6 * s0, 1.6 * s0, 0, 0, Math.PI * 2); ctx.fill(); }
  }
  function gantry(z: number, en: string, ar: string) {
    const l = P(half - 0.2, 0, z), r = P(half + 0.6, 7.4, z), lp = P(-0.1, 0, z);
    ctx.fillStyle = "#7c8287";
    ctx.fillRect(l.x, r.y, Math.max(2, 0.3 * l.s), l.y - r.y);
    ctx.fillRect(lp.x, r.y, Math.max(2, 0.3 * l.s), lp.y - r.y);
    const a = P(e.median / 2 + LW * (e.lanes - 1.6), 7.8, z), c = P(half + 0.4, 5.4, z);
    ctx.fillStyle = "#00663d"; ctx.fillRect(a.x, a.y, c.x - a.x, c.y - a.y);
    ctx.strokeStyle = "#fff"; ctx.lineWidth = Math.max(1, 0.08 * l.s); ctx.strokeRect(a.x + 0.15 * l.s, a.y + 0.15 * l.s, c.x - a.x - 0.3 * l.s, c.y - a.y - 0.3 * l.s);
    if (l.s > 4) {
      ctx.fillStyle = "#fff"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.font = `700 ${0.62 * l.s}px "Noto Kufi Arabic", sans-serif`; ctx.fillText(ar, (a.x + c.x) / 2, a.y + (c.y - a.y) * 0.33);
      ctx.font = `700 ${0.56 * l.s}px Overpass, sans-serif`; ctx.fillText(en + "  ↗", (a.x + c.x) / 2, a.y + (c.y - a.y) * 0.7);
    }
  }
  function sign(x: number, z: number, icon: string) {
    const b = P(x, 0, z), s0 = b.s, cy = b.y - 2.6 * s0;
    ctx.fillStyle = "#6d7276"; ctx.fillRect(b.x - 0.05 * s0, cy, Math.max(1, 0.1 * s0), 2.6 * s0);
    ctx.fillStyle = "#c1272d";
    ctx.beginPath(); ctx.moveTo(b.x, cy - 1.0 * s0); ctx.lineTo(b.x + 0.62 * s0, cy + 0.1 * s0); ctx.lineTo(b.x - 0.62 * s0, cy + 0.1 * s0); ctx.closePath(); ctx.fill();
    ctx.fillStyle = "#fff";
    ctx.beginPath(); ctx.moveTo(b.x, cy - 0.78 * s0); ctx.lineTo(b.x + 0.45 * s0, cy - 0.02 * s0); ctx.lineTo(b.x - 0.45 * s0, cy - 0.02 * s0); ctx.closePath(); ctx.fill();
    ctx.fillStyle = "#111";
    const g = { camel: "🐪", school: "🚸", children: "🚸", merge: "⤴", roundabout: "⟲" }[icon] || "!";
    if (s0 > 6) { ctx.font = `${0.42 * s0}px sans-serif`; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillText(g, b.x, cy - 0.3 * s0); }
  }
  function person(x: number, z: number, scale: number, col: string, walkT: number) {
    const b = P(x, 0, z), s0 = b.s * scale;
    const sw = Math.sin(walkT * 9) * 0.22 * s0;
    ctx.fillStyle = "rgba(0,0,0,0.25)"; ctx.beginPath(); ctx.ellipse(b.x, b.y, 0.35 * s0, 0.08 * s0, 0, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = shade(col, 0.6); ctx.lineWidth = Math.max(1, 0.14 * s0); ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(b.x, b.y - 0.85 * s0); ctx.lineTo(b.x - sw, b.y); ctx.moveTo(b.x, b.y - 0.85 * s0); ctx.lineTo(b.x + sw, b.y); ctx.stroke();
    ctx.fillStyle = col; ctx.beginPath(); ctx.roundRect(b.x - 0.24 * s0, b.y - 1.5 * s0, 0.48 * s0, 1.15 * s0, 0.1 * s0); ctx.fill();
    ctx.fillStyle = col === "#22252b" ? "#3a2c24" : "#b07a55";
    ctx.beginPath(); ctx.arc(b.x, b.y - 1.62 * s0, 0.13 * s0, 0, Math.PI * 2); ctx.fill();
    if (scale === 1 && col !== "#22252b") { ctx.fillStyle = "#fff"; ctx.beginPath(); ctx.arc(b.x, b.y - 1.68 * s0, 0.15 * s0, Math.PI, 0); ctx.fill(); }
  }
  function ball(x: number, z: number, col: string, tt: number) {
    const b = P(x, 0, z), r = 0.12 * b.s, bounce = Math.abs(Math.sin(tt * 6)) * 0.25 * b.s;
    ctx.fillStyle = col; ctx.beginPath(); ctx.arc(b.x, b.y - r - bounce, Math.max(1.5, r), 0, Math.PI * 2); ctx.fill();
  }
  function camel(x: number, z: number, dir: number, walkT: number) {
    const b = P(x, 0, z), s0 = b.s;
    const col = night ? "#2a2018" : "#b4895a";
    ctx.strokeStyle = shade(col, 0.75); ctx.lineWidth = Math.max(1, 0.12 * s0);
    for (const lx of [-0.8, -0.5, 0.5, 0.8]) {
      const sw = Math.sin(walkT * 4 + lx * 3) * 0.15 * s0;
      ctx.beginPath(); ctx.moveTo(b.x + lx * s0, b.y - 1.2 * s0); ctx.lineTo(b.x + lx * s0 + sw, b.y); ctx.stroke();
    }
    ctx.fillStyle = col;
    ctx.beginPath(); ctx.ellipse(b.x, b.y - 1.45 * s0, 1.1 * s0, 0.42 * s0, 0, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(b.x - dir * 0.1 * s0, b.y - 1.85 * s0, 0.45 * s0, 0.35 * s0, 0, Math.PI, 0); ctx.fill();
    ctx.lineWidth = Math.max(1, 0.22 * s0); ctx.strokeStyle = col;
    ctx.beginPath(); ctx.moveTo(b.x + dir * 0.9 * s0, b.y - 1.5 * s0); ctx.quadraticCurveTo(b.x + dir * 1.5 * s0, b.y - 1.6 * s0, b.x + dir * 1.4 * s0, b.y - 2.2 * s0); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(b.x + dir * 1.55 * s0, b.y - 2.22 * s0, 0.25 * s0, 0.13 * s0, 0, 0, Math.PI * 2); ctx.fill();
  }

  type VOpts = { brake?: boolean; reverse?: boolean; blinkL?: boolean; blinkR?: boolean; stopArm?: boolean };
  function vehicle(kind: Kind, x: number, z: number, face: Face, dir: number, col: string, o: VOpts) {
    const d = DIMS[kind];
    if (kind === "moto" || kind === "bike") return rider(kind, x, z, face, dir, col);
    const b = P(x, 0, z), s0 = b.s;
    const wpx = (face === "side" ? d.len : d.w) * s0, hpx = d.h * s0;
    const L = b.x - wpx / 2, top = b.y - hpx;
    ctx.fillStyle = "rgba(0,0,0,0.3)"; ctx.beginPath(); ctx.ellipse(b.x, b.y, wpx * 0.55, 0.12 * s0, 0, 0, Math.PI * 2); ctx.fill();
    if (face === "side") {
      const front = dir > 0 ? L + wpx : L;
      if (kind === "truck") {
        ctx.fillStyle = "#e9e9e4"; ctx.fillRect(L, top, wpx, hpx * 0.85);
        ctx.fillStyle = col; ctx.fillRect(dir > 0 ? L + wpx * 0.8 : L, top + hpx * 0.25, wpx * 0.2, hpx * 0.6);
      } else if (kind === "bus") {
        ctx.fillStyle = col; ctx.fillRect(L, top, wpx, hpx * 0.85);
        ctx.fillStyle = "#26333d"; ctx.fillRect(L + wpx * 0.05, top + hpx * 0.15, wpx * 0.9, hpx * 0.28);
      } else {
        ctx.fillStyle = col;
        ctx.beginPath(); ctx.roundRect(L, top + hpx * 0.42, wpx, hpx * 0.43, 0.2 * s0); ctx.fill();
        ctx.beginPath(); ctx.moveTo(L + wpx * (dir > 0 ? 0.1 : 0.25), top + hpx * 0.45); ctx.lineTo(L + wpx * (dir > 0 ? 0.22 : 0.32), top); ctx.lineTo(L + wpx * (dir > 0 ? 0.68 : 0.78), top); ctx.lineTo(L + wpx * (dir > 0 ? 0.75 : 0.9), top + hpx * 0.45); ctx.fill();
        ctx.fillStyle = "#2a3a48"; ctx.fillRect(L + wpx * 0.27, top + hpx * 0.1, wpx * 0.46, hpx * 0.3);
      }
      ctx.fillStyle = "#121212";
      for (const wx of [0.2, 0.8]) { ctx.beginPath(); ctx.arc(L + wpx * wx, b.y - 0.3 * s0, 0.33 * s0, 0, Math.PI * 2); ctx.fill(); }
      const rear = dir > 0 ? L : L + wpx;
      lightAt(front, b.y - hpx * 0.6, 0.18 * s0, night ? "255,245,210" : "255,250,230", night);
      lightAt(rear, b.y - hpx * 0.6, 0.15 * s0, o.reverse ? "255,255,255" : "200,30,30", night || !!o.reverse, !!o.reverse);
      if (o.blinkL || o.blinkR) lightAt(front, b.y - hpx * 0.48, 0.14 * s0, "255,170,0", true, true);
      return;
    }
    // rear or front view
    const body = col;
    if (kind === "truck") {
      ctx.fillStyle = face === "rear" ? "#e9e9e4" : body; ctx.fillRect(L, top, wpx, hpx * 0.88);
      if (face === "front") { ctx.fillStyle = "#26333d"; ctx.fillRect(L + wpx * 0.1, top + hpx * 0.1, wpx * 0.8, hpx * 0.3); }
      else { ctx.strokeStyle = "#b7b7b0"; ctx.lineWidth = 1; ctx.strokeRect(L + 1, top + 1, wpx - 2, hpx * 0.86); }
    } else if (kind === "bus") {
      ctx.fillStyle = body; ctx.fillRect(L, top, wpx, hpx * 0.88);
      ctx.fillStyle = "#26333d"; ctx.fillRect(L + wpx * 0.12, top + hpx * 0.12, wpx * 0.76, hpx * 0.3);
      if (s0 > 5) { ctx.fillStyle = "#111"; ctx.font = `700 ${0.32 * s0}px Overpass, sans-serif`; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillText("SCHOOL BUS · حافلة مدرسية", b.x, top + hpx * 0.55); }
      if (o.stopArm) {
        ctx.fillStyle = "#c1272d"; const ax = L - 0.5 * s0, ay = top + hpx * 0.45;
        ctx.beginPath(); for (let i = 0; i < 8; i++) { const an = Math.PI / 8 + (i * Math.PI) / 4; ctx.lineTo(ax + Math.cos(an) * 0.42 * s0, ay + Math.sin(an) * 0.42 * s0); } ctx.fill();
        if (s0 > 8) { ctx.fillStyle = "#fff"; ctx.font = `700 ${0.22 * s0}px sans-serif`; ctx.fillText("قف", ax, ay); }
      }
    } else {
      ctx.fillStyle = body;
      ctx.beginPath(); ctx.roundRect(L, top + hpx * 0.42, wpx, hpx * 0.45, 0.22 * s0); ctx.fill();
      ctx.beginPath(); ctx.moveTo(L + wpx * 0.08, top + hpx * 0.45); ctx.lineTo(L + wpx * 0.18, top); ctx.lineTo(L + wpx * 0.82, top); ctx.lineTo(L + wpx * 0.92, top + hpx * 0.45); ctx.fill();
      ctx.fillStyle = night ? "#07090c" : "#2a3a48";
      ctx.beginPath(); ctx.moveTo(L + wpx * 0.16, top + hpx * 0.4); ctx.lineTo(L + wpx * 0.23, top + hpx * 0.08); ctx.lineTo(L + wpx * 0.77, top + hpx * 0.08); ctx.lineTo(L + wpx * 0.84, top + hpx * 0.4); ctx.fill();
      ctx.fillStyle = "#e8e8e0"; ctx.fillRect(b.x - 0.25 * s0, top + hpx * 0.62, 0.5 * s0, 0.12 * s0);
    }
    ctx.fillStyle = "#121212";
    ctx.fillRect(L + wpx * 0.06, b.y - 0.22 * s0, wpx * 0.18, 0.22 * s0); ctx.fillRect(L + wpx * 0.76, b.y - 0.22 * s0, wpx * 0.18, 0.22 * s0);
    const ly = b.y - hpx * (kind === "truck" || kind === "bus" ? 0.22 : 0.5);
    const lr = (kind === "truck" || kind === "bus" ? 0.16 : 0.13) * s0;
    if (face === "rear") {
      const c = o.brake ? "255,40,30" : "190,25,25";
      lightAt(L + wpx * 0.1, ly, lr, c, night || !!o.brake, !!o.brake); lightAt(L + wpx * 0.9, ly, lr, c, night || !!o.brake, !!o.brake);
      if (o.brake) lightAt(b.x, top + hpx * 0.06, lr * 0.6, c, true, true);
      if (o.reverse) { lightAt(L + wpx * 0.25, ly, lr * 0.7, "255,255,255", true, true); lightAt(L + wpx * 0.75, ly, lr * 0.7, "255,255,255", true, true); }
      if (o.blinkL) lightAt(L + wpx * 0.04, ly + lr * 1.4, lr * 0.8, "255,170,0", true, true);
      if (o.blinkR) lightAt(L + wpx * 0.96, ly + lr * 1.4, lr * 0.8, "255,170,0", true, true);
    } else {
      lightAt(L + wpx * 0.14, ly, lr * 1.2, "255,248,220", night, night); lightAt(L + wpx * 0.86, ly, lr * 1.2, "255,248,220", night, night);
      if (o.blinkL) lightAt(L + wpx * 0.04, ly, lr * 0.8, "255,170,0", true, true);
      if (o.blinkR) lightAt(L + wpx * 0.96, ly, lr * 0.8, "255,170,0", true, true);
    }
  }
  function rider(kind: Kind, x: number, z: number, face: Face, dir: number, col: string) {
    const b = P(x, 0, z), s0 = b.s;
    if (face === "side") {
      const len = DIMS[kind].len * s0;
      ctx.strokeStyle = "#111"; ctx.lineWidth = Math.max(1, 0.06 * s0);
      for (const wx of [-0.38, 0.38]) { ctx.beginPath(); ctx.arc(b.x + wx * len, b.y - 0.33 * s0, 0.32 * s0, 0, Math.PI * 2); ctx.stroke(); }
      ctx.strokeStyle = col; ctx.lineWidth = Math.max(1, 0.1 * s0);
      ctx.beginPath(); ctx.moveTo(b.x - 0.38 * len, b.y - 0.33 * s0); ctx.lineTo(b.x, b.y - 0.75 * s0); ctx.lineTo(b.x + 0.38 * len, b.y - 0.33 * s0); ctx.stroke();
      ctx.fillStyle = "#1e5aa8"; ctx.fillRect(b.x - 0.15 * s0 - dir * 0.05 * s0, b.y - 1.35 * s0, 0.3 * s0, 0.6 * s0);
      ctx.fillStyle = "#b07a55"; ctx.beginPath(); ctx.arc(b.x + dir * 0.05 * s0, b.y - 1.48 * s0, 0.12 * s0, 0, Math.PI * 2); ctx.fill();
      return;
    }
    ctx.fillStyle = "#111"; ctx.fillRect(b.x - 0.08 * s0, b.y - 0.6 * s0, 0.16 * s0, 0.6 * s0);
    ctx.fillStyle = col; ctx.fillRect(b.x - 0.25 * s0, b.y - 0.95 * s0, 0.5 * s0, 0.4 * s0);
    ctx.fillStyle = "#2b2f36"; ctx.fillRect(b.x - 0.22 * s0, b.y - 1.45 * s0, 0.44 * s0, 0.55 * s0);
    ctx.fillStyle = "#f2f2f2"; ctx.beginPath(); ctx.arc(b.x, b.y - 1.58 * s0, 0.16 * s0, 0, Math.PI * 2); ctx.fill();
    lightAt(b.x, b.y - 0.7 * s0, 0.07 * s0, "200,25,25", night);
  }
  function lightAt(x: number, y: number, r: number, rgb: string, glowOn: boolean, strong = false) {
    const prev = ctx.globalAlpha;
    if (glowOn) { ctx.globalAlpha = Math.min(1, prev * 2 + (night || dust ? 0.35 : 0)); glow(x, y, r * (night || dust ? (strong ? 5 : 3.5) : strong ? 2.6 : 2), rgb); }
    ctx.fillStyle = `rgb(${rgb})`; ctx.beginPath(); ctx.arc(x, y, Math.max(1, r), 0, Math.PI * 2); ctx.fill();
    ctx.globalAlpha = prev;
  }
  function glow(x: number, y: number, r: number, rgb: string) {
    const g = ctx.createRadialGradient(x, y, 0, x, y, Math.max(2, r));
    g.addColorStop(0, `rgba(${rgb},0.85)`); g.addColorStop(1, `rgba(${rgb},0)`);
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, Math.max(2, r), 0, Math.PI * 2); ctx.fill();
  }
}

const CARCOL = ["#f2f2ef", "#c9ccd0", "#22262b", "#8f969d", "#e8e2d2", "#7b1e24", "#1f3f78", "#f2f2ef", "#3f4a3c"];
const mod = (a: number, n: number) => ((a % n) + n) % n;
function shade(hex: string, k: number) {
  const n = parseInt(hex.slice(1), 16);
  const c = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => Math.round(v * k));
  return `rgb(${c.join(",")})`;
}
function hexA(hex: string, a: number) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a.toFixed(3)})`;
}
