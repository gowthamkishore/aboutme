import Image from "next/image";
import { Briefcase } from "@phosphor-icons/react/dist/ssr";
import { BASE_PATH } from "@/lib/base-path";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="px-6 pt-40 pb-20 sm:pt-48 sm:pb-24">
      <div className="mx-auto flex max-w-[680px] flex-col items-center text-center">
        <Reveal>
          <Image
            src={`${BASE_PATH}/gowtham.png`}
            alt="Gowtham Kishore"
            width={128}
            height={128}
            priority
            className="mb-6 h-32 w-32 rounded-full border border-border object-cover"
          />
        </Reveal>
        <Reveal>
          <h1 className="text-4xl leading-tight font-bold sm:text-6xl">
            <span className="text-foreground">Gowtham </span>
            <span className="bg-gradient-to-r from-accent-2 to-[#c9c4fb] bg-clip-text text-transparent">
              Kishore
            </span>
          </h1>
        </Reveal>
        <Reveal delay={75}>
          <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-sm font-medium text-muted">
            <Briefcase size={16} weight="light" className="text-accent-2" />
            Founder of Gixtronix Technologies
          </span>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-6 text-lg text-muted">
            Founder and engineer, turning a lifelong curiosity about how
            things work into systems that run on real factory floors.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="#services"
              className="btn-glow rounded-lg border border-accent px-6 py-3 text-base font-semibold text-foreground transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
            >
              What I can do for you
            </a>
            <a
              href="#achievements"
              className="rounded-lg border border-border px-6 py-3 text-base font-semibold text-foreground transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-foreground active:scale-[0.98]"
            >
              See my work
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
