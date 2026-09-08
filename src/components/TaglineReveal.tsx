"use client";

import { useEffect, useRef, useState } from "react";

const LINES = [
  "I didn't set out to build a company.",
  "I just never stopped taking things apart.",
];

export default function TaglineReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCount, setActiveCount] = useState(0);

  const words = LINES.join(" ").split(" ");

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            words.forEach((_, i) => {
              setTimeout(() => setActiveCount((c) => Math.max(c, i + 1)), i * 60);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let wordIndex = 0;

  return (
    <section className="border-y border-border">
      <div
        ref={containerRef}
        className="mx-auto max-w-[680px] px-6 py-20 text-center sm:py-24"
      >
        {LINES.map((line, lineIdx) => (
          <p
            key={lineIdx}
            className="flex flex-wrap justify-center gap-x-[0.35em] text-3xl leading-tight font-semibold sm:text-4xl"
          >
            {line.split(" ").map((w, i) => {
              const idx = wordIndex++;
              return (
                <span
                  key={i}
                  className={`word ${idx < activeCount ? "is-active" : ""}`}
                >
                  {w}
                </span>
              );
            })}
          </p>
        ))}
      </div>
    </section>
  );
}
