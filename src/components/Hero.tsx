import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "./icons";
import { business } from "../data/business";
import { useLang } from "../context/LanguageContext";
import { t } from "../data/translations";
import hero1 from "../assets/hero-1.jpg";
import hero2 from "../assets/hero-2.jpg";
import hero3 from "../assets/hero-3.jpg";

const images = [hero1, hero2, hero3];
const AUTO_MS = 5500;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const { lang } = useLang();
  const tr = t[lang].hero;
  const slides = tr.slides.map((s, i) => ({ ...s, image: images[i] }));

  const go = useCallback((dir: number) => {
    setIndex((i) => (i + dir + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % slides.length), AUTO_MS);
    return () => clearInterval(timer);
  }, [index, slides.length]);

  const slide = slides[index];

  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img src={slide.image} alt="" className="h-full w-full origin-center animate-kenburns object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/35 to-ink/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/55 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="container-px relative flex h-full flex-col justify-end pb-24 pt-28 sm:justify-center">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index + lang}
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6 }}
            >
              <span className="eyebrow text-gold">
                <span className="h-px w-8 bg-gold" />
                {slide.eyebrow}
              </span>
              <h1 className="mt-5 font-body text-5xl font-bold leading-[0.98] tracking-tight text-cream sm:text-6xl lg:text-7xl">
                {slide.lead}{" "}
                <span className="font-display font-medium italic text-blush">{slide.emphasis}</span>{" "}
                {slide.tail}
              </h1>
              <p className="mt-6 max-w-xl text-base text-cream/85 sm:text-lg">{slide.subtitle}</p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#visit" className="btn-primary">
              {tr.cta1} <Icon.arrow className="h-4 w-4" />
            </a>
            <a href={business.directionsUrl} target="_blank" rel="noreferrer" className="btn-ghost-light">
              <Icon.pin className="h-4 w-4" /> {tr.cta2}
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <button aria-label="Previous slide" onClick={() => go(-1)} className="grid h-11 w-11 place-items-center rounded-full border border-cream/40 text-cream transition hover:bg-cream/15">
              <Icon.arrowLeft className="h-5 w-5" />
            </button>
            <button aria-label="Next slide" onClick={() => go(1)} className="grid h-11 w-11 place-items-center rounded-full border border-cream/40 text-cream transition hover:bg-cream/15">
              <Icon.arrow className="h-5 w-5" />
            </button>
            <div className="ml-2 flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? "w-9 bg-gold" : "w-3 bg-cream/45 hover:bg-cream/70"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}