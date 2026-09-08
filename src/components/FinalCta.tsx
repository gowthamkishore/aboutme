import Reveal from "./Reveal";

export default function FinalCta() {
  return (
    <section id="contact" className="px-6 py-20 sm:py-28">
      <Reveal>
        <div className="mx-auto flex max-w-[680px] flex-col items-center rounded-2xl border border-border bg-surface px-8 py-16 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Let&rsquo;s talk
          </h2>
          <p className="mt-4 text-lg text-muted">
            Whether it&rsquo;s a new engineering challenge, a collaboration,
            or just to say hi. I read every message myself.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="mailto:gowthamkishorer@gixtronix.in"
              className="rounded-full bg-foreground px-6 py-3 text-base font-semibold text-background transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.02] active:scale-[0.98]"
            >
              gowthamkishorer@gixtronix.in
            </a>
            <a
              href="https://www.linkedin.com/in/gowthamkishorer/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-6 py-3 text-base font-semibold text-foreground transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
