/* Final coverage-gap lesson: facts from Moroor, DVSA/Highway Code and the Fronx manual not taught elsewhere in Darb. */
window.DC_DATA = window.DC_DATA || {};
window.DC_DATA.finallesson = {
 l0: [
  { en: "**Never fit a rear-facing child seat** on the front passenger seat when its airbag is active.", ar: "**لا تركّب أبدًا مقعد طفل مواجهًا للخلف** في المقعد الأمامي المزوّد بوسادة هوائية مفعّلة.", src: "fronx", ref: "2-39", kind: "never" },
  { en: "**Never leave a child alone in the car**, even with the air conditioning on: heatstroke can kill.", ar: "**لا تترك طفلًا وحده في السيارة** ولو كان المكيّف يعمل؛ فضربة الشمس قد تقتله.", src: "fronx", ref: "2-39", kind: "never" },
  { en: "Don't run the engine in a **garage or closed space** with people inside: exhaust gas can suffocate.", ar: "لا تشغّل المحرك في **مرآب أو مكان مغلق** وفيه أشخاص؛ فغاز العادم قد يسبب الاختناق.", src: "fronx", ref: "Safety tips 6", kind: "danger" },
  { en: "Don't park on **dry grass or leaves**: the hot exhaust can start a fire.", ar: "لا تركن فوق **العشب أو الأوراق الجافة**؛ فالعادم الساخن قد يشعل حريقًا.", src: "fronx", ref: "Safety tips 7", kind: "never" },
  { en: "While refuelling, **don't use your phone** and don't get back into the car (static can ignite fuel vapour).", ar: "أثناء التزوّد بالوقود **لا تستخدم الجوال** ولا تعد إلى داخل السيارة؛ فالكهرباء الساكنة قد تشعل أبخرة الوقود.", src: "fronx", ref: "Safety tips 17–18", kind: "never" },
  { en: "Never put any part of your body **under a car held up only by the jack**.", ar: "لا تضع أي جزء من جسمك **تحت سيارة مرفوعة بالرافعة فقط**.", src: "fronx", ref: "Safety tips 12", kind: "never" },
  { en: "Just **==10 km/h== over the limit** without a seat belt is enough to cause serious injury.", ar: "تجاوز الحد بمقدار **==10 كم/ساعة== فقط** دون حزام الأمان كافٍ لإحداث إصابة خطيرة.", src: "moroor", ref: "183", kind: "number" },
  { en: "You **must obey signals from police and traffic officers**; when signalled to stop, pull over safely.", ar: "**يجب أن تمتثل لإشارات رجال المرور والشرطة**؛ وإذا أُشير إليك بالتوقف فتوقف في مكان آمن.", src: "dvsa", ref: "HC 105–106", kind: "must" }
 ],
 lesson: {
  id: "L24",
  where: "road",
  wk: 9,
  en: "Putting it all together: everything else on the road",
  ar: "خلاصة كل شيء: بقية مواقف الطريق",
  skills: [10, 12, 14, 17, 25, 26, 27],
  ch: [],
  dg: [],
  before: [
   { en: "Two cars side by side: the one **going straight on** has priority over the one changing direction.", ar: "عند سير مركبتين متوازيتين، **المركبة التي تسير مستقيمة** لها الأولوية على التي تغيّر اتجاهها.", src: "moroor", ref: "143", kind: "priority" },
   { en: "Road partly blocked: the driver whose **side is open** goes first; the other waits.", ar: "إذا أُغلق جزء من الطريق، فالأولوية للسائق الذي **جانبه مفتوح**، وينتظر الآخر.", src: "moroor", ref: "145", kind: "priority" },
   { en: "On a steep mountain road, the driver **going down** keeps right and lets the climbing car pass, stopping if needed.", ar: "على طريق جبلي شديد الانحدار، يلزم السائق **النازل** أقصى اليمين ويُفسح للصاعد، ويتوقف إن لزم.", src: "moroor", ref: "146", kind: "priority" },
   { en: "Exception: if the lay-by is on the **climbing driver's side**, the climbing car waits there.", ar: "استثناء: إن كانت منطقة التوقف في **جانب الصاعد**، فهو الذي ينتظر فيها ليمرّ النازل.", src: "moroor", ref: "146", kind: "priority" },
   { en: "**Don't enter a junction** unless your exit road is clear; never block it.", ar: "**لا تدخل التقاطع** إلا إذا كان طريق خروجك خاليًا، ولا تُغلقه أبدًا.", src: "dvsa", ref: "HC 174", kind: "never" },
   { en: "Pedestrians walk at only **==4–5 km/h==**; give them time and expect slow, sudden moves.", ar: "سرعة المشاة **==4–5 كم/ساعة==** فقط؛ أمهلهم وتوقّع حركتهم البطيئة والمفاجئة.", src: "moroor", ref: "17", kind: "number" },
   { en: "A **flashing green** pedestrian light: people already crossing will hurry; let them finish.", ar: "الضوء **الأخضر الوامض** للمشاة يعني أن العابرين سيسرعون؛ دعهم يُكملون العبور.", src: "moroor", ref: "50", kind: "tip" },
   { en: "Large vehicles **block your view**; drop back so you can see the road ahead.", ar: "المركبات الكبيرة **تحجب رؤيتك**؛ ابتعد عنها للخلف لترى الطريق أمامك.", src: "dvsa", ref: "HC 222", kind: "tip" },
   { en: "**Don't reverse further than necessary.**", ar: "**لا ترجع للخلف أكثر من اللازم.**", src: "dvsa", ref: "HC 203", kind: "must" },
   { en: "On wet roads **slow down**: tyres can ride on water (aquaplaning) and lose grip.", ar: "على الطرق المبتلّة **خفّف السرعة**؛ فقد تنزلق الإطارات فوق الماء وتفقد تماسكها.", src: "fronx", ref: "Safety tips 5", kind: "danger" },
   { en: "Pass parked cars or obstacles only if you **won't endanger or block** others; otherwise wait.", ar: "تجاوز المركبات المتوقفة أو العوائق فقط إن كنت **لن تعرّض أحدًا للخطر أو تعيقه**، وإلا فانتظر.", src: "moroor", ref: "197", kind: "must" }
  ],
  car: [
   { en: "Front passenger airbag label: no rear-facing child seat in that seat.", ar: "ملصق وسادة الراكب الأمامي: لا مقعد طفل مواجهًا للخلف في هذا المقعد.", applies: "both", ref: "2-39" },
   { en: "Children: never alone in the car, never in the luggage area.", ar: "الأطفال: لا تتركهم وحدهم في السيارة، ولا تضعهم في صندوق الأمتعة.", applies: "both", ref: "2-39" },
   { en: "Refuelling: engine off, no phone, stay outside the car until done.", ar: "التزوّد بالوقود: أطفئ المحرك، ولا جوال، وابقَ خارج السيارة حتى تنتهي.", applies: "both", ref: "Safety tips 17–18" }
  ],
  steps: [
   { en: "Drive a mixed route and **name the priority** at each junction aloud.", ar: "قُد في مسار متنوع **وسمِّ صاحب الأولوية** بصوت عالٍ عند كل تقاطع.", why: { en: "Priority rules only stick when you use them.", ar: "قواعد الأولوية لا تثبت إلا بالتطبيق." } },
   { en: "Before each junction, **check your exit is clear** before you enter.", ar: "قبل كل تقاطع **تأكد أن مخرجك خالٍ** قبل الدخول.", why: { en: "A blocked junction traps you and others.", ar: "التقاطع المسدود يحبسك ويحبس غيرك." } },
   { en: "Behind a truck, **drop back** until you can see past it.", ar: "خلف شاحنة، **ابتعد للخلف** حتى ترى ما أمامها.", why: { en: "You can't react to what you can't see.", ar: "لا يمكنك التصرف تجاه ما لا تراه." } },
   { en: "Pass a parked car: **look, mirrors, signal, check, then pass** with room.", ar: "تجاوز سيارة متوقفة: **انظر، المرايا، الإشارة، التحقق، ثم التجاوز** بمسافة كافية.", why: { en: "Same routine as a lane change.", ar: "هي نفس خطوات تغيير المسار." } },
   { en: "Finish with a short **independent drive** to a place you choose.", ar: "اختم **بقيادة مستقلة** قصيرة إلى مكان تختاره.", why: { en: "This is how you'll drive after the test.", ar: "هكذا ستقود بعد الاختبار." } }
  ],
  check: [
   { en: "I know who goes first on a narrow mountain road and on a part-blocked road.", ar: "أعرف من له الأولوية على الطريق الجبلي الضيق والطريق المغلق جزئيًا." },
   { en: "I never enter a junction unless my exit is clear.", ar: "لا أدخل تقاطعًا إلا إذا كان مخرجي خاليًا." },
   { en: "I keep back from large vehicles so I can see ahead.", ar: "أبتعد عن المركبات الكبيرة لأرى الطريق أمامي." },
   { en: "I know the child-seat, refuelling and parking fire-safety rules for my car.", ar: "أعرف قواعد مقعد الطفل والتزوّد بالوقود والوقاية من الحريق عند الركن في سيارتي." }
  ]
 },
 report: [
  { source: "moroor", ref: "8–239", status: "covered", note: "174 page refs already cited; uncited pages checked: mostly headings, exercises, figures or content covered by meaning." },
  { source: "moroor", ref: "17, 50, 143, 145, 146, 183, 197", status: "added", note: "Pedestrian speed, flashing green, parallel-traffic, blocked-road and mountain-road priority, +10 km/h injury, passing obstacles." },
  { source: "moroor", ref: "24, 30, 46, 48, 70, 73, 177–181", status: "skipped", note: "Statistics definitions, blank exercises, definitions/discussion already taught elsewhere." },
  { source: "dvsa", ref: "Skills 1–27", status: "covered", note: "All 27 skills mapped to lessons in course.js." },
  { source: "dvsa", ref: "HC 105–106, 174, 203, 222", status: "added", note: "Police signals, clear exit, reversing limit, large vehicles." },
  { source: "dvsa", ref: "HC 99–102, 124, 125, 168, 186–199, 238–252", status: "skipped", note: "UK-only law/limits/crossing types/parking zones, or already taught by meaning (seat belts, speed not a target, being overtaken)." },
  { source: "fronx", ref: "Safety tips 5–18, 2-39", status: "added", note: "Airbag/child seat, child alone, CO in garage, dry grass, refuelling, jack, aquaplaning." },
  { source: "fronx", ref: "Safety tips 3–4, 8, 13–16, 20", status: "skipped", note: "LPG/CNG kits, accessories, dealer-specific advice: not everyday learner safety." }
 ]
};
