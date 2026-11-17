import { Check } from "lucide-react";
import { useStore } from "../lib/store";
import { CAR, CH, LES } from "../lib/data";
import { Link } from "react-router-dom";
import { Checklist, Hl, Md, NextPrev, SrcTag, StageHead } from "../components/ui";

const URG: Record<string, { en: string; ar: string }> = {
  stop: { en: "Stop safely now", ar: "توقف بأمان الآن" },
  soon: { en: "Check soon", ar: "افحص قريبا" },
  info: { en: "Information", ar: "معلومة" },
};

const SEC: Record<string, { emoji: string; c: string; en: string; ar: string }> = {
  cockpit: { emoji: "🎛️", c: "#1f56b3", en: "Find every control before the car moves.", ar: "اعرف مكان كل أداة قبل أن تتحرك السيارة." },
  gearbox: { emoji: "⚙️", c: "#7a3fb0", en: "How to start, select gears and park.", ar: "كيف تشغّل السيارة وتختار الوضع وتوقفها." },
  "warning-lights": { emoji: "🚨", c: "#c4271c", en: "Red: stop safely now. Amber: check soon. Green or blue: information.", ar: "الأحمر: توقف بأمان الآن. الكهرماني: افحص قريبا. الأخضر أو الأزرق: معلومة." },
  checks: { emoji: "🔧", c: "#0d7c86", en: "Quick checks before driving and every week.", ar: "فحوص سريعة قبل القيادة وكل أسبوع." },
  emergencies: { emoji: "🆘", c: "#c75d0e", en: "What to do when something goes wrong.", ar: "ماذا تفعل عندما يحدث خطأ." },
};

/** "Brake system (red): parking brake on..." -> bold title + highlighted body. Selector letters P R N D M get key-cap styling. */
function CarText({ text }: { text: string }) {
  const m = text.match(/^([^:.؛:]{3,60})[:：]\s*(.*)$/s);
  const body = (t: string) => t.split(/(\b[PRNDM]\b(?=[\s,./)]|$))/g).map((part, i) => /^[PRNDM]$/.test(part) ? <kbd key={i} className="gear">{part}</kbd> : <Hl key={i} text={part} />);
  if (/\*\*|==/.test(text)) return <span><Md text={text} /></span>;
  return <span>{m ? <><strong className="ct-title">{m[1]}</strong> {body(m[2])}</> : body(text)}</span>;
}

function VTag({ it }: { it: any }) {
  const { ar } = useStore();
  if (!it.variant || it.variant === "both") return <span className="vtag v-all">{ar ? "كل الفرونكس" : "All Fronx"}</span>;
  return <span className={"vtag v-" + (it.variant === "manual" ? "manual" : "auto")}>{it.variant === "manual" ? (ar ? "يدوي فقط" : "Manual only") : it.autoType === "AGS" ? "AGS" : ar ? "أوتوماتيك (سيارتك)" : "Automatic (your car)"}</span>;
}

/** Manual page + the lessons where this comes up again. */
function ItemFoot({ it }: { it: any }) {
  const { ar, L } = useStore();
  return (
    <p className="ci-meta">
      <span className="pg">📖 {(ar ? "ص " : "p. ") + it.page}</span>
      {it.lessons?.length ? <span className="again">🔁 {ar ? "يتكرر في" : "Comes up again in"} {it.lessons.map((id: string) => <Link key={id} to={"/lessons/" + id} className="again-chip" title={LES[id] ? L(LES[id]) : id}>{id}</Link>)}</span> : null}
    </p>
  );
}

