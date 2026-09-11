import Reveal from "./Reveal";

const FEATURED_PROJECTS = [
  {
    title: "Automotive Gearbox Test Rig",
    detail:
      "Automated functional & load testing for AMT/manual gearboxes with robotic gear shifting and RPM control.",
  },
  {
    title: "EV Power Distribution Unit Test Platform",
    detail:
      "Dynamic charge/discharge simulation with overcurrent, overvoltage, and thermal protection validation.",
  },
  {
    title: "Battery Energy Storage (BESS) SCADA",
    detail:
      "Grid-connected BESS supervisory control via Modbus, DNP3, and IEC 61850 for smart-grid integration.",
  },
  {
    title: "Defense R&D Bearing & Damper Rig",
    detail:
      "Hydraulic actuator-controlled test system up to 200kN load with microsecond-level data acquisition.",
  },
  {
    title: "Defense IC Engine Validation System",
    detail:
      "Real-time engine test-cell monitoring across speed, torque, temperature, and emissions parameters.",
  },
  {
    title: "Smart Production Line Tracking",
    detail:
      "Digital-twin 'birth certificate' per product with station-level process interlocking for zero-defect output.",
  },
];

const STATS = [
  { value: "2016", label: "Founded Gixtronix Technologies" },
  { value: "10+", label: "Years of engineering experience" },
  { value: "100+", label: "Systems deployed" },
  { value: "12+", label: "Industry partners" },
];

const PARTNERS = [
  "ISRO",
  "DRDO",
  "HAL",
  "EICHER",
  "APTIV",
  "VALEO",
  "KSPG",
  "IIT",
  "MISPL",
  "SIEBENER",
  "APP",
  "TEL",
];

export default function Achievements() {
  return (
    <section id="achievements" className="px-6 py-14 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-3xl font-semibold text-accent sm:text-4xl">
            A decade of engineering impact
          </h2>
        </Reveal>

        <Reveal delay={75}>
          <div className="mt-12 grid grid-cols-2 gap-8 rounded-2xl border border-border p-8 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-semibold text-accent-2">{s.value}</div>
                <div className="mt-1 text-sm text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h3 className="mt-16 text-xl font-semibold">Featured projects</h3>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {FEATURED_PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 75}>
              <figure className="flex h-full flex-col justify-between rounded-2xl border border-border bg-surface p-6">
                <figcaption className="text-sm font-semibold">{p.title}</figcaption>
                <blockquote className="mt-3 text-base leading-relaxed text-muted">
                  {p.detail}
                </blockquote>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <h3 className="mt-16 text-xl font-semibold">Trusted by</h3>
          <p className="mt-2 text-base text-muted">Including flagship engagements with ISRO, DRDO, and HAL on defense and aerospace R&amp;D test systems.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {PARTNERS.map((p) => (
              <span
                key={p}
                className="rounded-full border border-border px-4 py-2 text-sm font-medium text-muted"
              >
                {p}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
