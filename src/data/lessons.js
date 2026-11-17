/* Practical lessons with their theory ("Before we start"), written for Darb from Moroor, DVSA and the Fronx manual. */
window.DC_DATA = window.DC_DATA || {};
window.DC_DATA.lessons2 = {
 "lessons": [
  {
   "id": "L1",
   "where": "quiet",
   "wk": 1,
   "en": "Safety checks, cockpit drill and controls",
   "ar": "فحوص السلامة وتجهيز المقعد وأدوات التحكم",
   "skills": [
    1,
    2,
    3,
    4,
    5
   ],
   "ch": [
    "c-car",
    "c-driver"
   ],
   "dg": [],
   "before": [
    {
     "en": "Drive only when **physically and mentally fit**.",
     "ar": "قُد المركبة فقط وأنت **لائق بدنيًا وذهنيًا**.",
     "src": "moroor",
     "ref": "89",
     "kind": "must",
     "topic": "k3",
     "fig": "hbf-90-1"
    },
    {
     "en": "Don't drive when injured, ill, **exhausted**, distracted or emotionally upset.",
     "ar": "لا تقُد وأنت مصاب أو مريض أو **منهك** أو مشتت الانتباه أو منفعل.",
     "src": "moroor",
     "ref": "89",
     "kind": "never",
     "topic": "k3"
    },
    {
     "en": "Before driving, **clean windows, lights and mirrors** and check tyres for damage.",
     "ar": "قبل القيادة، **نظّف النوافذ والأضواء والمرايا** وتأكد من سلامة الإطارات.",
     "src": "moroor",
     "ref": "91",
     "kind": "must",
     "topic": "k3",
     "fig": "hbf-92-1"
    },
    {
     "en": "Check that **lights, controls and brakes** work properly.",
     "ar": "تأكّد من حالة **الأضواء وعناصر التحكم والفرامل**.",
     "src": "moroor",
     "ref": "91",
     "kind": "must",
     "topic": "k3"
    },
    {
     "en": "Adjust **seat and mirrors**, and fasten belts for driver and passengers.",
     "ar": "اضبط **وضعية الجلوس والمرايا**، واربط الحزام للسائق والركاب.",
     "src": "moroor",
     "ref": "92",
     "kind": "must",
     "topic": "k3",
     "fig": "hbf-93-1"
    },
    {
     "en": "Inflate tyres to the **manufacturer's specification**; check pressures weekly when cold.",
     "ar": "اضبط ضغط الإطارات **حسب مواصفات الشركة المصنعة**، وافحصه أسبوعيًا والإطارات باردة.",
     "src": "dvsa",
     "ref": "Annex 6",
     "kind": "must",
     "topic": "k2"
    },
    {
     "en": "Car tyres need a tread depth of **at least ==1.6 mm==**.",
     "ar": "يجب ألا يقل عمق نقشة إطارات السيارة عن **==1.6 مم==**.",
     "src": "dvsa",
     "ref": "Annex 6",
     "kind": "number",
     "topic": "k2"
    },
    {
     "en": "Check **fluid levels at least weekly**; low brake fluid can cause brake failure.",
     "ar": "افحص **مستويات السوائل أسبوعيًا على الأقل**؛ فنقص سائل الفرامل قد يعطّلها.",
     "src": "dvsa",
     "ref": "Annex 6",
     "kind": "tip",
     "topic": "k2"
    },
    {
     "en": "If a warning light stays on after starting, **stop and investigate**.",
     "ar": "إذا بقي مصباح تحذير مضاءً بعد التشغيل أو أضاء أثناء القيادة، **توقّف وافحص المشكلة**.",
     "src": "dvsa",
     "ref": "Annex 6",
     "kind": "danger",
     "topic": "k2"
    },
    {
     "en": "A **red warning light** means stop immediately and check the vehicle manual.",
     "ar": "**مصباح التحكم الأحمر** يعني: عليك التوقف فورًا وراجع دليل المركبة.",
     "src": "moroor",
     "ref": "235",
     "kind": "must",
     "topic": "k5",
     "fig": "hbf-236-1"
    },
    {
     "en": "A **yellow warning light** means something is wrong; have the car checked soon.",
     "ar": "**مصباح التحكم الأصفر** يعني أن هناك خللًا؛ افحص المركبة في أقرب وقت ولا تتجاهله.",
     "src": "moroor",
     "ref": "235",
     "kind": "tip",
     "topic": "k5"
    },
    {
     "en": "Refuel when the gauge reaches **==a quarter== of a tank**.",
     "ar": "املأ خزان الوقود عندما يصل المؤشر إلى **==ربع== الخزان**.",
     "src": "moroor",
     "ref": "236",
     "kind": "number",
     "topic": "k5",
     "fig": "hbf-237-1"
    },
    {
     "en": "The **fuel gauge** shows how much fuel is left in the tank.",
     "ar": "**مؤشر الوقود** يُظهر مقدار الوقود المتبقي في الخزان.",
     "src": "moroor",
     "ref": "236",
     "kind": "tip",
     "topic": "k5"
    },
    {
     "en": "Avoid distractions like **phones, eating and drinking** while driving.",
     "ar": "تجنّب الملهيات مثل **الهاتف الجوال والأكل والشرب** أثناء القيادة.",
     "src": "moroor",
     "ref": "90",
     "kind": "tip",
     "topic": "k3",
     "fig": "hbf-91-1"
    },
    {
     "en": "**Never leave the car unlocked**, the engine running, or the key inside.",
     "ar": "**يُمنع ترك المركبة غير مقفلة** أو المحرك يعمل أو المفتاح بداخلها.",
     "src": "moroor",
     "ref": "96",
     "kind": "never",
     "topic": "k3",
     "fig": "hbf-97-1"
    }
   ],
   "car": [
    {
     "en": "Your Fronx is an **automatic**: only two pedals. **Right foot only** — brake on the left, accelerator on the right. Your left foot rests.",
     "ar": "سيارتك الفرونكس **أوتوماتيك**: دواستان فقط. استخدم **القدم اليمنى فقط**؛ الفرامل يسارًا والبنزين يمينًا، وتبقى القدم اليسرى مرتاحة.",
     "applies": "fronx",
     "ref": "Manual 5-14; My Fronx Guide"
    },
    {
     "en": "To start: key inside the car, lever in **P**, **press and hold the brake**, press START once.",
     "ar": "للتشغيل: المفتاح داخل السيارة، والذراع على **P**، ثم **اضغط الفرامل وثبّت قدمك**، واضغط زر التشغيل مرة واحدة.",
     "applies": "fronx",
     "ref": "Manual 5-14; My Fronx Guide"
    },
    {
     "en": "Your car is left-hand drive: the **lights and indicator stalk is on the left** of the wheel, wipers on the right. Leave the lights on **AUTO**.",
     "ar": "سيارتك مقودها على اليسار: **ذراع الأنوار والإشارات على يسار المقود** والمساحات على اليمين. اترك الأنوار على **AUTO**.",
     "applies": "fronx",
     "ref": "My Fronx Guide (Lights, indicators and wipers)"
    },
    {
     "en": "Set the **seat, head restraint, steering wheel, mirrors and belt** before you move — never while driving.",
     "ar": "اضبط **المقعد ومسند الرأس والمقود والمرايا والحزام** قبل التحرك، ولا تضبطها أثناء القيادة أبدًا.",
     "applies": "all",
     "ref": "Manual 2-6, 2-7, 2-20"
    },
    {
     "en": "At start-up most lights flash on as a **bulb check**. Worry only if a **red** light stays on.",
     "ar": "عند التشغيل تضيء معظم اللمبات لثوانٍ **كفحص ذاتي**. لا تقلق إلا إذا بقيت لمبة **حمراء** مضاءة.",
     "applies": "all",
     "ref": "Manual 1-9, 4-42"
    },
    {
     "en": "Handbrake: foot on the brake, lift the lever a little, press its button, lower it fully. Up fully every time you park, even in P.",
     "ar": "فرامل اليد: قدمك على الفرامل، ارفع الذراع قليلًا، واضغط زرّه، وأنزله تمامًا. ارفعه كاملًا عند كل وقوف حتى لو كنت على P.",
     "applies": "fronx",
     "ref": "Manual 5-17; My Fronx Guide"
    },
    {
     "en": "In a manual car there is a third pedal, the **clutch**, on the far left — worked by the left foot.",
     "ar": "في السيارة العادية (القير اليدوي) توجد دواسة ثالثة هي **الكلتش** في أقصى اليسار، وتعمل بالقدم اليسرى.",
     "applies": "manual",
     "ref": "Manual 5-8"
    }
   ],
   "steps": [
    {
     "en": "Walk round the car. Look at the tyres, lights and under the car.",
     "ar": "امشِ حول السيارة. انظر إلى الإطارات والأنوار وتحت السيارة."
    },
    {
     "en": "Get in and close the door.",
     "ar": "اركب وأغلق الباب."
    },
    {
     "en": "Move the seat so your knee is a little bent when the brake is pressed down.",
     "ar": "حرّك المقعد حتى تبقى ركبتك منثنية قليلًا وأنت تضغط الفرامل حتى آخرها."
    },
    {
     "en": "Set the steering wheel and head rest.",
     "ar": "اضبط المقود ومسند الرأس."
    },
    {
     "en": "Put on your seat belt. Pull it to check it clicked.",
     "ar": "اربط الحزام. اسحبه لتتأكد أنه مقفل."
    },
    {
     "en": "Set the middle mirror, then the two side mirrors.",
     "ar": "اضبط المرآة الوسطى، ثم المرآتين الجانبيتين."
    },
    {
     "en": "Find each control with your hand: lights, indicators, wipers, horn, hazards.",
     "ar": "المس كل أداة بيدك: الأنوار، الإشارات، المساحات، البوق، أنوار الطوارئ."
    },
    {
     "en": "Foot on the brake. Check the lever is on P. Press START.",
     "ar": "قدمك على الفرامل. تأكد أن الذراع على P. اضغط زر التشغيل.",
     "applies": "fronx"
    },
    {
     "en": "Look at the dashboard. No red light should stay on.",
     "ar": "انظر إلى لوحة العدادات. يجب ألا تبقى أي لمبة حمراء مضاءة."
    },
    {
     "en": "To finish: foot on brake, P, handbrake up, press START to switch off.",
     "ar": "للإنهاء: قدمك على الفرامل، ثم P، ثم ارفع فرامل اليد، واضغط زر التشغيل للإطفاء.",
     "applies": "fronx"
    }
   ],
   "check": [
    {
     "en": "You do the cockpit drill in the same order every time, without help.",
     "ar": "تجهّز المقعد والمرايا والحزام بالترتيب نفسه كل مرة دون مساعدة."
    },
    {
     "en": "You can find lights, indicators, wipers and hazards without looking.",
     "ar": "تصل إلى الأنوار والإشارات والمساحات وأنوار الطوارئ دون أن تنظر."
    },
    {
     "en": "You can say what a red, amber and green dashboard light means.",
     "ar": "تعرف معنى لمبة العدادات الحمراء والصفراء والخضراء."
    },
    {
     "en": "You start and switch off the engine safely: brake, P, handbrake.",
     "ar": "تشغّل المحرك وتطفئه بأمان: الفرامل، ثم P، ثم فرامل اليد."
    }
   ]
  },
  {
   "id": "L2",
   "where": "quiet",
   "wk": 1,
   "en": "Moving off, stopping and steering",
   "ar": "الانطلاق والتوقف والتحكم بالمقود",
   "skills": [
    6
   ],
   "ch": [
    "c-road"
   ],
   "dg": [
    "dg-159"
   ],
   "before": [
    {
     "en": "Before moving off, **check all mirrors** and look round at the blind spots.",
     "ar": "قبل التحرك، **افحص جميع المرايا** وانظر حولك إلى النقاط العمياء.",
     "src": "dvsa",
     "ref": "159",
     "kind": "must",
     "topic": "k6"
    },
    {
     "en": "Signal if needed, take a **final look round**, then move off only when safe.",
     "ar": "أشر عند الحاجة، و**ألقِ نظرة أخيرة**، ثم تحرّك فقط عندما يكون ذلك آمنًا.",
     "src": "dvsa",
     "ref": "159",
     "kind": "tip",
     "topic": "k6"
    },
    {
     "en": "Remember the routine: **Mirrors – Signal – Manoeuvre**.",
     "ar": "تذكّر التسلسل: **المرايا – الإشارة – المناورة**.",
     "src": "dvsa",
     "ref": "161",
     "kind": "tip",
     "topic": "k6"
    },
    {
     "en": "Keep **both hands on the wheel** where possible for full control.",
     "ar": "أبقِ **كلتا يديك على المقود** قدر الإمكان لتحكم كامل.",
     "src": "dvsa",
     "ref": "160",
     "kind": "tip",
     "topic": "k6"
    },
    {
     "en": "Always drive on the **paved part of the road**.",
     "ar": "يجب قيادة المركبة دائمًا على **الجزء المعبّد من الطريق**.",
     "src": "moroor",
     "ref": "102",
     "kind": "must",
     "topic": "k7",
     "fig": "hbf-103-1"
    },
    {
     "en": "Normally brake **early and lightly**, then more firmly as you stop.",
     "ar": "في الظروف العادية اكبح **مبكرًا وبلطف**، ثم بقوة أكبر عند التوقف.",
     "src": "dvsa",
     "ref": "117",
     "kind": "tip",
     "topic": "k26"
    },
    {
     "en": "Always **adapt your speed to conditions** so you can stop in time.",
     "ar": "يجب دائمًا **تكييف سرعة القيادة مع الظروف المحيطة** بحيث تستطيع التوقف في الوقت المناسب.",
     "src": "moroor",
     "ref": "18",
     "kind": "must",
     "topic": "k11"
    },
    {
     "en": "Don't switch off the engine while moving or let the car **roll downhill** with it off.",
     "ar": "لا تُطفئ المحرك أثناء القيادة، ولا تترك المركبة **تتدحرج على منحدر** والمحرك مطفأ.",
     "src": "moroor",
     "ref": "94",
     "kind": "never",
     "topic": "k3"
    },
    {
     "en": "Watch for **motorcycles and cyclists** filtering through traffic; they're harder to see.",
     "ar": "انتبه إلى **الدراجات النارية والهوائية** بين المركبات؛ فرؤيتها أصعب.",
     "src": "dvsa",
     "ref": "160",
     "kind": "danger",
     "topic": "k6"
    },
    {
     "en": "Use the **correct fuel**, avoid rush hours, and drive off straight after starting.",
     "ar": "استخدم **الوقود الصحيح**، وتجنّب أوقات الذروة، وانطلق فور تشغيل المركبة.",
     "src": "moroor",
     "ref": "193",
     "kind": "tip",
     "topic": "k13"
    },
    {
     "en": "Slow down **early and smoothly**; brake suddenly only when safety needs it.",
     "ar": "خفّف السرعة **مبكرًا وبهدوء**، ولا تضغط الفرامل فجأة إلا إذا تطلبت السلامة ذلك.",
     "src": "moroor",
     "ref": "123",
     "kind": "tip",
     "fig": "hbf-124-1",
     "topic": "k11"
    }
   ],
   "car": [
    {
     "en": "Move the lever from **P to D**: brake pressed, then push the button on the gear knob.",
     "ar": "لنقل الذراع من **P إلى D**: اضغط الفرامل، ثم اضغط الزر على مقبض القير.",
     "applies": "fronx",
     "ref": "Manual 5-23"
    },
    {
     "en": "In D the car **creeps forward by itself** when you lift off the brake. Use this gentle creep to move off slowly.",
     "ar": "في وضع D **تزحف السيارة وحدها** عندما ترفع قدمك عن الفرامل. استفد من هذا الزحف لتنطلق ببطء.",
     "applies": "fronx",
     "ref": "Manual 5-24"
    },
    {
     "en": "Three repeating beeps as you drive off mean the **handbrake is still on**. Stop and release it.",
     "ar": "ثلاث صفارات متكررة عند الانطلاق تعني أن **فرامل اليد ما زالت مرفوعة**. توقف وأنزلها.",
     "applies": "fronx",
     "ref": "My Fronx Guide (Beeps)"
    },
    {
     "en": "At a stop the engine may **switch off by itself** (green A light). That is normal; lift off the brake and it restarts.",
     "ar": "عند التوقف قد **ينطفئ المحرك وحده** (لمبة A خضراء). هذا طبيعي؛ ارفع قدمك عن الفرامل فيعود للعمل.",
     "applies": "fronx",
     "ref": "Manual 5-52; My Fronx Guide"
    },
    {
     "en": "Do not rest your foot on the brake while driving; it wears the brakes and confuses drivers behind.",
     "ar": "لا تُبقِ قدمك على الفرامل أثناء السير؛ فهذا يُتلفها ويربك من خلفك.",
     "applies": "all",
     "ref": "Manual 5-8"
    },
    {
     "en": "Manual car: clutch down, 1st gear, handbrake off, lift the clutch slowly to the **biting point**, then add a little gas.",
     "ar": "في القير اليدوي: اضغط الكلتش، واختر الأول، وأنزل فرامل اليد، ثم ارفع الكلتش ببطء حتى **نقطة التعشيق** وأضف قليلًا من البنزين.",
     "applies": "manual",
     "ref": "Manual 5-21"
    }
   ],
   "steps": [
    {
     "en": "Engine on. Foot on the brake.",
     "ar": "المحرك يعمل. قدمك على الفرامل."
    },
    {
     "en": "Put the lever in D.",
     "ar": "ضع الذراع على D.",
     "applies": "fronx"
    },
    {
     "en": "Release the handbrake.",
     "ar": "أنزل فرامل اليد."
    },
    {
     "en": "Check the mirrors. Look over your shoulder.",
     "ar": "انظر في المرايا. التفت فوق كتفك."
    },
    {
     "en": "Signal if someone could need it.",
     "ar": "أعطِ الإشارة إن كان هناك من يحتاج إليها."
    },
    {
     "en": "Lift your foot off the brake slowly. Let the car creep.",
     "ar": "ارفع قدمك عن الفرامل ببطء. دع السيارة تزحف.",
     "applies": "fronx"
    },
    {
     "en": "Press the gas gently. Look far ahead, not at the bonnet.",
     "ar": "اضغط البنزين بلطف. انظر بعيدًا للأمام، لا إلى مقدمة السيارة."
    },
    {
     "en": "Steer with both hands. Feed the wheel through your hands.",
     "ar": "أمسك المقود باليدين. مرّر المقود بين يديك."
    },
    {
     "en": "To stop: check mirrors, ease off the gas, brake gently, then a little more.",
     "ar": "للتوقف: انظر في المرايا، ارفع قدمك عن البنزين، اضغط الفرامل بلطف ثم أكثر قليلًا."
    },
    {
     "en": "Stopped: keep your foot on the brake. Handbrake up if you wait long.",
     "ar": "بعد التوقف: أبقِ قدمك على الفرامل. ارفع فرامل اليد إن طال الانتظار."
    }
   ],
   "check": [
    {
     "en": "You check mirrors and blind spot before every move off.",
     "ar": "تنظر في المرايا والنقطة العمياء قبل كل انطلاق."
    },
    {
     "en": "You move off and stop smoothly, with no jerks.",
     "ar": "تنطلق وتتوقف بسلاسة دون اهتزاز."
    },
    {
     "en": "You stop where the instructor asks, within about a metre.",
     "ar": "تتوقف في المكان الذي يحدده المدرب بفارق متر تقريبًا."
    },
    {
     "en": "You steer in a straight line and round a gentle bend with both hands.",
     "ar": "تقود في خط مستقيم وحول منعطف خفيف باليدين معًا."
    }
   ]
  },
  {
   "id": "L3",
   "where": "quiet",
   "wk": 1,
   "en": "Road position, mirrors and signals",
   "ar": "موضع السيارة على الطريق والمرايا والإشارات",
   "skills": [
    7,
    8,
    9
   ],
   "ch": [
    "c-road"
   ],
   "dg": [
    "dg-159"
   ],
   "before": [
    {
     "en": "On a two-way road with a broken line, **keep to the right lane**; cross only to overtake.",
     "ar": "في الطريق ذي الاتجاهين بخط متقطع، **التزم المسار الأيمن** ولا تعبر الخط إلا للتجاوز.",
     "src": "moroor",
     "ref": "103",
     "kind": "must",
     "topic": "k7",
     "fig": "hbf-104-1"
    },
    {
     "en": "**Never cross a continuous double line** into the opposite lane.",
     "ar": "**يُحظر عبور الخط المزدوج المتواصل** إلى المسار المقابل.",
     "src": "moroor",
     "ref": "104",
     "kind": "never",
     "topic": "k7",
     "fig": "hbf-105-1"
    },
    {
     "en": "**Keep far right** when turning right, being overtaken, slower, or visibility is poor.",
     "ar": "**الزم أقصى اليمين** عند الانعطاف يمينًا، أو عند تجاوزك، أو بطء سرعتك، أو ضعف الرؤية.",
     "src": "moroor",
     "ref": "107",
     "kind": "must",
     "topic": "k7",
     "fig": "hbf-108-1"
    },
    {
     "en": "Use the left side **only to overtake, avoid a crash, or pass a closed section**.",
     "ar": "لا تَقُد على الجانب الأيسر **إلا للتجاوز أو لمنع حادث أو عند إغلاق جزء من الجانب الأيمن**.",
     "src": "moroor",
     "ref": "108",
     "kind": "tip",
     "topic": "k7",
     "fig": "hbf-109-1"
    },
    {
     "en": "**Never cross solid or double solid lines**; broken lines may be crossed.",
     "ar": "**يُحظر عبور الخطوط المتصلة أو المتصلة المزدوجة**، ويجوز تجاوز الخطوط المتقطعة.",
     "src": "moroor",
     "ref": "51",
     "kind": "never",
     "topic": "k9",
     "fig": "hbf-52-1"
    },
    {
     "en": "Before changing lanes, make sure it **endangers no one** and isn't prohibited by signs.",
     "ar": "قبل تغيير المسار، تأكّد أنه **لا يعرّض أحدًا للخطر** وغير ممنوع بإشارات المرور.",
     "src": "moroor",
     "ref": "109",
     "kind": "must",
     "topic": "k8"
    },
    {
     "en": "Check the **interior mirror first**, then the outside mirror on the side you're moving to.",
     "ar": "افحص **المرآة الداخلية أولًا** ثم المرآة الخارجية في جهة الانتقال.",
     "src": "moroor",
     "ref": "112–113",
     "kind": "tip",
     "topic": "k8"
    },
    {
     "en": "Relying only on side mirrors risks hitting a car in your **blind spot**.",
     "ar": "الاعتماد على المرايا الجانبية وحدها قد يوقعك في اصطدام بمركبة في **النقطة العمياء**.",
     "src": "moroor",
     "ref": "110",
     "kind": "danger",
     "topic": "k8",
     "fig": "hbf-111-2"
    },
    {
     "en": "Always **look over your shoulder** to check the blind spot.",
     "ar": "**انظر من فوق كتفك** دائمًا للتحقق من النقطة العمياء.",
     "src": "moroor",
     "ref": "110–111",
     "kind": "must",
     "topic": "k8",
     "fig": "hbf-111-1"
    },
    {
     "en": "Use mirrors **in good time** before signalling or changing speed or direction.",
     "ar": "استخدم المرايا **في وقت مبكر** قبل الإشارة أو تغيير السرعة أو الاتجاه.",
     "src": "dvsa",
     "ref": "161",
     "kind": "must",
     "topic": "k6"
    },
    {
     "en": "Signal **in plenty of time** and cancel it after use.",
     "ar": "أعطِ الإشارة **في وقت كافٍ** وألغِها بعد الاستخدام.",
     "src": "dvsa",
     "ref": "103",
     "kind": "tip",
     "topic": "k9",
     "fig": "hbf-235-1"
    },
    {
     "en": "Another car's indicator **may not have been cancelled**; don't rely on it.",
     "ar": "قد **لا يكون غمّاز المركبة الأخرى قد أُلغي**؛ فلا تعتمد عليه.",
     "src": "dvsa",
     "ref": "104",
     "kind": "danger",
     "topic": "k9"
    },
    {
     "en": "Use the horn **only in emergencies**; no multi-tone horns.",
     "ar": "استخدم إشارات التحذير **في حالات الطوارئ فقط**، ولا تستخدم أبواقًا متعددة النغمات.",
     "src": "moroor",
     "ref": "94",
     "kind": "never",
     "topic": "k3"
    },
    {
     "en": "When a broken centre line's **dashes lengthen**, a hazard lies ahead.",
     "ar": "عندما **تطول خطوط الخط المتقطع** وتقصر فراغاته، فهناك خطر أمامك.",
     "src": "dvsa",
     "ref": "127",
     "kind": "danger",
     "topic": "k7"
    },
    {
     "en": "**Don't enter hatched areas** bordered by solid lines except in an emergency.",
     "ar": "**لا تدخل المناطق المخططة** المحاطة بخطوط متصلة إلا في الطوارئ.",
     "src": "dvsa",
     "ref": "130",
     "kind": "never",
     "topic": "k7"
    }
   ],
   "car": [
    {
     "en": "On your left-hand-drive Fronx the stalk is on the left: **push down for left, up for right** (the manual text, written for right-hand drive, says the opposite).",
     "ar": "في الفرونكس ذات المقود الأيسر يكون الذراع على اليسار: **إلى الأسفل لليسار، وإلى الأعلى لليمين** (نص الدليل مكتوب للمقود الأيمن فيقول العكس).",
     "applies": "fronx",
     "ref": "My Fronx Guide (Lights, indicators and wipers)"
    },
    {
     "en": "A **light tap** gives three flashes for a lane change; a full push stays on until the wheel straightens.",
     "ar": "**لمسة خفيفة** تعطي ثلاث ومضات لتغيير المسار؛ والدفع الكامل يبقيها حتى يعود المقود مستقيمًا.",
     "applies": "fronx",
     "ref": "Manual 3-24"
    },
    {
     "en": "Side mirrors: you should **just see the side of your car**. Inside mirror: the whole rear window.",
     "ar": "المرايا الجانبية: **ترى طرف سيارتك بالكاد**. المرآة الداخلية: ترى الزجاج الخلفي كاملًا.",
     "applies": "all",
     "ref": "Manual 2-8, 2-10"
    },
    {
     "en": "A **fast-flashing** indicator light means a bulb has failed.",
     "ar": "إذا **أسرع وميض** لمبة الإشارة فهذا يعني أن مصباحًا تالفًا.",
     "applies": "all",
     "ref": "Manual 4-49"
    }
   ],
   "steps": [
    {
     "en": "Drive in the middle of your lane, a little to the right.",
     "ar": "سِر في منتصف مسارك، مع ميل خفيف إلى اليمين."
    },
    {
     "en": "Look in the middle mirror every few seconds.",
     "ar": "انظر في المرآة الوسطى كل بضع ثوانٍ."
    },
    {
     "en": "Before you slow down or turn, look in the mirrors first.",
     "ar": "قبل أن تبطئ أو تنعطف، انظر في المرايا أولًا."
    },
    {
     "en": "Then signal. Give it time to be seen.",
     "ar": "ثم أعطِ الإشارة. امنحها وقتًا لتُرى."
    },
    {
     "en": "Then look over your shoulder for the blind spot.",
     "ar": "ثم التفت فوق كتفك لترى النقطة العمياء."
    },
    {
     "en": "Then move. Keep it smooth.",
     "ar": "ثم تحرّك. بهدوء وسلاسة."
    },
    {
     "en": "Check the signal has switched off after the move.",
     "ar": "تأكد أن الإشارة انطفأت بعد الحركة."
    },
    {
     "en": "Stay away from solid lines. Never cross them.",
     "ar": "ابتعد عن الخطوط المتصلة. لا تتجاوزها أبدًا."
    }
   ],
   "check": [
    {
     "en": "You say \"mirrors, signal, look, move\" and do it in that order.",
     "ar": "تقول «مرايا، إشارة، التفاتة، حركة» وتنفّذها بهذا الترتيب."
    },
    {
     "en": "Your signals are on time and switched off after use.",
     "ar": "إشاراتك في وقتها، وتطفئها بعد الاستعمال."
    },
    {
     "en": "You keep a steady position in the lane without wandering.",
     "ar": "تحافظ على موضع ثابت في المسار دون تمايل."
    },
    {
     "en": "You can name what is in your blind spot before you check it.",
     "ar": "تعرف أين تقع النقطة العمياء قبل أن تلتفت إليها."
    }
   ]
  },
  {
   "id": "L4",
   "where": "quiet",
   "wk": 2,
   "en": "Reversing, figure 8 and S-bend",
   "ar": "الرجوع للخلف ومسار 8 والمسار المتعرج",
   "skills": [
    19,
    25
   ],
   "ch": [
    "c-road",
    "c-tests"
   ],
   "dg": [],
   "before": [
    {
     "en": "**Signal clearly** before reversing.",
     "ar": "**يجب الإشارة بوضوح** قبل الرجوع إلى الخلف.",
     "src": "moroor",
     "ref": "125",
     "kind": "must",
     "topic": "k19",
     "fig": "hbf-126-1"
    },
    {
     "en": "Reverse on public roads only when necessary, for **no more than ==20 metres==**.",
     "ar": "لا يجوز الرجوع إلى الخلف في الطرق العامة إلا للضرورة ولمسافة **لا تتجاوز ==20 مترًا==**.",
     "src": "moroor",
     "ref": "125",
     "kind": "number",
     "topic": "k19"
    },
    {
     "en": "**Never reverse on a highway** (expressway).",
     "ar": "**يُمنع الرجوع إلى الخلف على الطرق السريعة**.",
     "src": "moroor",
     "ref": "125",
     "kind": "never",
     "topic": "k19"
    },
    {
     "en": "Make sure the road is clear and reversing **won't endanger others**.",
     "ar": "تأكّد من خلو الطريق وأن الرجوع **لن يعرّض سلامة الآخرين** للخطر.",
     "src": "moroor",
     "ref": "125",
     "kind": "must",
     "topic": "k19"
    },
    {
     "en": "Check all mirrors and the **blind spot**, especially for children, before reversing.",
     "ar": "افحص المرايا جميعها و**النقطة العمياء**، خصوصًا بحثًا عن الأطفال، قبل الرجوع.",
     "src": "dvsa",
     "ref": "202",
     "kind": "must",
     "topic": "k19"
    },
    {
     "en": "Reverse **slowly**, looking mainly through the rear window.",
     "ar": "ارجع **ببطء** ناظرًا أساسًا من الزجاج الخلفي.",
     "src": "dvsa",
     "ref": "202",
     "kind": "tip",
     "topic": "k19"
    },
    {
     "en": "The **front of the car swings out** as you turn while reversing.",
     "ar": "**مقدمة المركبة تنحرف للخارج** عند التوجيه أثناء الرجوع.",
     "src": "dvsa",
     "ref": "202",
     "kind": "danger",
     "topic": "k19"
    },
    {
     "en": "Ask someone to **guide you** if you cannot see clearly.",
     "ar": "اطلب من أحد **أن يوجّهك** إذا لم تكن الرؤية واضحة.",
     "src": "dvsa",
     "ref": "202",
     "kind": "tip",
     "topic": "k19"
    },
    {
     "en": "**Do not reverse from a side road** into a main road.",
     "ar": "**لا ترجع من طريق فرعي** إلى طريق رئيسي.",
     "src": "dvsa",
     "ref": "201",
     "kind": "never",
     "topic": "k19"
    },
    {
     "en": "The faster you drive, the **more smoothly you must steer**.",
     "ar": "كلما زادت سرعتك، وجب عليك **توجيه المركبة بسلاسة أكبر**.",
     "src": "moroor",
     "ref": "111",
     "kind": "tip",
     "topic": "k8"
    },
    {
     "en": "Turning right: a **tight curve**, staying at the far right. Turning left: a **wide curve** into the right side of the new road.",
     "ar": "الانعطاف لليمين: **منحنى ضيق** مع البقاء في أقصى اليمين. الانعطاف لليسار: **منحنى واسع** إلى الجانب الأيمن من الطريق الجديد.",
     "src": "moroor",
     "ref": "123",
     "kind": "tip",
     "fig": "hbf-125-1",
     "topic": "k19"
    }
   ],
   "car": [
    {
     "en": "Select **R only when the car has fully stopped**, with the brake pressed.",
     "ar": "اختر **R فقط بعد توقف السيارة تمامًا** وقدمك على الفرامل.",
     "applies": "fronx",
     "ref": "Manual 5-23"
    },
    {
     "en": "In R the **rear and top camera views** appear. Beeps get faster as you get closer; a solid tone means **under about 35 cm**.",
     "ar": "في وضع R تظهر **الكاميرا الخلفية والعلوية**. تتسارع الصفارات كلما اقتربت، والصوت المتصل يعني **أقل من 35 سم تقريبًا**.",
     "applies": "fronx",
     "ref": "My Fronx Guide (360° camera and parking sensors)"
    },
    {
     "en": "Camera guide lines are drawn **wider than the car**. Always look round yourself too.",
     "ar": "خطوط الكاميرا الإرشادية **أعرض من السيارة**. انظر حولك بنفسك دائمًا.",
     "applies": "fronx",
     "ref": "My Fronx Guide"
    },
    {
     "en": "Reverse at **walking pace**: control the speed with the brake, not the gas.",
     "ar": "ارجع بسرعة **المشي**: تحكّم بالسرعة بالفرامل لا بالبنزين.",
     "applies": "all",
     "ref": "Manual 5-8"
    },
    {
     "en": "Manual car: stop fully, clutch down, select R; hold the clutch near the biting point to creep slowly.",
     "ar": "في القير اليدوي: توقف تمامًا، اضغط الكلتش، واختر R، وأبقِ الكلتش قرب نقطة التعشيق لتتحرك ببطء.",
     "applies": "manual",
     "ref": "Manual 5-22"
    }
   ],
   "steps": [
    {
     "en": "Stop. Foot on the brake. Select R.",
     "ar": "توقف. قدمك على الفرامل. اختر R."
    },
    {
     "en": "Look all around the car, both shoulders.",
     "ar": "انظر حول السيارة كلها، من فوق الكتفين."
    },
    {
     "en": "Turn your body and look out of the back window.",
     "ar": "استدر بجسمك وانظر من الزجاج الخلفي."
    },
    {
     "en": "Ease off the brake. Let the car creep back slowly.",
     "ar": "خفّف الضغط على الفرامل. دع السيارة ترجع ببطء."
    },
    {
     "en": "Glance at the camera and mirrors, then look back again.",
     "ar": "ألقِ نظرة على الكاميرا والمرايا، ثم انظر للخلف من جديد.",
     "applies": "fronx"
    },
    {
     "en": "Turn the wheel a little at a time. Watch the front corner swing out.",
     "ar": "أدِر المقود قليلًا قليلًا. انتبه لخروج زاوية السيارة الأمامية."
    },
    {
     "en": "Figure 8 and S-bend: go slowly forward first, keep the wheels inside the lines.",
     "ar": "مسار 8 والمسار المتعرج: تقدّم ببطء أولًا وأبقِ العجلات داخل الخطوط."
    },
    {
     "en": "Then do the same course backwards, very slowly.",
     "ar": "ثم نفّذ المسار نفسه للخلف ببطء شديد."
    },
    {
     "en": "Someone walks behind? Stop at once.",
     "ar": "شخص يمشي خلفك؟ توقف فورًا."
    }
   ],
   "check": [
    {
     "en": "You look all round before and during every reverse.",
     "ar": "تنظر حولك قبل الرجوع وخلاله في كل مرة."
    },
    {
     "en": "You reverse in a straight line for 20 metres without drifting.",
     "ar": "ترجع في خط مستقيم مسافة 20 مترًا دون انحراف."
    },
    {
     "en": "You finish the figure 8 and S-bend without touching a line or cone.",
     "ar": "تُنهي مسار 8 والمتعرج دون لمس خط أو قمع."
    },
    {
     "en": "You keep the speed at walking pace with the brake.",
     "ar": "تحافظ على سرعة المشي باستخدام الفرامل."
    }
   ]
  },
  {
   "id": "L5",
   "where": "quiet",
   "wk": 2,
   "en": "Turning, simple junctions and looking ahead",
   "ar": "الانعطاف والتقاطعات البسيطة والنظر للأمام",
   "skills": [
    10,
    14
   ],
   "ch": [
    "c-junctions"
   ],
   "dg": [
    "dg-170",
    "dg-180"
   ],
   "before": [
    {
     "en": "Signal **every turn early enough**, slow down early, and keep a gap to the car in front.",
     "ar": "أعطِ إشارة **لكل انعطاف مبكرًا بما يكفي**، وخفّف السرعة مبكرًا، واترك مسافة عن السيارة الأمامية.",
     "src": "moroor",
     "ref": "123",
     "kind": "must",
     "fig": "hbf-124-1",
     "topic": "k14"
    },
    {
     "en": "With no arrows, **turn right from the far right** of the road.",
     "ar": "عند عدم وجود أسهم، **انعطف لليمين من أقصى الجانب الأيمن** للطريق.",
     "src": "moroor",
     "ref": "115",
     "kind": "must",
     "topic": "k28",
     "fig": "hbf-116-1"
    },
    {
     "en": "Turning left on a two-way road, move to the centre, **staying right of the dividing line**.",
     "ar": "للانعطاف لليسار في طريق باتجاهين، انتقل إلى المنتصف **مع البقاء يمين الخط الفاصل**.",
     "src": "moroor",
     "ref": "115",
     "kind": "must",
     "topic": "k28",
     "fig": "hbf-125-1"
    },
    {
     "en": "At every junction: **look, assess, decide, act** — and look in every direction.",
     "ar": "عند كل تقاطع: **انظر، قيّم، قرّر، نفّذ**، وانظر في كل الاتجاهات.",
     "src": "moroor",
     "ref": "161",
     "kind": "tip",
     "fig": "hbf-162-1",
     "topic": "k10"
    },
    {
     "en": "Uncontrolled junctions with no signs are governed by the **priority rule**.",
     "ar": "التقاطعات غير المحكومة بلا علامات يحكمها **قانون الأولوية**.",
     "src": "moroor",
     "ref": "47",
     "kind": "must",
     "topic": "k7",
     "fig": "hbf-48-1"
    },
    {
     "en": "At equal junctions, the **vehicle nearest the junction** goes first.",
     "ar": "في التقاطعات المتساوية، الأولوية **للمركبة الأقرب إلى التقاطع**.",
     "src": "moroor",
     "ref": "140",
     "kind": "priority",
     "topic": "k14",
     "fig": "hbf-141-1"
    },
    {
     "en": "Arriving together at equal junctions, **the vehicle on the right** has priority.",
     "ar": "عند الوصول في الوقت نفسه إلى تقاطع متساوٍ، **الأولوية للمركبة القادمة من اليمين**.",
     "src": "moroor",
     "ref": "141",
     "kind": "priority",
     "topic": "k14",
     "fig": "hbf-142-1"
    },
    {
     "en": "**Straight-ahead traffic has priority** over vehicles changing direction.",
     "ar": "**المركبات المتجهة إلى الأمام بشكل مستقيم لها الأولوية** على المركبات التي تغيّر اتجاهها.",
     "src": "moroor",
     "ref": "142–144",
     "kind": "priority",
     "topic": "k14",
     "fig": "hbf-143-1"
    },
    {
     "en": "Judge other road users by **age, attention and likely intentions**.",
     "ar": "قيّم مستعملي الطريق الآخرين حسب **العمر والانتباه ونواياهم المحتملة**.",
     "src": "moroor",
     "ref": "87",
     "kind": "tip",
     "topic": "k10",
     "fig": "hbf-88-1"
    },
    {
     "en": "If unsure about a situation, **make eye contact** with the other road user.",
     "ar": "إذا لم تكن متأكدًا من موقف ما، **تواصل بصريًا** مع الطرف الآخر.",
     "src": "moroor",
     "ref": "87",
     "kind": "tip",
     "topic": "k10"
    },
    {
     "en": "**Motorcyclists and cyclists** are hard to see; look for them before emerging.",
     "ar": "**الدراجات النارية والهوائية** يصعب رؤيتها؛ ابحث عنها قبل الخروج من التقاطع.",
     "src": "dvsa",
     "ref": "211",
     "kind": "danger",
     "topic": "k10"
    },
    {
     "en": "Approach junctions slowly enough to **stop before the crossing** if others have priority.",
     "ar": "اقترب من التقاطع بسرعة تسمح لك **بالتوقف قبل المعبر** إذا كانت الأولوية لغيرك.",
     "src": "moroor",
     "ref": "159",
     "kind": "tip",
     "topic": "k17"
    },
    {
     "en": "**STOP is octagonal**; Give Way is an inverted triangle.",
     "ar": "**إشارة «قف» مثمّنة**، وإشارة «أعطِ الأولوية» مثلث مقلوب.",
     "src": "moroor",
     "ref": "56",
     "kind": "priority",
     "topic": "k9",
     "fig": "hbf-136-1"
    },
    {
     "en": "Passenger carts and bicycles **have priority over other slow vehicles**.",
     "ar": "تُعطى عربات الركاب والدراجات الهوائية **حق الأولوية على مركبات النقل البطيئة الأخرى**.",
     "src": "moroor",
     "ref": "162",
     "kind": "priority",
     "topic": "k16"
    },
    {
     "en": "Leave cyclists and motorcyclists **room to pass** through calming features.",
     "ar": "اترك للدراجات والدراجات النارية **مساحة للمرور** عبر وسائل التهدئة.",
     "src": "dvsa",
     "ref": "153",
     "kind": "tip",
     "topic": "k27"
    }
   ],
   "car": [
    {
     "en": "The indicator cancels itself as the wheel straightens; after a small turn, **check it went off**.",
     "ar": "تنطفئ الإشارة وحدها عند استقامة المقود؛ بعد انعطاف صغير **تأكد أنها انطفأت**.",
     "applies": "all",
     "ref": "Manual 3-24"
    },
    {
     "en": "Press **VIEW** at low speed for the front camera when a corner is hard to see — but your own eyes come first.",
     "ar": "اضغط **VIEW** في السرعة المنخفضة لعرض الكاميرا الأمامية عند زاوية صعبة الرؤية، لكن عينيك أولًا.",
     "applies": "fronx",
     "ref": "Manual 5-73; My Fronx Guide"
    },
    {
     "en": "Do all your braking **before** the turn, then a little gas through it.",
     "ar": "أنهِ الفرملة **قبل** الانعطاف، ثم بنزين خفيف أثناءه.",
     "applies": "all",
     "ref": "Manual 5-8"
    }
   ],
   "steps": [
    {
     "en": "Look far ahead. Find the turn early.",
     "ar": "انظر بعيدًا للأمام. حدّد مكان الانعطاف مبكرًا."
    },
    {
     "en": "Mirrors, then signal.",
     "ar": "المرايا، ثم الإشارة."
    },
    {
     "en": "Slow down to walking speed before the corner.",
     "ar": "خفّف إلى سرعة المشي قبل المنعطف."
    },
    {
     "en": "Look left, right, then left again.",
     "ar": "انظر يسارًا ثم يمينًا ثم يسارًا مرة أخرى."
    },
    {
     "en": "Not sure who goes first? Wait.",
     "ar": "لست متأكدًا من صاحب الأولوية؟ انتظر."
    },
    {
     "en": "Turn right tight. Turn left wide.",
     "ar": "انعطف لليمين بمنحنى ضيق، ولليسار بمنحنى واسع."
    },
    {
     "en": "Straighten the wheel. Check the signal is off.",
     "ar": "أعِد المقود مستقيمًا. تأكد أن الإشارة انطفأت."
    },
    {
     "en": "Do it again until it feels calm.",
     "ar": "كرر حتى تشعر بالهدوء."
    }
   ],
   "check": [
    {
     "en": "You signal and slow down before every turn, not during it.",
     "ar": "تعطي الإشارة وتخفف السرعة قبل كل انعطاف، لا أثناءه."
    },
    {
     "en": "You look both ways and can say who has priority.",
     "ar": "تنظر في الاتجاهين وتستطيع أن تقول من صاحب الأولوية."
    },
    {
     "en": "Right turns stay tight; left turns end in the right lane of the new road.",
     "ar": "انعطافاتك لليمين ضيقة، ولليسار تنتهي في المسار الأيمن من الطريق الجديد."
    }
   ]
  },
  {
   "id": "L6",
   "where": "quiet",
   "wk": 2,
   "en": "Forward bay parking and first reverse bay parks",
   "ar": "الوقوف الأمامي في الموقف وأول محاولات الوقوف الخلفي",
   "skills": [
    22,
    23
   ],
   "ch": [
    "c-parking",
    "c-tests"
   ],
   "dg": [],
   "before": [
    {
     "en": "Park **parallel to the roadside or kerb** unless a sign allows another way.",
     "ar": "اركن المركبة **بالتوازي مع جانب الطريق أو الرصيف** ما لم تُشر لوحة إلى طريقة أخرى.",
     "src": "moroor",
     "ref": "215",
     "kind": "must",
     "topic": "k23",
     "fig": "hbf-215-1"
    },
    {
     "en": "Park **only where it is allowed**, inside the marked bay.",
     "ar": "اوقف السيارة **في الأماكن المسموح بها فقط** وداخل حدود الموقف.",
     "src": "moroor",
     "ref": "215",
     "kind": "tip",
     "fig": "hbf-216-1",
     "topic": "k23"
    },
    {
     "en": "Before leaving the car, **switch off the engine and apply the handbrake**.",
     "ar": "قبل مغادرة المركبة، **أطفئ المحرك وشدّ فرامل اليد**.",
     "src": "dvsa",
     "ref": "239",
     "kind": "must",
     "topic": "k23"
    },
    {
     "en": "Check all round **before opening your door** so you don't hit anyone.",
     "ar": "انظر حولك **قبل فتح الباب** حتى لا تصطدم بأحد.",
     "src": "dvsa",
     "ref": "239",
     "kind": "must",
     "topic": "k23"
    },
    {
     "en": "Check all mirrors and the **blind spot**, especially for children, before reversing.",
     "ar": "افحص المرايا جميعها و**النقطة العمياء**، خصوصًا بحثًا عن الأطفال، قبل الرجوع.",
     "src": "dvsa",
     "ref": "202",
     "kind": "must",
     "topic": "k19"
    },
    {
     "en": "Reverse **slowly**, looking mainly through the rear window.",
     "ar": "ارجع **ببطء** ناظرًا أساسًا من الزجاج الخلفي.",
     "src": "dvsa",
     "ref": "202",
     "kind": "tip",
     "topic": "k19"
    },
    {
     "en": "**Never leave the car unlocked**, the engine running, or the key inside.",
     "ar": "**يُمنع ترك المركبة غير مقفلة** أو المحرك يعمل أو المفتاح بداخلها.",
     "src": "moroor",
     "ref": "96",
     "kind": "never",
     "topic": "k3",
     "fig": "hbf-97-1"
    },
    {
     "en": "Without start/stop, switch the engine off if stopping **longer than ==20 seconds==**.",
     "ar": "دون نظام التشغيل/الإيقاف التلقائي، أطفئ المحرك إذا زاد التوقف على **==20 ثانية==**.",
     "src": "moroor",
     "ref": "192",
     "kind": "number",
     "topic": "k13"
    },
    {
     "en": "**Don't leave the engine running** unnecessarily while parked or stationary.",
     "ar": "**لا تترك المحرك يعمل** دون داعٍ والمركبة متوقفة.",
     "src": "dvsa",
     "ref": "123",
     "kind": "never",
     "topic": "k13"
    },
    {
     "en": "**Never park in a bay reserved** for people with disabilities.",
     "ar": "**لا تقف أبدًا في موقف مخصص** لذوي الإعاقة.",
     "src": "moroor",
     "ref": "221",
     "kind": "never",
     "fig": "hbf-222-1",
     "topic": "k23"
    }
   ],
   "car": [
    {
     "en": "Use the **top view** to see the bay lines. Rear sensors reach about **1.5 m**: 3 lines = 60–150 cm, 2 lines = 35–60 cm, 1 line = under 35 cm.",
     "ar": "استخدم **العرض العلوي** لترى خطوط الموقف. حساسات الخلف تصل إلى **1.5 م** تقريبًا: 3 خطوط = 60–150 سم، خطان = 35–60 سم، خط واحد = أقل من 35 سم.",
     "applies": "fronx",
     "ref": "My Fronx Guide (360° camera and parking sensors)"
    },
    {
     "en": "Sensors cannot see anything **closer than about 20 cm** or directly under them.",
     "ar": "لا تكتشف الحساسات ما هو **أقرب من 20 سم تقريبًا** أو تحتها مباشرة.",
     "applies": "fronx",
     "ref": "My Fronx Guide"
    },
    {
     "en": "Parked: **P, handbrake up fully, then START to switch off**. Never get out while the engine is only auto-stopped.",
     "ar": "عند الوقوف: **P، ثم فرامل اليد كاملة، ثم زر التشغيل للإطفاء**. لا تنزل أبدًا والمحرك متوقف تلقائيًا فقط.",
     "applies": "fronx",
     "ref": "Manual 5-18; My Fronx Guide"
    }
   ],
   "steps": [
    {
     "en": "Drive past the bay slowly. Choose your bay.",
     "ar": "مُرّ بجانب الموقف ببطء. اختر موقفك."
    },
    {
     "en": "Forward park: signal, slow to walking pace.",
     "ar": "الوقوف الأمامي: أعطِ الإشارة وخفّف إلى سرعة المشي."
    },
    {
     "en": "Turn in when your mirror lines up with the first bay line.",
     "ar": "ادخل عندما تتساوى مرآتك مع أول خط في الموقف."
    },
    {
     "en": "Straighten up in the middle. Stop before the end line.",
     "ar": "استقم في المنتصف. توقف قبل الخط الأخير."
    },
    {
     "en": "Reverse park: stop a little past the bay. Select R.",
     "ar": "الوقوف الخلفي: توقف بعد الموقف بقليل. اختر R."
    },
    {
     "en": "Look all round. Then turn the wheel fully towards the bay.",
     "ar": "انظر حولك. ثم أدِر المقود كاملًا نحو الموقف."
    },
    {
     "en": "Creep back. Check both side mirrors for the lines.",
     "ar": "ارجع ببطء. راقب الخطوط في المرآتين الجانبيتين."
    },
    {
     "en": "When the car is straight, straighten the wheel and go back slowly.",
     "ar": "عندما تستقيم السيارة، أعِد المقود مستقيمًا وارجع ببطء."
    },
    {
     "en": "Stop. P, handbrake, engine off.",
     "ar": "توقف. P، فرامل اليد، أطفئ المحرك.",
     "applies": "fronx"
    }
   ],
   "check": [
    {
     "en": "You park forwards inside the lines in one go.",
     "ar": "تقف أماميًا داخل الخطوط من أول مرة."
    },
    {
     "en": "You can reverse into a bay with at most one correction.",
     "ar": "تستطيع الوقوف خلفيًا بتصحيح واحد على الأكثر."
    },
    {
     "en": "You look round before and while reversing, not only at the screen.",
     "ar": "تنظر حولك قبل الرجوع وأثناءه، لا إلى الشاشة فقط."
    },
    {
     "en": "You secure the car correctly before getting out.",
     "ar": "تؤمّن السيارة بالطريقة الصحيحة قبل النزول."
    }
   ]
  },
  {
   "id": "L7",
   "where": "quiet",
   "wk": 3,
   "en": "Reverse bay parking every time, and where you may park",
   "ar": "إتقان الوقوف الخلفي، وأين يُسمح بالوقوف",
   "skills": [
    21,
    22
   ],
   "ch": [
    "c-parking",
    "c-tests"
   ],
   "dg": [],
   "before": [
    {
     "en": "**Yellow-painted** kerbs mean parking restrictions; white lines mean no restrictions.",
     "ar": "**الطلاء الأصفر** يعني قيودًا على الإيقاف، والخطوط البيضاء تعني عدم وجود قيود.",
     "src": "moroor",
     "ref": "216–217",
     "kind": "tip",
     "topic": "k23",
     "fig": "hbf-218-1"
    },
    {
     "en": "**Never park on pedestrian crossings** or the pavement.",
     "ar": "**يُمنع إيقاف المركبة على معابر المشاة** أو رصيف المشاة.",
     "src": "moroor",
     "ref": "218–219",
     "kind": "never",
     "topic": "k23",
     "fig": "hbf-219-1"
    },
    {
     "en": "Don't park within **==1.5 metres==** of a school crossing point.",
     "ar": "يُمنع الإيقاف على مسافة أقل من **==متر ونصف==** من مكان عبور طلاب المدارس.",
     "src": "moroor",
     "ref": "218",
     "kind": "number",
     "topic": "k23"
    },
    {
     "en": "Don't park on bridges or within **==20 metres==** of a tunnel or bridge.",
     "ar": "يُمنع الإيقاف على الجسور أو على بعد **==20 مترًا==** أو أقل من الأنفاق والجسور.",
     "src": "moroor",
     "ref": "219",
     "kind": "number",
     "topic": "k23",
     "fig": "hbf-220-1"
    },
    {
     "en": "Don't park within **==15 metres==** of a traffic light or a turning.",
     "ar": "يُمنع الإيقاف على مسافة أقل من **==15 مترًا==** من إشارة ضوئية أو منعطف.",
     "src": "moroor",
     "ref": "220",
     "kind": "number",
     "topic": "k23",
     "fig": "hbf-221-1"
    },
    {
     "en": "Don't park within **==7 metres==** of a fire hydrant.",
     "ar": "يُمنع الإيقاف على مسافة أقل من **==7 أمتار==** من صنبور مياه الحريق.",
     "src": "moroor",
     "ref": "221",
     "kind": "number",
     "topic": "k23"
    },
    {
     "en": "**Never park on bends, at junctions, or in front of entrances and exits**.",
     "ar": "**يُمنع الإيقاف في المنعطفات والتقاطعات وأمام المداخل والمخارج**.",
     "src": "moroor",
     "ref": "219–221",
     "kind": "never",
     "topic": "k23"
    },
    {
     "en": "**Never park facing against the traffic** or in the middle of the road.",
     "ar": "**يُمنع الإيقاف في الاتجاه المعاكس لحركة السير** أو في وسط الطريق.",
     "src": "moroor",
     "ref": "222",
     "kind": "never",
     "topic": "k23",
     "fig": "hbf-223-1"
    },
    {
     "en": "Signs can **forbid or limit parking**; read them before you leave the car.",
     "ar": "قد تمنع اللوحات الوقوف أو تحدده؛ **اقرأها** قبل أن تترك السيارة.",
     "src": "moroor",
     "ref": "216",
     "kind": "tip",
     "fig": "hbf-217-1",
     "topic": "k23"
    },
    {
     "en": "**Never park on a crossing** or its zig-zag area.",
     "ar": "**لا تقف على معبر المشاة** أو في المنطقة المخططة المتعرجة حوله.",
     "src": "dvsa",
     "ref": "191",
     "kind": "never",
     "topic": "k16"
    }
   ],
   "car": [
    {
     "en": "Do not trust the camera with a **mirror folded or a door open** — the picture will be wrong.",
     "ar": "لا تعتمد على الكاميرا **والمرآة مطوية أو باب مفتوح**؛ فالصورة ستكون خاطئة.",
     "applies": "fronx",
     "ref": "My Fronx Guide"
    },
    {
     "en": "Blurry picture? Wipe the **four camera lenses** (grille, boot, under each mirror) with a soft cloth.",
     "ar": "الصورة غير واضحة؟ امسح **عدسات الكاميرا الأربع** (الشبك الأمامي، الشنطة، أسفل كل مرآة) بقطعة ناعمة.",
     "applies": "fronx",
     "ref": "My Fronx Guide"
    },
    {
     "en": "Some drivers tilt the passenger mirror down while reversing to see the kerb or line, then put it back.",
     "ar": "يميل بعض السائقين مرآة الراكب للأسفل أثناء الرجوع ليروا الرصيف أو الخط، ثم يعيدونها.",
     "applies": "all",
     "ref": "Manual 2-10"
    }
   ],
   "steps": [
    {
     "en": "Reverse into a bay on the left. Then on the right.",
     "ar": "ارجع إلى موقف على اليسار، ثم على اليمين."
    },
    {
     "en": "Same order each time: stop, R, look, creep, turn.",
     "ar": "الترتيب نفسه كل مرة: توقف، R، انظر، ازحف، أدِر."
    },
    {
     "en": "Watch the line in your side mirror.",
     "ar": "راقب الخط في المرآة الجانبية."
    },
    {
     "en": "Too close to one side? Stop. Go forward a little and try again.",
     "ar": "قريب جدًا من جهة؟ توقف. تقدّم قليلًا وحاول مجددًا."
    },
    {
     "en": "Do five in a row.",
     "ar": "كرّرها خمس مرات متتالية."
    },
    {
     "en": "Walk the car park with your instructor. Point to places you must not park.",
     "ar": "تجوّل في الموقف مع مدربك. أشِر إلى الأماكن الممنوع الوقوف فيها."
    }
   ],
   "check": [
    {
     "en": "You get four out of five reverse parks straight and centred.",
     "ar": "تنجح في أربع من خمس محاولات وقوف خلفي مستقيمة وفي المنتصف."
    },
    {
     "en": "You fix a bad start calmly by pulling forward, not forcing it.",
     "ar": "تصحّح البداية الخاطئة بهدوء بالتقدم للأمام، لا بالإصرار."
    },
    {
     "en": "You can name the yellow-kerb rule and the 7, 15 and 20 metre limits.",
     "ar": "تعرف قاعدة الرصيف الأصفر وحدود 7 و15 و20 مترًا."
    }
   ]
  },
  {
   "id": "L8",
   "where": "quiet",
   "wk": 3,
   "en": "Parallel parking and the three-point turn",
   "ar": "الوقوف الموازي والدوران بثلاث حركات",
   "skills": [
    20,
    21
   ],
   "ch": [
    "c-tests"
   ],
   "dg": [],
   "before": [
    {
     "en": "Park **parallel to the roadside or kerb** unless a sign allows another way.",
     "ar": "اركن المركبة **بالتوازي مع جانب الطريق أو الرصيف** ما لم تُشر لوحة إلى طريقة أخرى.",
     "src": "moroor",
     "ref": "215",
     "kind": "must",
     "topic": "k23"
    },
    {
     "en": "Check all round **before opening your door** so you don't hit anyone.",
     "ar": "انظر حولك **قبل فتح الباب** حتى لا تصطدم بأحد.",
     "src": "dvsa",
     "ref": "239",
     "kind": "must",
     "topic": "k23"
    },
    {
     "en": "On a hill, use the handbrake firmly and **turn wheels away from the kerb facing uphill**.",
     "ar": "على المرتفع، شدّ فرامل اليد جيدًا و**وجّه العجلات بعيدًا عن الرصيف عند الصعود**.",
     "src": "dvsa",
     "ref": "252",
     "kind": "tip",
     "topic": "k23"
    },
    {
     "en": "Passing parked cars at ==50 km/h==, leave about **==1 metre==** — a door's width.",
     "ar": "عند المرور بالمركبات المتوقفة بسرعة ==50 كم/ساعة== اترك نحو **==متر واحد==**، أي مساحة فتح الباب.",
     "src": "moroor",
     "ref": "201",
     "kind": "number",
     "topic": "k12",
     "fig": "hbf-202-1"
    },
    {
     "en": "Turn around in a **quiet side road**, not a busy one.",
     "ar": "اختر **طريقًا فرعيًا هادئًا** للالتفاف بدل الطرق المزدحمة.",
     "src": "dvsa",
     "ref": "200",
     "kind": "tip",
     "topic": "k19"
    },
    {
     "en": "Reverse on public roads only when necessary, for **no more than ==20 metres==**.",
     "ar": "لا يجوز الرجوع إلى الخلف في الطرق العامة إلا للضرورة ولمسافة **لا تتجاوز ==20 مترًا==**.",
     "src": "moroor",
     "ref": "125",
     "kind": "number",
     "topic": "k19"
    },
    {
     "en": "**Never use parking bays or pavements** to complete a U-turn.",
     "ar": "**لا تستخدم ممرات الوقوف أو الأرصفة** لإتمام الدوران للخلف.",
     "src": "moroor",
     "ref": "158",
     "kind": "never",
     "topic": "k17"
    },
    {
     "en": "When stopped on the road, passengers get in and out **on the pavement side**.",
     "ar": "عند الوقوف في الطريق، يدخل الركاب ويخرجون **من جهة الرصيف**.",
     "src": "moroor",
     "ref": "99",
     "kind": "must",
     "topic": "k33",
     "fig": "hbf-100-1"
    },
    {
     "en": "**Never leave the car unlocked**, the engine running, or the key inside.",
     "ar": "**يُمنع ترك المركبة غير مقفلة** أو المحرك يعمل أو المفتاح بداخلها.",
     "src": "moroor",
     "ref": "96",
     "kind": "never",
     "topic": "k3"
    },
    {
     "en": "At narrowings, keep right and **stop if needed to let oncoming traffic pass**.",
     "ar": "عند الاختناقات، الزم اليمين و**توقف عند الحاجة حتى تمر المركبات القادمة**.",
     "src": "moroor",
     "ref": "108",
     "kind": "priority",
     "topic": "k7"
    },
    {
     "en": "On narrow roads, pull into a **passing place** to let oncoming traffic pass.",
     "ar": "في الطرق الضيقة، ادخل **مكان التجاوز** لتسمح للقادم بالمرور.",
     "src": "dvsa",
     "ref": "155",
     "kind": "tip",
     "topic": "k30"
    },
    {
     "en": "**Don't park in passing places**.",
     "ar": "**لا تقف في أماكن التجاوز**.",
     "src": "dvsa",
     "ref": "156",
     "kind": "never",
     "topic": "k30"
    }
   ],
   "car": [
    {
     "en": "Press **VIEW** to switch to the **kerb-side view** and see how close the wheel is to the kerb.",
     "ar": "اضغط **VIEW** لتنتقل إلى **عرض جهة الرصيف** وترى قرب العجلة من الرصيف.",
     "applies": "fronx",
     "ref": "My Fronx Guide (360° camera)"
    },
    {
     "en": "Hitting the kerb hard can damage the tyre wall; if you touch it, check the tyre later.",
     "ar": "الاصطدام القوي بالرصيف قد يتلف جانب الإطار؛ إن لامسته فافحص الإطار لاحقًا.",
     "applies": "all",
     "ref": "Manual 9-19"
    },
    {
     "en": "During the three-point turn, **stop fully** before every change between D and R.",
     "ar": "في الدوران بثلاث حركات **توقف تمامًا** قبل كل تبديل بين D وR.",
     "applies": "fronx",
     "ref": "Manual 5-24"
    }
   ],
   "steps": [
    {
     "en": "Parallel: stop next to the car in front of the space, about a door's width away.",
     "ar": "الوقوف الموازي: توقف بجانب السيارة أمام المكان، على بعد عرض باب تقريبًا."
    },
    {
     "en": "Select R. Look all round.",
     "ar": "اختر R. انظر حولك."
    },
    {
     "en": "Back slowly until your back wheel is level with its back bumper.",
     "ar": "ارجع ببطء حتى تحاذي عجلتك الخلفية صدّامها الخلفي."
    },
    {
     "en": "Turn the wheel fully towards the kerb. Creep back.",
     "ar": "أدِر المقود كاملًا نحو الرصيف. ارجع ببطء."
    },
    {
     "en": "When you are at about 45 degrees, straighten the wheel.",
     "ar": "عندما تصل إلى زاوية 45 درجة تقريبًا، أعِد المقود مستقيمًا."
    },
    {
     "en": "Then turn fully away from the kerb to bring the front in.",
     "ar": "ثم أدِر المقود كاملًا بعيدًا عن الرصيف لتُدخل المقدمة."
    },
    {
     "en": "Stop close to the kerb and straight. Straighten the wheels.",
     "ar": "توقف قريبًا من الرصيف ومستقيمًا. أعِد العجلات مستقيمة."
    },
    {
     "en": "Three-point turn: in a quiet street, pull over, look all round.",
     "ar": "الدوران بثلاث حركات: في شارع هادئ، اقترب من الجانب وانظر حولك."
    },
    {
     "en": "Forward across, full lock. Stop before the kerb. Back, full lock other way. Forward and away.",
     "ar": "تقدّم بالعرض والمقود كامل. توقف قبل الرصيف. ارجع والمقود كامل للجهة الأخرى. ثم تقدّم وانطلق."
    }
   ],
   "check": [
    {
     "en": "You park parallel within a hand-span of the kerb without touching it.",
     "ar": "تقف موازيًا على بعد شبر من الرصيف دون لمسه."
    },
    {
     "en": "You finish the turn in three moves without touching a kerb.",
     "ar": "تُكمل الدوران في ثلاث حركات دون لمس الرصيف."
    },
    {
     "en": "You keep looking around during every move, and stop for anyone coming.",
     "ar": "تواصل النظر حولك في كل حركة، وتتوقف لأي قادم."
    }
   ]
  },
  {
   "id": "L9",
   "where": "quiet",
   "wk": 4,
   "en": "Slope start, emergency stop, T and X tracks",
   "ar": "الانطلاق على المنحدر والتوقف الاضطراري ومسارا T وX",
   "skills": [
    24,
    25,
    26
   ],
   "ch": [
    "c-speed",
    "c-tests"
   ],
   "dg": [],
   "before": [
    {
     "en": "Stopping distance = reaction distance + braking distance; reaction takes about **==1 second==**.",
     "ar": "مسافة التوقف = مسافة ردة الفعل + مسافة الفرملة؛ وزمن ردة الفعل نحو **==ثانية واحدة==**.",
     "src": "moroor",
     "ref": "19–20",
     "kind": "number",
     "topic": "k11",
     "fig": "hbf-20-1"
    },
    {
     "en": "**Reaction distance** ≈ (speed ÷ ==10==) × ==3==; braking distance ≈ (speed ÷ ==10==)².",
     "ar": "**مسافة ردة الفعل** ≈ (السرعة ÷ ==10==) × ==3==، ومسافة الفرملة ≈ (السرعة ÷ ==10==)².",
     "src": "moroor",
     "ref": "22",
     "kind": "number",
     "topic": "k11"
    },
    {
     "en": "Fatigue, distraction, drugs or alcohol **lengthen your reaction distance**.",
     "ar": "التعب وتشتت الانتباه والمخدرات والكحول **تطيل مسافة ردة الفعل**.",
     "src": "moroor",
     "ref": "20",
     "kind": "danger",
     "topic": "k11"
    },
    {
     "en": "Heavy loads, slippery roads, poor tyres or brakes **lengthen braking distance**.",
     "ar": "الحمولة الثقيلة والطريق الزلق وسوء الإطارات أو الفرامل **تطيل مسافة الفرملة**.",
     "src": "moroor",
     "ref": "21",
     "kind": "danger",
     "topic": "k11",
     "fig": "hbf-22-1"
    },
    {
     "en": "In an emergency, **brake immediately**.",
     "ar": "في حالة الطوارئ، **اضغط المكابح فورًا**.",
     "src": "dvsa",
     "ref": "118",
     "kind": "must",
     "topic": "k26"
    },
    {
     "en": "With ABS, **press the brake firmly** and keep pressure until you've slowed enough.",
     "ar": "مع نظام ABS، **اضغط المكابح بقوة** وحافظ على الضغط حتى تنخفض السرعة.",
     "src": "dvsa",
     "ref": "120",
     "kind": "tip",
     "topic": "k26"
    },
    {
     "en": "ABS keeps steering control but **does not guarantee a shorter stop**.",
     "ar": "نظام ABS يحافظ على التحكم بالتوجيه لكنه **لا يضمن مسافة توقف أقصر**.",
     "src": "dvsa",
     "ref": "120",
     "kind": "danger",
     "topic": "k26"
    },
    {
     "en": "Braking so hard that **wheels lock** can cause loss of control.",
     "ar": "الكبح بقوة تؤدي إلى **انغلاق العجلات** قد يفقدك السيطرة.",
     "src": "dvsa",
     "ref": "118",
     "kind": "danger",
     "topic": "k26"
    },
    {
     "en": "In a skid, release the brake or accelerator and **steer into the skid**.",
     "ar": "عند الانزلاق، ارفع قدمك عن المكابح أو الوقود و**وجّه في اتجاه الانزلاق**.",
     "src": "dvsa",
     "ref": "119",
     "kind": "tip",
     "topic": "k26"
    },
    {
     "en": "**Don't coast** in neutral or with the clutch down; you lose engine braking.",
     "ar": "**لا تسِر على المحايد** أو بالقابض مضغوطًا؛ فتفقد كبح المحرك.",
     "src": "dvsa",
     "ref": "122",
     "kind": "never",
     "topic": "k26"
    },
    {
     "en": "Select a **lower gear** before a long downhill slope.",
     "ar": "اختر **ترسًا أدنى** قبل المنحدرات الطويلة.",
     "src": "dvsa",
     "ref": "160",
     "kind": "tip",
     "topic": "k6"
    },
    {
     "en": "Don't switch off the engine while moving or let the car **roll downhill** with it off.",
     "ar": "لا تُطفئ المحرك أثناء القيادة، ولا تترك المركبة **تتدحرج على منحدر** والمحرك مطفأ.",
     "src": "moroor",
     "ref": "94",
     "kind": "never",
     "topic": "k3"
    }
   ],
   "car": [
    {
     "en": "**Hill hold** keeps the brakes on for about **2 seconds** on an uphill start while you move your foot to the gas.",
     "ar": "**مساعد صعود التل** يُبقي الفرامل لمدة **ثانيتين** تقريبًا عند الانطلاق صعودًا وأنت تنقل قدمك إلى البنزين.",
     "applies": "fronx",
     "ref": "Manual 5-109; My Fronx Guide"
    },
    {
     "en": "**Never hold the car on a slope with the gas.** Use the brake.",
     "ar": "**لا تثبّت السيارة على المنحدر بالبنزين أبدًا.** استخدم الفرامل.",
     "applies": "fronx",
     "ref": "Manual 5-24; My Fronx Guide"
    },
    {
     "en": "Your car has **ABS and ESP**. In an emergency stop, press the brake hard and keep pressing — a buzzing pedal is normal.",
     "ar": "في سيارتك **ABS وESP**. في التوقف الاضطراري اضغط الفرامل بقوة واستمر — اهتزاز الدواسة طبيعي.",
     "applies": "all",
     "ref": "Manual 4-44, 4-50"
    },
    {
     "en": "On a long downhill, choose **M** and a lower gear (paddle −) to let the engine help you slow.",
     "ar": "في النزول الطويل اختر **M** وغيارًا أقل (المجداف −) ليساعدك المحرك على التخفيف.",
     "applies": "fronx",
     "ref": "Manual 5-24"
    },
    {
     "en": "Manual car on a hill: handbrake on, find the biting point, add gas, then release the handbrake. Stalled? Brake, handbrake, restart.",
     "ar": "القير اليدوي على المرتفع: فرامل اليد مرفوعة، جد نقطة التعشيق، أضف بنزينًا، ثم أنزل فرامل اليد. انطفأ المحرك؟ فرامل، فرامل اليد، وشغّل من جديد.",
     "applies": "manual",
     "ref": "Manual 5-22, annex M3"
    }
   ],
   "steps": [
    {
     "en": "Slope: stop on the slope with the foot brake.",
     "ar": "المنحدر: توقف على المنحدر بالفرامل."
    },
    {
     "en": "Handbrake up. Foot off the brake. The car stays still.",
     "ar": "ارفع فرامل اليد. ارفع قدمك عن الفرامل. السيارة ثابتة."
    },
    {
     "en": "Foot back on the brake. Handbrake down.",
     "ar": "أعِد قدمك على الفرامل. أنزل فرامل اليد."
    },
    {
     "en": "Move your foot to the gas and press gently. The car goes up, not back.",
     "ar": "انقل قدمك إلى البنزين واضغط بلطف. تصعد السيارة ولا ترجع."
    },
    {
     "en": "Emergency stop: drive at a steady speed. Wait for the instructor's signal.",
     "ar": "التوقف الاضطراري: قُد بسرعة ثابتة. انتظر إشارة المدرب."
    },
    {
     "en": "On the signal, press the brake hard and fast. Hold the wheel straight.",
     "ar": "عند الإشارة، اضغط الفرامل بقوة وسرعة. أمسك المقود مستقيمًا."
    },
    {
     "en": "Keep pressing until the car stops. Then handbrake and P.",
     "ar": "استمر بالضغط حتى تتوقف السيارة. ثم فرامل اليد وP."
    },
    {
     "en": "Look all round before you move off again.",
     "ar": "انظر حولك قبل أن تنطلق من جديد."
    },
    {
     "en": "T and X tracks: drive in slowly, stop, reverse out the other way.",
     "ar": "مسارا T وX: ادخل ببطء، توقف، ثم اخرج للخلف إلى الجهة الأخرى."
    }
   ],
   "check": [
    {
     "en": "You start up a slope without rolling back.",
     "ar": "تنطلق على المنحدر دون أن ترجع السيارة."
    },
    {
     "en": "You stop quickly and straight when told, both hands on the wheel.",
     "ar": "تتوقف بسرعة وباستقامة عند الطلب واليدان على المقود."
    },
    {
     "en": "You look round before moving off after the stop.",
     "ar": "تنظر حولك قبل الانطلاق بعد التوقف."
    },
    {
     "en": "You can explain reaction distance + braking distance = stopping distance.",
     "ar": "تستطيع شرح: مسافة رد الفعل + مسافة الفرملة = مسافة التوقف."
    }
   ]
  },
  {
   "id": "L10",
   "where": "quiet",
   "wk": 4,
   "en": "Manoeuvre check, vehicle-check questions, then fix the two weakest",
   "ar": "اختبار تجريبي للمناورات وأسئلة فحص السيارة، ثم تحسين أضعف مهارتين",
   "skills": [
    19,
    20,
    21,
    22,
    24,
    25,
    26
   ],
   "ch": [
    "c-tests"
   ],
   "dg": [],
   "before": [
    {
     "en": "Remember the routine: **Mirrors – Signal – Manoeuvre**.",
     "ar": "تذكّر التسلسل: **المرايا – الإشارة – المناورة**.",
     "src": "dvsa",
     "ref": "161",
     "kind": "tip",
     "topic": "k6"
    },
    {
     "en": "Always **look over your shoulder** to check the blind spot.",
     "ar": "**انظر من فوق كتفك** دائمًا للتحقق من النقطة العمياء.",
     "src": "moroor",
     "ref": "110–111",
     "kind": "must",
     "topic": "k8"
    },
    {
     "en": "Check all mirrors and the **blind spot**, especially for children, before reversing.",
     "ar": "افحص المرايا جميعها و**النقطة العمياء**، خصوصًا بحثًا عن الأطفال، قبل الرجوع.",
     "src": "dvsa",
     "ref": "202",
     "kind": "must",
     "topic": "k19"
    },
    {
     "en": "Reverse on public roads only when necessary, for **no more than ==20 metres==**.",
     "ar": "لا يجوز الرجوع إلى الخلف في الطرق العامة إلا للضرورة ولمسافة **لا تتجاوز ==20 مترًا==**.",
     "src": "moroor",
     "ref": "125",
     "kind": "number",
     "topic": "k19"
    },
    {
     "en": "Before leaving the car, **switch off the engine and apply the handbrake**.",
     "ar": "قبل مغادرة المركبة، **أطفئ المحرك وشدّ فرامل اليد**.",
     "src": "dvsa",
     "ref": "239",
     "kind": "must",
     "topic": "k23"
    },
    {
     "en": "Check all round **before opening your door** so you don't hit anyone.",
     "ar": "انظر حولك **قبل فتح الباب** حتى لا تصطدم بأحد.",
     "src": "dvsa",
     "ref": "239",
     "kind": "must",
     "topic": "k23"
    },
    {
     "en": "Signal **in plenty of time** and cancel it after use.",
     "ar": "أعطِ الإشارة **في وقت كافٍ** وألغِها بعد الاستخدام.",
     "src": "dvsa",
     "ref": "103",
     "kind": "tip",
     "topic": "k9"
    },
    {
     "en": "At a STOP sign, **stop completely** for about ==3 seconds== and look all ways.",
     "ar": "عند إشارة «قف» **توقّف تمامًا** لمدة ==3 ثوانٍ== وراقب جميع الاتجاهات.",
     "src": "moroor",
     "ref": "135",
     "kind": "number",
     "topic": "k14",
     "fig": "hbf-136-2"
    },
    {
     "en": "Adjust **seat and mirrors**, and fasten belts for driver and passengers.",
     "ar": "اضبط **وضعية الجلوس والمرايا**، واربط الحزام للسائق والركاب.",
     "src": "moroor",
     "ref": "92",
     "kind": "must",
     "topic": "k3",
     "fig": "hbf-93-1"
    },
    {
     "en": "Keep **lights, indicators, reflectors and number plates** clean and clear.",
     "ar": "حافظ على **المصابيح والإشارات والعاكسات واللوحات** نظيفة وواضحة.",
     "src": "dvsa",
     "ref": "Annex 6",
     "kind": "must",
     "topic": "k2"
    },
    {
     "en": "Keep the **windscreen and windows clean** and free of obstructions.",
     "ar": "حافظ على **الزجاج الأمامي والنوافذ نظيفة** وخالية مما يحجب الرؤية.",
     "src": "dvsa",
     "ref": "Annex 6",
     "kind": "must",
     "topic": "k2"
    },
    {
     "en": "Pulling to one side when braking suggests a **brake or tyre fault**.",
     "ar": "انحراف المركبة عند الكبح يدل غالبًا على **خلل في الفرامل أو ضغط الإطارات**.",
     "src": "dvsa",
     "ref": "Annex 6",
     "kind": "danger",
     "topic": "k2"
    },
    {
     "en": "A **green light** on the dashboard tells you everything is working normally.",
     "ar": "**مصباح التحكم الأخضر** يخبرك أن كل شيء على ما يرام.",
     "src": "moroor",
     "ref": "235",
     "kind": "tip",
     "topic": "k5",
     "fig": "hbf-236-1"
    }
   ],
   "car": [
    {
     "en": "Before the check, clean the **camera lenses** and make sure the mirrors are unfolded.",
     "ar": "قبل الاختبار، نظّف **عدسات الكاميرا** وتأكد أن المرايا غير مطوية.",
     "applies": "fronx",
     "ref": "My Fronx Guide"
    },
    {
     "en": "Slow is safe: control every manoeuvre with the **brake**.",
     "ar": "البطء أمان: تحكّم في كل مناورة **بالفرامل**.",
     "applies": "all",
     "ref": "Manual 5-8"
    }
   ],
   "steps": [
    {
     "en": "The instructor names a manoeuvre. Do it without help.",
     "ar": "يذكر المدرب مناورة. نفّذها دون مساعدة."
    },
    {
     "en": "Do all of them: reverse, bay park, parallel, turn, slope, emergency stop.",
     "ar": "نفّذها كلها: الرجوع، الوقوف في الموقف، الموازي، الدوران، المنحدر، التوقف الاضطراري."
    },
    {
     "en": "The instructor marks each one.",
     "ar": "يقيّم المدرب كل واحدة."
    },
    {
     "en": "Pick the two weakest.",
     "ar": "اختر أضعف اثنتين."
    },
    {
     "en": "Practise those two, slowly, five times each.",
     "ar": "تدرّب عليهما ببطء، خمس مرات لكل واحدة."
    },
    {
     "en": "Answer the vehicle questions: show the lights, the tyres, the warning lights.",
     "ar": "أجب عن أسئلة السيارة: أرِ المدرب الأنوار والإطارات ولمبات التحذير."
    },
    {
     "en": "Do the full check once more.",
     "ar": "أعِد الاختبار كاملًا مرة أخرى."
    }
   ],
   "check": [
    {
     "en": "You pass every manoeuvre with no serious fault.",
     "ar": "تنجح في كل مناورة دون خطأ جسيم."
    },
    {
     "en": "You remember the checks without being reminded.",
     "ar": "تتذكر الفحوص دون تذكير."
    },
    {
     "en": "Your two weakest manoeuvres improved on the second try.",
     "ar": "تحسّنت أضعف مناورتين في المحاولة الثانية."
    }
   ]
  },
  {
   "id": "L11",
   "where": "road",
   "wk": 4,
   "en": "Residential streets, speed humps, speed and signs",
   "ar": "الشوارع السكنية والمطبات والسرعة واللوحات",
   "skills": [
    11,
    27
   ],
   "ch": [
    "c-speed",
    "c-saudi"
   ],
   "dg": [],
   "before": [
    {
     "en": "Always **adapt your speed to conditions** so you can stop in time.",
     "ar": "يجب دائمًا **تكييف سرعة القيادة مع الظروف المحيطة** بحيث تستطيع التوقف في الوقت المناسب.",
     "src": "moroor",
     "ref": "18",
     "kind": "must",
     "topic": "k11",
     "fig": "hbf-176-1"
    },
    {
     "en": "A speed-limit sign shows the **maximum**, not a target speed.",
     "ar": "لوحة حد السرعة تُظهر **الحد الأقصى** وليست سرعة مطلوبة.",
     "src": "moroor",
     "ref": "170",
     "kind": "tip",
     "fig": "hbf-171-1",
     "topic": "k11"
    },
    {
     "en": "**Slow down** at junctions, bends, bridges, tunnels, rail crossings, and in poor visibility.",
     "ar": "**خفّف السرعة** عند التقاطعات والمنحنيات والجسور والأنفاق ومعابر السكك وعند تدني الرؤية.",
     "src": "moroor",
     "ref": "176",
     "kind": "must",
     "topic": "k11",
     "fig": "hbf-177-1"
    },
    {
     "en": "Don't **drive too slowly** without reason or brake suddenly unless needed for safety.",
     "ar": "لا **تعرقل السير بالقيادة ببطء شديد** دون سبب، ولا تفرمل فجأة إلا للسلامة.",
     "src": "moroor",
     "ref": "184",
     "kind": "never",
     "topic": "k11",
     "fig": "hbf-185-1"
    },
    {
     "en": "Drive **slowly and carefully** on streets likely to have pedestrians, cyclists and parked cars.",
     "ar": "قُد **ببطء وحذر** في الشوارع التي يكثر فيها المشاة والدراجات والمركبات المتوقفة.",
     "src": "dvsa",
     "ref": "152",
     "kind": "tip",
     "topic": "k27",
     "fig": "hbf-47-1"
    },
    {
     "en": "Watch for **children running out** from between parked cars.",
     "ar": "انتبه إلى **الأطفال الذين قد يركضون** فجأة من بين المركبات المتوقفة.",
     "src": "dvsa",
     "ref": "152",
     "kind": "danger",
     "topic": "k27"
    },
    {
     "en": "Expect vehicles emerging from driveways, cars moving off and **doors opening**.",
     "ar": "توقّع خروج مركبات من المداخل، وتحرّك مركبات متوقفة، و**فتح الأبواب** فجأة.",
     "src": "dvsa",
     "ref": "152",
     "kind": "danger",
     "topic": "k27"
    },
    {
     "en": "**Reduce your speed** when approaching speed humps, chicanes and road narrowings.",
     "ar": "**خفّف سرعتك** عند الاقتراب من المطبات الصناعية والتعرجات وتضييقات الطريق.",
     "src": "dvsa",
     "ref": "153",
     "kind": "must",
     "topic": "k27"
    },
    {
     "en": "**Do not overtake** moving road users within traffic-calming areas.",
     "ar": "**لا تتجاوز** مستخدمي الطريق المتحركين داخل مناطق تهدئة المرور.",
     "src": "dvsa",
     "ref": "153",
     "kind": "never",
     "topic": "k27"
    },
    {
     "en": "**Children** are easily distracted, act on impulse and misjudge danger.",
     "ar": "**الأطفال** سريعو التشتت، ويتصرفون تلقائيًا، ولا يقدّرون المخاطر بشكل صحيح.",
     "src": "moroor",
     "ref": "88",
     "kind": "danger",
     "topic": "k10",
     "fig": "hbf-89-1"
    },
    {
     "en": "Drive slowly near **schools, bus stops and parked vehicles**; children may run out.",
     "ar": "قُد ببطء قرب **المدارس ومواقف الحافلات والمركبات المتوقفة**؛ فقد يندفع الأطفال.",
     "src": "dvsa",
     "ref": "206, 208",
     "kind": "tip",
     "topic": "k10"
    },
    {
     "en": "**Warning signs** are triangles with a red border, white background and black symbols.",
     "ar": "**إشارات التحذير** مثلثة بإطار أحمر وخلفية بيضاء ورموز سوداء.",
     "src": "moroor",
     "ref": "52, 55",
     "kind": "tip",
     "topic": "k9",
     "fig": "hbf-53-1"
    },
    {
     "en": "**Red-bordered circles prohibit**; blue circles are mandatory.",
     "ar": "**الدائرية البيضاء بإطار أحمر تدل على المنع**، والزرقاء إلزامية.",
     "src": "moroor",
     "ref": "53",
     "kind": "must",
     "topic": "k9",
     "fig": "hbf-54-1"
    },
    {
     "en": "Keep a **reduced speed along the whole stretch** with traffic-calming features.",
     "ar": "حافظ على سرعة منخفضة **طوال المقطع** الذي توجد فيه وسائل تهدئة المرور.",
     "src": "dvsa",
     "ref": "153",
     "kind": "tip",
     "topic": "k27"
    },
    {
     "en": "Give way to oncoming traffic **where signs tell you to** at narrowings.",
     "ar": "أعطِ الأولوية للقادمين من الاتجاه المقابل **عندما توجّهك اللوحات** بذلك عند التضييقات.",
     "src": "dvsa",
     "ref": "153",
     "kind": "priority",
     "topic": "k27"
    }
   ],
   "car": [
    {
     "en": "The **head-up display** shows your speed in your line of sight. Adjust it only while stopped.",
     "ar": "**الشاشة الأمامية (HUD)** تعرض سرعتك أمام عينيك. اضبطها فقط والسيارة متوقفة.",
     "applies": "fronx",
     "ref": "Manual 5-66; My Fronx Guide"
    },
    {
     "en": "Glance at the speedometer often — at low speeds it is easy to creep over the limit.",
     "ar": "انظر إلى عداد السرعة كثيرًا؛ ففي السرعات المنخفضة يسهل تجاوز الحد دون أن تشعر.",
     "applies": "all",
     "ref": "Manual 1-9"
    },
    {
     "en": "In D the car keeps creeping; over a hump **brake before, coast over, then gentle gas**.",
     "ar": "في وضع D تواصل السيارة الزحف؛ عند المطب **اضغط الفرامل قبله، ومرّ عليه بهدوء، ثم بنزين خفيف**.",
     "applies": "fronx",
     "ref": "Manual 5-24"
    }
   ],
   "steps": [
    {
     "en": "Drive slowly in the street. Look between parked cars.",
     "ar": "قُد ببطء في الشارع. انظر بين السيارات المتوقفة."
    },
    {
     "en": "See a hump? Brake before it, not on it.",
     "ar": "ترى مطبًا؟ اضغط الفرامل قبله، لا فوقه."
    },
    {
     "en": "Roll over the hump slowly. Then speed up gently.",
     "ar": "مرّ على المطب ببطء. ثم زد السرعة بلطف."
    },
    {
     "en": "Read every sign. Say it out loud.",
     "ar": "اقرأ كل لوحة. قلها بصوت عالٍ."
    },
    {
     "en": "Keep at least two seconds behind the car in front.",
     "ar": "ابقَ على بعد ثانيتين على الأقل خلف السيارة الأمامية."
    },
    {
     "en": "Near schools and mosques, slow down more.",
     "ar": "قرب المدارس والمساجد، خفّف أكثر."
    },
    {
     "en": "Ball in the road? Expect a child. Stop.",
     "ar": "كرة في الطريق؟ توقّع طفلًا. توقف."
    }
   ],
   "check": [
    {
     "en": "You can always say the speed limit and which sign told you.",
     "ar": "تعرف حد السرعة دائمًا واللوحة التي أخبرتك به."
    },
    {
     "en": "You go over humps smoothly, braking before them.",
     "ar": "تمرّ على المطبات بسلاسة وتفرمل قبلها."
    },
    {
     "en": "You can name a warning, a ban and a must-do sign by shape and colour.",
     "ar": "تميّز لوحة التحذير والمنع والإلزام بالشكل واللون."
    },
    {
     "en": "You keep a two-second gap without being told.",
     "ar": "تحافظ على مسافة ثانيتين دون تذكير."
    }
   ]
  },
  {
   "id": "L12",
   "where": "road",
   "wk": 5,
   "en": "Junctions, traffic lights, pedestrian and rail crossings",
   "ar": "التقاطعات والإشارات الضوئية ومعابر المشاة والسكك الحديدية",
   "skills": [
    14,
    16
   ],
   "ch": [
    "c-junctions"
   ],
   "dg": [
    "dg-170",
    "dg-174",
    "dg-192"
   ],
   "before": [
    {
     "en": "On red, **stop at the stop line** and don't block the pedestrian crossing.",
     "ar": "عند الضوء الأحمر **توقّف عند خط التوقف** ولا تتجاوز منطقة عبور المشاة.",
     "src": "moroor",
     "ref": "130",
     "kind": "must",
     "topic": "k14",
     "fig": "hbf-131-1"
    },
    {
     "en": "**Don't enter a junction on green** if you can't clear it.",
     "ar": "**لا تدخل التقاطع مع الضوء الأخضر** إذا لم تتمكن من عبوره.",
     "src": "moroor",
     "ref": "130",
     "kind": "never",
     "topic": "k14",
     "fig": "hbf-130-1"
    },
    {
     "en": "Turning right on red: **stop for ==2–3 seconds==**, then turn below ==15 km/h==.",
     "ar": "للانعطاف يمينًا عند الأحمر: **توقّف ==2–3 ثوانٍ==**، ثم انعطف بسرعة أقل من ==15 كم/ساعة==.",
     "src": "moroor",
     "ref": "132",
     "kind": "number",
     "topic": "k14",
     "fig": "hbf-133-1"
    },
    {
     "en": "**No right turn on red** where there's a separate right-turn lane or a prohibiting sign.",
     "ar": "**لا يُسمح بالانعطاف يمينًا عند الأحمر** إذا وُجد مسار مخصص للانعطاف أو إشارة تمنع ذلك.",
     "src": "moroor",
     "ref": "133",
     "kind": "never",
     "topic": "k14"
    },
    {
     "en": "A **flashing amber** light means take care and follow the priority rules.",
     "ar": "الضوء **الأصفر الوامض** يعني انتبه واتبع قواعد الأولوية.",
     "src": "moroor",
     "ref": "131",
     "kind": "tip",
     "fig": "hbf-132-1",
     "topic": "k14"
    },
    {
     "en": "At a STOP sign, **stop completely** for about ==3 seconds== and look all ways.",
     "ar": "عند إشارة «قف» **توقّف تمامًا** لمدة ==3 ثوانٍ== وراقب جميع الاتجاهات.",
     "src": "moroor",
     "ref": "135",
     "kind": "number",
     "topic": "k14",
     "fig": "hbf-136-1"
    },
    {
     "en": "Joining from a side road, **give way to traffic on the main road**.",
     "ar": "عند الدخول من طريق ثانوي، **أعطِ الأولوية للمركبات على الطريق الرئيسي**.",
     "src": "moroor",
     "ref": "148–149",
     "kind": "priority",
     "topic": "k14",
     "fig": "hbf-149-1"
    },
    {
     "en": "A **traffic officer's signals override** lights and signs.",
     "ar": "**إشارات رجل المرور لها الأولوية القصوى** ويجب الالتزام بها.",
     "src": "moroor",
     "ref": "134",
     "kind": "priority",
     "topic": "k9",
     "fig": "hbf-135-1"
    },
    {
     "en": "**Give way once a pedestrian is on a zebra crossing**; be ready for those waiting.",
     "ar": "**أعطِ الأولوية للمشاة فور دخولهم المعبر المخطط**، واستعد لمن ينتظر العبور.",
     "src": "dvsa",
     "ref": "195",
     "kind": "priority",
     "topic": "k16",
     "fig": "hbf-163-1"
    },
    {
     "en": "When turning, **stop if needed for pedestrians** crossing at the junction.",
     "ar": "عند الانعطاف، **توقّف عند الحاجة للمشاة** العابرين عند التقاطع.",
     "src": "moroor",
     "ref": "81",
     "kind": "priority",
     "topic": "k10",
     "fig": "hbf-82-1"
    },
    {
     "en": "At signal crossings, **stop on red**; on flashing amber, give way to pedestrians.",
     "ar": "عند المعابر الضوئية، **توقف عند الأحمر**، ومع الأصفر الوامض أعطِ الأولوية للمشاة.",
     "src": "dvsa",
     "ref": "196",
     "kind": "must",
     "topic": "k16",
     "fig": "hbf-51-1"
    },
    {
     "en": "Give way to anyone **still crossing after your light turns green**.",
     "ar": "أعطِ الأولوية لمن **ما زال يعبر بعد أن يتحول ضوؤك إلى الأخضر**.",
     "src": "dvsa",
     "ref": "198",
     "kind": "priority",
     "topic": "k16"
    },
    {
     "en": "**Don't enter a crossing** unless you can clear it completely.",
     "ar": "**لا تدخل المعبر** ما لم تستطع اجتيازه بالكامل.",
     "src": "dvsa",
     "ref": "192",
     "kind": "never",
     "topic": "k16"
    },
    {
     "en": "**Trains always have priority**; never stop on the tracks.",
     "ar": "**مركبات السكك الحديدية لها الأولوية**؛ ويُمنع التوقف على القضبان.",
     "src": "moroor",
     "ref": "164–165",
     "kind": "priority",
     "topic": "k14",
     "fig": "hbf-166-1"
    },
    {
     "en": "**Children** often can't judge vehicle speed or distance.",
     "ar": "**الأطفال** غالبًا لا يستطيعون تقدير سرعة المركبات أو بعدها.",
     "src": "dvsa",
     "ref": "7",
     "kind": "danger",
     "topic": "k16"
    }
   ],
   "car": [
    {
     "en": "At a red light the engine may **auto-stop** and the AC drops to fan only. Lift off the brake and it restarts at once.",
     "ar": "عند الإشارة الحمراء قد **يتوقف المحرك تلقائيًا** ويصبح المكيف مروحة فقط. ارفع قدمك عن الفرامل فيعود فورًا.",
     "applies": "fronx",
     "ref": "Manual 5-52; My Fronx Guide"
    },
    {
     "en": "If the auto-stop bothers you in heat, press **A OFF** (by your left knee). It turns back on each restart.",
     "ar": "إذا أزعجك التوقف التلقائي في الحر، اضغط **A OFF** (قرب ركبتك اليسرى). يعود للعمل عند كل تشغيل.",
     "applies": "fronx",
     "ref": "My Fronx Guide"
    },
    {
     "en": "Waiting at lights: **foot on the brake**, stay in D.",
     "ar": "أثناء الانتظار عند الإشارة: **قدمك على الفرامل** وابقَ على D.",
     "applies": "all",
     "ref": "Manual 5-8"
    }
   ],
   "steps": [
    {
     "en": "Look far ahead at the lights. Guess when they will change.",
     "ar": "انظر بعيدًا إلى الإشارة. توقّع متى ستتغير."
    },
    {
     "en": "Red: stop at the line, not on the crossing.",
     "ar": "الأحمر: توقف عند الخط، لا فوق ممر المشاة."
    },
    {
     "en": "Green: look both ways anyway. Then go.",
     "ar": "الأخضر: انظر في الاتجاهين رغم ذلك. ثم انطلق."
    },
    {
     "en": "Amber and you can stop safely? Stop.",
     "ar": "الأصفر وتستطيع التوقف بأمان؟ توقف."
    },
    {
     "en": "STOP sign: stop fully. Count three. Look. Then go.",
     "ar": "لوحة «قف»: توقف تمامًا. عُدّ ثلاثًا. انظر. ثم انطلق."
    },
    {
     "en": "Turning? Watch for people crossing the road you turn into.",
     "ar": "تنعطف؟ انتبه للمشاة الذين يعبرون الطريق الذي تدخله."
    },
    {
     "en": "Someone on the crossing? Stop and wait. Don't wave them on.",
     "ar": "شخص على الممر؟ توقف وانتظر. لا تُشِر له بالعبور."
    },
    {
     "en": "Can't clear the junction? Wait before it, even on green.",
     "ar": "لا تستطيع الخروج من التقاطع؟ انتظر قبله ولو كانت خضراء."
    }
   ],
   "check": [
    {
     "en": "You stop behind the line every time on red.",
     "ar": "تتوقف خلف الخط في كل مرة عند الأحمر."
    },
    {
     "en": "You make a full 3-second stop at STOP signs.",
     "ar": "تتوقف توقفًا كاملًا ثلاث ثوانٍ عند لوحة «قف»."
    },
    {
     "en": "You give way to pedestrians without being told.",
     "ar": "تعطي الأولوية للمشاة دون تذكير."
    },
    {
     "en": "You can explain when right on red is and is not allowed.",
     "ar": "تستطيع شرح متى يُسمح بالانعطاف يمينًا عند الأحمر ومتى لا يُسمح."
    }
   ]
  },
  {
   "id": "L13",
   "where": "road",
   "wk": 5,
   "en": "Roundabouts, small then multi-lane",
   "ar": "الدوارات، من الصغيرة إلى متعددة المسارات",
   "skills": [
    15
   ],
   "ch": [
    "c-junctions"
   ],
   "dg": [
    "dg-185"
   ],
   "before": [
    {
     "en": "Entering a roundabout, **give way to vehicles already on it**.",
     "ar": "عند الدخول إلى الدوار، **أعطِ الأولوية للمركبات التي تسير داخله**.",
     "src": "moroor",
     "ref": "155",
     "kind": "priority",
     "topic": "k15",
     "fig": "hbf-156-1"
    },
    {
     "en": "Turning right (first exit): approach and stay in **lane 1**.",
     "ar": "للانعطاف لليمين (المخرج 1): اقترب وابقَ في **المسار 1**.",
     "src": "moroor",
     "ref": "121",
     "kind": "tip",
     "topic": "k15",
     "fig": "hbf-122-1"
    },
    {
     "en": "Going straight (second exit): use **lane 2** where available.",
     "ar": "للقيادة بشكل مستقيم (المخرج 2): استخدم **المسار 2** إن وُجد.",
     "src": "moroor",
     "ref": "121",
     "kind": "tip",
     "topic": "k15"
    },
    {
     "en": "Turning left or going back (exits 3–4): use **lane 3** where available.",
     "ar": "للانعطاف لليسار أو الاستدارة (المخرج 3 و4): استخدم **المسار 3** إن وُجد.",
     "src": "moroor",
     "ref": "121",
     "kind": "tip",
     "topic": "k15"
    },
    {
     "en": "Turning right: **signal right** on approach and keep signalling to exit.",
     "ar": "للانعطاف لليمين: **أعطِ إشارة لليمين** عند الاقتراب وواصلها حتى الخروج.",
     "src": "moroor",
     "ref": "122",
     "kind": "must",
     "topic": "k15",
     "fig": "hbf-123-1"
    },
    {
     "en": "Going straight: no signal on approach; **signal right at the island of exit 1**.",
     "ar": "للقيادة المستقيمة: بدون إشارة عند الاقتراب، ثم **إشارة لليمين عند جزيرة المخرج 1**.",
     "src": "moroor",
     "ref": "122",
     "kind": "tip",
     "topic": "k15"
    },
    {
     "en": "Turning left or U-turning: **signal left** on approach, then right after the previous exit.",
     "ar": "للانعطاف لليسار أو الاستدارة: **أشِر لليسار** عند الاقتراب، ثم لليمين بعد المخرج السابق لمخرجك.",
     "src": "moroor",
     "ref": "122",
     "kind": "must",
     "topic": "k15"
    },
    {
     "en": "Decide your exit **as early as possible** and get into the correct lane.",
     "ar": "حدّد مخرجك **في أبكر وقت ممكن** وادخل المسار الصحيح.",
     "src": "dvsa",
     "ref": "184",
     "kind": "tip",
     "topic": "k15",
     "fig": "hbf-155-1"
    },
    {
     "en": "Others on the roundabout **may signal wrongly or not at all**.",
     "ar": "قد **لا يُشير الآخرون في الدوار أو يُشيرون خطأً**؛ فانتبه.",
     "src": "dvsa",
     "ref": "185",
     "kind": "danger",
     "topic": "k15"
    },
    {
     "en": "**Long vehicles** may straddle lanes on roundabouts; give them room.",
     "ar": "**المركبات الطويلة** قد تشغل مسارين في الدوار؛ فاترك لها مساحة.",
     "src": "dvsa",
     "ref": "187",
     "kind": "danger",
     "topic": "k15"
    },
    {
     "en": "Watch for **pedestrians crossing** the approach and exit roads.",
     "ar": "انتبه إلى **المشاة العابرين** عند مداخل الدوار ومخارجه.",
     "src": "dvsa",
     "ref": "187",
     "kind": "tip",
     "topic": "k15"
    },
    {
     "en": "Large vehicles in cities: **max ==50 km/h==** unless signs say otherwise.",
     "ar": "المركبات الكبيرة داخل المدن: **الحد الأقصى ==50 كم/ساعة==** ما لم توجد إشارة أخرى.",
     "src": "moroor",
     "ref": "169",
     "kind": "number",
     "topic": "k11",
     "fig": "hbf-170-1"
    }
   ],
   "car": [
    {
     "en": "Use a **full push** on the stalk at roundabouts so the signal stays on; cancel it by hand if it does not switch off.",
     "ar": "استخدم **الدفع الكامل** للذراع في الدوار لتبقى الإشارة مضاءة، وأطفئها بيدك إن لم تنطفئ.",
     "applies": "fronx",
     "ref": "My Fronx Guide"
    },
    {
     "en": "Brake on the straight approach, not in the curve.",
     "ar": "اضغط الفرامل في الاقتراب المستقيم، لا داخل المنحنى.",
     "applies": "all",
     "ref": "Manual 5-8"
    }
   ],
   "steps": [
    {
     "en": "Read the sign before the roundabout. Choose your exit.",
     "ar": "اقرأ اللوحة قبل الدوار. حدّد مخرجك."
    },
    {
     "en": "Pick the lane for that exit.",
     "ar": "اختر المسار المناسب لذلك المخرج."
    },
    {
     "en": "Signal the right way for your exit.",
     "ar": "أعطِ الإشارة الصحيحة لمخرجك."
    },
    {
     "en": "Slow down. Look at the cars already on the roundabout.",
     "ar": "خفّف السرعة. انظر إلى السيارات الموجودة في الدوار."
    },
    {
     "en": "They go first. Wait for a safe gap.",
     "ar": "هم أولًا. انتظر فرصة آمنة."
    },
    {
     "en": "Go in. Stay in your lane.",
     "ar": "ادخل. ابقَ في مسارك."
    },
    {
     "en": "After the exit before yours, signal right.",
     "ar": "بعد المخرج الذي يسبق مخرجك، أعطِ إشارة يمين."
    },
    {
     "en": "Check the mirror and blind spot. Exit.",
     "ar": "انظر في المرآة والنقطة العمياء. اخرج."
    }
   ],
   "check": [
    {
     "en": "You choose the right lane and signal for every exit.",
     "ar": "تختار المسار الصحيح وتعطي الإشارة لكل مخرج."
    },
    {
     "en": "You give way to traffic on the roundabout and join without hesitating too long.",
     "ar": "تعطي الأولوية لمن في الدوار وتدخل دون تردد طويل."
    },
    {
     "en": "You leave by the correct exit, checking the blind spot.",
     "ar": "تخرج من المخرج الصحيح بعد فحص النقطة العمياء."
    }
   ]
  },
  {
   "id": "L14",
   "where": "road",
   "wk": 6,
   "en": "U-turn slots, signalled U-turns and service roads",
   "ar": "فتحات الدوران للخلف والدوران عند الإشارة وطرق الخدمة",
   "skills": [
    17,
    18
   ],
   "ch": [
    "c-junctions",
    "c-saudi"
   ],
   "dg": [],
   "before": [
    {
     "en": "U-turn at a junction **only if no sign or signal prohibits it**.",
     "ar": "يُسمح بالدوران على شكل حرف (U) عند التقاطع **فقط إذا لم توجد إشارة تمنع ذلك**.",
     "src": "moroor",
     "ref": "157",
     "kind": "must",
     "topic": "k17",
     "fig": "hbf-157-1"
    },
    {
     "en": "A U-turning driver **gives way to vehicles from every other direction**.",
     "ar": "السائق الذي يدور للخلف **يعطي الأولوية للمركبات القادمة من أي اتجاه آخر**.",
     "src": "moroor",
     "ref": "157",
     "kind": "priority",
     "topic": "k17",
     "fig": "hbf-158-1"
    },
    {
     "en": "At a closed U-turn, **give way to all approaching vehicles**, then enter the first lane.",
     "ar": "عند الدوران للخلف المغلق، **أعطِ الأولوية لجميع المركبات المقتربة**، ثم انتقل إلى المسار الأول.",
     "src": "moroor",
     "ref": "158",
     "kind": "priority",
     "topic": "k17",
     "fig": "hbf-159-1"
    },
    {
     "en": "At an open U-turn, give way, then move into the **second lane** to let junction traffic in.",
     "ar": "عند الدوران للخلف المفتوح، أعطِ الأولوية ثم انتقل إلى **المسار الثاني** لتسمح لمركبات التقاطع بالدخول.",
     "src": "moroor",
     "ref": "158",
     "kind": "priority",
     "topic": "k17"
    },
    {
     "en": "**Never use parking bays or pavements** to complete a U-turn.",
     "ar": "**لا تستخدم ممرات الوقوف أو الأرصفة** لإتمام الدوران للخلف.",
     "src": "moroor",
     "ref": "158",
     "kind": "never",
     "topic": "k17"
    },
    {
     "en": "**Don't enter a junction** if you might get stuck in it, even on green.",
     "ar": "**لا تدخل التقاطع** إذا كان هناك خطر أن تعلق فيه، حتى مع الضوء الأخضر.",
     "src": "moroor",
     "ref": "159",
     "kind": "never",
     "topic": "k17"
    },
    {
     "en": "A **protected U-turn** has its own light; turn only on its green arrow.",
     "ar": "**الدوران المحمي** له إشارة خاصة؛ لا تدُر إلا مع سهمه الأخضر.",
     "src": "moroor",
     "ref": "159",
     "kind": "tip",
     "fig": "hbf-160-1",
     "topic": "k17"
    },
    {
     "en": "A **service road** serves the buildings beside it; the main road is reached only through entries and exits.",
     "ar": "**طريق الخدمة** يخدم المباني المجاورة، أما الطريق الرئيسي فلا يُدخل إليه إلا عبر المداخل والمخارج.",
     "src": "moroor",
     "ref": "45",
     "kind": "tip",
     "fig": "hbf-46-1",
     "topic": "k18"
    },
    {
     "en": "Joining the main road from a side or service road, **give way to traffic on the main road**.",
     "ar": "عند الدخول إلى الطريق الرئيسي من طريق فرعي أو طريق خدمة، **أعطِ الأولوية لمن على الطريق الرئيسي**.",
     "src": "moroor",
     "ref": "148–149",
     "kind": "priority",
     "fig": "hbf-150-1",
     "topic": "k18"
    },
    {
     "en": "Drivers on the main road should **let joining drivers in** where they can.",
     "ar": "على سائقي الطريق الرئيسي **إفساح المجال للداخلين** متى أمكن.",
     "src": "moroor",
     "ref": "149",
     "kind": "tip",
     "fig": "hbf-151-1",
     "topic": "k18"
    },
    {
     "en": "Vehicles **leaving the main road** into the service road have priority over traffic already on the service road.",
     "ar": "المركبات **الخارجة من الطريق الرئيسي** إلى طريق الخدمة لها الأولوية على من في طريق الخدمة.",
     "src": "moroor",
     "ref": "152–153",
     "kind": "priority",
     "fig": "hbf-153-1",
     "topic": "k18"
    }
   ],
   "car": [
    {
     "en": "The Fronx needs a wide space to U-turn; if the slot is tight, **don't force it** onto the kerb — go on to the next one.",
     "ar": "تحتاج الفرونكس مساحة واسعة للدوران؛ إن كانت الفتحة ضيقة **فلا تُجبرها** على الرصيف، وتابع إلى الفتحة التالية.",
     "applies": "fronx",
     "ref": "Manual 9-19"
    },
    {
     "en": "Turn the wheel while moving slowly, not while standing still.",
     "ar": "أدِر المقود والسيارة تتحرك ببطء، لا وهي واقفة.",
     "applies": "all",
     "ref": "Manual 5-8"
    }
   ],
   "steps": [
    {
     "en": "Find the U-turn slot early. Move to the far-left lane in good time.",
     "ar": "حدّد فتحة الدوران مبكرًا. انتقل إلى المسار الأيسر في وقت كافٍ."
    },
    {
     "en": "Signal left. Slow down.",
     "ar": "أعطِ إشارة يسار. خفّف السرعة."
    },
    {
     "en": "Stop in the slot if you need to.",
     "ar": "توقف في الفتحة إن احتجت."
    },
    {
     "en": "Look at the cars coming. They go first.",
     "ar": "انظر إلى السيارات القادمة. لهم الأولوية."
    },
    {
     "en": "Wait for a big gap. Then turn into the correct lane.",
     "ar": "انتظر فرصة واسعة. ثم ادخل إلى المسار الصحيح."
    },
    {
     "en": "Service road: signal early, slow down, then turn in.",
     "ar": "طريق الخدمة: أعطِ الإشارة مبكرًا، خفّف السرعة، ثم ادخل."
    },
    {
     "en": "Watch for cars coming out of shops and houses.",
     "ar": "انتبه للسيارات الخارجة من المحلات والبيوت."
    },
    {
     "en": "To join the main road, stop if needed and give way.",
     "ar": "للدخول إلى الطريق الرئيسي، توقف إن لزم وأعطِ الأولوية."
    }
   ],
   "check": [
    {
     "en": "You reach the U-turn lane early, without cutting across.",
     "ar": "تصل إلى مسار الدوران مبكرًا دون قطع المسارات."
    },
    {
     "en": "You give way to all other traffic and finish in the correct lane.",
     "ar": "تعطي الأولوية لكل من سواك وتنتهي في المسار الصحيح."
    },
    {
     "en": "You never use the kerb or a parking bay to finish the turn.",
     "ar": "لا تستخدم الرصيف أو موقف سيارات لإكمال الدوران أبدًا."
    },
    {
     "en": "You join and leave service roads calmly and give way correctly.",
     "ar": "تدخل طرق الخدمة وتخرج منها بهدوء وتعطي الأولوية بشكل صحيح."
    }
   ]
  },
  {
   "id": "L15",
   "where": "road",
   "wk": 6,
   "en": "Multi-lane roads, lane changes, obstacles and overtaking",
   "ar": "الطرق متعددة المسارات وتغيير المسار والعوائق والتجاوز",
   "skills": [
    12,
    28
   ],
   "ch": [
    "c-road",
    "c-overtake"
   ],
   "dg": [
    "dg-164"
   ],
   "before": [
    {
     "en": "Change lanes **only when needed**: to avoid an obstacle, prepare to turn, or overtake.",
     "ar": "تغيير المسار يكون **عند الضرورة**: لتجنب عقبة، أو اختيار المسار الصحيح قبل الانعطاف، أو التجاوز.",
     "src": "moroor",
     "ref": "109",
     "kind": "tip",
     "topic": "k8",
     "fig": "hbf-110-1"
    },
    {
     "en": "**Signal your intention** before you actually change lanes.",
     "ar": "**أشِر إلى قرارك** بتغيير المسار قبل أن تنفّذه فعليًا.",
     "src": "moroor",
     "ref": "109",
     "kind": "must",
     "topic": "k8"
    },
    {
     "en": "Follow the sequence: **mirrors, signal, shoulder check, speed, move**.",
     "ar": "اتبع التسلسل: **المرايا، الإشارة، الكتف، السرعة، ثم التحرك**.",
     "src": "moroor",
     "ref": "111–113",
     "kind": "tip",
     "topic": "k8",
     "fig": "hbf-113-1"
    },
    {
     "en": "With lane arrows, **turn only from the lane whose arrow** shows your direction.",
     "ar": "عند وجود أسهم، **انعطف فقط من المسار الذي يشير سهمه** إلى اتجاهك.",
     "src": "moroor",
     "ref": "116",
     "kind": "must",
     "topic": "k28",
     "fig": "hbf-117-1"
    },
    {
     "en": "**Plan ahead**: your lane before a turn depends on your next move after it.",
     "ar": "**خطّط مسبقًا**: يعتمد المسار الصحيح قبل الانعطاف على وجهتك بعده.",
     "src": "moroor",
     "ref": "117–120",
     "kind": "tip",
     "topic": "k28",
     "fig": "hbf-118-1"
    },
    {
     "en": "Turning left from several lanes: take **lane 1 for a right next**, lane 3 for a left next.",
     "ar": "عند الانعطاف لليسار من عدة مسارات: **المسار الأول لانعطاف يمين لاحق**، والثالث لانعطاف يسار لاحق.",
     "src": "moroor",
     "ref": "118–120",
     "kind": "tip",
     "topic": "k28",
     "fig": "hbf-119-1"
    },
    {
     "en": "**Slow vehicles use the far-right lane**, unless preparing to turn left or U-turn.",
     "ar": "**على المركبات البطيئة استخدام المسار الأيمن**، إلا عند التأهب للانعطاف يسارًا أو الدوران للخلف.",
     "src": "moroor",
     "ref": "105",
     "kind": "must",
     "topic": "k7",
     "fig": "hbf-106-1"
    },
    {
     "en": "At an obstacle, **the driver whose right side is clear** has priority.",
     "ar": "عند وجود عائق، **الأولوية للسائق الذي يكون الطريق مفتوحًا على جانبه الأيمن**.",
     "src": "moroor",
     "ref": "200",
     "kind": "priority",
     "topic": "k12",
     "fig": "hbf-201-1"
    },
    {
     "en": "Passing parked cars at ==50 km/h==, leave about **==1 metre==** — a door's width.",
     "ar": "عند المرور بالمركبات المتوقفة بسرعة ==50 كم/ساعة== اترك نحو **==متر واحد==**، أي مساحة فتح الباب.",
     "src": "moroor",
     "ref": "201",
     "kind": "number",
     "topic": "k12",
     "fig": "hbf-202-1"
    },
    {
     "en": "**Overtake on the left**; on the right only if the driver ahead is turning left or on multi-lane roads.",
     "ar": "**التجاوز يكون من الجانب الأيسر**، ومن الأيمن فقط إذا أشار من أمامك للانعطاف يسارًا أو في الطرق متعددة المسارات.",
     "src": "moroor",
     "ref": "203",
     "kind": "must",
     "topic": "k12",
     "fig": "hbf-204-1"
    },
    {
     "en": "When being overtaken, **don't speed up** and keep to the far right.",
     "ar": "عندما يتجاوزك غيرك، **لا تزد سرعتك** والزم أقصى الجانب الأيمن.",
     "src": "moroor",
     "ref": "203",
     "kind": "must",
     "topic": "k12"
    },
    {
     "en": "**No overtaking** at junctions, rail or pedestrian crossings, bridges, bends or hill crests.",
     "ar": "**يُمنع التجاوز** عند التقاطعات ومعابر السكك والمشاة والجسور والمنحنيات ونهاية المرتفعات.",
     "src": "moroor",
     "ref": "204–206",
     "kind": "never",
     "topic": "k12",
     "fig": "hbf-205-1"
    },
    {
     "en": "**No overtaking** over solid lines, in poor visibility, or when someone behind is already overtaking.",
     "ar": "**يُمنع التجاوز** عند الخطوط المتصلة أو ضعف الرؤية أو إذا بدأت مركبة خلفك بتجاوزك.",
     "src": "moroor",
     "ref": "207–209",
     "kind": "never",
     "topic": "k12",
     "fig": "hbf-209-1"
    },
    {
     "en": "Before overtaking, check there's **space to return** to the right lane afterwards.",
     "ar": "قبل التجاوز، تأكد من وجود **مساحة للعودة** إلى المسار الأيمن بعده.",
     "src": "moroor",
     "ref": "210",
     "kind": "tip",
     "topic": "k12",
     "fig": "hbf-211-1"
    },
    {
     "en": "In one-way streets, **traffic may pass on both sides**.",
     "ar": "في الشوارع ذات الاتجاه الواحد، **قد تمر المركبات من الجانبين**.",
     "src": "dvsa",
     "ref": "143",
     "kind": "danger",
     "topic": "k28"
    }
   ],
   "car": [
    {
     "en": "Lane change: a **light tap** on the stalk gives three flashes — signal before you look over your shoulder.",
     "ar": "لتغيير المسار: **لمسة خفيفة** للذراع تعطي ثلاث ومضات؛ أعطِ الإشارة قبل الالتفات فوق كتفك.",
     "applies": "fronx",
     "ref": "Manual 3-24"
    },
    {
     "en": "Need quick power to overtake? **Press the gas firmly** — the gearbox drops a gear by itself.",
     "ar": "تحتاج قوة سريعة للتجاوز؟ **اضغط البنزين بقوة**؛ ينزل القير غيارًا وحده.",
     "applies": "fronx",
     "ref": "Manual 5-24"
    },
    {
     "en": "Mirrors do not show the blind spot by the rear door; **only a shoulder check** does.",
     "ar": "المرايا لا تُظهر النقطة العمياء بجانب الباب الخلفي؛ **الالتفات فقط** يُظهرها.",
     "applies": "all",
     "ref": "Manual 2-10"
    }
   ],
   "steps": [
    {
     "en": "Choose your lane early from the arrows on the road.",
     "ar": "اختر مسارك مبكرًا من الأسهم على الطريق."
    },
    {
     "en": "Need to change lane? Middle mirror, then side mirror.",
     "ar": "تحتاج لتغيير المسار؟ المرآة الوسطى ثم الجانبية."
    },
    {
     "en": "Signal.",
     "ar": "أعطِ الإشارة."
    },
    {
     "en": "Quick look over your shoulder.",
     "ar": "التفاتة سريعة فوق الكتف."
    },
    {
     "en": "Gap is safe? Move over slowly. Keep your speed.",
     "ar": "الفراغ آمن؟ انتقل بهدوء. حافظ على سرعتك."
    },
    {
     "en": "Parked car ahead? Leave a door's width when passing.",
     "ar": "سيارة متوقفة أمامك؟ اترك عرض باب عند مرورك."
    },
    {
     "en": "Oncoming car and the gap is on their side? Wait for them.",
     "ar": "سيارة قادمة والطريق مفتوح من جهتها؟ انتظرها."
    },
    {
     "en": "Overtaking with your instructor: only on a clear straight, on the left, then back to the right.",
     "ar": "التجاوز مع المدرب: فقط في طريق مستقيم وواضح، من اليسار، ثم العودة لليمين."
    },
    {
     "en": "Someone overtaking you? Keep right. Don't speed up.",
     "ar": "أحد يتجاوزك؟ ابقَ يمينًا. لا تزد سرعتك."
    }
   ],
   "check": [
    {
     "en": "You change lanes with mirrors, signal and shoulder check every time.",
     "ar": "تغيّر المسار بالمرايا والإشارة والالتفاتة في كل مرة."
    },
    {
     "en": "You are in the right lane before each turn.",
     "ar": "تكون في المسار الصحيح قبل كل انعطاف."
    },
    {
     "en": "You pass parked cars with good space and know who waits at an obstacle.",
     "ar": "تمرّ بالسيارات المتوقفة بمسافة كافية وتعرف من ينتظر عند العائق."
    },
    {
     "en": "You can list five places where overtaking is banned.",
     "ar": "تستطيع ذكر خمسة أماكن يُمنع فيها التجاوز."
    }
   ]
  },
  {
   "id": "L16",
   "where": "road",
   "wk": 7,
   "en": "Busy city route, emergency vehicles and defensive driving",
   "ar": "مسار مزدحم في المدينة ومركبات الطوارئ والقيادة الوقائية",
   "skills": [
    14,
    15,
    28,
    35
   ],
   "ch": [
    "c-saudi",
    "c-law"
   ],
   "dg": [],
   "before": [
    {
     "en": "**Clear the lane at once** for emergency vehicles with lights or sirens.",
     "ar": "عند رؤية مركبات الطوارئ **يجب إخلاء المسار على الفور**.",
     "src": "moroor",
     "ref": "84",
     "kind": "priority",
     "topic": "k12",
     "fig": "hbf-84-1"
    },
    {
     "en": "Never follow an emergency vehicle closely; **keep at least ==50 metres==**.",
     "ar": "يُحظر القيادة مباشرة خلف مركبات الطوارئ؛ **اترك مسافة لا تقل عن ==50 مترًا==**.",
     "src": "moroor",
     "ref": "84",
     "kind": "number",
     "topic": "k12",
     "fig": "hbf-85-1"
    },
    {
     "en": "**Emergency vehicles always have priority**; clear the way quickly.",
     "ar": "**مركبات الطوارئ لها الأولوية دائمًا**؛ أخلِ الطريق لها بأسرع وقت.",
     "src": "moroor",
     "ref": "138",
     "kind": "priority",
     "topic": "k14",
     "fig": "hbf-139-1"
    },
    {
     "en": "**Never overtake a school bus** stopped to load or unload pupils; stop too.",
     "ar": "**يُحظر تجاوز الحافلة المدرسية** المتوقفة لتحميل الطلاب أو إنزالهم؛ ويجب التوقف.",
     "src": "moroor",
     "ref": "85",
     "kind": "never",
     "topic": "k12",
     "fig": "hbf-86-1"
    },
    {
     "en": "**Traffic Department orders override** other rules, unless they endanger safety.",
     "ar": "**اتبع تعليمات إدارة المرور** حتى لو تعارضت مع غيرها، ما لم تعرّض السلامة للخطر.",
     "src": "moroor",
     "ref": "76–77",
     "kind": "priority",
     "topic": "k10"
    },
    {
     "en": "**Older people** may move slowly and have hearing or vision problems.",
     "ar": "**كبار السن** قد تكون حركتهم محدودة ولديهم مشاكل في السمع أو الرؤية.",
     "src": "moroor",
     "ref": "88",
     "kind": "danger",
     "topic": "k10",
     "fig": "hbf-89-1"
    },
    {
     "en": "**Motorcyclists and cyclists** are hard to see; look for them before emerging.",
     "ar": "**الدراجات النارية والهوائية** يصعب رؤيتها؛ ابحث عنها قبل الخروج من التقاطع.",
     "src": "dvsa",
     "ref": "211",
     "kind": "danger",
     "topic": "k10"
    },
    {
     "en": "Avoid distractions like **phones, eating and drinking** while driving.",
     "ar": "تجنّب الملهيات مثل **الهاتف الجوال والأكل والشرب** أثناء القيادة.",
     "src": "moroor",
     "ref": "90",
     "kind": "tip",
     "topic": "k3",
     "fig": "hbf-91-1"
    },
    {
     "en": "**Racing and «tafheet» (drifting) are illegal** on all public roads.",
     "ar": "**يُحظر تسابق المركبات و«التفحيط»** على الطرق العامة.",
     "src": "moroor",
     "ref": "180, 182",
     "kind": "never",
     "topic": "k11",
     "fig": "hbf-182-1"
    },
    {
     "en": "Don't assume **flashing headlights invite you** to go; use your own judgement.",
     "ar": "لا تفترض أن **وميض المصابيح دعوة لك** بالمرور؛ احكم بنفسك.",
     "src": "dvsa",
     "ref": "111",
     "kind": "never",
     "topic": "k9"
    },
    {
     "en": "**Yellow signs with a red border** mark temporary work zones.",
     "ar": "**الإشارات الصفراء بإطار أحمر** تدل على مناطق العمل المؤقتة.",
     "src": "moroor",
     "ref": "54, 60",
     "kind": "tip",
     "topic": "k9",
     "fig": "hbf-61-1"
    },
    {
     "en": "In congestion, **don't change lanes unnecessarily**.",
     "ar": "في الازدحام، **لا تغيّر المسار دون داعٍ**.",
     "src": "dvsa",
     "ref": "134",
     "kind": "tip",
     "topic": "k28"
    },
    {
     "en": "Merge in turn only at **very low speeds**, such as near roadworks.",
     "ar": "الاندماج بالتناوب يكون فقط عند **السرعات المنخفضة جدًا**، مثل قرب أعمال الطرق.",
     "src": "dvsa",
     "ref": "134",
     "kind": "tip",
     "topic": "k28"
    },
    {
     "en": "**Don't drive in bus or restricted lanes** during their operating times.",
     "ar": "**لا تسِر في مسارات الحافلات أو المسارات المخصصة** خلال أوقات تشغيلها.",
     "src": "dvsa",
     "ref": "141–142",
     "kind": "never",
     "topic": "k28"
    },
    {
     "en": "Those who can do the most harm **take the most care**: drivers look out for pedestrians, cyclists and motorcyclists.",
     "ar": "من يستطيع أن يُحدث الضرر الأكبر **يتحمّل الحذر الأكبر**: السائق ينتبه للمشاة وراكبي الدراجات والدراجات النارية.",
     "src": "dvsa",
     "ref": "H1–H3",
     "kind": "tip",
     "fig": "hbf-17-1",
     "topic": "k10"
    }
   ],
   "car": [
    {
     "en": "Mount your phone and set the map **before** you drive; turn-by-turn arrows can show on the HUD via CarPlay/Android Auto.",
     "ar": "ثبّت جوالك واضبط الخريطة **قبل** القيادة؛ يمكن أن تظهر أسهم الاتجاهات على الشاشة الأمامية عبر CarPlay/Android Auto.",
     "applies": "fronx",
     "ref": "My Fronx Guide"
    },
    {
     "en": "In a sudden queue on a fast road, a short use of **hazard lights** warns drivers behind.",
     "ar": "عند ازدحام مفاجئ على طريق سريع، استخدام **أنوار الطوارئ** لفترة قصيرة يُنبّه من خلفك.",
     "applies": "all",
     "ref": "Manual 3-25"
    },
    {
     "en": "Doors **lock themselves at 15 km/h** — useful in the city.",
     "ar": "تُقفل الأبواب **تلقائيًا عند 15 كم/س**، وهذا مفيد في المدينة.",
     "applies": "fronx",
     "ref": "My Fronx Guide"
    }
   ],
   "steps": [
    {
     "en": "Phone away and silent before you start.",
     "ar": "الجوال بعيد وصامت قبل الانطلاق."
    },
    {
     "en": "Look far ahead. Find dangers early.",
     "ar": "انظر بعيدًا للأمام. اكتشف الخطر مبكرًا."
    },
    {
     "en": "Leave space all round you. Plan an escape gap.",
     "ar": "اترك مسافة حولك. خطّط لمخرج آمن."
    },
    {
     "en": "Hear a siren? Find where it is. Move right and slow down or stop.",
     "ar": "تسمع صفارة؟ حدّد مكانها. انتقل يمينًا وخفّف أو توقف."
    },
    {
     "en": "School bus stopped with children? Stop too.",
     "ar": "حافلة مدرسية متوقفة مع أطفال؟ توقف أنت أيضًا."
    },
    {
     "en": "Someone flashes lights at you? Decide for yourself.",
     "ar": "أحد يومض لك بالأنوار؟ قرّر بنفسك."
    },
    {
     "en": "Someone drives badly? Let them go. Stay calm.",
     "ar": "أحد يقود بتهور؟ دعه يمضي. ابقَ هادئًا."
    },
    {
     "en": "Roadworks? Slow down and follow the yellow signs.",
     "ar": "أعمال طرق؟ خفّف واتبع اللوحات الصفراء."
    }
   ],
   "check": [
    {
     "en": "You spot hazards before the instructor points them out.",
     "ar": "تكتشف المخاطر قبل أن يشير إليها المدرب."
    },
    {
     "en": "You clear the way for an emergency vehicle safely.",
     "ar": "تُفسح الطريق لمركبات الطوارئ بأمان."
    },
    {
     "en": "You keep calm and keep your distance when others make mistakes.",
     "ar": "تبقى هادئًا وتحافظ على المسافة عند أخطاء الآخرين."
    },
    {
     "en": "You drive the whole route within every speed limit.",
     "ar": "تقود المسار كله ضمن حدود السرعة."
    }
   ]
  },
  {
   "id": "L17",
   "where": "highway",
   "wk": 7,
   "en": "Highway: joining, lane discipline, leaving",
   "ar": "الطريق السريع: الدخول والالتزام بالمسار والخروج",
   "skills": [
    29
   ],
   "ch": [
    "c-highways",
    "c-speed"
   ],
   "dg": [
    "dg-126"
   ],
   "before": [
    {
     "en": "A **merging lane** lets you build speed and join the main road or highway.",
     "ar": "**مسار الدمج** يتيح لك رفع السرعة والدخول إلى الطريق الرئيسي أو السريع.",
     "src": "moroor",
     "ref": "45",
     "kind": "tip",
     "fig": "hbf-46-1",
     "topic": "k29"
    },
    {
     "en": "When joining, **give way to traffic already on the highway** and match its speed.",
     "ar": "عند الدخول، **أعطِ الأولوية للمركبات على الطريق السريع** وطابق سرعتها.",
     "src": "dvsa",
     "ref": "259",
     "kind": "priority",
     "topic": "k29"
    },
    {
     "en": "Traffic is faster on highways, so **check mirrors earlier and look further ahead**.",
     "ar": "السرعات أعلى في الطرق السريعة، لذا **افحص المرايا مبكرًا وانظر أبعد**.",
     "src": "dvsa",
     "ref": "254",
     "kind": "tip",
     "topic": "k29"
    },
    {
     "en": "Stay in the first lane long enough to **adjust to traffic speed** before overtaking.",
     "ar": "ابقَ في المسار الأول فترة كافية **للتأقلم مع سرعة المرور** قبل التجاوز.",
     "src": "dvsa",
     "ref": "259",
     "kind": "tip",
     "topic": "k29"
    },
    {
     "en": "Missed your exit? **Carry on to the next one**.",
     "ar": "فاتك المخرج؟ **تابع إلى المخرج التالي**.",
     "src": "dvsa",
     "ref": "263",
     "kind": "tip",
     "topic": "k29"
    },
    {
     "en": "Keep **at least a ==2-second== gap** from the vehicle in front.",
     "ar": "اترك **مسافة ==ثانيتين== على الأقل** بينك وبين المركبة الأمامية.",
     "src": "moroor",
     "ref": "189–190",
     "kind": "number",
     "topic": "k11",
     "fig": "hbf-191-1"
    },
    {
     "en": "Keep a safe gap, and **increase it in rain or fog**.",
     "ar": "حافظ على مسافة آمنة، و**زِدها في المطر أو الضباب**.",
     "src": "dvsa",
     "ref": "260",
     "kind": "tip",
     "topic": "k29",
     "fig": "hbf-192-1"
    },
    {
     "en": "Use the overtaking lane only to overtake, then **move back when safe**.",
     "ar": "استخدم مسار التجاوز للتجاوز فقط، ثم **عُد إلى مسارك عندما يكون آمنًا**.",
     "src": "dvsa",
     "ref": "264",
     "kind": "tip",
     "topic": "k29"
    },
    {
     "en": "**Don't weave in and out of lanes** to overtake.",
     "ar": "**لا تتنقل بين المسارات بشكل متعرّج** للتجاوز.",
     "src": "dvsa",
     "ref": "268",
     "kind": "never",
     "topic": "k29"
    },
    {
     "en": "**Never reverse, cross the central reservation or drive against traffic**.",
     "ar": "**لا ترجع للخلف، ولا تعبر الجزيرة الوسطى، ولا تسِر عكس الاتجاه**.",
     "src": "dvsa",
     "ref": "263",
     "kind": "never",
     "topic": "k29"
    },
    {
     "en": "Highway **monotony causes sleepiness**; take regular breaks.",
     "ar": "**رتابة الطريق السريع تسبب النعاس**؛ خذ فترات راحة منتظمة.",
     "src": "dvsa",
     "ref": "262",
     "kind": "danger",
     "topic": "k29"
    },
    {
     "en": "**Don't stop on the shoulder** except in an emergency.",
     "ar": "**لا تتوقف على الكتف** إلا في حالة الطوارئ.",
     "src": "dvsa",
     "ref": "269–271",
     "kind": "never",
     "topic": "k29"
    },
    {
     "en": "Change lanes **well before your exit** and slow down on the exit ramp.",
     "ar": "غيّر المسار **قبل المخرج بوقت كافٍ** وخفّف السرعة على منحدر الخروج.",
     "src": "dvsa",
     "ref": "266, 273",
     "kind": "tip",
     "topic": "k29"
    },
    {
     "en": "After leaving a highway, **your speed may feel slower than it is**; check the speedometer.",
     "ar": "بعد مغادرة الطريق السريع **قد تبدو سرعتك أقل من حقيقتها**؛ راجع عداد السرعة.",
     "src": "dvsa",
     "ref": "274",
     "kind": "danger",
     "topic": "k29"
    },
    {
     "en": "Some roads show a **minimum speed**; don't drive slower unless safety needs it.",
     "ar": "بعض الطرق تحدد **سرعة دنيا**؛ لا تقُد أبطأ منها إلا إذا تطلبت السلامة ذلك.",
     "src": "moroor",
     "ref": "174",
     "kind": "tip",
     "fig": "hbf-175-1",
     "topic": "k11"
    }
   ],
   "car": [
    {
     "en": "**Cruise control** (from 40 km/h, in D) keeps a set speed but **does not brake for the car in front**. Not in heavy traffic.",
     "ar": "**مثبّت السرعة** (من 40 كم/س في D) يحافظ على السرعة لكنه **لا يفرمل للسيارة الأمامية**. لا تستخدمه في الزحام.",
     "applies": "fronx",
     "ref": "Manual 5-64; My Fronx Guide"
    },
    {
     "en": "Cruise cancels when you **touch the brake** or press CANCEL; push up (RES) to go back to the set speed.",
     "ar": "يتوقف المثبت عند **لمس الفرامل** أو ضغط CANCEL، وادفع للأعلى (RES) للعودة إلى السرعة المحددة.",
     "applies": "fronx",
     "ref": "My Fronx Guide"
    },
    {
     "en": "Use the **HUD** to check speed without looking down.",
     "ar": "استخدم **الشاشة الأمامية** لمتابعة السرعة دون النظر للأسفل.",
     "applies": "fronx",
     "ref": "Manual 5-66"
    },
    {
     "en": "Before a highway trip, check **tyre pressures** (sticker in the driver's door frame) when cold.",
     "ar": "قبل رحلة على الطريق السريع، افحص **ضغط الإطارات** (الملصق في إطار باب السائق) والإطارات باردة.",
     "applies": "all",
     "ref": "Manual 9-19"
    }
   ],
   "steps": [
    {
     "en": "On the slip road, speed up to match the traffic.",
     "ar": "على مسار الدخول، زد سرعتك لتوافق سرعة السير."
    },
    {
     "en": "Mirror. Signal left. Look over your shoulder.",
     "ar": "المرآة. إشارة يسار. التفاتة فوق الكتف."
    },
    {
     "en": "Find a gap and slide in. Don't stop on the slip road unless you must.",
     "ar": "جد فراغًا وادخل بهدوء. لا تتوقف على مسار الدخول إلا للضرورة."
    },
    {
     "en": "Stay in the right lane. Keep a gap of at least two seconds — more at speed.",
     "ar": "ابقَ في المسار الأيمن. حافظ على ثانيتين على الأقل، وأكثر مع السرعة."
    },
    {
     "en": "Check mirrors often. Things come fast.",
     "ar": "انظر في المرايا كثيرًا. الأمور تأتي بسرعة."
    },
    {
     "en": "Overtake, then move back right.",
     "ar": "تجاوز، ثم عُد إلى اليمين."
    },
    {
     "en": "See your exit sign? Move to the exit lane early.",
     "ar": "رأيت لوحة مخرجك؟ انتقل إلى مسار الخروج مبكرًا."
    },
    {
     "en": "Slow down on the exit ramp, not on the highway.",
     "ar": "خفّف السرعة على منحدر الخروج، لا على الطريق السريع."
    },
    {
     "en": "Missed the exit? Go on to the next one.",
     "ar": "فاتك المخرج؟ تابع إلى المخرج التالي."
    }
   ],
   "check": [
    {
     "en": "You join at the traffic's speed without forcing anyone to brake.",
     "ar": "تدخل بسرعة السير دون أن تُجبر أحدًا على الفرملة."
    },
    {
     "en": "You keep right and keep a safe gap.",
     "ar": "تبقى يمينًا وتحافظ على مسافة آمنة."
    },
    {
     "en": "You take your exit calmly and check your speed after leaving.",
     "ar": "تأخذ مخرجك بهدوء وتتحقق من سرعتك بعد الخروج."
    }
   ]
  },
  {
   "id": "L18",
   "where": "highway",
   "wk": 7,
   "en": "Rural and desert roads, overtaking and fuel-efficient driving",
   "ar": "الطرق الريفية والصحراوية والتجاوز والقيادة الاقتصادية",
   "skills": [
    13,
    29,
    30
   ],
   "ch": [
    "c-highways",
    "c-speed",
    "c-saudi"
   ],
   "dg": [],
   "before": [
    {
     "en": "**Slow down before bends**, which can be sharper than they look.",
     "ar": "**خفّف سرعتك قبل المنعطفات**، فقد تكون أحدّ مما تبدو.",
     "src": "dvsa",
     "ref": "154",
     "kind": "tip",
     "topic": "k30",
     "fig": "hbf-181-1"
    },
    {
     "en": "Junctions and turnings on rural roads **may be partly hidden**.",
     "ar": "التقاطعات والمنعطفات في الطرق الريفية **قد تكون مخفية جزئيًا**.",
     "src": "dvsa",
     "ref": "154",
     "kind": "danger",
     "topic": "k30"
    },
    {
     "en": "Be able to **stop within the distance you can see** to be clear.",
     "ar": "يجب أن تستطيع **التوقف ضمن المسافة التي تراها خالية**.",
     "src": "dvsa",
     "ref": "154",
     "kind": "must",
     "topic": "k30"
    },
    {
     "en": "**Animals being herded** may be on the road, especially at bends and hill crests.",
     "ar": "قد تكون هناك **مواشٍ تُساق** على الطريق، خصوصًا عند المنعطفات وقمم المرتفعات.",
     "src": "dvsa",
     "ref": "58",
     "kind": "danger",
     "topic": "k30",
     "fig": "hbf-83-1"
    },
    {
     "en": "Pass **animals slowly** and widely; don't use the horn or rev the engine.",
     "ar": "تجاوز **الحيوانات ببطء** ومع ترك مسافة واسعة، ولا تستخدم المنبه أو تسرّع المحرك.",
     "src": "dvsa",
     "ref": "214",
     "kind": "tip",
     "topic": "k10"
    },
    {
     "en": "Overtake only with a speed difference of **at least ==20 km/h==**, within the limit.",
     "ar": "تجاوز فقط بفارق سرعة **لا يقل عن ==20 كم/ساعة==** دون تخطي الحد الأقصى.",
     "src": "moroor",
     "ref": "210",
     "kind": "number",
     "topic": "k12",
     "fig": "hbf-212-1"
    },
    {
     "en": "If in doubt, **don't overtake**; warn the driver ahead by horn or flashing lights.",
     "ar": "**إذا كنت في شك فلا تتجاوز**؛ ونبّه السائق الأمامي بالمنبه أو الضوء المتقطع.",
     "src": "moroor",
     "ref": "209, 213",
     "kind": "tip",
     "topic": "k12",
     "fig": "hbf-213-1"
    },
    {
     "en": "**Look ahead** and lift off the accelerator early so the car slows without braking.",
     "ar": "**انظر إلى الأمام** وارفع قدمك عن دواسة الوقود مبكرًا لتتباطأ المركبة دون الفرامل.",
     "src": "moroor",
     "ref": "192",
     "kind": "tip",
     "topic": "k13"
    },
    {
     "en": "**==70–90 km/h==** is most economical; avoid exceeding ==100 km/h== to save fuel.",
     "ar": "السرعة بين **==70 و90 كم/ساعة==** توفّر الوقود؛ وتجنّب تجاوز ==100 كم/ساعة==.",
     "src": "moroor",
     "ref": "193",
     "kind": "number",
     "topic": "k13"
    },
    {
     "en": "Avoid **harsh acceleration** and keep a steady speed, using cruise control where possible.",
     "ar": "تجنّب **التسارع القوي** وحافظ على سرعة ثابتة باستخدام مثبت السرعة قدر الإمكان.",
     "src": "moroor",
     "ref": "193",
     "kind": "tip",
     "topic": "k13"
    },
    {
     "en": "Close the windows above **==60 km/h==** because of air resistance.",
     "ar": "أغلق النوافذ عند القيادة بسرعة **==60 كم/ساعة==** بسبب مقاومة الهواء.",
     "src": "moroor",
     "ref": "193",
     "kind": "number",
     "topic": "k13"
    },
    {
     "en": "Remove extra weight and **check tyre pressure regularly**.",
     "ar": "أفرغ الوزن الزائد و**افحص ضغط الإطارات بانتظام**.",
     "src": "moroor",
     "ref": "193",
     "kind": "tip",
     "topic": "k13"
    },
    {
     "en": "Keeping **large following distances** gives more reaction time and saves fuel.",
     "ar": "الحفاظ على **مسافات تتابع كبيرة** يمنحك وقتًا أطول للاستجابة ويوفّر الوقود.",
     "src": "moroor",
     "ref": "192",
     "kind": "tip",
     "topic": "k13"
    },
    {
     "en": "Expect **slow farm vehicles**, animals, pedestrians or mud on the road.",
     "ar": "توقّع **مركبات زراعية بطيئة** وحيوانات ومشاة أو طينًا على الطريق.",
     "src": "dvsa",
     "ref": "154",
     "kind": "danger",
     "topic": "k30"
    },
    {
     "en": "**Reduce speed** where open roads enter villages.",
     "ar": "**خفّف السرعة** عند دخول الطرق الخارجية إلى القرى.",
     "src": "dvsa",
     "ref": "154",
     "kind": "tip",
     "topic": "k30"
    }
   ],
   "car": [
    {
     "en": "Tank **37 litres**, petrol **91 octane** or higher (check the sticker inside the fuel flap). Refuel at a **quarter tank** on long trips.",
     "ar": "سعة الخزان **37 لترًا**، والبنزين **91** أو أعلى (تأكد من الملصق داخل غطاء الخزان). عبّئ عند **ربع الخزان** في الرحلات الطويلة.",
     "applies": "fronx",
     "ref": "My Fronx Guide"
    },
    {
     "en": "The screen between the dials shows **average fuel use and range**; reset a trip to see how your driving changes it.",
     "ar": "تعرض الشاشة بين العدادين **متوسط الاستهلاك والمسافة المتبقية**؛ صفّر الرحلة لترى أثر قيادتك.",
     "applies": "fronx",
     "ref": "My Fronx Guide"
    },
    {
     "en": "The **gearshift indicator** (if shown) suggests the best gear for economy in M.",
     "ar": "**مؤشر تغيير الغيار** (إن ظهر) يقترح أفضل غيار للتوفير في وضع M.",
     "applies": "fronx",
     "ref": "Manual 5-36"
    },
    {
     "en": "Stuck in soft sand: hold **ESP OFF** to allow wheel spin, rock gently, then switch ESP back on.",
     "ar": "إذا علقت في الرمل الناعم: اضغط مطولًا **ESP OFF** للسماح بدوران العجلات، وحرّك السيارة ذهابًا وإيابًا بلطف، ثم أعِد تشغيل ESP.",
     "applies": "fronx",
     "ref": "My Fronx Guide"
    },
    {
     "en": "Drive at least **30 minutes non-stop once a month** to keep the hybrid battery charged.",
     "ar": "قُد **30 دقيقة متواصلة مرة في الشهر** على الأقل للحفاظ على شحن بطارية الهايبرد.",
     "applies": "fronx",
     "ref": "My Fronx Guide"
    }
   ],
   "steps": [
    {
     "en": "Before a bend, slow down on the straight.",
     "ar": "قبل المنعطف، خفّف السرعة في الجزء المستقيم."
    },
    {
     "en": "Watch for camels, sand and slow trucks.",
     "ar": "انتبه للجمال والرمال والشاحنات البطيئة."
    },
    {
     "en": "Lift off the gas early when you see a stop ahead.",
     "ar": "ارفع قدمك عن البنزين مبكرًا عندما ترى توقفًا أمامك."
    },
    {
     "en": "Keep a steady speed. Use cruise control on an empty straight.",
     "ar": "حافظ على سرعة ثابتة. استخدم المثبّت في طريق مستقيم خالٍ.",
     "applies": "fronx"
    },
    {
     "en": "Want to overtake? Is the road clear and long enough? Not sure? Don't.",
     "ar": "تريد التجاوز؟ هل الطريق خالٍ وطويل بما يكفي؟ لست متأكدًا؟ لا تتجاوز."
    },
    {
     "en": "Overtake quickly, then come back right with space.",
     "ar": "تجاوز بسرعة، ثم عُد يمينًا مع ترك مسافة."
    },
    {
     "en": "Windows up above 60 km/h. AC not too cold.",
     "ar": "أغلق النوافذ فوق 60 كم/س. لا تجعل المكيف باردًا جدًا."
    }
   ],
   "check": [
    {
     "en": "You slow before bends, not in them.",
     "ar": "تخفّف قبل المنعطفات، لا فيها."
    },
    {
     "en": "You only overtake when it is clearly safe and legal.",
     "ar": "لا تتجاوز إلا إذا كان ذلك آمنًا ونظاميًا بوضوح."
    },
    {
     "en": "Your average fuel use improves when you drive smoothly.",
     "ar": "يتحسّن متوسط استهلاك الوقود عندما تقود بسلاسة."
    }
   ]
  },
  {
   "id": "L19",
   "where": "road",
   "wk": 8,
   "en": "Driving at night",
   "ar": "القيادة ليلًا",
   "skills": [
    31,
    32
   ],
   "ch": [
    "c-weather"
   ],
   "dg": [],
   "before": [
    {
     "en": "At night, **always use your lights**, even on roads with street lighting.",
     "ar": "في الليل **يجب استخدام مصابيح المركبة**، سواء كان الطريق مضاءً أم لا.",
     "src": "moroor",
     "ref": "226",
     "kind": "must",
     "topic": "k31",
     "fig": "hbf-226-1"
    },
    {
     "en": "Front lights shine **white**; rear lights are **red**. Know each one by name.",
     "ar": "الأنوار الأمامية **بيضاء** والخلفية **حمراء**. اعرف اسم كل منها.",
     "src": "moroor",
     "ref": "223–224",
     "kind": "tip",
     "fig": "hbf-224-1",
     "topic": "k31"
    },
    {
     "en": "Use **low beams** on main roads and whenever position lights aren't enough to be seen.",
     "ar": "استخدم **المصابيح المنخفضة** على الطرق الرئيسية وكلما لم تكفِ مصابيح التموضع.",
     "src": "moroor",
     "ref": "228",
     "kind": "must",
     "topic": "k31",
     "fig": "hbf-229-1"
    },
    {
     "en": "**Never use high beams inside cities**; use normal lights within city limits.",
     "ar": "**يُمنع استخدام المصابيح العالية داخل المدن**؛ استخدم المصابيح العادية.",
     "src": "moroor",
     "ref": "230",
     "kind": "never",
     "topic": "k31",
     "fig": "hbf-230-1"
    },
    {
     "en": "Outside cities, **dip high beams early** for oncoming vehicles.",
     "ar": "خارج المدن، **أطفئ المصابيح العالية مبكرًا** عند اقتراب مركبات من الاتجاه المقابل.",
     "src": "moroor",
     "ref": "230",
     "kind": "must",
     "topic": "k31"
    },
    {
     "en": "Don't use high beams when following a vehicle **closer than ==50 metres==**.",
     "ar": "لا تستخدم المصابيح العالية إذا كنت خلف مركبة على مسافة **أقل من ==50 مترًا==**.",
     "src": "moroor",
     "ref": "230",
     "kind": "number",
     "topic": "k31"
    },
    {
     "en": "Stopped at the roadside in the dark: use **position (parking) lights** with tail lights.",
     "ar": "عند التوقف على جانب الطريق في الظلام: استخدم **أنوار الوقوف (الجانبية)** مع الأنوار الخلفية.",
     "src": "moroor",
     "ref": "227",
     "kind": "tip",
     "fig": "hbf-228-1",
     "topic": "k31"
    },
    {
     "en": "Use the **rear fog light** only in fog, heavy rain or snow, with no one close behind.",
     "ar": "استخدم **مصباح الضباب الخلفي** فقط في الضباب أو الأمطار الغزيرة، ودون مركبات خلفك مباشرة.",
     "src": "moroor",
     "ref": "231",
     "kind": "tip",
     "topic": "k31",
     "fig": "hbf-232-1"
    },
    {
     "en": "Brake lights and **white reversing lights** tell others what you are doing — keep them working.",
     "ar": "أنوار الفرامل و**أنوار الرجوع البيضاء** تُخبر الآخرين بما تفعله؛ حافظ على سلامتها.",
     "src": "moroor",
     "ref": "233–234",
     "kind": "tip",
     "fig": "hbf-234-1",
     "topic": "k31"
    },
    {
     "en": "If dazzled by oncoming headlights, **slow down** and stop if needed.",
     "ar": "إذا أبهرتك مصابيح القادمين، **خفّف السرعة** وتوقّف عند الحاجة.",
     "src": "dvsa",
     "ref": "115",
     "kind": "tip",
     "topic": "k31"
    },
    {
     "en": "At night and in strong sunlight, drive **slower than the limit** when you cannot see far.",
     "ar": "ليلًا وفي الشمس القوية، قُد **أبطأ من الحد المسموح** عندما لا ترى بعيدًا.",
     "src": "moroor",
     "ref": "171",
     "kind": "must",
     "fig": "hbf-172-1",
     "topic": "k31"
    },
    {
     "en": "To clear a misted windscreen, **turn all climate dials fully clockwise**.",
     "ar": "لإزالة الضباب عن الزجاج الأمامي، **أدِر جميع مفاتيح التكييف إلى أقصى اليمين**.",
     "src": "moroor",
     "ref": "238",
     "kind": "tip",
     "topic": "k31",
     "fig": "hbf-238-1"
    },
    {
     "en": "Rear-window heating uses about **==0.7 litres== per ==100 km==**; use it only when misted.",
     "ar": "تدفئة النافذة الخلفية تستهلك نحو **==0.7 لتر== لكل ==100 كم==**؛ استخدمها عند الضباب فقط.",
     "src": "moroor",
     "ref": "193",
     "kind": "number",
     "topic": "k13"
    }
   ],
   "car": [
    {
     "en": "Lights on **AUTO** come on in the dark, but the sensor takes about **5 seconds** — switch them on yourself before a tunnel.",
     "ar": "الأنوار على **AUTO** تضيء في الظلام، لكن الحساس يحتاج **5 ثوانٍ** تقريبًا؛ شغّلها بنفسك قبل النفق.",
     "applies": "fronx",
     "ref": "My Fronx Guide"
    },
    {
     "en": "**Push the stalk away** for high beam (blue light on the dash); **pull** to flash.",
     "ar": "**ادفع الذراع للأمام** للضوء العالي (لمبة زرقاء في العدادات)، و**اسحبه** للوميض.",
     "applies": "fronx",
     "ref": "My Fronx Guide"
    },
    {
     "en": "Inside mirror **night position** cuts glare from cars behind.",
     "ar": "**وضع الليل** في المرآة الداخلية يخفف وهج أنوار السيارات الخلفية.",
     "applies": "fronx",
     "ref": "Manual 2-8"
    },
    {
     "en": "Leaving the car at night: pull the stalk once after switching off — the lights **guide you home** for about 10 seconds.",
     "ar": "عند ترك السيارة ليلًا: اسحب الذراع مرة بعد الإطفاء فتبقى الأنوار مضاءة نحو 10 ثوانٍ **لترشدك**.",
     "applies": "fronx",
     "ref": "My Fronx Guide"
    },
    {
     "en": "Blue light on the dash = **high beam is on**. Dip it for anyone ahead or coming.",
     "ar": "اللمبة الزرقاء في العدادات = **الضوء العالي مضاء**. اخفضه لمن أمامك أو القادم نحوك.",
     "applies": "all",
     "ref": "Manual 4-49"
    }
   ],
   "steps": [
    {
     "en": "Before you go: clean the windscreen, lights and mirrors.",
     "ar": "قبل الانطلاق: نظّف الزجاج الأمامي والأنوار والمرايا."
    },
    {
     "en": "Lights on. Check the green light on the dash.",
     "ar": "شغّل الأنوار. تأكد من اللمبة الخضراء في العدادات."
    },
    {
     "en": "Turn the dash brightness down if it is too bright.",
     "ar": "خفّف إضاءة العدادات إن كانت قوية."
    },
    {
     "en": "In the city: normal low lights only.",
     "ar": "داخل المدينة: الأنوار المنخفضة فقط."
    },
    {
     "en": "Dark open road and nobody ahead? High beam.",
     "ar": "طريق مظلم خارج المدينة ولا أحد أمامك؟ الضوء العالي."
    },
    {
     "en": "Car coming or car ahead? Dip at once.",
     "ar": "سيارة قادمة أو أمامك؟ اخفض الضوء فورًا."
    },
    {
     "en": "Dazzled? Look at the right edge of the road. Slow down.",
     "ar": "انبهرت؟ انظر إلى الحافة اليمنى للطريق. خفّف السرعة."
    },
    {
     "en": "Drive a bit slower than by day. Watch for people in dark clothes.",
     "ar": "قُد أبطأ قليلًا من النهار. انتبه للمشاة بملابس داكنة."
    }
   ],
   "check": [
    {
     "en": "You switch between low and high beam at the right moments.",
     "ar": "تبدّل بين الضوء المنخفض والعالي في الوقت المناسب."
    },
    {
     "en": "You never use high beam in the city.",
     "ar": "لا تستخدم الضوء العالي داخل المدينة أبدًا."
    },
    {
     "en": "You handle dazzle by slowing down, not by flashing back.",
     "ar": "تتعامل مع الانبهار بتخفيف السرعة، لا بالرد بالوميض."
    }
   ]
  },
  {
   "id": "L20",
   "where": "road",
   "wk": 8,
   "en": "Independent drive with signs and sat nav; passengers and loads",
   "ar": "القيادة المستقلة باللوحات والملاحة؛ الركاب والحمولة",
   "skills": [
    33,
    34,
    36
   ],
   "ch": [
    "c-driver",
    "c-incidents"
   ],
   "dg": [],
   "before": [
    {
     "en": "Guide signs are rectangular: **blue outside cities, green inside**, brown for leisure and religious sites.",
     "ar": "الإشارات الإرشادية مستطيلة: **الزرقاء خارج المدن، والخضراء داخلها**، والبنية للأماكن الترفيهية والدينية.",
     "src": "moroor",
     "ref": "58–59",
     "kind": "tip",
     "topic": "k9",
     "fig": "hbf-59-1"
    },
    {
     "en": "**Mandatory signs** (blue circles) tell you which way you must go; red-bordered ones ban a direction.",
     "ar": "**اللوحات الإلزامية** (دوائر زرقاء) تحدد الاتجاه الواجب، وذات الإطار الأحمر تمنع اتجاهًا.",
     "src": "moroor",
     "ref": "57",
     "kind": "tip",
     "fig": "hbf-58-1",
     "topic": "k9"
    },
    {
     "en": "Breaking regulatory signs leads to **fines and penalties**.",
     "ar": "مخالفة الإشارات التنظيمية تُعرّض صاحبها **للغرامة والعقوبة**.",
     "src": "moroor",
     "ref": "56",
     "kind": "must",
     "topic": "k9"
    },
    {
     "en": "**Plan ahead**: your lane before a turn depends on your next move after it.",
     "ar": "**خطّط مسبقًا**: يعتمد المسار الصحيح قبل الانعطاف على وجهتك بعده.",
     "src": "moroor",
     "ref": "117–120",
     "kind": "tip",
     "topic": "k28",
     "fig": "hbf-120-1"
    },
    {
     "en": "Carry passengers **only in vehicles designed for passengers**.",
     "ar": "نقل الركاب **مسموح فقط في المركبات المخصصة لنقل الركاب**.",
     "src": "moroor",
     "ref": "97",
     "kind": "must",
     "topic": "k33",
     "fig": "hbf-96-1"
    },
    {
     "en": "**Never carry passengers** in a truck bed, heavy machinery or outside the vehicle.",
     "ar": "**يُمنع نقل الركاب** في الصندوق الخلفي أو الآليات الثقيلة أو أي جزء خارجي من المركبة.",
     "src": "moroor",
     "ref": "97",
     "kind": "never",
     "topic": "k33",
     "fig": "hbf-98-1"
    },
    {
     "en": "The driver **and all passengers** must wear seat belts.",
     "ar": "يجب على السائق **وجميع الركاب** استخدام حزام الأمان.",
     "src": "moroor",
     "ref": "98",
     "kind": "must",
     "topic": "k33",
     "fig": "hbf-186-1"
    },
    {
     "en": "The driver must **remind passengers** to fasten their seat belts.",
     "ar": "يجب على السائق **تنبيه الركاب** لوضع حزام الأمان.",
     "src": "moroor",
     "ref": "98",
     "kind": "must",
     "topic": "k33"
    },
    {
     "en": "Exemptions apply **only for medical reasons** (with proof and official permission) or body size.",
     "ar": "الاستثناء **فقط لأسباب صحية** (بدليل طبي وإذن رسمي) أو بسبب حجم الجسم.",
     "src": "moroor",
     "ref": "98",
     "kind": "tip",
     "topic": "k33"
    },
    {
     "en": "Children under ==12== need a **booster seat** so the belt sits below the shoulder.",
     "ar": "الأطفال دون ==12== عامًا يحتاجون **مسندًا داعمًا** ليكون الحزام تحت الكتف.",
     "src": "moroor",
     "ref": "98",
     "kind": "number",
     "topic": "k33",
     "fig": "hbf-99-1"
    },
    {
     "en": "**Never seat children under ==10==** in the front seat.",
     "ar": "**لا تُجلس الأطفال دون ==10== سنوات** في المقعد الأمامي.",
     "src": "moroor",
     "ref": "98",
     "kind": "number",
     "topic": "k33"
    },
    {
     "en": "If there are no rear seats, a child may sit in front **in a suitable child seat**.",
     "ar": "إذا لم تتوفر مقاعد خلفية، يجوز جلوس الطفل في المقدمة **بمقعد أطفال مناسب**.",
     "src": "moroor",
     "ref": "98",
     "kind": "tip",
     "topic": "k33"
    },
    {
     "en": "When stopped on the road, passengers get in and out **on the pavement side**.",
     "ar": "عند الوقوف في الطريق، يدخل الركاب ويخرجون **من جهة الرصيف**.",
     "src": "moroor",
     "ref": "99",
     "kind": "must",
     "topic": "k33",
     "fig": "hbf-100-1"
    },
    {
     "en": "Increase the gap on **wet or sandy roads**, behind motorcycles, or when heavily loaded.",
     "ar": "زِد مسافة الأمان على **الطرق المبللة أو الرملية**، وخلف الدراجات الآلية، وعند الحمولة الثقيلة.",
     "src": "moroor",
     "ref": "187",
     "kind": "tip",
     "topic": "k11"
    },
    {
     "en": "Restrain pets in the car so they **can't distract you**.",
     "ar": "ثبّت الحيوانات الأليفة في المركبة كي **لا تشتّت انتباهك**.",
     "src": "dvsa",
     "ref": "57",
     "kind": "tip",
     "topic": "k30"
    }
   ],
   "car": [
    {
     "en": "Fast beeping for up to about 95 seconds means a **seat belt is not fastened**; the rear reminder shows which seat.",
     "ar": "الصفير السريع لمدة تصل إلى 95 ثانية يعني أن **حزامًا غير مربوط**، ومؤشر الخلف يوضح أي مقعد.",
     "applies": "fronx",
     "ref": "Manual 4-43; My Fronx Guide"
    },
    {
     "en": "Rear doors have **child locks** (small lever on the door edge). Use them when children sit in the back.",
     "ar": "في الأبواب الخلفية **قفل أمان للأطفال** (ذراع صغير على حافة الباب). استخدمه عند جلوس أطفال في الخلف.",
     "applies": "fronx",
     "ref": "My Fronx Guide"
    },
    {
     "en": "A heavy load needs **higher tyre pressure** (see the door sticker) and a longer braking gap.",
     "ar": "الحمولة الثقيلة تحتاج **ضغط إطارات أعلى** (انظر ملصق الباب) ومسافة فرملة أطول.",
     "applies": "all",
     "ref": "Manual 9-19"
    },
    {
     "en": "Secure loose items in the boot; nothing loose in the driver's footwell.",
     "ar": "ثبّت الأغراض في الشنطة، ولا تترك شيئًا سائبًا عند قدمي السائق.",
     "applies": "all",
     "ref": "Manual 2-6"
    }
   ],
   "steps": [
    {
     "en": "Set the sat nav before you move. Sound on, screen still.",
     "ar": "اضبط الملاحة قبل التحرك. الصوت مفعّل والشاشة ثابتة."
    },
    {
     "en": "Instructor gives the destination. You choose the way.",
     "ar": "يحدد المدرب الوجهة. أنت تختار الطريق."
    },
    {
     "en": "Read the blue and green direction signs early.",
     "ar": "اقرأ لوحات الاتجاهات الزرقاء والخضراء مبكرًا."
    },
    {
     "en": "Wrong turn? No problem. Carry on and find a safe way back.",
     "ar": "انعطاف خاطئ؟ لا مشكلة. تابع وجد طريق عودة آمنًا."
    },
    {
     "en": "Before you drive with passengers: everyone belted.",
     "ar": "قبل القيادة بالركاب: الجميع يربط الحزام."
    },
    {
     "en": "Children under 10 in the back, in the right seat.",
     "ar": "الأطفال تحت 10 سنوات في الخلف، في المقعد المناسب لهم."
    },
    {
     "en": "Passengers get out on the pavement side.",
     "ar": "ينزل الركاب من جهة الرصيف."
    },
    {
     "en": "Heavy load? Brake earlier and drive gently.",
     "ar": "حمولة ثقيلة؟ فرمل أبكر وقُد بلطف."
    }
   ],
   "check": [
    {
     "en": "You reach the destination for 20 minutes without step-by-step help.",
     "ar": "تصل إلى الوجهة خلال 20 دقيقة دون إرشاد خطوة بخطوة."
    },
    {
     "en": "You stay safe when you take a wrong turn.",
     "ar": "تبقى آمنًا عندما تخطئ في الانعطاف."
    },
    {
     "en": "You can explain the child-seat and front-seat age rules.",
     "ar": "تستطيع شرح قواعد مقعد الطفل وعمر الجلوس في المقعد الأمامي."
    },
    {
     "en": "You check every passenger's belt before moving.",
     "ar": "تتأكد من حزام كل راكب قبل التحرك."
    }
   ]
  },
  {
   "id": "L21",
   "where": "road",
   "wk": 8,
   "en": "Full mock test, marked like the real thing",
   "ar": "اختبار تجريبي كامل يُقيَّم مثل الاختبار الحقيقي",
   "skills": [],
   "ch": [
    "c-tests"
   ],
   "dg": [],
   "before": [
    {
     "en": "Adjust **seat, belt, head restraint and mirrors** before you drive.",
     "ar": "اضبط **المقعد والحزام ومسند الرأس والمرايا** قبل القيادة.",
     "src": "dvsa",
     "ref": "Annex 6",
     "kind": "tip",
     "topic": "k2"
    },
    {
     "en": "Before changing lane or turning, **signal in good time** and endanger no one.",
     "ar": "قبل تغيير المسار أو الانعطاف، **أعطِ الإشارة في الوقت المناسب** دون تعريض أحد للخطر.",
     "src": "moroor",
     "ref": "114",
     "kind": "must",
     "topic": "k28"
    },
    {
     "en": "**Obey road markings** that show driving directions.",
     "ar": "**التزم بعلامات الطريق** التي تحدد اتجاهات القيادة.",
     "src": "moroor",
     "ref": "114",
     "kind": "must",
     "topic": "k28"
    },
    {
     "en": "Turn only from the **lane whose arrow** shows your direction.",
     "ar": "انعطف فقط من **المسار الذي يشير سهمه** إلى اتجاهك.",
     "src": "moroor",
     "ref": "116",
     "kind": "must",
     "topic": "k7",
     "fig": "hbf-117-1"
    },
    {
     "en": "On a one-way road, **turn left from the left side**.",
     "ar": "في الطريق ذي الاتجاه الواحد، **انعطف لليسار من الجانب الأيسر**.",
     "src": "moroor",
     "ref": "115",
     "kind": "must",
     "topic": "k28"
    },
    {
     "en": "**Let other vehicles overtake you safely**.",
     "ar": "يجب أن **تسمح للمركبات الأخرى بالتجاوز عنك بأمان**.",
     "src": "moroor",
     "ref": "102",
     "kind": "must",
     "topic": "k7"
    },
    {
     "en": "Near pedestrian crossings, **slow down and be ready to stop**.",
     "ar": "عند الاقتراب من خطوط المشاة، **قلّل السرعة وكن مستعدًا للتوقف**.",
     "src": "moroor",
     "ref": "81",
     "kind": "must",
     "topic": "k10",
     "fig": "hbf-81-1"
    },
    {
     "en": "Pedestrians already crossing a road you're turning into **have priority**.",
     "ar": "المشاة الذين بدؤوا عبور الطريق الذي تنعطف إليه **لهم الأولوية**.",
     "src": "dvsa",
     "ref": "8",
     "kind": "priority",
     "topic": "k16"
    },
    {
     "en": "Give way to pedestrians **crossing the road you're turning into**.",
     "ar": "أعطِ الأولوية للمشاة **العابرين للطريق الذي تنعطف إليه**.",
     "src": "dvsa",
     "ref": "170",
     "kind": "priority",
     "topic": "k14"
    },
    {
     "en": "**Don't overtake the vehicle nearest a crossing**, especially one stopped for pedestrians.",
     "ar": "**لا تتجاوز المركبة الأقرب إلى المعبر**، خصوصًا إذا توقفت للمشاة.",
     "src": "dvsa",
     "ref": "191",
     "kind": "never",
     "topic": "k16"
    },
    {
     "en": "Pedestrians may step out **between queuing or parked vehicles** near crossings.",
     "ar": "قد يظهر المشاة فجأة **من بين المركبات المتوقفة أو المصطفة** قرب المعابر.",
     "src": "dvsa",
     "ref": "193",
     "kind": "danger",
     "topic": "k16"
    },
    {
     "en": "Don't rush pedestrians by **revving or edging forward**.",
     "ar": "لا تستعجل المشاة **بتسريع المحرك أو التقدم ببطء** نحوهم.",
     "src": "dvsa",
     "ref": "194",
     "kind": "never",
     "topic": "k16"
    },
    {
     "en": "Don't **wave or flash** pedestrians across; another vehicle may be coming.",
     "ar": "لا **تلوّح أو تومض بالمصابيح** لدعوة المشاة للعبور؛ فقد تأتي مركبة أخرى.",
     "src": "dvsa",
     "ref": "195",
     "kind": "never",
     "topic": "k16"
    },
    {
     "en": "Be patient with **learner and older drivers**; their reactions may be slower.",
     "ar": "تحلَّ بالصبر مع **المتعلمين وكبار السن**؛ فقد تكون ردود أفعالهم أبطأ.",
     "src": "dvsa",
     "ref": "216–217",
     "kind": "tip",
     "topic": "k30"
    },
    {
     "en": "Keep **at least a ==2-second== gap** from the vehicle in front.",
     "ar": "اترك **مسافة ==ثانيتين== على الأقل** بينك وبين المركبة الأمامية.",
     "src": "moroor",
     "ref": "189–190",
     "kind": "number",
     "topic": "k11",
     "fig": "hbf-191-1"
    }
   ],
   "car": [
    {
     "en": "Start-up routine: **brake, P, START**; check no red light stays on.",
     "ar": "روتين التشغيل: **الفرامل، P، زر التشغيل**، وتأكد أنه لا تبقى لمبة حمراء.",
     "applies": "fronx",
     "ref": "Manual 5-14"
    },
    {
     "en": "Finish routine: **stop, P, handbrake, engine off**.",
     "ar": "روتين الإنهاء: **توقف، P، فرامل اليد، أطفئ المحرك**.",
     "applies": "fronx",
     "ref": "Manual 5-18"
    },
    {
     "en": "Do the walk-round check before the test, as you would before the real one.",
     "ar": "قم بفحص حول السيارة قبل الاختبار كما تفعل قبل الحقيقي.",
     "applies": "all",
     "ref": "Manual 5-1"
    }
   ],
   "steps": [
    {
     "en": "Do the checks and cockpit drill as in lesson 1.",
     "ar": "قم بالفحوص وتجهيز المقعد كما في الدرس الأول."
    },
    {
     "en": "Drive the route the instructor gives. Follow every instruction.",
     "ar": "قُد المسار الذي يحدده المدرب. نفّذ كل تعليمة."
    },
    {
     "en": "Do the manoeuvres you are asked for.",
     "ar": "نفّذ المناورات المطلوبة."
    },
    {
     "en": "The instructor marks faults but does not help.",
     "ar": "يسجّل المدرب الأخطاء ولا يساعد."
    },
    {
     "en": "Made a mistake? Stay calm and keep driving safely.",
     "ar": "أخطأت؟ ابقَ هادئًا وواصل القيادة بأمان."
    },
    {
     "en": "Park and finish. Then go through the marks together.",
     "ar": "قف وأنهِ. ثم راجع التقييم معًا."
    },
    {
     "en": "Choose the faults to work on next.",
     "ar": "اختر الأخطاء التي ستعمل عليها لاحقًا."
    }
   ],
   "check": [
    {
     "en": "You finish with no serious or dangerous fault.",
     "ar": "تنهي دون أي خطأ جسيم أو خطير."
    },
    {
     "en": "You make few small faults, and none repeated.",
     "ar": "أخطاؤك البسيطة قليلة، ولا يتكرر أي منها."
    },
    {
     "en": "You feel calm enough to book the real test.",
     "ar": "تشعر بهدوء كافٍ لحجز الاختبار الحقيقي."
    }
   ]
  },
  {
   "id": "L22",
   "where": "quiet",
   "wk": 8,
   "en": "Breakdowns, flat tyres and what to do after a crash",
   "ar": "الأعطال وثقب الإطار وما تفعله بعد الحادث",
   "skills": [
    36
   ],
   "ch": [
    "c-incidents"
   ],
   "dg": [],
   "before": [
    {
     "en": "If you break down, **clear the road** and use a warning sign by day, red lights at night.",
     "ar": "إذا تعطلت مركبتك **أخرجها من الطريق**، وضع علامة تحذير نهارًا وأضواء حمراء ليلًا.",
     "src": "moroor",
     "ref": "95",
     "kind": "must",
     "topic": "k36",
     "fig": "hbf-235-2"
    },
    {
     "en": "Place a warning triangle **at least ==45 metres==** behind a broken-down vehicle.",
     "ar": "ضع مثلث التحذير على بعد **==45 مترًا== على الأقل** خلف المركبة المعطلة.",
     "src": "dvsa",
     "ref": "276",
     "kind": "number",
     "topic": "k36"
    },
    {
     "en": "**Don't stop on the shoulder** except in an emergency.",
     "ar": "**لا تتوقف على الكتف** إلا في حالة الطوارئ.",
     "src": "dvsa",
     "ref": "269–271",
     "kind": "never",
     "topic": "k29"
    },
    {
     "en": "With injuries, call **Traffic ==911 / 993==** and the Red Crescent ==997==.",
     "ar": "في الحوادث التي تنتج عنها إصابات، اتصل **بالمرور ==911 / 993==** وبالهلال الأحمر ==997==.",
     "src": "moroor",
     "ref": "28",
     "kind": "number",
     "topic": "k36",
     "fig": "hbf-29-1"
    },
    {
     "en": "For damage-only crashes, **report via the Najm app** and photograph from all angles.",
     "ar": "في حوادث التلفيات، **أبلغ عبر تطبيق نجم** وصوّر الحادث من جميع الزوايا.",
     "src": "moroor",
     "ref": "28",
     "kind": "must",
     "topic": "k36"
    },
    {
     "en": "**Never leave the scene** without reason; you'll be treated as a fugitive.",
     "ar": "**لا تغادر مكان الحادث** دون سبب؛ وإلا عُدّ ذلك هروبًا من العدالة.",
     "src": "moroor",
     "ref": "29",
     "kind": "never",
     "topic": "k36"
    },
    {
     "en": "Don't move crashed vehicles unless they **block traffic** or it's minor and both agree.",
     "ar": "لا تنقل المركبات المتورطة إلا إذا **أعاقت حركة المرور** أو كان الحادث بسيطًا واتفق الطرفان.",
     "src": "moroor",
     "ref": "29",
     "kind": "never",
     "topic": "k36"
    },
    {
     "en": "**Don't move injured people** from vehicles unless they're in immediate danger.",
     "ar": "**لا تنقل المصابين** من المركبات إلا إذا كانوا في خطر مباشر.",
     "src": "dvsa",
     "ref": "283",
     "kind": "never",
     "topic": "k36"
    },
    {
     "en": "First aid: remember **D-R-A-B-C** — Danger, Response, Airway, Breathing, Circulation.",
     "ar": "في الإسعافات الأولية تذكّر **D-R-A-B-C**: الخطر، الاستجابة، مجرى الهواء، التنفس، الدورة الدموية.",
     "src": "dvsa",
     "ref": "Annex 7",
     "kind": "tip",
     "topic": "k36"
    },
    {
     "en": "**Never open the coolant cap** until an overheated engine has cooled.",
     "ar": "**لا تفتح غطاء المبرّد** حتى يبرد المحرك المحموم تمامًا.",
     "src": "dvsa",
     "ref": "Annex 6",
     "kind": "never",
     "topic": "k2"
    },
    {
     "en": "Running out of fuel on the road **endangers you and others**.",
     "ar": "نفاد الوقود وأنت على الطريق **يعرّض حياتك وحياة الآخرين للخطر**.",
     "src": "moroor",
     "ref": "236",
     "kind": "danger",
     "topic": "k5"
    },
    {
     "en": "Main crash causes: **speeding**, ignoring rules, phone use, no seat belt, sudden lane changes.",
     "ar": "أبرز أسباب الحوادث: **السرعة الزائدة**، وعدم الالتزام بالأنظمة، والجوال، وعدم ربط الحزام، والتغيير المفاجئ للمسار.",
     "src": "moroor",
     "ref": "25",
     "kind": "danger",
     "topic": "k36",
     "fig": "hbf-26-1"
    }
   ],
   "car": [
    {
     "en": "Warning triangle: **hazards on before you get out**, then place it **50–100 m behind** the car, reflective side to traffic.",
     "ar": "مثلث التحذير: **شغّل أنوار الطوارئ قبل النزول**، ثم ضعه **على بعد 50–100 م خلف** السيارة والجهة العاكسة نحو السير.",
     "applies": "fronx",
     "ref": "Manual 10-18"
    },
    {
     "en": "Lift the **boot floor** now and see what you have: a spare wheel and jack, or a sealant kit with a compressor.",
     "ar": "ارفع **أرضية الشنطة** الآن واعرف ما لديك: إطار احتياطي ورافعة، أو عدة إصلاح مع ضاغط هواء.",
     "applies": "fronx",
     "ref": "Manual 10-4; My Fronx Guide"
    },
    {
     "en": "Flat tyre while driving: **hold the wheel firmly, brake gently**, stop on flat, hard ground.",
     "ar": "ثقب أثناء القيادة: **أمسك المقود بقوة واضغط الفرامل بلطف**، وتوقف على أرض مستوية صلبة.",
     "applies": "fronx",
     "ref": "Manual 10-16; My Fronx Guide"
    },
    {
     "en": "Overheating: **AC off**, pull over, idle and watch the light; steam = engine off. **Never open the radiator cap hot.**",
     "ar": "ارتفاع الحرارة: **أطفئ المكيف**، وتوقف جانبًا، واترك المحرك يعمل وراقب اللمبة؛ إن ظهر بخار فأطفئه. **لا تفتح غطاء الرادياتير وهو ساخن.**",
     "applies": "fronx",
     "ref": "Manual 10-17; My Fronx Guide"
    },
    {
     "en": "Flat battery: jump-start **12 V only**; black lead to bare metal on the engine. **Never push- or tow-start** this car.",
     "ar": "البطارية فارغة: اشحن بالكابلات **12 فولت فقط**، والسلك الأسود على معدن مكشوف في المحرك. **لا تشغّل هذه السيارة بالدفع أو السحب أبدًا.**",
     "applies": "fronx",
     "ref": "My Fronx Guide"
    },
    {
     "en": "Towing: ask for a **flatbed truck** — the front wheels should not roll on the road.",
     "ar": "السحب: اطلب **سطحة**؛ يجب ألا تدور العجلات الأمامية على الطريق.",
     "applies": "fronx",
     "ref": "My Fronx Guide"
    }
   ],
   "steps": [
    {
     "en": "Something feels wrong? Signal and pull off the road.",
     "ar": "تشعر بخلل؟ أعطِ الإشارة واخرج من الطريق."
    },
    {
     "en": "Hazards on. Handbrake up. P.",
     "ar": "شغّل أنوار الطوارئ. ارفع فرامل اليد. P."
    },
    {
     "en": "Get everyone out on the side away from traffic.",
     "ar": "أنزل الجميع من الجهة البعيدة عن السير."
    },
    {
     "en": "Put the triangle well behind the car.",
     "ar": "ضع المثلث خلف السيارة بمسافة كافية."
    },
    {
     "en": "Practise now: find the triangle, spare or kit, and jack.",
     "ar": "تدرّب الآن: جد المثلث والإطار الاحتياطي أو العدة والرافعة.",
     "applies": "fronx"
    },
    {
     "en": "Crash with injuries? Call 997 and 911/993. Don't move the injured.",
     "ar": "حادث بإصابات؟ اتصل بـ 997 و911/993. لا تحرّك المصابين."
    },
    {
     "en": "Damage only? Take photos from all sides. Report in the Najm app.",
     "ar": "أضرار فقط؟ صوّر من كل الجهات. أبلغ عبر تطبيق نجم."
    },
    {
     "en": "Never drive away from a crash.",
     "ar": "لا تغادر مكان الحادث أبدًا."
    }
   ],
   "check": [
    {
     "en": "You can find and set up the warning triangle in under two minutes.",
     "ar": "تجد مثلث التحذير وتضعه في أقل من دقيقتين."
    },
    {
     "en": "You know which numbers to call and when to use Najm.",
     "ar": "تعرف الأرقام التي تتصل بها ومتى تستخدم نجم."
    },
    {
     "en": "You can explain what to do if the temperature light comes on.",
     "ar": "تستطيع شرح ما تفعله إذا أضاءت لمبة الحرارة."
    },
    {
     "en": "You know where your spare wheel or repair kit is.",
     "ar": "تعرف مكان الإطار الاحتياطي أو عدة الإصلاح."
    }
   ]
  },
  {
   "id": "L23",
   "where": "road",
   "wk": 8,
   "en": "Heat, dust, rain and fog",
   "ar": "الحر والغبار والمطر والضباب",
   "skills": [
    32
   ],
   "ch": [
    "c-weather"
   ],
   "dg": [],
   "before": [
    {
     "en": "Drive **slower than the limit** in fog, rain and sandstorms, and to suit the road.",
     "ar": "قُد **أبطأ من حد السرعة** في الضباب والمطر والعواصف الرملية، وبما يناسب حالة الطريق.",
     "src": "moroor",
     "ref": "172",
     "kind": "must",
     "fig": "hbf-173-1",
     "topic": "k32"
    },
    {
     "en": "By day, use lights in **thick fog or sandstorms** that block visibility.",
     "ar": "في النهار، استخدم المصابيح عند وجود **ضباب كثيف أو عواصف رملية** تحجب الرؤية.",
     "src": "moroor",
     "ref": "226",
     "kind": "must",
     "topic": "k31",
     "fig": "hbf-227-1"
    },
    {
     "en": "Use **headlights** when visibility is seriously reduced, generally under ==100 metres==.",
     "ar": "استخدم **المصابيح الأمامية** عند انخفاض الرؤية بشدة، عادةً لأقل من ==100 متر==.",
     "src": "dvsa",
     "ref": "226",
     "kind": "must",
     "topic": "k32"
    },
    {
     "en": "**Don't use fog lights** unless visibility is seriously reduced; they dazzle others.",
     "ar": "**لا تستخدم مصابيح الضباب** إلا عند انخفاض الرؤية بشدة؛ فهي تُبهر الآخرين.",
     "src": "dvsa",
     "ref": "236",
     "kind": "never",
     "topic": "k32"
    },
    {
     "en": "Before entering fog or dust, **check mirrors and slow down**.",
     "ar": "قبل دخول الضباب، **افحص المرايا وخفّف السرعة**.",
     "src": "dvsa",
     "ref": "234",
     "kind": "must",
     "topic": "k32"
    },
    {
     "en": "In fog, be able to **stop within the distance you can see** clearly.",
     "ar": "في الضباب، يجب أن تستطيع **التوقف ضمن المسافة التي تراها** بوضوح.",
     "src": "dvsa",
     "ref": "235",
     "kind": "must",
     "topic": "k32"
    },
    {
     "en": "Following rear lights in fog gives a **false sense of security**.",
     "ar": "تتبّع المصابيح الخلفية في الضباب يمنح **إحساسًا زائفًا بالأمان**.",
     "src": "dvsa",
     "ref": "235",
     "kind": "danger",
     "topic": "k32"
    },
    {
     "en": "In rain, stopping distances are **at least ==double==** those on dry roads.",
     "ar": "في المطر تصبح مسافة التوقف **==ضعف==** المسافة على الطريق الجاف على الأقل.",
     "src": "dvsa",
     "ref": "227",
     "kind": "number",
     "topic": "k32",
     "fig": "hbf-192-1"
    },
    {
     "en": "Rain after a dry spell makes roads **slippery**.",
     "ar": "المطر بعد فترة جفاف يجعل الطريق **زلقًا**.",
     "src": "dvsa",
     "ref": "237",
     "kind": "danger",
     "topic": "k32"
    },
    {
     "en": "If steering feels light in rain, **water is stopping the tyres gripping**; ease off gently.",
     "ar": "إذا خفّ المقود في المطر فالماء **يمنع تماسك الإطارات**؛ ارفع قدمك عن الوقود تدريجيًا.",
     "src": "dvsa",
     "ref": "227",
     "kind": "danger",
     "topic": "k32",
     "fig": "hbf-22-2"
    },
    {
     "en": "After deep water, **test your brakes gently** at the first safe chance.",
     "ar": "بعد عبور مياه عميقة، **اختبر المكابح بلطف** عند أول فرصة آمنة.",
     "src": "dvsa",
     "ref": "121",
     "kind": "tip",
     "topic": "k26"
    },
    {
     "en": "Strong **crosswinds** can push cars off course, especially on open roads.",
     "ar": "**الرياح الجانبية** القوية قد تحرف المركبة عن مسارها، خاصة في الطرق المكشوفة.",
     "src": "dvsa",
     "ref": "232",
     "kind": "danger",
     "topic": "k32"
    },
    {
     "en": "In heat, keep the car **well ventilated** to avoid drowsiness.",
     "ar": "في الحر، حافظ على **تهوية جيدة** للمركبة لتجنب النعاس.",
     "src": "dvsa",
     "ref": "237",
     "kind": "tip",
     "topic": "k32"
    },
    {
     "en": "If dazzled by bright sun, **slow down** and stop if necessary.",
     "ar": "إذا أبهرتك أشعة الشمس، **خفّف السرعة** وتوقّف عند الحاجة.",
     "src": "dvsa",
     "ref": "237",
     "kind": "tip",
     "topic": "k32"
    },
    {
     "en": "**Don't set the AC too cold**, and keep windows closed when it's on.",
     "ar": "**لا تضبط المكيّف على درجة متدنية جدًا**، وأغلق النوافذ أثناء تشغيله.",
     "src": "moroor",
     "ref": "193",
     "kind": "tip",
     "topic": "k13"
    }
   ],
   "car": [
    {
     "en": "Misted windscreen: press the **demist button**; the rear heater switches off by itself after 15 minutes.",
     "ar": "الزجاج مغبّش: اضغط **زر إزالة الضباب**، ومُدفّئ الزجاج الخلفي ينطفئ وحده بعد 15 دقيقة.",
     "applies": "fronx",
     "ref": "Manual 7-23"
    },
    {
     "en": "Wipers: MIST, OFF, INT, LO, HI. **Never wipe dry or dusty glass** — pull the stalk to spray first.",
     "ar": "المساحات: MIST وOFF وINT وLO وHI. **لا تمسح زجاجًا جافًا أو مغبرًا**؛ اسحب الذراع لترش الماء أولًا.",
     "applies": "fronx",
     "ref": "Manual 3-27; My Fronx Guide"
    },
    {
     "en": "Climate: press **AUTO**, pick a temperature, leave it. In a dust storm use **recirculation**, then back to fresh air.",
     "ar": "التكييف: اضغط **AUTO** واختر الحرارة واتركه. في العاصفة الترابية استخدم **تدوير الهواء الداخلي**، ثم أعِده للهواء الخارجي.",
     "applies": "fronx",
     "ref": "My Fronx Guide"
    },
    {
     "en": "In heat the auto stop-start may make the AC **blow warm at red lights**; press A OFF if needed.",
     "ar": "في الحر قد يجعل التوقف التلقائي المكيفَ **يخرج هواءً دافئًا عند الإشارة**؛ اضغط A OFF عند الحاجة.",
     "applies": "fronx",
     "ref": "My Fronx Guide"
    },
    {
     "en": "Do not drive into **deep standing water**; if stuck, don't restart until the water is below the exhaust.",
     "ar": "لا تدخل **الماء العميق المتجمع**؛ وإن علقت فلا تُعِد التشغيل حتى ينخفض الماء تحت العادم.",
     "applies": "fronx",
     "ref": "My Fronx Guide"
    },
    {
     "en": "Watch the **temperature light** on hot days; red means pull over (see lesson 22).",
     "ar": "راقب **لمبة الحرارة** في الأيام الحارة؛ الحمراء تعني توقف جانبًا (انظر الدرس 22).",
     "applies": "all",
     "ref": "Manual 4-45"
    }
   ],
   "steps": [
    {
     "en": "Check the weather before you leave.",
     "ar": "اطّلع على حالة الطقس قبل الخروج."
    },
    {
     "en": "Rain or dust: lights on, slow down.",
     "ar": "مطر أو غبار: شغّل الأنوار وخفّف السرعة."
    },
    {
     "en": "Leave double the gap.",
     "ar": "ضاعف المسافة."
    },
    {
     "en": "Wipers on. Spray first if the glass is dusty.",
     "ar": "شغّل المساحات. رشّ الماء أولًا إن كان الزجاج مغبرًا."
    },
    {
     "en": "Brake early and gently. No sudden turns.",
     "ar": "فرمل مبكرًا وبلطف. لا انعطافات مفاجئة."
    },
    {
     "en": "Windscreen misting? Press demist.",
     "ar": "الزجاج يتغبّش؟ اضغط زر إزالة الضباب.",
     "applies": "fronx"
    },
    {
     "en": "Can't see the road? Pull right off the road and wait. Lights on.",
     "ar": "لا ترى الطريق؟ اخرج من الطريق تمامًا وانتظر. الأنوار مضاءة."
    },
    {
     "en": "Hot day: cool the car first, drink water, take breaks.",
     "ar": "يوم حار: برّد السيارة أولًا، واشرب الماء، وخذ استراحات."
    }
   ],
   "check": [
    {
     "en": "You slow down and double the gap as soon as the weather changes.",
     "ar": "تخفّف السرعة وتضاعف المسافة فور تغير الطقس."
    },
    {
     "en": "You can clear a misted windscreen without stopping.",
     "ar": "تزيل الضباب عن الزجاج دون أن تتوقف."
    },
    {
     "en": "You know when to stop and wait instead of driving on.",
     "ar": "تعرف متى تتوقف وتنتظر بدل مواصلة القيادة."
    }
   ]
  }
 ],
 "theoryOnly": [
  {
   "id": "T1",
   "en": "Your licence and the traffic system",
   "ar": "رخصتك ونظام المرور",
   "points": [
    {
     "en": "A private licence requires age **==18==**; a temporary permit is possible from ==17==.",
     "ar": "يُشترط للرخصة الخاصة ألا يقل العمر عن **==18== عامًا**، ويمكن منح تصريح مؤقت من سن ==17==.",
     "src": "moroor",
     "ref": "12",
     "kind": "number",
     "topic": "k1",
     "fig": "hbf-13-1"
    },
    {
     "en": "A private licence is valid up to **==10 years==**, for up to ==9== people and ==3,500 kg==.",
     "ar": "الرخصة الخاصة صالحة حتى **==10 سنوات==**، لنقل ==9== أشخاص كحد أقصى ومركبات حتى ==3500 كغم==.",
     "src": "moroor",
     "ref": "12",
     "kind": "number",
     "topic": "k1",
     "fig": "hbf-14-1"
    },
    {
     "en": "Public and public-works licences need age **==20==** and last up to ==5 years==.",
     "ar": "الرخصة العامة ورخصة الأشغال العامة تتطلبان عمر **==20== عامًا** وصلاحيتهما ==5 سنوات== كحد أقصى.",
     "src": "moroor",
     "ref": "14–15",
     "kind": "number",
     "topic": "k1",
     "fig": "hbf-15-1"
    },
    {
     "en": "Separate licences exist for **public-works vehicles and motorcycles**.",
     "ar": "توجد رخص مستقلة **لمركبات الأشغال العامة والدراجات النارية**.",
     "src": "moroor",
     "ref": "14–15",
     "kind": "tip",
     "fig": "hbf-16-1",
     "topic": "k1"
    },
    {
     "en": "**Always obey traffic officers**, even when they contradict a signal.",
     "ar": "**يجب اتباع تعليمات منسوبي المرور** في كافة الحالات، حتى لو خالفت الإشارة الضوئية.",
     "src": "moroor",
     "ref": "31",
     "kind": "must",
     "topic": "k1"
    },
    {
     "en": "The Traffic Department **manages roads and traffic** and enforces the rules for everyone's safety.",
     "ar": "تتولى إدارة المرور **إدارة الطرق وحركة السير** وتطبيق الأنظمة لسلامة الجميع.",
     "src": "moroor",
     "ref": "31",
     "kind": "tip",
     "topic": "k1"
    },
    {
     "en": "Drive only when fit, **with a valid licence**, and without endangering others.",
     "ar": "لا تقُد إلا وأنت بحالة جيدة **وتحمل رخصة قيادة سارية** ودون تعريض الآخرين للخطر.",
     "src": "moroor",
     "ref": "76",
     "kind": "must",
     "topic": "k10"
    },
    {
     "en": "Driving is a **privilege and a responsibility**: drive defensively and expect other people's mistakes.",
     "ar": "القيادة **امتياز ومسؤولية**: قُد بأسلوب وقائي وتوقّع أخطاء الآخرين.",
     "src": "moroor",
     "ref": "8",
     "kind": "tip",
     "topic": "k1"
    },
    {
     "en": "Road users differ: **pedestrians, cyclists, cars and trucks** move at very different speeds.",
     "ar": "مستعملو الطريق مختلفون: **المشاة والدراجات والسيارات والشاحنات** يسيرون بسرعات متفاوتة جدًا.",
     "src": "moroor",
     "ref": "16",
     "kind": "tip",
     "fig": "hbf-18-1",
     "topic": "k11"
    }
   ]
  },
  {
   "id": "T2",
   "en": "Violations, fines and the points system",
   "ar": "المخالفات والغرامات ونظام النقاط",
   "points": [
    {
     "en": "Running a **red light** costs ==3,000–6,000 riyals== and ==12 points==.",
     "ar": "**قطع الإشارة الحمراء** غرامته ==3000–6000 ريال== و==12 نقطة==.",
     "src": "moroor",
     "ref": "38, 43",
     "kind": "number",
     "topic": "k1"
    },
    {
     "en": "Driving under alcohol or drugs: **==5,000–10,000 riyals==** and ==24 points==.",
     "ar": "القيادة تحت تأثير مسكر أو مخدر: **==5000–10000 ريال==** و==24 نقطة==.",
     "src": "moroor",
     "ref": "39, 43",
     "kind": "number",
     "topic": "k1"
    },
    {
     "en": "Driving under alcohol, drugs or impairing medicine earns **==24 points==**.",
     "ar": "القيادة تحت تأثير الكحول أو المخدرات أو الدواء تُسجّل **==24 نقطة==** على السائق.",
     "src": "moroor",
     "ref": "89",
     "kind": "number",
     "topic": "k3"
    },
    {
     "en": "Hand-held phone use: ==500–900 riyals== and **==2 points==**; no seat belt: ==150–300== and ==2 points==.",
     "ar": "استخدام الجوال باليد: ==500–900 ريال== و**==نقطتان==**؛ وعدم ربط الحزام: ==150–300 ريال== و==نقطتان==.",
     "src": "moroor",
     "ref": "33, 35, 43",
     "kind": "number",
     "topic": "k1"
    },
    {
     "en": "First tafheet offence: **car impounded ==15 days==** and a ==20,000-riyal== fine.",
     "ar": "التفحيط للمرة الأولى: **حجز المركبة ==15 يومًا==** وغرامة ==20 ألف ريال==.",
     "src": "moroor",
     "ref": "41",
     "kind": "number",
     "topic": "k1"
    },
    {
     "en": "After a violation, **stay in the car** until the traffic officer arrives.",
     "ar": "عند ارتكاب مخالفة، **ابقَ داخل المركبة** حتى يصل رجل المرور.",
     "src": "moroor",
     "ref": "41",
     "kind": "must",
     "topic": "k1"
    },
    {
     "en": "Pay the minimum fine **within ==30 days==** of the violation.",
     "ar": "يجوز دفع الحد الأدنى للغرامة **خلال ==30 يومًا==** من تاريخ المخالفة.",
     "src": "moroor",
     "ref": "42",
     "kind": "number",
     "topic": "k1"
    },
    {
     "en": "Reaching **==24 points==** means your licence is withdrawn.",
     "ar": "عند بلوغ **==24 نقطة==** تُسحب رخصة القيادة.",
     "src": "moroor",
     "ref": "42, 44",
     "kind": "number",
     "topic": "k1"
    },
    {
     "en": "**Withdrawal** lasts ==3 months== the first time in a Hijri year, then ==6 months==, then ==1 year==.",
     "ar": "**مدة السحب** ==3 أشهر== للمرة الأولى في السنة الهجرية، ثم ==6 أشهر==، ثم ==سنة هجرية==.",
     "src": "moroor",
     "ref": "44",
     "kind": "number",
     "topic": "k1"
    },
    {
     "en": "Violations fall into **tables by fine level**, from ==100–150== riyals up to the most serious offences.",
     "ar": "تُقسَّم المخالفات **في جداول حسب قيمة الغرامة**، من ==100–150== ريالًا حتى أخطر المخالفات.",
     "src": "moroor",
     "ref": "32–41",
     "kind": "tip",
     "topic": "k1"
    }
   ]
  },
  {
   "id": "T3",
   "en": "Accidents: causes and the legal side",
   "ar": "الحوادث: أسبابها والجانب النظامي",
   "points": [
    {
     "en": "Main crash causes: **speeding**, ignoring rules, phone use, no seat belt, sudden lane changes.",
     "ar": "أبرز أسباب الحوادث: **السرعة الزائدة**، وعدم الالتزام بالأنظمة، والجوال، وعدم ربط الحزام، والتغيير المفاجئ للمسار.",
     "src": "moroor",
     "ref": "25",
     "kind": "danger",
     "topic": "k36",
     "fig": "hbf-25-1"
    },
    {
     "en": "**Speed not suited to the conditions** causes many crashes.",
     "ar": "**السرعة غير المناسبة للظروف** سبب لكثير من الحوادث.",
     "src": "moroor",
     "ref": "23",
     "kind": "danger",
     "fig": "hbf-24-1",
     "topic": "k36"
    },
    {
     "en": "A minor accident causes damage **up to ==5,000 riyals==** or injury needing no hospital.",
     "ar": "الحادث البسيط ينتج عنه أضرار **لا تتجاوز ==5 آلاف ريال==** أو إصابة لا تستلزم المستشفى.",
     "src": "moroor",
     "ref": "26",
     "kind": "number",
     "topic": "k36",
     "fig": "hbf-27-1"
    },
    {
     "en": "Breaking these rules risks up to ==2,000 riyals== and/or **==3 months== in prison**.",
     "ar": "مخالفة هذه الأنظمة قد تؤدي إلى غرامة تصل إلى ==ألفي ريال== و/أو **السجن حتى ==3 أشهر==**.",
     "src": "moroor",
     "ref": "29",
     "kind": "number",
     "topic": "k36"
    },
    {
     "en": "A driver in an injury or fatal crash may be **held up to ==72 hours==**.",
     "ar": "إذا نتج عن الحادث إصابة أو وفاة يُوقَف السائق مدة **لا تتجاوز ==72 ساعة==**.",
     "src": "moroor",
     "ref": "29",
     "kind": "number",
     "topic": "k36"
    },
    {
     "en": "At ==100 km/h== you need about **==130 metres==** to stop; at ==120 km/h==, about ==180 m==.",
     "ar": "عند ==100 كم/ساعة== تحتاج نحو **==130 مترًا==** للتوقف، وعند ==120 كم/ساعة== نحو ==180 مترًا==.",
     "src": "moroor",
     "ref": "22",
     "kind": "number",
     "topic": "k11",
     "fig": "hbf-184-1"
    }
   ]
  },
  {
   "id": "T4",
   "en": "Your vehicle and the law",
   "ar": "مركبتك والنظام",
   "points": [
    {
     "en": "**Flashing lights are banned** without Traffic Department permission.",
     "ar": "**يُحظر استخدام مصابيح الوميض** دون إذن من إدارة المرور.",
     "src": "moroor",
     "ref": "232",
     "kind": "never",
     "topic": "k31"
    },
    {
     "en": "No **white lights at the rear**, except number-plate and reversing lights.",
     "ar": "**يُحظر المصابيح البيضاء في الخلف** باستثناء مصابيح اللوحة والرجوع للخلف.",
     "src": "moroor",
     "ref": "232",
     "kind": "never",
     "topic": "k31"
    },
    {
     "en": "Don't fit covers or curtains, or put **drawings or ads** on the vehicle.",
     "ar": "لا تضع أغطية أو ستائر، ولا **نقوشًا أو إعلانات** على المركبة.",
     "src": "moroor",
     "ref": "94",
     "kind": "never",
     "topic": "k3"
    },
    {
     "en": "Don't wash or repair your car on public roads, or **litter or spit** while driving.",
     "ar": "لا تغسل المركبة أو تصلحها في الطريق العام، ولا **تبصق أو تلقِ القمامة** أثناء القيادة.",
     "src": "moroor",
     "ref": "95",
     "kind": "never",
     "topic": "k3"
    },
    {
     "en": "Don't damage, move or **put stickers or ads** on signs and signals.",
     "ar": "يُمنع إتلاف عناصر توجيه المرور أو نقلها أو **وضع ملصقات وإعلانات** عليها.",
     "src": "moroor",
     "ref": "51",
     "kind": "never",
     "topic": "k9"
    },
    {
     "en": "**Never throw anything** out of a vehicle.",
     "ar": "**لا ترمِ أي شيء** من نافذة المركبة.",
     "src": "dvsa",
     "ref": "147",
     "kind": "never",
     "topic": "k10"
    },
    {
     "en": "**Never smoke or use a phone** at a petrol station.",
     "ar": "**لا تدخّن ولا تستخدم الهاتف** في محطة الوقود.",
     "src": "dvsa",
     "ref": "Annex 6",
     "kind": "never",
     "topic": "k2"
    },
    {
     "en": "**Never leave children or pets** in an unventilated car.",
     "ar": "**لا تترك الأطفال أو الحيوانات** في مركبة غير مهوّاة.",
     "src": "dvsa",
     "ref": "Annex 6",
     "kind": "never",
     "topic": "k2"
    },
    {
     "en": "**Don't use hazard lights as an excuse** for dangerous or illegal parking.",
     "ar": "**لا تتخذ أضواء التحذير ذريعة** للوقوف الخطر أو المخالف.",
     "src": "dvsa",
     "ref": "116",
     "kind": "never",
     "topic": "k31"
    }
   ]
  },
  {
   "id": "T5",
   "en": "Rules for other road users (UK background)",
   "ar": "قواعد مستعملي الطريق الآخرين (خلفية من الدليل البريطاني)",
   "points": [
    {
     "en": "Cyclists may ride **side by side or move out** to avoid hazards; give them plenty of room.",
     "ar": "قد يسير راكبو الدراجات **جنبًا إلى جنب أو يبتعدون عن الحافة** لتفادي العوائق؛ امنحهم مساحة واسعة.",
     "src": "dvsa",
     "ref": "59–82",
     "kind": "tip",
     "topic": "k12"
    },
    {
     "en": "Motorcyclists are **easy to miss**; look twice before turning or changing lane.",
     "ar": "يصعب **ملاحظة** راكبي الدراجات النارية؛ انظر مرتين قبل الانعطاف أو تغيير المسار.",
     "src": "dvsa",
     "ref": "83–88",
     "kind": "tip",
     "topic": "k12"
    },
    {
     "en": "Powered wheelchairs and mobility scooters are **slow**; be patient and pass wide.",
     "ar": "الكراسي الكهربائية وعربات التنقل **بطيئة**؛ تحلَّ بالصبر وتجاوزها بمسافة واسعة.",
     "src": "dvsa",
     "ref": "36–46",
     "kind": "tip",
     "topic": "k10"
    },
    {
     "en": "Trams **cannot steer round you**; never stop on tram rails or drive in a tram-only lane.",
     "ar": "الترام **لا يستطيع تفاديك**؛ لا تتوقف أبدًا على قضبانه ولا تسِر في مساره المخصص.",
     "src": "dvsa",
     "ref": "300–307",
     "kind": "danger",
     "topic": "k14"
    },
    {
     "en": "Bicycles need working brakes and **lights at night**.",
     "ar": "تحتاج الدراجات الهوائية إلى فرامل سليمة و**أنوار ليلًا**.",
     "src": "dvsa",
     "ref": "Annex 1",
     "kind": "tip",
     "topic": "k12"
    }
   ]
  }
 ],
 "coverage": [
  {
   "source": "moroor",
   "ref": "hb-intro 8–11",
   "to": "T1"
  },
  {
   "source": "moroor",
   "ref": "hb-licence 12–15",
   "to": "T1"
  },
  {
   "source": "moroor",
   "ref": "hb-speed 16–17 (road users, basic principle)",
   "to": "T1"
  },
  {
   "source": "moroor",
   "ref": "hb-speed 18–23 (stopping distance)",
   "to": "L9"
  },
  {
   "source": "moroor",
   "ref": "hb-accidents 24–27 (causes, types)",
   "to": "T3"
  },
  {
   "source": "moroor",
   "ref": "hb-accidents 28–30 (what to do, moving vehicles)",
   "to": "L22"
  },
  {
   "source": "moroor",
   "ref": "hb-traffic 31",
   "to": "T1"
  },
  {
   "source": "moroor",
   "ref": "hb-violations 32–44",
   "to": "T2"
  },
  {
   "source": "moroor",
   "ref": "hb-roadparts 45–46 (road, service road, merging lane, island)",
   "to": "L14"
  },
  {
   "source": "moroor",
   "ref": "hb-roadparts 47 (intersections, priority rule)",
   "to": "L5"
  },
  {
   "source": "moroor",
   "ref": "hb-roadparts 48–50 (cycle lane, footpath, pedestrian crossings)",
   "to": "L12"
  },
  {
   "source": "moroor",
   "ref": "hb-guidance 51 (markings, solid/broken lines)",
   "to": "L3"
  },
  {
   "source": "moroor",
   "ref": "hb-signs 52–56 (warning, regulatory, priority signs)",
   "to": "L11"
  },
  {
   "source": "moroor",
   "ref": "hb-signs 57–73 (mandatory, guide, work-zone signs)",
   "to": "L20"
  },
  {
   "source": "moroor",
   "ref": "hb-u2 74–75",
   "to": "L16"
  },
  {
   "source": "moroor",
   "ref": "hb-coop 76–82",
   "to": "L16"
  },
  {
   "source": "moroor",
   "ref": "hb-priorityusers 83–86",
   "to": "L16"
  },
  {
   "source": "moroor",
   "ref": "hb-assess 87–88",
   "to": "L5"
  },
  {
   "source": "moroor",
   "ref": "hb-duties 89–94 (fitness, checks, seating)",
   "to": "L1"
  },
  {
   "source": "moroor",
   "ref": "hb-duties 94–95 (prohibitions while driving; vehicle rules)",
   "to": "T4"
  },
  {
   "source": "moroor",
   "ref": "hb-duties 95 (breakdown warning)",
   "to": "L22"
  },
  {
   "source": "moroor",
   "ref": "hb-duties 96 (after parking)",
   "to": "L6"
  },
  {
   "source": "moroor",
   "ref": "hb-passengers 97–99",
   "to": "L20"
  },
  {
   "source": "moroor",
   "ref": "hb-u3 100–101",
   "to": "L3"
  },
  {
   "source": "moroor",
   "ref": "hb-general 102–108",
   "to": "L3"
  },
  {
   "source": "moroor",
   "ref": "hb-lanechange 109–113",
   "to": "L15"
  },
  {
   "source": "moroor",
   "ref": "hb-lanechoice 114–120",
   "to": "L15"
  },
  {
   "source": "moroor",
   "ref": "hb-lanechoice 121–122 (roundabout lanes)",
   "to": "L13"
  },
  {
   "source": "moroor",
   "ref": "hb-turning 123–124",
   "to": "L5"
  },
  {
   "source": "moroor",
   "ref": "hb-turning 125 (reversing)",
   "to": "L4"
  },
  {
   "source": "moroor",
   "ref": "hb-u4 126–128",
   "to": "L12"
  },
  {
   "source": "moroor",
   "ref": "hb-lights 129–133",
   "to": "L12"
  },
  {
   "source": "moroor",
   "ref": "hb-police 134",
   "to": "L12"
  },
  {
   "source": "moroor",
   "ref": "hb-stopgive 135–136",
   "to": "L12"
  },
  {
   "source": "moroor",
   "ref": "hb-priority 137–138 (emergency vehicles)",
   "to": "L16"
  },
  {
   "source": "moroor",
   "ref": "hb-priority 139–146 (equal junctions, right before left, straight ahead)",
   "to": "L5"
  },
  {
   "source": "moroor",
   "ref": "hb-priority 147–150 (entering main road)",
   "to": "L12"
  },
  {
   "source": "moroor",
   "ref": "hb-priority 151–153 (leaving main road, service road)",
   "to": "L14"
  },
  {
   "source": "moroor",
   "ref": "hb-priority 154–155 (roundabout)",
   "to": "L13"
  },
  {
   "source": "moroor",
   "ref": "hb-priority 156–159 (U-turns)",
   "to": "L14"
  },
  {
   "source": "moroor",
   "ref": "hb-priority 160–161 (look, assess, decide, act)",
   "to": "L5"
  },
  {
   "source": "moroor",
   "ref": "hb-pedx 162",
   "to": "L12"
  },
  {
   "source": "moroor",
   "ref": "hb-rail 163–165",
   "to": "L12"
  },
  {
   "source": "moroor",
   "ref": "hb-u5 166–167",
   "to": "L11"
  },
  {
   "source": "moroor",
   "ref": "hb-limits 168–174",
   "to": "L11"
  },
  {
   "source": "moroor",
   "ref": "hb-limits 171 (slow down at night, strong sun)",
   "to": "L19"
  },
  {
   "source": "moroor",
   "ref": "hb-limits 172 (slow down in fog, rain, sandstorms)",
   "to": "L23"
  },
  {
   "source": "moroor",
   "ref": "hb-limits 174 (minimum speed)",
   "to": "L17"
  },
  {
   "source": "moroor",
   "ref": "hb-choosespeed 175–185",
   "to": "L11"
  },
  {
   "source": "moroor",
   "ref": "hb-distance 186–188",
   "to": "L17"
  },
  {
   "source": "moroor",
   "ref": "hb-behaviour 189–191 (two-second rule)",
   "to": "L11"
  },
  {
   "source": "moroor",
   "ref": "hb-eco 192–193",
   "to": "L18"
  },
  {
   "source": "moroor",
   "ref": "hb-u6 194–195",
   "to": "L15"
  },
  {
   "source": "moroor",
   "ref": "hb-near 196–201",
   "to": "L15"
  },
  {
   "source": "moroor",
   "ref": "hb-overtake 202–203",
   "to": "L15"
  },
  {
   "source": "moroor",
   "ref": "hb-noovertake 204–209",
   "to": "L15"
  },
  {
   "source": "moroor",
   "ref": "hb-safeovertake 210",
   "to": "L18"
  },
  {
   "source": "moroor",
   "ref": "hb-overtakeissue 211–213",
   "to": "L18"
  },
  {
   "source": "moroor",
   "ref": "hb-stopping 214–215 (how to park)",
   "to": "L6"
  },
  {
   "source": "moroor",
   "ref": "hb-stopping 216–222 (where not to park)",
   "to": "L7"
  },
  {
   "source": "moroor",
   "ref": "hb-vlights 223–231",
   "to": "L19"
  },
  {
   "source": "moroor",
   "ref": "hb-vlights 232 (banned lights)",
   "to": "T4"
  },
  {
   "source": "moroor",
   "ref": "hb-vlights 233–234 (brake, reversing, indicators, hazards)",
   "to": "L19"
  },
  {
   "source": "moroor",
   "ref": "hb-dash 235–236",
   "to": "L1"
  },
  {
   "source": "moroor",
   "ref": "hb-vision 237–239",
   "to": "L19"
  },
  {
   "source": "dvsa",
   "ref": "Introduction, H1–H3 (hierarchy of road users)",
   "to": "L16"
  },
  {
   "source": "dvsa",
   "ref": "Rules 1–35 (pedestrians)",
   "to": "L12"
  },
  {
   "source": "dvsa",
   "ref": "Rules 36–46 (powered wheelchairs, mobility scooters)",
   "to": "T5"
  },
  {
   "source": "dvsa",
   "ref": "Rules 47–58 (animals)",
   "to": "L18"
  },
  {
   "source": "dvsa",
   "ref": "Rules 59–82 (cyclists)",
   "to": "T5"
  },
  {
   "source": "dvsa",
   "ref": "Rules 83–88 (motorcyclists)",
   "to": "T5"
  },
  {
   "source": "dvsa",
   "ref": "Rules 89–96 (fitness, alcohol, drugs)",
   "to": "L1"
  },
  {
   "source": "dvsa",
   "ref": "Rules 97–98 (before setting off, vehicle towing and loading)",
   "to": "L1"
  },
  {
   "source": "dvsa",
   "ref": "Rules 99–102 (seat belts, child restraints)",
   "to": "L20"
  },
  {
   "source": "dvsa",
   "ref": "Rules 103–106 (signals)",
   "to": "L3"
  },
  {
   "source": "dvsa",
   "ref": "Rules 107–112 (police, traffic lights, signs, flashing headlights)",
   "to": "L12"
  },
  {
   "source": "dvsa",
   "ref": "Rules 113–116 (lighting)",
   "to": "L19"
  },
  {
   "source": "dvsa",
   "ref": "Rules 117–122 (braking, ABS, skids, coasting)",
   "to": "L9"
  },
  {
   "source": "dvsa",
   "ref": "Rule 123 (engine, environment)",
   "to": "L18"
  },
  {
   "source": "dvsa",
   "ref": "Rules 124–126 (speed limits, stopping distances)",
   "to": "L11"
  },
  {
   "source": "dvsa",
   "ref": "Rules 127–132 (lines and lane markings)",
   "to": "L3"
  },
  {
   "source": "dvsa",
   "ref": "Rules 133–143 (multi-lane, bus/cycle lanes, one-way)",
   "to": "L15"
  },
  {
   "source": "dvsa",
   "ref": "Rules 144–151 (general advice, careless driving)",
   "to": "L16"
  },
  {
   "source": "dvsa",
   "ref": "Rules 152–153 (residential, traffic calming)",
   "to": "L11"
  },
  {
   "source": "dvsa",
   "ref": "Rules 154–158 (country roads)",
   "to": "L18"
  },
  {
   "source": "dvsa",
   "ref": "Rules 159–161 (moving off, mirrors)",
   "to": "L2"
  },
  {
   "source": "dvsa",
   "ref": "Rules 162–169 (overtaking)",
   "to": "L15"
  },
  {
   "source": "dvsa",
   "ref": "Rules 170–183 (junctions, traffic-light junctions)",
   "to": "L12"
  },
  {
   "source": "dvsa",
   "ref": "Rules 184–190 (roundabouts)",
   "to": "L13"
  },
  {
   "source": "dvsa",
   "ref": "Rules 191–199 (pedestrian crossings)",
   "to": "L12"
  },
  {
   "source": "dvsa",
   "ref": "Rules 200–203 (reversing)",
   "to": "L4"
  },
  {
   "source": "dvsa",
   "ref": "Rules 204–225 (road users needing extra care, emergency vehicles)",
   "to": "L16"
  },
  {
   "source": "dvsa",
   "ref": "Rules 226–237 (adverse weather)",
   "to": "L23"
  },
  {
   "source": "dvsa",
   "ref": "Rules 238–249 (waiting and parking)",
   "to": "L7"
  },
  {
   "source": "dvsa",
   "ref": "Rules 250–252 (parking at night, on hills)",
   "to": "L8"
  },
  {
   "source": "dvsa",
   "ref": "Rules 253–274 (motorways)",
   "to": "L17"
  },
  {
   "source": "dvsa",
   "ref": "Rules 275–287 (breakdowns and incidents)",
   "to": "L22"
  },
  {
   "source": "dvsa",
   "ref": "Rules 288–290 (road works)",
   "to": "L16"
  },
  {
   "source": "dvsa",
   "ref": "Rules 291–299 (level crossings)",
   "to": "L12"
  },
  {
   "source": "dvsa",
   "ref": "Rules 300–307 (tramways)",
   "to": "T5"
  },
  {
   "source": "dvsa",
   "ref": "Annex 1 (choosing and maintaining a bicycle)",
   "to": "T5"
  },
  {
   "source": "dvsa",
   "ref": "Annex 2 (motorcycle licence)",
   "to": "T1"
  },
  {
   "source": "dvsa",
   "ref": "Annex 3 (licence requirements)",
   "to": "T1"
  },
  {
   "source": "dvsa",
   "ref": "Annex 4 (the road user and the law)",
   "to": "T1"
  },
  {
   "source": "dvsa",
   "ref": "Annex 5 (penalties)",
   "to": "T2"
  },
  {
   "source": "dvsa",
   "ref": "Annex 6 (vehicle maintenance, safety and security)",
   "to": "L1"
  },
  {
   "source": "dvsa",
   "ref": "Annex 7 (first aid)",
   "to": "L22"
  },
  {
   "source": "dvsa",
   "ref": "Annex 8 (safety code for new drivers)",
   "to": "T1"
  },
  {
   "source": "dvsa",
   "ref": "Other information",
   "to": "T1"
  },
  {
   "source": "summaries",
   "ref": "k5 (6 points)",
   "to": "L1, L10, L22"
  },
  {
   "source": "summaries",
   "ref": "k27 (8 points)",
   "to": "L11, L5"
  },
  {
   "source": "summaries",
   "ref": "k19 (10 points)",
   "to": "L4, L8, L10, L6"
  },
  {
   "source": "summaries",
   "ref": "k33 (9 points)",
   "to": "L20, L8"
  },
  {
   "source": "summaries",
   "ref": "k26 (8 points)",
   "to": "L9, L2, L23"
  },
  {
   "source": "summaries",
   "ref": "k6 (7 points)",
   "to": "L2, L9, L3, L10"
  },
  {
   "source": "summaries",
   "ref": "k17 (7 points)",
   "to": "L14, L8, L5"
  },
  {
   "source": "summaries",
   "ref": "k8 (8 points)",
   "to": "L15, L3, L10, L4"
  },
  {
   "source": "summaries",
   "ref": "k13 (11 points)",
   "to": "L18, L6, L19, L23, L2"
  },
  {
   "source": "summaries",
   "ref": "k32 (11 points)",
   "to": "L23"
  },
  {
   "source": "summaries",
   "ref": "k15 (11 points)",
   "to": "L13"
  },
  {
   "source": "summaries",
   "ref": "k30 (10 points)",
   "to": "L18, L8, L20, L21"
  },
  {
   "source": "summaries",
   "ref": "k2 (11 points)",
   "to": "L10, L1, L22, T4, L21"
  },
  {
   "source": "summaries",
   "ref": "k28 (12 points)",
   "to": "L21, L5, L15, L20, L16"
  },
  {
   "source": "summaries",
   "ref": "k31 (12 points)",
   "to": "L19, L23, T4"
  },
  {
   "source": "summaries",
   "ref": "k29 (12 points)",
   "to": "L17, L22"
  },
  {
   "source": "summaries",
   "ref": "k23 (12 points)",
   "to": "L6, L8, L7, L10"
  },
  {
   "source": "summaries",
   "ref": "k3 (12 points)",
   "to": "L1, T2, L16, L10, L3, L2, L9, T4, L6, L8"
  },
  {
   "source": "summaries",
   "ref": "k7 (12 points)",
   "to": "L2, L21, L3, L15, L8, L5"
  },
  {
   "source": "summaries",
   "ref": "k9 (12 points)",
   "to": "L3, T4, L11, L5, L20, L16, L12, L10"
  },
  {
   "source": "summaries",
   "ref": "k16 (12 points)",
   "to": "L5, L7, L21, L12"
  },
  {
   "source": "summaries",
   "ref": "k36 (12 points)",
   "to": "L22, T3"
  },
  {
   "source": "summaries",
   "ref": "k11 (12 points)",
   "to": "L2, L11, L9, T3, L13, L16, L17, L21, L20"
  },
  {
   "source": "summaries",
   "ref": "k14 (12 points)",
   "to": "L12, L10, L16, L5, L21"
  },
  {
   "source": "summaries",
   "ref": "k10 (12 points)",
   "to": "T1, L16, L21, L12, L5, L11, L18, T4"
  },
  {
   "source": "summaries",
   "ref": "k12 (12 points)",
   "to": "L16, L8, L15, L18"
  },
  {
   "source": "summaries",
   "ref": "k1 (12 points)",
   "to": "T1, T2"
  }
 ]
};
