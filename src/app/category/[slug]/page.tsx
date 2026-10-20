type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-6 px-4 py-10 sm:px-6">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-red-700">Category</p>
        <h1 className="text-3xl font-black text-slate-900">{title}</h1>
        <p className="mt-3 text-slate-600">
          This section is ready for category-based news content and can be connected to the API later.
        </p>
      </section>
    </main>
  );
}
