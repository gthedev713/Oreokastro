import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import { iconMap } from "./icons";
import { services } from "../data/business";
import { useLang } from "../context/LanguageContext";
import { t } from "../data/translations";

const tintBg: Record<string, string> = {
  terracotta: "bg-terracotta/12 text-terracotta-deep",
  rosewood: "bg-rosewood/12 text-rosewood",
  plum: "bg-plum/12 text-plum",
  gold: "bg-gold/15 text-terracotta-deep",
  olive: "bg-olive/15 text-olive",
};

export default function Services() {
  const { lang } = useLang();
  const tr = t[lang].services;

  return (
    <section id="services" className="relative bg-cream py-24 sm:py-32">
      <div className="container-px">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <span className="eyebrow">
              <span className="h-px w-8 bg-terracotta" /> {tr.eyebrow}
            </span>
            <h2 className="mt-4 font-body text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
              {tr.heading1}{" "}
              <span className="font-display font-medium italic text-terracotta-deep">{tr.heading2}</span>
            </h2>
          </div>
          <p className="max-w-sm text-muted">{tr.sub}</p>
        </div>
        <div className="mt-14 grid auto-rows-[minmax(170px,auto)] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {services.map((s, i) => {
            const IconC = iconMap[s.icon];
            const translated = tr.items[i];
            return (
              <motion.div
                key={s.icon + i}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
                className={s.span}
              >
                <TiltCard className="h-full">
                  <div className="flex h-full flex-col justify-between overflow-hidden rounded-xl2 border border-line bg-card p-7 shadow-soft transition-shadow duration-300 group-hover:shadow-lift">
                    <div className={`grid h-12 w-12 place-items-center rounded-2xl ${tintBg[s.tint]}`}>
                      <IconC className="h-6 w-6" />
                    </div>
                    <div className="mt-6">
                      <h3 className="font-display text-2xl text-ink">{translated.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{translated.blurb}</p>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}