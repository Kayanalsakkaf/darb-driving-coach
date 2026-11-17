/* Animated hazard perception scenes. World units are metres: x across the road
   (positive = right; Saudi traffic drives on the RIGHT), z along the road ahead.
   Every scene is a deterministic timeline: the camera speed and each actor are
   keyframed in seconds, so a clip replays identically in review. */
import type { Win } from "./engine";

export const LW = 3.5; // lane width

export type Kind = "car" | "suv" | "truck" | "bus" | "ped" | "child" | "ball" | "camel" | "moto" | "bike";
export type Face = "rear" | "front" | "side";
export type Actor = {
  kind: Kind;
  color?: string;
  /** [t, x, z] keyframes (absolute world). Linear between keys, held outside. */
  k: number[][];
  /** Stepwise facing: [t, face, dir] where dir is the screen direction of the front for side views (+1 right, -1 left). */
  face?: [number, Face, number?][];
  brake?: Win[];
  blink?: [number, number, "l" | "r"][];
  reverse?: Win;
  hazard?: boolean;
  stopArm?: boolean;
};
export type Landmark =
  | { type: "mosque"; z: number; side: 1 | -1 }
  | { type: "sideroad"; z: number; w: number; side: 1 | -1 }
  | { type: "roundabout"; z: number; r: number }
  | { type: "gantry"; z: number; en: string; ar: string }
  | { type: "sign"; z: number; side: 1 | -1; icon: "camel" | "school" | "children" | "merge" | "roundabout" }
  | { type: "ramp"; z0: number; z1: number; side: 1 | -1 };
export type Env = {
  look: "city" | "suburb" | "highway" | "desert";
  lanes: number; // per direction
  median: number; // width between carriageways (0 = painted centre line)
  barrier?: boolean;
  parking?: "parallel" | "bays";
  parkedGaps?: Win[];
  medianGaps?: Win[];
  buildGaps?: Win[];
  oncoming?: number; // ambient oncoming vehicles per 300 m
  sameDir?: { lane: number; n: number; dv: number }[];
  night?: boolean;
  dust?: boolean;
  seed: number;
};
export type Scene = {
  id: string;
  en: string;
  ar: string;
  capEn: string;
  capAr: string;
  dur: number;
  windows: Win[];
  env: Env;
  speed: number[][]; // [t, metres per second]
  camX: number[][]; // [t, x]
  actors: Actor[];
  marks: Landmark[];
};

/** Camera distance travelled from piecewise-linear speed keys (exact integral). */
export function drive(keys: number[][]) {
  const z = (t: number) => {
    let acc = 0;
    if (t <= keys[0][0]) return keys[0][1] * (t - keys[0][0]);
    for (let i = 0; i < keys.length - 1; i++) {
      const [t0, v0] = keys[i], [t1, v1] = keys[i + 1];
      if (t >= t1) { acc += ((v0 + v1) / 2) * (t1 - t0); continue; }
      const u = t - t0, vt = v0 + ((v1 - v0) * u) / (t1 - t0);
      return acc + ((v0 + vt) / 2) * u;
    }
    const last = keys[keys.length - 1];
    return acc + last[1] * (t - last[0]);
  };
  return { z };
}
export const ourLane = (e: { median: number }, i: number) => e.median / 2 + (i + 0.5) * LW;
export const oppLane = (e: { median: number }, i: number) => -(e.median / 2 + (i + 0.5) * LW);



/* ---------------- Practice clip ---------------- */
function practice(): Scene {
  const speed = [[0, 10], [17, 10], [19.5, 4], [22, 4], [25, 10], [35, 10]];
  const c = drive(speed);
  const env: Env = { look: "city", lanes: 1, median: 0, parking: "parallel", parkedGaps: [[183, 206]], oncoming: 3, seed: 3 };
  return {
    id: "practice", en: "Practice: parked car pulling out", ar: "تدريب: سيارة متوقفة تخرج إلى الطريق",
    capEn: "The parked car's left indicator comes on and it starts to move out into your lane. The hazard develops as soon as it signals and edges out.",
    capAr: "تضيء إشارة السيارة المتوقفة اليسرى وتبدأ بالخروج إلى مسارك. يبدأ الخطر بالتطوّر لحظة إعطائها الإشارة وتحرّكها.",
    dur: 35, windows: [[15, 20]], env, speed, camX: [[0, 1.75]],
    actors: [{ kind: "car", color: "#8a1c1c", k: [[0, 4.75, 200], [15.5, 4.75, 200], [17, 4.2, 200.5], [18.5, 3, 202], [19.5, 1.9, 204], [21, 1.75, c.z(21) + 14], [35, 1.75, c.z(35) + 40]], blink: [[14, 21, "l"]] }],
    marks: [],
  };
}

