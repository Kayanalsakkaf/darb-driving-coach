import { Check } from "lucide-react";
import { useStore } from "../lib/store";
import { CAR, CH } from "../lib/data";
import { Checklist, Md, NextPrev, SrcTag, StageHead } from "../components/ui";

const URG: Record<string, { en: string; ar: string }> = {
  stop: { en: "Stop safely now", ar: "توقف بأمان الآن" },
  soon: { en: "Check soon", ar: "افحص قريبا" },
  info: { en: "Information", ar: "معلومة" },
};

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
          <section key={sec.id} id={"car-" + sec.id} className={"car-sec" + (lights ? " lights" : "")}>
            <header className="car-sec-head">
              <h2>{L(sec)}</h2>
              <SrcTag src="fronx" />
            </header>
            {lights ? (
              <ul className="light-grid">
                {items.map((it: any) => (
                  <li key={it.id} className={"light urg-" + (it.urgency || "info")}>
                    {it.icon ? <img src={"car/" + it.icon} alt="" width={48} height={48} /> : <span className="light-noicon" />}
                    <div>
                      <span className="urg">{L(URG[it.urgency || "info"])}</span>
                      <p>{L(it)}</p>
                      <span className="muted">{pg(it.page)}</span>
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
                      <p><Md text={L(it)} /> <span className="muted">{pg(it.page)}</span>{it.variant && it.variant !== "both" ? <span className="pill">{it.variant === "manual" ? (ar ? "يدوي" : "Manual") : it.autoType || (ar ? "أوتوماتيك" : "Automatic")}</span> : null}</p>
                      {it.steps?.length ? <ol>{it.steps.map((st: any, k: number) => <li key={k}>{L(st)}</li>)}</ol> : null}
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
