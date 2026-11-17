import { Fragment, useEffect, useRef, useState, type ReactNode } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Check, ChevronDown, ExternalLink, FileImage, ArrowRight, ArrowLeft, BookOpen, Car, Route, Gauge, ClipboardCheck, ListChecks, Flag, IdCard } from "lucide-react";
export const STAGE_ICON: Record<string, any> = { theory: BookOpen, car: Car, lessons: Route, skills: Gauge, ready: ClipboardCheck, "theory-test": ListChecks, tests: Flag, licence: IdCard };
import { useStore } from "../lib/store";
import { STAGES, SRC_LABEL, type Src } from "../lib/journey";
import { CHECKLISTS, LEVELS } from "../lib/data";
import { useStageStatus as stageStatus } from "../lib/progress";
import { Street } from "./Street";

/* Inline markup in course text: **bold** __underline__ !!must!! ++priority++ ==number== */
export function Md({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|__(.+?)__|!!(.+?)!!|\+\+(.+?)\+\+|==(.+?)==/g;
  let last = 0, m: RegExpExecArray | null, i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[1]) parts.push(<b key={i++}><Md text={m[1]} /></b>);
    else if (m[2]) parts.push(<u key={i++}>{m[2]}</u>);
    else if (m[3]) parts.push(<mark key={i++} className="k-must">{m[3]}</mark>);
    else if (m[4]) parts.push(<mark key={i++} className="k-prio">{m[4]}</mark>);
    else if (m[5]) parts.push(<mark key={i++} className="k-num">{m[5]}</mark>);
    last = re.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}

/* Automatic colour-coding for source text (Moroor Arabic, Highway Code English):
   must / never / priority / numbers / allowed, marked with tint + underline so colour is never the only signal. */
const HL: [RegExp, string][] = [
  [/(لا يجوز|لا يسمح|يُمنع|يمنع|ممنوع|يحظر|محظور|لا تقم|لا تتجاوز|لا تستخدم|إياك|\bMUST NOT\b|\bmust not\b|\bnever\b|\bNever\b|\bNEVER\b|\bdo not\b|\bDo not\b|\bDO NOT\b)/g, "k-never"],
  [/(يجب(?: عليك| على السائق)?|يلزم|يتوجب|إلزامي|\bMUST\b|\bmust\b)/g, "k-must"],
  [/(حق الأولوية|الأولوية|أعط[ِ]? حق الأولوية|أفسح الطريق|\bgive way\b|\bGive way\b|\bpriority\b|\bright of way\b)/g, "k-prio"],
  [/(يسمح|يجوز|مسموح|\bmay\b|\byou can\b)/g, "k-ok"],
  [/((?:\d+(?:[.,]\d+)?|[٠-٩]+)\s?(?:كم\/س|كم\/ساعة|كيلومتر|كم|متر|م\b|ثوان[ٍي]?|ثانية|ثواني|دقيقة|دقائق|ساعة|ساعات|ريال|نقطة|نقاط|%|سنوات|سنة|km\/h|mph|metres?|feet|seconds?|minutes?|hours?|tonnes?|kg|%|mm|miles?|yards?|years?|points?))/g, "k-num"],
];
export function Hl({ text }: { text: string }) {
  let parts: (string | ReactNode)[] = [text];
  let key = 0;
  for (const [re, cls] of HL) {
    parts = parts.flatMap((p) => {
      if (typeof p !== "string") return [p];
      const out: (string | ReactNode)[] = []; let last = 0; re.lastIndex = 0; let m: RegExpExecArray | null;
      while ((m = re.exec(p))) { if (m.index > last) out.push(p.slice(last, m.index)); out.push(<mark key={key++} className={cls}>{m[0]}</mark>); last = re.lastIndex; }
      if (last < p.length) out.push(p.slice(last));
      return out;
    });
  }
  return <>{parts}</>;
}

/** Legend for the colour code; shown at the top of reading pages. */
export function ColourKey() {
  const { ar } = useStore();
  const k: [string, string, string][] = [["k-must", "Must", "يجب"], ["k-never", "Never / prohibited", "ممنوع"], ["k-prio", "Priority / give way", "الأولوية"], ["k-num", "Numbers & limits", "أرقام وحدود"], ["k-ok", "Allowed", "مسموح"]];
  return <p className="colour-key" aria-label={ar ? "دليل الألوان" : "Colour key"}>{k.map(([c, en, a]) => <mark key={c} className={c}>{ar ? a : en}</mark>)}</p>;
}