/* ---------------- Test clips ---------------- */
function s1(): Scene {
  const speed = [[0, 12], [25.5, 12], [28, 5], [31, 5], [35, 12], [56, 12]];
  const c = drive(speed);
  return {
    id: "pullout", en: "Car pulling out from a side road", ar: "سيارة تخرج من طريق جانبي",
    capEn: "A car waiting in the side road on the right creeps forward, signals and pulls out into your lane without enough gap.",
    capAr: "سيارة تنتظر في الطريق الجانبي على اليمين تتقدّم ببطء وتعطي إشارة ثم تدخل مسارك دون مسافة كافية.",
    dur: 56, windows: [[20.5, 25.5]], speed, camX: [[0, 1.75]],
    env: { look: "city", lanes: 1, median: 0, oncoming: 3, buildGaps: [[320, 341]], seed: 11 },
    marks: [{ type: "sideroad", z: 325.5, w: 10, side: 1 }],
    actors: [{
      kind: "suv", color: "#b03a2e",
      k: [[0, 15, 328], [20.5, 14, 328], [23, 9, 328], [24, 7.5, 328.5], [25.5, 4.5, 330], [26.8, 2.2, 334], [28, 1.75, 338], [30, 1.75, c.z(30) + 12], [33, 1.75, c.z(33) + 16], [40, 1.75, c.z(40) + 30], [56, 1.75, c.z(56) + 70]],
      face: [[0, "side", -1], [26.3, "rear"]], blink: [[20.5, 28, "r"]],
    }],
  };
}

function s2(): Scene {
  const speed = [[0, 11], [35.5, 11], [38, 0], [42, 0], [46, 10], [58, 10]];
  const P = 412;
  return {
    id: "mosque", en: "Pedestrian between parked cars near a mosque", ar: "مشاة بين السيارات المتوقفة قرب مسجد",
    capEn: "Near the mosque at prayer time, a man walks along the pavement, stops between two parked cars and then steps out into the road.",
    capAr: "قرب المسجد وقت الصلاة، يمشي رجل على الرصيف ثم يقف بين سيارتين متوقفتين ويخطو إلى الطريق.",
    dur: 58, windows: [[33.5, 38.5]], speed, camX: [[0, 1.75]],
    env: { look: "city", lanes: 1, median: 0, parking: "parallel", parkedGaps: [[409.6, 414.4]], oncoming: 2, buildGaps: [[425, 470]], seed: 21 },
    marks: [{ type: "mosque", z: 440, side: 1 }],
    actors: [
      { kind: "ped", color: "#f6f5ef", k: [[0, 7.2, 440], [30, 7.2, 418], [33.5, 6.8, P], [35, 5.2, P], [36, 5.0, P], [37.8, 2.6, P], [41, -1, P], [44, -5.5, P], [58, -7, P - 20]] },
      { kind: "ped", color: "#f6f5ef", k: [[0, 7.6, 452], [58, 7.6, 452]] },
      { kind: "ped", color: "#f6f5ef", k: [[0, 8.2, 470], [58, 8.0, 455]] },
    ],
  };
}

function s3(): Scene {
  const speed = [[0, 10], [28.5, 10], [31, 1], [34, 0], [37, 0], [40, 9], [56, 9]];
  return {
    id: "ball", en: "Child chasing a ball", ar: "طفل يلحق بكرة",
    capEn: "A ball bounces out from between parked cars. Where there is a ball there is often a child: one runs out after it.",
    capAr: "تخرج كرة من بين السيارات المتوقفة. وحيث توجد كرة غالباً يوجد طفل: يركض طفل خلفها.",
    dur: 56, windows: [[26.5, 31.5]], speed, camX: [[0, 1.75]],
    env: { look: "suburb", lanes: 1, median: 0, parking: "parallel", parkedGaps: [[306.6, 311.4]], oncoming: 1, seed: 31 },
    marks: [{ type: "sign", z: 240, side: 1, icon: "children" }],
    actors: [
      { kind: "ball", color: "#e94b3c", k: [[0, 6.6, 309], [26.5, 6.5, 309], [27, 5.0, 309], [28.5, 2.5, 309.3], [30, 0, 309.6], [32, -3.5, 310], [34, -6, 310]] },
      { kind: "child", color: "#2c6fd1", k: [[0, 8.2, 316], [26, 7.8, 312], [27.5, 7.3, 311], [29, 5.0, 309.5], [30.5, 2.6, 309.3], [31.5, 1.8, 309.3], [34, 1.6, 309.3], [36, -3.5, 310], [38, -6.5, 310]] },
    ],
  };
}

