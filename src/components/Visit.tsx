import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "./icons";
import { business, schedule } from "../data/business";

const dayOrder = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function parseTime(t: string): number {
  const [h, m] = t.trim().split(":").map(Number);
  return h * 60 + m;
}

function isOpenNow(hours: string[]): boolean {
  const now = new Date();
  const current = now.getHours() * 60 + now.getMinutes();
  return hours.some((slot) => {
    const [from, to] = slot.split("–").map(parseTime);
    return current >= from && current < to;
  });
}

export default function Visit() {
  const todayName = dayOrder[new Date().getDay()];
  const todayIndex = schedule.findIndex((d) => d.day === todayName);
  const [openIndex, setOpenIndex] = useState(todayIndex === -1 ? 0 : todayIndex);
  const today = schedule[todayIndex];
  const openNow = today && !today.closed && isOpenNow(today.hours);

  return (
    <section id="visit" className="bg-cream py-24 sm:py-32">
      <div className="container-px grid gap-8 lg:grid-cols-2">
        {/* Left: address + CTAs */}
        <div className="flex flex-col gap-6">
          <div>
            <span className="eyebrow">
              <span className="h-px w-8 bg-terracotta" /> Come say hello
            </span>
            <h2 className="mt-4 font-body text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
              Find us in the heart of{" "}
              <span className="font-display font-medium italic text-terracotta-deep">
                {business.city}
              </span>
            </h2>
          </div>

          <div className="rounded-xl2 border border-line bg-card p-7 shadow-soft">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-terracotta/12 text-terracotta-deep">
                <Icon.pin className="h-6 w-6" />
              </span>
              <div>
                <div className="text-sm font-semibold uppercase tracking-wide text-muted">Our boutique</div>
                <div className="mt-1 font-display text-2xl text-ink">{business.address}</div>
                <div className="mt-1 text-sm text-muted">Plus code {business.plusCode}</div>
              </div>
            </div>

            <div className="my-6 h-px bg-line" />

            <div className="flex items-center gap-3">
              <span
                className={`inline-flex h-2.5 w-2.5 rounded-full ${
                  openNow ? "bg-olive" : "bg-rosewood"
                }`}
              />
              <span className="text-sm font-medium text-ink">
                {openNow ? "Open now" : "Closed now"} ·{" "}
                <span className="text-muted">
                  {today ? today.hours.join(" & ") : "See full hours"}
                </span>
              </span>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a href={`tel:${business.phoneHref}`} className="btn-primary">
                <Icon.phone className="h-4 w-4" /> {business.phoneDisplay}
              </a>
              <a href={business.directionsUrl} target="_blank" rel="noreferrer" className="btn-outline">
                <Icon.pin className="h-4 w-4" /> Get directions
              </a>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl2 border border-line shadow-soft">
            <iframe
              title={`Map showing ${business.name} in ${business.city}`}
              src="https://www.google.com/maps?q=Stella+attiva+Aristotelous+2+Oreokastro+570+13&z=15&output=embed"
              className="h-[200px] w-full grayscale-[0.15]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
              href={business.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-3 right-3 btn-ink text-xs"
            >
              Open in Maps <Icon.arrow className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Right: schedule accordion */}
        <div className="rounded-xl2 border border-line bg-card p-7 shadow-soft">
          <div className="flex items-center gap-3">
            <Icon.clock className="h-6 w-6 text-terracotta-deep" />
            <h3 className="font-display text-3xl text-ink">Weekly hours</h3>
          </div>
          <p className="mt-2 text-sm text-muted">
            Tap any day to expand. Today is highlighted for you.
          </p>

          <div className="mt-6 flex flex-col gap-2">
            {schedule.map((d, i) => {
              const isToday = i === todayIndex;
              const isOpen = i === openIndex;
              return (
                <div
                  key={d.day}
                  className={`overflow-hidden rounded-2xl border transition-colors ${
                    isToday ? "border-terracotta bg-terracotta/8" : "border-line bg-cream/60"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between px-5 py-4 text-left"
                  >
                    <span className="flex items-center gap-3">
                      <span className={`font-display text-xl ${isToday ? "text-terracotta-deep" : "text-ink"}`}>
                        {d.day}
                      </span>
                      {isToday && (
                        <span className="rounded-full bg-terracotta px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-cream">
                          Today
                        </span>
                      )}
                    </span>
                    <span className="flex items-center gap-3">
                      <span className={`text-sm ${d.closed ? "text-rosewood" : "text-muted"}`}>
                        {d.closed ? "Closed" : d.hours[0]}
                      </span>
                      <Icon.chevron
                        className={`h-4 w-4 text-muted transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-4">
                          <div className="flex flex-wrap gap-2">
                            {d.hours.map((h) => (
                              <span
                                key={h}
                                className={`rounded-full px-3 py-1.5 text-sm font-medium ${
                                  d.closed
                                    ? "bg-rosewood/12 text-rosewood"
                                    : "bg-olive/12 text-olive"
                                }`}
                              >
                                {h}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}