/* Shared metadata: categories, tags, tiers, tag reasons, meaning templates, sources.
   Content only. The UI (js/app.js) reads window.DC_DATA.meta. */
window.DC_DATA = window.DC_DATA || {};
window.DC_DATA.meta = {
  hcBase: "https://www.gov.uk/guidance/the-highway-code/",
  // Highway Code chapters by rule range, as named in the source PDF.
  chapters: [
    [1, 35, "rules-for-pedestrians-1-to-35"],
    [36, 46, "rules-for-users-of-powered-wheelchairs-and-mobility-scooters-36-to-46"],
    [47, 58, "rules-about-animals-47-to-58"],
    [59, 82, "rules-for-cyclists-59-to-82"],
    [83, 88, "rules-for-motorcyclists-83-to-88"],
    [89, 102, "rules-for-drivers-and-motorcyclists-89-to-102"],
    [103, 158, "general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158"],
    [159, 203, "using-the-road-159-to-203"],
    [204, 225, "road-users-requiring-extra-care-204-to-225"],
    [226, 237, "driving-in-adverse-weather-conditions-226-to-237"],
    [238, 252, "waiting-and-parking-238-to-252"],
    [253, 273, "motorways-253-to-273"],
    [274, 287, "breakdowns-and-incidents-274-to-287"],
    [288, 307, "road-works-level-crossings-and-tramways-288-to-307"]
  ],
  cats: {
    regulatory: { en: "Regulatory", ar: "إشارات تنظيمية" },
    warning: { en: "Warning", ar: "إشارات التحذير" },
    information: { en: "Information", ar: "إشارات إرشادية" },
    direction: { en: "Direction", ar: "علامات التوجيه" },
    markings: { en: "Road markings", ar: "علامات الطريق" },
    signals: { en: "Signals", ar: "الإشارات الضوئية واليدوية" },
    roadworks: { en: "Work zones", ar: "إشارات مناطق العمل المؤقتة" },
    vehicle: { en: "Vehicle markings", ar: "علامات المركبات" }
  },
  shapes: {
    circle: { en: "Circle", ar: "دائرة" }, triangle: { en: "Triangle", ar: "مثلث" },
    "inverted-triangle": { en: "Inverted triangle", ar: "مثلث مقلوب" }, octagon: { en: "Octagon", ar: "مثمن" },
    rectangle: { en: "Rectangle", ar: "مستطيل" }, diamond: { en: "Diamond", ar: "معين" },
    marking: { en: "Road marking", ar: "علامة أرضية" }, light: { en: "Light signal", ar: "إشارة ضوئية" },
    hand: { en: "Hand signal", ar: "إشارة يدوية" }, other: { en: "Other", ar: "أخرى" }
  },
  colours: {
    red: { en: "Red", ar: "أحمر" }, blue: { en: "Blue", ar: "أزرق" }, green: { en: "Green", ar: "أخضر" },
    yellow: { en: "Yellow", ar: "أصفر" }, white: { en: "White", ar: "أبيض" }, brown: { en: "Brown", ar: "بني" },
    mixed: { en: "Mixed", ar: "متعدد" }
  },
  tags: {
    uk: { icon: "🇬🇧", en: "UK-only", ar: "بريطانيا فقط" },
    diff: { icon: "⚠️", en: "Differs in KSA", ar: "يختلف في المملكة" },
    ksa: { icon: "🇸🇦", en: "KSA-only", ar: "المملكة فقط" },
    both: { icon: "✓", en: "Same in both", ar: "متطابق في النظامين" }
  },
  tiers: {
    1: { en: "Daily", ar: "يوميا" },
    2: { en: "Common", ar: "شائع" },
    3: { en: "Occasional", ar: "أحيانا" },
    4: { en: "Rare or not used in Riyadh", ar: "نادر أو غير مستخدم في الرياض" }
  },
  rankingBasis: {
    en: "Ranking basis: an estimate, not measured data. Tier 1 to 4 was assigned from (a) whether the item is in the Moroor handbook, (b) the typical Riyadh road environment: multi-lane arterials, signal junctions, U-turns, service roads, speed humps, roundabouts, (c) what Riyadh lacks: street trams, level crossings in the city, ice, UK parking-line rules. The instructor can change any tier or move any item.",
    ar: "أساس الترتيب: تقدير وليس بيانات مقيسة. حددت الفئات من 1 إلى 4 بناء على (أ) ورود العنصر في دليل المرور، (ب) طبيعة طرق الرياض: طرق متعددة المسارات، تقاطعات بإشارات ضوئية، دوران للخلف، طرق خدمة، مطبات، دوارات، (ج) ما لا يوجد في الرياض: ترام في الشوارع، معابر سكك حديدية داخل المدينة، جليد، قواعد خطوط الوقوف البريطانية. يستطيع المدرب تغيير فئة أي عنصر أو نقله."
  },
  // One-line reason for each applicability tag. hb = Moroor handbook printed page.
  reasons: {
    same: { en: "Same sign and meaning in the Highway Code and the Moroor handbook.", ar: "الإشارة والمعنى متطابقان في نظام الطرق البريطاني ودليل المرور." },
    intl: { en: "Used in KSA with the same meaning, but not pictured on the handbook's sign pages. From general knowledge: confirm locally.", ar: "مستخدمة في المملكة بالمعنى نفسه لكنها غير مصورة في صفحات الإشارات بالدليل. من المعرفة العامة: يرجى التأكد محليا.", check: true },
    design: { en: "Same meaning; the KSA design differs. Compare the two images.", ar: "المعنى نفسه مع اختلاف التصميم في المملكة. قارن بين الصورتين." },
    mph: { en: "KSA signs show km/h; UK signs show mph.", ar: "إشارات المملكة بالكيلومتر في الساعة، وإشارات بريطانيا بالميل في الساعة." },
    units: { en: "Same meaning; KSA signs use metric units with Arabic numerals.", ar: "المعنى نفسه؛ إشارات المملكة بالوحدات المترية وبالأرقام العربية." },
    mirror: { en: "The UK drives on the left. KSA drives on the right, so the layout is mirrored.", ar: "السير في بريطانيا على اليسار، وفي المملكة على اليمين، فيكون الشكل معكوسا." },
    ind: { en: "Same lights, mirrored use: in KSA you move out to overtake to the left and pull in to the right.", ar: "الأضواء نفسها مع استخدام معكوس: في المملكة تخرج للتجاوز إلى اليسار وتعود إلى اليمين." },
    overtake: { en: "Same meaning. On the KSA sign the overtaking (red) car is on the left, because overtaking is on the left.", ar: "المعنى نفسه. في إشارة المملكة السيارة المتجاوزة (الحمراء) على اليسار لأن التجاوز من اليسار." },
    keep: { en: "In KSA 'Keep right' is the usual version, because traffic keeps to the right.", ar: "في المملكة «ألزم اليمين» هي الصيغة المعتادة لأن السير على اليمين." },
    rbt: { en: "KSA roundabouts run anticlockwise; the UK runs clockwise. In KSA give priority to vehicles already circulating, which come from your left (handbook p.155); in the UK they come from your right.", ar: "الدوارات في المملكة عكس عقارب الساعة، وفي بريطانيا مع عقارب الساعة. في المملكة أعط الأولوية للمركبات التي تسير داخل الدوار وهي قادمة من يسارك (الدليل ص 155)، وفي بريطانيا تكون قادمة من يمينك." },
    rightred: { en: "KSA: after stopping at red you may turn right unless a sign or a dedicated right-turn lane forbids it (handbook p.130, 132, 133). The UK has no turn on red.", ar: "في المملكة: بعد التوقف عند الأحمر يمكنك الانعطاف يمينا ما لم تمنع ذلك إشارة أو مسار مخصص للانعطاف (الدليل ص 130 و132 و133). لا يوجد انعطاف عند الأحمر في بريطانيا." },
    amberuk: { en: "The red-and-amber phase is in the Highway Code but not described in the Moroor handbook (p.130).", ar: "طور الأحمر مع الأصفر وارد في نظام الطرق البريطاني وغير مذكور في دليل المرور (ص 130)." },
    amber: { en: "Same in KSA: stop on amber if you can do so safely, without crossing the stop line (handbook p.130).", ar: "كذلك في المملكة: توقف عند الأصفر إن أمكن ذلك بأمان ودون تجاوز خط التوقف (الدليل ص 130)." },
    green: { en: "Same in KSA. The handbook adds: do not enter the junction on green if you cannot clear it (p.130).", ar: "كذلك في المملكة. ويضيف الدليل: لا تدخل التقاطع عند الأخضر إذا لم تستطع عبوره (ص 130)." },
    flash: { en: "KSA: a flashing red light means the same as a Stop sign; a flashing amber means the same as Give Way (handbook p.131).", ar: "في المملكة: الضوء الأحمر المتقطع له معنى إشارة قف، والأصفر المتقطع له معنى إشارة حق الأولوية (الدليل ص 131)." },
    stop: { en: "KSA sign reads قف / STOP. Stop completely and pause about 3 seconds to check all directions (handbook p.135).", ar: "إشارة المملكة مكتوب عليها قف / STOP. توقف وقوفا تاما وانتظر نحو 3 ثوان لمراقبة جميع الجهات (الدليل ص 135)." },
    giveway: { en: "Same sign. Give priority to traffic approaching from the right or the left (handbook p.135).", ar: "الإشارة نفسها. أعط حق الأولوية للقادمين من اليمين أو اليسار (الدليل ص 135)." },
    stopline: { en: "Same in KSA: stop at the stop line, or level with the signal post if there is no line (handbook p.130).", ar: "كذلك في المملكة: توقف عند خط التوقف، أو عند مستوى عمود الإشارة إن لم يوجد خط (الدليل ص 130)." },
    uturn: { en: "In KSA a U-turn is allowed at junctions unless a sign or signal forbids it (handbook p.157), so this sign matters a lot. The sign itself is not pictured in the handbook.", ar: "في المملكة يسمح بالدوران للخلف عند التقاطعات ما لم تمنعه إشارة (الدليل ص 157)، لذا فهذه الإشارة مهمة. الإشارة نفسها غير مصورة في الدليل.", check: true },
    wait: { en: "KSA name is 'No parking' and the handbook says waiting is allowed (p.57, 67). In the UK the same sign means no waiting.", ar: "اسمها في المملكة «ممنوع الوقوف» ويذكر الدليل أن الانتظار مسموح (ص 57 و67). في بريطانيا تعني الإشارة نفسها منع الانتظار." },
    prio: { en: "KSA default at equal junctions: the vehicle on the right has priority (handbook p.141).", ar: "القاعدة في المملكة عند التقاطعات المتساوية: الأولوية للمركبة على اليمين (الدليل ص 141)." },
    lines: { en: "Same principle in KSA: a broken line may be crossed to overtake, a continuous double line may not (handbook p.103, 104).", ar: "المبدأ نفسه في المملكة: يجوز عبور الخط المتقطع للتجاوز ولا يجوز عبور الخط المزدوج المتواصل (الدليل ص 103 و104)." },
    arrows: { en: "Lane arrows are used in KSA too (handbook p.116). Remember left and right turns are mirrored.", ar: "أسهم المسارات مستخدمة في المملكة كذلك (الدليل ص 116). تذكر أن الانعطاف يمينا ويسارا معكوس." },
    box: { en: "Same principle in KSA: do not enter a junction you cannot clear, even on green (handbook p.130, 159).", ar: "المبدأ نفسه في المملكة: لا تدخل تقاطعا لا تستطيع عبوره ولو كان الضوء أخضر (الدليل ص 130 و159)." },
    mkchk: { en: "Give-way markings exist in KSA, but the handbook does not show this pattern. Check locally.", ar: "خطوط إعطاء الأولوية موجودة في المملكة لكن الدليل لا يعرض هذا النمط. يرجى التأكد محليا.", check: true },
    workcol: { en: "KSA work-zone signs are yellow with a red border (handbook p.60).", ar: "إشارات مناطق العمل في المملكة صفراء بإطار أحمر (الدليل ص 60)." },
    saher: { en: "KSA enforces by automated cameras (the handbook's 'automated monitoring', p.133) with its own signing.", ar: "الضبط في المملكة بكاميرات الرصد الآلي (الدليل ص 133) وبلوحات خاصة بها." },
    schoolbus: { en: "KSA school buses carry their own markings (handbook p.85); the design differs.", ar: "للحافلات المدرسية في المملكة علاماتها الخاصة (الدليل ص 85) والتصميم مختلف." },
    adr: { en: "International dangerous-goods symbols; not covered in the Moroor handbook.", ar: "رموز دولية للبضائع الخطرة، غير واردة في دليل المرور.", check: true },
    nohb: { en: "In the Highway Code; not in the Moroor handbook's sign set.", ar: "واردة في نظام الطرق البريطاني وغير واردة ضمن إشارات دليل المرور." },
    nsl: { en: "UK concept. KSA uses posted limits and the 'End of speed limit' sign (handbook p.67).", ar: "مفهوم بريطاني. في المملكة حدود سرعة معلنة وإشارة «نهاية حدود السرعة» (الدليل ص 67)." },
    tram: { en: "Tram signing; not in the Moroor handbook.", ar: "إشارات خاصة بالترام، غير واردة في دليل المرور." },
    rail: { en: "UK level-crossing signing. The handbook covers railway crossings separately (p.163 to 165).", ar: "إشارات معابر السكك الحديدية البريطانية. يتناول الدليل معابر السكك الحديدية في قسم مستقل (ص 163 إلى 165)." },
    msig: { en: "UK motorway signals; not in the Moroor handbook.", ar: "إشارات الطرق السريعة البريطانية، غير واردة في دليل المرور." },
    mway: { en: "UK motorway signing. KSA uses the 'freeway' sign and blue guide signs (handbook p.58, 69).", ar: "لوحات الطرق السريعة البريطانية. في المملكة إشارة «طريق حر الحركة» وعلامات توجيه زرقاء (الدليل ص 58 و69)." },
    ukdir: { en: "UK route colours and numbering. KSA guide signs: blue outside cities, green inside, brown for leisure and religious sites (handbook p.58, 59).", ar: "ألوان وترقيم الطرق البريطانية. علامات التوجيه في المملكة: زرقاء خارج المدن وخضراء داخلها وبنية للمواقع الترفيهية والدينية (الدليل ص 58 و59)." },
    ukpark: { en: "UK parking-scheme plate.", ar: "لوحة خاصة بأنظمة الوقوف البريطانية." },
    yellow: { en: "UK yellow and red line rules. KSA controls parking with the 'No parking' and 'No parking or waiting' signs (handbook p.67).", ar: "قواعد الخطوط الصفراء والحمراء البريطانية. في المملكة ينظم الوقوف بإشارتي «ممنوع الوقوف» و«ممنوع الوقوف والانتظار» (الدليل ص 67)." },
    buslane: { en: "UK bus-lane signing; not in the Moroor handbook.", ar: "لوحات مسارات الحافلات البريطانية، غير واردة في دليل المرور." },
    ukbody: { en: "UK-specific body or scheme.", ar: "جهة أو نظام خاص ببريطانيا." },
    wx: { en: "Hazard not typical of Riyadh's climate; not in the Moroor handbook.", ar: "خطر غير معتاد في مناخ الرياض، وغير وارد في دليل المرور." },
    arm: { en: "Arm signals are given from the driver's window: the right side in UK cars, the left in KSA cars. Not in the Moroor handbook.", ar: "تعطى إشارات الذراع من نافذة السائق: اليمنى في السيارات البريطانية واليسرى في سيارات المملكة. غير واردة في دليل المرور." },
    police: { en: "KSA: a traffic officer's directions override lights and signs (handbook p.134). These UK gestures are not illustrated in the handbook.", ar: "في المملكة: تعليمات رجل المرور لها الأولوية على الإشارات (الدليل ص 134). هذه الحركات البريطانية غير مصورة في الدليل." },
    ukveh: { en: "UK vehicle-marking regulations.", ar: "أنظمة علامات المركبات البريطانية." },
    ksaonly: { en: "In the Moroor handbook; not in the Highway Code's sign list.", ar: "واردة في دليل المرور وغير واردة في قائمة إشارات نظام الطرق البريطاني." }
  },
  // Meaning templates by category, used when an item has no specific meaning text.
  // Basis: Moroor handbook p.55 to 60 (purpose of each sign class) and the Highway Code 'Traffic signs' page.
  meaning: {
    warning: { en: "Warning sign. Slow down, look ahead and be ready to act: {n}.", ar: "إشارة تحذير. خفف السرعة وانظر أمامك واستعد للتصرف: {n}." },
    prohibit: { en: "Regulatory sign (prohibition or restriction). You must obey it: {n}.", ar: "إشارة تنظيمية (مانعة). يجب الالتزام بها: {n}." },
    mandatory: { en: "Regulatory sign (mandatory). You must do what it shows: {n}.", ar: "إشارة تنظيمية (إلزامية). يجب تنفيذ ما تبينه: {n}." },
    information: { en: "Information sign: {n}.", ar: "إشارة إرشادية: {n}." },
    direction: { en: "Direction sign: {n}.", ar: "علامة توجيه: {n}." },
    roadworks: { en: "Temporary work-zone sign or device: {n}. Slow down and follow the temporary layout.", ar: "إشارة أو أداة لمنطقة عمل مؤقتة: {n}. خفف السرعة واتبع التنظيم المؤقت." },
    markings: { en: "Road marking: {n}.", ar: "علامة على الطريق: {n}." },
    vehicle: { en: "Vehicle marking: {n}.", ar: "علامة على المركبة: {n}." },
    signals: { en: "{n}.", ar: "{n}." }
  },
  sources: [
    { id: "hc", en: "The Highway Code (Department for Transport, Driver and Vehicle Standards Agency), gov.uk. Text and images contain public sector information licensed under the Open Government Licence v3.0. Images taken from the PDF compilation supplied by the instructor (drivingtheorytest.io edition of the gov.uk content).", ar: "نظام الطرق البريطاني (وزارة النقل وهيئة معايير السائقين والمركبات)، gov.uk. النصوص والصور تتضمن معلومات قطاع عام مرخصة برخصة الحكومة المفتوحة 3.0. الصور مأخوذة من ملف PDF الذي قدمه المدرب.", url: "https://www.gov.uk/guidance/the-highway-code", lic: "https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" },
    { id: "hb", en: "Theoretical Driving Handbook, Trainee edition, General Department of Traffic (Moroor), Ver 1, April 2022. Sign images are cropped from pages 61 to 72 and 135 for private study. Page numbers cited are the printed page numbers.", ar: "دليل القيادة النظري للمتدرب، الإدارة العامة للمرور، الإصدار 1، أبريل 2022. صور الإشارات مقتطعة من الصفحات 61 إلى 72 و135 للدراسة الخاصة. أرقام الصفحات المذكورة هي المطبوعة في الدليل." },
    { id: "svg", en: "Diagrams marked 'KSA redraw' were drawn for this app for right-hand traffic and left-hand-drive cars. They are teaching sketches, not official figures.", ar: "المخططات الموسومة «إعادة رسم للمملكة» رسمت لهذا التطبيق للسير على اليمين وللسيارات ذات المقود الأيسر. هي رسوم تعليمية وليست أشكالا رسمية." }
  ],
  caveats: {
    en: [
      "KSA applicability tags are an assessment from the Moroor handbook (April 2022). 'Not in the handbook' does not prove a sign is never used on Saudi roads.",
      "Items marked 'confirm locally' rest on general knowledge, not on either source.",
      "Meanings without their own text use a category template plus the official name.",
      "Arabic names of handbook signs are copied from the handbook. Arabic names of UK-only items are literal translations made for this app.",
      "The Riyadh frequency tiers are estimates."
    ],
    ar: [
      "وسوم الانطباق في المملكة تقدير مبني على دليل المرور (أبريل 2022). عدم ورود الإشارة في الدليل لا يثبت أنها غير مستخدمة في طرق المملكة.",
      "العناصر الموسومة «يرجى التأكد محليا» مبنية على المعرفة العامة لا على أي من المصدرين.",
      "المعاني التي ليس لها نص خاص تستخدم قالب الفئة مع الاسم الرسمي.",
      "الأسماء العربية لإشارات الدليل منقولة من الدليل. الأسماء العربية للعناصر البريطانية فقط ترجمة حرفية أعدت لهذا التطبيق.",
      "فئات الشيوع في الرياض تقديرية."
    ]
  }
};
