/* Diagram data. Each entry pairs the UK original (reference image from the Highway Code) with a
   KSA redraw for right-hand traffic and left-hand-drive cars, plus an image-generation prompt.
   draw(L) returns SVG markup; L(en, ar) picks the label language. status: "redrawn" | "pending". */
(function () {
  var G = "#cfe3c8", R = "#8f969c", LN = "#ffffff", OK = "#1b7f4d", BAD = "#c62828", BLUE = "#1e63b5", ORANGE = "#d9730d";
  function svg(w, h, body) {
    return '<svg viewBox="0 0 ' + w + ' ' + h + '" role="img" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">' +
      '<defs>' + ["ok", "bad", "blue", "orange", "dark"].map(function (n, i) {
        var c = [OK, BAD, BLUE, ORANGE, "#222"][i];
        return '<marker id="ah-' + n + '" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="' + c + '"/></marker>';
      }).join("") + '</defs><rect width="' + w + '" height="' + h + '" fill="' + G + '"/>' + body + '</svg>';
  }
  function rect(x, y, w, h, f, extra) { return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + (f || R) + '" ' + (extra || "") + '/>'; }
  function line(x1, y1, x2, y2, dash, col, sw) { return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + (col || LN) + '" stroke-width="' + (sw || 2) + '"' + (dash ? ' stroke-dasharray="' + dash + '"' : "") + '/>'; }
  // Car drawn pointing east; rot in degrees (0 east, 90 south, -90 north, 180 west).
  function car(x, y, rot, col, o) {
    o = o || {}; var len = o.len || 34, wd = o.wd || 16;
    var s = '<g transform="translate(' + x + ' ' + y + ') rotate(' + rot + ')">' +
      '<rect x="' + (-len / 2) + '" y="' + (-wd / 2) + '" width="' + len + '" height="' + wd + '" rx="4" fill="' + col + '" stroke="#222" stroke-width="1"/>' +
      '<rect x="' + (len / 2 - 13) + '" y="' + (-wd / 2 + 2) + '" width="6" height="' + (wd - 4) + '" rx="1.5" fill="#dff1ff" opacity=".9"/>';
    if (o.ind === "L") s += '<circle cx="' + (len / 2 - 2) + '" cy="' + (-wd / 2) + '" r="3.2" fill="#ffb300" stroke="#7a5200" stroke-width=".6"/><circle cx="' + (-len / 2 + 2) + '" cy="' + (-wd / 2) + '" r="3.2" fill="#ffb300" stroke="#7a5200" stroke-width=".6"/>';
    if (o.ind === "R") s += '<circle cx="' + (len / 2 - 2) + '" cy="' + (wd / 2) + '" r="3.2" fill="#ffb300" stroke="#7a5200" stroke-width=".6"/><circle cx="' + (-len / 2 + 2) + '" cy="' + (wd / 2) + '" r="3.2" fill="#ffb300" stroke="#7a5200" stroke-width=".6"/>';
    if (o.brake) s += '<rect x="' + (-len / 2 - 1) + '" y="' + (-wd / 2 + 1) + '" width="3" height="' + (wd - 2) + '" fill="#e53935"/>';
    return s + '</g>';
  }
  function path(d, col, o) {
    o = o || {}; var n = { [OK]: "ok", [BAD]: "bad", [BLUE]: "blue", [ORANGE]: "orange" }[col] || "dark";
    return '<path d="' + d + '" fill="none" stroke="' + col + '" stroke-width="' + (o.sw || 4) + '" stroke-linecap="round"' + (o.dash ? ' stroke-dasharray="' + o.dash + '"' : "") + ' marker-end="url(#ah-' + n + ')" opacity="' + (o.op || 0.9) + '"/>';
  }
  function label(x, y, t, o) {
    o = o || {}; var fs = o.fs || 12, w = Math.max(30, t.length * fs * 0.58 + 12);
    return '<g><rect x="' + (x - w / 2) + '" y="' + (y - fs - 3) + '" width="' + w + '" height="' + (fs + 9) + '" rx="4" fill="' + (o.bg || "#ffffff") + '" opacity=".93" stroke="' + (o.col || "#333") + '" stroke-width=".8"/>' +
      '<text x="' + x + '" y="' + y + '" text-anchor="middle" font-size="' + fs + '" font-family="system-ui,Segoe UI,Tahoma,Arial,sans-serif" font-weight="600" fill="' + (o.col || "#222") + '">' + t + '</text></g>';
  }
  function mark(x, y, good) { return '<g><circle cx="' + x + '" cy="' + y + '" r="10" fill="' + (good ? OK : BAD) + '"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" font-size="14" font-weight="700" fill="#fff" font-family="Arial">' + (good ? "✓" : "✕") + '</text></g>'; }
  function ped(x, y) { return '<g><circle cx="' + x + '" cy="' + y + '" r="5" fill="#6a1b9a" stroke="#fff" stroke-width="1"/><circle cx="' + x + '" cy="' + y + '" r="9" fill="none" stroke="#6a1b9a" stroke-width="1.2" stroke-dasharray="2 2"/></g>'; }
  function hroad(y, h, w) { return rect(0, y, w || 400, h) + line(0, y + h / 2, w || 400, y + h / 2, "12 10"); }

  var D = [];
  D.push({
    id: "dg-126", rule: 126, uk: "img/ukd/d20.jpg", status: "redrawn",
    en: "Two-second gap", ar: "فاصل الثانيتين",
    capEn: "Pick a fixed point such as a sign. When the vehicle ahead passes it, you should take at least two seconds to reach it. Double the gap on wet roads.",
    capAr: "اختر نقطة ثابتة مثل لوحة. عندما تتجاوزها المركبة التي أمامك يجب أن تحتاج ثانيتين على الأقل للوصول إليها. ضاعف الفاصل على الطرق المبتلة.",
    note: { en: "The Moroor handbook teaches the same two-second rule (p.190).", ar: "يعلم دليل المرور قاعدة الثانيتين نفسها (ص 190)." },
    prompt: "Top-down flat vector diagram of a two-lane two-way road in Saudi Arabia, right-hand traffic. Two cars travel in the right-hand lane in the same direction with a long gap between them; a roadside sign post stands level with the car in front; a bracket between the cars is labelled '2 seconds'. One oncoming car in the opposite lane. Left-hand-drive cars, clean driving-manual style, muted green verges, grey asphalt, white dashed centre line, no text other than the label.",
    draw: function (L) {
      return svg(400, 240, hroad(70, 110) + car(110, 152, 0, "#2e7d32") + car(300, 152, 0, "#546e7a", { brake: false }) + car(215, 98, 180, "#b0bec5") +
        line(300, 182, 300, 215, null, "#555", 3) + rect(288, 205, 24, 16, "#1e63b5", 'rx="2"') +
        '<path d="M128 132 L128 124 L282 124 L282 132" fill="none" stroke="#222" stroke-width="1.6"/>' + label(205, 120, L("2 seconds", "ثانيتان")) +
        label(110, 205, L("You", "أنت"), { col: OK }) + label(318, 60, L("Fixed point", "نقطة ثابتة"), { fs: 11 }));
    }
  });
  D.push({
    id: "dg-151", rule: 151, uk: "img/ukd/d22.jpg", status: "redrawn",
    en: "Do not block a side road", ar: "لا تغلق مدخل طريق جانبي",
    capEn: "In slow-moving traffic, stop before the mouth of a side road on your right so vehicles can enter and leave.",
    capAr: "في الزحام البطيء توقف قبل مدخل الطريق الجانبي على يمينك لتتمكن المركبات من الدخول والخروج.",
    prompt: "Top-down flat vector diagram, Saudi Arabia, right-hand traffic. A queue of cars in the right-hand lane of a two-way road; a side road joins from the right. One green car has stopped short, leaving the mouth of the side road clear, while a car waits to emerge from the side road. Green tick beside the waiting green car. Left-hand-drive cars, driving-manual style.",
    draw: function (L) {
      return svg(400, 250, hroad(50, 110) + rect(180, 160, 64, 90) + line(212, 160, 212, 250, "10 8") +
        car(360, 132, 0, "#78909c", { brake: true }) + car(318, 132, 0, "#90a4ae", { brake: true }) + car(276, 132, 0, "#607d8b", { brake: true }) +
        car(140, 132, 0, "#2e7d32", { brake: true }) + car(228, 205, -90, "#1e63b5", { ind: "R" }) + car(120, 78, 180, "#b0bec5") +
        '<rect x="180" y="106" width="64" height="54" fill="none" stroke="' + OK + '" stroke-width="2" stroke-dasharray="6 4"/>' + mark(140, 105, true) +
        label(212, 98, L("Keep clear", "أبق المدخل خاليا"), { col: OK, fs: 11 }));
    }
  });
  D.push({
    id: "dg-159", rule: 159, uk: "img/ukd/d24.jpg", status: "redrawn",
    en: "Check the blind spot before moving off", ar: "تحقق من النقطة العمياء قبل الانطلاق",
    capEn: "Parked at the right-hand kerb: use the mirrors, then look over your LEFT shoulder, the side the traffic passes, before you signal and move off.",
    capAr: "عند الوقوف بجانب الرصيف الأيمن: استخدم المرايا ثم انظر فوق كتفك الأيسر، وهو الجانب الذي تمر منه المركبات، قبل إعطاء الإشارة والانطلاق.",
    note: { en: "Mirrored from the UK, where the car is at the left kerb and the check is over the right shoulder. The handbook covers the blind spot on p.110.", ar: "معكوس عن بريطانيا حيث تقف السيارة عند الرصيف الأيسر ويكون النظر فوق الكتف الأيمن. يتناول الدليل النقطة العمياء في ص 110." },
    prompt: "Top-down flat vector diagram, Saudi Arabia, right-hand traffic. A left-hand-drive car is parked at the right-hand kerb, about to move off. Light blue wedges show the areas seen in the interior and left door mirrors behind the car; an orange wedge beside the rear-left of the car shows the blind spot, with a motorcyclist inside it. An arrow from the driver's head points back over the left shoulder. Driving-manual style.",
    draw: function (L) {
      return svg(400, 240, hroad(60, 120) + rect(0, 180, 400, 8, "#b9bfc4") +
        '<polygon points="205,160 0,110 0,172" fill="#64b5f6" opacity=".45"/>' +
        '<polygon points="212,158 120,150 95,95 190,112" fill="#fb8c00" opacity=".6"/>' +
        car(225, 168, 0, "#2e7d32", { ind: "L" }) + car(140, 128, 0, "#6a1b9a", { len: 22, wd: 9 }) +
        '<path d="M222 163 Q 200 135 168 128" fill="none" stroke="#222" stroke-width="2" stroke-dasharray="4 3" marker-end="url(#ah-dark)"/>' +
        label(120, 82, L("Blind spot", "النقطة العمياء"), { col: ORANGE }) + label(60, 210, L("Seen in mirrors", "ما تظهره المرايا"), { col: BLUE, fs: 11 }) +
        label(300, 215, L("Look over LEFT shoulder", "انظر فوق الكتف الأيسر"), { col: OK, fs: 11 }));
    }
  });
  D.push({
    id: "dg-164", rule: 164, uk: "img/ukd/d26.jpg", status: "redrawn",
    en: "Overtaking: do not cut in", ar: "التجاوز: لا تعد إلى مسارك مبكرا",
    capEn: "Overtake on the left. Move back to the right only when you are well clear of the vehicle you passed.",
    capAr: "تجاوز من اليسار. عد إلى اليمين فقط بعد أن تبتعد مسافة كافية عن المركبة التي تجاوزتها.",
    note: { en: "Mirrored from the UK, where overtaking is on the right.", ar: "معكوس عن بريطانيا حيث التجاوز من اليمين." },
    prompt: "Top-down flat vector diagram, Saudi Arabia, right-hand traffic, two-lane two-way road. A green car overtakes a long lorry by moving into the left lane. A long green arrow shows the correct path returning to the right lane well ahead of the lorry; a short red arrow shows the wrong path cutting in just in front of the lorry. Left-hand-drive vehicles, driving-manual style.",
    draw: function (L) {
      return svg(400, 230, hroad(60, 110) + car(190, 142, 0, "#eceff1", { len: 78, wd: 20 }) + car(50, 142, 0, "#2e7d32", { ind: "L" }) +
        path("M70 142 C 105 142, 110 90, 150 90 L 285 90 C 325 90, 330 142, 372 142", OK) +
        path("M150 96 L 222 96 C 238 96, 240 130, 252 140", BAD, { sw: 3.5 }) +
        mark(330, 80, true) + mark(262, 118, false) + label(200, 200, L("Overtake on the left", "التجاوز من اليسار"), { fs: 11 }));
    }
  });
  D.push({
    id: "dg-170", rule: 170, uk: "img/ukd/d01.jpg", status: "redrawn",
    en: "Give way to pedestrians at a junction", ar: "أعط الأولوية للمشاة عند التقاطع",
    capEn: "Turning into a side road: wait for pedestrians who are crossing or waiting to cross the road you are turning into.",
    capAr: "عند الانعطاف إلى طريق جانبي: انتظر المشاة العابرين أو المنتظرين لعبور الطريق الذي تنعطف إليه.",
    note: { en: "Highway Code Rules H2 and 170. The handbook's pedestrian rules are on p.79 to 81.", ar: "القاعدتان H2 و170 من نظام الطرق البريطاني. قواعد المشاة في الدليل في ص 79 إلى 81." },
    prompt: "Top-down flat vector diagram, Saudi Arabia, right-hand traffic. A T-junction: a main road with a side road on the right. A green left-hand-drive car with its right indicator on waits on the main road before turning right, while a pedestrian crosses the mouth of the side road. A dashed arrow shows the car's intended path into the right-hand lane of the side road. Driving-manual style.",
    draw: function (L) {
      return svg(400, 250, hroad(40, 110) + rect(170, 150, 64, 100) + line(202, 150, 202, 250, "10 8") +
        car(140, 122, 0, "#2e7d32", { ind: "R", brake: true }) + path("M160 124 C 185 126, 186 150, 186 230", OK, { dash: "7 5", sw: 3 }) +
        ped(215, 168) + '<path d="M240 168 L 166 168" stroke="#6a1b9a" stroke-width="2" stroke-dasharray="5 4" fill="none" marker-end="url(#ah-dark)"/>' +
        label(140, 92, L("Wait", "انتظر"), { col: OK }) + label(300, 190, L("Pedestrian has priority", "الأولوية للمشاة"), { fs: 11, col: "#6a1b9a" }));
    }
  });
  D.push({
    id: "dg-174", rule: 174, uk: "img/ukd/d29.jpg", status: "redrawn",
    en: "Box junction", ar: "تقاطع الصندوق الأصفر",
    capEn: "Enter the box only if your exit is clear. You may wait in the box to turn LEFT if only oncoming traffic is stopping you.",
    capAr: "ادخل الصندوق فقط إذا كان مخرجك خاليا. يمكنك الانتظار داخل الصندوق للانعطاف يسارا إذا كان ما يمنعك هو المركبات القادمة فقط.",
    note: { en: "Mirrored from the UK, where the turn across oncoming traffic is the right turn.", ar: "معكوس عن بريطانيا حيث الانعطاف عبر الاتجاه المقابل هو الانعطاف يمينا." },
    prompt: "Top-down flat vector diagram, Saudi Arabia, right-hand traffic. A crossroads with a yellow criss-cross box junction. A green left-hand-drive car waits inside the box to turn left, held only by an oncoming car; green tick. A red car is stuck inside the box behind a queue because its exit is blocked; red cross. Driving-manual style.",
    draw: function (L) {
      var b = rect(0, 80, 400, 100) + rect(150, 0, 100, 260) + line(0, 130, 150, 130, "12 10") + line(250, 130, 400, 130, "12 10") + line(200, 0, 200, 80, "12 10") + line(200, 180, 200, 260, "12 10");
      var grid = '<g stroke="#f4c20d" stroke-width="2.2"><rect x="150" y="80" width="100" height="100" fill="none"/>';
      for (var i = 1; i < 5; i++) grid += '<line x1="' + (150 + i * 20) + '" y1="80" x2="150" y2="' + (80 + i * 20) + '"/><line x1="' + (150 + i * 20) + '" y1="180" x2="250" y2="' + (80 + i * 20) + '"/><line x1="' + (250 - i * 20) + '" y1="80" x2="250" y2="' + (80 + i * 20) + '"/><line x1="' + (250 - i * 20) + '" y1="180" x2="150" y2="' + (80 + i * 20) + '"/>';
      grid += '<line x1="150" y1="80" x2="250" y2="180"/><line x1="250" y1="80" x2="150" y2="180"/></g>';
      return svg(400, 260, b + grid + car(176, 110, 70, "#2e7d32", { ind: "L" }) + path("M180 128 C 188 150, 215 156, 300 156", OK, { dash: "7 5", sw: 3 }) +
        car(226, 222, -90, "#90a4ae") + path("M226 200 L 226 150", "#222", { sw: 2 }) +
        car(226, 104, 180, "#c62828", { brake: true }) + car(128, 104, 180, "#78909c", { brake: true }) + car(88, 104, 180, "#90a4ae", { brake: true }) + car(48, 104, 180, "#607d8b", { brake: true }) +
        mark(158, 66, true) + mark(240, 66, false) + label(320, 206, L("Oncoming", "قادم من المقابل"), { fs: 11 }) + label(80, 66, L("Exit blocked", "المخرج مغلق"), { fs: 11, col: BAD }));
    }
  });
  D.push({
    id: "dg-180", rule: 180, uk: "img/ukd/d31.jpg", status: "redrawn",
    en: "Position for turning left", ar: "الموضع الصحيح للانعطاف يسارا",
    capEn: "Turning left across oncoming traffic: signal left, position just to the right of the centre line, and wait for a safe gap. Leave room for traffic to pass on your right.",
    capAr: "عند الانعطاف يسارا عبر الاتجاه المقابل: أعط إشارة اليسار وقف إلى يمين خط المنتصف مباشرة وانتظر فاصلا آمنا. اترك مجالا لمرور المركبات عن يمينك.",
    note: { en: "Mirrored from the UK right turn. The handbook describes the wide left turn on p.124.", ar: "معكوس عن الانعطاف يمينا في بريطانيا. يصف الدليل الانعطاف نحو اليسار في ص 124." },
    prompt: "Top-down flat vector diagram, Saudi Arabia, right-hand traffic. A main road with a side road on the left. A green left-hand-drive car with its left indicator on waits just right of the centre line to turn left; an oncoming car approaches; a following car passes the waiting car on its right. Dashed arrow shows the turn into the side road. Driving-manual style.",
    draw: function (L) {
      return svg(400, 250, rect(170, 0, 64, 100) + line(202, 0, 202, 100, "10 8") + hroad(100, 110) +
        car(170, 167, 0, "#2e7d32", { ind: "L", brake: true }) + path("M190 165 C 214 160, 218 130, 218 20", OK, { dash: "7 5", sw: 3 }) +
        car(310, 128, 180, "#90a4ae") + path("M290 128 L 245 128", "#222", { sw: 2 }) +
        car(95, 196, 0, "#1e63b5") + path("M115 197 L 250 197", BLUE, { sw: 3 }) +
        label(120, 150, L("Just right of centre", "يمين خط المنتصف مباشرة"), { fs: 11, col: OK }) + label(320, 232, L("Room to pass on the right", "مجال للمرور عن اليمين"), { fs: 11, col: BLUE }));
    }
  });
  D.push({
    id: "dg-181", rule: 181, uk: "img/ukd/d32.jpg", status: "redrawn",
    en: "Two cars turning left across each other", ar: "سيارتان متقابلتان تنعطفان يسارا",
    capEn: "Left panel: pass driver's side to driver's side and turn behind the other car, which keeps your view clear. Right panel: turning in front of each other blocks your view of oncoming traffic, so take extra care.",
    capAr: "اللوحة اليسرى: مر بحيث يكون جانب السائق مقابل جانب السائق وانعطف خلف السيارة الأخرى فتبقى الرؤية واضحة. اللوحة اليمنى: الانعطاف أمام السيارة الأخرى يحجب رؤية القادمين، فكن أكثر حذرا.",
    note: { en: "Mirrored from Rule 181 (UK: right side to right side). The handbook does not show this manoeuvre; treat it as UK guidance applied to right-hand traffic.", ar: "معكوس عن القاعدة 181 (في بريطانيا: الجانب الأيمن مقابل الأيمن). الدليل لا يعرض هذه المناورة، فهي إرشاد بريطاني مطبق على السير على اليمين.", check: true },
    prompt: "Two-panel top-down flat vector diagram, Saudi Arabia, right-hand traffic, crossroads. Panel 1: two left-hand-drive cars from opposite directions both turning left, passing driver's side to driver's side and turning behind each other. Panel 2: the same two cars turning left in front of each other, paths crossing. Coloured curved arrows for each car. Driving-manual style.",
    draw: function (L) {
      function base(ox) { return '<g transform="translate(' + ox + ' 0)">' + rect(0, 80, 300, 100) + rect(100, 0, 100, 260) + line(0, 130, 100, 130, "12 10") + line(200, 130, 300, 130, "12 10") + line(150, 0, 150, 80, "12 10") + line(150, 180, 150, 260, "12 10"); }
      var p1 = base(0) + car(152, 144, 0, "#2e7d32", { ind: "L" }) + car(148, 116, 180, "#1e63b5", { ind: "L" }) +
        path("M172 143 C 186 140, 178 100, 178 20", OK, { sw: 3 }) + path("M128 117 C 114 120, 122 160, 122 240", BLUE, { sw: 3 }) + mark(30, 30, true) + '</g>';
      var p2 = base(310) + car(118, 144, 0, "#2e7d32", { ind: "L" }) + car(182, 116, 180, "#1e63b5", { ind: "L" }) +
        path("M138 142 C 158 138, 172 110, 176 20", OK, { sw: 3 }) + path("M162 118 C 142 122, 128 150, 124 240", BLUE, { sw: 3 }) +
        '<circle cx="150" cy="130" r="13" fill="none" stroke="' + BAD + '" stroke-width="2" stroke-dasharray="4 3"/>' + '</g>';
      return svg(610, 260, p1 + rect(300, 0, 10, 260, "#fff") + p2 +
        label(150, 250, L("Turn behind each other", "الانعطاف خلف الأخرى"), { fs: 11, col: OK }) + label(460, 250, L("Turn in front: view blocked", "الانعطاف أمام الأخرى: الرؤية محجوبة"), { fs: 11, col: BAD }));
    }
  });
  D.push({
    id: "dg-185", rule: 185, uk: "img/ukd/d34.jpg", status: "redrawn",
    en: "Roundabout procedure", ar: "السير في الدوار",
    capEn: "Roundabouts run anticlockwise. First exit (right): right lane, signal right. Straight on: choose the lane shown by markings, signal right after the exit before yours. Last exit or U-turn (left): left lane, signal left, then signal right after the exit before yours.",
    capAr: "السير في الدوار عكس عقارب الساعة. المخرج الأول (يمين): المسار الأيمن مع إشارة اليمين. إلى الأمام: اختر المسار وفق العلامات ثم أعط إشارة اليمين بعد المخرج الذي يسبق مخرجك. المخرج الأخير أو الدوران للخلف (يسار): المسار الأيسر مع إشارة اليسار، ثم إشارة اليمين بعد المخرج الذي يسبق مخرجك.",
    note: { en: "Mirrored from Rule 185 to 186. Handbook p.121 to 122 gives the same lane and signalling plan, and p.155 says to give priority to vehicles already on the roundabout.", ar: "معكوس عن القاعدتين 185 و186. يعرض الدليل خطة المسارات والإشارات نفسها في ص 121 و122، وينص في ص 155 على إعطاء الأولوية للمركبات التي تسير داخل الدوار." },
    prompt: "Top-down flat vector diagram of a four-arm roundabout in Saudi Arabia, right-hand traffic, anticlockwise circulation. Three coloured paths from the bottom entry: green to the first exit on the right using the right lane; blue straight ahead; orange around to the left exit using the left lane. Small arrows on the central island show anticlockwise flow. Left-hand-drive cars at the start of each path. Driving-manual style.",
    draw: function (L) {
      var s = rect(170, 0, 60, 260) + rect(0, 100, 400, 60) + '<circle cx="200" cy="130" r="86" fill="' + R + '"/><circle cx="200" cy="130" r="38" fill="#a5d6a7" stroke="#fff" stroke-width="3"/>' +
        '<circle cx="200" cy="130" r="62" fill="none" stroke="#fff" stroke-width="1.5" stroke-dasharray="8 8"/>' +
        line(200, 0, 200, 44, "8 6") + line(200, 216, 200, 260, "8 6") + line(0, 130, 114, 130, "8 6") + line(286, 130, 400, 130, "8 6") + line(215, 216, 215, 260, "4 5", "#fff", 1);
      s += '<path d="M222 130 A 22 22 0 1 0 200 152" fill="none" stroke="#1b5e20" stroke-width="3" marker-end="url(#ah-dark)"/>';
      s += path("M224 256 L 224 208 A 76 76 0 0 0 270 150 L 394 150", OK, { sw: 4 });
      s += path("M210 256 L 210 196 A 64 64 0 0 0 216 68 L 216 6", BLUE, { sw: 4 });
      s += path("M204 256 L 204 186 A 56 56 0 1 0 146 112 L 6 112", ORANGE, { sw: 4 });
      s += label(330, 178, L("1st exit", "المخرج الأول"), { fs: 11, col: OK }) + label(262, 22, L("Straight on", "إلى الأمام"), { fs: 11, col: BLUE }) + label(60, 92, L("Left exit", "المخرج الأيسر"), { fs: 11, col: ORANGE }) +
        label(100, 236, L("Anticlockwise", "عكس عقارب الساعة"), { fs: 11 });
      return svg(400, 260, s);
    }
  });
  D.push({
    id: "dg-192", rule: 192, uk: "img/ukd/d36.jpg", status: "redrawn",
    en: "Keep the crossing clear", ar: "أبق معبر المشاة خاليا",
    capEn: "In queuing traffic, do not stop on a pedestrian crossing. Wait behind it until there is room for your whole car on the far side.",
    capAr: "في الطوابير لا تتوقف على معبر المشاة. انتظر قبله حتى يتوفر مكان لسيارتك كاملة بعده.",
    note: { en: "The handbook states the driver must not go past the pedestrian crossing area when stopped (p.130).", ar: "ينص الدليل على أن السائق يجب ألا يتجاوز منطقة عبور المشاة عند التوقف (ص 130)." },
    prompt: "Top-down flat vector diagram, Saudi Arabia, right-hand traffic. A zebra crossing across a two-way road. Traffic is queuing in the right-hand lane beyond the crossing; a green left-hand-drive car has stopped before the crossing, leaving it clear, with a green tick; a pedestrian is on the crossing. Driving-manual style.",
    draw: function (L) {
      var z = ""; for (var i = 0; i < 9; i++) z += rect(196, 64 + i * 12.2, 30, 7, "#fff");
      return svg(400, 230, hroad(60, 110) + z + car(366, 142, 0, "#78909c", { brake: true }) + car(322, 142, 0, "#90a4ae", { brake: true }) + car(278, 142, 0, "#607d8b", { brake: true }) +
        car(160, 142, 0, "#2e7d32", { brake: true }) + ped(211, 120) + mark(160, 116, true) + car(110, 88, 180, "#b0bec5") +
        label(211, 200, L("Crossing kept clear", "المعبر خال"), { fs: 11, col: OK }));
    }
  });
  // Diagram-type illustrations not redrawn yet: UK original plus a prompt for the KSA version.
  [
    ["dg-h3", "H3", "d02", "Wait for the cyclist before turning", "انتظر راكب الدراجة قبل الانعطاف", "Top-down flat vector diagram, Saudi Arabia, right-hand traffic. A left-hand-drive car waits to turn right into a side road while a cyclist travelling straight ahead on its right passes the junction first. Driving-manual style."],
    ["dg-119", 119, "d16", "Skid: steer into it", "الانزلاق: وجه المقود في اتجاه الانزلاق", "Top-down flat vector diagram of a left-hand-drive car whose rear is sliding to the right on a right-hand-traffic road; an arrow shows the driver steering to the right to correct the skid. Driving-manual style."],
    ["dg-153", 153, "d23", "Traffic-calming chicane", "تضييق لتهدئة السرعة", "Top-down flat vector diagram, Saudi Arabia, right-hand traffic. A residential street with alternating kerb build-outs forming a chicane; one car waits while an oncoming car passes through. Driving-manual style."],
    ["dg-173", 173, "d28", "Do not obstruct a dual carriageway when crossing", "لا تعق الطريق المزدوج عند العبور", "Top-down flat vector diagram, Saudi Arabia, right-hand traffic. A long vehicle crossing a dual carriageway waits because the central reservation is too short for it; a car fits in the gap. Driving-manual style."],
    ["dg-182", 182, "d33", "Do not cut in on cyclists when turning", "لا تقطع الطريق على راكب الدراجة عند الانعطاف", "Two-panel top-down diagram, Saudi Arabia, right-hand traffic. Wrong: a car turning right cuts across a cyclist on its right. Right: the car holds back and turns after the cyclist has passed. Driving-manual style."],
    ["dg-190", 190, "d35", "Double mini-roundabouts", "دواران صغيران متتاليان", "Top-down flat vector diagram, Saudi Arabia, right-hand traffic. Two mini-roundabouts close together with anticlockwise arrows; a car's path treats each roundabout separately. Driving-manual style."],
    ["dg-211", 211, "d41", "Look for motorcyclists at junctions", "انتبه لراكبي الدراجات النارية عند التقاطعات", "Top-down flat vector diagram, Saudi Arabia, right-hand traffic. A car waiting to emerge from a side road; an approaching motorcyclist is partly hidden behind a car on the main road; a shaded sight line shows the hidden area. Driving-manual style."],
    ["dg-221", 221, "d43", "Large vehicles need extra room", "المركبات الكبيرة تحتاج مجالا إضافيا", "Top-down flat vector diagram, Saudi Arabia, right-hand traffic. An articulated lorry swings out to the left before turning right into a side road; a car holds well back. Driving-manual style."],
    ["dg-239", 239, "d45", "Check before opening your door", "تحقق قبل فتح الباب", "Top-down flat vector diagram, Saudi Arabia, right-hand traffic. A left-hand-drive car parked at the right-hand kerb; the driver's door on the traffic side opens as a cyclist approaches from behind. Driving-manual style."],
    ["dg-252", 252, "d46", "Wheels when parking on a hill", "اتجاه العجلات عند الوقوف على منحدر", "Two-panel diagram, Saudi Arabia, kerb on the right. Facing uphill: front wheels turned left, away from the kerb. Facing downhill: front wheels turned right, towards the kerb. Driving-manual style."]
  ].forEach(function (r) {
    D.push({ id: r[0], rule: r[1], uk: "img/ukd/" + r[2] + ".jpg", status: "pending", en: r[3], ar: r[4], prompt: r[5] });
  });
  window.DC_DATA = window.DC_DATA || {};
  window.DC_DATA.diagrams = D;
})();
