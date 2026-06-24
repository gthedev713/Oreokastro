import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "./icons";
import { business, reviews } from "../data/business";
import { useLang } from "../context/LanguageContext";
import { t } from "../data/translations";

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const { lang } = useLang();
  const tr = t[lang].reviews;
  const go = (dir: number) => setIndex((i) => (i + dir + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="relative overflow-hidden bg-plum py-24 text-cream sm:py-32">
      <div className="container-px grid items-center gap-14 lg:grid-cols-2">
        <div>
          <span className="eyebrow text-gold">
            <span className="h-px w-8 bg-gold" /> {tr.eyebrow}
          </span>
          <h2 className="mt-4 font-body text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {tr.heading1}{" "}
            <span className="font-display font-medium italic text-blush">{tr.heading2}</span>
          </h2>
          <div className="mt-6 flex items-center gap-3">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon.star key={i} className="h-6 w-6 text-gold" />
              ))}
            </div>
            <span className="text-cream/80">
              {business.rating.toFixed(1)} · {business.reviewCount} Google reviews
            </span>
          </div>
          <p className="mt-6 max-w-md text-cream/75">{tr.sub}</p>
          <div className="mt-8 flex items-center gap-3">
            <button onClick={() => go(-1)} className="grid h-12 w-12 place-items-center rounded-full border border-cream/30 transition hover:bg-cream/10">
              <Icon.arrowLeft className="h-5 w-5" />
            </button>
            <button onClick={() => go(1)} className="grid h-12 w-12 place-items-center rounded-full border border-cream/30 transition hover:bg-cream/10">
              <Icon.arrow className="h-5 w-5" />
            </button>
            <span className="ml-2 font-display text-xl text-cream/70">
              {String(index + 1).padStart(2, "0")} / {String(reviews.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Mobile */}
        <div className="block md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={reviews[index].name}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
            >
              <article className="rounded-xl border border-cream/15 bg-cream/[0.07] p-8 backdrop-blur-sm">
                <Icon.quote className="h-9 w-9 text-gold/70" />
                <p className="mt-4 font-display text-2xl italic leading-snug text-cream">
                  {reviews[index].quote}
                </p>
                <div className="mt-7 flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-terracotta font-display text-lg text-cream">
                    {reviews[index].initial}
                  </span>
                  <div>
                    <div className="font-semibold">{reviews[index].name}</div>
                    <div className="text-xs uppercase tracking-wide text-cream/60">{reviews[index].meta}</div>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: reviews[index].rating }).map((_, s) => (
                      <Icon.star key={s} className="h-4 w-4 text-gold" />
                    ))}
                  </div>
                </div>
              </article>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desktop */}
        <div className="relative hidden h-[340px] md:block [perspective:1400px]">
          {reviews.map((r, i) => {
            const offset = (i - index + reviews.length) % reviews.length;
            const isActive = offset === 0;
            const visible = offset < 3;
            return (
              <motion.div
                key={r.name}
                animate={{
                  z: -offset * 60,
                  y: offset * 26,
                  rotateX: offset * 4,
                  opacity: visible ? 1 - offset * 0.22 : 0,
                  scale: 1 - offset * 0.05,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 30 }}
                style={{ transformStyle: "preserve-3d", pointerEvents: isActive ? "auto" : "none" }}
                className="absolute inset-x-0 top-0"
              >
                <article className="rounded-xl border border-cream/15 bg-cream/[0.07] p-8 backdrop-blur-sm">
                  <Icon.quote className="h-9 w-9 text-gold/70" />
                  <p className="mt-4 font-display text-2xl italic leading-snug text-cream">{r.quote}</p>
                  <div className="mt-7 flex items-center gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-terracotta font-display text-lg text-cream">
                      {r.initial}
                    </span>
                    <div>
                      <div className="font-semibold">{r.name}</div>
                      <div className="text-xs uppercase tracking-wide text-cream/60">{r.meta}</div>
                    </div>
                    <div className="ml-auto flex gap-0.5">
                      {Array.from({ length: r.rating }).map((_, s) => (
                        <Icon.star key={s} className="h-4 w-4 text-gold" />
                      ))}
                    </div>
                  </div>
                </article>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}