export function CarPage() {
  const { L, ar, s, set, p, toggle } = useStore();
  const gb = s.gearbox;
  const fits = (v?: string) => !v || v === "both" || v === "auto" || (gb === "manual" && v === "manual");
  const pg = (x: string) => (ar ? "ص " : "p. ") + x;
  return (
    <main className="page car">
      <StageHead id="car" />
      <div className="car-intro">
        <p className="measure">{ar ? "سيارتك: سوزوكي فرونكس GLX 1.5 أوتوماتيك 2026. كل نقطة من دليل مالك فرونكس مع رقم الصفحة." : "Your car: 2026 Suzuki Fronx GLX 1.5 automatic. Every point comes from the Fronx owner's manual, with its page number."}</p>
        <label className="toggle-row">
          <input type="checkbox" checked={gb === "manual"} onChange={(e) => set((n) => { n.gearbox = e.target.checked ? "manual" : "auto"; })} />
          <span className="switch" aria-hidden="true" />
          {ar ? "أظهر معلومات ناقل الحركة اليدوي أيضا" : "Also show manual-gearbox info"}
        </label>
      </div>
      <nav className="toc-inline" aria-label={ar ? "الأقسام" : "Sections"}>
        {CAR.sections.map((sec: any) => <a key={sec.id} href={"#car-" + sec.id} className={p.read["car:" + sec.id] ? "read" : ""}>{L(sec)}</a>)}<a href="#car-annex">{ar ? "ملحق اليدوي" : "Manual annex"}</a>
      </nav>

      {CAR.sections.map((sec: any) => {
        const items = sec.items.filter((it: any) => fits(it.variant));
        const lights = sec.id === "warning-lights";
        return (
          <section key={sec.id} id={"car-" + sec.id} className={"car-sec" + (lights ? " lights" : "")} style={{ ["--sc" as any]: SEC[sec.id]?.c || "var(--hue)" }}>
            <header className="car-sec-head">
              <span className="sec-emoji" aria-hidden="true">{SEC[sec.id]?.emoji}</span>
              <div><h2>{L(sec)}</h2>{SEC[sec.id] ? <p className="sec-sub">{L(SEC[sec.id])}</p> : null}</div>
              <SrcTag src="fronx" />
            </header>
            {lights ? (
              <ul className="light-grid">
                {items.map((it: any) => (
                  <li key={it.id} className={"light urg-" + (it.urgency || "info")}>
                    {it.icon ? <img src={"car/" + it.icon} alt="" width={48} height={48} /> : <span className="light-noicon" />}
                    <div>
                      <span className="urg">{L(URG[it.urgency || "info"])}</span>
                      {it.title ? <>
                        <h3 className="lt-title">{L(it.title)}</h3>
                        {it.looks ? <p className="lt-row"><span>👁️ {ar ? "شكله" : "Looks like"}</span> <span><Md text={L(it.looks)} /></span></p> : null}
                        {it.means ? <p className="lt-row"><span>💡 {ar ? "معناه" : "Means"}</span> <span><Md text={L(it.means)} /></span></p> : null}
                        {it.todo ? <p className="lt-row todo"><span>👉 {ar ? "افعل" : "Do this"}</span> <span><Md text={L(it.todo)} /></span></p> : null}
                      </> : <p><CarText text={L(it)} /></p>}
                      <ItemFoot it={it} />
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="car-items">
                {items.map((it: any) => (
                  <article key={it.id} className="car-item">
                    {it.fig ? <img className="car-fig" src={"car/" + it.fig} alt="" loading="lazy" /> : null}
                    <div>
                      {it.title ? <>
                        <h3 className="ci-title">{L(it.title)} <VTag it={it} /></h3>
                        {it.what ? <p className="ci-row"><span className="ci-k">📍 {ar ? "ما هو وأين" : "What and where"}</span> <span><Md text={L(it.what)} /></span></p> : null}
                        {it.does ? <p className="ci-row"><span className="ci-k">⚡ {ar ? "ماذا يفعل" : "What it does"}</span> <span><Md text={L(it.does)} /></span></p> : null}
                        {(it.how || it.steps)?.length ? <><p className="ci-k how">🛠️ {ar ? "كيف تستخدمه" : "How to use it"}</p><ol className="ci-steps">{(it.how || it.steps).map((st: any, k: number) => <li key={k}><CarText text={L(st)} /></li>)}</ol></> : null}
                        {it.tip ? <p className="ci-tip"><b>⚠️ {ar ? "انتبه:" : "Watch out:"}</b> <Md text={L(it.tip)} /></p> : null}
                      </> : <>
                        <p><CarText text={L(it)} /> <VTag it={it} /></p>
                        {it.steps?.length ? <ol className="ci-steps">{it.steps.map((st: any, k: number) => <li key={k}><CarText text={L(st)} /></li>)}</ol> : null}
                      </>}
                      <ItemFoot it={it} />
                    </div>
                  </article>
                ))}
              </div>
            )}
            {sec.id === "cockpit" ? <><Checklist id="cockpit" /><Checklist id="controls" /></> : null}
            <p className="done-row">
              <button className={"btn" + (p.read["car:" + sec.id] ? " ghost" : "")} onClick={() => toggle("read", "car:" + sec.id)}>
                {p.read["car:" + sec.id] ? <><Check size={16} strokeWidth={3} /> {ar ? "تم" : "Done"}</> : ar ? "فهمت هذا القسم" : "I know this section"}
              </button>
            </p>
          </section>
        );
      })}
      <section id="car-annex" className="car-sec annex">
        <header className="car-sec-head"><h2>{ar ? "ملحق: سيارات ناقل الحركة اليدوي" : "Annex: manual-gearbox cars"}</h2><SrcTag src="fronx" /></header>
        <p className="muted measure">{ar ? "سيارتك أوتوماتيك. هذا للرجوع إليه إذا قدت سيارة يدوية، مثل سيارة المدرسة." : "Your car is automatic. This is for reference if you drive a manual, such as a school car."}</p>
        <div className="car-items">{CAR.sections.flatMap((sec: any) => sec.items.filter((it: any) => it.variant === "manual")).map((it: any) => (
          <article key={it.id} className="car-item"><div><p><Md text={L(it)} /> <span className="muted">{pg(it.page)}</span></p>{it.steps?.length ? <ol>{it.steps.map((st: any, k: number) => <li key={k}>{L(st)}</li>)}</ol> : null}</div></article>
        ))}</div>
      </section>
      {CH["c-car"] ? (
        <section className="know">
          <h2>{ar ? "ملاحظات المدرب عن الفرونكس" : "Coach's notes on the Fronx"} <SrcTag src="darb" /></h2>
          <ul>{CH["c-car"].teach.map((x: any, k: number) => <li key={k}><Md text={L(x)} /></li>)}</ul>
        </section>
      ) : null}
      <p className="muted small">{CAR.source.title} · {CAR.source.edition}</p>
      <NextPrev id="car" />
    </main>
  );
}
