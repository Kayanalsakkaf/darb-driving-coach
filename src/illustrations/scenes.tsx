// Darb explanatory teaching diagrams. Top-down, right-hand traffic unless noted.
import type { JSX } from "react";
import { C, Car, Truck, Person, Tx, Step, Arrow, Dim, Dashes, GiveWayPaint, LaneArrow, Frame, Signal } from "./kit";

type P = { ar: boolean };
const pick = (ar: boolean) => (en: string, a: string) => (ar ? a : en);

/* 1. Cockpit drill from the driver's seat (left-hand drive) */
function Cockpit({ ar }: P) {
  const t = pick(ar);
  return (
    <Frame w={420} h={260} label={t("Cockpit drill: doors, seat, steering, seatbelt, mirrors", "تجهيز المقصورة: الأبواب، المقعد، المقود، الحزام، المرايا")} bg="#dfe5ea">
      <path d="M40 20 H380 L350 110 H70 Z" fill={C.glass} stroke={C.ink} strokeWidth={2} />
      <rect x={185} y={26} width={50} height={14} rx={5} fill="#5c6670" stroke={C.ink} strokeWidth={2} />
      <path d="M8 70 L40 60 L46 96 L12 100 Z" fill="#5c6670" stroke={C.ink} strokeWidth={2} />
      <path d="M412 70 L380 60 L374 96 L408 100 Z" fill="#5c6670" stroke={C.ink} strokeWidth={2} />
      <path d="M20 110 H400 V150 H20 Z" fill="#2e3439" stroke={C.ink} strokeWidth={2} />
      <path d="M8 110 L40 110 L40 252 L8 252 Z" fill="#4a5157" stroke={C.ink} strokeWidth={2} />
      <rect x={14} y={170} width={22} height={6} rx={3} fill={C.kerb} />
      <circle cx={130} cy={175} r={52} fill="none" stroke="#1b1f22" strokeWidth={9} />
      <circle cx={130} cy={175} r={14} fill="#1b1f22" />
      <path d="M78 175 H116 M144 175 H182 M130 189 V227" stroke="#1b1f22" strokeWidth={7} />
      <path d="M210 250 Q130 210 60 120" fill="none" stroke={C.red} strokeWidth={5} strokeLinecap="round" />
      <rect x={250} y={170} width={70} height={80} rx={10} fill="#4a5157" stroke={C.ink} strokeWidth={2} />
      <Step x={24} y={204} n={1} /><Tx x={46} y={238} anchor="start" ar={ar}>{t("Doors shut", "الأبواب مغلقة")}</Tx>
      <Step x={285} y={196} n={2} /><Tx x={285} y={232} ar={ar}>{t("Seat: knees bent", "المقعد: ركبتان منثنيتان")}</Tx>
      <Step x={130} y={126} n={3} /><Tx x={130} y={250} ar={ar}>{t("Steering: hands 9 & 3", "المقود: اليدان 9 و3")}</Tx>
      <Step x={200} y={226} n={4} /><Tx x={210} y={212} anchor="start" ar={ar}>{t("Seatbelt", "حزام الأمان")}</Tx>
      <Step x={210} y={58} n={5} /><Step x={26} y={50} n={5} /><Step x={394} y={50} n={5} />
      <Tx x={210} y={86} ar={ar}>{t("Mirrors: whole rear window", "المرايا: النافذة الخلفية كاملة")}</Tx>
    </Frame>
  );
}

/* 2. Mirror view cones and blind spots */
function Mirrors({ ar }: P) {
  const t = pick(ar);
  return (
    <Frame w={400} h={300} label={t("What your mirrors show and where the blind spots are", "ما تريك المرايا وأين النقاط العمياء")}>
      <rect x={80} y={0} width={240} height={300} fill={C.road} />
      <Dashes x1={160} y1={0} x2={160} y2={300} /><Dashes x1={240} y1={0} x2={240} y2={300} />
      <path d="M200 140 L170 300 L230 300 Z" fill={C.cone} stroke={C.amber} strokeWidth={1.5} />
      <path d="M187 130 L120 300 L178 300 Z" fill={C.cone} stroke={C.amber} strokeWidth={1.5} />
      <path d="M213 130 L280 300 L222 300 Z" fill={C.cone} stroke={C.amber} strokeWidth={1.5} />
      <path d="M186 140 L160 132 L90 200 L120 230 Z" fill={C.danger} stroke={C.red} strokeWidth={1.5} strokeDasharray="4 3" />
      <path d="M214 140 L240 132 L310 200 L280 230 Z" fill={C.danger} stroke={C.red} strokeWidth={1.5} strokeDasharray="4 3" />
      <Car x={200} y={140} learner />
      <Car x={270} y={190} r={0} c={C.car2} />
      <path d="M222 120 Q250 110 262 160" fill="none" stroke={C.ink} strokeWidth={2} strokeDasharray="3 3" />
      <Tx x={200} y={292} ar={ar}>{t("Interior mirror", "المرآة الداخلية")}</Tx>
      <Tx x={88} y={250} anchor="start" ar={ar}>{t("Left mirror", "المرآة اليسرى")}</Tx>
      <Tx x={312} y={250} anchor="end" ar={ar}>{t("Right mirror", "المرآة اليمنى")}</Tx>
      <Tx x={70} y={170} anchor="end" c={C.red} ar={ar}>{t("Blind spot", "نقطة عمياء")}</Tx>
      <Tx x={330} y={170} anchor="start" c={C.red} ar={ar}>{t("Blind spot", "نقطة عمياء")}</Tx>
      <Tx x={200} y={30} ar={ar}>{t("Glance over the shoulder to check", "التفت فوق كتفك للتأكد")}</Tx>
    </Frame>
  );
}

/* 3. Selector and pedals */
function Controls({ ar }: P) {
  const t = pick(ar);
  const gears: [string, string, string][] = [["P", "Park: stopped, engine off", "توقف: عند الإيقاف"], ["R", "Reverse", "رجوع"], ["N", "Neutral: wheels free", "محايد: العجلات حرة"], ["D", "Drive", "قيادة"]];
  return (
    <Frame w={420} h={240} label={t("Automatic selector P R N D and the two pedals, right foot only", "ناقل الحركة P R N D والدواستان، القدم اليمنى فقط")}>
      <rect x={30} y={24} width={70} height={190} rx={14} fill="#2e3439" stroke={C.ink} strokeWidth={2} />
      <rect x={60} y={40} width={10} height={160} rx={5} fill="#141719" />
      {gears.map(([g, en, a], i) => (
        <g key={g}>
          <Tx x={46} y={58 + i * 44} c="#fff" halo={false} bold size={14}>{g}</Tx>
          <Tx x={110} y={58 + i * 44} anchor="start" size={10} ar={ar}>{t(en, a)}</Tx>
        </g>
      ))}
      <circle cx={65} cy={186} r={11} fill={C.blue} stroke="#fff" strokeWidth={2} />
      <Tx x={65} y={232} size={10} ar={ar}>{t("Foot on brake to shift", "اضغط الفرامل للتبديل")}</Tx>
      <rect x={250} y={70} width={70} height={60} rx={8} fill="#4a5157" stroke={C.ink} strokeWidth={2} />
      <rect x={340} y={50} width={30} height={90} rx={6} fill="#4a5157" stroke={C.ink} strokeWidth={2} />
      <Tx x={285} y={60} ar={ar}>{t("Brake", "الفرامل")}</Tx>
      <Tx x={355} y={40} ar={ar}>{t("Accelerator", "البنزين")}</Tx>
      <path d="M330 220 Q332 170 320 150 L346 150 Q350 180 352 220 Z" fill={C.fronx} stroke={C.ink} strokeWidth={2} />
      <circle cx={341} cy={214} r={4} fill="#fff" stroke={C.ink} strokeWidth={1.5} />
      <Arrow d="M300 165 Q335 190 365 160" head={[365, 160, -50]} c={C.ink} w={2} />
      <Tx x={300} y={235} ar={ar}>{t("Heel stays down, pivot", "الكعب ثابت، حرّك القدم")}</Tx>
      <path d="M190 120 L230 120 M222 112 L230 120 L222 128" stroke={C.red} strokeWidth={0} />
      <Tx x={200} y={190} c={C.red} ar={ar}>{t("Left foot rests", "القدم اليسرى ترتاح")}</Tx>
    </Frame>
  );
}

