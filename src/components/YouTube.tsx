/* Embedded official video with a visible citation. Uses the privacy-enhanced youtube-nocookie player. */
import { useState } from "react";
import { PlayCircle, ExternalLink } from "lucide-react";
import { useStore } from "../lib/store";

export type Vid = { id: string; en: string; ar: string; channel: string; channelUrl: string };
export const DVSA_CH = { channel: "Driver and Vehicle Standards Agency (DVSA)", channelUrl: "https://www.youtube.com/@dvsagovuk" };
export const VIDEOS: Record<string, Vid> = {
  hazard: { id: "SdQRkmdhwJs", en: "Hazard perception test 2026: official DVSA guide", ar: "اختبار إدراك المخاطر 2026: دليل DVSA الرسمي", ...DVSA_CH },
  theory: { id: "7womeV0brCo", en: "Theory test 2026: official DVSA guide", ar: "الاختبار النظري 2026: دليل DVSA الرسمي", ...DVSA_CH },
  driving: { id: "5dZRbU2MiDk", en: "Driving test 2026: official DVSA guide", ar: "اختبار القيادة 2026: دليل DVSA الرسمي", ...DVSA_CH },
  tellme: { id: "uh8slnP76-w", en: "'Show me, tell me': tell me questions 2026: official DVSA guide", ar: "أسئلة «أرني، أخبرني» 2026: دليل DVSA الرسمي", ...DVSA_CH },
};

export function YouTube({ v }: { v: Vid }) {
  const { L, ar } = useStore();
  const [on, setOn] = useState(false);
  return (
    <figure className="yt">
      <div className="yt-frame">
        {on ? (
          <iframe src={`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0`} title={L(v)} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />
        ) : (
          <button className="yt-poster" onClick={() => setOn(true)} style={{ backgroundImage: `url(https://i.ytimg.com/vi/${v.id}/hqdefault.jpg)` }} aria-label={(ar ? "تشغيل: " : "Play: ") + L(v)}><PlayCircle size={56} /></button>
        )}
      </div>
      <figcaption>
        <b>{L(v)}</b>
        <span className="yt-cite">{ar ? "المصدر: " : "Source: "}<a href={v.channelUrl} target="_blank" rel="noopener noreferrer">{v.channel}</a>, YouTube · <a href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener noreferrer">youtube.com/watch?v={v.id} <ExternalLink size={11} /></a></span>
      </figcaption>
    </figure>
  );
}
