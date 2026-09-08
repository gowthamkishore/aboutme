import Reveal from "./Reveal";

const PARAGRAPHS = [
  `Growing up in the 90s, I was the kid who took RC cars apart just to
  understand how the wireless signal got from the remote to the wheels.
  By college, I'd graduated to dismantling and rebuilding entire PCs, and
  fixing whatever household appliance broke down — more out of curiosity
  than obligation.`,
  `Like most Indian households, engineering was already the plan for me.
  But that same curiosity is what pointed me toward Electronics and
  Instrumentation Engineering (2010–2014) instead of leaving the choice
  to chance.`,
  `The years right after graduation weren't a straight line. I wrote the
  AFCAT three times and didn't clear it. I made it through a week of Army
  selection and came up short there too. Every door I thought I wanted
  kept closing.`,
  `What opened instead was a role in Bangalore as an Application Engineer,
  building LabVIEW-based software for industrial automation (2014–2015),
  followed by a move to Chennai as a Project Engineer (2015–2016).`,
  `By 2016 I wanted to own what I built instead of just executing someone
  else's roadmap, so I founded Gixtronix Technologies. A decade, 100+
  systems, and partners like ISRO, DRDO, and HAL later, I'm still the
  same kid who wants to know how things work — just with better tools
  now. I'm also back in the classroom part-time, pursuing an MTech in
  Embedded Systems at BITS Pilani (2024–2025), alongside running the
  company.`,
];

export default function Story() {
  return (
    <section id="story" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-[680px]">
        <Reveal>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            How a curious kid became an engineer
          </h2>
        </Reveal>
        <div className="mt-8 space-y-5">
          {PARAGRAPHS.map((p, i) => (
            <Reveal key={i} delay={i * 75}>
              <p className="text-lg leading-relaxed text-muted">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
