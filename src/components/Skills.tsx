import { Gauge, Factory, Circuitry, Code, Cpu, Rocket } from "@phosphor-icons/react/dist/ssr";
import Reveal from "./Reveal";

const SKILLS = [
  {
    icon: Gauge,
    title: "Test & Measurement",
    detail:
      "Custom ATE, end-of-line testing, HIL validation, FPGA/real-time systems, and AI-powered vision inspection.",
  },
  {
    icon: Factory,
    title: "Manufacturing Automation",
    detail:
      "SCADA, PLC/HMI programming across Siemens, Beckhoff, and Allen-Bradley, MES, motion control, and OEE / downtime tracking.",
  },
  {
    icon: Circuitry,
    title: "Intelligent IIoT & AI",
    detail:
      "IIoT architecture over MQTT and OPC UA, Azure IoT Edge, digital twins, predictive maintenance, and generative AI workflows.",
  },
  {
    icon: Code,
    title: "Application & Software",
    detail:
      "LabVIEW across Desktop, Real-Time, and FPGA, plus Python, Power BI dashboards, and Flutter mobile/web apps.",
  },
  {
    icon: Cpu,
    title: "Embedded Systems",
    detail:
      "Concept-to-production hardware, PCB design, firmware/RTOS, sharpened further by an MTech in Embedded Systems.",
  },
  {
    icon: Rocket,
    title: "Product Development",
    detail:
      "Taking products from idea to shipped, spanning SignalStream Studio, GixDAQ, Gixtrack, and Smart OEE.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-3xl font-semibold text-accent sm:text-4xl">
            Skills built through the work, not just theory
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {SKILLS.map((s, i) => (
            <Reveal key={s.title} delay={i * 75}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6">
                <s.icon size={24} weight="light" className="text-accent-2" />
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-base text-muted">{s.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
