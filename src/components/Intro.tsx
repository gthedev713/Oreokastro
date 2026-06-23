import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Intro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-cream"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid h-20 w-20 place-items-center rounded-full bg-terracotta font-display text-4xl italic text-cream"
          >
            S
          </motion.span>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-5 font-display text-3xl italic tracking-tight text-ink"
          >
            Stella Attiva
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-muted"
          >
            Oreokastro · Thessaloniki
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 1.2, ease: "easeInOut" }}
            style={{ originX: 0 }}
            className="mt-10 h-px w-32 bg-terracotta/40"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}