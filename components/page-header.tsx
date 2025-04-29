export function PageHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="bg-slate-950 text-white py-16 md:py-24">
      <div className="container text-center mx-auto">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
          {title}
        </h1>
        <p className="text-slate-300 max-w-2xl mx-auto">{description}</p>
      </div>
    </section>
  );
}
