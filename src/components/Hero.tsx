import Image from "next/image";
import Reveal from "./Reveal";

const LOGOS = ["ISRO", "DRDO", "HAL", "EICHER", "APTIV", "VALEO"];

export default function Hero() {
  return (
    <section id="top" className="px-6 pt-40 pb-20 sm:pt-48 sm:pb-24">
      <div className="mx-auto flex max-w-[680px] flex-col items-center text-center">
        <Reveal>
          <Image
            src="/gowtham.png"
            alt="Gowtham Kishore"
            width={128}
            height={128}
            priority
            className="mb-6 h-32 w-32 rounded-full border border-border object-cover"
          />
        </Reveal>
        <Reveal>
          <h1 className="bg-gradient-to-r from-white to-[#9b9b9b] bg-clip-text text-4xl leading-tight font-semibold text-transparent sm:text-6xl">
            Gowtham Kishore
          </h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-6 text-lg text-muted">
            I&rsquo;m a 90s kid who never stopped taking things apart,
            now building test &amp; measurement, automation, and IIoT
            systems for manufacturers across automotive, energy, defense,
            and advanced industrial sectors. Founder of Gixtronix
            Technologies.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="#story"
              className="rounded-full bg-foreground px-6 py-3 text-base font-semibold text-background transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.02] active:scale-[0.98]"
            >
              My story
            </a>
            <a
              href="#achievements"
              className="rounded-full border border-border px-6 py-3 text-base font-semibold text-foreground transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
            >
              See my work
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={300}>
        <div className="mx-auto mt-16 flex max-w-3xl flex-wrap items-center justify-center gap-x-10 gap-y-3">
          <span className="text-sm text-muted">Flagship engagements with</span>
          {LOGOS.map((logo) => (
            <span key={logo} className="text-sm font-medium text-muted">
              {logo}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
