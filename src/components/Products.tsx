import { Broadcast, Factory, ChartLine } from "@phosphor-icons/react/dist/ssr";
import Reveal from "./Reveal";

const PRODUCTS = [
  {
    icon: Broadcast,
    tag: "Hardware · DAQ module",
    title: "GixDAQ",
    detail:
      "16-bit data acquisition module with built-in AI anomaly detection and waveform prediction. 8 analog + 8 digital channels, over USB or WiFi cloud streaming, with native Python and LabVIEW libraries.",
    href: "https://products.gixtronix.com/",
  },
  {
    icon: Factory,
    tag: "Software · MES / traceability",
    title: "Gixtrack",
    detail:
      "Production line tracking and traceability with 100% station-by-station validation. Torque capture, vision inspection, RFID and barcode, PLC integration, and a digital birth certificate for every product.",
    href: "https://products.gixtronix.com/",
  },
  {
    icon: ChartLine,
    tag: "Software · OEE platform",
    title: "Smart OEE",
    detail:
      "Real-time OEE monitoring with automatic PLC downtime capture, Pareto root-cause analysis, shift-by-shift trending, and mobile alerts for critical downtime events.",
    href: "https://products.gixtronix.com/",
  },
];

export default function Products() {
  return (
    <section id="products" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="max-w-[680px] text-3xl font-semibold sm:text-4xl">
            Products I built, mostly solo
          </h2>
        </Reveal>
        <Reveal delay={50}>
          <p className="mt-4 max-w-[680px] text-lg text-muted">
            Alongside client engagements, I&rsquo;ve designed and built
            Gixtronix Technologies&rsquo; own product line — from hardware
            to software — largely on my own.
          </p>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.title} delay={100 + i * 75}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.01]"
              >
                <p.icon size={24} weight="light" className="text-foreground" />
                <span className="mt-4 text-xs font-medium tracking-wide text-muted uppercase">
                  {p.tag}
                </span>
                <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-base text-muted">{p.detail}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