/* 4. Moving off */
function MovingOff({ ar }: P) {
  const t = pick(ar);
  return (
    <Frame w={420} h={260} label={t("Moving off: mirrors, signal, blind spot, go", "الانطلاق: المرايا، الإشارة، النقطة العمياء، انطلق")}>
      <rect x={120} y={0} width={220} height={260} fill={C.road} />
      <rect x={340} y={0} width={14} height={260} fill={C.kerb} />
      <Dashes x1={230} y1={0} x2={230} y2={260} />
      <Car x={318} y={60} c={C.car2} />
      <path d="M309 170 L250 260 L300 260 Z" fill={C.cone} />
      <path d="M309 180 Q255 200 250 230" fill="none" stroke={C.red} strokeWidth={2} strokeDasharray="3 3" />
      <Car x={320} y={180} learner sig="l" />
      <Car x={180} y={240} r={0} c={C.car2} ghost />
      <Arrow d="M320 156 Q320 120 286 100 Q280 96 280 40" head={[280, 30, -90]} dashed c={C.fronx} />
      <Step x={372} y={200} n={1} /><Tx x={392} y={204} anchor="start" size={10} ar={ar}>{t("Mirrors", "المرايا")}</Tx>
      <Step x={372} y={160} n={2} /><Tx x={392} y={164} anchor="start" size={10} ar={ar}>{t("Signal", "إشارة")}</Tx>
      <Step x={240} y={210} n={3} /><Tx x={130} y={200} anchor="start" size={10} ar={ar}>{t("Blind-spot check", "النقطة العمياء")}</Tx>
      <Step x={300} y={80} n={4} /><Tx x={100} y={60} anchor="start" size={10} ar={ar}>{t("Go when clear", "انطلق عند الأمان")}</Tx>
    </Frame>
  );
}

/* 5. Stopping at the kerb */
function KerbStop({ ar }: P) {
  const t = pick(ar);
  return (
    <Frame w={420} h={240} label={t("Pulling up at the kerb safely", "التوقف بجانب الرصيف بأمان")}>
      <rect x={0} y={60} width={420} height={140} fill={C.road} />
      <rect x={0} y={200} width={420} height={14} fill={C.kerb} />
      <Dashes x1={0} y1={130} x2={420} y2={130} />
      <rect x={60} y={60} width={40} height={140} fill="none" />
      {[0, 1, 2, 3, 4, 5].map(i => <rect key={i} x={40} y={136 + i * 11} width={40} height={6} fill={C.paint} />)}
      <Arrow d="M150 165 Q240 165 270 182 L300 184" head={[310, 184, 0]} dashed c={C.fronx} />
      <Car x={330} y={184} r={90} learner sig="r" />
      <Dim x1={360} y1={196} x2={360} y2={200} label={t("15–30 cm", "15–30 سم")} ar={ar} off={10} />
      <line x1={30} y1={110} x2={90} y2={230} stroke={C.red} strokeWidth={0} />
      <path d="M48 214 L72 236 M72 214 L48 236" stroke={C.red} strokeWidth={3} />
      <Tx x={60} y={50} c={C.red} ar={ar}>{t("Never on a crossing", "لا تتوقف على معبر")}</Tx>
      <Step x={150} y={145} n={1} /><Tx x={150} y={100} ar={ar}>{t("Mirrors, signal", "المرايا، الإشارة")}</Tx>
      <Step x={250} y={150} n={2} /><Tx x={250} y={84} ar={ar}>{t("Ease to kerb", "اقترب ببطء")}</Tx>
      <Step x={330} y={150} n={3} /><Tx x={340} y={30} ar={ar}>{t("Handbrake, P", "فرامل اليد، P")}</Tx>
    </Frame>
  );
}

/* 6. Two-second gap */
function TwoSecond({ ar }: P) {
  const t = pick(ar);
  const row = (y: number, gap: number, wet: boolean) => (
    <g>
      <rect x={0} y={y} width={440} height={56} fill={C.road} />
      <Dashes x1={0} y1={y} x2={440} y2={y} w={0} />
      <rect x={300} y={y - 30} width={4} height={30} fill={C.grey} /><circle cx={302} cy={y - 32} r={5} fill={C.amber} stroke={C.ink} strokeWidth={1.5} />
      <Car x={310} y={y + 28} r={90} c={C.car2} />
      <Car x={310 - gap} y={y + 28} r={90} learner />
      <Dim x1={330 - gap} y1={y + 50} x2={290} y2={y + 50} label={wet ? t("4 seconds in rain", "4 ثوانٍ في المطر") : t("2 seconds", "ثانيتان")} ar={ar} c="#fff" />
      {wet && [40, 120, 200, 380].map(x => <path key={x} d={`M${x} ${y + 10} l-4 10`} stroke={C.glass} strokeWidth={2} />)}
    </g>
  );
  return (
    <Frame w={440} h={250} label={t("Two-second gap, doubled in rain", "فاصل ثانيتين، ضعفه في المطر")}>
      {row(50, 110, false)}
      {row(170, 220, true)}
      <Tx x={302} y={14} ar={ar}>{t("Fixed point", "علامة ثابتة")}</Tx>
      <Tx x={20} y={140} anchor="start" size={10} ar={ar}>{t("Car ahead passes the post: count to two", "تتجاوز السيارة الأمامية العمود: عُدّ إلى اثنين")}</Tx>
    </Frame>
  );
}

