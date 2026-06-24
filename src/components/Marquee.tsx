import { Icon } from "./icons";
import { useLang } from "../context/LanguageContext";
import { t } from "../data/translations";

export default function Marquee() {
  const { lang } = useLang();
  const items = t[lang].marquee;
  const loop = [...items, ...items];

  return (
    <div className="group relative overflow-hidden border-y border-terracotta-deep/30 bg-terracotta text-cream">
      <div className="flex w-max animate-marquee items-center gap-10 py-4 group-hover:[animation-play-state:paused]">
        {loop.map((item, i) => (
          <div key={i} className="flex items-center gap-10">
            <span className="flex items-center gap-2.5 whitespace-nowrap text-sm font-medium tracking-wide">
              {item.kind === "stat" ? (
                <Icon.star className="h-4 w-4 text-gold" />
              ) : (
                <Icon.quote className="h-4 w-4 text-blush" />
              )}
              {item.text}
            </span>
            <span className="text-gold/80">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}