// "Know your car" content for the Maruti Suzuki FRONX.
// Source: FRONX Owner's Manual (Maruti Suzuki India Ltd, ©2024, doc code 55TH0-74E).
// `page` values are the manual's printed page labels ("chapter-page"), e.g. "5-21".
// Variants: "manual" = 5-speed manual (MT); "auto" covers BOTH automatic types in the manual:
//   AGS = Auto Gear Shift (5-speed automated manual, positions N/D/M/R, no P)
//   AT  = 6-speed torque-converter Automatic Transmission (P/R/N/D/M + paddles)
// Items specific to one auto type say so in `autoType`.
// Each item: `en`/`ar` = one-line plain summary (fallback). Structured fields, all {en, ar}:
//   title, what, does, how[] (controls/procedures) | looks, means, todo (warning lights, `urgency` set),
//   tip (optional), lessons[] = lesson ids where this comes up. `steps` kept from the original data.
export default {
  "source": {
    "title": "FRONX Owner's Manual (Maruti Suzuki India Limited)",
    "edition": "©2024, 55TH0-74E"
  },
  "sections": [
    {
      "id": "cockpit",
      "en": "Cockpit & controls",
      "ar": "مقصورة القيادة وأدوات التحكم",
      "variant": "both",
      "page": "1-5",
      "items": [
        {
          "id": "dashboard-overview",
          "en": "A map of the main controls around the steering wheel.",
          "ar": "خريطة لأهم أدوات التحكم حول المقود.",
          "page": "1-5",
          "variant": "both",
          "fig": "figs/dashboard.webp",
          "title": {
            "en": "Dashboard layout",
            "ar": "ترتيب لوحة القيادة"
          },
          "what": {
            "en": "The panel in front of you, around and behind the steering wheel.",
            "ar": "اللوحة التي أمامك، حول المقود وخلفه."
          },
          "does": {
            "en": "It holds the hazard button, the light and wiper stalks, the dials, the start button and the steering-wheel lock lever. Knowing where each one is means you never search while driving.",
            "ar": "فيها زر الإشارات التحذيرية، وذراعا الأنوار والمسّاحات، والعدادات، وزر التشغيل، وذراع ضبط المقود. معرفة مكان كل منها تعني أنك لن تبحثي عنه أثناء القيادة."
          },
          "tip": {
            "en": "Sit in the parked car and touch each control once, eyes on the road ahead.",
            "ar": "اجلسي في السيارة وهي واقفة، والمسي كل أداة مرة واحدة وعيناك إلى الأمام."
          },
          "lessons": [
            "L1"
          ]
        },
        {
          "id": "seat-adjust",
          "en": "Set the driver's seat before you drive, never while moving.",
          "ar": "اضبطي مقعد السائق قبل القيادة، وليس أثناء السير.",
          "page": "2-6",
          "variant": "both",
          "title": {
            "en": "Driver's seat",
            "ar": "مقعد السائق"
          },
          "what": {
            "en": "Your seat, with levers at the front and on the side.",
            "ar": "مقعدك، وفيه أذرع في الأمام وعلى الجانب."
          },
          "does": {
            "en": "A good seat position lets you press the pedals fully and see well. Set it **before you drive**, never while moving.",
            "ar": "وضعية المقعد الصحيحة تجعلك تضغطين الدواسات بالكامل وترين جيدًا. اضبطيه **قبل القيادة**، ولا تضبطيه أثناء السير."
          },
          "how": [
            {
              "en": "Lift the front lever and slide the seat until you reach the pedals comfortably.",
              "ar": "ارفعي الذراع الأمامي وحرّكي المقعد حتى تصلي إلى الدواسات براحة."
            },
            {
              "en": "Pull the side lever and set the backrest upright.",
              "ar": "اسحبي الذراع الجانبي واجعلي ظهر المقعد مستقيمًا."
            },
            {
              "en": "Use the height lever, if your seat has one, to raise or lower it.",
              "ar": "استخدمي ذراع الارتفاع، إن وُجد، لرفع المقعد أو خفضه."
            },
            {
              "en": "Rock the seat back and forth to check it is locked.",
              "ar": "حرّكي المقعد للأمام والخلف لتتأكدي أنه مثبّت."
            }
          ],
          "tip": {
            "en": "You should press the brake to the floor with your knee still slightly bent.",
            "ar": "يجب أن تضغطي الفرامل حتى النهاية وركبتك ما زالت منثنية قليلًا."
          },
          "lessons": [
            "L1"
          ],
          "steps": [
            {
              "en": "Pull lever (1) up and slide the seat to reach the pedals comfortably.",
              "ar": "اسحب الذراع (1) لأعلى وحرّك المقعد حتى تصل إلى الدواسات براحة."
            },
            {
              "en": "Pull lever (2) up and set the seatback upright.",
              "ar": "اسحب الذراع (2) لأعلى واجعل مسند الظهر في وضع قائم."
            },
            {
              "en": "Use lever (3) to raise or lower the seat (if equipped).",
              "ar": "استخدم الذراع (3) لرفع المقعد أو خفضه (إن وُجد)."
            },
            {
              "en": "Move the seat back and forth to confirm it is locked.",
              "ar": "حرّك المقعد للأمام والخلف للتأكد من قفله."
            }
          ]
        },
        {
          "id": "head-restraint",
          "en": "Set the head restraint level with the top of your ears.",
          "ar": "اضبطي مسند الرأس بمستوى أعلى أذنيك.",
          "page": "2-6",
          "variant": "both",
          "title": {
            "en": "Head restraint",
            "ar": "مسند الرأس"
          },
          "what": {
            "en": "The cushion on top of your seat, behind your head.",
            "ar": "الوسادة أعلى المقعد، خلف رأسك."
          },
          "does": {
            "en": "It protects your neck if the car is hit from behind.",
            "ar": "يحمي رقبتك إذا صُدمت السيارة من الخلف."
          },
          "how": [
            {
              "en": "Raise or lower it so its centre is **level with the top of your ears**.",
              "ar": "ارفعيه أو اخفضيه حتى يكون منتصفه **بمستوى أعلى أذنيك**."
            }
          ],
          "tip": {
            "en": "Never drive with the head restraints removed.",
            "ar": "لا تقودي أبدًا ومساند الرأس منزوعة."
          },
          "lessons": [
            "L1",
            "L21"
          ]
        },
        {
          "id": "steering-adjust",
          "en": "Unlock the lever under the column, set the wheel, lock it again.",
          "ar": "حرّري الذراع تحت عمود المقود، اضبطي المقود، ثم اقفليه.",
          "page": "2-7",
          "variant": "both",
          "title": {
            "en": "Steering wheel position",
            "ar": "وضعية المقود"
          },
          "what": {
            "en": "A lock lever under the steering column lets the wheel move.",
            "ar": "ذراع قفل تحت عمود المقود يسمح بتحريكه."
          },
          "does": {
            "en": "It lets you set the wheel height (and reach, if fitted) so you can hold it comfortably and see the dials.",
            "ar": "يتيح لك ضبط ارتفاع المقود (وبُعده إن كان متاحًا) لتمسكيه براحة وتري العدادات."
          },
          "how": [
            {
              "en": "Push the lock lever down to unlock.",
              "ar": "ادفعي ذراع القفل للأسفل لتحريره."
            },
            {
              "en": "Move the wheel to where you want it.",
              "ar": "حرّكي المقود إلى الوضع المناسب."
            },
            {
              "en": "Pull the lever up to lock it.",
              "ar": "اسحبي الذراع للأعلى لقفله."
            },
            {
              "en": "Try to move the wheel to check it is locked.",
              "ar": "حاولي تحريك المقود لتتأكدي أنه مقفل."
            }
          ],
          "tip": {
            "en": "Never adjust the wheel while the car is moving.",
            "ar": "لا تضبطي المقود أبدًا والسيارة تتحرك."
          },
          "lessons": [
            "L1"
          ],
          "steps": [
            {
              "en": "Push the lock lever down to unlock.",
              "ar": "ادفع ذراع القفل للأسفل لفك القفل."
            },
            {
              "en": "Move the wheel to the desired height and position.",
              "ar": "حرّك المقود إلى الارتفاع والوضع المناسبين."
            },
            {
              "en": "Pull the lever up to lock, then try moving the wheel to confirm.",
              "ar": "اسحب الذراع لأعلى للقفل، ثم حاول تحريك المقود للتأكد."
            }
          ]
        },
        {
          "id": "inside-mirror",
          "en": "Set the inside mirror by hand to see the whole rear window.",
          "ar": "اضبطي المرآة الداخلية بيدك لتري الزجاج الخلفي كاملًا.",
          "page": "2-8",
          "variant": "both",
          "title": {
            "en": "Inside (rear-view) mirror",
            "ar": "المرآة الداخلية"
          },
          "what": {
            "en": "The mirror at the top of the windscreen.",
            "ar": "المرآة في أعلى الزجاج الأمامي."
          },
          "does": {
            "en": "It shows the road behind you through the rear window. A small tab underneath switches to a **night position** that cuts glare from headlights behind.",
            "ar": "تُظهر الطريق خلفك من الزجاج الخلفي. وفيها لسان صغير أسفلها يحوّلها إلى **وضع ليلي** يخفف وهج أنوار السيارات خلفك."
          },
          "how": [
            {
              "en": "Set the tab underneath to the day position.",
              "ar": "اجعلي اللسان السفلي على الوضع النهاري."
            },
            {
              "en": "Move the mirror by hand until you see the whole rear window.",
              "ar": "حرّكي المرآة بيدك حتى تري الزجاج الخلفي كاملًا."
            },
            {
              "en": "At night, flip the tab only if lights behind dazzle you.",
              "ar": "في الليل، اقلبي اللسان فقط إذا أزعجك وهج الأنوار خلفك."
            }
          ],
          "tip": {
            "en": "Adjust it before you drive, not on the move.",
            "ar": "اضبطيها قبل القيادة، لا أثناء السير."
          },
          "lessons": [
            "L1",
            "L3",
            "L19"
          ]
        },
        {
          "id": "outside-mirrors",
          "en": "Set the side mirrors so you just see the side of your car.",
          "ar": "اضبطي المرايا الجانبية بحيث ترين جانب سيارتك بالكاد.",
          "page": "2-10",
          "variant": "both",
          "title": {
            "en": "Side mirrors",
            "ar": "المرايا الجانبية"
          },
          "what": {
            "en": "The two mirrors outside the front doors, with a control switch on the driver's door.",
            "ar": "المرآتان خارج البابين الأماميين، ومفتاح التحكم بهما على باب السائق."
          },
          "does": {
            "en": "They show the lanes beside and behind you. They do not show the blind spot, so you still need a quick look over your shoulder.",
            "ar": "تُظهران المسارات بجانبك وخلفك. لكنهما لا تُظهران النقطة العمياء، لذلك تحتاجين نظرة سريعة فوق كتفك."
          },
          "how": [
            {
              "en": "Turn the selector on the driver's door to the left or right mirror.",
              "ar": "أديري المفتاح على باب السائق نحو المرآة اليسرى أو اليمنى."
            },
            {
              "en": "Press the edge of the switch in the direction you want the mirror to move.",
              "ar": "اضغطي حافة المفتاح في الاتجاه الذي تريدين تحريك المرآة إليه."
            },
            {
              "en": "Stop when you can **just see the side of your car**.",
              "ar": "توقفي عندما ترين **جانب سيارتك بالكاد**."
            },
            {
              "en": "Return the selector to the centre.",
              "ar": "أعيدي المفتاح إلى المنتصف."
            }
          ],
          "tip": {
            "en": "Never drive with the mirrors folded.",
            "ar": "لا تقودي أبدًا والمرايا مطوية."
          },
          "lessons": [
            "L1",
            "L3",
            "L7",
            "L10",
            "L15"
          ]
        },
        {
          "id": "seatbelt",
          "en": "Click the belt in, tug to check, lap part low on the hips.",
          "ar": "اربطي الحزام حتى تسمعي النقرة، واسحبيه للتأكد، والجزء السفلي منخفض على الوركين.",
          "page": "2-20",
          "variant": "both",
          "title": {
            "en": "Seat belt",
            "ar": "حزام الأمان"
          },
          "what": {
            "en": "The belt beside your shoulder, with a buckle by your hip.",
            "ar": "الحزام بجانب كتفك، والقفل بجانب وركك."
          },
          "does": {
            "en": "It holds you in your seat in a crash. **Everyone in the car** must wear one.",
            "ar": "يثبّتك في مقعدك عند الحادث. **كل من في السيارة** يجب أن يربطه."
          },
          "how": [
            {
              "en": "Sit upright and well back in the seat.",
              "ar": "اجلسي باستقامة وإلى الخلف في المقعد."
            },
            {
              "en": "Pull the metal tongue across your body.",
              "ar": "اسحبي اللسان المعدني عبر جسمك."
            },
            {
              "en": "Push it into the buckle until it clicks.",
              "ar": "أدخليه في القفل حتى تسمعي نقرة."
            },
            {
              "en": "Tug the belt to check it holds.",
              "ar": "اسحبي الحزام لتتأكدي أنه مثبّت."
            },
            {
              "en": "Keep the lap part low on your hips.",
              "ar": "اجعلي الجزء السفلي منخفضًا على وركيك."
            }
          ],
          "lessons": [
            "L1",
            "L20"
          ],
          "steps": [
            {
              "en": "Sit up straight and far back in the seat.",
              "ar": "اجلس مستقيماً وإلى الخلف تماماً في المقعد."
            },
            {
              "en": "Pull the latch plate across your body and press into the buckle until it clicks.",
              "ar": "اسحب لسان الحزام عبر جسمك وأدخله في الإبزيم حتى تسمع نقرة."
            },
            {
              "en": "Pull the belt to check it is latched; keep the lap belt low on the hips.",
              "ar": "اسحب الحزام للتأكد من تثبيته، وأبقِ الجزء السفلي منخفضاً على الوركين."
            }
          ]
        },
        {
          "id": "lights-stalk",
          "en": "Twist the end of the left stalk for lights; leave it on AUTO.",
          "ar": "أديري طرف الذراع الأيسر للأنوار، واتركيه على AUTO.",
          "page": "3-21",
          "variant": "both",
          "title": {
            "en": "Headlights",
            "ar": "الأنوار الأمامية"
          },
          "what": {
            "en": "The stalk on the **left** of the steering wheel on your car; you twist its end.",
            "ar": "الذراع على **يسار** المقود في سيارتك، وتديرين طرفه."
          },
          "does": {
            "en": "Twisting the end chooses OFF, AUTO, side lights or headlights. **AUTO** turns the lights on by themselves when it gets dark. Push the stalk away for high beam (bright lights), pull it back for normal beam, and pull briefly to flash.",
            "ar": "إدارة الطرف تختار: إيقاف، AUTO، الأنوار الجانبية، أو الأنوار الأمامية. وضع **AUTO** يشغّل الأنوار تلقائيًا عند حلول الظلام. ادفعي الذراع للأمام للنور العالي، واسحبيه للخلف للنور العادي، واسحبيه سريعًا للتنبيه بالنور."
          },
          "how": [
            {
              "en": "Twist the end of the stalk to **AUTO** and leave it there.",
              "ar": "أديري طرف الذراع إلى **AUTO** واتركيه عليه."
            },
            {
              "en": "Push the stalk away from you for high beam; a blue light shows.",
              "ar": "ادفعي الذراع بعيدًا عنك للنور العالي، وسيظهر ضوء أزرق."
            },
            {
              "en": "Pull it back towards you to return to normal beam.",
              "ar": "اسحبيه نحوك للعودة إلى النور العادي."
            },
            {
              "en": "Pull briefly and let go to flash the lights.",
              "ar": "اسحبيه لحظة ثم اتركيه لتومضي بالنور."
            }
          ],
          "tip": {
            "en": "The AUTO sensor takes about ==5== seconds to react, so switch on yourself before a tunnel.",
            "ar": "حسّاس AUTO يحتاج نحو ==5== ثوانٍ ليستجيب، فشغّلي الأنوار بنفسك قبل النفق."
          },
          "lessons": [
            "L1",
            "L19",
            "L23"
          ]
        },
        {
          "id": "turn-signal",
          "en": "Move the left stalk up or down to signal; check the direction in your car.",
          "ar": "حرّكي الذراع الأيسر للأعلى أو الأسفل للإشارة، وتأكدي من الاتجاه في سيارتك.",
          "page": "3-24",
          "variant": "both",
          "title": {
            "en": "Indicators (turn signals)",
            "ar": "الإشارات (الغمّازات)"
          },
          "what": {
            "en": "The same left stalk as the lights; you move it up or down. Works with the ignition ON.",
            "ar": "نفس الذراع الأيسر الخاص بالأنوار، وتحرّكينه للأعلى أو الأسفل. يعمل والتشغيل على ON."
          },
          "does": {
            "en": "It tells other drivers you are about to turn or change lane. Your guide notes the manual is written for a right-hand-drive car, so on your left-hand-drive Fronx the direction may be the opposite of the manual: **check in your car** which way gives left and which gives right.",
            "ar": "تخبر السائقين الآخرين أنك ستنعطفين أو تغيّرين المسار. دليلك ينبّه أن الكتيّب مكتوب لسيارة مقودها على اليمين، لذلك قد يكون الاتجاه في سيارتك عكس الكتيّب: **جرّبي في سيارتك** أي اتجاه يعطي يسارًا وأيه يعطي يمينًا."
          },
          "how": [
            {
              "en": "For a turn, push the stalk fully up or down; it stays on.",
              "ar": "للانعطاف، ادفعي الذراع للأعلى أو للأسفل حتى النهاية، فيبقى يعمل."
            },
            {
              "en": "For a lane change, tap it lightly: it flashes ==3== times.",
              "ar": "لتغيير المسار، المسيه لمسة خفيفة فيومض ==3== مرات."
            },
            {
              "en": "After the turn, check it switched off; after a small turn, return it by hand.",
              "ar": "بعد الانعطاف تأكدي أنه توقف، وبعد انعطاف بسيط أعيديه بيدك."
            }
          ],
          "tip": {
            "en": "A green arrow flashing fast on the dash means a bulb has failed.",
            "ar": "إذا ومض السهم الأخضر في اللوحة بسرعة فهذا يعني أن مصباحًا تعطّل."
          },
          "lessons": [
            "L1",
            "L3",
            "L5",
            "L12",
            "L13",
            "L14",
            "L15",
            "L17"
          ]
        },
        {
          "id": "wipers",
          "en": "Wiper stalk: MIST, OFF, INT, LO, HI; pull to spray.",
          "ar": "ذراع المسّاحات: MIST، OFF، INT، LO، HI، واسحبيه للرش.",
          "page": "3-27",
          "variant": "both",
          "title": {
            "en": "Windscreen wipers",
            "ar": "مسّاحات الزجاج الأمامي"
          },
          "what": {
            "en": "The stalk on the **right** of the steering wheel on your car. Works with the ignition ON.",
            "ar": "الذراع على **يمين** المقود في سيارتك. يعمل والتشغيل على ON."
          },
          "does": {
            "en": "It clears rain and dust from the windscreen. Positions: MIST (one wipe), OFF, INT (wipes with a pause), LO (slow), HI (fast).",
            "ar": "ينظّف الزجاج الأمامي من المطر والغبار. الأوضاع: MIST (مسحة واحدة)، OFF (إيقاف)، INT (مسح مع توقف)، LO (بطيء)، HI (سريع)."
          },
          "how": [
            {
              "en": "Move the stalk up or down to choose a speed.",
              "ar": "حرّكي الذراع للأعلى أو للأسفل لاختيار السرعة."
            },
            {
              "en": "On INT, twist the ring to set the pause between wipes.",
              "ar": "في وضع INT، أديري الحلقة لضبط مدة التوقف بين المسحات."
            },
            {
              "en": "Pull the stalk towards you to spray washer fluid.",
              "ar": "اسحبي الذراع نحوك لرش سائل الغسيل."
            }
          ],
          "tip": {
            "en": "**Never wipe a dry or dusty screen**: spray first, or you will scratch the glass.",
            "ar": "**لا تمسحي زجاجًا جافًا أو مغبرًا**: رشّي أولًا، وإلا خدشتِ الزجاج."
          },
          "lessons": [
            "L1",
            "L23"
          ]
        },
        {
          "id": "rear-wiper",
          "en": "Twist the end of the wiper stalk for the rear wiper.",
          "ar": "أديري طرف ذراع المسّاحات لتشغيل المسّاحة الخلفية.",
          "page": "3-28",
          "variant": "both",
          "title": {
            "en": "Rear wiper",
            "ar": "المسّاحة الخلفية"
          },
          "what": {
            "en": "Controlled by twisting the end of the wiper stalk.",
            "ar": "يُتحكم بها بإدارة طرف ذراع المسّاحات."
          },
          "does": {
            "en": "It clears the rear window so you can see behind.",
            "ar": "تنظّف الزجاج الخلفي لتري ما خلفك."
          },
          "how": [
            {
              "en": "Twist the end to ON or INT.",
              "ar": "أديري الطرف إلى ON أو INT."
            },
            {
              "en": "Twist past ON or OFF to the washer mark to spray.",
              "ar": "أديري بعد ON أو OFF إلى علامة الغسيل للرش."
            }
          ],
          "lessons": [
            "L23"
          ]
        },
        {
          "id": "horn",
          "en": "Press the centre pad of the steering wheel.",
          "ar": "اضغطي على وسط المقود.",
          "page": "3-29",
          "variant": "both",
          "title": {
            "en": "Horn",
            "ar": "البوق (الهرن)"
          },
          "what": {
            "en": "The padded centre of the steering wheel.",
            "ar": "الجزء الأوسط من المقود."
          },
          "does": {
            "en": "It warns others that you are there. It works with the car switched off too.",
            "ar": "ينبّه الآخرين إلى وجودك. ويعمل حتى والسيارة مطفأة."
          },
          "how": [
            {
              "en": "Press the pad firmly.",
              "ar": "اضغطي على الوسط بقوة."
            }
          ],
          "tip": {
            "en": "Use it to warn of danger, not to show anger.",
            "ar": "استخدميه للتحذير من خطر، لا للتعبير عن الغضب."
          },
          "lessons": [
            "L1",
            "L3"
          ]
        },
        {
          "id": "hazard",
          "en": "Red triangle button in the middle of the dash flashes all indicators.",
          "ar": "زر المثلث الأحمر وسط اللوحة يشغّل كل الإشارات معًا.",
          "page": "3-25",
          "variant": "both",
          "title": {
            "en": "Hazard warning lights",
            "ar": "الإشارات التحذيرية (الفلشر)"
          },
          "what": {
            "en": "The button with a red triangle in the middle of the dashboard.",
            "ar": "الزر الذي عليه مثلث أحمر في وسط لوحة القيادة."
          },
          "does": {
            "en": "It flashes **all your indicators together** to warn others that you are stopped in an emergency.",
            "ar": "يشغّل **كل الإشارات معًا** لتحذير الآخرين أنك متوقفة بسبب طارئ."
          },
          "how": [
            {
              "en": "Press the button once to switch on.",
              "ar": "اضغطي الزر مرة للتشغيل."
            },
            {
              "en": "Press it again to switch off.",
              "ar": "اضغطيه مرة أخرى للإيقاف."
            }
          ],
          "tip": {
            "en": "Leaving them on for long with the engine off drains the battery.",
            "ar": "تركها تعمل طويلًا والمحرك مطفأ يفرغ البطارية."
          },
          "lessons": [
            "L1",
            "L16",
            "L22"
          ]
        },
        {
          "id": "ignition-key",
          "en": "On cars with a key: LOCK, ACC, ON, START.",
          "ar": "في السيارات ذات المفتاح: LOCK، ACC، ON، START.",
          "page": "5-3",
          "variant": "both",
          "title": {
            "en": "Key ignition",
            "ar": "مفتاح التشغيل التقليدي"
          },
          "what": {
            "en": "A key slot by the steering wheel, only on cars without push-button start.",
            "ar": "فتحة مفتاح بجانب المقود، فقط في السيارات التي ليس فيها زر تشغيل."
          },
          "does": {
            "en": "Turning the key moves through LOCK (key comes out, steering locked), ACC (radio and accessories), ON (driving) and START (starts the engine).",
            "ar": "إدارة المفتاح تمر بالأوضاع: LOCK (يخرج المفتاح ويُقفل المقود)، ACC (الراديو والملحقات)، ON (للقيادة)، START (لتشغيل المحرك)."
          },
          "how": [
            {
              "en": "Turn to START and let go as soon as the engine runs.",
              "ar": "أديريه إلى START واتركيه فور دوران المحرك."
            },
            {
              "en": "Manual car: push the key in to turn it back to LOCK.",
              "ar": "في السيارة العادية (القير اليدوي): ادفعي المفتاح للداخل لإعادته إلى LOCK."
            },
            {
              "en": "AGS car: the lever must be in N to turn to LOCK.",
              "ar": "في سيارة AGS: يجب أن يكون الذراع على N لإعادته إلى LOCK."
            }
          ],
          "lessons": []
        },
        {
          "id": "push-start-modes",
          "en": "Start button: without the brake it cycles ACC and ON; with the brake it starts the engine.",
          "ar": "زر التشغيل: بدون الفرامل ينتقل بين ACC وON، ومع الفرامل يشغّل المحرك.",
          "page": "5-10",
          "variant": "both",
          "title": {
            "en": "Start button (keyless)",
            "ar": "زر التشغيل (بدون مفتاح)"
          },
          "what": {
            "en": "The engine START button by the steering wheel; the remote key just needs to be inside the car.",
            "ar": "زر تشغيل المحرك بجانب المقود، ويكفي أن يكون المفتاح داخل السيارة."
          },
          "does": {
            "en": "Pressed **without** your foot on the brake, it steps through OFF, ACC (radio) and ON without starting the engine. Pressed **with** the brake held down, it starts the engine.",
            "ar": "إذا ضغطتِه **دون** الضغط على الفرامل، ينتقل بين الإيقاف وACC (الراديو) وON دون تشغيل المحرك. وإذا ضغطتِه **مع** الضغط على الفرامل، يشغّل المحرك."
          },
          "tip": {
            "en": "If the engine doesn't start, check your foot is firmly on the brake.",
            "ar": "إذا لم يشتغل المحرك، تأكدي أن قدمك تضغط الفرامل جيدًا."
          },
          "lessons": [
            "L1"
          ]
        },
        {
          "id": "start-manual",
          "en": "Starting a manual Fronx: neutral, clutch and brake down, press start.",
          "ar": "تشغيل فرونكس اليدوي: وضع محايد، الكلتش والفرامل للأسفل، ثم زر التشغيل.",
          "page": "5-13",
          "variant": "manual",
          "title": {
            "en": "Starting a manual car",
            "ar": "تشغيل السيارة اليدوية"
          },
          "what": {
            "en": "The start routine for the 5-speed manual Fronx (not your car).",
            "ar": "طريقة التشغيل لفرونكس ذات القير اليدوي (ليست سيارتك)."
          },
          "does": {
            "en": "The engine will not start unless the clutch pedal is pressed.",
            "ar": "لن يشتغل المحرك إلا إذا كانت دواسة الكلتش مضغوطة."
          },
          "how": [
            {
              "en": "Check the handbrake is fully on.",
              "ar": "تأكدي أن فرامل اليد مرفوعة بالكامل."
            },
            {
              "en": "Switch off headlights and A/C.",
              "ar": "أطفئي الأنوار والمكيّف."
            },
            {
              "en": "Put the gear lever in N (neutral).",
              "ar": "ضعي ذراع القير على N (محايد)."
            },
            {
              "en": "Hold the clutch and brake pedals fully down.",
              "ar": "اضغطي الكلتش والفرامل حتى النهاية."
            },
            {
              "en": "Foot off the accelerator, press the start button.",
              "ar": "ارفعي قدمك عن البنزين واضغطي زر التشغيل."
            }
          ],
          "lessons": [],
          "steps": [
            {
              "en": "Check the parking brake is fully set.",
              "ar": "تأكد من شدّ فرامل اليد بالكامل."
            },
            {
              "en": "Turn off loads such as headlights and A/C.",
              "ar": "أطفئ الأحمال مثل الأنوار الأمامية والمكيف."
            },
            {
              "en": "Shift to N (neutral) and hold the clutch and brake pedals fully down.",
              "ar": "ضع الناقل على N (محايد) واضغط دواستي القابض (الكلتش) والفرامل حتى النهاية."
            },
            {
              "en": "Foot off the accelerator: press the engine switch (or turn the key to START and release once running). The engine will not start unless the clutch is pressed.",
              "ar": "دون الضغط على دواسة الوقود: اضغط زر التشغيل (أو أدر المفتاح إلى START وأفلته فور الدوران). لن يعمل المحرك ما لم تضغط القابض."
            }
          ]
        },
        {
          "id": "start-ags",
          "en": "Starting an AGS Fronx: lever in N, brake down, press start.",
          "ar": "تشغيل فرونكس AGS: الذراع على N، الفرامل للأسفل، ثم زر التشغيل.",
          "page": "5-13",
          "variant": "auto",
          "autoType": "AGS",
          "title": {
            "en": "Starting an AGS car",
            "ar": "تشغيل سيارة AGS"
          },
          "what": {
            "en": "The start routine for the AGS (Auto Gear Shift) Fronx (not your car).",
            "ar": "طريقة التشغيل لفرونكس بقير AGS (ليست سيارتك)."
          },
          "does": {
            "en": "The AGS car starts only in N with the brake pressed.",
            "ar": "سيارة AGS لا تشتغل إلا على N مع الضغط على الفرامل."
          },
          "how": [
            {
              "en": "Check the handbrake is fully on; switch off headlights and A/C.",
              "ar": "تأكدي أن فرامل اليد مرفوعة، وأطفئي الأنوار والمكيّف."
            },
            {
              "en": "Put the lever in N and hold the brake down.",
              "ar": "ضعي الذراع على N واضغطي الفرامل."
            },
            {
              "en": "Foot off the accelerator, press the start button.",
              "ar": "ارفعي قدمك عن البنزين واضغطي زر التشغيل."
            },
            {
              "en": "If it won't start, check the lever is really in N.",
              "ar": "إذا لم يشتغل، تأكدي أن الذراع فعلًا على N."
            }
          ],
          "lessons": [],
          "steps": [
            {
              "en": "Check the parking brake is fully set; switch off headlights and A/C.",
              "ar": "تأكد من شدّ فرامل اليد، وأطفئ الأنوار الأمامية والمكيف."
            },
            {
              "en": "Put the lever in N and hold the brake pedal down.",
              "ar": "ضع الذراع على N واضغط دواسة الفرامل باستمرار."
            },
            {
              "en": "Foot off the accelerator: press the engine switch (or turn key to START). If it won't start, re-check the lever is in N.",
              "ar": "دون الضغط على دواسة الوقود: اضغط زر التشغيل (أو أدر المفتاح إلى START). إذا لم يعمل، تأكد أن الذراع على N."
            }
          ]
        },
        {
          "id": "start-at",
          "en": "Starting your automatic: P, brake held down, press START.",
          "ar": "تشغيل سيارتك الأوتوماتيك: P، الفرامل مضغوطة، ثم START.",
          "page": "5-14",
          "variant": "auto",
          "autoType": "AT",
          "title": {
            "en": "Starting your car",
            "ar": "تشغيل سيارتك"
          },
          "what": {
            "en": "The start routine for your 6-speed automatic Fronx.",
            "ar": "طريقة تشغيل فرونكس الأوتوماتيك ذات ٦ سرعات (سيارتك)."
          },
          "does": {
            "en": "The engine starts only with the lever in **P** and your foot pressing the brake. This stops the car from jumping forward.",
            "ar": "المحرك لا يشتغل إلا والذراع على **P** وقدمك تضغط الفرامل. هذا يمنع السيارة من الاندفاع للأمام."
          },
          "how": [
            {
              "en": "Check the handbrake is fully on.",
              "ar": "تأكدي أن فرامل اليد مرفوعة بالكامل."
            },
            {
              "en": "Switch off headlights and A/C.",
              "ar": "أطفئي الأنوار والمكيّف."
            },
            {
              "en": "Check the gear lever is in **P**.",
              "ar": "تأكدي أن ذراع القير على **P**."
            },
            {
              "en": "Press and hold the brake pedal.",
              "ar": "اضغطي دواسة الفرامل واستمري."
            },
            {
              "en": "Foot off the accelerator, press START firmly once.",
              "ar": "قدمك بعيدة عن البنزين، اضغطي START مرة واحدة بثبات."
            },
            {
              "en": "Check the engine is running and no red light stays on.",
              "ar": "تأكدي أن المحرك يعمل وأنه لا يبقى ضوء أحمر مضاء."
            }
          ],
          "lessons": [
            "L1",
            "L21"
          ],
          "steps": [
            {
              "en": "Check the parking brake is fully set; switch off headlights and A/C.",
              "ar": "تأكد من شدّ فرامل اليد، وأطفئ الأنوار الأمامية والمكيف."
            },
            {
              "en": "Check the lever is in P and keep the brake pedal fully pressed.",
              "ar": "تأكد أن الذراع على P واضغط دواسة الفرامل حتى النهاية."
            },
            {
              "en": "Foot off the accelerator: press the engine switch firmly and confirm the engine is running.",
              "ar": "دون الضغط على دواسة الوقود: اضغط زر التشغيل بثبات وتأكد أن المحرك يعمل."
            }
          ]
        },
        {
          "id": "start-limits",
          "en": "If it won't start, switch off and wait ==30== seconds; never push- or tow-start.",
          "ar": "إذا لم يشتغل، أطفئي وانتظري ==30== ثانية، ولا تشغّليها بالدفع أو السحب أبدًا.",
          "page": "5-14",
          "variant": "both",
          "title": {
            "en": "If the engine won't start",
            "ar": "إذا لم يشتغل المحرك"
          },
          "what": {
            "en": "Rules for repeated start attempts.",
            "ar": "قواعد تكرار محاولة التشغيل."
          },
          "does": {
            "en": "Trying again and again too quickly can damage the starter motor (the small motor that turns the engine to start it).",
            "ar": "تكرار المحاولة بسرعة قد يتلف محرك بدء التشغيل (المحرك الصغير الذي يدير المحرك ليبدأ)."
          },
          "how": [
            {
              "en": "Switch back to OFF.",
              "ar": "أعيدي الوضع إلى الإيقاف."
            },
            {
              "en": "Wait at least ==30== seconds before trying again.",
              "ar": "انتظري ==30== ثانية على الأقل قبل المحاولة مرة أخرى."
            },
            {
              "en": "With a key, hold START no longer than ==12== seconds.",
              "ar": "مع المفتاح، لا تمسكي START أكثر من ==12== ثانية."
            }
          ],
          "tip": {
            "en": "**Never push-start or tow-start** this car.",
            "ar": "**لا تشغّلي هذه السيارة بالدفع أو بالسحب أبدًا.**"
          },
          "lessons": [
            "L22"
          ]
        },
        {
          "id": "stop-engine",
          "en": "Switch off only after a full stop; emergency off: press START 3 times or hold 2 s.",
          "ar": "أطفئي المحرك فقط بعد التوقف التام، وللطوارئ: اضغطي START ٣ مرات أو امسكيه ثانيتين.",
          "page": "5-15",
          "variant": "both",
          "title": {
            "en": "Switching the engine off",
            "ar": "إطفاء المحرك"
          },
          "what": {
            "en": "Done with the same START button.",
            "ar": "يتم بنفس زر START."
          },
          "does": {
            "en": "Switch off only when the car has **fully stopped**. If you ever must stop the engine while moving, it is possible, but steering and brakes become much heavier.",
            "ar": "أطفئي فقط بعد أن **تتوقف السيارة تمامًا**. إذا اضطررتِ لإطفاء المحرك أثناء السير فهذا ممكن، لكن المقود والفرامل يصبحان أثقل كثيرًا."
          },
          "how": [
            {
              "en": "Stop completely, foot on the brake.",
              "ar": "توقفي تمامًا وقدمك على الفرامل."
            },
            {
              "en": "Shift to P and pull the handbrake up fully.",
              "ar": "انقلي إلى P وارفعي فرامل اليد بالكامل."
            },
            {
              "en": "Press START once to switch off.",
              "ar": "اضغطي START مرة واحدة للإطفاء."
            },
            {
              "en": "Emergency only, while moving: press START ==3== or more times quickly, or hold it ==2== seconds.",
              "ar": "في الطوارئ فقط أثناء السير: اضغطي START ==3== مرات أو أكثر بسرعة، أو امسكيه ==2== ثانية."
            }
          ],
          "lessons": [
            "L6",
            "L21"
          ]
        },
        {
          "id": "pedals",
          "en": "Your automatic has two pedals: brake (left) and accelerator (right), right foot only.",
          "ar": "سيارتك الأوتوماتيك فيها دواستان: الفرامل (يسار) والبنزين (يمين)، بالقدم اليمنى فقط.",
          "page": "5-8",
          "variant": "both",
          "title": {
            "en": "Pedals",
            "ar": "الدواسات"
          },
          "what": {
            "en": "The pedals in the footwell. Your automatic has two: brake and accelerator. Manual cars also have a clutch on the far left.",
            "ar": "الدواسات أسفل المقود. سيارتك الأوتوماتيك فيها اثنتان: الفرامل والبنزين. السيارات اليدوية فيها أيضًا كلتش في أقصى اليسار."
          },
          "does": {
            "en": "The brake slows and stops the car; the accelerator (gas) makes it go. Use your **right foot only** for both.",
            "ar": "الفرامل تبطئ السيارة وتوقفها، ودواسة البنزين تجعلها تسير. استخدمي **القدم اليمنى فقط** للاثنتين."
          },
          "tip": {
            "en": "Don't rest your foot on the brake. Pressing brake and gas together can cut engine power.",
            "ar": "لا تُريحي قدمك على الفرامل. الضغط على الفرامل والبنزين معًا قد يقطع قوة المحرك."
          },
          "lessons": [
            "L1",
            "L2",
            "L4",
            "L9"
          ]
        },
        {
          "id": "parking-brake",
          "en": "Hand lever between the seats: pull up fully to set; brake, button, lower to release.",
          "ar": "ذراع بين المقعدين: ارفعيه بالكامل للتثبيت، وللتحرير: الفرامل ثم الزر ثم أنزليه.",
          "page": "5-17",
          "variant": "both",
          "fig": "figs/parking_brake.webp",
          "title": {
            "en": "Parking brake (handbrake)",
            "ar": "فرامل اليد (الهاند بريك)"
          },
          "what": {
            "en": "A hand lever between the front seats.",
            "ar": "ذراع يدوي بين المقعدين الأماميين."
          },
          "does": {
            "en": "It holds the car still when parked, even on a slope. A buzzer sounds if you drive with it on.",
            "ar": "يثبّت السيارة وهي واقفة، حتى على المنحدر. يُصدر جرسًا إذا قدتِ وهو مرفوع."
          },
          "how": [
            {
              "en": "To set: press the brake pedal and pull the lever **fully up**.",
              "ar": "للتثبيت: اضغطي دواسة الفرامل وارفعي الذراع **حتى النهاية**."
            },
            {
              "en": "To release: press the brake pedal.",
              "ar": "للتحرير: اضغطي دواسة الفرامل."
            },
            {
              "en": "Lift the lever slightly and press the button on its end.",
              "ar": "ارفعي الذراع قليلًا واضغطي الزر في طرفه."
            },
            {
              "en": "Lower it all the way down.",
              "ar": "أنزليه حتى النهاية."
            }
          ],
          "tip": {
            "en": "Repeating beeps as you drive off mean the handbrake is still on.",
            "ar": "إذا سمعتِ تنبيهات متكررة وأنت تنطلقين، فالفرامل اليدوية ما زالت مرفوعة."
          },
          "lessons": [
            "L1",
            "L2",
            "L6",
            "L9",
            "L21",
            "L22"
          ]
        },
        {
          "id": "parking-gear",
          "en": "When parking: handbrake fully on, and in P on your automatic.",
          "ar": "عند الوقوف: فرامل اليد مرفوعة بالكامل، والقير على P في سيارتك.",
          "page": "5-18",
          "variant": "both",
          "title": {
            "en": "Leaving the car parked",
            "ar": "ترك السيارة متوقفة"
          },
          "what": {
            "en": "Which gear to leave the car in when you park.",
            "ar": "على أي غيار تتركين السيارة عند الوقوف."
          },
          "does": {
            "en": "Handbrake plus a gear stops the car rolling away. Your automatic: **P**. Manual: 1st or R. AGS: D, M or R with the display showing 1 or R.",
            "ar": "فرامل اليد مع الغيار يمنعان السيارة من التدحرج. سيارتك الأوتوماتيك: **P**. اليدوي: الأول أو R. نظام AGS: D أو M أو R والشاشة تُظهر 1 أو R."
          },
          "how": [
            {
              "en": "Stop fully with your foot on the brake.",
              "ar": "توقفي تمامًا وقدمك على الفرامل."
            },
            {
              "en": "Shift to P.",
              "ar": "انقلي إلى P."
            },
            {
              "en": "Pull the handbrake up fully, every time, even in P.",
              "ar": "ارفعي فرامل اليد بالكامل كل مرة، حتى على P."
            }
          ],
          "lessons": [
            "L6",
            "L21"
          ]
        },
        {
          "id": "front-defrost",
          "en": "Press the windscreen demist button to clear a misted windscreen.",
          "ar": "اضغطي زر إزالة الضباب لتنظيف الزجاج الأمامي من البخار.",
          "page": "7-23",
          "variant": "both",
          "title": {
            "en": "Windscreen demister",
            "ar": "مزيل ضباب الزجاج الأمامي"
          },
          "what": {
            "en": "A button on the climate (A/C) panel with a windscreen symbol.",
            "ar": "زر على لوحة المكيّف عليه رمز الزجاج الأمامي."
          },
          "does": {
            "en": "It blows air onto the windscreen and side windows to clear mist. Its small light comes on when it is working.",
            "ar": "يوجّه الهواء إلى الزجاج الأمامي والنوافذ الجانبية لإزالة البخار. يضيء ضوؤه الصغير عندما يعمل."
          },
          "how": [
            {
              "en": "Press the button; its light comes on.",
              "ar": "اضغطي الزر، فيضيء ضوؤه."
            },
            {
              "en": "Press again to switch off when clear.",
              "ar": "اضغطيه مرة أخرى للإيقاف بعد أن يصفو الزجاج."
            }
          ],
          "lessons": [
            "L23"
          ]
        },
        {
          "id": "rear-defogger",
          "en": "Heated rear window: works with the engine on, switches off after ==15== minutes.",
          "ar": "تسخين الزجاج الخلفي: يعمل والمحرك يعمل، وينطفئ بعد ==15== دقيقة.",
          "page": "3-29",
          "variant": "both",
          "title": {
            "en": "Rear window heater",
            "ar": "مسخّن الزجاج الخلفي"
          },
          "what": {
            "en": "A button with a rear-window symbol on the climate panel.",
            "ar": "زر عليه رمز الزجاج الخلفي على لوحة المكيّف."
          },
          "does": {
            "en": "It warms the thin lines in the rear window to clear mist. It switches itself off after ==15== minutes.",
            "ar": "يسخّن الخطوط الرفيعة في الزجاج الخلفي لإزالة البخار. وينطفئ وحده بعد ==15== دقيقة."
          },
          "how": [
            {
              "en": "With the engine running, press the button.",
              "ar": "والمحرك يعمل، اضغطي الزر."
            },
            {
              "en": "Turn it off once the window is clear.",
              "ar": "أطفئيه بعد أن يصفو الزجاج."
            }
          ],
          "lessons": [
            "L23"
          ]
        },
        {
          "id": "cruise",
          "en": "Cruise control keeps a set speed; not needed while learning.",
          "ar": "مثبّت السرعة يحافظ على سرعة محددة، ولا تحتاجينه أثناء التعلم.",
          "page": "5-64",
          "variant": "both",
          "title": {
            "en": "Cruise control",
            "ar": "مثبّت السرعة"
          },
          "what": {
            "en": "Buttons on the steering wheel (if fitted).",
            "ar": "أزرار على المقود (إن وُجدت)."
          },
          "does": {
            "en": "It holds a speed you choose without your foot on the gas. It does **not** brake for the car in front. A light shows when it is on, and SET lights when a speed is set.",
            "ar": "يحافظ على سرعة تختارينها دون قدمك على البنزين. لكنه **لا** يفرمل للسيارة التي أمامك. يظهر ضوء عند تشغيله، ويضيء SET عند تحديد السرعة."
          },
          "tip": {
            "en": "You don't need it while learning.",
            "ar": "لا تحتاجينه أثناء التعلم."
          },
          "lessons": [
            "L17"
          ]
        }
      ]
    },
    {
      "id": "gearbox",
      "en": "Gearbox",
      "ar": "ناقل الحركة (القير)",
      "variant": "both",
      "page": "5-21",
      "items": [
        {
          "id": "mt-pattern",
          "en": "Manual gear pattern: 1-3-5 top, 2-4-R bottom, neutral in the middle.",
          "ar": "نمط القير اليدوي: 1-3-5 في الأعلى، 2-4-R في الأسفل، والمحايد في الوسط.",
          "page": "5-21",
          "variant": "manual",
          "fig": "figs/manual_shift_pattern.webp",
          "title": {
            "en": "Manual gear pattern",
            "ar": "نمط القير اليدوي"
          },
          "what": {
            "en": "The layout of the 5-speed manual gear lever (not your car).",
            "ar": "ترتيب ذراع القير اليدوي ذي ٥ سرعات (ليست سيارتك)."
          },
          "does": {
            "en": "Gears 1, 3 and 5 are across the top, 2, 4 and R (reverse) across the bottom, and neutral is in the middle.",
            "ar": "الغيارات 1 و3 و5 في الأعلى، و2 و4 وR (الخلفي) في الأسفل، والمحايد في الوسط."
          },
          "lessons": []
        },
        {
          "id": "mt-start-off",
          "en": "Manual: clutch down, 1st, handbrake off, ease the clutch up and add gas.",
          "ar": "يدوي: الكلتش للأسفل، الغيار الأول، تحرير فرامل اليد، ارفعي الكلتش ببطء وأضيفي بنزين.",
          "page": "5-21",
          "variant": "manual",
          "title": {
            "en": "Moving off (manual)",
            "ar": "الانطلاق (يدوي)"
          },
          "what": {
            "en": "How to pull away in a manual car.",
            "ar": "كيف تنطلقين بسيارة يدوية."
          },
          "does": {
            "en": "You balance the clutch and the gas so the car moves smoothly without stalling (the engine cutting out).",
            "ar": "توازنين بين الكلتش والبنزين لتتحرك السيارة بسلاسة دون أن ينطفئ المحرك."
          },
          "how": [
            {
              "en": "Press the clutch to the floor and select 1st.",
              "ar": "اضغطي الكلتش حتى النهاية واختاري الغيار الأول."
            },
            {
              "en": "Release the handbrake.",
              "ar": "حرّري فرامل اليد."
            },
            {
              "en": "Slowly lift the clutch until the engine sound changes.",
              "ar": "ارفعي الكلتش ببطء حتى يتغير صوت المحرك."
            },
            {
              "en": "Gently press the gas while still easing the clutch up.",
              "ar": "اضغطي البنزين بلطف وأنت ما زلت ترفعين الكلتش ببطء."
            }
          ],
          "lessons": [
            "L2",
            "L9"
          ],
          "steps": [
            {
              "en": "Press the clutch fully to the floor and select 1st.",
              "ar": "اضغط القابض حتى الأرض واختر السرعة الأولى."
            },
            {
              "en": "Release the parking brake.",
              "ar": "حرّر فرامل اليد."
            },
            {
              "en": "Gradually release the clutch; when the engine sound changes, slowly press the accelerator while still easing the clutch up.",
              "ar": "ارفع القابض تدريجياً، وعندما يتغير صوت المحرك اضغط الوقود ببطء مع الاستمرار في رفع القابض."
            }
          ]
        },
        {
          "id": "mt-shifting",
          "en": "Clutch fully down for every gear change; keep out of the red zone.",
          "ar": "اضغطي الكلتش بالكامل عند كل تغيير غيار، وابقي بعيدة عن المنطقة الحمراء.",
          "page": "5-22",
          "variant": "manual",
          "title": {
            "en": "Changing gear (manual)",
            "ar": "تغيير الغيار (يدوي)"
          },
          "what": {
            "en": "How to change gear in a manual car.",
            "ar": "كيف تغيّرين الغيار في سيارة يدوية."
          },
          "does": {
            "en": "Always press the clutch fully first. Keep the rev counter out of the red zone. Change down before long, steep hills so the engine helps slow you (engine braking).",
            "ar": "اضغطي الكلتش بالكامل أولًا دائمًا. أبقي عدّاد الدوران بعيدًا عن المنطقة الحمراء. انزلي غيارًا قبل المنحدرات الطويلة الحادة ليساعد المحرك على إبطائك."
          },
          "tip": {
            "en": "Don't change down too fast: 2→1 only below ==20== km/h, 3→2 below ==80==, 4→3 below ==125==.",
            "ar": "لا تنزلي الغيار وأنت سريعة: من 2 إلى 1 تحت ==20== كم/س، ومن 3 إلى 2 تحت ==80==، ومن 4 إلى 3 تحت ==125==."
          },
          "lessons": []
        },
        {
          "id": "mt-reverse",
          "en": "Manual reverse: stop, neutral, clutch down, select R.",
          "ar": "الخلفي في اليدوي: توقفي، محايد، الكلتش للأسفل، ثم R.",
          "page": "5-22",
          "variant": "manual",
          "title": {
            "en": "Reverse gear (manual)",
            "ar": "الغيار الخلفي (يدوي)"
          },
          "what": {
            "en": "How to select reverse in a manual car.",
            "ar": "كيف تختارين الخلفي في سيارة يدوية."
          },
          "does": {
            "en": "Reverse only goes in when the car is completely stopped.",
            "ar": "الخلفي لا يدخل إلا والسيارة متوقفة تمامًا."
          },
          "how": [
            {
              "en": "Stop completely.",
              "ar": "توقفي تمامًا."
            },
            {
              "en": "Put the lever in N and press the clutch fully.",
              "ar": "ضعي الذراع على N واضغطي الكلتش بالكامل."
            },
            {
              "en": "Select R.",
              "ar": "اختاري R."
            },
            {
              "en": "If it's hard to engage: back to N, lift the clutch once, press again, select R.",
              "ar": "إذا صعب إدخاله: ارجعي إلى N، ارفعي الكلتش مرة، اضغطيه مجددًا، واختاري R."
            }
          ],
          "lessons": [
            "L4"
          ]
        },
        {
          "id": "mt-clutch-care",
          "en": "Don't rest on the clutch or hold the car on a slope with it.",
          "ar": "لا تُريحي قدمك على الكلتش ولا تثبّتي السيارة به على المنحدر.",
          "page": "5-22",
          "variant": "manual",
          "title": {
            "en": "Looking after the clutch",
            "ar": "العناية بالكلتش"
          },
          "what": {
            "en": "Habits that make a manual clutch last.",
            "ar": "عادات تطيل عمر الكلتش في السيارة اليدوية."
          },
          "does": {
            "en": "Misusing the clutch wears it out early.",
            "ar": "سوء استخدام الكلتش يُتلفه مبكرًا."
          },
          "how": [
            {
              "en": "Don't rest your foot on the clutch.",
              "ar": "لا تُريحي قدمك على الكلتش."
            },
            {
              "en": "Don't hold the car on a slope with the clutch; use the brake.",
              "ar": "لا تثبّتي السيارة على المنحدر بالكلتش، استخدمي الفرامل."
            },
            {
              "en": "Don't race the engine when moving off.",
              "ar": "لا ترفعي دوران المحرك كثيرًا عند الانطلاق."
            }
          ],
          "lessons": []
        },
        {
          "id": "ags-overview",
          "en": "AGS: an automatic-shifting manual with R, N, D and M, and no P.",
          "ar": "AGS: قير يدوي يبدّل تلقائيًا، فيه R وN وD وM، وليس فيه P.",
          "page": "5-27",
          "variant": "auto",
          "autoType": "AGS",
          "fig": "figs/ags_selector.webp",
          "title": {
            "en": "AGS gearbox",
            "ar": "قير AGS"
          },
          "what": {
            "en": "The Auto Gear Shift gearbox on some Fronx cars (not yours).",
            "ar": "قير التبديل الآلي AGS في بعض سيارات فرونكس (ليست سيارتك)."
          },
          "does": {
            "en": "It is a 5-speed manual gearbox that works the clutch for you. Positions: R, N, D and M (+/–). There is **no P (park)**.",
            "ar": "هو قير يدوي بخمس سرعات يشغّل الكلتش عنك. أوضاعه: R وN وD وM (+/–). **لا يوجد P (وضع الوقوف)**."
          },
          "lessons": []
        },
        {
          "id": "ags-drive",
          "en": "AGS: start in N, brake on, select D, release handbrake and brake, gentle gas.",
          "ar": "AGS: شغّلي على N، الفرامل مضغوطة، اختاري D، حرّري فرامل اليد والفرامل، ثم بنزين خفيف.",
          "page": "5-28",
          "variant": "auto",
          "autoType": "AGS",
          "title": {
            "en": "Driving off (AGS)",
            "ar": "الانطلاق (AGS)"
          },
          "what": {
            "en": "How to pull away in an AGS car.",
            "ar": "كيف تنطلقين بسيارة AGS."
          },
          "does": {
            "en": "In D, M or R the car creeps forward slowly by itself, even without gas.",
            "ar": "في D أو M أو R تزحف السيارة ببطء وحدها، حتى دون بنزين."
          },
          "how": [
            {
              "en": "Start in N with the brake pressed.",
              "ar": "شغّلي على N والفرامل مضغوطة."
            },
            {
              "en": "Keep braking and select D; the display shows 1.",
              "ar": "استمري بالضغط على الفرامل واختاري D، فتُظهر الشاشة 1."
            },
            {
              "en": "Release the handbrake, then the brake.",
              "ar": "حرّري فرامل اليد، ثم الفرامل."
            },
            {
              "en": "Press the gas gently.",
              "ar": "اضغطي البنزين بلطف."
            }
          ],
          "lessons": []
        },
        {
          "id": "ags-cautions",
          "en": "AGS: never N while driving; brake when stopped; don't hold on a hill with gas.",
          "ar": "AGS: لا تضعي N أثناء السير، اضغطي الفرامل عند التوقف، ولا تثبّتي على المنحدر بالبنزين.",
          "page": "5-29",
          "variant": "auto",
          "autoType": "AGS",
          "title": {
            "en": "AGS do's and don'ts",
            "ar": "تنبيهات قير AGS"
          },
          "what": {
            "en": "Rules for driving an AGS car safely.",
            "ar": "قواعد القيادة الآمنة بسيارة AGS."
          },
          "does": {
            "en": "Breaking these rules can make the car roll or damage the clutch.",
            "ar": "مخالفة هذه القواعد قد تجعل السيارة تتدحرج أو تتلف الكلتش."
          },
          "how": [
            {
              "en": "Never select N while driving.",
              "ar": "لا تختاري N أثناء السير."
            },
            {
              "en": "Keep your foot on the brake when stopped.",
              "ar": "أبقي قدمك على الفرامل عند التوقف."
            },
            {
              "en": "Don't hold the car on a hill with the gas or creep; use the brake.",
              "ar": "لا تثبّتي السيارة على المنحدر بالبنزين أو بالزحف، استخدمي الفرامل."
            },
            {
              "en": "Don't press brake and gas together.",
              "ar": "لا تضغطي الفرامل والبنزين معًا."
            },
            {
              "en": "R only engages below about ==3== km/h.",
              "ar": "الخلفي لا يدخل إلا تحت ==3== كم/س تقريبًا."
            }
          ],
          "lessons": []
        },
        {
          "id": "ags-park",
          "en": "AGS parking: handbrake on, R downhill or D/M in 1st uphill or flat, then off.",
          "ar": "وقوف AGS: فرامل اليد، R في النزول أو D/M على الأول في الصعود والمستوي، ثم أطفئي.",
          "page": "5-35",
          "variant": "auto",
          "autoType": "AGS",
          "title": {
            "en": "Parking (AGS)",
            "ar": "الوقوف (AGS)"
          },
          "what": {
            "en": "How to leave an AGS car parked, since it has no P.",
            "ar": "كيف تتركين سيارة AGS متوقفة، لأنها بدون P."
          },
          "does": {
            "en": "Leaving it in a gear plus the handbrake stops it rolling.",
            "ar": "تركها على غيار مع فرامل اليد يمنعها من التدحرج."
          },
          "how": [
            {
              "en": "Set the handbrake.",
              "ar": "ارفعي فرامل اليد."
            },
            {
              "en": "Brake pressed: select R facing downhill, or D/M in 1st facing uphill or on flat ground.",
              "ar": "مع الضغط على الفرامل: اختاري R إذا كانت مقدمة السيارة للأسفل، أو D/M على الأول للأعلى أو على أرض مستوية."
            },
            {
              "en": "Check the display, then stop the engine.",
              "ar": "تأكدي من الشاشة، ثم أطفئي المحرك."
            },
            {
              "en": "On slopes, also use wheel chocks.",
              "ar": "على المنحدرات، استخدمي أيضًا مصدّات العجلات."
            }
          ],
          "lessons": []
        },
        {
          "id": "at-positions",
          "en": "Your gear lever: P park, R reverse, N neutral, D drive, M manual with paddles.",
          "ar": "ذراع القير في سيارتك: P وقوف، R خلفي، N محايد، D قيادة، M يدوي بالمجاديف.",
          "page": "5-23",
          "variant": "auto",
          "autoType": "AT",
          "fig": "figs/auto_selector.webp",
          "title": {
            "en": "Gear lever positions",
            "ar": "أوضاع ذراع القير"
          },
          "what": {
            "en": "The gear lever between the front seats of your 6-speed automatic.",
            "ar": "ذراع القير بين المقعدين الأماميين في سيارتك الأوتوماتيك ذات ٦ سرعات."
          },
          "does": {
            "en": "**P** park (and for starting; only when stopped). **R** reverse (only when stopped). **N** neutral. **D** normal driving. **M** you choose gears with the paddles behind the wheel: right is +, left is –.",
            "ar": "**P** للوقوف وللتشغيل (فقط والسيارة متوقفة). **R** للرجوع للخلف (فقط والسيارة متوقفة). **N** محايد. **D** للقيادة العادية. **M** تختارين الغيار بالمجاديف خلف المقود: اليمين +، واليسار –."
          },
          "tip": {
            "en": "In D the car creeps forward when you lift off the brake. Use that creep to move off gently.",
            "ar": "في وضع D تزحف السيارة للأمام عند رفع قدمك عن الفرامل. استفيدي من هذا الزحف لتنطلقي بهدوء."
          },
          "lessons": [
            "L2",
            "L4",
            "L8",
            "L9"
          ]
        },
        {
          "id": "at-shift-lock",
          "en": "To leave P: ignition ON and brake pressed; some moves need the knob button.",
          "ar": "للخروج من P: التشغيل على ON والفرامل مضغوطة، وبعض التحويلات تحتاج زر المقبض.",
          "page": "5-23",
          "variant": "auto",
          "autoType": "AT",
          "title": {
            "en": "Gear lever lock (button)",
            "ar": "قفل ذراع القير (الزر)"
          },
          "what": {
            "en": "A safety lock and a button on the gear knob.",
            "ar": "قفل أمان وزر على مقبض القير."
          },
          "does": {
            "en": "The lever can't leave P unless the ignition is ON and you press the brake. This stops the car being put in gear by accident.",
            "ar": "لا يخرج الذراع من P إلا والتشغيل على ON وأنت تضغطين الفرامل. هذا يمنع إدخال الغيار بالخطأ."
          },
          "how": [
            {
              "en": "Always press the brake before moving out of P or N.",
              "ar": "اضغطي الفرامل دائمًا قبل الخروج من P أو N."
            },
            {
              "en": "Press the knob button for P→R, N→R, R→P and D→M.",
              "ar": "اضغطي زر المقبض عند التحويل من P إلى R، ومن N إلى R، ومن R إلى P، ومن D إلى M."
            },
            {
              "en": "Other moves need no button.",
              "ar": "التحويلات الأخرى لا تحتاج الزر."
            }
          ],
          "lessons": [
            "L2"
          ]
        },
        {
          "id": "at-cautions",
          "en": "Never R while moving forward; don't hold on a hill with the gas.",
          "ar": "لا تختاري R والسيارة تتقدم، ولا تثبّتيها على المنحدر بالبنزين.",
          "page": "5-24",
          "variant": "auto",
          "autoType": "AT",
          "title": {
            "en": "Automatic do's and don'ts",
            "ar": "تنبيهات القير الأوتوماتيك"
          },
          "what": {
            "en": "Rules that protect your automatic gearbox.",
            "ar": "قواعد تحمي قير سيارتك الأوتوماتيك."
          },
          "does": {
            "en": "Breaking them can damage the gearbox or make the car jump.",
            "ar": "مخالفتها قد تتلف القير أو تجعل السيارة تندفع."
          },
          "how": [
            {
              "en": "Never select R while moving forward; stop fully first.",
              "ar": "لا تختاري R والسيارة تتقدم، توقفي تمامًا أولًا."
            },
            {
              "en": "Don't shift out of P or N with the engine revving.",
              "ar": "لا تحوّلي من P أو N والمحرك مرتفع الدوران."
            },
            {
              "en": "Don't hold the car on a hill with the gas; use the brake.",
              "ar": "لا تثبّتي السيارة على المنحدر بالبنزين، استخدمي الفرامل."
            }
          ],
          "lessons": [
            "L4",
            "L8",
            "L9"
          ]
        },
        {
          "id": "at-park-release",
          "en": "Lever stuck in P with a flat battery: emergency release button under a small cover.",
          "ar": "الذراع عالق على P والبطارية فارغة: زر تحرير طارئ تحت غطاء صغير.",
          "page": "5-26",
          "variant": "auto",
          "autoType": "AT",
          "title": {
            "en": "Lever stuck in P",
            "ar": "الذراع عالق على P"
          },
          "what": {
            "en": "An emergency release under a small cover beside the gear lever.",
            "ar": "زر تحرير طارئ تحت غطاء صغير بجانب ذراع القير."
          },
          "does": {
            "en": "If the battery is flat or there is an electrical fault, it lets you move the lever out of P. **Emergency use only.**",
            "ar": "إذا كانت البطارية فارغة أو هناك عطل كهربائي، يسمح لك بإخراج الذراع من P. **للطوارئ فقط.**"
          },
          "how": [
            {
              "en": "Set the handbrake and switch the engine off.",
              "ar": "ارفعي فرامل اليد وأطفئي المحرك."
            },
            {
              "en": "Switch to ACC or ON.",
              "ar": "انقلي إلى ACC أو ON."
            },
            {
              "en": "Remove the small cover beside the lever.",
              "ar": "انزعي الغطاء الصغير بجانب الذراع."
            },
            {
              "en": "Press the release inside with the key while moving the lever.",
              "ar": "اضغطي زر التحرير في الداخل بالمفتاح وأنت تحرّكين الذراع."
            }
          ],
          "lessons": []
        },
        {
          "id": "hill-hold",
          "en": "Hill hold keeps the brakes on about ==2== seconds on an uphill start.",
          "ar": "مساعد صعود التل يُبقي الفرامل نحو ==2== ثانية عند الانطلاق صعودًا.",
          "page": "5-109",
          "variant": "both",
          "title": {
            "en": "Hill hold",
            "ar": "مساعد الانطلاق على المرتفعات"
          },
          "what": {
            "en": "A helper built into the brakes; nothing to press.",
            "ar": "مساعد مدمج في الفرامل، لا تحتاجين ضغط أي زر."
          },
          "does": {
            "en": "On an uphill start it keeps the brakes on for about ==2== seconds while you move your foot from brake to gas, so the car doesn't roll back. It works with a gear selected, the handbrake off and the brake pressed firmly.",
            "ar": "عند الانطلاق صعودًا يُبقي الفرامل نحو ==2== ثانية وأنت تنقلين قدمك من الفرامل إلى البنزين، فلا ترجع السيارة للخلف. يعمل والغيار مختار، وفرامل اليد محررة، والفرامل مضغوطة جيدًا."
          },
          "tip": {
            "en": "It only lasts a moment: press the gas promptly.",
            "ar": "يعمل لحظة فقط: اضغطي البنزين دون تأخير."
          },
          "lessons": [
            "L9"
          ]
        },
        {
          "id": "gearshift-indicator",
          "en": "An arrow on the display suggests the best gear for saving fuel.",
          "ar": "سهم على الشاشة يقترح أفضل غيار لتوفير الوقود.",
          "page": "5-36",
          "variant": "both",
          "title": {
            "en": "Gear suggestion arrow",
            "ar": "سهم اقتراح الغيار"
          },
          "what": {
            "en": "An up or down arrow on the information display (if fitted).",
            "ar": "سهم للأعلى أو للأسفل على شاشة المعلومات (إن وُجد)."
          },
          "does": {
            "en": "It suggests the best gear for saving fuel when you choose gears yourself. You still decide when to change.",
            "ar": "يقترح أفضل غيار لتوفير الوقود عندما تختارين الغيار بنفسك. والقرار يبقى لك."
          },
          "lessons": [
            "L18"
          ]
        }
      ]
    },
    {
      "id": "warning-lights",
      "en": "Warning & indicator lights",
      "ar": "لمبات التحذير والمؤشرات",
      "variant": "both",
      "page": "4-42",
      "items": [
        {
          "id": "cluster-overview",
          "en": "Rev counter left, speedometer right, display in the middle; lights flash on at start-up as a check.",
          "ar": "عدّاد الدوران يسارًا، والسرعة يمينًا، والشاشة في الوسط، والأضواء تومض عند التشغيل للفحص.",
          "page": "1-9",
          "variant": "both",
          "urgency": "info",
          "fig": "figs/instrument_cluster.webp",
          "title": {
            "en": "Instrument cluster",
            "ar": "لوحة العدادات"
          },
          "looks": {
            "en": "Two round dials with a screen between them, behind the steering wheel.",
            "ar": "عدّادان دائريان بينهما شاشة، خلف المقود."
          },
          "means": {
            "en": "Left: rev counter (engine speed). Right: speedometer. Middle: information display. When you switch on, many lights come on for a moment as a **bulb check**. That is normal.",
            "ar": "يسارًا: عدّاد دوران المحرك. يمينًا: عدّاد السرعة. في الوسط: شاشة المعلومات. عند التشغيل تضيء أضواء كثيرة لحظة **لفحص المصابيح**، وهذا طبيعي."
          },
          "todo": {
            "en": "After starting, check that no **red** light stays on.",
            "ar": "بعد التشغيل، تأكدي أنه لا يبقى أي ضوء **أحمر** مضاء."
          },
          "lessons": [
            "L1",
            "L11",
            "L21"
          ]
        },
        {
          "id": "brake",
          "en": "Red brake light: handbrake on, or low brake fluid or brake fault.",
          "ar": "ضوء الفرامل الأحمر: فرامل اليد مرفوعة، أو سائل الفرامل منخفض أو عطل في الفرامل.",
          "page": "4-42",
          "variant": "both",
          "urgency": "stop",
          "icon": "icons/brake.png",
          "title": {
            "en": "Brake warning light",
            "ar": "ضوء تحذير الفرامل"
          },
          "looks": {
            "en": "An exclamation mark in a circle, red.",
            "ar": "علامة تعجب داخل دائرة، باللون الأحمر."
          },
          "means": {
            "en": "The handbrake is on, or the brake fluid is low or the brakes have a fault.",
            "ar": "فرامل اليد مرفوعة، أو سائل الفرامل منخفض، أو في الفرامل عطل."
          },
          "todo": {
            "en": "Release the handbrake fully. If the light stays on, pull off and stop carefully, test the brakes, and drive slowly to a workshop or call a tow truck.",
            "ar": "حرّري فرامل اليد بالكامل. إذا بقي الضوء، اخرجي من الطريق وتوقفي بحذر، جرّبي الفرامل، ثم قودي ببطء إلى الورشة أو اطلبي سطحة."
          },
          "lessons": [
            "L1",
            "L2"
          ]
        },
        {
          "id": "seatbelt",
          "en": "Red seat belt light: driver or front passenger not belted.",
          "ar": "ضوء الحزام الأحمر: السائق أو الراكب الأمامي لم يربط الحزام.",
          "page": "4-43",
          "variant": "both",
          "urgency": "soon",
          "icon": "icons/seatbelt.png",
          "title": {
            "en": "Seat belt reminder",
            "ar": "منبّه حزام الأمان"
          },
          "looks": {
            "en": "A seated person wearing a belt, red.",
            "ar": "شخص جالس يربط حزامًا، باللون الأحمر."
          },
          "means": {
            "en": "The driver or front passenger is not wearing a belt. Fast beeping comes with it while driving.",
            "ar": "السائق أو الراكب الأمامي لم يربط الحزام. ويصاحبه تنبيه صوتي سريع أثناء القيادة."
          },
          "todo": {
            "en": "Fasten all seat belts.",
            "ar": "اربطوا جميع الأحزمة."
          },
          "lessons": [
            "L1",
            "L20"
          ]
        },
        {
          "id": "rear-seatbelt",
          "en": "Rear seat belt reminder shows which back seat is not belted.",
          "ar": "منبّه الحزام الخلفي يُظهر أي مقعد خلفي لم يُربط حزامه.",
          "page": "4-43",
          "variant": "both",
          "urgency": "soon",
          "icon": "icons/rear_seatbelt.png",
          "title": {
            "en": "Rear seat belt reminder",
            "ar": "منبّه الأحزمة الخلفية"
          },
          "looks": {
            "en": "Small seat symbols for left, centre and right rear seats, white or red.",
            "ar": "رموز مقاعد صغيرة للمقعد الخلفي الأيسر والأوسط والأيمن، بالأبيض أو الأحمر."
          },
          "means": {
            "en": "It shows which rear passenger is not belted.",
            "ar": "يُظهر أي راكب في الخلف لم يربط حزامه."
          },
          "todo": {
            "en": "Ask that passenger to fasten their belt.",
            "ar": "اطلبي من ذلك الراكب أن يربط حزامه."
          },
          "lessons": [
            "L20"
          ]
        },
        {
          "id": "airbag",
          "en": "Red airbag light staying on means an airbag fault; have it checked.",
          "ar": "بقاء ضوء الوسادة الهوائية الأحمر يعني عطلًا فيها، افحصيها.",
          "page": "4-43",
          "variant": "both",
          "urgency": "soon",
          "icon": "icons/airbag.png",
          "title": {
            "en": "Airbag warning light",
            "ar": "ضوء تحذير الوسائد الهوائية"
          },
          "looks": {
            "en": "A seated person with a round airbag in front, red.",
            "ar": "شخص جالس أمامه وسادة هوائية دائرية، باللون الأحمر."
          },
          "means": {
            "en": "If it stays on more than ==6== seconds after start, or comes on while driving, the airbags or belt tighteners may not work in a crash.",
            "ar": "إذا بقي أكثر من ==6== ثوانٍ بعد التشغيل، أو أضاء أثناء القيادة، فقد لا تعمل الوسائد الهوائية أو شدّادات الأحزمة عند الحادث."
          },
          "todo": {
            "en": "Have it inspected at a workshop soon.",
            "ar": "افحصيه في الورشة قريبًا."
          },
          "lessons": []
        },
        {
          "id": "low-fuel",
          "en": "Orange fuel pump light: fuel is low, refuel soon.",
          "ar": "ضوء مضخة الوقود البرتقالي: الوقود منخفض، اتجهي للتعبئة قريبًا.",
          "page": "4-44",
          "variant": "both",
          "urgency": "soon",
          "icon": "icons/low_fuel.png",
          "title": {
            "en": "Low fuel",
            "ar": "الوقود منخفض"
          },
          "looks": {
            "en": "A fuel pump, orange.",
            "ar": "مضخة وقود، باللون البرتقالي."
          },
          "means": {
            "en": "The tank is nearly empty.",
            "ar": "الخزان شبه فارغ."
          },
          "todo": {
            "en": "Refuel as soon as possible.",
            "ar": "عبّئي الوقود بأسرع ما يمكن."
          },
          "tip": {
            "en": "On long trips, refuel at a quarter tank.",
            "ar": "في الرحلات الطويلة، عبّئي عند ربع الخزان."
          },
          "lessons": [
            "L18"
          ]
        },
        {
          "id": "abs",
          "en": "Orange ABS light: anti-lock brakes fault; normal brakes still work.",
          "ar": "ضوء ABS البرتقالي: عطل في منع انغلاق الفرامل، والفرامل العادية تعمل.",
          "page": "4-44",
          "variant": "both",
          "urgency": "soon",
          "icon": "icons/abs.png",
          "title": {
            "en": "ABS warning light",
            "ar": "ضوء تحذير ABS"
          },
          "looks": {
            "en": "The letters ABS in a circle, orange.",
            "ar": "حروف ABS داخل دائرة، باللون البرتقالي."
          },
          "means": {
            "en": "ABS stops the wheels locking when you brake hard. This light means ABS has a fault; normal braking still works. If the red brake light is also on, the brake balance has a fault too.",
            "ar": "نظام ABS يمنع انغلاق العجلات عند الفرملة القوية. هذا الضوء يعني أن فيه عطلًا، لكن الفرامل العادية تعمل. وإذا أضاء معه ضوء الفرامل الأحمر، ففي توزيع قوة الفرامل عطل أيضًا."
          },
          "todo": {
            "en": "Stop somewhere safe and restart the engine. If it stays on, have it inspected.",
            "ar": "توقفي في مكان آمن وأعيدي تشغيل المحرك. إذا بقي، افحصيه."
          },
          "lessons": [
            "L9"
          ]
        },
        {
          "id": "coolant-hot",
          "en": "Red thermometer light: engine running hot or overheating.",
          "ar": "ضوء الحرارة الأحمر: المحرك ساخن أو يرتفع حرارته بشدة.",
          "page": "4-45",
          "variant": "both",
          "urgency": "stop",
          "icon": "icons/coolant_hot.png",
          "title": {
            "en": "Engine too hot",
            "ar": "حرارة المحرك مرتفعة"
          },
          "looks": {
            "en": "A thermometer in waves, red.",
            "ar": "ميزان حرارة فوق أمواج، باللون الأحمر."
          },
          "means": {
            "en": "Blinking: the engine is running hot. Steady after blinking: the engine is **overheating**.",
            "ar": "إذا ومض: المحرك ساخن. وإذا ثبت بعد الوميض: المحرك **يرتفع حرارته بشدة**."
          },
          "todo": {
            "en": "Turn off the A/C, pull over safely and follow the overheating steps.",
            "ar": "أطفئي المكيّف، وتوقفي في مكان آمن، واتبعي خطوات ارتفاع الحرارة."
          },
          "lessons": [
            "L22",
            "L23"
          ]
        },
        {
          "id": "mil",
          "en": "Orange engine light: engine fault; blinking means stop safely.",
          "ar": "ضوء المحرك البرتقالي: عطل في المحرك، والوميض يعني توقفي بأمان.",
          "page": "4-45",
          "variant": "both",
          "urgency": "stop",
          "icon": "icons/mil.png",
          "title": {
            "en": "Check engine light",
            "ar": "ضوء فحص المحرك"
          },
          "looks": {
            "en": "An engine outline, orange.",
            "ar": "رسم محرك، باللون البرتقالي."
          },
          "means": {
            "en": "Steady: a fault in the exhaust-cleaning system. **Blinking**: the engine may be misfiring (not burning fuel properly), which can damage it. On automatics it can also mean a gearbox fault.",
            "ar": "ثابت: عطل في نظام تنقية العادم. **وامض**: قد يكون في احتراق الوقود خلل، وهذا قد يتلف المحرك. وفي الأوتوماتيك قد يعني عطلًا في القير أيضًا."
          },
          "todo": {
            "en": "Steady: book a service. Blinking: stop in a safe place, not over dry grass, and drive only slowly if you must.",
            "ar": "ثابت: احجزي صيانة. وامض: توقفي في مكان آمن، ليس فوق عشب جاف، ولا تقودي إلا ببطء عند الضرورة."
          },
          "lessons": []
        },
        {
          "id": "eps",
          "en": "Orange steering light: power steering may fail; steering gets heavier.",
          "ar": "ضوء المقود البرتقالي: قد يتعطل المقود الكهربائي فيصبح أثقل.",
          "page": "4-46",
          "variant": "both",
          "urgency": "soon",
          "icon": "icons/eps.png",
          "title": {
            "en": "Power steering warning",
            "ar": "تحذير المقود الكهربائي"
          },
          "looks": {
            "en": "A steering wheel with an exclamation mark, orange.",
            "ar": "مقود معه علامة تعجب، باللون البرتقالي."
          },
          "means": {
            "en": "The motor that makes steering light may fail. The steering still works but feels much heavier.",
            "ar": "المحرك الذي يجعل المقود خفيفًا قد يتعطل. المقود يبقى يعمل لكنه يصبح أثقل كثيرًا."
          },
          "todo": {
            "en": "Drive carefully, holding the wheel firmly, and have it inspected.",
            "ar": "قودي بحذر وامسكي المقود بقوة، وافحصيه."
          },
          "lessons": []
        },
        {
          "id": "oil-pressure",
          "en": "Red oil can light: low oil pressure, stop the engine as soon as safe.",
          "ar": "ضوء علبة الزيت الأحمر: ضغط الزيت منخفض، أطفئي المحرك فور الأمان.",
          "page": "4-46",
          "variant": "both",
          "urgency": "stop",
          "icon": "icons/oil_pressure.png",
          "title": {
            "en": "Oil pressure warning",
            "ar": "تحذير ضغط الزيت"
          },
          "looks": {
            "en": "An oil can with a drip, red.",
            "ar": "علبة زيت تقطر، باللون الأحمر."
          },
          "means": {
            "en": "The engine oil pressure is low. Driving on can quickly ruin the engine.",
            "ar": "ضغط زيت المحرك منخفض. الاستمرار في القيادة قد يتلف المحرك بسرعة."
          },
          "todo": {
            "en": "Pull off as soon as it's safe and switch off. Check the oil level and top up. If the level is fine, don't drive until it is inspected.",
            "ar": "اخرجي من الطريق فور الأمان وأطفئي المحرك. افحصي مستوى الزيت وأضيفي. إذا كان المستوى سليمًا، لا تقودي حتى تُفحص."
          },
          "lessons": []
        },
        {
          "id": "charge",
          "en": "Red battery light: the charging system has a fault.",
          "ar": "ضوء البطارية الأحمر: عطل في نظام الشحن.",
          "page": "4-47",
          "variant": "both",
          "urgency": "soon",
          "icon": "icons/charge.png",
          "title": {
            "en": "Battery charging warning",
            "ar": "تحذير شحن البطارية"
          },
          "looks": {
            "en": "A battery with + and –, red.",
            "ar": "بطارية عليها + و–، باللون الأحمر."
          },
          "means": {
            "en": "With the engine running, the battery is not being charged. The car may soon stop working.",
            "ar": "والمحرك يعمل، البطارية لا تُشحن. وقد تتوقف السيارة عن العمل قريبًا."
          },
          "todo": {
            "en": "Have it inspected **immediately**.",
            "ar": "افحصيها **فورًا**."
          },
          "lessons": []
        },
        {
          "id": "brake-request",
          "en": "AGS: press the brake to start or to select a gear from N.",
          "ar": "AGS: اضغطي الفرامل للتشغيل أو لاختيار غيار من N.",
          "page": "4-47",
          "variant": "auto",
          "autoType": "AGS",
          "urgency": "info",
          "icon": "icons/brake_request.png",
          "title": {
            "en": "Press the brake (AGS)",
            "ar": "اضغطي الفرامل (AGS)"
          },
          "looks": {
            "en": "A foot-on-pedal style symbol, orange (AGS cars only).",
            "ar": "رمز قدم على دواسة، باللون البرتقالي (سيارات AGS فقط)."
          },
          "means": {
            "en": "You need to press the brake to start the engine or to shift from N to D, M or R.",
            "ar": "تحتاجين الضغط على الفرامل لتشغيل المحرك أو للتحويل من N إلى D أو M أو R."
          },
          "todo": {
            "en": "Press the brake pedal.",
            "ar": "اضغطي دواسة الفرامل."
          },
          "lessons": []
        },
        {
          "id": "transmission",
          "en": "Orange gearbox light: gearbox fault; stop safely and call a workshop.",
          "ar": "ضوء القير البرتقالي: عطل في القير، توقفي بأمان واتصلي بالورشة.",
          "page": "4-47",
          "variant": "auto",
          "urgency": "stop",
          "icon": "icons/transmission.png",
          "title": {
            "en": "Gearbox warning",
            "ar": "تحذير القير"
          },
          "looks": {
            "en": "A gearbox warning symbol, orange.",
            "ar": "رمز تحذير القير، باللون البرتقالي."
          },
          "means": {
            "en": "On or blinking: the automatic gearbox has a fault. On AGS cars blinking can mean the clutch is overheating.",
            "ar": "مضاء أو وامض: في القير الأوتوماتيك عطل. وفي سيارات AGS قد يعني الوميض أن الكلتش ساخن جدًا."
          },
          "todo": {
            "en": "Stop in a safe place and contact a workshop. AGS blinking: stop and let it cool.",
            "ar": "توقفي في مكان آمن واتصلي بالورشة. وفي AGS إذا ومض: توقفي ودعيه يبرد."
          },
          "lessons": []
        },
        {
          "id": "immobilizer",
          "en": "Orange key light: key not recognised; the engine may not start.",
          "ar": "ضوء المفتاح البرتقالي: المفتاح غير معروف، وقد لا يشتغل المحرك.",
          "page": "4-48",
          "variant": "both",
          "urgency": "soon",
          "icon": "icons/immobilizer.png",
          "title": {
            "en": "Key not recognised",
            "ar": "المفتاح غير معروف"
          },
          "looks": {
            "en": "A car with a key, orange.",
            "ar": "سيارة مع مفتاح، باللون البرتقالي."
          },
          "means": {
            "en": "The car cannot recognise the remote key, or the anti-theft start system has a fault. The engine may not start.",
            "ar": "السيارة لا تتعرف على المفتاح، أو في نظام منع السرقة عطل. وقد لا يشتغل المحرك."
          },
          "todo": {
            "en": "Switch off, then back to ON. If it continues, see a workshop.",
            "ar": "أطفئي ثم أعيدي إلى ON. إذا استمر، راجعي الورشة."
          },
          "tip": {
            "en": "A flat key battery can cause this: your guide explains touching the START button with the key.",
            "ar": "قد يكون السبب نفاد بطارية المفتاح: دليلك يشرح لمس زر START بالمفتاح."
          },
          "lessons": []
        },
        {
          "id": "door-open",
          "en": "Red door light: a door or the boot isn't fully closed.",
          "ar": "ضوء الباب الأحمر: باب أو الصندوق غير مغلق تمامًا.",
          "page": "4-48",
          "variant": "both",
          "urgency": "soon",
          "icon": "icons/door_open.png",
          "title": {
            "en": "Door open",
            "ar": "باب مفتوح"
          },
          "looks": {
            "en": "A car with an open door, red.",
            "ar": "سيارة بابها مفتوح، باللون الأحمر."
          },
          "means": {
            "en": "A door or the tailgate (boot) is not fully closed.",
            "ar": "أحد الأبواب أو الباب الخلفي (الصندوق) غير مغلق تمامًا."
          },
          "todo": {
            "en": "Stop and close it properly before moving.",
            "ar": "توقفي وأغلقيه جيدًا قبل التحرك."
          },
          "lessons": []
        },
        {
          "id": "master-warning",
          "en": "Orange triangle: read the message on the display.",
          "ar": "المثلث البرتقالي: اقرئي الرسالة على الشاشة.",
          "page": "4-52",
          "variant": "both",
          "urgency": "soon",
          "icon": "icons/master_warning.png",
          "title": {
            "en": "General warning",
            "ar": "تحذير عام"
          },
          "looks": {
            "en": "A triangle with an exclamation mark, orange.",
            "ar": "مثلث فيه علامة تعجب، باللون البرتقالي."
          },
          "means": {
            "en": "Something needs your attention. A message appears on the information display.",
            "ar": "هناك أمر يحتاج انتباهك، وتظهر رسالة على شاشة المعلومات."
          },
          "todo": {
            "en": "Read the message and do what it says.",
            "ar": "اقرئي الرسالة واتبعي ما فيها."
          },
          "lessons": []
        },
        {
          "id": "esp",
          "en": "Orange skid light: blinking means ESP is helping; steady means a fault.",
          "ar": "ضوء الانزلاق البرتقالي: الوميض يعني أن ESP يساعد، والثبات يعني عطلًا.",
          "page": "4-50",
          "variant": "both",
          "urgency": "soon",
          "icon": "icons/esp.png",
          "title": {
            "en": "Stability control (ESP)",
            "ar": "نظام الثبات (ESP)"
          },
          "looks": {
            "en": "A car with wavy skid lines behind it, orange.",
            "ar": "سيارة خلفها خطوط متعرجة، باللون البرتقالي."
          },
          "means": {
            "en": "ESP helps stop the car skidding or wheels spinning. **Blinking fast**: it is working right now, so the road is slippery. **Steady** while driving: ESP has a fault.",
            "ar": "نظام ESP يساعد على منع انزلاق السيارة ودوران العجلات في مكانها. **وميض سريع**: النظام يعمل الآن، أي الطريق زلق. **ثابت** أثناء القيادة: في النظام عطل."
          },
          "todo": {
            "en": "Blinking: ease off and drive more gently. Steady: have it inspected.",
            "ar": "إذا ومض: خففي السرعة وقودي بهدوء. إذا ثبت: افحصيه."
          },
          "lessons": [
            "L9",
            "L18"
          ]
        },
        {
          "id": "esp-off",
          "en": "ESP OFF light: stability control has been switched off.",
          "ar": "ضوء ESP OFF: نظام الثبات مُطفأ.",
          "page": "4-50",
          "variant": "both",
          "urgency": "info",
          "icon": "icons/esp_off.png",
          "title": {
            "en": "ESP switched off",
            "ar": "نظام الثبات مُطفأ"
          },
          "looks": {
            "en": "The skid symbol with the word OFF, orange.",
            "ar": "رمز الانزلاق مع كلمة OFF، باللون البرتقالي."
          },
          "means": {
            "en": "Stability and traction control were switched off with the ESP OFF button. ABS still works.",
            "ar": "تم إطفاء نظام الثبات ومنع الانزلاق بزر ESP OFF. ونظام ABS ما زال يعمل."
          },
          "todo": {
            "en": "Switch ESP back on unless you are freeing the car from sand.",
            "ar": "أعيدي تشغيل ESP إلا إذا كنت تُخرجين السيارة من الرمل."
          },
          "lessons": [
            "L18"
          ]
        },
        {
          "id": "coolant-cold",
          "en": "Blue thermometer: engine still cold; goes off when warm.",
          "ar": "ميزان الحرارة الأزرق: المحرك ما زال باردًا، وينطفئ عند تسخينه.",
          "page": "4-50",
          "variant": "both",
          "urgency": "info",
          "icon": "icons/coolant_cold.png",
          "title": {
            "en": "Engine still cold",
            "ar": "المحرك ما زال باردًا"
          },
          "looks": {
            "en": "A thermometer, blue.",
            "ar": "ميزان حرارة، باللون الأزرق."
          },
          "means": {
            "en": "The engine has not warmed up yet. It goes off by itself.",
            "ar": "المحرك لم يسخن بعد، وينطفئ الضوء وحده."
          },
          "todo": {
            "en": "Drive gently. If it stays on after warm-up, have the sensor checked.",
            "ar": "قودي بهدوء. إذا بقي بعد تسخين المحرك، افحصي الحسّاس."
          },
          "lessons": []
        },
        {
          "id": "turn-signal",
          "en": "Green arrows flash with the indicators; fast flashing means a bulb fault.",
          "ar": "الأسهم الخضراء تومض مع الإشارات، والوميض السريع يعني عطل مصباح.",
          "page": "4-49",
          "variant": "both",
          "urgency": "info",
          "icon": "icons/turn_signal.png",
          "title": {
            "en": "Indicator arrows",
            "ar": "أسهم الإشارات"
          },
          "looks": {
            "en": "Two arrows pointing left and right, green.",
            "ar": "سهمان لليسار واليمين، باللون الأخضر."
          },
          "means": {
            "en": "They flash when an indicator is on; both flash with the hazard lights.",
            "ar": "يومضان عندما تعمل الإشارة، ويومض الاثنان معًا مع الإشارات التحذيرية."
          },
          "todo": {
            "en": "Check it goes off after a turn. Fast flashing: a bulb has failed, see the dealer.",
            "ar": "تأكدي أنه ينطفئ بعد الانعطاف. إذا ومض بسرعة: مصباح تعطّل، راجعي الوكيل."
          },
          "lessons": [
            "L3",
            "L5"
          ]
        },
        {
          "id": "high-beam",
          "en": "Blue headlamp light: high beam is on; dip for others.",
          "ar": "ضوء المصباح الأزرق: النور العالي يعمل، اخفضيه للآخرين.",
          "page": "4-49",
          "variant": "both",
          "urgency": "info",
          "icon": "icons/high_beam.png",
          "title": {
            "en": "High beam on",
            "ar": "النور العالي يعمل"
          },
          "looks": {
            "en": "A headlamp with straight lines, blue.",
            "ar": "مصباح أمامي مع خطوط مستقيمة، باللون الأزرق."
          },
          "means": {
            "en": "Your high (bright) beams are on.",
            "ar": "النور العالي (الساطع) يعمل."
          },
          "todo": {
            "en": "Dip them for anyone coming towards you or driving ahead.",
            "ar": "اخفضيه لأي سيارة قادمة نحوك أو تسير أمامك."
          },
          "lessons": [
            "L19"
          ]
        },
        {
          "id": "illumination",
          "en": "Green lights symbol: side lights or headlights are on.",
          "ar": "رمز الأنوار الأخضر: الأنوار الجانبية أو الأمامية تعمل.",
          "page": "4-49",
          "variant": "both",
          "urgency": "info",
          "icon": "icons/illumination.png",
          "title": {
            "en": "Lights on",
            "ar": "الأنوار تعمل"
          },
          "looks": {
            "en": "Two small lamps facing outwards, green.",
            "ar": "مصباحان صغيران متقابلان للخارج، باللون الأخضر."
          },
          "means": {
            "en": "The side/tail lights and/or headlights are on.",
            "ar": "الأنوار الجانبية والخلفية و/أو الأمامية تعمل."
          },
          "todo": {
            "en": "Nothing to do; just a reminder.",
            "ar": "لا شيء عليك، مجرد تذكير."
          },
          "lessons": [
            "L19"
          ]
        },
        {
          "id": "eng-astop",
          "en": "Green A light: the engine stopped by itself at a standstill to save fuel.",
          "ar": "ضوء A الأخضر: المحرك توقف وحده عند الوقوف لتوفير الوقود.",
          "page": "4-51",
          "variant": "both",
          "urgency": "info",
          "icon": "icons/eng_astop.png",
          "title": {
            "en": "Engine auto-stopped",
            "ar": "المحرك متوقف تلقائيًا"
          },
          "looks": {
            "en": "The letter A inside a circular arrow, green.",
            "ar": "حرف A داخل سهم دائري، باللون الأخضر."
          },
          "means": {
            "en": "The engine switched off by itself while you are stopped, to save fuel. This is normal.",
            "ar": "المحرك أطفأ نفسه وأنت متوقفة لتوفير الوقود، وهذا طبيعي."
          },
          "todo": {
            "en": "Keep your foot on the brake; lift it and the engine restarts at once.",
            "ar": "أبقي قدمك على الفرامل، وعند رفعها يعود المحرك للعمل فورًا."
          },
          "tip": {
            "en": "Never get out while the engine is only auto-stopped: shift to P and switch off properly.",
            "ar": "لا تنزلي من السيارة والمحرك متوقف تلقائيًا فقط: انقلي إلى P وأطفئي المحرك بالطريقة الصحيحة."
          },
          "lessons": [
            "L2",
            "L6",
            "L12",
            "L23"
          ]
        },
        {
          "id": "eng-astop-off",
          "en": "Orange A OFF light: auto stop-start is switched off.",
          "ar": "ضوء A OFF البرتقالي: الإيقاف والتشغيل التلقائي مُطفأ.",
          "page": "4-51",
          "variant": "both",
          "urgency": "info",
          "icon": "icons/eng_astop_off.png",
          "title": {
            "en": "Auto stop-start off",
            "ar": "الإيقاف التلقائي مُطفأ"
          },
          "looks": {
            "en": "The A-in-arrow symbol with OFF, orange.",
            "ar": "رمز A داخل السهم مع كلمة OFF، باللون البرتقالي."
          },
          "means": {
            "en": "You switched off auto stop-start with the A OFF button. **Blinking** while driving: the system has a fault.",
            "ar": "أطفأتِ خاصية الإيقاف والتشغيل التلقائي بزر A OFF. إذا **ومض** أثناء القيادة: في النظام عطل."
          },
          "todo": {
            "en": "Steady: nothing to do. Blinking: have it inspected.",
            "ar": "ثابت: لا شيء عليك. وامض: افحصيه."
          },
          "lessons": [
            "L12",
            "L23"
          ]
        },
        {
          "id": "gpf",
          "en": "Exhaust filter light: drive at ==50== km/h or more for about ==25== minutes.",
          "ar": "ضوء فلتر العادم: قودي بسرعة ==50== كم/س أو أكثر لنحو ==25== دقيقة.",
          "page": "4-51",
          "variant": "both",
          "urgency": "soon",
          "title": {
            "en": "Exhaust filter (GPF)",
            "ar": "فلتر العادم (GPF)"
          },
          "looks": {
            "en": "An exhaust filter symbol on the display (if fitted).",
            "ar": "رمز فلتر العادم على الشاشة (إن وُجد)."
          },
          "means": {
            "en": "The filter that catches soot in the exhaust is nearly blocked and needs to clean itself by a steady drive.",
            "ar": "الفلتر الذي يلتقط السخام في العادم شبه مسدود، ويحتاج قيادة متواصلة لينظّف نفسه."
          },
          "todo": {
            "en": "When safe and legal, drive at ==50== km/h or more (above ==2,000== rpm) for about ==25== minutes until it goes out.",
            "ar": "عندما يكون آمنًا ونظاميًا، قودي بسرعة ==50== كم/س أو أكثر (فوق ==2,000== دورة) لنحو ==25== دقيقة حتى ينطفئ."
          },
          "lessons": []
        },
        {
          "id": "regen",
          "en": "White light: the mild-hybrid system is recovering energy as you slow.",
          "ar": "الضوء الأبيض: النظام الهجين الخفيف يستعيد الطاقة وأنت تبطئين.",
          "page": "4-52",
          "variant": "both",
          "urgency": "info",
          "icon": "icons/regen.png",
          "title": {
            "en": "Energy recovery",
            "ar": "استعادة الطاقة"
          },
          "looks": {
            "en": "An energy recovery symbol, white (if fitted).",
            "ar": "رمز استعادة الطاقة، باللون الأبيض (إن وُجد)."
          },
          "means": {
            "en": "As you slow down, the mild-hybrid system turns some of that movement into electricity for the battery.",
            "ar": "عندما تبطئين، يحوّل النظام الهجين الخفيف جزءًا من الحركة إلى كهرباء للبطارية."
          },
          "todo": {
            "en": "Nothing to do.",
            "ar": "لا شيء عليك."
          },
          "lessons": []
        },
        {
          "id": "security",
          "en": "Red security light shows the anti-theft system status.",
          "ar": "ضوء الأمان الأحمر يُظهر حالة نظام منع السرقة.",
          "page": "1-17",
          "variant": "both",
          "urgency": "info",
          "icon": "icons/security.png",
          "title": {
            "en": "Security system",
            "ar": "نظام الحماية من السرقة"
          },
          "looks": {
            "en": "A security symbol, red.",
            "ar": "رمز الحماية، باللون الأحمر."
          },
          "means": {
            "en": "It shows the status of the anti-theft system.",
            "ar": "يُظهر حالة نظام الحماية من السرقة."
          },
          "todo": {
            "en": "Nothing to do while it behaves normally.",
            "ar": "لا شيء عليك ما دام يعمل بشكل طبيعي."
          },
          "lessons": []
        },
        {
          "id": "cruise-indicators",
          "en": "Cruise and SET lights: cruise is on, or a speed is set.",
          "ar": "ضوءا مثبّت السرعة وSET: المثبّت يعمل، أو تم تحديد سرعة.",
          "page": "4-47",
          "variant": "both",
          "urgency": "info",
          "title": {
            "en": "Cruise control lights",
            "ar": "أضواء مثبّت السرعة"
          },
          "looks": {
            "en": "A speedometer-style cruise symbol, and the word SET (if fitted).",
            "ar": "رمز مثبّت السرعة، وكلمة SET (إن وُجد)."
          },
          "means": {
            "en": "Cruise control is switched on; SET means a speed is being held.",
            "ar": "مثبّت السرعة يعمل، وSET تعني أن السرعة مثبّتة."
          },
          "todo": {
            "en": "Touch the brake to cancel cruise at any time.",
            "ar": "المسي الفرامل لإلغاء المثبّت في أي وقت."
          },
          "lessons": [
            "L17"
          ]
        }
      ]
    },
    {
      "id": "checks",
      "en": "Pre-drive & routine checks",
      "ar": "الفحوصات قبل القيادة والدورية",
      "variant": "both",
      "page": "5-1",
      "items": [
        {
          "id": "walkaround",
          "en": "Quick checks before every drive: tyres, lights, leaks, seat and mirrors.",
          "ar": "فحص سريع قبل كل قيادة: الإطارات، الأنوار، التسربات، المقعد والمرايا.",
          "page": "5-1",
          "variant": "both",
          "title": {
            "en": "Before every drive",
            "ar": "قبل كل قيادة"
          },
          "what": {
            "en": "A short walk round the car and a check in the driver's seat.",
            "ar": "جولة قصيرة حول السيارة وفحص من مقعد السائق."
          },
          "does": {
            "en": "It catches problems, like a soft tyre or a leak, before they become dangerous.",
            "ar": "تكشف المشكلات، مثل إطار ناقص أو تسرب، قبل أن تصبح خطرًا."
          },
          "how": [
            {
              "en": "Windows, mirrors and lights are clean.",
              "ar": "النوافذ والمرايا والأنوار نظيفة."
            },
            {
              "en": "Tyres: no cuts, nails or stones; tread looks good; wheel nuts tight.",
              "ar": "الإطارات: لا جروح ولا مسامير ولا حجارة، والنقشة جيدة، والصواميل مشدودة."
            },
            {
              "en": "No fluid or oil under the car.",
              "ar": "لا سوائل ولا زيت تحت السيارة."
            },
            {
              "en": "Bonnet fully closed.",
              "ar": "غطاء المحرك مغلق تمامًا."
            },
            {
              "en": "Lights, indicators, brake lights and horn work.",
              "ar": "الأنوار والإشارات وأنوار الفرامل والبوق تعمل."
            },
            {
              "en": "Seat, head restraint and mirrors set; everyone belted.",
              "ar": "المقعد ومسند الرأس والمرايا مضبوطة، والجميع رابط الحزام."
            },
            {
              "en": "Brake pedal feels firm; handbrake holds.",
              "ar": "دواسة الفرامل متماسكة، وفرامل اليد تثبّت السيارة."
            },
            {
              "en": "At start-up the lights flash on, then go off; no red light stays.",
              "ar": "عند التشغيل تضيء الأضواء ثم تنطفئ، ولا يبقى ضوء أحمر."
            }
          ],
          "lessons": [
            "L1",
            "L21"
          ],
          "steps": [
            {
              "en": "Windows, mirrors, lights and reflectors clean.",
              "ar": "النوافذ والمرايا والأنوار والعاكسات نظيفة."
            },
            {
              "en": "Tyres: tread depth, cuts or damage, loose wheel nuts, nails or stones.",
              "ar": "الإطارات: عمق النقشة، والجروح أو التلف، وصواميل العجلات المرتخية، والمسامير أو الحجارة."
            },
            {
              "en": "No fluid or oil leaks under the car.",
              "ar": "لا تسرب سوائل أو زيت تحت السيارة."
            },
            {
              "en": "Bonnet fully closed and latched.",
              "ar": "غطاء المحرك مغلق ومقفل تماماً."
            },
            {
              "en": "Headlights, indicators, brake lights and horn work.",
              "ar": "الأنوار الأمامية والإشارات وأنوار الفرامل والبوق تعمل."
            },
            {
              "en": "Adjust seat, head restraint and mirrors; everyone belted.",
              "ar": "اضبط المقعد ومسند الرأس والمرايا، وتأكد أن الجميع ربطوا الأحزمة."
            },
            {
              "en": "Check brake pedal feel and parking brake.",
              "ar": "تحقق من إحساس دواسة الفرامل ومن فرامل اليد."
            },
            {
              "en": "At ignition ON all warning lights come on; brake light goes off when the parking brake is released; check gauges.",
              "ar": "عند التشغيل ON تضيء جميع لمبات التحذير، وتنطفئ لمبة الفرامل عند تحرير فرامل اليد، وافحص العدادات."
            }
          ]
        },
        {
          "id": "weekly",
          "en": "Weekly under the bonnet: oil, coolant, brake fluid, battery, washer.",
          "ar": "أسبوعيًا تحت غطاء المحرك: الزيت، سائل التبريد، سائل الفرامل، البطارية، ماء الغسيل.",
          "page": "5-1",
          "variant": "both",
          "title": {
            "en": "Weekly checks",
            "ar": "الفحص الأسبوعي"
          },
          "what": {
            "en": "Checks under the bonnet once a week, at a fill-up, or before a long trip.",
            "ar": "فحص تحت غطاء المحرك مرة أسبوعيًا، أو عند التعبئة، أو قبل رحلة طويلة."
          },
          "does": {
            "en": "Low fluids are the most common cause of breakdowns. These quick looks prevent most of them.",
            "ar": "نقص السوائل من أكثر أسباب الأعطال. هذه النظرات السريعة تمنع معظمها."
          },
          "how": [
            {
              "en": "Engine oil level.",
              "ar": "مستوى زيت المحرك."
            },
            {
              "en": "Coolant level.",
              "ar": "مستوى سائل التبريد."
            },
            {
              "en": "Brake fluid level.",
              "ar": "مستوى سائل الفرامل."
            },
            {
              "en": "Battery fluid level.",
              "ar": "مستوى سائل البطارية."
            },
            {
              "en": "Windscreen washer fluid.",
              "ar": "ماء غسيل الزجاج."
            },
            {
              "en": "Bonnet latch works and the safety catch holds.",
              "ar": "قفل غطاء المحرك يعمل والمشبك الاحتياطي يمسك."
            }
          ],
          "lessons": [
            "L1"
          ],
          "steps": [
            {
              "en": "Engine oil level",
              "ar": "مستوى زيت المحرك"
            },
            {
              "en": "Coolant level",
              "ar": "مستوى سائل التبريد"
            },
            {
              "en": "Brake fluid level",
              "ar": "مستوى سائل الفرامل"
            },
            {
              "en": "Battery fluid level",
              "ar": "مستوى سائل البطارية"
            },
            {
              "en": "Windscreen washer fluid",
              "ar": "سائل غسيل الزجاج"
            },
            {
              "en": "Bonnet latch works (secondary catch holds)",
              "ar": "قفل غطاء المحرك يعمل (القفل الثانوي يمسك)"
            }
          ]
        },
        {
          "id": "tyre-pressure",
          "en": "Check tyre pressure monthly when cold; the right values are on the driver's door frame.",
          "ar": "افحصي ضغط الإطارات شهريًا وهي باردة، والقيم الصحيحة على إطار باب السائق.",
          "page": "9-19",
          "variant": "both",
          "title": {
            "en": "Tyre pressure",
            "ar": "ضغط الإطارات"
          },
          "what": {
            "en": "The air pressure in each tyre, including the spare.",
            "ar": "ضغط الهواء في كل إطار، ومنها الاحتياطي."
          },
          "does": {
            "en": "The right pressure keeps grip, braking and fuel use as they should be. Too low or too high is unsafe.",
            "ar": "الضغط الصحيح يحافظ على التماسك والفرملة واستهلاك الوقود. الضغط المنخفض أو المرتفع جدًا خطر."
          },
          "how": [
            {
              "en": "Check monthly or at a fill-up, with the tyres cold.",
              "ar": "افحصي شهريًا أو عند التعبئة، والإطارات باردة."
            },
            {
              "en": "Find the correct pressures on the label on the driver's door frame.",
              "ar": "اعرفي الضغط الصحيح من الملصق على إطار باب السائق."
            },
            {
              "en": "Use a gauge and adjust each tyre, including the spare.",
              "ar": "استخدمي مقياس الضغط واضبطي كل إطار، ومنها الاحتياطي."
            }
          ],
          "tip": {
            "en": "Always measure with the tyres cold, before a drive.",
            "ar": "قيسي الضغط دائمًا والإطارات باردة، قبل القيادة."
          },
          "lessons": [
            "L17",
            "L20"
          ]
        },
        {
          "id": "tyre-tread",
          "en": "Tread must be at least ==1.6== mm; replace when the wear bars show.",
          "ar": "عمق النقشة يجب ألا يقل عن ==1.6== مم، وغيّري الإطار عند ظهور علامات التآكل.",
          "page": "9-20",
          "variant": "both",
          "title": {
            "en": "Tyre tread",
            "ar": "نقشة الإطار"
          },
          "what": {
            "en": "The grooves on the tyre surface. Tyre size: 195/60R16.",
            "ar": "الأخاديد على سطح الإطار. مقاس الإطار: 195/60R16."
          },
          "does": {
            "en": "The grooves push water away and give grip. The minimum depth is ==1.6== mm.",
            "ar": "الأخاديد تُبعد الماء وتعطي التماسك. أقل عمق مسموح ==1.6== مم."
          },
          "how": [
            {
              "en": "Look for the small wear bars moulded in the grooves.",
              "ar": "ابحثي عن علامات التآكل الصغيرة داخل الأخاديد."
            },
            {
              "en": "If they are level with the surface, replace the tyre.",
              "ar": "إذا صارت بمستوى السطح، غيّري الإطار."
            }
          ],
          "tip": {
            "en": "Don't mix tyre sizes or types on the car.",
            "ar": "لا تخلطي مقاسات أو أنواع إطارات مختلفة في السيارة."
          },
          "lessons": [
            "L1",
            "L8"
          ]
        },
        {
          "id": "oil",
          "en": "Engine oil: dipstick on level ground, engine off; level between the marks.",
          "ar": "زيت المحرك: بالعصا على أرض مستوية والمحرك مطفأ، والمستوى بين العلامتين.",
          "page": "9-8",
          "variant": "both",
          "title": {
            "en": "Engine oil",
            "ar": "زيت المحرك"
          },
          "what": {
            "en": "Checked with the dipstick (a long metal stick) in the engine.",
            "ar": "يُفحص بعصا القياس (عصا معدنية طويلة) في المحرك."
          },
          "does": {
            "en": "Oil keeps the engine's moving parts from wearing out. Too little can wreck the engine.",
            "ar": "الزيت يحمي أجزاء المحرك المتحركة من التآكل. ونقصه قد يدمّر المحرك."
          },
          "how": [
            {
              "en": "Park on level ground, engine off (before starting, or ==5==+ minutes after stopping).",
              "ar": "قفي على أرض مستوية والمحرك مطفأ (قبل التشغيل، أو بعد ==5== دقائق أو أكثر من الإطفاء)."
            },
            {
              "en": "Pull the dipstick out and wipe it.",
              "ar": "اسحبي العصا وامسحيها."
            },
            {
              "en": "Push it fully back in, then pull it out again.",
              "ar": "أعيديها كاملة ثم اسحبيها مرة أخرى."
            },
            {
              "en": "The level must be between the upper and lower marks.",
              "ar": "يجب أن يكون المستوى بين العلامتين العليا والسفلى."
            },
            {
              "en": "Top up to the upper mark if needed; don't overfill.",
              "ar": "أضيفي حتى العلامة العليا عند الحاجة، ولا تزيدي."
            }
          ],
          "lessons": []
        },
        {
          "id": "coolant",
          "en": "Coolant: check the see-through tank, engine cool, between FULL and LOW.",
          "ar": "سائل التبريد: افحصي الخزان الشفاف والمحرك بارد، بين FULL وLOW.",
          "page": "9-11",
          "variant": "both",
          "title": {
            "en": "Coolant",
            "ar": "سائل التبريد"
          },
          "what": {
            "en": "The liquid that cools the engine, checked in the see-through reservoir tank, not the radiator.",
            "ar": "السائل الذي يبرّد المحرك، ويُفحص في الخزان الشفاف وليس في الرديتر."
          },
          "does": {
            "en": "Without enough coolant the engine overheats, which matters a lot in Saudi heat.",
            "ar": "بدون سائل تبريد كافٍ يسخن المحرك بشدة، وهذا مهم جدًا في حر السعودية."
          },
          "how": [
            {
              "en": "With the engine cool, look at the reservoir tank.",
              "ar": "والمحرك بارد، انظري إلى الخزان."
            },
            {
              "en": "The level should be between FULL and LOW.",
              "ar": "يجب أن يكون المستوى بين FULL وLOW."
            },
            {
              "en": "Top up with the same type (check the colour); never above FULL.",
              "ar": "أضيفي من نفس النوع (انتبهي للون)، ولا تتجاوزي FULL."
            }
          ],
          "tip": {
            "en": "Never open the radiator cap while the engine is hot.",
            "ar": "لا تفتحي غطاء الرديتر والمحرك ساخن أبدًا."
          },
          "lessons": []
        },
        {
          "id": "brake-fluid",
          "en": "Brake fluid between MAX and MIN; dropping means get the brakes checked.",
          "ar": "سائل الفرامل بين MAX وMIN، ونقصه يعني افحصي الفرامل.",
          "page": "9-15",
          "variant": "both",
          "title": {
            "en": "Brake fluid",
            "ar": "سائل الفرامل"
          },
          "what": {
            "en": "A small reservoir in the engine bay marked MAX and MIN.",
            "ar": "خزان صغير في حجرة المحرك عليه MAX وMIN."
          },
          "does": {
            "en": "The fluid carries the push of your foot to the brakes. If it gets low the brakes may be worn or leaking.",
            "ar": "هذا السائل ينقل ضغط قدمك إلى الفرامل. إذا نقص فقد تكون الفرامل متآكلة أو فيها تسرب."
          },
          "how": [
            {
              "en": "Check the level is between MAX and MIN.",
              "ar": "تأكدي أن المستوى بين MAX وMIN."
            },
            {
              "en": "Near MIN or dropping fast: have the brakes inspected.",
              "ar": "قريب من MIN أو ينقص بسرعة: افحصي الفرامل."
            },
            {
              "en": "Use only DOT3 / SAE J1703 fluid.",
              "ar": "استخدمي سائل DOT3 / SAE J1703 فقط."
            }
          ],
          "lessons": [
            "L1"
          ]
        },
        {
          "id": "clutch",
          "en": "Manual cars: the clutch pedal should move smoothly with up to ==10== mm free play.",
          "ar": "السيارات اليدوية: دواسة الكلتش تتحرك بسلاسة وفيها خلوص حتى ==10== مم.",
          "page": "9-15",
          "variant": "manual",
          "title": {
            "en": "Clutch pedal (manual)",
            "ar": "دواسة الكلتش (يدوي)"
          },
          "what": {
            "en": "The left pedal on manual cars only (not your car).",
            "ar": "الدواسة اليسرى في السيارات اليدوية فقط (ليست سيارتك)."
          },
          "does": {
            "en": "It should work smoothly with up to ==10== mm of free play (movement before it starts working). It uses fluid from the brake fluid tank.",
            "ar": "يجب أن تعمل بسلاسة مع خلوص حتى ==10== مم (حركة قبل أن تبدأ العمل). وتأخذ سائلها من خزان سائل الفرامل."
          },
          "lessons": []
        },
        {
          "id": "washer",
          "en": "Keep the washer tank filled with proper washer fluid mixed with water.",
          "ar": "أبقي خزان الغسيل ممتلئًا بسائل غسيل مناسب مخلوط بالماء.",
          "page": "9-37",
          "variant": "both",
          "title": {
            "en": "Washer fluid",
            "ar": "ماء غسيل الزجاج"
          },
          "what": {
            "en": "The tank under the bonnet that feeds the windscreen sprays.",
            "ar": "الخزان تحت غطاء المحرك الذي يغذي رشاشات الزجاج."
          },
          "does": {
            "en": "You need it to clear dust safely; wiping a dry screen scratches it.",
            "ar": "تحتاجينه لإزالة الغبار بأمان، فمسح الزجاج جافًا يخدشه."
          },
          "how": [
            {
              "en": "Fill with good washer fluid diluted with water.",
              "ar": "املئيه بسائل غسيل جيد مخفف بالماء."
            }
          ],
          "tip": {
            "en": "Never use radiator coolant, and don't fill it when the engine is hot.",
            "ar": "لا تستخدمي سائل تبريد الرديتر أبدًا، ولا تملئيه والمحرك ساخن."
          },
          "lessons": [
            "L23"
          ]
        },
        {
          "id": "steering-play",
          "en": "Steering free play ==0==–==30== mm; it should turn smoothly.",
          "ar": "خلوص المقود ==0== إلى ==30== مم، ويجب أن يدور بسلاسة.",
          "page": "9-19",
          "variant": "both",
          "title": {
            "en": "Steering free play",
            "ar": "خلوص المقود"
          },
          "what": {
            "en": "How far the wheel moves before the front wheels start to turn.",
            "ar": "مقدار حركة المقود قبل أن تبدأ العجلات الأمامية بالدوران."
          },
          "does": {
            "en": "It should be ==0==–==30== mm, and the wheel should turn smoothly all the way each side. More play means the steering needs checking.",
            "ar": "يجب أن يكون بين ==0== و==30== مم، وأن يدور المقود بسلاسة حتى النهاية في كل اتجاه. الخلوص الزائد يعني أن المقود يحتاج فحصًا."
          },
          "lessons": []
        },
        {
          "id": "bonnet",
          "en": "Pull the lever under the dash, push the catch under the bonnet sideways, lift.",
          "ar": "اسحبي الذراع أسفل اللوحة، ادفعي المشبك تحت الغطاء جانبًا، ثم ارفعي.",
          "page": "7-4",
          "variant": "both",
          "title": {
            "en": "Opening the bonnet",
            "ar": "فتح غطاء المحرك (الكبوت)"
          },
          "what": {
            "en": "A release lever under the dashboard on the driver's side.",
            "ar": "ذراع تحرير أسفل لوحة القيادة من جهة السائق."
          },
          "does": {
            "en": "It opens the bonnet so you can check the fluids.",
            "ar": "يفتح غطاء المحرك لتفحصي السوائل."
          },
          "how": [
            {
              "en": "Pull the release lever under the dashboard.",
              "ar": "اسحبي ذراع التحرير أسفل لوحة القيادة."
            },
            {
              "en": "At the front, push the catch under the bonnet sideways.",
              "ar": "من الأمام، ادفعي المشبك تحت الغطاء إلى الجانب."
            },
            {
              "en": "Lift the bonnet.",
              "ar": "ارفعي الغطاء."
            }
          ],
          "tip": {
            "en": "Don't lift it with the wiper arms raised.",
            "ar": "لا ترفعيه وأذرع المسّاحات مرفوعة."
          },
          "lessons": []
        },
        {
          "id": "symptoms",
          "en": "See a workshop for leaks, strange smells or noises, or brakes and steering feeling different.",
          "ar": "راجعي الورشة عند التسربات، أو الروائح والأصوات الغريبة، أو تغيّر إحساس الفرامل والمقود.",
          "page": "5-2",
          "variant": "both",
          "title": {
            "en": "Signs to get checked",
            "ar": "علامات تستدعي الفحص"
          },
          "what": {
            "en": "Things you notice while driving or parked.",
            "ar": "أمور تلاحظينها أثناء القيادة أو الوقوف."
          },
          "does": {
            "en": "Leaks under the car, low brake fluid, unusual smells, sounds or vibration, or brakes or steering feeling different all mean: **see a workshop**.",
            "ar": "التسربات تحت السيارة، ونقص سائل الفرامل، والروائح أو الأصوات أو الاهتزازات الغريبة، أو تغيّر إحساس الفرامل أو المقود، كلها تعني: **راجعي الورشة**."
          },
          "lessons": []
        }
      ]
    },
    {
      "id": "emergencies",
      "en": "Emergencies",
      "ar": "حالات الطوارئ",
      "variant": "both",
      "page": "10-1",
      "items": [
        {
          "id": "flat-while-driving",
          "en": "Flat tyre while driving: hold the wheel firmly, brake gently, stop safely.",
          "ar": "إطار مثقوب أثناء القيادة: امسكي المقود بقوة، فرملي بلطف، وتوقفي بأمان.",
          "page": "10-16",
          "variant": "both",
          "title": {
            "en": "Flat tyre while driving",
            "ar": "انفجار الإطار أثناء القيادة"
          },
          "what": {
            "en": "What to do if a tyre goes flat on the move.",
            "ar": "ماذا تفعلين إذا فرغ إطار أثناء السير."
          },
          "does": {
            "en": "The car may pull to one side. Staying calm and braking gently keeps you in control.",
            "ar": "قد تنحرف السيارة إلى جهة. الهدوء والفرملة اللطيفة يُبقيانك متحكمة."
          },
          "how": [
            {
              "en": "Hold the steering wheel firmly.",
              "ar": "امسكي المقود بقوة."
            },
            {
              "en": "Brake gently; don't slam the brakes.",
              "ar": "فرملي بلطف، ولا تضغطي الفرامل بقوة مفاجئة."
            },
            {
              "en": "Stop somewhere safe, on flat, hard ground.",
              "ar": "توقفي في مكان آمن على أرض مستوية صلبة."
            }
          ],
          "lessons": [
            "L22"
          ]
        },
        {
          "id": "tools-location",
          "en": "Jack and tools are under the boot floor; some cars have a repair kit instead of a spare.",
          "ar": "الرافعة والعدة تحت أرضية الصندوق، وبعض السيارات فيها عدة إصلاح بدل الإطار الاحتياطي.",
          "page": "10-4",
          "variant": "both",
          "title": {
            "en": "Where the tools are",
            "ar": "مكان العدة"
          },
          "what": {
            "en": "Under the floor board of the boot (luggage area).",
            "ar": "تحت أرضية الصندوق الخلفي."
          },
          "does": {
            "en": "You'll find the jack, wheel brace, jack handle and towing eye. The spare tyre (if fitted) is bolted in the boot floor. Some cars carry a tyre repair kit instead.",
            "ar": "ستجدين الرافعة ومفتاح العجلات وذراع الرافعة وحلقة السحب. والإطار الاحتياطي (إن وُجد) مثبّت بمسمار في أرضية الصندوق. وبعض السيارات فيها عدة إصلاح إطارات بدلًا منه."
          },
          "tip": {
            "en": "Lift the boot floor now and see which one you have.",
            "ar": "ارفعي أرضية الصندوق الآن لتعرفي ماذا لديك."
          },
          "lessons": [
            "L22"
          ]
        },
        {
          "id": "change-wheel",
          "en": "Changing a wheel: safe place, handbrake and P, chock, loosen, jack, swap, tighten.",
          "ar": "تغيير العجلة: مكان آمن، فرامل اليد وP، مصدّ، ارخي، ارفعي، بدّلي، ثم شدّي.",
          "page": "10-6",
          "variant": "both",
          "title": {
            "en": "Changing a wheel",
            "ar": "تغيير العجلة"
          },
          "what": {
            "en": "How to fit the spare wheel.",
            "ar": "كيف تركّبين الإطار الاحتياطي."
          },
          "does": {
            "en": "Done safely, it gets you moving again. If the place feels unsafe, call for help instead.",
            "ar": "إذا تم بأمان، تعودين للطريق. وإذا شعرتِ أن المكان غير آمن، اطلبي المساعدة بدلًا من ذلك."
          },
          "how": [
            {
              "en": "Pull off the road onto flat, hard ground away from traffic; hazards on.",
              "ar": "اخرجي من الطريق إلى أرض مستوية صلبة بعيدًا عن السيارات، وشغّلي الإشارات التحذيرية."
            },
            {
              "en": "Handbrake on firmly; shift to P (manual/AGS: R). Never jack in N.",
              "ar": "ارفعي فرامل اليد بقوة وانقلي إلى P (اليدوي وAGS: R). لا ترفعي السيارة وهي على N."
            },
            {
              "en": "Block the wheel diagonally opposite, front and back.",
              "ar": "ضعي مصدًّا أمام وخلف العجلة المقابلة قطريًا."
            },
            {
              "en": "Loosen the wheel nuts, but don't remove them yet.",
              "ar": "ارخي صواميل العجلة دون فكّها."
            },
            {
              "en": "Put the jack at the jacking point by the wheel and raise until the tyre is off the ground.",
              "ar": "ضعي الرافعة في نقطة الرفع بجانب العجلة وارفعي حتى يرتفع الإطار عن الأرض."
            },
            {
              "en": "Never go under the car.",
              "ar": "لا تدخلي تحت السيارة أبدًا."
            },
            {
              "en": "Remove the nuts and wheel, fit the spare, nuts cone-side in, tighten by hand.",
              "ar": "فكّي الصواميل والعجلة، ركّبي الاحتياطي والجانب المخروطي من الصواميل للداخل، وشدّيها باليد."
            },
            {
              "en": "Lower the car and fully tighten the nuts in a criss-cross order.",
              "ar": "أنزلي السيارة وشدّي الصواميل بالكامل بترتيب متقاطع."
            },
            {
              "en": "Have the tightness (==100== Nm) checked soon.",
              "ar": "افحصي شدّ الصواميل (==100== نيوتن متر) قريبًا."
            }
          ],
          "lessons": [
            "L22"
          ],
          "steps": [
            {
              "en": "Move off the road onto level, hard ground away from traffic; hazards on.",
              "ar": "ابتعد عن الطريق إلى أرض مستوية وصلبة بعيداً عن المرور، وشغّل الإشارات التحذيرية."
            },
            {
              "en": "Set the parking brake firmly; select R (manual/AGS) or P (automatic). Never jack in N.",
              "ar": "شُدّ فرامل اليد جيداً، واختر R (اليدوي/AGS) أو P (الأوتوماتيكي). لا ترفع السيارة وهي على N."
            },
            {
              "en": "Block the wheel diagonally opposite, front and rear.",
              "ar": "ضع مصدّات أمام وخلف العجلة المقابلة قطرياً."
            },
            {
              "en": "Loosen (don't remove) the wheel nuts.",
              "ar": "فكّ صواميل العجلة قليلاً (دون إزالتها)."
            },
            {
              "en": "Place the jack at the jacking point by the wheel and raise until the tyre clears the ground. Never go under the car.",
              "ar": "ضع الرافعة عند نقطة الرفع بجوار العجلة وارفع حتى يرتفع الإطار عن الأرض. لا تضع أي جزء من جسمك تحت السيارة."
            },
            {
              "en": "Remove nuts and wheel, clean the hub, fit the spare with nuts cone-side in, hand-tighten.",
              "ar": "انزع الصواميل والعجلة، ونظّف المحور، وركّب الاحتياطي مع توجيه الجهة المخروطية للصواميل نحو العجلة، وشدّها باليد."
            },
            {
              "en": "Lower the car and fully tighten the nuts in a criss-cross order (100 Nm); have torque checked soon.",
              "ar": "أنزل السيارة وشدّ الصواميل بالكامل بترتيب متقاطع (100 نيوتن·م)، وافحص عزم الشد قريباً."
            }
          ]
        },
        {
          "id": "repair-kit",
          "en": "Repair kit: seals small tread holes only; then max ==80== km/h and recheck.",
          "ar": "عدة الإصلاح: تسد الثقوب الصغيرة في النقشة فقط، ثم بحد أقصى ==80== كم/س وأعيدي الفحص.",
          "page": "10-11",
          "variant": "both",
          "title": {
            "en": "Tyre repair kit",
            "ar": "عدة إصلاح الإطار"
          },
          "what": {
            "en": "A sealant bottle with a small air pump (on some cars, instead of a spare).",
            "ar": "عبوة مادة سدّ مع منفاخ صغير (في بعض السيارات بدل الإطار الاحتياطي)."
          },
          "does": {
            "en": "It seals **small holes in the tread** only, not cuts in the tyre's side or holes over about ==4== mm.",
            "ar": "تسد **الثقوب الصغيرة في النقشة** فقط، لا الجروح في جانب الإطار ولا الثقوب الأكبر من ==4== مم تقريبًا."
          },
          "how": [
            {
              "en": "Inflate to the pressure on the door label (pump no more than ==10== minutes).",
              "ar": "انفخي حتى الضغط المكتوب على ملصق الباب (لا تشغّلي المنفاخ أكثر من ==10== دقائق)."
            },
            {
              "en": "Drive at no more than ==80== km/h.",
              "ar": "قودي بسرعة لا تزيد عن ==80== كم/س."
            },
            {
              "en": "After ==10== minutes, check the pressure again.",
              "ar": "بعد ==10== دقائق، افحصي الضغط مرة أخرى."
            },
            {
              "en": "Below ==130== kPa the repair has failed: don't drive on.",
              "ar": "إذا كان أقل من ==130== كيلوباسكال فالإصلاح فشل: لا تكملي القيادة."
            }
          ],
          "lessons": [
            "L22"
          ]
        },
        {
          "id": "jump-start",
          "en": "Jump start (12 V only): red to both +, black from helper – to bare engine metal.",
          "ar": "التشغيل بالكيبل (12 فولت فقط): الأحمر بين الموجبين، والأسود من سالب المساعدة إلى معدن المحرك.",
          "page": "10-14",
          "variant": "both",
          "title": {
            "en": "Jump starting",
            "ar": "تشغيل البطارية بالكيبل (اشتراك)"
          },
          "what": {
            "en": "Starting your car from another car's battery with jump leads.",
            "ar": "تشغيل سيارتك من بطارية سيارة أخرى بأسلاك التوصيل."
          },
          "does": {
            "en": "It gets a car with a flat battery going. Use a **12 V** battery only.",
            "ar": "يشغّل السيارة التي بطاريتها فارغة. استخدمي بطارية **12 فولت** فقط."
          },
          "how": [
            {
              "en": "Keep flames and sparks away. The cars must not touch. Both handbrakes on, accessories off.",
              "ar": "أبعدي النار والشرر. لا تتلامس السيارتان. فرامل اليد مرفوعة في الاثنتين، والملحقات مطفأة."
            },
            {
              "en": "Red lead: your flat battery + to the helper battery +.",
              "ar": "السلك الأحمر: من + بطاريتك الفارغة إلى + بطارية المساعدة."
            },
            {
              "en": "Black lead: helper battery – to bare, heavy metal on your engine, **not** your battery's –.",
              "ar": "السلك الأسود: من – بطارية المساعدة إلى معدن عارٍ ثقيل في محركك، **وليس** إلى – بطاريتك."
            },
            {
              "en": "Start the helper car, run it at moderate speed, then start yours.",
              "ar": "شغّلي سيارة المساعدة بدوران متوسط، ثم شغّلي سيارتك."
            },
            {
              "en": "Remove the leads in exactly the reverse order.",
              "ar": "افصلي الأسلاك بالترتيب المعاكس تمامًا."
            }
          ],
          "tip": {
            "en": "Never jump a frozen battery, and never push- or tow-start this car.",
            "ar": "لا تشغّلي بطارية متجمدة، ولا تشغّلي هذه السيارة بالدفع أو السحب أبدًا."
          },
          "lessons": [
            "L22"
          ],
          "steps": [
            {
              "en": "Never jump a frozen battery; keep flames/sparks away. Cars must not touch; set both parking brakes; switch off accessories.",
              "ar": "لا تشغّل بطارية متجمدة، وأبعد اللهب والشرر. يجب ألا تتلامس السيارتان، وشُدّ فرامل اليد في كلتيهما، وأطفئ الملحقات."
            },
            {
              "en": "Red lead: flat battery + to booster battery +.",
              "ar": "الكابل الأحمر: من موجب (+) البطارية الفارغة إلى موجب البطارية المساعدة."
            },
            {
              "en": "Black lead: booster battery – to an unpainted heavy metal part on your engine (engine mount bolt) — NOT the flat battery's – terminal.",
              "ar": "الكابل الأسود: من سالب (–) البطارية المساعدة إلى جزء معدني ثقيل غير مطلي في محركك (مسمار قاعدة المحرك) — وليس إلى سالب البطارية الفارغة."
            },
            {
              "en": "Start the helper car and run at moderate speed, then start yours.",
              "ar": "شغّل السيارة المساعدة على دوران متوسط، ثم شغّل سيارتك."
            },
            {
              "en": "Remove leads in exact reverse order.",
              "ar": "افصل الكابلات بالترتيب العكسي تماماً."
            }
          ]
        },
        {
          "id": "wont-start",
          "en": "Won't start: headlights dim means a flat battery; bright means check fuses.",
          "ar": "لا يشتغل: إذا خفتت الأنوار فالبطارية فارغة، وإذا بقيت قوية فافحصي الفيوزات.",
          "page": "10-16",
          "variant": "both",
          "title": {
            "en": "Car won't start",
            "ar": "السيارة لا تشتغل"
          },
          "what": {
            "en": "A quick test to find out why.",
            "ar": "اختبار سريع لمعرفة السبب."
          },
          "does": {
            "en": "The headlights tell you whether the battery is the problem.",
            "ar": "الأنوار الأمامية تخبرك إن كانت البطارية هي المشكلة."
          },
          "how": [
            {
              "en": "Turn on the headlights and try to start.",
              "ar": "شغّلي الأنوار الأمامية وحاولي التشغيل."
            },
            {
              "en": "Lights dim or go out: the battery is flat or its terminals are loose.",
              "ar": "خفتت الأنوار أو انطفأت: البطارية فارغة أو أطرافها مرتخية."
            },
            {
              "en": "Lights stay bright: check the fuses, then see a workshop.",
              "ar": "بقيت الأنوار قوية: افحصي الفيوزات، ثم راجعي الورشة."
            },
            {
              "en": "Engine turns but won't fire: check fuel and battery.",
              "ar": "المحرك يدور ولا يشتغل: افحصي الوقود والبطارية."
            }
          ],
          "lessons": [
            "L22"
          ]
        },
        {
          "id": "overheating",
          "en": "Overheating: A/C off, pull over; steam means engine off; never open the radiator cap hot.",
          "ar": "ارتفاع الحرارة: أطفئي المكيّف وتوقفي، والبخار يعني أطفئي المحرك، ولا تفتحي غطاء الرديتر ساخنًا.",
          "page": "10-17",
          "variant": "both",
          "urgency": "stop",
          "icon": "icons/coolant_hot.png",
          "title": {
            "en": "Engine overheating",
            "ar": "ارتفاع حرارة المحرك"
          },
          "looks": {
            "en": "A thermometer in waves, red; or steam from the bonnet.",
            "ar": "ميزان حرارة فوق أمواج، باللون الأحمر، أو بخار من غطاء المحرك."
          },
          "means": {
            "en": "The engine is too hot. Carrying on can seriously damage it.",
            "ar": "المحرك ساخن جدًا، والاستمرار قد يتلفه بشدة."
          },
          "todo": {
            "en": "Turn off the A/C and park somewhere safe, then follow the steps.",
            "ar": "أطفئي المكيّف وقفي في مكان آمن، ثم اتبعي الخطوات."
          },
          "how": [
            {
              "en": "Turn off the A/C and park in a safe place.",
              "ar": "أطفئي المكيّف وقفي في مكان آمن."
            },
            {
              "en": "If you see or hear steam, switch off at once and **don't open the bonnet** until it stops.",
              "ar": "إذا رأيتِ أو سمعتِ بخارًا، أطفئي المحرك فورًا و**لا تفتحي الغطاء** حتى يتوقف."
            },
            {
              "en": "No steam: let the engine idle a few minutes until the light goes off.",
              "ar": "بدون بخار: اتركي المحرك يعمل دون حركة بضع دقائق حتى ينطفئ الضوء."
            },
            {
              "en": "If it doesn't go off: switch off, check the belt and coolant tank, and look for leaks.",
              "ar": "إذا لم ينطفئ: أطفئي المحرك، وافحصي السير وخزان التبريد، وابحثي عن تسرب."
            },
            {
              "en": "Never open the radiator cap while hot.",
              "ar": "لا تفتحي غطاء الرديتر وهو ساخن أبدًا."
            },
            {
              "en": "If unsure, call a Suzuki workshop.",
              "ar": "إذا لم تكوني متأكدة، اتصلي بورشة سوزوكي."
            }
          ],
          "lessons": [
            "L22",
            "L23"
          ],
          "steps": [
            {
              "en": "Turn off the A/C and park in a safe place.",
              "ar": "أطفئ المكيف وتوقف في مكان آمن."
            },
            {
              "en": "If steam is visible or audible, switch the engine off at once and do NOT open the bonnet until it stops.",
              "ar": "إذا ظهر بخار أو سُمع صوته فأطفئ المحرك فوراً ولا تفتح الغطاء حتى يتوقف."
            },
            {
              "en": "Otherwise idle for a few minutes until the warning light goes off / gauge returns between C and H.",
              "ar": "وإلا فاترك المحرك يدور على الخمول بضع دقائق حتى تنطفئ اللمبة أو يعود المؤشر بين C وH."
            },
            {
              "en": "If not, switch off: check the belt and the coolant reservoir; look for leaks. Never open the radiator cap while hot.",
              "ar": "إن لم يحدث، أطفئ المحرك: افحص السير وخزان سائل التبريد وابحث عن تسرب. لا تفتح غطاء الرديتر وهو ساخن."
            },
            {
              "en": "If unsure, contact a Maruti Suzuki workshop.",
              "ar": "إذا لم تكن متأكداً فاتصل بورشة ماروتي سوزوكي."
            }
          ]
        },
        {
          "id": "towing",
          "en": "Towing: use a professional tow truck, ideally a flatbed.",
          "ar": "السحب: استخدمي سطحة متخصصة، ويفضّل السطحة المسطحة.",
          "page": "10-1",
          "variant": "both",
          "title": {
            "en": "Towing",
            "ar": "سحب السيارة"
          },
          "what": {
            "en": "How to get the car moved if it can't be driven.",
            "ar": "كيف تُنقل السيارة إذا لم يمكن قيادتها."
          },
          "does": {
            "en": "Use a professional tow truck. Your guide advises a **flatbed** so the front wheels don't roll on the road. Rope towing (from the front towing eye) is for emergencies only, on paved roads, max ==30== km/h and ==30== km, with hazards on.",
            "ar": "استخدمي سطحة متخصصة. ودليلك ينصح **بالسطحة المسطحة** حتى لا تدور العجلات الأمامية على الطريق. السحب بالحبل (من حلقة السحب الأمامية) للطوارئ فقط، على طرق معبّدة، وبحد أقصى ==30== كم/س و==30== كم، والإشارات التحذيرية تعمل."
          },
          "tip": {
            "en": "Never tow-start this car.",
            "ar": "لا تشغّلي هذه السيارة بالسحب أبدًا."
          },
          "lessons": [
            "L22"
          ]
        },
        {
          "id": "warning-triangle",
          "en": "Hazards on first, then place the triangle ==50==–==100== m behind the car.",
          "ar": "شغّلي الإشارات التحذيرية أولًا، ثم ضعي المثلث على بعد ==50== إلى ==100== م خلف السيارة.",
          "page": "10-18",
          "variant": "both",
          "title": {
            "en": "Warning triangle",
            "ar": "مثلث التحذير"
          },
          "what": {
            "en": "A folding red reflective triangle kept in the car.",
            "ar": "مثلث أحمر عاكس قابل للطي في السيارة."
          },
          "does": {
            "en": "It warns traffic behind that your car is stopped ahead.",
            "ar": "ينبّه السيارات القادمة من الخلف أن سيارتك متوقفة أمامهم."
          },
          "how": [
            {
              "en": "Switch on the hazard lights before you get out.",
              "ar": "شغّلي الإشارات التحذيرية قبل أن تنزلي."
            },
            {
              "en": "Unfold the triangle, lock the arms and open the stand.",
              "ar": "افتحي المثلث، وثبّتي أضلاعه، وافتحي القاعدة."
            },
            {
              "en": "Place it ==50==–==100== m behind the car, reflective side facing traffic.",
              "ar": "ضعيه على بعد ==50== إلى ==100== م خلف السيارة، والجهة العاكسة نحو السيارات."
            }
          ],
          "lessons": [
            "L22"
          ]
        }
      ]
    }
  ]
};
