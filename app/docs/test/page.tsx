export default function Page() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-6 p-6 py-12">
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          Components
        </p>
        <h1 className="text-4xl font-bold tracking-tight">Components</h1>
      </div>

      <section className="space-y-6 text-base leading-7 text-neutral-700">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-neutral-900">Code Block</h2>
          <pre className="overflow-x-auto rounded-2xl bg-neutral-950 p-4 text-sm text-neutral-100">
            <code>{`console.log('Hello World');`}</code>
          </pre>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-neutral-900">Cards</h2>
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
        </div>
      </section>
    </main>
  );
}
