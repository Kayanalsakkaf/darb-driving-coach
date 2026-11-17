/* Course content written for this app: journey, guide chapters, lessons, skills, checklists.
   Inline markup in en/ar text: **bold**  __underline__  !!must or never!!  ++priority or good++  ==key number==
   Source texts (Highway Code, Moroor handbook) live in data/hc.js and data/hb.js. */
window.DC_DATA = window.DC_DATA || {};
window.DC_DATA.course = {
  levels: [
    { n: 1, en: "Introduced", ar: "تم التعريف", dEn: "Explained and shown; follows step-by-step instructions.", dAr: "تم شرحها وعرضها؛ يتبع التعليمات خطوة بخطوة." },
    { n: 2, en: "Guided", ar: "بتوجيه", dEn: "Improving, still needs help most of the time.", dAr: "يتحسن، ولا يزال يحتاج إلى مساعدة في أغلب الوقت." },
    { n: 3, en: "Prompted", ar: "بتنبيه", dEn: "Mostly right; needs a prompt in new or unusual situations.", dAr: "صحيح في الغالب؛ يحتاج إلى تنبيه في المواقف الجديدة أو غير المعتادة." },
    { n: 4, en: "Independent", ar: "باستقلال", dEn: "Consistent and confident, with no input from the instructor. Test-ready.", dAr: "ثابت وواثق دون أي تدخل من المدرب. جاهز للاختبار." },
    { n: 5, en: "Reflection", ar: "تأمل وتحليل", dEn: "Can explain what went well, what would change the outcome, and why it matters for safety.", dAr: "يستطيع شرح ما نجح وما الذي كان سيغير النتيجة ولماذا يهم ذلك للسلامة." }
  ],

  /* ---------- the Saudi learner journey ---------- */
  stages: [
    { id: "s1", n: 1, en: "Get ready", ar: "الاستعداد",
      pEn: "Active Absher account, medical and eye test, enrol at a Moroor-approved driving school. Learn the car before it moves.",
      pAr: "حساب فعال في أبشر، فحص طبي وفحص نظر، التسجيل في مدرسة قيادة معتمدة من المرور. تعرف على السيارة قبل أن تتحرك.",
      chapters: ["c-car", "c-driver"], lessons: [], theory: ["T1"] },
    { id: "s2", n: 2, en: "Learn the theory", ar: "تعلم الجانب النظري",
      pEn: "Work through the guide in order. Each chapter puts the Moroor handbook and the matching Highway Code rules side by side.",
      pAr: "ادرس الدليل بالترتيب. كل فصل يعرض دليل المرور وقواعد نظام الطرق البريطاني المقابلة جنبا إلى جنب.",
      chapters: ["c-users", "c-signs", "c-road", "c-junctions", "c-speed", "c-overtake", "c-highways", "c-weather", "c-parking", "c-saudi", "c-incidents"], lessons: [], theory: ["T2", "T3", "T4", "T5", "T6", "T7", "T8"] },
    { id: "s3", n: 3, en: "Pass the theory test", ar: "اجتياز الاختبار النظري",
      pEn: "Computer test at the school. Practise in the Test tab until three timed mocks in a row score 90% or more.",
      pAr: "اختبار حاسوبي في المدرسة. تدرب في تبويب الاختبار حتى تحقق 90% أو أكثر في ثلاثة اختبارات تجريبية متتالية.",
      chapters: ["c-tests"], lessons: [], theory: ["T9"], test: true },
    { id: "s4", n: 4, en: "Yard training", ar: "التدريب في الساحة",
      pEn: "Control, steering and the test manoeuvres on private ground, away from traffic.",
      pAr: "التحكم والتوجيه ومناورات الاختبار في ساحة خاصة بعيدا عن حركة المرور.",
      chapters: [], lessons: ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "L10"] },
    { id: "s5", n: 5, en: "Road training", ar: "التدريب على الطريق",
      pEn: "Real traffic in the school car with its instructor: junctions, roundabouts, U-turns, highways, night.",
      pAr: "حركة مرور حقيقية في سيارة المدرسة مع مدربها: التقاطعات والدوارات والدوران للخلف والطرق السريعة والقيادة ليلا.",
      chapters: [], lessons: ["L11", "L12", "L13", "L14", "L15", "L16", "L17", "L18", "L19", "L20"] },
    { id: "s6", n: 6, en: "Practical test", ar: "الاختبار العملي",
      pEn: "Full mock test, then the real test: yard manoeuvres and an on-road drive with a Moroor examiner.",
      pAr: "اختبار تجريبي كامل ثم الاختبار الفعلي: مناورات الساحة وقيادة على الطريق مع فاحص المرور.",
      chapters: ["c-tests"], lessons: ["L21"], checks: ["week", "day"] },
    { id: "s7", n: 7, en: "Licence issuance and traffic law", ar: "إصدار الرخصة ونظام المرور",
      pEn: "Pay the licence fee on Absher and collect the licence. Know the violations, fines and points that now apply to you.",
      pAr: "ادفع رسوم الرخصة عبر أبشر واستلم الرخصة. اعرف المخالفات والغرامات والنقاط التي تنطبق عليك الآن.",
      chapters: ["c-licence", "c-law"], lessons: [] }
  ],

  /* ---------- guide chapters, in journey order ---------- */
  // hb: handbook section ids (data/hb.js). hc: Highway Code slice ids (data/hc.js). dg: diagram ids.
  chapters: [
    { id: "c-car", stage: "s1", en: "Your car: Suzuki Fronx 2026", ar: "سيارتك: سوزوكي فرونكس 2026",
      teach: [
        { en: "**Two pedals only.** The right foot works both brake and accelerator. The left foot stays on the footrest, !!always!!.", ar: "**دواستان فقط.** القدم اليمنى للفرامل والوقود معا. القدم اليسرى تبقى على مسند القدم !!دائما!!." },
        { en: "**Selector P, R, N, D.** Foot on the brake to start the engine and to move out of P.", ar: "**ناقل الحركة P وR وN وD.** ضع قدمك على الفرامل لتشغيل المحرك وللخروج من وضع P." },
        { en: "**Creep.** In D or R the car rolls on its own. All slow manoeuvres use ++creep and brake++, no accelerator.", ar: "**الزحف.** في وضع D أو R تتحرك السيارة وحدها. كل المناورات البطيئة تتم ++بالزحف والفرامل++ دون الوقود." },
        { en: "**Driver sits on the left.** Judge the right-hand kerb with the right mirror and a reference point on the bonnet.", ar: "**السائق يجلس على اليسار.** قدر الرصيف الأيمن بالمرآة اليمنى ونقطة مرجعية على غطاء المحرك." },
        { en: "**Hill hold** holds the car for a moment on a slope while the foot moves from brake to accelerator.", ar: "**مساعد صعود المرتفعات** يثبت السيارة لحظة على المنحدر أثناء نقل القدم من الفرامل إلى الوقود." }
      ],
      blocks: [
        { k: "h3", en: "The car in numbers", ar: "السيارة بالأرقام" },
        { k: "table", head: { en: ["Item", "Fronx 2026 (Saudi market)"], ar: ["البند", "فرونكس 2026 (السوق السعودي)"] },
          rows: [
            { en: ["Engine", "1.5 litre petrol, 4 cylinders"], ar: ["المحرك", "بنزين 1.5 لتر، 4 أسطوانات"] },
            { en: ["Gearbox", "6-speed automatic, front-wheel drive"], ar: ["ناقل الحركة", "أوتوماتيكي 6 سرعات، دفع أمامي"] },
            { en: ["Size", "about 4.0 m long, 1.77 m wide"], ar: ["الأبعاد", "طول نحو 4.0 م وعرض 1.77 م"] },
            { en: ["Fuel tank", "37 litres"], ar: ["خزان الوقود", "37 لترا"] },
            { en: ["Standard safety", "ABS with EBD, front airbags, rear parking sensors, hill hold"], ar: ["أنظمة السلامة الأساسية", "مانع انغلاق المكابح مع توزيع قوة الكبح، وسائد هوائية أمامية، حساسات خلفية، مساعد صعود المرتفعات"] },
            { en: ["Higher trims", "360-degree camera"], ar: ["الفئات الأعلى", "كاميرا 360 درجة"] }
          ], note: { en: "Sources: CarSwitch, ArabWheels and SayaraBay listings for the Saudi Fronx (checked 16 November 2026).", ar: "المصادر: صفحات كار سويتش وعرب ويلز وسيارة باي للفرونكس السعودية (تم الاطلاع في 16 نوفمبر 2026)." } },
        { k: "h3", en: "What this means for lessons", ar: "ماذا يعني ذلك في الدروس" },
        { k: "li", en: "Teach parking by **mirrors and reference points first**, camera second: the school's test car may not have a camera.", ar: "علم الوقوف **بالمرايا ونقاط الإسناد أولا** ثم بالكاميرا: قد لا تحتوي سيارة الاختبار في المدرسة على كاميرا." },
        { k: "li", en: "The Fronx is short (about **4 m**), so it is easy to place in a bay. The school car may be longer: practise with cones set to its size.", ar: "الفرونكس قصيرة (نحو **4 م**) فيسهل إدخالها في الموقف. قد تكون سيارة المدرسة أطول: تدرب بأقماع مضبوطة على مقاسها." },
        { k: "li", en: "Stalk sides and the parking brake type vary by trim: check them on your car in lesson 1.", ar: "مكان المقابض ونوع فرامل الانتظار يختلفان حسب الفئة: تحقق منهما في سيارتك في الدرس الأول." },
        { k: "h3", en: "Manual-only items (idle for this car)", ar: "عناصر خاصة بناقل الحركة اليدوي (غير مستخدمة في هذه السيارة)" },
        { k: "idle", en: "Clutch pedal, gear lever positions 1 to 5 and R, rev counter for gear changes, hill start with clutch and handbrake, stalling.", ar: "دواسة القابض، أوضاع ذراع التروس من 1 إلى 5 وR، عداد الدوران لتغيير التروس، الانطلاق على المرتفع بالقابض وفرامل اليد، توقف المحرك المفاجئ." }
      ],
      checklists: ["controls"], hb: ["hb-dash"], hc: ["a6"], dg: [] },

    { id: "c-driver", stage: "s1", en: "You, the driver", ar: "أنت السائق",
      teach: [
        { en: "Be **fit to drive**: rested, clear vision, no alcohol or drugs. Long drives: a break of at least ==15 minutes== every ==2 hours==.", ar: "كن **لائقا للقيادة**: مرتاحا، ورؤيتك واضحة، ودون مسكر أو مخدر. في الرحلات الطويلة: استراحة لا تقل عن ==15 دقيقة== كل ==ساعتين==." },
        { en: "**Before moving off:** doors, seat, steering, seatbelt, mirrors. Then parking brake on and selector in P before starting.", ar: "**قبل الانطلاق:** الأبواب، المقعد، المقود، حزام الأمان، المرايا. ثم فرامل الانتظار مفعلة وناقل الحركة على P قبل التشغيل." },
        { en: "Seatbelts are !!compulsory for the driver and every passenger!!. Children ride in a suitable seat in the back.", ar: "حزام الأمان !!إلزامي للسائق ولجميع الركاب!!. يجلس الأطفال في مقعد مناسب في الخلف." },
        { en: "!!Never hold a phone while driving.!! Set the sat nav before moving.", ar: "!!لا تمسك الهاتف أثناء القيادة أبدا.!! اضبط الملاحة قبل التحرك." }
      ],
      blocks: [], checklists: ["cockpit"], hb: ["hb-intro", "hb-duties", "hb-passengers"], hc: ["hc-drivers"], dg: [] },

    { id: "c-users", stage: "s2", en: "Road users and cooperative behaviour", ar: "مستعملو الطريق والسلوك التعاوني",
      teach: [
        { en: "Those **most at risk** come first: pedestrians, children, older people, cyclists, motorcyclists.", ar: "الأكثر **عرضة للخطر** أولا: المشاة والأطفال وكبار السن وراكبو الدراجات والدراجات النارية." },
        { en: "Give way to ++emergency vehicles++ with lights or sirens: move right and let them pass.", ar: "أفسح الطريق ++لمركبات الطوارئ++ التي تشغل الأضواء أو المنبهات: تحرك إلى اليمين ودعها تمر." },
        { en: "!!Never overtake a stopped school bus!! that is loading or unloading children.", ar: "!!لا تتجاوز حافلة مدرسية متوقفة!! أثناء صعود الطلاب أو نزولهم." },
        { en: "Expect mistakes from others and leave space to correct them.", ar: "توقع أخطاء الآخرين واترك مسافة تتيح تداركها." }
      ],
      blocks: [], hb: ["hb-u2", "hb-coop", "hb-priorityusers", "hb-assess"], hc: ["hc-intro", "hc-vulnerable"], dg: ["dg-170", "dg-192"] },

    { id: "c-signs", stage: "s2", en: "The road, signs, signals and markings", ar: "الطريق والإشارات والعلامات",
      teach: [
        { en: "**Shape tells the type:** triangle warns, red circle prohibits, blue circle orders, octagon is Stop, inverted triangle is Give Way, rectangle informs.", ar: "**الشكل يحدد النوع:** المثلث يحذر، والدائرة الحمراء تمنع، والدائرة الزرقاء تلزم، والمثمن يعني قف، والمثلث المقلوب يعني أعط الأولوية، والمستطيل يرشد." },
        { en: "**Guide sign colours:** blue outside cities, green inside cities, white to key facilities, brown to leisure and religious sites.", ar: "**ألوان الإشارات الإرشادية:** الأزرق خارج المدن، والأخضر داخلها، والأبيض للمرافق المهمة، والبني للمواقع الترفيهية والدينية." },
        { en: "Work-zone signs are **yellow with a red border** and override the usual layout.", ar: "إشارات مناطق العمل **صفراء بإطار أحمر** وتلغي التنظيم المعتاد." },
        { en: "A traffic officer's directions !!override lights and signs!!.", ar: "تعليمات رجل المرور !!مقدمة على الإشارات الضوئية واللوحات!!." }
      ],
      blocks: [{ k: "signs" }], hb: ["hb-roadparts", "hb-guidance", "hb-signs"], hc: [], dg: [] },

    { id: "c-road", stage: "s2", en: "Driving on the road: lanes, turning, reversing", ar: "القيادة على الطريق: المسارات والانعطاف والرجوع للخلف",
      teach: [
        { en: "**Keep right** unless overtaking. Overtake on the **left**.", ar: "**الزم اليمين** إلا عند التجاوز. التجاوز يكون من **اليسار**." },
        { en: "**MSM** before every change: Mirrors, Signal, Manoeuvre. Check the blind spot before moving sideways.", ar: "**مرايا، إشارة، مناورة** قبل كل تغيير. افحص النقطة العمياء قبل التحرك جانبيا." },
        { en: "Choose the lane early, from the arrows on the road. Change one lane at a time.", ar: "اختر المسار مبكرا من الأسهم على الطريق. غير مسارا واحدا في كل مرة." },
        { en: "!!Do not reverse more than necessary!!; on a public road the handbook's fine schedule penalises reversing more than ==20 m==.", ar: "!!لا ترجع للخلف أكثر من اللازم!!؛ وفي الطريق العام يعاقب جدول المخالفات على الرجوع لأكثر من ==20 مترا==." }
      ],
      blocks: [], checklists: ["movingoff", "lanes"], hb: ["hb-u3", "hb-general", "hb-lanechange", "hb-lanechoice", "hb-turning"], hc: ["hc-signals", "hc-lanes", "hc-movingoff", "hc-reversing"], dg: ["dg-159", "dg-180"] },

    { id: "c-junctions", stage: "s2", en: "Junctions, priority, roundabouts, U-turns and crossings", ar: "التقاطعات والأولوية والدوارات والدوران للخلف والمعابر",
      teach: [
        { en: "**Red light:** stop behind the line. You may then turn right unless a sign or a dedicated right-turn lane forbids it.", ar: "**الضوء الأحمر:** توقف خلف الخط. يمكنك بعدها الانعطاف يمينا ما لم تمنع ذلك إشارة أو مسار مخصص للانعطاف يمينا." },
        { en: "**Stop sign:** a full stop, about ==3 seconds==, look in all directions.", ar: "**إشارة قف:** وقوف تام نحو ==3 ثوان== مع النظر في جميع الاتجاهات." },
        { en: "**Equal junction:** the vehicle on your ++right++ goes first. **Roundabout:** give way to vehicles ++already circulating++, which come from your left.", ar: "**التقاطع المتساوي:** الأولوية للمركبة على ++يمينك++. **الدوار:** أعط الأولوية للمركبات ++التي تسير داخله++ وهي قادمة من يسارك." },
        { en: "**U-turn:** allowed at junctions unless signed otherwise; give way to traffic from every other direction.", ar: "**الدوران للخلف:** مسموح عند التقاطعات ما لم تمنعه إشارة؛ أعط الأولوية للمركبات من كل الاتجاهات الأخرى." },
        { en: "!!Never enter a junction you cannot clear!!, even on green.", ar: "!!لا تدخل تقاطعا لا تستطيع عبوره!! ولو كان الضوء أخضر." }
      ],
      blocks: [], checklists: ["junctions", "roundabouts"], hb: ["hb-u4", "hb-lights", "hb-police", "hb-stopgive", "hb-priority", "hb-pedx", "hb-rail"], hc: ["hc-junctions", "hc-roundabouts", "hc-pedx", "hc-levelx"], dg: ["dg-170", "dg-174", "dg-180", "dg-181", "dg-185", "dg-192"] },

    { id: "c-speed", stage: "s2", en: "Speed, stopping and following distance", ar: "السرعة ومسافة التوقف ومسافة الأمان",
      teach: [
        { en: "The limit is a **ceiling, not a target**. Usual limits: about ==40 km/h== near schools, ==60 to 80== in the city, ==120== on highways, ==140== where signed.", ar: "حد السرعة **سقف وليس هدفا**. الحدود المعتادة: نحو ==40 كم/س== قرب المدارس، ==60 إلى 80== داخل المدينة، ==120== على الطرق السريعة، ==140== حيث تشير اللوحات." },
        { en: "Keep a **two-second gap** at least; double it in rain, dust or at night.", ar: "حافظ على **فاصل ثانيتين** على الأقل؛ وضاعفه في المطر والغبار والليل." },
        { en: "Stopping distance = reaction distance + braking distance. Braking distance grows with the **square** of speed.", ar: "مسافة التوقف = مسافة رد الفعل + مسافة الفرملة. مسافة الفرملة تزداد **بمربع** السرعة." },
        { en: "!!Drifting (tafheet) is a serious crime!!: fines, impound and 24 points.", ar: "!!التفحيط مخالفة جسيمة!!: غرامات وحجز المركبة و24 نقطة." }
      ],
      blocks: [], hb: ["hb-speed", "hb-u5", "hb-limits", "hb-choosespeed", "hb-distance", "hb-behaviour", "hb-eco"], hc: ["hc-braking", "hc-advice"], dg: ["dg-126"] },

    { id: "c-overtake", stage: "s2", en: "Overtaking and passing", ar: "التجاوز والمرور بجانب المركبات",
      teach: [
        { en: "Overtake **on the left**, only when you can see far enough ahead and the gap is clear.", ar: "تجاوز **من اليسار** فقط عندما ترى مسافة كافية أمامك ويكون الطريق خاليا." },
        { en: "!!No overtaking!! at junctions, bends, hill crests, crossings, or after a No Overtaking sign.", ar: "!!ممنوع التجاوز!! عند التقاطعات والمنعطفات وقمم المرتفعات والمعابر وبعد إشارة ممنوع التجاوز." },
        { en: "Move back to the right only when well clear. **Do not cut in.**", ar: "عد إلى اليمين فقط بعد أن تبتعد مسافة كافية. **لا تقطع الطريق على من تجاوزته.**" },
        { en: "When someone overtakes you: keep your speed or ease off. !!Never speed up.!!", ar: "عندما يتجاوزك أحد: حافظ على سرعتك أو خففها. !!لا تزد سرعتك أبدا.!!" }
      ],
      blocks: [], hb: ["hb-u6", "hb-near", "hb-overtake", "hb-noovertake", "hb-safeovertake", "hb-overtakeissue"], hc: ["hc-overtaking"], dg: ["dg-164"] },

    { id: "c-highways", stage: "s2", en: "Highways", ar: "الطرق السريعة",
      teach: [
        { en: "Build speed on the slip road, then **merge into a gap**. Do not stop at the end of the slip road unless traffic forces you to.", ar: "زد السرعة على طريق الدخول ثم **اندمج في فراغ مناسب**. لا تتوقف في نهاية طريق الدخول إلا إذا اضطرتك حركة المرور." },
        { en: "Keep right unless overtaking. Plan your exit about ==2 km== ahead.", ar: "الزم اليمين إلا عند التجاوز. خطط للخروج قبل نحو ==2 كم==." },
        { en: "!!Never reverse or stop on the carriageway.!! Driving far below the flow is also a violation.", ar: "!!لا ترجع للخلف ولا تتوقف على الطريق أبدا.!! والقيادة ببطء شديد مقارنة بالحركة مخالفة أيضا." }
      ],
      blocks: [], hb: [], hc: ["hc-motorways"], dg: [] },

    { id: "c-weather", stage: "s2", en: "Lights, night and weather", ar: "الأضواء والقيادة ليلا والأحوال الجوية",
      teach: [
        { en: "**Dipped beams** in town and when meeting traffic; **main beam** only on unlit roads with nobody ahead.", ar: "**الضوء المنخفض** داخل المدينة وعند مقابلة المركبات؛ و**الضوء العالي** فقط على الطرق غير المضاءة دون أحد أمامك." },
        { en: "**Dust storm:** slow down, dipped lights, bigger gap. If visibility collapses, pull fully off the road and wait.", ar: "**العاصفة الترابية:** خفف السرعة وشغل الضوء المنخفض وزد المسافة. إذا انعدمت الرؤية فابتعد تماما عن الطريق وانتظر." },
        { en: "!!Never drive into a flooded underpass or a flowing wadi!!, however shallow it looks.", ar: "!!لا تدخل نفقا مغمورا بالمياه أو واديا جاريا أبدا!! مهما بدا ضحلا." },
        { en: "**Heat:** check tyre pressure cold, watch the temperature gauge, never open a hot radiator cap.", ar: "**الحرارة:** افحص ضغط الإطارات وهي باردة، وراقب مؤشر الحرارة، ولا تفتح غطاء المبرد وهو ساخن." }
      ],
      blocks: [], hb: ["hb-vlights", "hb-vision"], hc: ["hc-weather", "hc-lighting"], dg: [] },

    { id: "c-parking", stage: "s2", en: "Stopping, waiting and parking", ar: "التوقف والانتظار والوقوف",
      teach: [
        { en: "**No stopping** (two crossed bars) prohibits all stopping. **No parking** (one bar) still allows waiting.", ar: "**ممنوع الوقوف والانتظار** (خطان متقاطعان) يمنع أي توقف. **ممنوع الوقوف** (خط واحد) يسمح بالانتظار." },
        { en: "!!Do not park!! in disabled bays, on crossings, near junctions or where you block a driveway.", ar: "!!لا تقف!! في مواقف ذوي الإعاقة أو على المعابر أو قرب التقاطعات أو أمام المداخل." },
        { en: "Check mirrors and blind spot **before opening your door**.", ar: "افحص المرايا والنقطة العمياء **قبل فتح الباب**." }
      ],
      blocks: [], checklists: ["parking"], hb: ["hb-stopping"], hc: ["hc-parking"], dg: [] },

    { id: "c-saudi", stage: "s2", en: "Driving in Saudi Arabia", ar: "القيادة في المملكة العربية السعودية",
      teach: [
        { en: "UK habits are **mirrored**: drive on the right, overtake on the left, roundabouts anticlockwise.", ar: "العادات البريطانية **معكوسة**: القيادة على اليمين، والتجاوز من اليسار، والدوارات عكس عقارب الساعة." },
        { en: "To go left you often **pass the junction, U-turn, then turn right**.", ar: "للاتجاه يسارا غالبا **تتجاوز التقاطع ثم تدور للخلف ثم تنعطف يمينا**." },
        { en: "Saher cameras catch speed, red lights, phones, seatbelts and lane use. The examiner fails the same things.", ar: "كاميرات ساهر ترصد السرعة والإشارة الحمراء والهاتف وحزام الأمان والالتزام بالمسار. والفاحص يرسب على الأخطاء نفسها." }
      ],
      blocks: [
        { k: "h3", en: "UK habits that are reversed here", ar: "عادات بريطانية معكوسة هنا" },
        { k: "table", head: { en: ["Topic", "UK", "Saudi Arabia"], ar: ["الموضوع", "بريطانيا", "المملكة"] }, rows: [
          { en: ["Side of the road", "Left", "**Right**"], ar: ["جهة السير", "اليسار", "**اليمين**"] },
          { en: ["Driver's seat", "Right", "**Left**"], ar: ["مقعد السائق", "اليمين", "**اليسار**"] },
          { en: ["Overtake on", "The right", "**The left**"], ar: ["التجاوز من", "اليمين", "**اليسار**"] },
          { en: ["Roundabouts", "Clockwise, priority from the right", "**Anticlockwise, priority to traffic already circulating (from the left)**"], ar: ["الدوارات", "مع عقارب الساعة والأولوية للقادم من اليمين", "**عكس عقارب الساعة والأولوية لمن داخل الدوار (القادم من اليسار)**"] },
          { en: ["Unmarked junction", "No automatic priority", "**Vehicle on your right first**"], ar: ["تقاطع دون إشارات", "لا أولوية تلقائية", "**الأولوية للمركبة على يمينك**"] },
          { en: ["Blind spot when moving off", "Right shoulder", "**Left shoulder**"], ar: ["النقطة العمياء عند الانطلاق", "الكتف الأيمن", "**الكتف الأيسر**"] },
          { en: ["Speed units", "mph", "**km/h**"], ar: ["وحدة السرعة", "ميل/ساعة", "**كم/ساعة**"] },
          { en: ["Learner practice", "Provisional licence, private practice allowed", "**School car and instructor only**"], ar: ["تدريب المتعلم", "رخصة مؤقتة ويسمح بالتدريب الخاص", "**سيارة المدرسة ومدربها فقط**"] },
          { en: ["Turn on red", "Not allowed", "**Right turn after a full stop, unless forbidden**"], ar: ["الانعطاف عند الأحمر", "غير مسموح", "**الانعطاف يمينا بعد وقوف تام ما لم يمنع**"] }
        ] },
        { k: "h3", en: "Roads and junctions", ar: "الطرق والتقاطعات" },
        { k: "li", en: "**U-turn slots** replace many left turns.", ar: "**فتحات الدوران للخلف** تحل محل كثير من الانعطافات يسارا." },
        { k: "li", en: "**Service roads** run beside main roads; shops and homes are reached from them, not from the main carriageway.", ar: "**طرق الخدمة** تمتد بجانب الطرق الرئيسية؛ ويتم الوصول إلى المحلات والمنازل منها لا من الطريق الرئيسي." },
        { k: "li", en: "**Free-flow right-turn slip lanes:** give way to the traffic you join and to pedestrians.", ar: "**مسارات الانعطاف يمينا الحرة:** أعط الأولوية للمركبات التي تنضم إليها وللمشاة." },
        { k: "li", en: "**Speed humps** are frequent and often unpainted: watch for signs and the car ahead dipping.", ar: "**المطبات** كثيرة وغالبا غير مطلية: انتبه للإشارات ولانخفاض السيارة التي أمامك." },
        { k: "li", en: "Riyadh has **bus-only lanes**: keep out of them. Trucks are restricted to certain lanes and hours.", ar: "في الرياض **مسارات مخصصة للحافلات**: لا تدخلها. والشاحنات مقيدة بمسارات وأوقات محددة." },
        { k: "h3", en: "Other drivers", ar: "السائقون الآخرون" },
        { k: "li", en: "Headlights flashing close behind in the left lane: the driver wants to pass. Signal, move right when safe, !!never brake-test!!.", ar: "وميض الأضواء من الخلف في المسار الأيسر: السائق يريد التجاوز. أعط إشارة وانتقل يمينا عندما يكون ذلك آمنا، و!!لا تضغط الفرامل لاختباره أبدا!!." },
        { k: "li", en: "Expect late lane changes without signals and cars cutting across roundabout lanes. **Leave space; do not copy it.**", ar: "توقع تغيير المسار المتأخر دون إشارة وقطع المسارات داخل الدوار. **اترك مسافة ولا تقلد ذلك.**" },
        { k: "li", en: "Traffic surges before prayer times, around school runs and before iftar in Ramadan.", ar: "تزداد الحركة قبل أوقات الصلاة وعند مواعيد المدارس وقبل الإفطار في رمضان." },
        { k: "h3", en: "Heat, dust, rain, animals", ar: "الحرارة والغبار والمطر والحيوانات" },
        { k: "li", en: "**Blowout:** grip the wheel, no hard braking, ease off, steer straight, stop on the shoulder.", ar: "**انفجار الإطار:** أمسك المقود بقوة، ولا تضغط الفرامل بشدة، وخفف الوقود، ووجه السيارة مستقيمة، ثم توقف على الكتف." },
        { k: "li", en: "**Dust:** no hazard lights while moving, because they hide your indicators.", ar: "**الغبار:** لا تشغل أضواء التحذير أثناء السير لأنها تخفي إشارات الانعطاف." },
        { k: "li", en: "**First rain after a dry spell:** roads are very slippery. Halve the speed, double the gap.", ar: "**أول مطر بعد الجفاف:** تكون الطرق شديدة الانزلاق. خفف السرعة إلى النصف وضاعف المسافة." },
        { k: "li", en: "**Camels** are hard to see at night and a collision is often fatal: slow right down at camel signs and at dusk.", ar: "**الجمال** يصعب رؤيتها ليلا والاصطدام بها غالبا قاتل: خفف السرعة كثيرا عند إشارات الجمال وعند الغروب." },
        { k: "note", en: "Local habits, heat, dust and animal notes are practical guidance from general knowledge, not quoted law.", ar: "ملاحظات العادات المحلية والحرارة والغبار والحيوانات إرشادات عملية من المعرفة العامة وليست نصوصا نظامية." }
      ], hb: [], hc: [], dg: [] },

    { id: "c-incidents", stage: "s2", en: "Accidents, breakdowns and first aid", ar: "الحوادث والأعطال والإسعافات الأولية",
      teach: [
        { en: "**Stop, hazard lights on, check for injuries.** !!Never leave the scene!! before the report is done.", ar: "**توقف وشغل أضواء التحذير وتحقق من الإصابات.** !!لا تغادر موقع الحادث!! قبل إتمام البلاغ." },
        { en: "Injuries or danger: call **911** (unified number in Riyadh), or **997** ambulance, **993** traffic police.", ar: "عند وجود إصابات أو خطر: اتصل بـ **911** (الرقم الموحد في الرياض)، أو **997** للإسعاف، أو **993** للمرور." },
        { en: "Minor damage and both cars insured: photograph, move clear if safe, report to **Najm** (app or 920000560).", ar: "أضرار بسيطة والسيارتان مؤمنتان: صور الموقع، وابتعد عن الطريق إن كان ذلك آمنا، وأبلغ **نجم** (التطبيق أو 920000560)." },
        { en: "**Breakdown:** pull fully onto the shoulder, hazards on, warning triangle well behind, wait behind the barrier.", ar: "**العطل:** ابتعد تماما إلى الكتف، وشغل أضواء التحذير، وضع المثلث العاكس بعيدا خلف السيارة، وانتظر خلف الحاجز." }
      ],
      blocks: [{ k: "note", en: "Numbers 911, 993 and 997 and the Najm app are from the Moroor handbook p.28. The Najm phone number and the leave-the-scene rule are from general knowledge.", ar: "الأرقام 911 و993 و997 وتطبيق نجم من دليل المرور ص 28. ورقم هاتف نجم وقاعدة عدم مغادرة الموقع من المعرفة العامة." }],
      hb: ["hb-accidents"], hc: ["hc-breakdowns", "hc-roadworks", "a7"], dg: [] },

    { id: "c-tests", stage: "s3", en: "The theory and practical tests", ar: "الاختباران النظري والعملي",
      teach: [
        { en: "**Theory:** computer multiple choice, about ==30 minutes==, at the school. Prepare for ==85%==.", ar: "**النظري:** اختيار من متعدد على الحاسوب، نحو ==30 دقيقة==، في المدرسة. استعد لنسبة ==85%==." },
        { en: "**Yard:** reverse (garage) parking, parallel parking, three-point turn, slope start. Some schools add figure 8, X and T tracks.", ar: "**الساحة:** الوقوف للخلف داخل الموقف، والوقوف الموازي، والدوران بثلاث حركات، والانطلاق على المنحدر. وتضيف بعض المدارس مسارات 8 وX وT." },
        { en: "**Road:** normal driving judged on mirrors, control, lanes, signals, speed and response to signs.", ar: "**الطريق:** قيادة عادية تقيم على المرايا والتحكم والمسارات والإشارات والسرعة والاستجابة للوحات." },
        { en: "A serious or dangerous error !!ends the test at once!!.", ar: "الخطأ الجسيم أو الخطر !!ينهي الاختبار فورا!!." }
      ],
      blocks: [
        { k: "h3", en: "Theory test format", ar: "صيغة الاختبار النظري" },
        { k: "warn", en: "Published formats disagree: 20 questions with 17 to pass, or 35 questions with 22 or 26 to pass. Moroor publishes no official count. **Ask Hind's school.**", ar: "الصيغ المنشورة متعارضة: 20 سؤالا يلزم منها 17، أو 35 سؤالا يلزم منها 22 أو 26. لا ينشر المرور عددا رسميا. **اسأل مدرسة هند.**" },
        { k: "li", en: "Reported split: about ==40%== road signs, ==60%== rules.", ar: "التوزيع المتداول: نحو ==40%== إشارات و==60%== قواعد." },
        { k: "h3", en: "Most common reasons for failing the practical test", ar: "أكثر أسباب الرسوب في الاختبار العملي" },
        { k: "li", en: "Too few mirror checks", ar: "قلة النظر في المرايا" },
        { k: "li", en: "Poor lane positioning", ar: "سوء التمركز في المسار" },
        { k: "li", en: "Not giving way at junctions or roundabouts", ar: "عدم إعطاء الأولوية عند التقاطعات أو الدوارات" },
        { k: "li", en: "Braking too hard or too late", ar: "الفرملة بقوة أو في وقت متأخر" },
        { k: "li", en: "Wrong speed for the conditions", ar: "سرعة غير مناسبة للظروف" },
        { k: "li", en: "Any moving violation: !!seatbelt off, no signal, rolling through a Stop!!", ar: "أي مخالفة أثناء السير: !!عدم ربط الحزام، أو عدم إعطاء إشارة، أو عدم الوقوف التام عند قف!!" },
        { k: "note", en: "Sources: Wathim, DrivingTestKSA and school programme pages (checked 16 November 2026). Practice sites, not Moroor.", ar: "المصادر: صفحات وذم ودرايفنغ تست كيه إس إيه وبرامج المدارس (تم الاطلاع في 16 نوفمبر 2026). مواقع تدريب وليست المرور." }
      ], checklists: ["mock", "week", "day", "school"], hb: [], hc: [], dg: [] },

    { id: "c-licence", stage: "s7", en: "Licence issuance", ar: "إصدار رخصة القيادة",
      teach: [
        { en: "Requirements: aged ==18== or over, school training completed, theory and practical tests passed, fees paid, any old fines settled.", ar: "المتطلبات: ==18== عاما فأكثر، وإتمام التدريب في المدرسة، واجتياز الاختبارين النظري والعملي، ودفع الرسوم، وسداد المخالفات السابقة." },
        { en: "A private licence is valid for up to ==10 years==, carries up to ==9 people== including the driver, and vehicles up to ==3500 kg==.", ar: "الرخصة الخاصة صالحة حتى ==10 سنوات==، وتسمح بنقل ==9 أشخاص== كحد أقصى مع السائق، وبمركبات لا يزيد وزنها عن ==3500 كغم==." },
        { en: "After passing: pay the licence fee on **Absher**, then collect the licence.", ar: "بعد النجاح: ادفع رسوم الرخصة عبر **أبشر** ثم استلم الرخصة." }
      ],
      blocks: [
        { k: "h3", en: "The steps, in order", ar: "الخطوات بالترتيب" },
        { k: "ol", en: ["Active Absher account; book through Absher or the school.", "Medical and eye test at an approved clinic.", "Open a file at an approved school; it assesses you and assigns hours (a complete beginner usually gets about 30 hours).", "Theory lectures, then the computer theory test.", "Practical training: yard stages, then road stages.", "Practical test. Pass, pay the licence fee on Absher, collect the licence."],
          ar: ["حساب فعال في أبشر؛ الحجز عبر أبشر أو المدرسة.", "فحص طبي وفحص نظر في عيادة معتمدة.", "فتح ملف في مدرسة معتمدة؛ تقيم مستواك وتحدد الساعات (المبتدئ تماما يحصل عادة على نحو 30 ساعة).", "المحاضرات النظرية ثم الاختبار النظري على الحاسوب.", "التدريب العملي: مراحل الساحة ثم مراحل الطريق.", "الاختبار العملي. عند النجاح ادفع رسوم الرخصة عبر أبشر واستلم الرخصة."] },
        { k: "note", en: "Steps from Wathim and Saudi Aramco Driving Center pages (checked 16 November 2026); requirements from the Moroor handbook p.12.", ar: "الخطوات من صفحات وذم ومركز أرامكو السعودية لتعليم القيادة (تم الاطلاع في 16 نوفمبر 2026)؛ والمتطلبات من دليل المرور ص 12." }
      ], hb: ["hb-licence"], hc: ["a3", "a8"], dg: [] },

    { id: "c-law", stage: "s7", en: "Traffic law: violations, fines, points and Saher", ar: "نظام المرور: المخالفات والغرامات والنقاط وساهر",
      teach: [
        { en: "**24 points** in one Hijri year suspend the licence: ==3 months== the first time, ==6 months== the second, ==1 year== the third, revoked the fourth.", ar: "**24 نقطة** خلال سنة هجرية واحدة توقف الرخصة: ==3 أشهر== في المرة الأولى، و==6 أشهر== في الثانية، و==سنة== في الثالثة، وتسحب نهائيا في الرابعة." },
        { en: "Paying within ==30 days== of the violation gives a ==25%== discount. **Object on Absher before paying.**", ar: "السداد خلال ==30 يوما== من المخالفة يمنح خصم ==25%==. **اعترض عبر أبشر قبل السداد.**" },
        { en: "Biggest risks: !!red light SAR 3,000 to 6,000!!, !!drifting up to SAR 10,000 plus 24 points!!, !!handheld phone SAR 500 to 900!!.", ar: "أكبر المخاطر: !!قطع الإشارة الحمراء 3000 إلى 6000 ريال!!، و!!التفحيط حتى 10000 ريال مع 24 نقطة!!، و!!الإمساك بالهاتف 500 إلى 900 ريال!!." }
      ],
      blocks: [
        { k: "h3", en: "Quick reference (indicative 2026 bands; the exact amount appears on Absher)", ar: "مرجع سريع (فئات تقريبية لعام 2026؛ المبلغ الدقيق يظهر في أبشر)" },
        { k: "table", head: { en: ["Violation", "Fine (SAR)", "Points"], ar: ["المخالفة", "الغرامة (ريال)", "النقاط"] }, rows: [
          { en: ["Drifting or reckless driving", "5,000 to 10,000", "up to 24, plus impound"], ar: ["التفحيط أو القيادة المتهورة", "5000 إلى 10000", "حتى 24 مع الحجز"] },
          { en: ["Running a red light", "3,000 to 6,000", "6 to 12"], ar: ["قطع الإشارة الحمراء", "3000 إلى 6000", "6 إلى 12"] },
          { en: ["Driving the wrong way", "3,000 to 6,000", "12"], ar: ["القيادة عكس الاتجاه", "3000 إلى 6000", "12"] },
          { en: ["Driving without a valid licence", "1,000 to 2,000", ""], ar: ["القيادة دون رخصة سارية", "1000 إلى 2000", ""] },
          { en: ["Handheld phone while driving", "500 to 900", "2 to 4"], ar: ["استخدام الهاتف باليد أثناء القيادة", "500 إلى 900", "2 إلى 4"] },
          { en: ["Not stopping fully at a Stop sign", "500 to 900", "6"], ar: ["عدم الوقوف التام عند إشارة قف", "500 إلى 900", "6"] },
          { en: ["Speeding up to 25 km/h over", "300 to 500", "4"], ar: ["تجاوز السرعة بما لا يزيد عن 25 كم/س", "300 إلى 500", "4"] },
          { en: ["No seatbelt", "150 to 300", "2"], ar: ["عدم ربط حزام الأمان", "150 إلى 300", "2"] },
          { en: ["No indicator when turning or changing lane", "150 to 300", ""], ar: ["عدم استخدام إشارة الانعطاف عند الانعطاف أو تغيير المسار", "150 إلى 300", ""] }
        ], note: { en: "Points differ between sources: the handbook (p.43) lists red light 12, phone 2, speeding up to 25 km/h 4; KSA Plate lists red light 6 and phone 4. The handbook tables follow below.", ar: "تختلف النقاط بين المصادر: يذكر الدليل (ص 43) 12 نقطة للإشارة الحمراء و2 للهاتف و4 لتجاوز السرعة حتى 25 كم/س؛ ويذكر موقع KSA Plate ست نقاط للإشارة الحمراء وأربعا للهاتف. جداول الدليل معروضة أدناه." } },
        { k: "li", en: "**Saher** catches spot speed, average speed between two cameras, red lights, wrong-way driving, phone use, seatbelts and wrong-lane driving. Braking only at the camera does not beat average-speed checks.", ar: "**ساهر** يرصد السرعة اللحظية ومتوسط السرعة بين كاميرتين وقطع الإشارة والقيادة عكس الاتجاه واستخدام الهاتف وحزام الأمان والقيادة في مسار غير مخصص. الفرملة عند الكاميرا فقط لا تنفع مع رصد متوسط السرعة." }
      ], hb: ["hb-traffic", "hb-violations"], hc: ["a5", "a4"], dg: [] },

    { id: "c-ukref", stage: "ref", en: "UK-only reference", ar: "مرجع خاص ببريطانيا", uk: true,
      teach: [{ en: "These Highway Code chapters cover road users or UK systems Hind will not meet on the Saudi test. Kept for completeness.", ar: "تتناول فصول نظام الطرق البريطاني هذه مستعملي طريق أو أنظمة بريطانية لن تواجهها هند في الاختبار السعودي. أبقيت للاكتمال." }],
      blocks: [], hb: [], hc: ["hc-ped", "hc-wheel", "hc-animals", "hc-cyc", "hc-moto", "hc-trams", "a1", "a2", "other"], dg: [] }
  ],

  /* ---------- theory sessions (instructor ticks) ---------- */
  theory: [
    { id: "T1", h: 1, en: "The car and the driver", ar: "السيارة والسائق", ch: ["c-car", "c-driver"] },
    { id: "T2", h: 1, en: "Road users and behaviour", ar: "مستعملو الطريق والسلوك", ch: ["c-users"] },
    { id: "T3", h: 3, en: "Signs, signals and markings (3 sittings)", ar: "الإشارات والعلامات (3 جلسات)", ch: ["c-signs"] },
    { id: "T4", h: 1.5, en: "Lanes, turning and reversing", ar: "المسارات والانعطاف والرجوع للخلف", ch: ["c-road"] },
    { id: "T5", h: 1.5, en: "Junctions, priority, roundabouts, U-turns", ar: "التقاطعات والأولوية والدوارات والدوران للخلف", ch: ["c-junctions"] },
    { id: "T6", h: 1, en: "Speed and following distance", ar: "السرعة ومسافة الأمان", ch: ["c-speed"] },
    { id: "T7", h: 1.5, en: "Overtaking, highways, lights, weather, parking", ar: "التجاوز والطرق السريعة والأضواء والطقس والوقوف", ch: ["c-overtake", "c-highways", "c-weather", "c-parking"] },
    { id: "T8", h: 1, en: "Saudi driving, accidents and breakdowns", ar: "القيادة في المملكة والحوادث والأعطال", ch: ["c-saudi", "c-incidents"] },
    { id: "T9", h: 2, en: "Test formats and timed mock theory tests", ar: "صيغ الاختبار واختبارات نظرية تجريبية بوقت محدد", ch: ["c-tests"], test: true }
  ],

  /* ---------- practical lessons: what to teach, linked theory ---------- */
  // where: yard = Kayan in the Fronx on private land; road = school car and instructor.
  lessons: [
    { id: "L1", where: "yard", wk: 1, en: "Safety checks, cockpit drill and controls", ar: "فحوص السلامة وإعداد المقصورة وأدوات التحكم", skills: [1, 2, 3, 4, 5], ch: ["c-car", "c-driver"], dg: [],
      items: [
        { en: "Walk-round check: tyres, lights, leaks, glass, fluids.", ar: "فحص حول السيارة: الإطارات والأضواء والتسريبات والزجاج والسوائل." },
        { en: "Cockpit drill in order: doors, seat, steering, seatbelt, mirrors.", ar: "إعداد المقصورة بالترتيب: الأبواب والمقعد والمقود والحزام والمرايا." },
        { en: "Controls tour: find every control without looking (see the Fronx checklist).", ar: "جولة أدوات التحكم: الوصول إلى كل أداة دون النظر (انظر قائمة الفرونكس)." },
        { en: "Start and stop the engine: foot on brake, P, parking brake.", ar: "تشغيل المحرك وإيقافه: القدم على الفرامل، ووضع P، وفرامل الانتظار." },
        { en: "Legal basics: licence, Istimara, insurance, Fahas; no unlicensed road driving.", ar: "الأساسيات النظامية: الرخصة والاستمارة والتأمين والفحص الدوري؛ لا قيادة على الطريق دون رخصة." }
      ] },
    { id: "L2", where: "yard", wk: 1, en: "Moving off, stopping and steering", ar: "الانطلاق والتوقف والتوجيه", skills: [6], ch: ["c-road"], dg: ["dg-159"],
      items: [
        { en: "POM routine: Prepare (brake, D), Observe (mirrors, left blind spot), Move (release brake, creep).", ar: "روتين التحضير والملاحظة والتحرك: التحضير (الفرامل وD)، والملاحظة (المرايا والنقطة العمياء اليسرى)، والتحرك (رفع القدم عن الفرامل والزحف)." },
        { en: "Creep control with brake only, then gentle acceleration.", ar: "التحكم في الزحف بالفرامل فقط ثم الضغط الخفيف على الوقود." },
        { en: "Smooth stop: ease off, brake progressively, P, parking brake.", ar: "توقف سلس: خفف الوقود واضغط الفرامل تدريجيا ثم P وفرامل الانتظار." },
        { en: "Pull-push steering, hands at ten to two.", ar: "التوجيه بالسحب والدفع، واليدان على وضع العاشرة إلا عشر دقائق." }
      ] },
    { id: "L3", where: "yard", wk: 1, en: "Positioning, mirrors and signals", ar: "التمركز والمرايا والإشارات", skills: [7, 8, 9], ch: ["c-road"], dg: ["dg-159"],
      items: [
        { en: "Hold the centre of a coned lane; about 1 m from parked cars.", ar: "الالتزام بمنتصف مسار محدد بالأقماع؛ ونحو متر واحد من السيارات المتوقفة." },
        { en: "Mirrors: interior then door mirror before every change of speed or direction.", ar: "المرايا: الداخلية ثم الجانبية قبل كل تغيير في السرعة أو الاتجاه." },
        { en: "MSM: Mirrors, Signal, Manoeuvre. Signal in good time and cancel after.", ar: "مرايا ثم إشارة ثم مناورة. أعط الإشارة في وقت مناسب وألغها بعد ذلك." }
      ] },
    { id: "L4", where: "yard", wk: 2, en: "Reversing, figure 8 and S-bend", ar: "الرجوع للخلف ومسار 8 ومسار S", skills: [19, 25], ch: ["c-road", "c-tests"], dg: [],
      items: [
        { en: "Reverse in a straight line: look through the rear window, small steering inputs, creep.", ar: "الرجوع في خط مستقيم: النظر من الزجاج الخلفي وحركات توجيه صغيرة والزحف." },
        { en: "Reverse round a corner, all-round observation before and during.", ar: "الرجوع حول زاوية مع المراقبة من جميع الجهات قبل الحركة وأثناءها." },
        { en: "Figure 8 and S-bend between cones, forward then in reverse.", ar: "مسار 8 ومسار S بين الأقماع للأمام ثم للخلف." }
      ] },
    { id: "L5", where: "yard", wk: 2, en: "Cone junctions and scanning ahead", ar: "تقاطعات بالأقماع والنظر للأمام", skills: [10, 14], ch: ["c-junctions"], dg: ["dg-170", "dg-180"],
      items: [
        { en: "MSPSL approach: Mirrors, Signal, Position, Speed, Look.", ar: "الاقتراب بالمرايا والإشارة والتمركز والسرعة والنظر." },
        { en: "Turn right (tight) and turn left (across oncoming lanes) between cones.", ar: "الانعطاف يمينا (قريبا) ويسارا (عبر المسار المقابل) بين الأقماع." },
        { en: "Full stop at a Stop line; give way at a Give Way line.", ar: "وقوف تام عند خط قف؛ وإعطاء الأولوية عند خط أعط الأولوية." },
        { en: "Scan far, middle, near, mirrors. Call out hazards aloud.", ar: "انظر بعيدا ثم للمنتصف ثم قريبا ثم إلى المرايا. اذكر المخاطر بصوت مسموع." }
      ] },
    { id: "L6", where: "yard", wk: 2, en: "Forward bay parking, first reverse bay parks", ar: "الوقوف الأمامي في الموقف وأول وقوف خلفي", skills: [22, 23], ch: ["c-parking", "c-tests"], dg: [],
      items: [
        { en: "Forward bay: swing wide, turn in late, creep to the line.", ar: "الوقوف الأمامي: ابتعد قليلا ثم انعطف متأخرا وازحف حتى الخط." },
        { en: "Reverse bay: drive past, mirror reference to the bay line, full lock, straighten when parallel.", ar: "الوقوف الخلفي: تجاوز الموقف، واستخدم المرآة مرجعا لخط الموقف، ولف المقود كاملا، ثم عدله عند التوازي." },
        { en: "Reverse out with full observation.", ar: "الخروج للخلف مع مراقبة كاملة." }
      ] },
    { id: "L7", where: "yard", wk: 3, en: "Reverse bay to consistency, first parallel parks", ar: "إتقان الوقوف الخلفي وأول وقوف موازي", skills: [21, 22], ch: ["c-parking", "c-tests"], dg: [],
      items: [
        { en: "Three reverse bay parks in a row, centred, no cones touched.", ar: "ثلاثة وقوفات خلفية متتالية في المنتصف دون لمس الأقماع." },
        { en: "Parallel park: align rear bumpers, full lock towards the kerb, straighten at about 45 degrees, opposite lock.", ar: "الوقوف الموازي: حاذ المصدات الخلفية، ولف المقود كاملا نحو الرصيف، وعدله عند نحو 45 درجة، ثم لفه بالاتجاه المعاكس." }
      ] },
    { id: "L8", where: "yard", wk: 3, en: "Parallel parking and three-point turn", ar: "الوقوف الموازي والدوران بثلاث حركات", skills: [20, 21], ch: ["c-tests"], dg: [],
      items: [
        { en: "Parallel park in one go, or with one correction, close to the kerb.", ar: "الوقوف الموازي من محاولة واحدة أو بتصحيح واحد بالقرب من الرصيف." },
        { en: "Three-point turn: forward full left lock, reverse full right lock, forward again. Observe before each leg.", ar: "الدوران بثلاث حركات: للأمام مع لف المقود يسارا، ثم للخلف مع لفه يمينا، ثم للأمام. راقب قبل كل حركة." }
      ] },
    { id: "L9", where: "yard", wk: 4, en: "Slope start, emergency stop, T and X tracks", ar: "الانطلاق على المنحدر والتوقف الاضطراري ومسارا T وX", skills: [24, 25, 26], ch: ["c-speed", "c-tests"], dg: [],
      items: [
        { en: "Stop on the slope with brake and parking brake; move off with no roll-back.", ar: "توقف على المنحدر بالفرامل وفرامل الانتظار؛ وانطلق دون رجوع للخلف." },
        { en: "Emergency stop: both hands on the wheel, brake hard and hold; ABS pulses.", ar: "التوقف الاضطراري: اليدان على المقود، واضغط الفرامل بقوة وثبتها؛ ستشعر بنبض مانع الانغلاق." },
        { en: "After stopping: mirrors and blind spots before moving off.", ar: "بعد التوقف: المرايا والنقاط العمياء قبل الانطلاق." },
        { en: "T and X tracks forward and in reverse.", ar: "مسارا T وX للأمام وللخلف." }
      ] },
    { id: "L10", where: "yard", wk: 4, en: "Yard mock test, then fix the two weakest manoeuvres", ar: "اختبار ساحة تجريبي ثم معالجة أضعف مناورتين", skills: [19, 20, 21, 22, 24, 25, 26], ch: ["c-tests"], dg: [], mock: "L10",
      items: [
        { en: "Run the yard mock silently; mark it on the mock sheet.", ar: "نفذ اختبار الساحة التجريبي بصمت وسجل النتائج في ورقة التقييم." },
        { en: "Repeat the two weakest manoeuvres until each is right twice in a row.", ar: "كرر أضعف مناورتين حتى تنجح كل منهما مرتين متتاليتين." }
      ] },
    { id: "L11", where: "road", wk: 4, en: "Residential streets, speed humps, speed choice", ar: "الشوارع السكنية والمطبات واختيار السرعة", skills: [11, 27], ch: ["c-speed", "c-saudi"], dg: [],
      items: [
        { en: "Spot humps early; cross them slowly and straight.", ar: "اكتشف المطبات مبكرا واعبرها ببطء وباستقامة." },
        { en: "20 to 40 km/h near homes and schools; watch for children and cars reversing out of gates.", ar: "من 20 إلى 40 كم/س قرب المنازل والمدارس؛ وانتبه للأطفال والسيارات الخارجة من البوابات." }
      ] },
    { id: "L12", where: "road", wk: 5, en: "Junctions, traffic lights, pedestrian crossings", ar: "التقاطعات والإشارات الضوئية ومعابر المشاة", skills: [14, 16], ch: ["c-junctions"], dg: ["dg-170", "dg-174", "dg-192"],
      items: [
        { en: "Stop behind the line at red. Right turn on red only after a full stop and if allowed.", ar: "توقف خلف الخط عند الأحمر. الانعطاف يمينا عند الأحمر فقط بعد وقوف تام وإن كان مسموحا." },
        { en: "Amber: stop if you safely can.", ar: "الأصفر: توقف إن استطعت ذلك بأمان." },
        { en: "Give way to pedestrians on the crossing; never stop on it.", ar: "أعط الأولوية للمشاة على المعبر ولا تتوقف عليه أبدا." }
      ] },
    { id: "L13", where: "road", wk: 5, en: "Roundabouts, small then multi-lane", ar: "الدوارات الصغيرة ثم متعددة المسارات", skills: [15], ch: ["c-junctions"], dg: ["dg-185"],
      items: [
        { en: "Give way to vehicles already on the roundabout (from the left).", ar: "أعط الأولوية للمركبات داخل الدوار (القادمة من اليسار)." },
        { en: "Lane choice: right lane for the first exit, left lanes for later exits; signal right before leaving.", ar: "اختيار المسار: الأيمن للمخرج الأول والأيسر للمخارج اللاحقة؛ وأعط إشارة اليمين قبل الخروج." },
        { en: "Watch for cars cutting across lanes.", ar: "انتبه للسيارات التي تقطع المسارات." }
      ] },
    { id: "L14", where: "road", wk: 6, en: "U-turn slots, signalled U-turns, service roads", ar: "فتحات الدوران للخلف والدوران عند الإشارات وطرق الخدمة", skills: [17, 18], ch: ["c-junctions", "c-saudi"], dg: [],
      items: [
        { en: "U-turn from the far-left lane; signal left early; give way to traffic from every other direction.", ar: "الدوران للخلف من أقصى المسار الأيسر؛ والإشارة يسارا مبكرا؛ وإعطاء الأولوية للمركبات من كل الاتجاهات." },
        { en: "Turn into the nearest safe lane, then build speed.", ar: "ادخل أقرب مسار آمن ثم زد السرعة." },
        { en: "Leave by the slip exit to a service road; rejoin through the short entry.", ar: "اخرج من مخرج الطريق إلى طريق الخدمة وعد عبر المدخل القصير." }
      ] },
    { id: "L15", where: "road", wk: 6, en: "Multi-lane roads, lane changes, meeting and overtaking", ar: "الطرق متعددة المسارات وتغيير المسار والمقابلة والتجاوز", skills: [12, 28], ch: ["c-road", "c-overtake"], dg: ["dg-164"],
      items: [
        { en: "Lane changes with MSM and a blind-spot check every time.", ar: "تغيير المسار بالمرايا والإشارة والمناورة مع فحص النقطة العمياء في كل مرة." },
        { en: "Overtake on the left only when clear; do not cut in.", ar: "التجاوز من اليسار فقط عندما يكون الطريق خاليا؛ دون قطع الطريق." }
      ] },
    { id: "L16", where: "road", wk: 7, en: "Mixed city route, cameras, defensive driving", ar: "مسار مختلط في المدينة والكاميرات والقيادة الوقائية", skills: [14, 15, 28, 35], ch: ["c-saudi", "c-law"], dg: [],
      items: [
        { en: "Name what Saher detects at each camera you pass.", ar: "اذكر ما يرصده ساهر عند كل كاميرا تمر بها." },
        { en: "Let tailgaters pass; keep your gap.", ar: "دع من يقترب من الخلف يتجاوزك وحافظ على المسافة." }
      ] },
    { id: "L17", where: "road", wk: 7, en: "Highway: joining, lane discipline, leaving", ar: "الطريق السريع: الدخول والالتزام بالمسار والخروج", skills: [29], ch: ["c-highways", "c-speed"], dg: ["dg-126"],
      items: [
        { en: "Build speed on the slip road and merge into a gap.", ar: "زد السرعة على طريق الدخول واندمج في فراغ مناسب." },
        { en: "Two-second gap or more; plan the exit about 2 km ahead.", ar: "فاصل ثانيتين أو أكثر؛ وخطط للخروج قبل نحو 2 كم." }
      ] },
    { id: "L18", where: "road", wk: 7, en: "Highway and rural road, fuel-efficient driving", ar: "الطريق السريع والطريق الريفي والقيادة الاقتصادية", skills: [13, 29, 30], ch: ["c-highways", "c-speed", "c-saudi"], dg: [],
      items: [
        { en: "Smooth acceleration, early lift-off, cruise control.", ar: "تسارع سلس وتخفيف مبكر للوقود واستخدام مثبت السرعة." },
        { en: "Camels, sand and fatigue on open roads.", ar: "الجمال والرمال والإرهاق على الطرق المفتوحة." }
      ] },
    { id: "L19", where: "road", wk: 8, en: "Night drive and weather briefing", ar: "القيادة ليلا وشرح الأحوال الجوية", skills: [31, 32], ch: ["c-weather"], dg: [],
      items: [
        { en: "Dipped and main beam correctly; do not stare at oncoming lights.", ar: "استخدام الضوء المنخفض والعالي بشكل صحيح؛ ولا تحدق في أضواء المركبات المقابلة." },
        { en: "Talk through the drills for dust, rain and heat.", ar: "مراجعة الإجراءات عند الغبار والمطر والحرارة." }
      ] },
    { id: "L20", where: "road", wk: 8, en: "Independent drive; passengers, loads, accident drill", ar: "قيادة مستقلة؛ الركاب والحمولة وإجراءات الحوادث", skills: [33, 34, 36], ch: ["c-driver", "c-incidents"], dg: [],
      items: [
        { en: "15 to 20 minutes following signs to a named place, then a sat nav.", ar: "من 15 إلى 20 دقيقة باتباع اللوحات إلى مكان محدد ثم باستخدام الملاحة." },
        { en: "Check every passenger's belt before moving off.", ar: "تحقق من حزام كل راكب قبل الانطلاق." },
        { en: "Role-play the accident drill.", ar: "تمثيل إجراءات الحادث." }
      ] },
    { id: "L21", where: "road", wk: 8, en: "Full mock test, marked like the real thing", ar: "اختبار تجريبي كامل يقيم كالاختبار الحقيقي", skills: [], ch: ["c-tests"], dg: [], mock: "L21",
      items: [
        { en: "Yard manoeuvres plus a road route; directions only, no coaching.", ar: "مناورات الساحة ثم مسار على الطريق؛ توجيهات فقط دون تعليم." },
        { en: "Mark on the mock sheet; any Serious mark repeats the lesson that covers it.", ar: "سجل النتائج في ورقة التقييم؛ وأي خطأ جسيم يعني إعادة الدرس المتعلق به." }
      ] }
  ],

  /* ---------- 36 skills (tracker) ---------- */
  // [id, en, ar, group, where, est hours, ksa, teachEn, teachAr, lv4En, lv4Ar, chapters]
  skillGroups: { A: { en: "Basics", ar: "الأساسيات" }, B: { en: "Control and positioning", ar: "التحكم والتمركز" }, C: { en: "Observation, signals, planning", ar: "المراقبة والإشارات والتخطيط" }, D: { en: "Junctions, roundabouts, crossings", ar: "التقاطعات والدوارات والمعابر" }, E: { en: "Manoeuvres", ar: "المناورات" }, F: { en: "Road types", ar: "أنواع الطرق" }, G: { en: "Conditions", ar: "الظروف" }, H: { en: "Routes", ar: "المسارات" }, I: { en: "Saudi extras", ar: "إضافات سعودية" }, M: { en: "Manual only (idle)", ar: "يدوي فقط (غير مستخدم)" } },
  skills: [
    [1, "Legal responsibilities (Saudi)", "المسؤوليات النظامية (السعودية)", "A", "Home, Yard", 0.25, 0, "Licence, Istimara, insurance, Fahas; no unlicensed road driving; seatbelt and phone law.", "الرخصة والاستمارة والتأمين والفحص الدوري؛ لا قيادة على الطريق دون رخصة؛ أنظمة الحزام والهاتف.", "Lists what must be valid before any drive.", "تذكر ما يجب أن يكون ساريا قبل أي قيادة.", ["c-driver", "c-licence"]],
    [2, "Safety checks", "فحوص السلامة", "A", "Yard", 0.5, 0, "Walk-round: tyres (pressure, tread, heat damage), lights, leaks, glass, coolant, oil, washer fluid.", "الفحص حول السيارة: الإطارات (الضغط والنقشة وأضرار الحرارة) والأضواء والتسريبات والزجاج وسائل التبريد والزيت وسائل الغسيل.", "Does the walk-round unprompted in under 3 minutes.", "يجري الفحص دون تذكير في أقل من 3 دقائق.", ["c-car"]],
    [3, "Cockpit checks", "إعداد المقصورة", "A", "Yard", 0.5, 0, "Doors, seat, steering, seatbelt, mirrors; parking brake on and P before starting.", "الأبواب والمقعد والمقود والحزام والمرايا؛ فرامل الانتظار وP قبل التشغيل.", "Runs the drill in order every time.", "ينفذ الخطوات بالترتيب في كل مرة.", ["c-driver"]],
    [4, "Security", "تأمين السيارة", "A", "Yard", 0.25, 0, "Lock up, valuables out of sight, park in lit places, never leave the engine running unattended.", "أغلق السيارة، وأخف المقتنيات، وقف في أماكن مضاءة، ولا تترك المحرك يعمل دون رقابة.", "Secures the car without reminders.", "يؤمن السيارة دون تذكير.", ["c-parking"]],
    [5, "Controls and instruments", "أدوات التحكم والعدادات", "B", "Yard", 1, 0, "Foot on brake to start and shift; P, R, N, D; pull-push steering; warning lights.", "القدم على الفرامل للتشغيل وتغيير الوضع؛ P وR وN وD؛ التوجيه بالسحب والدفع؛ أضواء التحذير.", "Operates everything with eyes on the road.", "يستخدم كل الأدوات وعيناه على الطريق.", ["c-car"]],
    [6, "Moving away and stopping", "الانطلاق والتوقف", "B", "Yard", 2, 0, "POM: brake, D, mirrors, left blind spot, signal, release brake, creep. Stop: ease off, brake progressively.", "التحضير والملاحظة والتحرك: الفرامل ثم D ثم المرايا والنقطة العمياء اليسرى والإشارة ثم رفع القدم والزحف. التوقف: تخفيف الوقود والفرملة التدريجية.", "Smooth, blind spot checked every time.", "سلس، ويفحص النقطة العمياء في كل مرة.", ["c-road"]],
    [7, "Safe positioning and lane discipline", "التمركز الآمن والالتزام بالمسار", "B", "Yard, Road", 1.5, 0, "Centre of lane; about 1 m from parked cars; keep right unless overtaking.", "منتصف المسار؛ ونحو متر من السيارات المتوقفة؛ والالتزام باليمين إلا عند التجاوز.", "Holds position through bends and past obstacles.", "يحافظ على موضعه في المنعطفات وعند تجاوز العوائق.", ["c-road"]],
    [8, "Mirrors: vision and use", "المرايا: الرؤية والاستخدام", "C", "Yard, Road", 1, 0, "Interior then door mirror before every change; shoulder check before moving sideways.", "المرآة الداخلية ثم الجانبية قبل كل تغيير؛ والنظر فوق الكتف قبل التحرك جانبيا.", "Mirrors before every change, unprompted.", "ينظر في المرايا قبل كل تغيير دون تذكير.", ["c-road"]],
    [9, "Signals", "الإشارات", "C", "Yard, Road", 0.5, 0, "Signal in good time, cancel after; read others' signals without trusting them blindly.", "أعط الإشارة في وقت مناسب وألغها بعده؛ واقرأ إشارات الآخرين دون الثقة العمياء بها.", "Clear, timely, never misleading.", "واضحة وفي وقتها ولا تضلل.", ["c-road", "c-signs"]],
    [10, "Anticipation and planning", "التوقع والتخطيط", "C", "Yard, Road", 1.5, 0, "Scan far, middle, near, mirrors; spot clues; ease off early.", "انظر بعيدا ثم للمنتصف ثم قريبا ثم للمرايا؛ والتقط المؤشرات؛ وخفف مبكرا.", "Reacts early; rarely needs firm braking.", "يتصرف مبكرا ونادرا ما يحتاج فرملة قوية.", ["c-users"]],
    [11, "Use of speed", "استخدام السرعة", "C", "Road", 1, 0, "Limit is a ceiling; speed for visibility, surface and pedestrians; no crawling on fast roads.", "الحد سقف؛ والسرعة حسب الرؤية وسطح الطريق والمشاة؛ ودون بطء شديد على الطرق السريعة.", "Right speed without looking at the instructor.", "يختار السرعة المناسبة دون النظر إلى المدرب.", ["c-speed"]],
    [12, "Other traffic: meeting, crossing, overtaking", "المركبات الأخرى: المقابلة والعبور والتجاوز", "C", "Road", 1.5, 0, "Meeting on narrow streets, crossing oncoming traffic when turning left, overtaking on the left only.", "المقابلة في الشوارع الضيقة، وعبور المسار المقابل عند الانعطاف يسارا، والتجاوز من اليسار فقط.", "Judges gaps safely and decisively.", "يقدر الفراغات بأمان وحزم.", ["c-overtake"]],
    [13, "Fuel-efficient driving", "القيادة الاقتصادية", "C", "Road", 0.5, 0, "Gentle acceleration, early lift-off, steady speed, correct tyre pressure.", "تسارع لطيف وتخفيف مبكر وسرعة ثابتة وضغط إطارات صحيح.", "Smooth drive with few harsh inputs.", "قيادة سلسة بقليل من الحركات الحادة.", ["c-speed"]],
    [14, "Junctions and traffic lights", "التقاطعات والإشارات الضوئية", "D", "Yard, Road", 2.5, 0, "MSPSL. Full stop at Stop. Right turn stays tight; left turn crosses oncoming lanes.", "المرايا والإشارة والتمركز والسرعة والنظر. وقوف تام عند قف. الانعطاف يمينا قريب، ويسارا يعبر المسار المقابل.", "Right speed and lane; gives way correctly.", "سرعة ومسار صحيحان ويعطي الأولوية بشكل صحيح.", ["c-junctions"]],
    [15, "Roundabouts", "الدوارات", "D", "Road", 2, 0, "Anticlockwise; give way to traffic already circulating; lane by exit; signal right before leaving.", "عكس عقارب الساعة؛ والأولوية لمن داخل الدوار؛ والمسار حسب المخرج؛ وإشارة اليمين قبل الخروج.", "Lane chosen early; no stopping when clear; no forcing in.", "يختار المسار مبكرا، ولا يتوقف دون داع، ولا يقتحم.", ["c-junctions"]],
    [16, "Pedestrian crossings", "معابر المشاة", "D", "Road", 0.5, 0, "Scan pavements; stop for anyone on or stepping onto the crossing; never overtake a car stopped at one.", "راقب الأرصفة؛ وتوقف لكل من على المعبر أو يهم بعبوره؛ ولا تتجاوز سيارة متوقفة عنده.", "Sees pedestrians early and stops smoothly.", "يرى المشاة مبكرا ويتوقف بسلاسة.", ["c-junctions", "c-users"]],
    [17, "U-turns and U-turn slots", "الدوران للخلف وفتحاته", "D", "Road", 1, 1, "Far-left lane, signal left early, slow in the slot, give way to all other directions.", "أقصى المسار الأيسر وإشارة يسار مبكرة وسرعة بطيئة في الفتحة وأولوية لكل الاتجاهات الأخرى.", "Full-lock turn in one move into a safe gap.", "يدور بحركة واحدة إلى فراغ آمن.", ["c-junctions", "c-saudi"]],
    [18, "Service roads, entries and exits", "طرق الخدمة والمداخل والمخارج", "D", "Road", 1, 1, "Slip exit, slow service-road speeds, parked and reversing cars, rejoining through a short entry.", "مخرج الطريق، وسرعات منخفضة في طريق الخدمة، والسيارات المتوقفة والراجعة، والعودة عبر مدخل قصير.", "Exits and merges without cutting across lanes.", "يخرج ويندمج دون قطع المسارات.", ["c-saudi"]],
    [19, "Reversing", "الرجوع للخلف", "E", "Yard", 1.5, 0, "Mainly through the rear window; small inputs; straight then round a corner.", "النظر أساسا من الزجاج الخلفي؛ وحركات صغيرة؛ مستقيما ثم حول زاوية.", "Slow, straight, eyes moving.", "بطيء ومستقيم وعيناه تتنقلان.", ["c-road"]],
    [20, "Three-point turn", "الدوران بثلاث حركات", "E", "Yard", 1, 0, "Forward full left lock, reverse full right lock, forward; observe before each leg.", "للأمام مع لف المقود يسارا، ثم للخلف مع لفه يمينا، ثم للأمام؛ مع المراقبة قبل كل حركة.", "Three moves, no kerb contact.", "ثلاث حركات دون لمس الرصيف.", ["c-tests"]],
    [21, "Parallel parking", "الوقوف الموازي", "E", "Yard", 2.5, 0, "Align rear bumpers, full lock to kerb, straighten at 45 degrees, opposite lock.", "محاذاة المصدات الخلفية، ولف المقود نحو الرصيف، والتعديل عند 45 درجة، ثم اللف المعاكس.", "Parked parallel and close, one go or one correction.", "يقف موازيا وقريبا من محاولة واحدة أو بتصحيح واحد.", ["c-tests", "c-parking"]],
    [22, "Reverse bay (garage) parking", "الوقوف الخلفي (الكراج)", "E", "Yard", 2, 0, "Drive past, mirror reference, full lock, straighten when parallel.", "تجاوز الموقف، والمرآة مرجعا، ولف المقود، والتعديل عند التوازي.", "Centred, no cones touched.", "في المنتصف دون لمس الأقماع.", ["c-tests", "c-parking"]],
    [23, "Forward and angle parking", "الوقوف الأمامي والمائل", "E", "Yard", 1, 0, "Swing wide, turn in late, creep to the line; reverse out with full observation.", "ابتعد قليلا ثم انعطف متأخرا وازحف حتى الخط؛ واخرج للخلف مع مراقبة كاملة.", "Centred and straight, first time.", "في المنتصف ومستقيم من المحاولة الأولى.", ["c-parking"]],
    [24, "Slope (bridge) stop and start", "التوقف والانطلاق على المنحدر (الجسر)", "E", "Yard", 1, 1, "Brake and parking brake on the slope; gentle gas as the brake releases.", "الفرامل وفرامل الانتظار على المنحدر؛ ووقود لطيف عند رفع الفرامل.", "Zero roll-back, smooth start.", "دون أي رجوع وانطلاق سلس.", ["c-tests"]],
    [25, "Yard figures: 8, T, X, S-bend", "مسارات الساحة: 8 وT وX وS", "E", "Yard", 1.5, 1, "Figure 8, S-bend, T and X tracks forward and in reverse between cones.", "مسار 8 وS وT وX للأمام وللخلف بين الأقماع.", "Clears every track with no cone or line touched.", "ينهي كل المسارات دون لمس قمع أو خط.", ["c-tests"]],
    [26, "Emergency stop", "التوقف الاضطراري", "E", "Yard", 0.5, 0, "Both hands, brake hard and hold; ABS pulses; then mirrors and blind spots.", "اليدان على المقود والفرامل بقوة وثبات؛ ونبض مانع الانغلاق؛ ثم المرايا والنقاط العمياء.", "Fast, straight, in control.", "سريع ومستقيم وتحت السيطرة.", ["c-speed"]],
    [27, "Residential streets and speed humps", "الشوارع السكنية والمطبات", "F", "Road", 1, 1, "20 to 40 km/h; unmarked humps; children, delivery bikes, cars reversing out of gates.", "من 20 إلى 40 كم/س؛ ومطبات غير مطلية؛ والأطفال ودراجات التوصيل والسيارات الخارجة من البوابات.", "Sees humps early, crosses slowly.", "يرى المطبات مبكرا ويعبرها ببطء.", ["c-saudi", "c-speed"]],
    [28, "Multi-lane urban roads", "الطرق الحضرية متعددة المسارات", "F", "Road", 2, 0, "Early lane choice, one lane at a time, blind spot, sudden cut-ins.", "اختيار المسار مبكرا، ومسار واحد في كل مرة، والنقطة العمياء، والانحراف المفاجئ من الآخرين.", "Safe lane changes with MSM every time.", "يغير المسار بأمان وبالمرايا والإشارة في كل مرة.", ["c-road"]],
    [29, "Highways", "الطرق السريعة", "F", "Road", 2, 0, "Slip road speed, merge, keep right, two-second gap, plan exits 2 km ahead.", "سرعة طريق الدخول، والاندماج، والالتزام باليمين، وفاصل ثانيتين، والتخطيط للخروج قبل 2 كم.", "Joins, cruises and exits without affecting others.", "يدخل ويسير ويخرج دون التأثير على الآخرين.", ["c-highways"]],
    [30, "Rural and desert roads", "الطرق الريفية والصحراوية", "F", "Road, Home", 0.25, 1, "Camels and livestock at dusk; sand on the tarmac; long gaps between fuel; fatigue.", "الجمال والماشية عند الغروب؛ والرمال على الأسفلت؛ وبعد محطات الوقود؛ والإرهاق.", "Explains each hazard and the response.", "يشرح كل خطر وطريقة التعامل معه.", ["c-saudi"]],
    [31, "Driving in the dark", "القيادة في الظلام", "G", "Road", 1.5, 0, "Dipped in town, main beam on unlit roads and dip for others.", "الضوء المنخفض في المدينة والعالي على الطرق غير المضاءة مع خفضه للآخرين.", "Correct lights; speed matched to what can be seen.", "أضواء صحيحة وسرعة تناسب مدى الرؤية.", ["c-weather"]],
    [32, "Weather: heat, dust, rain, fog", "الطقس: الحرارة والغبار والمطر والضباب", "G", "Road, Home", 0.5, 1, "The drill for each: see Lights, night and weather.", "الإجراء لكل حالة: انظر فصل الأضواء والقيادة ليلا والطقس.", "States the drill for each.", "يذكر الإجراء لكل حالة.", ["c-weather", "c-saudi"]],
    [33, "Passengers, children and loads", "الركاب والأطفال والحمولة", "G", "Home, Road", 0.25, 0, "Driver responsible for belts and child seats; secure loose items.", "السائق مسؤول عن الأحزمة ومقاعد الأطفال؛ وتثبيت الأغراض.", "Checks belts before moving off.", "يتحقق من الأحزمة قبل الانطلاق.", ["c-driver"]],
    [34, "Independent driving, signs and sat nav", "القيادة المستقلة واللوحات والملاحة", "H", "Road", 1.5, 0, "Follow signs to a named place, then a sat nav; a wrong turn is fine if safe.", "اتباع اللوحات إلى مكان محدد ثم الملاحة؛ والانعطاف الخاطئ مقبول إن كان آمنا.", "Drives the route with no instructor input.", "يقود المسار دون تدخل المدرب.", ["c-signs"]],
    [35, "Camera awareness and defensive driving", "الوعي بالكاميرات والقيادة الوقائية", "I", "Road", 0.5, 1, "What Saher catches; leave space; let tailgaters pass.", "ما يرصده ساهر؛ وترك المسافة؛ والسماح لمن يلاصقك بالتجاوز.", "Calm and legal under pressure.", "هادئ وملتزم تحت الضغط.", ["c-law", "c-saudi"]],
    [36, "Accidents and breakdowns", "الحوادث والأعطال", "I", "Home", 0.5, 1, "Stop, hazards, injuries, call, report, triangle.", "التوقف وأضواء التحذير والإصابات والاتصال والبلاغ والمثلث.", "Recites and role-plays the drill.", "يذكر الإجراء ويمثله.", ["c-incidents"]],
    ["M1", "Clutch control and biting point", "التحكم بالقابض ونقطة التعشيق", "M", "Idle", 0, 0, "Not needed in the automatic Fronx.", "غير مطلوب في الفرونكس الأوتوماتيكية.", "", "", []],
    ["M2", "Changing gear up and down", "تغيير التروس صعودا ونزولا", "M", "Idle", 0, 0, "The gearbox selects gears itself.", "ناقل الحركة يختار التروس تلقائيا.", "", "", []],
    ["M3", "Hill start with clutch and handbrake, stalling", "الانطلاق على المرتفع بالقابض وفرامل اليد وتوقف المحرك", "M", "Idle", 0, 0, "Replaced by skill 24 with hill hold.", "تحل محلها المهارة 24 مع مساعد صعود المرتفعات.", "", "", []]
  ],

  /* ---------- instructor checklists ---------- */
  checklists: {
    controls: { en: "Fronx controls tour: tick when Hind can find each without looking", ar: "جولة أدوات التحكم في الفرونكس: ضع علامة عندما تصل هند إلى كل أداة دون النظر", items: [
      ["Seat slide, backrest, height; steering wheel adjustment", "تحريك المقعد ومسند الظهر والارتفاع؛ وضبط المقود"],
      ["Mirrors: interior, left, right; electric adjuster", "المرايا: الداخلية واليسرى واليمنى؛ ومفتاح الضبط الكهربائي"],
      ["Seatbelt and its warning light", "حزام الأمان وضوء التنبيه الخاص به"],
      ["Start button with foot on brake", "زر التشغيل مع القدم على الفرامل"],
      ["Gear selector and the P, R, N, D display", "ناقل الحركة وعرض P وR وN وD"],
      ["Parking brake: on, off, warning light", "فرامل الانتظار: تفعيل وإلغاء وضوء التنبيه"],
      ["Indicator stalk and wiper stalk", "مقبض الإشارات ومقبض المساحات"],
      ["Lights: off, auto, dipped, main beam, fog; headlight flash", "الأضواء: إيقاف وتلقائي ومنخفض وعال وضباب؛ ووميض الأضواء"],
      ["Hazard light button", "زر أضواء التحذير"],
      ["Horn", "المنبه"],
      ["Windscreen wash and wipe, rear wiper, demister", "غسيل الزجاج والمساحات والمساحة الخلفية ومزيل الضباب"],
      ["Air conditioning and recirculation", "المكيف وتدوير الهواء الداخلي"],
      ["Speedometer, fuel, temperature, warning lights", "عداد السرعة والوقود والحرارة وأضواء التحذير"],
      ["Bonnet release, fuel flap release, boot", "فتح غطاء المحرك وغطاء خزان الوقود والصندوق"],
      ["Door locks, child locks, window lock", "أقفال الأبواب وقفل الأطفال وقفل النوافذ"]] },
    cockpit: { en: "Cockpit drill (every drive)", ar: "إعداد المقصورة (قبل كل قيادة)", items: [
      ["**Doors** closed and locked", "**الأبواب** مغلقة ومقفلة", "A half-closed door can open on a bend.", "الباب غير المحكم قد ينفتح في المنعطف."],
      ["**Seat**: knees slightly bent at full brake; back upright", "**المقعد**: الركبتان منثنيتان قليلا عند الضغط الكامل على الفرامل؛ والظهر مستقيم", "Too far back and the brake cannot be pressed fully in an emergency.", "إذا كان المقعد بعيدا لا يمكن الضغط الكامل على الفرامل في الطوارئ."],
      ["**Steering**: wrists rest on the top of the wheel with arms straight", "**المقود**: يصل الرسغان إلى أعلى المقود والذراعان ممدودتان", "Keeps arms bent while driving for control.", "يبقي الذراعين منثنيتين أثناء القيادة للتحكم."],
      ["**Seatbelt** on, flat across the shoulder and low on the hips", "**الحزام** مربوط ومستو على الكتف ومنخفض على الوركين", "Compulsory for everyone in the car.", "إلزامي لكل من في السيارة."],
      ["**Mirrors**: interior frames the rear window; door mirrors show a sliver of the car", "**المرايا**: الداخلية تغطي الزجاج الخلفي؛ والجانبية تظهر جزءا صغيرا من السيارة", "Set before moving, never while driving.", "تضبط قبل التحرك لا أثناء القيادة."],
      ["Parking brake on, selector in **P**, foot on brake, start", "فرامل الانتظار مفعلة، والناقل على **P**، والقدم على الفرامل، ثم التشغيل", "The car will not start unless the brake is pressed.", "لن تعمل السيارة دون الضغط على الفرامل."]] },
    movingoff: { en: "Moving off (POM)", ar: "الانطلاق (التحضير والملاحظة والتحرك)", items: [
      ["**Prepare**: foot on brake, select D, release parking brake", "**التحضير**: القدم على الفرامل، واختيار D، وإلغاء فرامل الانتظار", "The car creeps as soon as the brake lifts.", "تزحف السيارة بمجرد رفع القدم عن الفرامل."],
      ["**Observe**: interior mirror, left mirror, look over the **left** shoulder", "**الملاحظة**: المرآة الداخلية ثم اليسرى ثم النظر فوق الكتف **الأيسر**", "Traffic passes on your left when parked at the right kerb.", "تمر المركبات من يسارك عند الوقوف بجانب الرصيف الأيمن."],
      ["Signal left if it helps anyone", "أعط إشارة اليسار إذا كانت تفيد أحدا", "", ""],
      ["**Move**: lift the brake, creep, gentle gas, steer out", "**التحرك**: ارفع القدم عن الفرامل وازحف ثم وقود لطيف ووجه السيارة", "", ""]] },
    lanes: { en: "Lane discipline", ar: "الالتزام بالمسار", items: [
      ["Keep to the **right** lane unless overtaking or turning left", "الزم المسار **الأيمن** إلا عند التجاوز أو الانعطاف يسارا", "Handbook: right lane rule (p.103).", "الدليل: قاعدة المسار الأيمن (ص 103)."],
      ["Choose the lane from the road arrows, early", "اختر المسار مبكرا من الأسهم على الطريق", "", ""],
      ["MSM and blind spot before every change; one lane at a time", "مرايا وإشارة ومناورة والنقطة العمياء قبل كل تغيير؛ ومسار واحد في كل مرة", "", ""],
      ["Never cross a continuous line to change lane", "لا تعبر الخط المتصل لتغيير المسار", "", ""]] },
    junctions: { en: "Junctions (MSPSL)", ar: "التقاطعات (المرايا والإشارة والتمركز والسرعة والنظر)", items: [
      ["**Mirrors** well before the junction", "**المرايا** قبل التقاطع بوقت كاف", "", ""],
      ["**Signal** in good time", "**الإشارة** في وقت مناسب", "", ""],
      ["**Position**: right turn near the right kerb; left turn just right of the centre line", "**التمركز**: للانعطاف يمينا قرب الرصيف الأيمن؛ ولليسار يمين خط المنتصف مباشرة", "", ""],
      ["**Speed**: slow enough to stop at the line", "**السرعة**: بطيئة بما يكفي للتوقف عند الخط", "", ""],
      ["**Look**: right, left, right again; pedestrians in the road you enter", "**النظر**: يمينا ثم يسارا ثم يمينا؛ والمشاة في الطريق الذي تدخله", "", ""]] },
    roundabouts: { en: "Roundabouts", ar: "الدوارات", items: [
      ["Plan the exit and lane on approach", "خطط للمخرج والمسار عند الاقتراب", "Handbook p.121.", "الدليل ص 121."],
      ["Give way to vehicles **already on** the roundabout", "أعط الأولوية للمركبات **داخل** الدوار", "Handbook p.155.", "الدليل ص 155."],
      ["Circulate anticlockwise in the chosen lane", "سر عكس عقارب الساعة في المسار المختار", "", ""],
      ["Signal right after passing the exit before yours", "أعط إشارة اليمين بعد المخرج الذي يسبق مخرجك", "Handbook p.122.", "الدليل ص 122."]] },
    parking: { en: "Parking", ar: "الوقوف", items: [
      ["Legal and safe place: no bays for the disabled, crossings, junctions or driveways", "مكان نظامي وآمن: لا مواقف لذوي الإعاقة ولا معابر ولا تقاطعات ولا مداخل", "", ""],
      ["Observation all round before and during", "مراقبة من جميع الجهات قبل الحركة وأثناءها", "", ""],
      ["Creep speed only", "سرعة زحف فقط", "", ""],
      ["Secure: P, parking brake, engine off, mirrors before opening the door", "التأمين: P وفرامل الانتظار وإيقاف المحرك والمرايا قبل فتح الباب", "", ""]] },
    mock: { en: "Mock marking sheet (L10 and L21)", ar: "ورقة تقييم الاختبار التجريبي (الدرسان 10 و21)", items: [
      ["Cockpit drill and seatbelt before starting", "إعداد المقصورة والحزام قبل التشغيل"], ["Moving off: mirrors, blind spot, signal", "الانطلاق: المرايا والنقطة العمياء والإشارة"],
      ["Reverse (garage) parking", "الوقوف الخلفي (الكراج)"], ["Parallel parking", "الوقوف الموازي"], ["Three-point turn", "الدوران بثلاث حركات"],
      ["Slope stop and start, no roll-back", "التوقف والانطلاق على المنحدر دون رجوع"], ["Yard figures, no cones touched", "مسارات الساحة دون لمس الأقماع"], ["Emergency stop", "التوقف الاضطراري"],
      ["Mirrors before every change", "المرايا قبل كل تغيير"], ["Signals: timely and cancelled", "الإشارات: في وقتها وتلغى بعدها"], ["Lane position and discipline", "التمركز والالتزام بالمسار"],
      ["Junctions and giving way", "التقاطعات وإعطاء الأولوية"], ["Roundabouts", "الدوارات"], ["Speed: within limit, right for conditions", "السرعة: ضمن الحد ومناسبة للظروف"],
      ["Response to signs and lights", "الاستجابة للوحات والإشارات"], ["Stopping and securing the car", "التوقف وتأمين السيارة"]] },
    week: { en: "The week before the test", ar: "الأسبوع الذي يسبق الاختبار", items: [
      ["Every core and KSA skill at level 4 in the tracker", "كل المهارات الأساسية والسعودية في المستوى 4"],
      ["Three timed theory mocks in a row at 90% or above", "ثلاثة اختبارات نظرية تجريبية متتالية بنسبة 90% أو أكثر"],
      ["Full mock (L21) passed with no Serious marks", "النجاح في الاختبار التجريبي الكامل (الدرس 21) دون أخطاء جسيمة"],
      ["Test booking confirmed with the school; fees paid on Absher", "تأكيد موعد الاختبار مع المدرسة؛ ودفع الرسوم عبر أبشر"]] },
    day: { en: "On the day", ar: "يوم الاختبار", items: [
      ["ID or Iqama, school file and booking confirmation", "الهوية أو الإقامة وملف المدرسة وتأكيد الحجز"],
      ["Glasses or contact lenses if the medical recorded them", "النظارة أو العدسات إذا سجلها الفحص الطبي"],
      ["Flat, thin-soled closed shoes", "حذاء مغلق ومسطح بنعل رقيق"],
      ["Arrive 30 minutes early; eat and drink water", "الوصول قبل 30 دقيقة؛ وتناول الطعام والماء"],
      ["Adjust seat and mirrors, belt on, before touching the selector", "ضبط المقعد والمرايا وربط الحزام قبل لمس ناقل الحركة"],
      ["Make mirror checks clearly visible", "اجعل النظر في المرايا واضحا للفاحص"],
      ["After a mistake, carry on calmly", "بعد أي خطأ تابع بهدوء"]] },
    school: { en: "Questions for the driving school", ar: "أسئلة لمدرسة القيادة", items: [
      ["How many theory questions, and what is the pass mark?", "كم عدد أسئلة الاختبار النظري وما درجة النجاح؟"],
      ["Which yard manoeuvres are in its practical test?", "ما مناورات الساحة في اختبارها العملي؟"],
      ["What is its rule on turning right at a red light?", "ما قاعدتها في الانعطاف يمينا عند الإشارة الحمراء؟"],
      ["How many training hours has Hind been assigned?", "كم ساعة تدريب حددت لهند؟"]] }
  }
};

