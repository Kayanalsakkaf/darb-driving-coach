# Darb · درب

A bilingual (Arabic / English) study companion for the Saudi driving licence. It walks a learner through the journey in order, as eight "exits":

1. **Get ready**: Absher, medical, enrolling at a Moroor-approved school
2. **Learn the theory**: every topic with the Moroor handbook (text + 264 extracted figures) and the matching Highway Code rules
3. **Know your car**: Suzuki Fronx controls, manual *and* automatic gearbox, warning lights, checks, emergencies
4. **Pass the theory test**: practice by topic and timed mocks
5. **Practical lessons**: 21 lessons (yard, then road), each listing the theory it covers
6. **Check your skills**: self-assessment on the DVSA 1–5 scale, plus checklists
7. **Book and sit the tests**: the Saudi route, with UK DVSA booking as tagged reference
8. **Licence and the law**

Every point carries a source tag: **Moroor** (Theoretical Driving Handbook, Trainee, 2022), **DVSA** (Highway Code / Ready to Pass, OGL v3.0), **Fronx manual**, or **Darb** (coaching notes).

## Run

```bash
npm install
npm run dev      # http://localhost:8765
npm run build    # static site in dist/
```

The build is static (hash routing, relative paths), so `dist/` can be hosted anywhere or opened from a web server.

## Data

- Data lives in the browser (`localStorage`, key `darb.v3`). One shared account per device; add learners in Settings. Export and import JSON in Settings. Imports from the earlier Darb (v2) are migrated automatically.
- Content: `src/data/` (`course.js` lessons, skills, checklists; `hb.js` Moroor text; `hc.js` Highway Code; `figures.js` Moroor figures and picture-only points; `car.js` Fronx manual content; `signs.js`, `questions.js`, `diagrams.js`, `meta.js`).
- Images: `public/img/pages` (handbook pages), `public/img/hbf` (handbook figures), `public/img/ksa|uk|ukd` (signs and diagrams), `public/car` (Fronx icons and figures).

## Notes

Unofficial private study tool. Not produced by or affiliated with the General Department of Traffic (Moroor). Handbook figure captions and English translations were written for this app, not quoted verbatim.