function s4(): Scene {
  const env: Env = { look: "city", lanes: 2, median: 3, medianGaps: [[371, 383]], oncoming: 4, seed: 41 };
  const speed = [[0, 15], [21.5, 15], [24.5, 5], [28, 5], [32, 15], [56, 15]];
  const c = drive(speed);
  return {
    id: "uturn", en: "Car U-turning from a U-turn slot", ar: "سيارة تلتف من فتحة الدوران",
    capEn: "An oncoming car slows, indicates and enters the U-turn gap in the central reservation, then swings wide across your lane.",
    capAr: "سيارة قادمة تبطئ وتعطي إشارة وتدخل فتحة الدوران في الجزيرة الوسطى، ثم تنعطف بشكل واسع عبر مسارك.",
    dur: 56, windows: [[17.5, 22.5]], speed, camX: [[0, ourLane(env, 0)]], env,
    marks: [],
    actors: [
      {
        kind: "car", color: "#f0f0f0",
        k: [[0, -3.25, 650], [12, -3.25, 470], [18, -3.25, 400], [20, -2.6, 383], [21.5, -0.5, 377], [23, 3.0, 375], [24.5, 5.4, 380], [26, 6.75, 388], [30, 6.75, c.z(30) + 22], [56, 6.75, c.z(56) + 140]],
        face: [[0, "front"], [20.8, "side", 1], [24, "rear"]], blink: [[16, 22, "r"]], brake: [[17, 21]],
      },
    ],
  };
}

function s5(): Scene {
  const env: Env = { look: "highway", lanes: 3, median: 4, barrier: true, oncoming: 5, seed: 51 };
  const speed = [[0, 30], [40.5, 30], [43, 20], [45, 20], [48, 28], [60, 28]];
  const c = drive(speed);
  const L0 = ourLane(env, 0), L1 = ourLane(env, 1), L2 = ourLane(env, 2);
  return {
    id: "exit", en: "Vehicle cutting across lanes to an exit", ar: "مركبة تقطع المسارات نحو مخرج",
    capEn: "A car in the left lane realises its exit is close, indicates right and cuts across your lane at speed to reach the slip road.",
    capAr: "سيارة في المسار الأيسر تنتبه لقرب مخرجها، فتعطي إشارة يمين وتقطع مسارك بسرعة لتصل إلى طريق الخروج.",
    dur: 60, windows: [[38.5, 43.5]], speed, camX: [[0, L1]], env,
    marks: [{ type: "gantry", z: c.z(30) + 160, en: "EXIT 12 · King Fahd Rd", ar: "مخرج ١٢ · طريق الملك فهد" }, { type: "ramp", z0: c.z(43), z1: c.z(60) + 200, side: 1 }],
    actors: [
      {
        kind: "car", color: "#1f3f78",
        k: [[0, L0, c.z(0) + 60], [30, L0, c.z(30) + 35], [38.5, L0, c.z(38.5) + 28], [40.5, L0 + 1.8, c.z(40.5) + 22], [42, L1 + 0.8, c.z(42) + 14], [43.5, L2, c.z(43.5) + 12], [46, L2 + 3, c.z(46) + 18], [52, L2 + 6, c.z(52) + 30]],
        face: [[0, "rear"]], blink: [[38.5, 46, "r"]],
      },
      { kind: "truck", color: "#d7d2c4", k: [[0, L2, 90], [60, L2, 90 + 24 * 60]] },
    ],
  };
}

