/* The learner's journey: eight exits in the order a Saudi learner passes them.
   Source keys: moroor (Moroor handbook), dvsa (Highway Code / DVSA Ready to Pass), fronx (owner's manual), darb (coaching notes written for this app). */
export type Src = "moroor" | "dvsa" | "fronx" | "darb";
export type Step = { id: string; en: string; ar: string; dEn: string; dAr: string; src: Src; ref?: string; href?: string };

export const STAGES = [
  { n: 1, id: "theory", alias: [] as string[], sEn: "Theory", sAr: "النظري", path: "/theory", en: "Learn the theory", ar: "تعلم النظري", dEn: "Every topic: rules in brief, pictures, and the Moroor handbook and Highway Code in full.", dAr: "كل موضوع: القواعد باختصار والصور ونص دليل المرور ونظام الطرق البريطاني كاملا." },
  { n: 2, id: "car", alias: [] as string[], sEn: "Your car", sAr: "سيارتك", path: "/car", en: "Know your car", ar: "اعرف سيارتك", dEn: "Your Fronx: controls, gears, warning lights, checks, emergencies.", dAr: "فرونكس: أدوات التحكم وناقل الحركة وأضواء التحذير والفحوص والطوارئ." },
  { n: 3, id: "lessons", alias: [] as string[], sEn: "Lessons", sAr: "الدروس", path: "/lessons", en: "Practical lessons", ar: "الدروس العملية", dEn: "On the road with a qualified instructor. Each lesson starts with the theory it uses.", dAr: "على الطريق مع مدرب مؤهل. كل درس يبدأ بالنظري الذي يحتاجه." },
  { n: 4, id: "skills", alias: [] as string[], sEn: "Skills", sAr: "المهارات", path: "/skills", en: "Check your skills", ar: "قيّم مهاراتك", dEn: "Rate yourself on every skill and work the checklists.", dAr: "قيّم نفسك في كل مهارة واعمل على قوائم التحقق." },
  { n: 5, id: "tests", sEn: "Tests", sAr: "الاختبارات", path: "/tests", alias: ["/ready", "/theory-test"], en: "Paperwork, tests and licence", ar: "الأوراق والاختبارات والرخصة", dEn: "Absher and medical, the theory test, the practical test, then collecting the licence.", dAr: "أبشر والفحص الطبي، الاختبار النظري، الاختبار العملي، ثم استلام الرخصة." },
  { n: 6, id: "licence", sEn: "After the licence", sAr: "بعد الرخصة", path: "/licence", alias: [], en: "After your licence", ar: "بعد الرخصة", dEn: "Traffic law, fines and points, and looking after the car.", dAr: "نظام المرور والمخالفات والنقاط، والعناية بالسيارة." },
] as const;
export type StageId = (typeof STAGES)[number]["id"];

export const READY_STEPS: Step[] = [
  { id: "absher", src: "darb", en: "Activate your Absher account", ar: "فعّل حسابك في أبشر", dEn: "Bookings, fees and the licence itself all go through Absher or the school.", dAr: "الحجوزات والرسوم والرخصة نفسها كلها عبر أبشر أو المدرسة." },
  { id: "medical", src: "darb", en: "Medical and eye test", ar: "الفحص الطبي وفحص النظر", dEn: "At an approved clinic. If glasses are recorded, you must wear them to drive and on test day.", dAr: "في عيادة معتمدة. إذا سُجلت النظارة فيجب لبسها عند القيادة ويوم الاختبار." },
  { id: "school", src: "darb", en: "Open a file at an approved school", ar: "افتح ملفا في مدرسة معتمدة", dEn: "The school assesses you and assigns training hours; a complete beginner usually gets about 30.", dAr: "تقيمك المدرسة وتحدد ساعات التدريب؛ المبتدئ تماما يحصل عادة على نحو 30 ساعة." },
  { id: "requirements", src: "moroor", ref: "p. 12", en: "Check the licence requirements", ar: "تحقق من شروط الرخصة", dEn: "Aged 18 or over, school training completed, theory and practical tests passed, fees paid, old fines settled.", dAr: "العمر 18 سنة فأكثر، إكمال التدريب، اجتياز الاختبارين النظري والعملي، دفع الرسوم وتسديد المخالفات السابقة." },
  { id: "where", src: "darb", en: "Bring your practice record", ar: "أحضر سجل تدريبك", dEn: "Practice so far has been on the road with a qualified instructor. The school assesses you and assigns training hours; show it your lesson log and skill levels.", dAr: "كان تدريبك حتى الآن على الطريق مع مدرب مؤهل. تقيمك المدرسة وتحدد ساعات التدريب؛ اعرض عليها سجل دروسك ومستويات مهاراتك." },
];