/* 7. Stopping distances (Moroor handbook: reaction = v/10 x 3, braking = (v/10)^2) */
function StopDist({ ar }: P) {
  const t = pick(ar);
  const k = 2;
  const rows = [50, 80, 100, 120].map(v => ({ v, r: (v / 10) * 3, b: (v / 10) ** 2 }));
  return (
    <Frame w={480} h={230} label={t("Stopping distance = reaction + braking", "مسافة التوقف = رد الفعل + الفرملة")}>
      {rows.map((d, i) => {
        const y = 40 + i * 44;
        return (
          <g key={d.v}>
            <Tx x={44} y={y + 14} anchor="end" bold ar={ar}>{t(`${d.v} km/h`, `${d.v} كم/س`)}</Tx>
            <rect x={50} y={y} width={d.r * k} height={20} fill={C.amber} stroke={C.ink} strokeWidth={1.5} />
            <rect x={50 + d.r * k} y={y} width={d.b * k} height={20} fill={C.red} stroke={C.ink} strokeWidth={1.5} />
            <Tx x={56 + (d.r + d.b) * k} y={y + 14} anchor="start" bold>{`${d.r + d.b} m`}</Tx>
          </g>
        );
      })}
      <rect x={60} y={208} width={14} height={10} fill={C.amber} /><Tx x={80} y={217} anchor="start" size={10} ar={ar}>{t("Reaction (1 s)", "رد الفعل (ثانية)")}</Tx>
      <rect x={210} y={208} width={14} height={10} fill={C.red} /><Tx x={230} y={217} anchor="start" size={10} ar={ar}>{t("Braking (grows with speed²)", "الفرملة (تزيد بمربع السرعة)")}</Tx>
      <Tx x={240} y={22} ar={ar}>{t("Dry road, good car (Moroor handbook)", "طريق جاف وسيارة سليمة (دليل المرور)")}</Tx>
    </Frame>
  );
}

/* 8. Lane discipline */
function Lanes({ ar }: P) {
  const t = pick(ar);
  return (
    <Frame w={400} h={300} label={t("Keep right, overtake on the left, then return", "التزم باليمين، تجاوز من اليسار ثم عُد")}>
      <rect x={110} y={0} width={180} height={300} fill={C.road} />
      <line x1={114} y1={0} x2={114} y2={300} stroke={C.amber} strokeWidth={2} />
      <line x1={286} y1={0} x2={286} y2={300} stroke={C.paint} strokeWidth={2} />
      <Dashes x1={170} y1={0} x2={170} y2={300} /><Dashes x1={230} y1={0} x2={230} y2={300} />
      <Truck x={260} y={150} />
      <Car x={260} y={262} learner ghost />
      <Arrow d="M260 240 Q260 215 200 200 L200 110 Q260 95 260 60" head={[260, 30, -90]} dashed c={C.fronx} />
      <Car x={140} y={60} c={C.car3} />
      <Tx x={140} y={292} ar={ar}>{t("Overtaking", "التجاوز")}</Tx>
      <Tx x={200} y={292} ar={ar}>{t("Middle", "الأوسط")}</Tx>
      <Tx x={260} y={292} ar={ar}>{t("Normal", "العادي")}</Tx>
      <Tx x={300} y={100} anchor="start" size={10} ar={ar}>{t("Return right when", "عُد يمينًا عندما")}</Tx>
      <Tx x={300} y={114} anchor="start" size={10} ar={ar}>{t("the truck is in your mirror", "ترى الشاحنة في المرآة")}</Tx>
    </Frame>
  );
}

/* 9. Lane change */
function LaneChange({ ar }: P) {
  const t = pick(ar);
  return (
    <Frame w={360} h={300} label={t("Changing lanes: mirrors, signal, blind spot, move", "تغيير المسار: المرايا، الإشارة، النقطة العمياء، تحرك")}>
      <rect x={90} y={0} width={180} height={300} fill={C.road} />
      <Dashes x1={180} y1={0} x2={180} y2={300} />
      <path d="M216 190 L150 300 L196 300 Z" fill={C.cone} />
      <path d="M205 210 L160 190 L130 240 L170 260 Z" fill={C.danger} stroke={C.red} strokeDasharray="4 3" />
      <Car x={225} y={210} learner sig="l" />
      <Car x={135} y={295} c={C.car2} />
      <Arrow d="M225 186 Q225 150 180 120 Q135 95 135 50" head={[135, 30, -90]} dashed c={C.fronx} />
      <Step x={290} y={230} n={1} /><Tx x={302} y={234} anchor="start" size={10} ar={ar}>{t("Mirrors", "المرايا")}</Tx>
      <Step x={290} y={200} n={2} /><Tx x={302} y={204} anchor="start" size={10} ar={ar}>{t("Signal", "إشارة")}</Tx>
      <Step x={110} y={225} n={3} /><Tx x={20} y={210} anchor="start" size={10} c={C.red} ar={ar}>{t("Shoulder check", "التفت")}</Tx>
      <Step x={180} y={120} n={4} /><Tx x={196} y={90} anchor="start" size={10} ar={ar}>{t("Gentle move", "انتقال سلس")}</Tx>
    </Frame>
  );
}

/* 10. T-junction */
function TJunction({ ar }: P) {
  const t = pick(ar);
  return (
    <Frame w={400} h={300} label={t("T-junction: give way, then turn right or left", "تقاطع T: أفسح الطريق ثم انعطف يمينًا أو يسارًا")}>
      <rect x={0} y={60} width={400} height={100} fill={C.road} />
      <rect x={150} y={160} width={100} height={140} fill={C.road} />
      <Dashes x1={0} y1={110} x2={150} y2={110} /><Dashes x1={250} y1={110} x2={400} y2={110} />
      <line x1={200} y1={175} x2={200} y2={300} stroke={C.paint} strokeWidth={2} />
      <Dashes x1={200} y1={164} x2={250} y2={164} dash="6 4" /><Dashes x1={200} y1={169} x2={250} y2={169} dash="6 4" />
      <GiveWayPaint x={225} y={195} />
      <Car x={225} y={250} learner />
      <Arrow d="M232 228 Q238 150 290 140 L360 138" head={[370, 138, 0]} dashed c={C.prio} />
      <Arrow d="M218 228 Q215 95 140 88 L40 86" head={[30, 86, 180]} dashed c={C.fronx} />
      <Car x={60} y={138} r={90} c={C.car2} />
      <Car x={340} y={84} r={-90} c={C.car3} />
      <Step x={262} y={200} n={1} /><Tx x={270} y={230} anchor="start" size={10} ar={ar}>{t("Stop at line, look R-L-R", "قف عند الخط، انظر")}</Tx>
      <Tx x={330} y={170} size={10} c={C.prio} ar={ar}>{t("Right: tight, near lane", "يمين: انعطاف ضيق")}</Tx>
      <Tx x={80} y={50} size={10} c={C.fronx} ar={ar}>{t("Left: wide, far lane", "يسار: انعطاف واسع")}</Tx>
    </Frame>
  );
}

/* 11. Crossroads, equal priority */
function Crossroads({ ar }: P) {
  const t = pick(ar);
  return (
    <Frame w={340} h={340} label={t("Unmarked crossroads: the vehicle on your right goes first", "تقاطع بلا إشارات: المركبة القادمة من يمينك تمر أولًا")}>
      <rect x={120} y={0} width={100} height={340} fill={C.road} />
      <rect x={0} y={120} width={340} height={100} fill={C.road} />
      <Dashes x1={170} y1={0} x2={170} y2={120} /><Dashes x1={170} y1={220} x2={170} y2={340} />
      <Dashes x1={0} y1={170} x2={120} y2={170} /><Dashes x1={220} y1={170} x2={340} y2={170} />
      <Car x={195} y={260} learner />
      <Car x={265} y={145} r={-90} c={C.car3} />
      <Arrow d="M240 145 L60 145" head={[50, 145, 180]} dashed c={C.car3} />
      <Arrow d="M195 236 L195 70" head={[195, 60, -90]} dashed c={C.fronx} />
      <Step x={300} y={120} n={1} c={C.car3} />
      <Step x={230} y={280} n={2} c={C.fronx} />
      <Tx x={170} y={325} ar={ar}>{t("You wait: the car is on your right", "انتظر: السيارة على يمينك")}</Tx>
    </Frame>
  );
}

