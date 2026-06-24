import { Icon } from "./icons";
import { business } from "../data/business";
import { useLang } from "../context/LanguageContext";
import { t } from "../data/translations";

export default function Footer() {
  const { lang } = useLang();
  const tr = t[lang].footer;

  const navLinks = [
    { label: t[lang].nav.shop, href: "#services" },
    { label: t[lang].nav.why, href: "#why" },
    { label: t[lang].nav.reviews, href: "#reviews" },
    { label: t[lang].nav.visit, href: "#visit" },
  ];

  return (
    <footer className="bg-ink text-cream/80">
      <div className="container-px grid gap-12 py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-terracotta font-display text-xl italic text-cream">
              S
            </span>
            <span className="font-display text-2xl text-cream">{business.name}</span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/65">{tr.description}</p>
          <div className="mt-5 flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon.star key={i} className="h-4 w-4 text-gold" />
            ))}
            <span className="ml-2 text-sm text-cream/65">{business.rating.toFixed(1)} on Google</span>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">{tr.getInTouch}</h4>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a href={`tel:${business.phoneHref}`} className="flex items-center gap-3 hover:text-cream">
                <Icon.phone className="h-4 w-4 text-terracotta" /> {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={business.directionsUrl} target="_blank" rel="noreferrer" className="flex items-start gap-3 hover:text-cream">
                <Icon.pin className="mt-0.5 h-4 w-4 shrink-0 text-terracotta" /> {business.address}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Icon.clock className="h-4 w-4 text-terracotta" /> {tr.hours}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">{tr.explore}</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="nav-link hover:text-cream">{l.label}</a>
              </li>
            ))}
            <li>
              <a href={business.mapsUrl} target="_blank" rel="noreferrer" className="nav-link hover:text-cream">
                {tr.googleProfile}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-px flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream/50 sm:flex-row">
          <span>© {new Date().getFullYear()} {business.name}. {tr.rights}</span>
          <span>{tr.tagline} · {business.city}, {business.region}</span>
        </div>
      </div>
    </footer>
  );
}