import { motion } from "framer-motion";
import { Icon } from "./icons";
import { business } from "../data/business";
import { useLang } from "../context/LanguageContext";
import { t } from "../data/translations";

export default function CTA() {
  const { lang } = useLang();
  const tr = t[lang].cta;

  return (
    <section className="bg-cream px-5 pb-24 sm:px-8 sm:pb-32 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-xl3 bg-gradient-to-br from-terracotta via-rosewood to-plum px-8 py-16 text-center text-cream shadow-lift sm:px-16 sm:py-20"
      >
        <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-gold/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-blush/20 blur-3xl" />
        <div className="relative">
          <span className="eyebrow justify-center text-gold">
            <span className="h-px w-8 bg-gold" /> {tr.eyebrow}
            <span className="h-px w-8 bg-gold" />
          </span>
          <h2 className="mx-auto mt-5 max-w-3xl text-balance font-body text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            {tr.heading1}{" "}
            <span className="font-display font-medium italic text-blush">{tr.heading2}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-cream/85">{tr.sub}</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a href={`tel:${business.phoneHref}`} className="btn bg-cream text-ink hover:bg-blush">
              <Icon.phone className="h-4 w-4" /> {tr.call} {business.phoneDisplay}
            </a>
            <a href={business.directionsUrl} target="_blank" rel="noreferrer" className="btn-ghost-light">
              <Icon.pin className="h-4 w-4" /> {tr.directions}
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}