/* 12. Traffic lights incl. flashing amber and right-on-red */
function Lights({ ar }: P) {
  const t = pick(ar);
  const heads: [("r" | "a" | "g")[], string, string, boolean?][] = [
    [["g"], "Go if clear", "انطلق إن كان آمنًا"], [["a"], "Stop if safe", "قف إن أمكن"], [["r"], "Stop", "قف"], [["a"], "Flashing: slow, give way", "وامض: خفف وأفسح", true]];
  return (
    <Frame w={480} h={260} label={t("Traffic light sequence and right turn on red", "تسلسل الإشارة الضوئية والانعطاف يمينًا عند الأحمر")}>
      {heads.map(([on, en, a, f], i) => (
        <g key={i}>
          <Signal x={40 + i * 60} y={70} on={on} flash={f} s={0.9} />
          <Tx x={40 + i * 60} y={125 + (i % 2) * 14} size={9} ar={ar}>{t(en, a)}</Tx>
        </g>
      ))}
      <path d="M40 160 H240" stroke={C.ink} strokeWidth={0} />
      <rect x={290} y={0} width={80} height={260} fill={C.road} />
      <rect x={290} y={80} width={190} height={70} fill={C.road} />
      <line x1={330} y1={160} x2={370} y2={160} stroke={C.paint} strokeWidth={4} />
      <Car x={350} y={190} learner sig="r" />
      <Arrow d="M352 168 Q356 125 400 120 L460 120" head={[470, 120, 0]} dashed c={C.fronx} />
      <Signal x={390} y={200} on={["r"]} s={0.6} />
      <Step x={330} y={200} n={1} /><Step x={410} y={100} n={2} />
      <Tx x={290} y={236} anchor="end" size={9} ar={ar}>{t("1 Stop fully 2–3 s", "1 قف تمامًا 2–3 ث")}</Tx>
      <Tx x={290} y={250} anchor="end" size={9} ar={ar}>{t("2 Turn under 15 km/h, give way", "2 انعطف بأقل من 15 كم/س وأفسح")}</Tx>
    </Frame>
  );
}

/* 13. Pedestrian crossings */
function Crossings({ ar }: P) {
  const t = pick(ar);
  const zebra = (x: number) => [0, 1, 2, 3, 4, 5, 6, 7].map(i => <rect key={i} x={x + i * 18} y={110} width={10} height={36} fill={C.paint} />);
  return (
    <Frame w={460} h={260} label={t("Zebra and signal-controlled crossings", "معبر المشاة المخطط والمعبر بإشارة")}>
      <rect x={0} y={0} width={220} height={260} fill={C.ground} />
      <rect x={20} y={0} width={160} height={260} fill={C.road} transform="rotate(0)" />
      <g transform="translate(0 0)">{zebra(26)}</g>
      <Dashes x1={100} y1={160} x2={180} y2={160} dash="6 4" />
      <Car x={140} y={200} learner />
      <Person x={70} y={128} />
      <Arrow d="M84 128 L150 128" head={[160, 128, 0]} c={C.red} w={2} />
      <Tx x={100} y={250} ar={ar}>{t("Zebra: stop for anyone waiting", "مخطط: قف لكل من ينتظر")}</Tx>
      <rect x={260} y={0} width={160} height={260} fill={C.road} />
      {zebra(266)}
      <line x1={340} y1={164} x2={420} y2={164} stroke={C.paint} strokeWidth={4} />
      <Car x={380} y={200} learner />
      <Signal x={440} y={140} on={["r"]} s={0.55} />
      <Person x={330} y={128} c={C.prio} />
      <Tx x={340} y={250} ar={ar}>{t("Signal: red = wait behind line", "بإشارة: أحمر = قف خلف الخط")}</Tx>
    </Frame>
  );
}

/* 14. Roundabout lanes by exit */
function Roundabout({ ar }: P) {
  const t = pick(ar);
  const cx = 200, cy = 140;
  return (
    <Frame w={400} h={320} label={t("Roundabout: choose the lane by your exit", "الدوار: اختر المسار حسب المخرج")}>
      <rect x={146} y={0} width={108} height={320} fill={C.road} />
      <rect x={0} y={86} width={400} height={108} fill={C.road} />
      <circle cx={cx} cy={cy} r={110} fill={C.road} />
      <circle cx={cx} cy={cy} r={84} fill="none" stroke={C.paint} strokeWidth={1.5} strokeDasharray="8 6" />
      <circle cx={cx} cy={cy} r={62} fill="none" stroke={C.paint} strokeWidth={1.5} strokeDasharray="8 6" />
      <circle cx={cx} cy={cy} r={42} fill="#8fbf7a" stroke={C.kerb} strokeWidth={4} />
      <line x1={200} y1={252} x2={200} y2={320} stroke={C.paint} strokeWidth={2} />
      <Dashes x1={218} y1={262} x2={218} y2={320} /><Dashes x1={236} y1={262} x2={236} y2={320} />
      <Dashes x1={200} y1={252} x2={254} y2={252} dash="6 4" />
      <LaneArrow x={245} y={290} kind="r" /><LaneArrow x={227} y={290} kind="s" /><LaneArrow x={209} y={290} kind="lu" />
      <Arrow d="M245 262 Q248 175 330 172 L392 172" head={[398, 172, 0]} dashed c={C.prio} />
      <Arrow d="M227 262 C290 215, 290 75, 227 40 L227 8" head={[227, 4, -90]} dashed c={C.blue} />
      <Arrow d="M209 262 C320 240, 330 30, 200 50 C150 56, 140 110, 60 110 L10 110" head={[6, 110, 180]} dashed c={C.red} />
      <Step x={262} y={306} n={1} c={C.prio} /><Step x={227} y={306} n={2} c={C.blue} /><Step x={192} y={306} n={3} c={C.red} />
      <Tx x={278} y={240} anchor="start" size={10} c={C.prio} ar={ar}>{t("1 Right: signal right", "1 يمين: إشارة يمين")}</Tx>
      <Tx x={278} y={225} anchor="start" size={10} c={C.blue} ar={ar}>{t("2 Straight", "2 مستقيم")}</Tx>
      <Tx x={10} y={250} anchor="start" size={10} c={C.red} ar={ar}>{t("3 Left / U-turn: signal left", "3 يسار/دوران: إشارة يسار")}</Tx>
      <Tx x={10} y={20} anchor="start" size={10} ar={ar}>{t("Give way to traffic already on it (from your left)", "أفسح لمن في الدوار (من يسارك)")}</Tx>
    </Frame>
  );
}

