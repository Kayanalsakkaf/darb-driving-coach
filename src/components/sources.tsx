import type { ReactNode } from "react";
import { ExternalLink, Scale } from "lucide-react";
import { HBU, HC, FIGURES, FIG_POINTS, hbPage, hcImg, DG } from "../lib/data";
import { useStore } from "../lib/store";
import { Disclosure, Hl, PageImage, SrcTag } from "./ui";

function groupLi(blocks: any[], render: (b: any, i: number) => ReactNode, li: (b: any) => ReactNode) {
  const out: ReactNode[] = [];
  let ul: ReactNode[] = [];
  const flush = (i: number) => { if (ul.length) { out.push(<ul key={"u" + i}>{ul}</ul>); ul = []; } };
  blocks.forEach((b, i) => { if (b.k === "li") ul.push(<li key={i}>{li(b)}</li>); else { flush(i); out.push(render(b, i)); } });
  flush(blocks.length);
  return out;
}

/** A figure from the Moroor handbook with numbered callout caption. */
export function HbFigure({ f, n }: { f: (typeof FIGURES)[number]; n: number }) {
  const { ar } = useStore();
  return (
    <figure className="hbfig">
      <img src={f.src} alt={ar ? f.ar : f.en} loading="lazy" />
      <figcaption><span className="fig-no">{ar ? "شكل" : "Fig."} {n}</span> <span lang="ar" dir="rtl">{f.ar}</span>{!ar ? <span className="fig-en">{f.en}</span> : null}</figcaption>
    </figure>
  );
}

/** One Moroor handbook reference: [unit] or [unit, fromPage, toPage]. Arabic source text, figures inline by page. */
export function MoroorPane({ r }: { r: any }) {
  const { ar } = useStore();
  const id = Array.isArray(r) ? r[0] : r;
  const u = HBU[id];
  if (!u) return null;
  const from = Array.isArray(r) ? r[1] : u.from, to = Array.isArray(r) ? r[2] : u.to;
  let cur = u.from;
  const blocks = u.b.filter((b: any) => { if (b.k === "page") cur = b.p; return cur >= from && cur <= to; });
  const figs = FIGURES.filter((f) => f.page >= from && f.page <= to);
  const pts = FIG_POINTS.filter((f) => f.page >= from && f.page <= to);
  let figNo = 0;
  const pages = from === to ? `${from}` : `${from}–${to}`;
  return (
    <Disclosure className="pane pane-moroor" title={<><SrcTag src="moroor" at={(ar ? "ص " : "p. ") + pages} /> <span lang="ar" dir="rtl">{u.title}</span></>} extra={figs.length ? <span className="count-note">{figs.length} {ar ? "صورة" : "figures"}</span> : null}>
      <div className="src-text" lang="ar" dir="rtl">
        {groupLi(blocks, (b, i) => {
          if (b.k === "page") {
            const pf = figs.filter((f) => f.page === b.p);
            return (
              <div key={i} className="pg-mark">
                <PageImage src={hbPage(b.p)} label={(ar ? "صفحة " : "Page ") + b.p} />
                {pf.length ? <div className="figs">{pf.map((f) => <HbFigure key={f.id} f={f} n={++figNo} />)}</div> : null}
              </div>
            );
          }
          if (b.k === "h2") return <h3 key={i}><Hl text={b.t} /></h3>;
          if (b.k === "h3") return <h4 key={i}>{b.t}</h4>;
          if (b.k === "remember") return <p key={i} className="remember"><b>تذكر:</b> <Hl text={b.t} /></p>;
          return <p key={i}>{b.b ? <b><Hl text={b.t} /></b> : <Hl text={b.t} />}</p>;
        }, (b) => (b.b ? <b><Hl text={b.t} /></b> : <Hl text={b.t} />))}
      </div>
      {pts.length ? (
        <div className="fig-points">
          <h4>{ar ? "نقاط تحملها الصور في الدليل" : "Points the handbook makes in pictures"}</h4>
          <ol>{pts.map((x, i) => <li key={i}>{ar ? x.ar : x.en} <span className="muted">· {ar ? "ص" : "p."} {x.page}</span></li>)}</ol>
        </div>
      ) : null}
    </Disclosure>
  );
}

function hcBlocks(blocks: any[]) {
  return groupLi(blocks, (b, i) => {
    if (b.k === "rule") return <h4 key={i} className="rule-no" id={"rule" + b.n}>Rule {b.n}</h4>;
    if (b.k === "h3" || b.k === "h4") return <h4 key={i}>{b.t}</h4>;
    if (b.k === "law") return <p key={i} className="law"><Scale size={14} /> {b.t}</p>;
    if (b.k === "img") return <img key={i} className="hcfig" src={hcImg(b.key)} alt="" loading="lazy" />;
    return <p key={i}><Hl text={b.t} /></p>;
  }, (b) => <Hl text={b.t} />);
}

/** One Highway Code reference: a unit id or a [from, to] rule range. Shown in English, collapsed by default. */
export function DvsaPane({ r }: { r: any }) {
  const { ar } = useStore();
  let title: string, src: string, body: ReactNode, n: number;
  if (typeof r === "string") {
    const u = HC.units[r]; if (!u) return null;
    title = u.title; src = u.src; n = u.b.length; body = hcBlocks(u.b);
  } else {
    const nums: string[] = []; for (let i = r[0]; i <= r[1]; i++) if (HC.rules[i]) nums.push(String(i));
    if (!nums.length) return null;
    const first = HC.rules[nums[0]];
    title = (r[0] === r[1] ? `Rule ${r[0]}` : `Rules ${r[0]}–${r[1]}`) + " · " + first.slice; src = first.src; n = nums.length;
    body = nums.map((k) => <div key={k}>{hcBlocks([{ k: "rule", n: k }, ...HC.rules[k].b.filter((b: any) => b.k !== "rule")])}</div>);
  }
  return (
    <Disclosure className="pane pane-dvsa" title={<><SrcTag src="dvsa" at="Highway Code" /> <span lang="en-GB">{title}</span></>} extra={<span className="count-note">{n} {typeof r === "string" ? (ar ? "فقرة" : "items") : ar ? "قاعدة" : "rules"}</span>}>
      <div className="src-text" lang="en-GB" dir="ltr">
        {body}
        <p className="muted"><a href={src} target="_blank" rel="noopener noreferrer">gov.uk <ExternalLink size={12} /></a> · Open Government Licence v3.0</p>
      </div>
    </Disclosure>
  );
}

export function Diagram({ id }: { id: string }) {
  const { L, ar } = useStore();
  const d = DG[id]; if (!d) return null;
  return (
    <figure className="dg">
      <img src={d.uk} alt={L(d)} loading="lazy" />
      <figcaption><b>{L(d)}</b> <SrcTag src="dvsa" at={typeof d.rule === "number" ? (ar ? "قاعدة " : "Rule ") + d.rule : undefined} /><br />{ar ? d.capAr : d.capEn}</figcaption>
    </figure>
  );
}
