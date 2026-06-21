import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { business } from "../data/business";

const DURATION = 2400;

export default function Intro() {
  const [show, setShow] = useState(() => {
    if (typeof window === "undefined") return false;
    return !sessionStorage.getItem("sa-intro-seen");
  });

  useEffect(() => {
    if (!show) return;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      sessionStorage.setItem("sa-intro-seen", "1");
      setShow(false);
    }, DURATION);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-terracotta/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-plum/40 blur-3xl" />

          <div className="relative flex flex-col items-center px-6 text-center">
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-[0.7rem] font-semibold uppercase tracking-[0.42em] text-gold"
            >
              {business.city} · {business.region}
            </motion.span>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 grid h-20 w-20 place-items-center rounded-full bg-terracotta font-display text-4xl italic text-cream shadow-lift"
            >
              S
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-display text-5xl text-cream sm:text-6xl"
            >
              Stella{" "}
              <span className="italic text-blush">attiva</span>
            </motion.h1>

            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.7, duration: 0.9, ease: "easeInOut" }}
              className="mt-6 h-px w-40 origin-center bg-gradient-to-r from-transparent via-gold to-transparent"
            />

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-5 text-sm text-cream/70"
            >
              Boutique womenswear
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