/* 15. U-turn slot */
function UTurn({ ar }: P) {
  const t = pick(ar);
  return (
    <Frame w={380} h={300} label={t("U-turn slot on a divided road", "فتحة الدوران للخلف في طريق مزدوج")}>
      <rect x={60} y={0} width={110} height={300} fill={C.road} />
      <rect x={210} y={0} width={110} height={300} fill={C.road} />
      <rect x={170} y={0} width={40} height={300} fill="#8fbf7a" stroke={C.kerb} strokeWidth={3} />
      <rect x={168} y={100} width={44} height={60} fill={C.road} />
      <Dashes x1={115} y1={0} x2={115} y2={300} /><Dashes x1={265} y1={0} x2={265} y2={300} />
      <Car x={237} y={250} learner sig="l" />
      <Arrow d="M237 228 L237 200 Q237 172 205 150 Q190 120 140 130 Q90 140 90 180 L90 230" head={[90, 240, 90]} dashed c={C.fronx} />
      <Car x={140} y={40} r={180} c={C.car2} />
      <Step x={300} y={250} n={1} /><Tx x={340} y={280} size={10} ar={ar}>{t("Left lane, signal", "المسار الأيسر، إشارة")}</Tx>
      <Step x={190} y={130} n={2} /><Tx x={190} y={88} size={10} ar={ar}>{t("Wait: give way", "انتظر: أفسح")}</Tx>
      <Step x={60} y={210} n={3} /><Tx x={60} y={290} size={10} ar={ar}>{t("Join the right lane", "ادخل المسار الأيمن")}</Tx>
    </Frame>
  );
}

/* 16. Three-point turn */
function ThreePoint({ ar }: P) {
  const t = pick(ar);
  return (
    <Frame w={400} h={240} label={t("Turn in the road: three points", "الالتفاف بثلاث نقاط")}>
      <rect x={0} y={50} width={400} height={140} fill={C.road} />
      <rect x={0} y={40} width={400} height={10} fill={C.kerb} /><rect x={0} y={190} width={400} height={10} fill={C.kerb} />
      <Car x={130} y={168} r={90} learner ghost />
      <Arrow d="M150 168 Q230 160 250 80" head={[254, 72, -75]} dashed c={C.fronx} />
      <Car x={262} y={78} r={-30} learner ghost />
      <Arrow d="M265 100 Q240 150 200 160" head={[192, 162, 165]} dashed c={C.red} />
      <Car x={190} y={150} r={-120} learner />
      <Arrow d="M175 135 Q130 80 60 80" head={[50, 80, 180]} dashed c={C.prio} />
      <Step x={210} y={130} n={1} /><Step x={238} y={150} n={2} c={C.red} /><Step x={120} y={100} n={3} c={C.prio} />
      <Tx x={200} y={20} ar={ar}>{t("1 forward full lock, 2 reverse opposite lock, 3 forward away", "1 أمام بكامل الدوران 2 رجوع بالعكس 3 أمام")}</Tx>
      <Tx x={200} y={225} size={10} ar={ar}>{t("Look all round before each move", "انظر حولك قبل كل حركة")}</Tx>
    </Frame>
  );
}

const bays = (x0: number, n: number, y: number, h = 60) =>
  Array.from({ length: n + 1 }, (_, i) => <line key={i} x1={x0 + i * 40} y1={y} x2={x0 + i * 40} y2={y + h} stroke={C.paint} strokeWidth={2} />);

/* 17. Forward bay */
function BayForward({ ar }: P) {
  const t = pick(ar);
  return (
    <Frame w={400} h={240} label={t("Forward bay parking with a reference point", "الاصطفاف الأمامي في موقف مع نقطة مرجعية")}>
      <rect x={0} y={0} width={400} height={240} fill={C.road} />
      {bays(80, 6, 20, 70)}
      <line x1={80} y1={20} x2={320} y2={20} stroke={C.paint} strokeWidth={2} />
      <Car x={140} y={55} c={C.car2} /><Car x={260} y={55} c={C.car3} />
      <Car x={100} y={160} r={90} learner sig="l" ghost />
      <Arrow d="M120 160 Q200 160 200 110 L200 70" head={[200, 60, -90]} dashed c={C.fronx} />
      <line x1={160} y1={150} x2={160} y2={90} stroke={C.amber} strokeWidth={2} strokeDasharray="3 3" />
      <Step x={100} y={200} n={1} /><Step x={175} y={140} n={2} /><Step x={225} y={90} n={3} />
      <Tx x={20} y={225} anchor="start" size={10} c="#fff" halo={false} ar={ar}>{t("1 Slow, wide  2 Steer when the mirror passes the bay line  3 Straighten, stop", "1 ببطء وبعيدًا 2 وجّه عند مرور المرآة بالخط 3 استقم وقف")}</Tx>
    </Frame>
  );
}

/* 18. Reverse bay */
function BayReverse({ ar }: P) {
  const t = pick(ar);
  return (
    <Frame w={400} h={240} label={t("Reverse bay parking with reference points", "الاصطفاف بالرجوع في موقف مع نقاط مرجعية")}>
      <rect x={0} y={0} width={400} height={240} fill={C.road} />
      {bays(80, 6, 20, 70)}
      <line x1={80} y1={20} x2={320} y2={20} stroke={C.paint} strokeWidth={2} />
      <Car x={140} y={55} c={C.car2} /><Car x={260} y={55} c={C.car3} />
      <Car x={270} y={150} r={90} learner ghost />
      <Arrow d="M250 150 Q200 150 200 110 L200 72" head={[200, 62, -90]} dashed c={C.red} />
      <Car x={200} y={55} r={180} learner />
      <line x1={200} y1={150} x2={160} y2={140} stroke={C.amber} strokeWidth={2} strokeDasharray="3 3" />
      <Step x={300} y={190} n={1} /><Step x={230} y={120} n={2} /><Step x={225} y={40} n={3} />
      <Tx x={20} y={210} anchor="start" size={10} c="#fff" halo={false} ar={ar}>{t("1 Stop with the bay line 2 bays behind your mirror", "1 قف والخط على بعد موقفين خلف المرآة")}</Tx>
      <Tx x={20} y={226} anchor="start" size={10} c="#fff" halo={false} ar={ar}>{t("2 Reverse slowly, full lock  3 Straighten when lines are parallel", "2 ارجع ببطء بكامل الدوران 3 استقم عند توازي الخطوط")}</Tx>
    </Frame>
  );
}

/* 19. Parallel parking */
function Parallel({ ar }: P) {
  const t = pick(ar);
  return (
    <Frame w={440} h={230} label={t("Parallel parking in four steps", "الاصطفاف الموازي في أربع خطوات")}>
      <rect x={0} y={20} width={440} height={170} fill={C.road} />
      <rect x={0} y={190} width={440} height={14} fill={C.kerb} />
      <Car x={300} y={168} r={90} c={C.car2} />
      <Car x={80} y={168} r={90} c={C.car3} />
      <Car x={300} y={120} r={90} learner ghost />
      <Arrow d="M280 120 Q220 122 195 150 Q180 168 140 170" head={[132, 170, 180]} dashed c={C.red} />
      <Car x={200} y={145} r={135} learner ghost />
      <Car x={160} y={168} r={90} learner />
      <Dim x1={102} y1={212} x2={278} y2={212} label={t("Space ≥ 1.5 car lengths", "مسافة ≥ 1.5 طول سيارة")} ar={ar} off={-4} />
      <Dim x1={300} y1={109} x2={300} y2={148} label={t("~1 m", "~1 م")} ar={ar} off={10} />
      <Step x={330} y={100} n={1} /><Step x={270} y={150} n={2} /><Step x={215} y={120} n={3} /><Step x={160} y={140} n={4} />
      <Tx x={220} y={14} size={10} ar={ar}>{t("1 Alongside  2 Rear at its bumper: full lock  3 At 45°: straighten  4 Opposite lock in", "1 بمحاذاتها 2 عند المصد: لف كامل 3 عند 45°: استقم 4 لف معاكس")}</Tx>
    </Frame>
  );
}

