import { Lightbulb, Rocket, Handshake, Code, Factory } from "@phosphor-icons/react/dist/ssr";
import Reveal from "./Reveal";

const SERVICES = [
  {
    icon: Lightbulb,
    title: "Technical consulting",
    detail:
      "A second opinion on feasibility, architecture, or a stuck problem, before you commit resources to it.",
  },
  {
    icon: Rocket,
    title: "Product building",
    detail:
      "Taking an idea from a napkin sketch to something real, and shipping it.",
  },
  {
    icon: Handshake,
    title: "Startup support",
    detail:
      "Hands-on help for early teams that need a technical co-pilot without a full-time hire.",
  },
  {
    icon: Code,
    title: "Software products",
    detail:
      "Web, mobile, and dashboard applications built for how your team actually works.",
  },
  {
    icon: Factory,
    title: "Industrial products",
    detail:
      "Hardware, automation, and test systems built for the plant floor and beyond.",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-14 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-3xl font-semibold text-accent sm:text-4xl">
            What I can do for you
          </h2>
        </Reveal>

        <div className="mt-12 border-t border-border">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 75}>
              <div className="flex flex-col gap-4 border-b border-border py-8 sm:flex-row sm:items-center sm:gap-10">
                <span className="text-sm font-medium tabular-nums text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <s.icon size={28} weight="light" className="shrink-0 text-accent-2" />
                <div className="sm:flex-1">
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-1 text-base text-muted">{s.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={SERVICES.length * 75}>
          <a
            href="#contact"
            className="btn-glow mt-10 inline-flex rounded-lg border border-accent px-6 py-3 text-base font-semibold text-foreground transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
          >
            Let&rsquo;s talk about your project
          </a>
        </Reveal>
      </div>
    </section>
  );
}
