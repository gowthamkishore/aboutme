import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
        <span>© {new Date().getFullYear()} Gowtham Kishore. Chennai, Tamil Nadu, India.</span>
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-foreground">
            Privacy policy
          </Link>
          <Link href="/terms" className="transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-foreground">
            Terms
          </Link>
          <a href="https://www.linkedin.com/in/gowthamkishorer/" target="_blank" rel="noopener noreferrer" className="transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-foreground">
            LinkedIn
          </a>
          <a href="mailto:gowthamkishorer@gixtronix.in" className="transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-foreground">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