/* 20. Hill start (side view) */
function HillStart({ ar }: P) {
  const t = pick(ar);
  return (
    <Frame w={420} h={240} label={t("Hill start with the handbrake (side view)", "الانطلاق على منحدر بفرامل اليد (منظر جانبي)")} bg="#dfe9f2">
      <path d="M0 230 L420 110 L420 240 L0 240 Z" fill={C.road} />
      <g transform="translate(200 160) rotate(-16)">
        <path d="M-55 0 L-55 -18 Q-50 -26 -30 -28 L-12 -44 L28 -44 L44 -28 L58 -24 L60 0 Z" fill={C.fronx} stroke={C.ink} strokeWidth={2} />
        <path d="M-8 -40 L24 -40 L36 -28 L-20 -28 Z" fill={C.glass} stroke={C.ink} strokeWidth={1} />
        <circle cx={-32} cy={0} r={11} fill="#22272b" /><circle cx={38} cy={0} r={11} fill="#22272b" />
      </g>
      <Arrow d="M270 120 L340 100" head={[350, 97, -16]} c={C.prio} />
      <Arrow d="M150 175 L100 190" head={[92, 193, 164]} c={C.red} dashed />
      <Tx x={110} y={170} c={C.red} size={10} ar={ar}>{t("Rolls back if rushed", "ترجع إن تعجلت")}</Tx>
      {[[t("Foot brake on, D", "الفرامل، D"), ""], [t("Handbrake on", "فرامل اليد"), ""], [t("Gentle gas", "بنزين خفيف"), ""], [t("Release handbrake, go", "حرر اليد وانطلق"), ""]].map(([s], i) => (
        <g key={i}><Step x={24} y={24 + i * 26} n={i + 1} /><Tx x={40} y={28 + i * 26} anchor="start" size={11} ar={ar}>{s}</Tx></g>
      ))}
    </Frame>
  );
}

/* 21. Emergency stop */
function EmergencyStop({ ar }: P) {
  const t = pick(ar);
  return (
    <Frame w={440} h={200} label={t("Emergency stop", "التوقف الطارئ")}>
      <rect x={0} y={50} width={440} height={110} fill={C.road} />
      <Dashes x1={0} y1={105} x2={440} y2={105} />
      <Car x={60} y={132} r={90} learner />
      <circle cx={380} cy={132} r={7} fill={C.red} stroke={C.ink} strokeWidth={1.5} />
      <Person x={410} y={40} s={0.9} />
      <path d="M90 125 H340 M90 139 H340" stroke="#22272b" strokeWidth={3} strokeDasharray="20 4" opacity={0.6} />
      <Dim x1={80} y1={175} x2={160} y2={175} label={t("Reaction", "رد الفعل")} ar={ar} c={C.ink} off={14} />
      <Dim x1={160} y1={175} x2={340} y2={175} label={t("Braking", "الفرملة")} ar={ar} off={14} />
      <Car x={340} y={132} r={90} learner sig="hz" ghost />
      <Tx x={220} y={20} ar={ar}>{t("Both hands, brake hard and keep pressing (ABS), hazards on once stopped", "اليدان على المقود، اضغط بقوة واستمر (ABS)، ثم الإشارات التحذيرية")}</Tx>
    </Frame>
  );
}

/* 22. Joining a highway */
function JoinHighway({ ar }: P) {
  const t = pick(ar);
  return (
    <Frame w={420} h={300} label={t("Joining a highway from the slip road", "الدخول إلى الطريق السريع من المنحدر")}>
      <rect x={100} y={0} width={180} height={300} fill={C.road} />
      <path d="M280 120 L280 300 L420 300 L420 290 Q330 230 320 120 Z" fill={C.road} />
      <Dashes x1={160} y1={0} x2={160} y2={300} /><Dashes x1={220} y1={0} x2={220} y2={300} />
      <Dashes x1={280} y1={120} x2={280} y2={240} dash="4 4" w={3} />
      <Car x={350} y={270} r={-30} learner ghost />
      <Arrow d="M340 250 Q300 200 300 170 Q300 140 250 110 L250 40" head={[250, 30, -90]} dashed c={C.fronx} />
      <Car x={300} y={170} learner sig="l" />
      <Car x={250} y={210} c={C.car2} />
      <Car x={250} y={60} c={C.car3} ghost />
      <Step x={380} y={220} n={1} /><Tx x={390} y={200} anchor="end" size={10} ar={ar}>{t("Speed up to match", "زد السرعة لتجاري")}</Tx>
      <Step x={330} y={150} n={2} /><Tx x={340} y={130} anchor="start" size={10} ar={ar}>{t("Mirror, signal, find gap", "مرآة، إشارة، فجوة")}</Tx>
      <Step x={230} y={110} n={3} /><Tx x={95} y={100} anchor="end" size={10} ar={ar}>{t("Merge, never stop", "اندمج ولا تتوقف")}</Tx>
    </Frame>
  );
}

/* 23. Leaving a highway */
function LeaveHighway({ ar }: P) {
  const t = pick(ar);
  const sign = (y: number, d: string) => (
    <g><rect x={330} y={y - 12} width={56} height={22} rx={3} fill={C.green} stroke="#fff" strokeWidth={1.5} /><Tx x={358} y={y + 4} c="#fff" halo={false} size={10}>{d}</Tx></g>
  );
  return (
    <Frame w={420} h={320} label={t("Leaving a highway: move right early", "الخروج من الطريق السريع: انتقل يمينًا مبكرًا")}>
      <rect x={100} y={0} width={180} height={320} fill={C.road} />
      <path d="M280 120 L280 0 L330 0 Q300 80 300 120 Z" fill={C.road} />
      <Dashes x1={160} y1={0} x2={160} y2={320} /><Dashes x1={220} y1={0} x2={220} y2={320} />
      {sign(280, t("1 km", "1 كم"))}{sign(200, t("500 m", "500 م"))}{sign(130, t("Exit", "مخرج"))}
      <Car x={190} y={290} learner ghost />
      <Arrow d="M190 270 Q190 240 250 220 L250 140 Q260 90 300 30" head={[306, 20, -60]} dashed c={C.fronx} />
      <Car x={250} y={190} learner sig="r" />
      <Step x={140} y={260} n={1} /><Tx x={92} y={250} anchor="end" size={10} ar={ar}>{t("Right lane early", "المسار الأيمن مبكرًا")}</Tx>
      <Step x={230} y={150} n={2} /><Tx x={92} y={150} anchor="end" size={10} ar={ar}>{t("Signal", "إشارة")}</Tx>
      <Step x={310} y={60} n={3} /><Tx x={92} y={60} anchor="end" size={10} ar={ar}>{t("Slow on the exit lane", "خفف في مسار الخروج")}</Tx>
    </Frame>
  );
}