function s6(): Scene {
  const speed = [[0, 22], [34, 22], [37.5, 5], [41, 0], [45, 0], [49, 18], [60, 22]];
  return {
    id: "camel", en: "Camel near a desert road", ar: "جمل قرب طريق صحراوي",
    capEn: "Camels graze beside the road. One begins walking towards the carriageway and slowly crosses into your path.",
    capAr: "إبل ترعى بجانب الطريق. يبدأ أحدها بالمشي نحو الطريق ويعبر ببطء إلى مسارك.",
    dur: 60, windows: [[31, 36]], speed, camX: [[0, 1.75]],
    env: { look: "desert", lanes: 1, median: 0, oncoming: 1, seed: 61 },
    marks: [{ type: "sign", z: 560, side: 1, icon: "camel" }],
    actors: [
      { kind: "camel", k: [[0, -14, 815], [31, -14, 815], [34, -7, 815], [36.5, -2.5, 815.5], [39, 0.5, 816], [43, 3, 816], [47, 7, 816], [52, 12, 816]], face: [[0, "side", 1]] },
      { kind: "camel", k: [[0, -18, 826], [60, -17, 829]], face: [[0, "side", -1]] },
      { kind: "camel", k: [[0, -21, 808], [60, -22, 804]], face: [[0, "side", 1]] },
    ],
  };
}

function s7(): Scene {
  const env: Env = { look: "highway", lanes: 3, median: 4, barrier: true, oncoming: 5, sameDir: [{ lane: 0, n: 3, dv: 3 }], seed: 71 };
  const speed = [[0, 27], [25, 27], [28.5, 18], [32, 18], [36, 26], [60, 26]];
  const L2 = ourLane(env, 2);
  return {
    id: "merge", en: "Truck merging from a slip road", ar: "شاحنة تندمج من طريق جانبي",
    capEn: "A lorry on the joining slip road runs out of lane, signals left and moves into your lane instead of adjusting its speed.",
    capAr: "شاحنة على طريق الدخول ينتهي مسارها، فتعطي إشارة يسار وتدخل مسارك بدل أن تعدّل سرعتها.",
    dur: 60, windows: [[24.5, 29.5]], speed, camX: [[0, L2]], env,
    marks: [{ type: "ramp", z0: 560, z1: 810, side: 1 }, { type: "sign", z: 600, side: 1, icon: "merge" }],
    actors: [{
      kind: "truck", color: "#c8402f",
      k: [[0, L2 + LW, 220], [25, L2 + LW, 720], [26, L2 + 3.3, 740], [27.5, L2 + 1.9, 770], [29, L2, 800], [32, L2, 860], [60, L2, 860 + 28 * 28]],
      blink: [[24, 30, "l"]],
    }],
  };
}

function s8(): Scene {
  const speed = [[0, 12], [27, 12], [30, 6], [34, 6], [35.5, 1], [38, 0], [40, 0], [44, 8], [60, 10]];
  return {
    id: "roundabout", en: "Car not giving way at a roundabout", ar: "سيارة لا تعطي الأفضلية عند الدوّار",
    capEn: "A car approaching the roundabout from the right does not slow at the give-way line and drives straight into the circle in front of you.",
    capAr: "سيارة تقترب من الدوّار من اليمين لا تبطئ عند خط إعطاء الأفضلية وتدخل الدوّار أمامك مباشرة.",
    dur: 60, windows: [[29.5, 34.5]], speed, camX: [[0, 1.75], [34, 1.75], [44, 12], [50, 12], [56, 1.75]],
    env: { look: "city", lanes: 1, median: 0, oncoming: 2, buildGaps: [[370, 440]], seed: 81 },
    marks: [{ type: "roundabout", z: 400, r: 9 }, { type: "sideroad", z: 396, w: 9, side: 1 }, { type: "sign", z: 330, side: 1, icon: "roundabout" }],
    actors: [{
      kind: "car", color: "#2b2b2b",
      k: [[0, 90, 400.5], [20, 60, 400.5], [30, 32, 400.5], [32.5, 21, 400.5], [34.3, 14, 402], [35.5, 11, 406], [37, 8, 413], [39, 2, 418], [41, -6, 416], [43, -10, 408], [45, -10, 395], [48, -12, 380], [60, -40, 380]],
      face: [[0, "side", -1], [35, "rear"], [38.5, "side", -1], [41.8, "front"], [47, "side", -1]],
    }],
  };
}

