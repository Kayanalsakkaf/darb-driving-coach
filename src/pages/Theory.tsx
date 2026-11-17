import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Check, ArrowLeft, ArrowRight } from "lucide-react";
import { useStore } from "../lib/store";
import { COURSE, CHAPTERS, LESSONS, SIGNS, SK, DIAGRAMS, META } from "../lib/data";
import { TOPICS, topicTitle, figCount } from "../lib/progress";
import { Checklist, Md, NextPrev, SrcTag, StageHead } from "../components/ui";
import { MoroorPane, DvsaPane, Diagram } from "../components/sources";

const GROUPS: any[] = COURSE.groups;

export function TheoryIndex() {
  const { L, ar, p } = useStore();
  return (
    <main className="page">
      <StageHead id="theory" />
      <p className="measure">{ar ? "اقرأ الموضوعات بالترتيب. كل موضوع يبدأ بما يجب معرفته، ثم نص دليل المرور مع صوره، ثم قواعد نظام الطرق البريطاني المقابلة." : "Read the topics in order. Each one opens with what to know, then the Moroor handbook text with its pictures, then the matching Highway Code rules."}</p>
      <div className="legend"><SrcTag src="moroor" /> {ar ? "المصدر الأساسي، بالعربية" : "primary source, in Arabic"} <SrcTag src="dvsa" /> {ar ? "مرجع داعم، بالإنجليزية" : "supporting reference, in English"} <SrcTag src="darb" /> {ar ? "ملخص المدرب" : "coaching summary"}</div>
      {GROUPS.map((g) => {
        const list = TOPICS.filter((t) => t.g === g.id);
        if (!list.length) return null;
        return (
          <section key={g.id} className="topic-group">
            <h2>{L(g)}</h2>
            <ol className="topic-list">
              {list.map((t) => {
                const figs = figCount(t);
                return (
                  <li key={t.id} className={p.read[t.id] ? "read" : ""}>
                    <Link to={"/theory/" + t.id}>
                      <span className="t-name">{topicTitle(t, L)}</span>
                      <span className="t-meta">
                        {t.hb.length ? <SrcTag src="moroor" /> : null}{t.hc.length ? <SrcTag src="dvsa" /> : null}
                        {figs ? <span className="pill">{figs} {ar ? "صورة" : "figures"}</span> : null}
                      </span>
                      <span className="t-state">{p.read[t.id] ? <><Check size={14} strokeWidth={3} /> {ar ? "مقروء" : "Read"}</> : null}</span>
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
  return (
    <main className="page topic">
      <nav className="crumbs"><Link to="/theory">{ar ? "النظري" : "Theory"}</Link> <span>/</span> {L(group)}</nav>
      <h1>{topicTitle(t, L)}</h1>
      {sk ? <p className="lede"><Md text={ar ? sk.tAr : sk.tEn} /> <SrcTag src="dvsa" at={ar ? "مهارة " + sk.id : "Skill " + sk.id} /></p> : null}

      {chapters.length ? (
        <section className="know">
          <h2>{ar ? "ما يجب أن تعرفه" : "What to know"} <SrcTag src="darb" /></h2>
          <ul>{chapters.flatMap((c) => c.teach).map((x: any, k: number) => <li key={k}><Md text={L(x)} /></li>)}</ul>
          {sk?.l4En ? <p className="standard"><b>{ar ? "مستوى الجاهزية:" : "Test-ready looks like:"}</b> {ar ? sk.l4Ar : sk.l4En}</p> : null}
        </section>
      ) : null}

      {blocks.length ? <Blocks blocks={blocks} /> : null}

      {lessons.length ? (
        <p className="row"><span className="muted">{ar ? "تتدرب عليه في:" : "Practised in:"}</span> {lessons.map((l) => <Link key={l.id} className="chip" to={"/lessons/" + l.id}>{l.id} · {L(l)}</Link>)}</p>
      ) : null}

      {t.hb.length ? <section className="src-block"><h2>{ar ? "دليل المرور" : "Moroor handbook"}</h2>{t.hb.map((h: any, k: number) => <MoroorPane key={k} r={h} />)}</section> : null}
      {t.hc.length ? <section className="src-block"><h2>{ar ? "نظام الطرق البريطاني" : "The Highway Code"}</h2><p className="muted measure">{ar ? "مرجع بريطاني. حيث يختلف عن النظام السعودي، يتبع النظام السعودي." : "UK reference. Where it differs from Saudi rules, the Saudi rule applies."}</p>{t.hc.map((h: any, k: number) => <DvsaPane key={k} r={h} />)}</section> : null}
      {dgs.length ? <section className="src-block"><h2>{ar ? "رسوم توضيحية" : "Diagrams"}</h2><div className="dg-grid">{dgs.map((d) => <Diagram key={d.id} id={d.id} />)}</div></section> : null}
      {t.signs ? <section className="src-block"><h2>{ar ? "الإشارات في هذا الموضوع" : "Signs in this topic"}</h2><SignGallery cats={t.signs} /></section> : null}
      {checks.map((c) => <Checklist key={c} id={c} />)}

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