/* ---------- learner sections: every Highway Code rule and handbook page, grouped by skill ----------
   Order follows the Saudi learner journey; licence and traffic law come last.
   hb: handbook section ids, optionally with a printed page range [id, from, to].
   hc: Highway Code rule ranges [from, to] or unit ids ("intro", "a1" to "a8", "other").
   use: course chapters whose teaching points, blocks and checklists appear in the section.
   signs: sign categories shown as a gallery. */
window.DC_DATA.course.groups = [
  { id: "ready", en: "Get ready: the car and you", ar: "الاستعداد: السيارة وأنت" },
  { id: "control", en: "Control and positioning", ar: "التحكم والتمركز" },
  { id: "observe", en: "Observation, signals and planning", ar: "المراقبة والإشارات والتخطيط" },
  { id: "junctions", en: "Junctions, roundabouts and crossings", ar: "التقاطعات والدوارات والمعابر" },
  { id: "manoeuvres", en: "Manoeuvres", ar: "المناورات" },
  { id: "roads", en: "Road types", ar: "أنواع الطرق" },
  { id: "conditions", en: "Driving conditions", ar: "ظروف القيادة" },
  { id: "saudi", en: "Routes, Saudi roads and incidents", ar: "المسارات وطرق المملكة والحوادث" },
  { id: "tests", en: "The tests", ar: "الاختبارات" },
  { id: "law", en: "Licence and traffic law", ar: "الرخصة ونظام المرور" }
];
window.DC_DATA.course.sections = [
  { id: "k2", skill: 2, g: "ready", hb: [], hc: ["a6"], use: [] },
  { id: "k3", skill: 3, g: "ready", hb: ["hb-duties"], hc: [[97, 102]], use: ["c-driver"] },
  { id: "k33", skill: 33, g: "ready", hb: ["hb-passengers"], hc: [], use: [] },
  { id: "k4", skill: 4, g: "ready", hb: [], hc: [], use: [], see: ["k2"] },
  { id: "k5", skill: 5, g: "ready", hb: ["hb-dash"], hc: [], use: ["c-car"] },
  { id: "k6", skill: 6, g: "control", hb: [], hc: [[159, 161]], use: [], checklists: ["movingoff"] },
  { id: "k7", skill: 7, g: "control", hb: ["hb-u3", "hb-general", "hb-roadparts", ["hb-lanechoice", 114, 120]], hc: [[127, 132]], use: ["c-road"], signs: ["markings"] },
  { id: "k8", skill: 8, g: "observe", hb: ["hb-lanechange"], hc: [], use: [], see: ["k6"] },
  { id: "k9", skill: 9, g: "observe", hb: ["hb-guidance", "hb-signs", "hb-police"], hc: [[103, 112]], use: ["c-signs"], signs: ["signals", "regulatory", "warning", "information"] },
  { id: "k10", skill: 10, g: "observe", hb: ["hb-u2", "hb-coop", "hb-assess"], hc: ["intro", [144, 151], [204, 215], [288, 290]], use: ["c-users"], signs: ["roadworks"] },
  { id: "k11", skill: 11, g: "observe", hb: ["hb-speed", "hb-u5", "hb-limits", "hb-choosespeed", "hb-distance", "hb-behaviour"], hc: [[124, 126]], use: ["c-speed"] },
  { id: "k12", skill: 12, g: "observe", hb: ["hb-priorityusers", "hb-u6", "hb-near", "hb-overtake", "hb-noovertake", "hb-safeovertake", "hb-overtakeissue"], hc: [[162, 169], [219, 225], [36, 46], [59, 88], [157, 158], [300, 307], "a1"], use: ["c-overtake"], signs: ["vehicle"] },
  { id: "k13", skill: 13, g: "observe", hb: ["hb-eco"], hc: [[123, 123]], use: [] },
  { id: "k14", skill: 14, g: "junctions", hb: ["hb-u4", "hb-lights", "hb-stopgive", ["hb-priority", 137, 153], ["hb-priority", 160, 161], ["hb-turning", 123, 124], "hb-rail"], hc: [[170, 183], [291, 299]], use: ["c-junctions"] },
  { id: "k15", skill: 15, g: "junctions", hb: [["hb-lanechoice", 121, 122], ["hb-priority", 154, 155]], hc: [[184, 190]], use: [], checklists: ["roundabouts"] },
  { id: "k16", skill: 16, g: "junctions", hb: ["hb-pedx"], hc: [[191, 199], [1, 35]], use: [] },
  { id: "k17", skill: 17, g: "junctions", hb: [["hb-priority", 156, 159]], hc: [], use: [] },
  { id: "k18", skill: 18, g: "junctions", hb: [], hc: [], use: [], see: ["k35"] },
  { id: "k19", skill: 19, g: "manoeuvres", hb: [["hb-turning", 125, 125]], hc: [[200, 203]], use: [] },
  { id: "k20", skill: 20, g: "manoeuvres", hb: [], hc: [], use: [], see: ["k19", "tests"] },
  { id: "k21", skill: 21, g: "manoeuvres", hb: [], hc: [], use: [], see: ["k23", "tests"] },
  { id: "k22", skill: 22, g: "manoeuvres", hb: [], hc: [], use: [], see: ["k23", "tests"] },
  { id: "k23", skill: 23, g: "manoeuvres", hb: ["hb-stopping"], hc: [[238, 252]], use: ["c-parking"] },
  { id: "k24", skill: 24, g: "manoeuvres", hb: [], hc: [], use: [], see: ["k5", "tests"] },
  { id: "k25", skill: 25, g: "manoeuvres", hb: [], hc: [], use: [], see: ["tests"] },
  { id: "k26", skill: 26, g: "manoeuvres", hb: [], hc: [[117, 122]], use: [] },
  { id: "k27", skill: 27, g: "roads", hb: [], hc: [[152, 153]], use: [] },
  { id: "k28", skill: 28, g: "roads", hb: [["hb-lanechoice", 114, 120]], hc: [[133, 143]], use: [] },
  { id: "k29", skill: 29, g: "roads", hb: [], hc: [[253, 274]], use: ["c-highways"] },
  { id: "k30", skill: 30, g: "roads", hb: [], hc: [[154, 156], [216, 218], [47, 58]], use: [] },
  { id: "k31", skill: 31, g: "conditions", hb: ["hb-vlights", "hb-vision"], hc: [[113, 116]], use: [] },
  { id: "k32", skill: 32, g: "conditions", hb: [], hc: [[226, 237]], use: ["c-weather"] },
  { id: "k34", skill: 34, g: "saudi", hb: [], hc: [], use: [], signs: ["direction"] },
  { id: "k35", skill: 35, g: "saudi", hb: [], hc: [], use: ["c-saudi"] },
  { id: "k36", skill: 36, g: "saudi", hb: ["hb-accidents"], hc: [[275, 287], "a7"], use: ["c-incidents"] },
  { id: "tests", g: "tests", en: "The theory and practical tests", ar: "الاختباران النظري والعملي", hb: [], hc: [], use: ["c-tests"] },
  { id: "k1", skill: 1, g: "law", hb: ["hb-intro", "hb-licence", "hb-traffic", "hb-violations"], hc: [[89, 96], "a3", "a8", "a5", "a4", "a2", "other"], use: ["c-licence", "c-law"] }
];
// old chapter ids -> section ids (for links in lessons, journey and questions)
window.DC_DATA.course.chToSec = { "c-car": "k5", "c-driver": "k3", "c-users": "k10", "c-signs": "k9", "c-road": "k7", "c-junctions": "k14", "c-speed": "k11", "c-overtake": "k12", "c-highways": "k29", "c-weather": "k32", "c-parking": "k23", "c-saudi": "k35", "c-incidents": "k36", "c-tests": "tests", "c-licence": "k1", "c-law": "k1", "c-ukref": "k12" };
