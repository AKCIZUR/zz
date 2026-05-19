import Link from 'next/link';

export default function Page() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-6 p-6 py-12">
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          Hello World
        </p>
        <h1 className="text-4xl font-bold tracking-tight">Your first document</h1>
      </div>

      <article className="space-y-4 text-base leading-7 text-neutral-700">
        <p>Welcome to the docs! You can start writing documents in <code>/content/docs</code>.</p>
        <h2 className="text-2xl font-semibold text-neutral-900">What is Next?</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href="https://nextjs.org/docs"
            className="rounded-2xl border border-neutral-200 p-4 shadow-sm"
            target="_blank"
            rel="noreferrer"
          >
            Learn more about Next.js
          </a>
          <a
            href="https://fumadocs.dev"
            className="rounded-2xl border border-neutral-200 p-4 shadow-sm"
            target="_blank"
            rel="noreferrer"
          >
            Learn more about Fumadocs
          </a>
        </div>
      </article>

      <Link href="/docs" className="text-sm underline underline-offset-4">
        Zpět na přehled
      </Link>
    </main>
  );
}
