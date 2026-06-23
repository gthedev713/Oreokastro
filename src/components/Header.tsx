import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "./icons";
import { business, navLinks } from "../data/business";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const mobileMenu = (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-ink/40 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
            className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-cream p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-2xl italic text-ink">{business.name}</span>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-full border border-ink/15"
              >
                <Icon.close className="h-5 w-5" />
              </button>
            </div>
            <nav className="mt-10 flex flex-col gap-2">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.1 }}
                  className="border-b border-line py-4 font-display text-2xl text-ink"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-3 pt-8">
              <a href={`tel:${business.phoneHref}`} className="btn-primary w-full">
                <Icon.phone className="h-4 w-4" /> Call {business.shortName}
              </a>
              <a href={business.directionsUrl} target="_blank" rel="noreferrer" className="btn-outline w-full">
                <Icon.pin className="h-4 w-4" /> Get directions
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/85 shadow-soft backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="container-px flex h-[72px] items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-terracotta text-cream font-display text-xl italic">
              S
            </span>
            <span className="leading-tight">
              <span className="block font-display text-xl tracking-tight text-ink">
                {business.name}
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.32em] text-muted">
                {business.city} · {business.region}
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="nav-link text-sm font-medium text-ink/80 hover:text-ink">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={business.directionsUrl} target="_blank" rel="noreferrer" className="btn-outline">
              <Icon.pin className="h-4 w-4" /> Directions
            </a>
            <a href={`tel:${business.phoneHref}`} className="btn-primary">
              <Icon.phone className="h-4 w-4" /> Call us
            </a>
          </div>

          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-ink lg:hidden"
          >
            <Icon.menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {createPortal(mobileMenu, document.body)}
    </>
  );
}