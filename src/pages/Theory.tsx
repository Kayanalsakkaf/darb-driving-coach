import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Check, ArrowLeft, ArrowRight } from "lucide-react";
import { useStore } from "../lib/store";
import { COURSE, CHAPTERS, LESSONS, LES, SIGNS, SK, DIAGRAMS, META, HBU, FIGURES, FIG_POINTS } from "../lib/data";
import { TOPICS, topicTitle, figCount, firstLessonOf, topicNo } from "../lib/progress";
import { Checklist, ColourKey, Md, NextPrev, SrcTag, StageHead } from "../components/ui";
import { MoroorPane, DvsaPane, Diagram, HbFigure } from "../components/sources";
import { RuleCards, SUMMARIES } from "../components/rules";

const GROUPS: any[] = COURSE.groups;

/** First picture for a topic: a Moroor handbook figure, else a Highway Code diagram. */
function topicThumb(t: any): string | null {
  for (const h of t.hb) {
    const u = HBU[Array.isArray(h) ? h[0] : h]; if (!u) continue;
    const a = Array.isArray(h) ? h[1] : u.from, b = Array.isArray(h) ? h[2] : u.to;
    const f = FIGURES.find((f) => f.page >= a && f.page <= b); if (f) return f.src;
  }
  const r = t.hc.find((x: any) => Array.isArray(x));
  const d = r && DIAGRAMS.find((d) => typeof d.rule === "number" && d.rule >= r[0] && d.rule <= r[1]);
  if (d) return d.uk;
  // fall back to a sign tied to the topic's Highway Code rules, else the Fronx dashboard
  const rules = t.hc.filter((x: any) => Array.isArray(x));
  const sg = SIGNS.find((x) => (x.rules || []).some((n: number) => rules.some((r: any) => n >= r[0] && n <= r[1])));
  if (sg) return (sg.imgs.find((i: any) => i.o === "ksa") || sg.imgs[0]).src;
  return "car/figs/dashboard.webp";
}

const SETTINGS: [string, { en: string; ar: string }][] = [
  ["quiet", { en: "First lessons: quiet roads and car parks", ar: "الدروس الأولى: طرق هادئة ومواقف" }],
  ["road", { en: "Town and city roads", ar: "طرق المدينة" }],
  ["highway", { en: "Highways", ar: "الطرق السريعة" }],
  ["none", { en: "Know it for the test", ar: "اعرفه للاختبار" }],
];

export function TheoryIndex() {
  const { L, ar, p } = useStore();
  const settingOf = (t: any) => (firstLessonOf[t.id] ? LES[firstLessonOf[t.id]]?.where || "road" : "none");
  return (
    <main className="page">
      <StageHead id="theory" />
      <p className="measure lede-sm">{ar ? "الموضوعات مرتبة حسب ما ستواجهه أولا على الطريق، بنفس ترتيب الدروس العملية. ابدأ من رقم 1." : "Topics are in the order you meet them on the road, matching the practical lessons. Start at number 1."}</p>
      <div className="legend"><SrcTag src="moroor" /> {ar ? "المصدر الأساسي" : "primary source"} <SrcTag src="dvsa" /> {ar ? "مرجع داعم" : "supporting reference"}</div>
      {SETTINGS.map(([w, label]) => {
        const list = TOPICS.filter((t) => settingOf(t) === w);
        if (!list.length) return null;
        return (
          <section key={w} className="topic-group">
            <h2>{L(label)}</h2>
            <ol className="topic-cards">
              {list.map((t) => {
                const thumb = topicThumb(t), first = firstLessonOf[t.id], n = topicNo(t.id);
                const rules = SUMMARIES[t.id]?.length || 0;
                return (
                  <li key={t.id} className={p.read[t.id] ? "read" : ""}>
                    <Link to={"/theory/" + t.id}>
                      <span className="tc-pic">{thumb ? <img src={thumb} alt="" loading="lazy" /> : <span className="tc-nopic" />}<span className="tc-no">{n}</span></span>
                      <span className="tc-body">
                        <span className="t-name">{topicTitle(t, L)}</span>
                        <span className="tc-meta">{first ? <span className="first-l">{ar ? "أول مرة في" : "First in"} <b>{first}</b></span> : null}{rules ? <span>{rules} {ar ? "قاعدة" : "rules"}</span> : null}{figCount(t) ? <span>{figCount(t)} {ar ? "صورة" : "pictures"}</span> : null}</span>
                      </span>
                      {p.read[t.id] ? <span className="tc-done"><Check size={16} strokeWidth={3} /></span> : null}
                    </Link>
                  </li>
                );
              })}
            </ol>
          </section>
        );
      })}
      <section className="topic-group">
        <h2>{ar ? "الإشارات واللوحات" : "Signs and signals"}</h2>
        <p><Link className="btn" to="/theory/signs">{ar ? "كل الإشارات" : "All signs"} ({SIGNS.length})</Link></p>
      </section>
      <NextPrev id="theory" />
    </main>
  );
}

