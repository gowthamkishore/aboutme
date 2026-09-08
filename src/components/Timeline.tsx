import Reveal from "./Reveal";

const MILESTONES = [
  {
    period: "2010 – 2014",
    title: "Electronics & Instrumentation Engineering",
    detail:
      "Chose the degree that matched a lifelong curiosity about how things work, not just the one that was expected.",
  },
  {
    period: "2014 – 2015",
    title: "Application Engineer, Bangalore",
    detail:
      "First job out of college, after several closed doors, building LabVIEW-based software for industrial automation.",
  },
  {
    period: "2015 – 2016",
    title: "Project Engineer, Chennai",
    detail:
      "Moved to Chennai, closer to the industrial and defense engineering ecosystem.",
  },
  {
    period: "2016 – Present",
    title: "Founder, Gixtronix Technologies",
    detail:
      "Started the company to own what I build. 10+ years and 100+ systems deployed since, across automotive, energy, and defense.",
  },
  {
    period: "2024 – 2026",
    title: "MTech in Embedded Systems, BITS Pilani (WILP)",
    detail:
      "Went back to formal study part-time while running the company, to go deeper on embedded systems.",
  },
];

export default function Timeline() {
  return (
    <div className="space-y-10 border-l border-border pl-8">
      {MILESTONES.map((m, i) => (
        <Reveal key={m.title} delay={i * 75}>
          <div className="relative">
            <span className="absolute top-1.5 -left-[calc(2rem+5px)] h-2.5 w-2.5 rounded-full bg-accent" />
            <span className="text-sm font-medium text-muted">{m.period}</span>
            <h3 className="mt-1 text-lg font-semibold">{m.title}</h3>
            <p className="mt-2 text-base text-muted">{m.detail}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