/* 24. Overtaking on a two-way road */
function Overtaking({ ar }: P) {
  const t = pick(ar);
  return (
    <Frame w={360} h={340} label={t("Overtaking safely on a two-way road", "التجاوز بأمان على طريق باتجاهين")} bg={C.sand}>
      <rect x={110} y={0} width={140} height={340} fill={C.road} />
      <Dashes x1={180} y1={0} x2={180} y2={340} />
      <Truck x={215} y={180} />
      <Car x={215} y={290} learner ghost />
      <Arrow d="M215 268 Q215 240 150 220 L150 130 Q215 110 215 80" head={[215, 70, -90]} dashed c={C.fronx} />
      <Car x={145} y={20} r={180} c={C.car2} />
      <Dim x1={100} y1={30} x2={100} y2={220} label={t("Long clear road", "طريق خالٍ طويل")} ar={ar} off={-4} />
      <Step x={270} y={290} n={1} /><Tx x={282} y={294} anchor="start" size={10} ar={ar}>{t("Hang back, look", "ابتعد وانظر")}</Tx>
      <Step x={130} y={240} n={2} /><Tx x={270} y={240} anchor="start" size={10} ar={ar}>{t("MSM, pull out", "م-إ-م، اخرج")}</Tx>
      <Step x={130} y={170} n={3} /><Tx x={270} y={170} anchor="start" size={10} ar={ar}>{t("Pass briskly", "تجاوز بسرعة")}</Tx>
      <Step x={240} y={100} n={4} /><Tx x={270} y={100} anchor="start" size={10} ar={ar}>{t("Return when truck in mirror", "عُد عند رؤيتها في المرآة")}</Tx>
    </Frame>
  );
}

/* 25. Large vehicle blind spots */
function LargeVehicle({ ar }: P) {
  const t = pick(ar);
  return (
    <Frame w={360} h={340} label={t("Stay out of a large vehicle's blind spots", "ابتعد عن النقاط العمياء للمركبات الكبيرة")}>
      <rect x={70} y={0} width={220} height={340} fill={C.road} />
      <Dashes x1={143} y1={0} x2={143} y2={340} /><Dashes x1={217} y1={0} x2={217} y2={340} />
      <path d="M166 120 L220 120 L220 100 L166 100 Z" fill={C.danger} stroke={C.red} strokeDasharray="4 3" />
      <path d="M194 145 L290 130 L290 250 L194 230 Z" fill={C.danger} stroke={C.red} strokeDasharray="4 3" />
      <path d="M166 145 L150 150 L150 190 L166 180 Z" fill={C.danger} stroke={C.red} strokeDasharray="4 3" />
      <path d="M166 226 L220 226 L230 300 L156 300 Z" fill={C.danger} stroke={C.red} strokeDasharray="4 3" />
      <Truck x={180} y={180} />
      <Car x={250} y={190} c={C.car2} />
      <Car x={180} y={320} learner />
      <Tx x={300} y={200} anchor="start" size={10} c={C.red} ar={ar}>{t("Hidden", "مخفي")}</Tx>
      <Tx x={20} y={300} anchor="start" size={10} ar={ar}>{t("Back off: see its mirrors", "ابتعد: انظر مراياها")}</Tx>
      <Tx x={20} y={316} anchor="start" size={10} ar={ar}>{t("or it can't see you", "وإلا فلن يراك")}</Tx>
      <Tx x={180} y={20} size={10} ar={ar}>{t("Long vehicles swing wide at turns", "المركبات الطويلة تنعطف باتساع")}</Tx>
    </Frame>
  );
}

/* 26. Night beams */
function NightBeams({ ar }: P) {
  const t = pick(ar);
  const panel = (x: number, main: boolean) => (
    <g>
      <rect x={x} y={0} width={210} height={260} fill="#1c2733" />
      <rect x={x + 40} y={0} width={130} height={260} fill="#2c3238" />
      <Dashes x1={x + 105} y1={0} x2={x + 105} y2={260} />
      <path d={main ? `M${x + 128} 205 L${x + 60} 20 L${x + 170} 20 Z` : `M${x + 128} 205 L${x + 115} 120 L${x + 170} 110 Z`} fill="rgba(255,236,150,0.45)" />
      <Car x={x + 138} y={225} learner />
      <Car x={x + 72} y={50} r={180} c={C.car2} />
      {main && <path d={`M${x + 60} 70 l-8 -4 M${x + 60} 76 l-10 0 M${x + 60} 82 l-8 4`} stroke={C.amber} strokeWidth={2} />}
    </g>
  );
  return (
    <Frame w={440} h={290} label={t("Dipped beam vs main beam at night", "الإضاءة المنخفضة والعالية ليلًا")}>
      {panel(0, false)}{panel(230, true)}
      <Tx x={105} y={280} c={C.prio} ar={ar}>{t("Dipped: oncoming traffic", "منخفضة: مع القادمين")}</Tx>
      <Tx x={335} y={280} c={C.red} ar={ar}>{t("Main beam dazzles: dip it", "العالية تبهر: اخفضها")}</Tx>
    </Frame>
  );
}

/* 27. Dust / fog */
function DustFog({ ar }: P) {
  const t = pick(ar);
  return (
    <Frame w={380} h={300} label={t("Dust or fog: slow down, double the gap, dipped lights", "الغبار أو الضباب: خفف السرعة، ضاعف المسافة، أضواء منخفضة")} bg={C.sand}>
      <rect x={100} y={0} width={180} height={300} fill={C.road} />
      <Dashes x1={190} y1={0} x2={190} y2={300} />
      <Car x={235} y={70} c={C.car2} sig="hz" />
      <path d="M228 220 L215 150 L255 150 Z" fill="rgba(255,236,150,0.5)" />
      <Car x={235} y={240} learner />
      <rect x={0} y={0} width={380} height={170} fill="rgba(222,205,170,0.7)" />
      <Dim x1={300} y1={92} x2={300} y2={220} label={t("4+ seconds", "4 ثوانٍ فأكثر")} ar={ar} off={6} />
      <circle cx={60} cy={230} r={26} fill="#fff" stroke={C.red} strokeWidth={6} />
      <Tx x={60} y={236} size={16} bold halo={false}>60</Tx>
      <Tx x={190} y={20} ar={ar}>{t("Hazard lights only when stopped off the road", "التحذيرية فقط عند التوقف خارج الطريق")}</Tx>
      <Tx x={60} y={280} size={10} ar={ar}>{t("Slow right down", "خفف كثيرًا")}</Tx>
    </Frame>
  );
}

