# Hazard perception: your own video clips

Put video files (MP4/WebM) in this folder and list them in `clips.json`.
They are added to the test after the 14 animated clips when the learner ticks
"Include my video clips" on the intro screen. Same click and scoring rules apply.

```json
[
  {
    "id": "riyadh-ring-road",
    "src": "hazard/riyadh-ring-road.mp4",
    "en": "Car changing lanes on the ring road",
    "ar": "سيارة تغيّر مسارها على الطريق الدائري",
    "capEn": "Optional review caption in English.",
    "capAr": "تعليق اختياري للمراجعة بالعربية.",
    "windows": [[21.5, 26.5]]
  }
]
```

- `src` is relative to the site root (the `public/` folder).
- `windows` are `[start, end]` in seconds of the video. Each window is split into
  five equal parts scoring 5, 4, 3, 2, 1. Use one window per developing hazard
  (two for a two-hazard clip). Start the window when the hazard first starts to
  develop; end it when the driver would have to brake or swerve.
- Keep clips around a minute, no audio needed. Start with an empty array `[]`.
