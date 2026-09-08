import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <span className="text-sm font-medium text-muted">404</span>
      <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">
        This page did not ship
      </h1>
      <p className="mt-3 max-w-[440px] text-base text-muted">
        The page you are looking for does not exist or moved. Head back and
        try again.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-foreground px-6 py-3 text-base font-semibold text-background transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
      >
        Back home
      </Link>
    </main>
  );
}
