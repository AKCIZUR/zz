import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="max-w-xl space-y-6 text-center">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
            DocsFuma
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Dokumentace připravená pro GitHub Pages
          </h1>
          <p className="text-base text-neutral-600">
            Jednoduchý vstupní bod s odkazy na dokumentaci a ukázkové stránky.
          </p>
        </div>

        <div className="flex items-center justify-center gap-3">
          <Link
            href="/docs"
            className="rounded-full bg-black px-5 py-3 text-sm font-medium text-white"
          >
            Otevřít dokumentaci
          </Link>
          <Link
            href="https://github.com/AKCIZUR/docs-zlh"
            className="rounded-full border border-neutral-300 px-5 py-3 text-sm font-medium"
          >
            GitHub
          </Link>
        </div>
      </div>
    </main>
  );
}