export function SrcTag({ src, at: r }: { src: Src; at?: string }) {
  const { L } = useStore();
  return <span className={"src-tag src-" + src} title={L(SRC_LABEL[src].long)}>{L(SRC_LABEL[src])}{r ? <span className="src-ref"> · {r}</span> : null}</span>;
}

/** Route shield: the stage number in a road-sign shield. */
export function Shield({ n, size = "md" }: { n: number | string; size?: "sm" | "md" | "lg" }) {
  return <span className={"shield shield-" + size} aria-hidden="true"><span>{n}</span></span>;
}

/** The green guide-sign masthead with the exit strip of every stage. */
export function Masthead() {
  const { L, ar, s, set, user } = useStore();
  const st = stageStatus();
  const loc = useLocation();
  const current = STAGES.find((x) => (loc.pathname === x.path || loc.pathname.startsWith(x.path + "/")));
  const [menu, setMenu] = useState(false);
  useEffect(() => { setMenu(false); }, [loc.pathname]);
  return (
    <header className="sign">
      <div className="sign-top">
        <Link to="/" className="brand" aria-label="Darb home">
          <span className="brand-ar">درب</span><span className="brand-en">Darb</span>
        </Link>
        <span className="sign-sub">{ar ? "مدرب القيادة للرخصة السعودية" : "Driving coach for the Saudi licence"}</span>
        <button className="menu-btn" aria-expanded={menu} aria-controls="sign-tools" onClick={() => setMenu(!menu)}>{ar ? "القائمة" : "Menu"}</button>
        <div className={"sign-tools" + (menu ? " open" : "")} id="sign-tools">
          <label className="who">
            <span className="vh">{ar ? "المتعلم" : "Learner"}</span>
            <select value={s.activeUser} onChange={(e) => set((n) => { n.activeUser = e.target.value; })}>
              {s.users.map((u) => <option key={u.id} value={u.id}>{u.name}</option>)}
            </select>
          </label>
          <button className="lang" onClick={() => set((n) => { n.lang = n.lang === "ar" ? "en" : "ar"; })} lang={ar ? "en" : "ar"}>{ar ? "English" : "العربية"}</button>
          <NavLink to="/settings" className="tool-link">{ar ? "الإعدادات" : "Settings"}</NavLink>
        </div>
      </div>
      <nav className="street-nav" aria-label={ar ? "مراحل الرحلة" : "Journey stages"}><Street /></nav>
      <p className="vh">{user.name}</p>
    </header>
  );
}

/** Stage page header: the exit panel for one stage. */
export function StageHead({ id, children }: { id: string; children?: ReactNode }) {
  const { L, ar } = useStore();
  const x = STAGES.find((s) => s.id === id)!;
  const st = stageStatus()[x.id];
  return (
    <div className="stage-head">
      <Shield n={x.n} size="lg" />
      <div className="stage-head-text">
        <h1>{(() => { const I = STAGE_ICON[x.id]; return <I className="stage-icon" size={30} strokeWidth={2.25} aria-hidden="true" />; })()} {L(x)}</h1>
        <p className="lede">{ar ? x.dAr : x.dEn}</p>
      </div>
      <div className="stage-meter">
        <span className="meter-label"><bdi>{st.label}</bdi></span>
        <div className="meter" role="progressbar" aria-valuenow={st.pct} aria-valuemin={0} aria-valuemax={100} aria-label={ar ? "التقدم" : "Progress"}><i style={{ width: st.pct + "%" }} /></div>
      </div>
      {children}
    </div>
  );
}

export function NextPrev({ id }: { id: string }) {
  const { L, ar } = useStore();
  const i = STAGES.findIndex((s) => s.id === id);
  const prev = STAGES[i - 1], next = STAGES[i + 1];
  const Back = ar ? ArrowRight : ArrowLeft, Fwd = ar ? ArrowLeft : ArrowRight;
  return (
    <nav className="pager" aria-label={ar ? "المرحلة التالية والسابقة" : "Next and previous stage"}>
      {prev ? <Link to={prev.path} className="pager-prev"><Back size={16} /> <span><small>{ar ? "المخرج" : "Exit"} {prev.n}</small>{L(prev)}</span></Link> : <span />}
      {next ? <Link to={next.path} className="pager-next"><span><small>{ar ? "المخرج التالي" : "Next exit"} {next.n}</small>{L(next)}</span> <Fwd size={16} /></Link> : <span />}
    </nav>
  );
}