export const THEORY_BOOK: Step[] = [
  { id: "book-theory", src: "darb", en: "Book the theory test", ar: "احجز الاختبار النظري", dEn: "After the theory lectures, through the school or Absher. Ask the school for its question count and pass mark.", dAr: "بعد المحاضرات النظرية، عبر المدرسة أو أبشر. اسأل المدرسة عن عدد الأسئلة ودرجة النجاح." },
  { id: "sit-theory", src: "darb", en: "Sit the theory test", ar: "أدِّ الاختبار النظري", dEn: "Computer multiple choice at the school, about 30 minutes.", dAr: "اختيار من متعدد على الحاسوب في المدرسة، نحو 30 دقيقة." },
];

export const BOOK_STEPS: Step[] = [
  { id: "book-practical", src: "darb", en: "Book the practical test", ar: "احجز الاختبار العملي", dEn: "When every core skill is at level 4 and the full mock (L21) is passed. Pay the fees on Absher.", dAr: "عندما تصل كل المهارات الأساسية إلى المستوى 4 وتجتاز الاختبار التجريبي الكامل (الدرس 21). ادفع الرسوم عبر أبشر." },
  { id: "sit-practical", src: "darb", en: "Sit the practical test", ar: "أدِّ الاختبار العملي", dEn: "Yard manoeuvres, then an on-road drive with a Moroor examiner. A serious or dangerous error ends the test.", dAr: "مناورات الساحة ثم قيادة على الطريق مع فاحص المرور. الخطأ الجسيم أو الخطر ينهي الاختبار." },
];

export const DVSA_BOOKING: Step[] = [
  { id: "uk-prov", src: "dvsa", en: "UK: provisional licence first", ar: "بريطانيا: الرخصة المؤقتة أولا", dEn: "UK learners need a provisional licence before lessons or booking a test.", dAr: "يحتاج المتعلم في بريطانيا رخصة مؤقتة قبل الدروس أو حجز الاختبار.", href: "https://www.gov.uk/apply-first-provisional-driving-licence" },
  { id: "uk-theory", src: "dvsa", en: "UK: theory test", ar: "بريطانيا: الاختبار النظري", dEn: "Multiple-choice questions plus a hazard perception clip test, booked on gov.uk.", dAr: "أسئلة اختيار من متعدد واختبار إدراك المخاطر بالمقاطع، ويحجز عبر gov.uk.", href: "https://www.gov.uk/book-theory-test" },
  { id: "uk-practical", src: "dvsa", en: "UK: practical test", ar: "بريطانيا: الاختبار العملي", dEn: "About 40 minutes: eyesight check, vehicle safety questions, general driving, one manoeuvre and independent driving.", dAr: "نحو 40 دقيقة: فحص النظر وأسئلة سلامة المركبة والقيادة العامة ومناورة واحدة والقيادة المستقلة.", href: "https://www.gov.uk/book-driving-test" },
];

export const SRC_LABEL: Record<Src, { en: string; ar: string; long: { en: string; ar: string } }> = {
  moroor: { en: "Moroor", ar: "المرور", long: { en: "Moroor Theoretical Driving Handbook (Trainee), 2022", ar: "دليل القيادة النظري للمتدرب، الإدارة العامة للمرور، 2022" } },
  dvsa: { en: "DVSA", ar: "DVSA", long: { en: "The Highway Code and DVSA Ready to Pass (UK, Open Government Licence v3.0)", ar: "نظام الطرق البريطاني وبرنامج DVSA (بريطانيا، رخصة الحكومة المفتوحة)" } },
  fronx: { en: "Fronx manual", ar: "دليل فرونكس", long: { en: "Suzuki Fronx Owner's Manual", ar: "دليل مالك سوزوكي فرونكس" } },
  darb: { en: "Darb", ar: "درب", long: { en: "Coaching notes written for Darb from school and public sources", ar: "ملاحظات تدريبية كتبت لدرب من المدارس والمصادر العامة" } },
};

/** The stage a route belongs to (sub-routes and aliases included). */
export const stageOf = (pathname: string) => STAGES.find((x) => [x.path, ...x.alias].some((p) => pathname === p || pathname.startsWith(p + "/")));
