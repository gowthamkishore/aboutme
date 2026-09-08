"use client";

import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "Why did you start Gixtronix instead of staying employed?",
    a: "After a couple of years as an application and project engineer, I wanted to own what I built rather than just execute someone else's roadmap. Gixtronix started in 2016 out of that need for independence.",
  },
  {
    q: "What kind of work do you actually do?",
    a: "Test & measurement, manufacturing automation, intelligent IIoT, embedded systems, and application/software development for automotive, energy, defense, and advanced industrial manufacturers.",
  },
  {
    q: "What have the ISRO, DRDO, and HAL engagements involved?",
    a: "Defense and aerospace R&D test systems, including a hydraulic bearing & damper rig up to 200kN load and a real-time IC engine validation system.",
  },
  {
    q: "Are you still studying?",
    a: "Yes, I'm pursuing an MTech in Embedded Systems at BITS Pilani (WILP), part-time, alongside running Gixtronix.",
  },
  {
    q: "Do you take on freelance or consulting work?",
    a: "Yes, through Gixtronix Technologies. Most engagements integrate with existing PLCs, SCADA, MES, ERP, or legacy equipment rather than starting from scratch.",
  },
  {
    q: "Where are you based?",
    a: "Chennai, Tamil Nadu, India.",
  },
  {
    q: "Can I see past work?",
    a: "Yes, case studies across test rigs, SCADA systems, and IIoT deployments are available on request. Just reach out.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-3xl font-semibold text-accent sm:text-4xl">
            Questions worth answering upfront
          </h2>
        </Reveal>

        <div className="mt-10 max-w-3xl divide-y divide-border border-t border-border">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-base font-semibold">{item.q}</span>
                  <CaretDown
                    size={18}
                    weight="bold"
                    className={`shrink-0 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                    isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-base text-muted">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