export function Checklist({ id, title }: { id: string; title?: string }) {
  const { L, p, toggle, ar } = useStore();
  const cl = CHECKLISTS[id];
  if (!cl) return null;
  const done = cl.items.filter((_, i) => p.checks[`ck:${id}:${i}`]).length;
  return (
    <section className="checklist">
      <header><h3>{title || L(cl)}</h3><span className="count">{done}/{cl.items.length}</span></header>
      <ul>
        {cl.items.map((it: any, i) => {
          const k = `ck:${id}:${i}`, on = !!p.checks[k];
          return (
            <li key={k} className={on ? "on" : ""}>
              <label>
                <input type="checkbox" checked={on} onChange={() => toggle("checks", k)} />
                <span className="box" aria-hidden="true"><Check size={14} strokeWidth={3} /></span>
                <span className="txt"><Md text={ar ? it[1] : it[0]} />{it[2] ? <small className="why"><Md text={ar ? it[3] : it[2]} /></small> : null}</span>
                {on ? <span className="stamp">{p.checks[k].at}</span> : null}
              </label>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export function StepList({ steps, bucket = "steps" }: { steps: { id: string; en: string; ar: string; dEn: string; dAr: string; src: Src; ref?: string; href?: string }[]; bucket?: "steps" | null }) {
  const { L, ar, p, toggle } = useStore();
  return (
    <ol className="steps">
      {steps.map((x, i) => {
        const on = bucket ? !!p.steps[x.id] : false;
        return (
          <li key={x.id} className={on ? "on" : ""}>
            <span className="step-no">{i + 1}</span>
            <div className="step-body">
              <h3>{L(x)} <SrcTag src={x.src} at={x.ref} /></h3>
              <p>{ar ? x.dAr : x.dEn}</p>
              {x.href ? <a href={x.href} target="_blank" rel="noopener noreferrer" className="ext">gov.uk <ExternalLink size={13} /></a> : null}
            </div>
            {bucket ? (
              <button className={"tick" + (on ? " on" : "")} aria-pressed={on} onClick={() => toggle("steps", x.id)}>
                <Check size={16} strokeWidth={3} /> {on ? (ar ? "تم " + p.steps[x.id].at : "Done " + p.steps[x.id].at) : ar ? "علّم كمنجز" : "Mark done"}
              </button>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}

export function LevelPicker({ value, onChange, label }: { value: number; onChange: (n: number) => void; label: string }) {
  const { L } = useStore();
  return (
    <div className="levels" role="radiogroup" aria-label={label}>
      {LEVELS.map((l) => (
        <button key={l.n} type="button" role="radio" aria-checked={value === l.n} className={"lv lv-" + l.n + (value >= l.n ? " fill" : "") + (value === l.n ? " cur" : "")} title={L({ en: l.dEn, ar: l.dAr })} onClick={() => onChange(value === l.n ? 0 : l.n)}>
          {L(l)}
        </button>
      ))}
    </div>
  );
}

export function Disclosure({ title, extra, children, defaultOpen = false, className = "" }: { title: ReactNode; extra?: ReactNode; children: ReactNode; defaultOpen?: boolean; className?: string }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <section className={"disc " + className + (open ? " open" : "")}>
      <button className="disc-head" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span className="disc-title">{title}</span>{extra}<ChevronDown className="chev" size={18} />
      </button>
      {open ? <div className="disc-body">{children}</div> : null}
    </section>
  );
}

export function PageImage({ src, label }: { src: string; label: string }) {
  const [open, setOpen] = useState(false);
  return (
    <span className="pgimg">
      <button className="pg-btn" onClick={() => setOpen(!open)} aria-expanded={open}><FileImage size={14} /> {label}</button>
      {open ? <img src={src} alt={label} loading="lazy" /> : null}
    </span>
  );
}

export const Join = ({ items, sep = " · " }: { items: ReactNode[]; sep?: string }) => <>{items.map((x, i) => <Fragment key={i}>{i ? sep : null}{x}</Fragment>)}</>;
