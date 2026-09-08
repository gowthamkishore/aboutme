"use client";

import { useState } from "react";

const LINKS = [
  { label: "Story", href: "#story" },
  { label: "Timeline", href: "#timeline" },
  { label: "Skills", href: "#skills" },
  { label: "Toolkit", href: "#toolkit" },
  { label: "Achievements", href: "#achievements" },
  { label: "Products", href: "#products" },
  { label: "Hobbies", href: "#hobbies" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center">
        <nav className="mt-6 flex w-max items-center gap-6 rounded-full border border-border bg-surface/70 px-4 py-2 backdrop-blur-xl">
          <a href="#top" className="px-2 text-sm font-semibold">
            <span className="text-foreground">Gowtham </span>
            <span className="text-accent">Kishore</span>
          </a>
          <div className="hidden items-center gap-4 sm:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="btn-glow hidden rounded-lg border border-accent px-3 py-1.5 text-sm font-semibold text-foreground transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] sm:inline-block"
          >
            Get in touch
          </a>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative h-4 w-5 sm:hidden"
          >
            <span
              className={`absolute left-0 top-0 block h-0.5 w-5 origin-center bg-foreground transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 block h-0.5 w-5 origin-center bg-foreground transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-black/80 backdrop-blur-3xl transition-opacity duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] sm:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {LINKS.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className={`text-2xl font-semibold text-white transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
              open ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
            style={{ transitionDelay: open ? `${100 + i * 50}ms` : "0ms" }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className={`btn-glow mt-4 rounded-lg border border-accent px-5 py-2.5 text-base font-semibold text-white transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            open ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: open ? `${100 + LINKS.length * 50}ms` : "0ms" }}
        >
          Get in touch
        </a>
      </div>
    </>
  );
}
