import { Icon } from "./icons";
import { business, navLinks } from "../data/business";

export default function Footer() {
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
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/65">
            A women-owned boutique in {business.city}, {business.region}. Hand-picked
            womenswear, honest styling, and a warm welcome every time.
          </p>
          <div className="mt-5 flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon.star key={i} className="h-4 w-4 text-gold" />
            ))}
            <span className="ml-2 text-sm text-cream/65">
              {business.rating.toFixed(1)} on Google
            </span>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">Get in touch</h4>
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
              <Icon.clock className="h-4 w-4 text-terracotta" /> Mon–Sat · See weekly hours
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">Explore</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="nav-link hover:text-cream">{l.label}</a>
              </li>
            ))}
            <li>
              <a href={business.mapsUrl} target="_blank" rel="noreferrer" className="nav-link hover:text-cream">
                Google profile
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-px flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream/50 sm:flex-row">
          <span>© {new Date().getFullYear()} {business.name}. All rights reserved.</span>
          <span>Boutique womenswear · {business.city}, {business.region}</span>
        </div>
      </div>
    </footer>
  );
}