function s9(): Scene {
  const env: Env = { look: "city", lanes: 2, median: 3, oncoming: 5, sameDir: [{ lane: 0, n: 4, dv: 1.5 }], seed: 91 };
  const speed = [[0, 20], [38.5, 20], [40.5, 6], [42, 3], [44, 3], [48, 18], [60, 18]];
  const L1 = ourLane(env, 1);
  return {
    id: "braking", en: "Car braking hard ahead in traffic", ar: "سيارة تفرمل بقوة أمامك في الزحام",
    capEn: "Brake lights come on two cars ahead, then the car directly in front brakes sharply. The gap closes fast.",
    capAr: "تضيء أضواء الفرامل قبلك بسيارتين، ثم تفرمل السيارة التي أمامك مباشرة بقوة. المسافة تتقلّص بسرعة.",
    dur: 60, windows: [[37, 42]], speed, camX: [[0, L1]], env, marks: [],
    actors: [
      { kind: "car", color: "#9aa3ad", k: [[0, L1, 22], [38, L1, 782], [40, L1, 805], [44, L1, 817], [48, L1, 859], [60, L1, 1075]], brake: [[38, 44]] },
      { kind: "suv", color: "#3b4c5e", k: [[0, L1, 50], [37.2, L1, 794], [39.2, L1, 817], [44, L1, 832], [48, L1, 876], [60, L1, 1094]], brake: [[37.2, 44]] },
    ],
  };
}

function s10(): Scene {
  const env: Env = { look: "city", lanes: 2, median: 3, oncoming: 4, sameDir: [{ lane: 0, n: 6, dv: 0.6 }], seed: 101 };
  const speed = [[0, 7], [25.5, 7], [27, 2], [29, 2], [32, 7], [56, 7]];
  const c = drive(speed);
  const L1 = ourLane(env, 1);
  return {
    id: "moto", en: "Motorcycle filtering through traffic", ar: "دراجة نارية تتسلّل بين السيارات",
    capEn: "A motorcycle filters between the lanes from behind, passes close on your left and cuts into the gap in front of you.",
    capAr: "دراجة نارية تتسلّل بين المسارين من الخلف، وتمرّ قريباً على يسارك ثم تدخل الفراغ أمامك.",
    dur: 56, windows: [[23, 28]], speed, camX: [[0, L1]], env, marks: [],
    actors: [
      { kind: "moto", color: "#c0392b", k: [[0, 5.1, c.z(0) - 60], [21, 5.1, c.z(21) - 6], [23.5, 5.1, c.z(23.5) + 3], [25, 5.6, c.z(25) + 7], [26.5, L1, c.z(26.5) + 9], [28, L1, c.z(28) + 14], [33, L1, c.z(33) + 35], [45, L1, c.z(45) + 110]] },
      { kind: "car", color: "#ececec", k: [[0, L1, 18], [56, L1, 18 + 7.2 * 56]] },
    ],
  };
}

function s11(): Scene {
  const speed = [[0, 11], [18, 11], [22, 2], [24, 0], [31, 0], [34, 4], [38, 4], [41, 10], [44, 10], [47, 3], [49, 0], [52, 0], [55, 8], [62, 10]];
  const c = drive(speed);
  const B = Math.round(c.z(24) + 14);
  const K = Math.round(c.z(49) + 9);
  return {
    id: "schoolbus", en: "School bus stopped, then a cyclist (two hazards)", ar: "حافلة مدرسية متوقفة ثم درّاجة (خطران)",
    capEn: "1) A child walks out from in front of the stopped school bus. 2) Later, a child on a bicycle rides out of a driveway on the left and across your path.",
    capAr: "١) طفل يخرج من أمام الحافلة المدرسية المتوقفة. ٢) لاحقاً، طفل على درّاجة يخرج من ممرّ على اليسار ويعبر طريقك.",
    dur: 62, windows: [[18.5, 23.5], [42, 47]], speed, camX: [[0, 1.75], [31, 1.75], [33, -0.6], [38, -0.6], [40.5, 1.75]],
    env: { look: "suburb", lanes: 1, median: 0, oncoming: 0.6, buildGaps: [[K - 4, K + 4]], seed: 111 },
    marks: [{ type: "sign", z: B - 70, side: 1, icon: "school" }, { type: "sideroad", z: K - 2, w: 4, side: -1 }],
    actors: [
      { kind: "bus", color: "#f2b705", k: [[0, 2.6, B], [62, 2.6, B]], hazard: true, stopArm: true },
      { kind: "child", color: "#d9534f", k: [[0, 5.6, B + 12.5], [18.5, 5.4, B + 12.5], [20, 3.6, B + 12.5], [22.5, 0, B + 12.6], [25, -3, B + 12.6], [27, -6.4, B + 12.6], [62, -6.4, B + 12.6]] },
      { kind: "bike", color: "#2a7f62", k: [[0, -10, K], [42, -10, K], [44, -6.5, K], [46.5, -2, K], [48.5, 1, K], [52, 4.5, K], [54, 7, K], [56, 9, K]], face: [[0, "side", 1]] },
    ],
  };
}

