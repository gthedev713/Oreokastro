import { motion } from "framer-motion";
import { Icon, iconMap } from "./icons";
import { stats } from "../data/business";
import { useLang } from "../context/LanguageContext";
import { t } from "../data/translations";

export default function WhyUs() {
  const { lang } = useLang();
  const tr = t[lang].whyus;

  return (
    <section id="why" className="relative overflow-hidden bg-sand py-24 sm:py-32">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-terracotta" /> {tr.eyebrow}
            <span className="h-px w-8 bg-terracotta" />
          </span>
          <h2 className="mt-4 font-body text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
            {tr.heading1}{" "}
            <span className="font-display font-medium italic text-terracotta-deep">{tr.heading2}</span>
          </h2>
          <p className="mt-4 text-muted">{tr.sub}</p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => {
            const IconC = iconMap[s.icon];
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-xl2 border border-line bg-card p-7"
              >
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-500 ease-out group-hover:scale-y-100" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-terracotta/12 text-terracotta-deep transition-colors duration-500 group-hover:bg-cream/15 group-hover:text-gold">
                      <IconC className="h-6 w-6" />
                    </div>
                    <Icon.arrow className="h-5 w-5 -translate-x-2 text-muted opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:text-gold group-hover:opacity-100" />
                  </div>
                  <div className="mt-8 font-display text-5xl text-ink transition-colors duration-500 group-hover:text-cream">
                    {s.value}
                  </div>
                  <div className="mt-2 text-sm font-semibold uppercase tracking-wide text-ink transition-colors duration-500 group-hover:text-cream">
                    {s.label}
                  </div>
                  <div className="mt-1 text-sm text-muted transition-colors duration-500 group-hover:text-cream/70">
                    {s.caption}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}