/* 28. Breakdown */
function Breakdown({ ar }: P) {
  const t = pick(ar);
  return (
    <Frame w={440} h={260} label={t("Breakdown: hazards, warning triangle, everyone off the road", "العطل: الإشارات التحذيرية، المثلث، الجميع خارج الطريق")} bg={C.sand}>
      <rect x={0} y={40} width={440} height={130} fill={C.road} />
      <rect x={0} y={170} width={440} height={36} fill="#5a6168" />
      <line x1={0} y1={170} x2={440} y2={170} stroke={C.paint} strokeWidth={3} />
      <Dashes x1={0} y1={105} x2={440} y2={105} />
      <line x1={0} y1={214} x2={440} y2={214} stroke={C.grey} strokeWidth={4} />
      <Car x={360} y={188} r={90} learner sig="hz" />
      <path d="M90 196 L100 178 L110 196 Z" fill="none" stroke={C.red} strokeWidth={3} />
      <Dim x1={100} y1={160} x2={336} y2={160} label={t("at least 45 m", "45 م على الأقل")} ar={ar} off={-6} />
      <Person x={380} y={232} c={C.prio} /><Person x={400} y={236} c={C.blue} /><Person x={360} y={236} c={C.amber} />
      <Car x={60} y={72} r={90} c={C.car2} />
      <Step x={330} y={150} n={1} /><Step x={100} y={226} n={2} /><Step x={420} y={232} n={3} />
      <Tx x={220} y={20} ar={ar}>{t("1 Hazards on  2 Triangle behind  3 Everyone behind the barrier", "1 التحذيرية 2 المثلث خلفها 3 الجميع خلف الحاجز")}</Tx>
    </Frame>
  );
}

/* 29. School zone / school bus */
function School({ ar }: P) {
  const t = pick(ar);
  return (
    <Frame w={400} h={300} label={t("School zone: slow down, stop for a school bus with its stop sign out", "منطقة مدرسية: خفف، وقف للحافلة المدرسية عند فتح لافتة التوقف")}>
      <rect x={110} y={0} width={180} height={300} fill={C.road} />
      <Dashes x1={200} y1={0} x2={200} y2={300} />
      <Truck x={245} y={110} bus />
      <g transform="translate(222 90)"><line x1={0} y1={0} x2={-12} y2={0} stroke={C.ink} strokeWidth={2} /><polygon points="-14,-7 -20,-12 -27,-12 -33,-7 -33,0 -27,5 -20,5 -14,0" fill={C.red} stroke="#fff" strokeWidth={1.5} transform="translate(0 3)" /></g>
      <Person x={180} y={80} s={0.8} c={C.blue} /><Person x={160} y={96} s={0.8} c={C.prio} />
      <Car x={245} y={240} learner />
      <line x1={220} y1={210} x2={270} y2={210} stroke={C.paint} strokeWidth={3} />
      <Car x={155} y={30} r={180} c={C.car2} />
      <circle cx={60} cy={200} r={26} fill="#fff" stroke={C.red} strokeWidth={6} />
      <Tx x={60} y={206} size={16} bold halo={false}>30</Tx>
      <Tx x={60} y={250} size={10} ar={ar}>{t("School zone", "منطقة مدرسية")}</Tx>
      <Tx x={340} y={240} size={10} ar={ar}>{t("Stop and wait", "قف وانتظر")}</Tx>
      <Tx x={200} y={292} size={10} ar={ar}>{t("Children may run out from behind the bus", "قد يخرج الأطفال من خلف الحافلة")}</Tx>
    </Frame>
  );
}

type Scene = { en: string; ar: string; C: (p: P) => JSX.Element };
export const SCENES: Record<string, Scene> = {
  cockpit: { en: "Cockpit drill", ar: "تجهيز المقصورة", C: Cockpit },
  mirrors: { en: "Mirrors and blind spots", ar: "المرايا والنقاط العمياء", C: Mirrors },
  controls: { en: "Gear selector and pedals", ar: "ناقل الحركة والدواسات", C: Controls },
  movingOff: { en: "Moving off", ar: "الانطلاق", C: MovingOff },
  kerbStop: { en: "Stopping at the kerb", ar: "التوقف عند الرصيف", C: KerbStop },
  twoSecond: { en: "Two-second gap", ar: "فاصل الثانيتين", C: TwoSecond },
  stopDistance: { en: "Stopping distances", ar: "مسافات التوقف", C: StopDist },
  laneDiscipline: { en: "Lane discipline", ar: "الالتزام بالمسار", C: Lanes },
  laneChange: { en: "Changing lanes", ar: "تغيير المسار", C: LaneChange },
  tJunction: { en: "T-junction turns", ar: "الانعطاف في تقاطع T", C: TJunction },
  crossroads: { en: "Crossroads priority", ar: "الأولوية في التقاطع", C: Crossroads },
  lights: { en: "Traffic lights", ar: "الإشارات الضوئية", C: Lights },
  crossings: { en: "Pedestrian crossings", ar: "معابر المشاة", C: Crossings },
  roundabout: { en: "Roundabout lanes", ar: "مسارات الدوار", C: Roundabout },
  uturn: { en: "U-turn slot", ar: "فتحة الدوران", C: UTurn },
  threePoint: { en: "Three-point turn", ar: "الالتفاف بثلاث نقاط", C: ThreePoint },
  bayForward: { en: "Forward bay parking", ar: "الاصطفاف الأمامي", C: BayForward },
  bayReverse: { en: "Reverse bay parking", ar: "الاصطفاف بالرجوع", C: BayReverse },
  parallel: { en: "Parallel parking", ar: "الاصطفاف الموازي", C: Parallel },
  hillStart: { en: "Hill start", ar: "الانطلاق على منحدر", C: HillStart },
  emergencyStop: { en: "Emergency stop", ar: "التوقف الطارئ", C: EmergencyStop },
  joinHighway: { en: "Joining a highway", ar: "دخول الطريق السريع", C: JoinHighway },
  leaveHighway: { en: "Leaving a highway", ar: "الخروج من الطريق السريع", C: LeaveHighway },
  overtaking: { en: "Overtaking safely", ar: "التجاوز بأمان", C: Overtaking },
  largeVehicle: { en: "Large vehicles", ar: "المركبات الكبيرة", C: LargeVehicle },
  nightBeams: { en: "Headlights at night", ar: "الأضواء ليلًا", C: NightBeams },
  dustFog: { en: "Dust and fog", ar: "الغبار والضباب", C: DustFog },
  breakdown: { en: "Breakdown", ar: "التعطل", C: Breakdown },
  school: { en: "School zones and buses", ar: "المناطق المدرسية والحافلات", C: School },
};

export const LESSON_SCENES: Record<string, string[]> = {
  L0: ["cockpit", "controls"],
  L1: ["cockpit", "controls", "mirrors"],
  L2: ["movingOff", "kerbStop"],
  L3: ["mirrors", "laneDiscipline", "twoSecond"],
  L4: ["mirrors", "controls"],
  L5: ["tJunction", "crossroads"],
  L6: ["bayForward", "bayReverse"],
  L7: ["bayReverse", "kerbStop"],
  L8: ["parallel", "threePoint"],
  L9: ["hillStart", "emergencyStop", "stopDistance"],
  L10: ["bayReverse", "parallel", "threePoint"],
  L11: ["school", "stopDistance", "kerbStop"],
  L12: ["lights", "crossings", "crossroads"],
  L13: ["roundabout"],
  L14: ["uturn"],
  L15: ["laneChange", "laneDiscipline", "overtaking"],
  L16: ["largeVehicle", "twoSecond", "laneChange"],
  L17: ["joinHighway", "leaveHighway", "laneDiscipline"],
  L18: ["overtaking", "stopDistance"],
  L19: ["nightBeams"],
  L20: ["leaveHighway", "roundabout"],
  L21: ["movingOff", "tJunction", "roundabout"],
  L22: ["breakdown"],
  L23: ["dustFog", "twoSecond"],
};