function s12(): Scene {
  const env: Env = { look: "desert", lanes: 2, median: 4, barrier: false, oncoming: 2, dust: true, seed: 121 };
  const speed = [[0, 20], [27, 20], [31, 6], [34, 6], [36, 9], [60, 12]];
  const c = drive(speed);
  const S = Math.round(c.z(31) + 25);
  return {
    id: "dust", en: "Dust storm with a stopped vehicle", ar: "عاصفة غبار ومركبة متوقفة",
    capEn: "Visibility drops in blowing dust. Hazard lights appear in your lane: a vehicle has stopped on the carriageway.",
    capAr: "تنخفض الرؤية بسبب الغبار. تظهر أضواء تحذير في مسارك: مركبة متوقفة على الطريق.",
    dur: 60, windows: [[26, 31]], speed, camX: [[0, ourLane(env, 1)], [30.5, ourLane(env, 1)], [33, ourLane(env, 0)]], env, marks: [],
    actors: [{ kind: "suv", color: "#f3f1ea", k: [[0, ourLane(env, 1), S], [60, ourLane(env, 1), S]], hazard: true }],
  };
}

function s13(): Scene {
  const speed = [[0, 12], [34.5, 12], [37.5, 2], [39, 0], [42, 0], [45, 10], [60, 12]];
  const P = 446;
  return {
    id: "night", en: "Pedestrian in dark clothing at night", ar: "مشاة بملابس داكنة ليلاً",
    capEn: "A pedestrian in dark clothing crosses from the left, barely visible until they enter your headlights.",
    capAr: "شخص بملابس داكنة يعبر من اليسار، بالكاد يُرى حتى يدخل في ضوء مصابيحك.",
    dur: 60, windows: [[32.5, 37.5]], speed, camX: [[0, 1.75]],
    env: { look: "city", lanes: 1, median: 0, oncoming: 2, night: true, seed: 131 },
    marks: [],
    actors: [{ kind: "ped", color: "#22252b", k: [[0, -7.5, P], [30, -7.2, P], [33, -4.5, P], [35.5, -1.5, P], [38, 1.0, P], [40, 1.6, P], [42, 4.5, P], [44, 7.2, P], [60, 7.5, P + 20]] }],
  };
}

function s14(): Scene {
  const speed = [[0, 9], [41.5, 9], [44, 1], [45.5, 0], [50, 0], [53, 8], [60, 9]];
  const c = drive(speed);
  const R = 395;
  return {
    id: "reversing", en: "Car reversing out of a parking space", ar: "سيارة ترجع للخلف من موقف",
    capEn: "Reversing lights come on in a car parked nose-in outside the shops. It backs out into your lane without seeing you.",
    capAr: "تضيء أضواء الرجوع في سيارة متوقفة أمام المحلات. ترجع إلى مسارك دون أن تراك.",
    dur: 60, windows: [[40.5, 45.5]], speed, camX: [[0, 1.75]],
    env: { look: "city", lanes: 1, median: 0, parking: "bays", parkedGaps: [[R - 2.5, R + 2.5]], oncoming: 2, seed: 141 },
    marks: [],
    actors: [{
      kind: "car", color: "#5d6d7e",
      k: [[0, 6.25, R], [41, 6.25, R], [42.5, 5.3, R], [44.5, 2.8, R], [46, 1.8, R + 1], [47.5, 1.75, R + 2], [50, 1.75, R + 7], [54, 1.75, c.z(54) + 14], [60, 1.75, c.z(60) + 30]],
      face: [[0, "side", 1], [46.5, "rear"]], reverse: [40, 46.5],
    }],
  };
}

export const PRACTICE: Scene = practice();
export const SCENES: Scene[] = [s1(), s2(), s3(), s4(), s5(), s6(), s7(), s8(), s9(), s10(), s11(), s12(), s13(), s14()];

