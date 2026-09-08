import { GameController, Car, Airplane, Compass } from "@phosphor-icons/react/dist/ssr";
import Reveal from "./Reveal";

const GAME_FEATURES = [
  "Fast-paced 2D aerial dogfight gameplay",
  "Real-time global leaderboard",
  "Homing missile system",
  "Radio command story system",
  "Haptic feedback and immersive SFX",
  "Full offline support",
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="max-w-[680px] text-3xl font-semibold sm:text-4xl">
            Off the clock
          </h2>
        </Reveal>

        <Reveal delay={75}>
          <div className="mt-12 rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <GameController size={24} weight="light" className="text-foreground" />
                <h3 className="mt-4 text-lg font-semibold">
                  SkyMaster Rogue: a game I built
                </h3>
                <p className="mt-2 max-w-[520px] text-base text-muted">
                  A self-developed mobile game: fast-paced 2D aerial
                  dogfights with homing missiles and a radio command story
                  system.
                </p>
              </div>
              <a
                href="https://play.google.com/store/apps/details?id=com.skymaster.rogue&hl=en_IN"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
              >
                Play on Google Play
              </a>
            </div>
            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-2 text-base text-muted sm:grid-cols-2">
              {GAME_FEATURES.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="text-foreground">–</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Reveal delay={125}>
            <div className="h-full rounded-2xl border border-border bg-surface p-6">
              <div className="flex gap-2">
                <Car size={24} weight="light" className="text-foreground" />
                <Airplane size={24} weight="light" className="text-foreground" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Cars &amp; aviation</h3>
              <p className="mt-2 text-base text-muted">
                An enthusiast for anything with an engine or wings, the
                same curiosity that took RC cars apart as a kid still
                shows up here.
              </p>
            </div>
          </Reveal>
          <Reveal delay={175}>
            <div className="h-full rounded-2xl border border-border bg-surface p-6">
              <Compass size={24} weight="light" className="text-foreground" />
              <h3 className="mt-4 text-lg font-semibold">Travel</h3>
              <p className="mt-2 text-base text-muted">
                Chasing hidden gems and the people behind them, across
                almost every state in India, and further out to Vietnam,
                Thailand, Malaysia, and Singapore.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