export function SignGallery({ cats }: { cats?: string[] }) {
  const { L, ar, p, set, user } = useStore();
  const [cat, setCat] = useState<string>(cats ? "all" : "regulatory");
  const list = SIGNS.filter((x) => (cats ? cats.includes(x.cat) : cat === "all" || x.cat === cat));
  const known = list.filter((x) => p.known[x.id]).length;
  return (
    <section className="signs">
      {!cats ? (
        <div className="seg" role="tablist">
          {Object.entries<any>(META.cats).map(([k, v]) => <button key={k} role="tab" aria-selected={cat === k} onClick={() => setCat(k)}>{L(v)}</button>)}
        </div>
      ) : null}
      <p className="muted">{known} / {list.length} {ar ? "معروفة" : "known"} · {ar ? "اضغط على الإشارة عندما تعرفها" : "Tap a sign once you know it"}</p>
      <ul className="sign-grid">
        {list.map((x) => {
          const on = !!p.known[x.id];
          return (
            <li key={x.id}>
              <button className={"sign-card" + (on ? " on" : "")} aria-pressed={on} onClick={() => set((n) => { const pp = (n.progress[user.id] ||= { lessons: {}, theory: {}, checks: {}, skills: {}, known: {}, read: {}, steps: {} } as any); pp.known ||= {}; if (pp.known[x.id]) delete pp.known[x.id]; else pp.known[x.id] = true; })}>
                <span className="sign-imgs">{x.imgs.map((im: any) => <span key={im.src} className="sign-img"><img src={im.src} alt="" loading="lazy" /><SrcTag src={im.o === "ksa" ? "moroor" : "dvsa"} /></span>)}</span>
                <span className="sign-name">{L(x)}</span>
                {on ? <span className="sign-known"><Check size={13} strokeWidth={3} /></span> : null}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export function SignsPage() {
  const { ar } = useStore();
  return (
    <main className="page">
      <nav className="crumbs"><Link to="/theory">{ar ? "النظري" : "Theory"}</Link></nav>
      <h1>{ar ? "الإشارات واللوحات" : "Signs and signals"}</h1>
      <p className="measure">{ar ? "الصور السعودية من دليل المرور، والبريطانية من نظام الطرق البريطاني. حيث يختلف المعنى يظهر الاثنان." : "Saudi images come from the Moroor handbook, UK ones from the Highway Code. Where the two differ, both are shown."}</p>
      <SignGallery />
    </main>
  );
}

export function TopicPage() {
  const { id } = useParams();
  const { L, ar, p, toggle } = useStore();
  const i = TOPICS.findIndex((t) => t.id === id);
  const t = TOPICS[i];
  const chapters = useMemo(() => CHAPTERS.filter((c) => COURSE.chToSec[c.id] === id), [id]);
  if (!t) return <main className="page"><p>{ar ? "الموضوع غير موجود." : "Topic not found."} <Link to="/theory">{ar ? "النظري" : "Theory"}</Link></p></main>;
  const sk = t.skill ? SK[String(t.skill)] : null;
  const group = COURSE.groups.find((g: any) => g.id === t.g);
  const lessons = LESSONS.filter((l) => (t.skill && l.skills.includes(t.skill)) || chapters.some((c) => l.ch.includes(c.id)));
  const ranges = t.hc.filter((r: any) => Array.isArray(r));
  const dgs = DIAGRAMS.filter((d) => typeof d.rule === "number" && ranges.some((r: any) => d.rule >= r[0] && d.rule <= r[1]));
  const checks: string[] = [...new Set<string>([...(t.checklists || []), ...chapters.flatMap((c) => c.checklists || [])])];
  const blocks = chapters.flatMap((c) => c.blocks || []);
  const prev = TOPICS[i - 1], next = TOPICS[i + 1];
  const Back = ar ? ArrowRight : ArrowLeft, Fwd = ar ? ArrowLeft : ArrowRight;
  const figs: typeof FIGURES = t.hb.flatMap((h: any) => { const u = HBU[Array.isArray(h) ? h[0] : h]; if (!u) return []; const a = Array.isArray(h) ? h[1] : u.from, b = Array.isArray(h) ? h[2] : u.to; return FIGURES.filter((f) => f.page >= a && f.page <= b); });
  const pts: typeof FIG_POINTS = t.hb.flatMap((h: any) => { const u = HBU[Array.isArray(h) ? h[0] : h]; if (!u) return []; const a = Array.isArray(h) ? h[1] : u.from, b = Array.isArray(h) ? h[2] : u.to; return FIG_POINTS.filter((f) => f.page >= a && f.page <= b); });
  const hasRules = !!SUMMARIES[t.id]?.length;
  const index: [string, string][] = [
    ...(hasRules ? [["rules", ar ? "القواعد باختصار" : "Rules in brief"] as [string, string]] : []),
    ...(chapters.length ? [["know", ar ? "ملاحظات المدرب" : "Coach's notes"] as [string, string]] : []),
    ...(figs.length ? [["pictures", ar ? "بالصور" : "In pictures"] as [string, string]] : []),
    ...(t.signs ? [["signs", ar ? "الإشارات" : "Signs"] as [string, string]] : []),
    ...(t.hb.length || t.hc.length ? [["sources", ar ? "النص الكامل" : "Full text"] as [string, string]] : []),
  ];
  return (
    <main className="page topic">
      <nav className="crumbs"><Link to="/theory">{ar ? "النظري" : "Theory"}</Link> <span>/</span> {L(group)}</nav>
      <header className="topic-head">
        <span className="plate-no"><bdi>{ar ? "الموضوع" : "Topic"} {i + 1}/{TOPICS.length}</bdi>{firstLessonOf[t.id] ? <> · <Link to={"/lessons/" + firstLessonOf[t.id]}>{ar ? "يُطبَّق في" : "Practised in"} {firstLessonOf[t.id]}</Link></> : null}</span>
        <h1>{topicTitle(t, L)}</h1>
        {sk ? <p className="lede"><Md text={ar ? sk.tAr : sk.tEn} /></p> : null}
        <ColourKey />
      </header>
      {index.length > 1 ? <nav className="on-page" aria-label={ar ? "في هذه الصفحة" : "On this page"}>{index.map(([id, label]) => <a key={id} href={"#" + id} onClick={(e) => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); }}>{label}</a>)}</nav> : null}

      {hasRules ? <section id="rules" className="anchor"><h2 className="plate">{ar ? "القواعد باختصار" : "Rules in brief"}</h2><RuleCards id={t.id} /></section> : null}

      {chapters.length ? (
        <section id="know" className="know anchor">
          <h2>{ar ? "ملاحظات المدرب" : "Coach's notes"} <SrcTag src="darb" /></h2>
          <ul>{chapters.flatMap((c) => c.teach).map((x: any, k: number) => <li key={k}><Md text={L(x)} /></li>)}</ul>
          {blocks.length ? <Blocks blocks={blocks} /> : null}
          {sk?.l4En ? <p className="standard"><b>{ar ? "مستوى الجاهزية:" : "Test-ready looks like:"}</b> {ar ? sk.l4Ar : sk.l4En}</p> : null}
        </section>
      ) : null}

      {lessons.length ? (
        <p className="row"><span className="muted">{ar ? "تتدرب عليه في:" : "Practised in:"}</span> {lessons.map((l) => <Link key={l.id} className="chip" to={"/lessons/" + l.id}>{l.id} · {L(l)}</Link>)}</p>
      ) : null}

      {figs.length ? (
        <section id="pictures" className="anchor">
          <h2 className="plate">{ar ? "بالصور" : "In pictures"} <SrcTag src="moroor" /></h2>
          {pts.length ? <ol className="pic-points">{pts.map((x, k) => <li key={k}><Md text={ar ? x.ar : x.en} /> <span className="muted">{ar ? "ص" : "p."} {x.page}</span></li>)}</ol> : null}
          <div className="figs strip">{figs.map((f, k) => <HbFigure key={f.id} f={f} n={k + 1} />)}</div>
        </section>
      ) : null}

      {dgs.length ? <section className="anchor"><h2 className="plate">{ar ? "رسوم توضيحية" : "Diagrams"} <SrcTag src="dvsa" /></h2><div className="dg-grid">{dgs.map((d) => <Diagram key={d.id} id={d.id} />)}</div></section> : null}
      {t.signs ? <section id="signs" className="anchor"><h2 className="plate">{ar ? "الإشارات في هذا الموضوع" : "Signs in this topic"}</h2><SignGallery cats={t.signs} /></section> : null}
      {checks.map((c) => <Checklist key={c} id={c} />)}

      {t.hb.length || t.hc.length ? (
        <section id="sources" className="anchor full-text">
          <h2 className="plate">{ar ? "النص الكامل من المصادر" : "Full text from the sources"}</h2>
          <p className="muted measure">{ar ? "للرجوع إليه. الكلمات الملونة تتبع دليل الألوان أعلاه." : "For reference. Coloured words follow the colour key above."}</p>
          {t.hb.map((h: any, k: number) => <MoroorPane key={"m" + k} r={h} />)}
          {t.hc.length ? <p className="muted measure small">{ar ? "نظام الطرق البريطاني مرجع فقط. حيث يختلف، يتبع النظام السعودي." : "The Highway Code is a UK reference. Where it differs, the Saudi rule applies."}</p> : null}
          {t.hc.map((h: any, k: number) => <DvsaPane key={"d" + k} r={h} />)}
        </section>
      ) : null}


      <p className="done-row">
        <button className={"btn" + (p.read[t.id] ? " ghost" : "")} onClick={() => toggle("read", t.id)}>
          {p.read[t.id] ? <><Check size={16} strokeWidth={3} /> {ar ? "مقروء " + p.read[t.id].at : "Read " + p.read[t.id].at}</> : ar ? "علّم كمقروء" : "Mark as read"}
        </button>
      </p>
      <nav className="pager">
        {prev ? <Link to={"/theory/" + prev.id} className="pager-prev"><Back size={16} /><span><small>{ar ? "السابق" : "Previous"}</small>{topicTitle(prev, L)}</span></Link> : <span />}
        {next ? <Link to={"/theory/" + next.id} className="pager-next"><span><small>{ar ? "التالي" : "Next"}</small>{topicTitle(next, L)}</span><Fwd size={16} /></Link> : <Link to="/car" className="pager-next"><span><small>{ar ? "المخرج التالي" : "Next exit"}</small>{ar ? "اعرف سيارتك" : "Know your car"}</span><Fwd size={16} /></Link>}
      </nav>
    </main>
  );
}

export function Blocks({ blocks }: { blocks: any[] }) {
  const { L, ar } = useStore();
  const out: any[] = []; let list: any[] = [];
  const flush = (k: number) => { if (list.length) { out.push(<ul key={"u" + k}>{list}</ul>); list = []; } };
  blocks.forEach((b, k) => {
    if (b.k === "li") { list.push(<li key={k}><Md text={L(b)} /></li>); return; }
    flush(k);
    if (b.k === "h3") out.push(<h3 key={k}>{L(b)}</h3>);
    else if (b.k === "p") out.push(<p key={k}><Md text={L(b)} /></p>);
    else if (b.k === "note") out.push(<p key={k} className="note"><Md text={L(b)} /></p>);
    else if (b.k === "warn") out.push(<p key={k} className="warn"><Md text={L(b)} /></p>);
    else if (b.k === "idle") out.push(<p key={k} className="note idle"><Md text={L(b)} /></p>);
    else if (b.k === "ol") out.push(<ol key={k}>{(ar ? b.ar : b.en).map((x: string, j: number) => <li key={j}><Md text={x} /></li>)}</ol>);
    else if (b.k === "table") out.push(
      <div key={k} className="table-wrap"><table><thead><tr>{(ar ? b.head.ar : b.head.en).map((h: string) => <th key={h}>{h}</th>)}</tr></thead>
        <tbody>{b.rows.map((r: any, j: number) => <tr key={j}>{(ar ? r.ar : r.en).map((c: string, q: number) => <td key={q}><Md text={c} /></td>)}</tr>)}</tbody></table>
        {b.note ? <p className="muted"><Md text={L(b.note)} /></p> : null}</div>);
  });
  flush(blocks.length);
  return <div className="blocks">{out}</div>;
}
