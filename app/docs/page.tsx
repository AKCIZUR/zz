import Link from 'next/link';

const docs = [
  {
    slug: 'index',
    title: 'Hello World',
    description: 'Your first document',
  },
  {
    slug: 'test',
    title: 'Components',
    description: 'Components',
  },
];

export default function DocsIndexPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-8 p-6 py-12">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          Docs
        </p>
        <h1 className="text-3xl font-bold tracking-tight">Obsah dokumentace</h1>
        <p className="text-neutral-600">
          Zde jsou ukázkové MDX stránky, které můžeš nahradit vlastním obsahem.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2">
        {docs.map((doc) => (
          <Link
            key={doc.slug}
            href={`/docs/${doc.slug}`}
            className="rounded-2xl border border-neutral-200 p-5 shadow-sm transition hover:border-neutral-400"
          >
            <h2 className="text-xl font-semibold">{doc.title}</h2>
            <p className="mt-2 text-sm text-neutral-600">{doc.description}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
