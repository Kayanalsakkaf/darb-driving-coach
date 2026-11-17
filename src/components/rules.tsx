import { OctagonX, CircleAlert, Triangle, Gauge, Lightbulb, TriangleAlert } from "lucide-react";
import { useStore } from "../lib/store";
import { Md, SrcTag } from "./ui";

/* Rule summaries are optional content (src/data/summaries.js); load them if present. */
const mods = import.meta.glob("../data/summaries.js", { eager: true });
void mods;
export const SUMMARIES: Record<string, Rule[]> = (window as any).DC_DATA?.summaries || {};

export type Rule = { kind: "must" | "never" | "priority" | "number" | "tip" | "danger"; en: string; ar: string; src: "moroor" | "dvsa"; ref?: string };

export const KINDS: Record<Rule["kind"], { en: string; ar: string; Icon: any }> = {
  never: { en: "Never", ar: "ممنوع", Icon: OctagonX },
  must: { en: "Must", ar: "يجب", Icon: CircleAlert },
  priority: { en: "Priority", ar: "الأولوية", Icon: Triangle },
  number: { en: "Numbers", ar: "أرقام", Icon: Gauge },
  danger: { en: "Watch for", ar: "انتبه", Icon: TriangleAlert },
  tip: { en: "Good practice", ar: "ممارسة جيدة", Icon: Lightbulb },
};
const ORDER: Rule["kind"][] = ["never", "must", "priority", "number", "danger", "tip"];

/** The rules of a topic in brief: one line each, grouped by kind, every line tagged with its source. */
export function RuleCards({ id }: { id: string }) {
  const { L, ar } = useStore();
  const rules = SUMMARIES[id];
  if (!rules?.length) return null;
  return (
    <div className="rules">
      {ORDER.map((k) => {
        const list = rules.filter((r) => r.kind === k);
        if (!list.length) return null;
        const { Icon } = KINDS[k];
        return (
          <section key={k} className={"rule-group rk-" + k}>
            <h3><Icon size={18} strokeWidth={2.5} aria-hidden="true" /> {L(KINDS[k])}</h3>
            <ul>
              {list.map((r, i) => (
                <li key={i}><span className="rule-txt"><Md text={L(r)} /></span> <SrcTag src={r.src} at={r.ref ? (r.src === "moroor" ? (ar ? "ص " : "p. ") : ar ? "قاعدة " : "Rule ") + r.ref : undefined} /></li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
