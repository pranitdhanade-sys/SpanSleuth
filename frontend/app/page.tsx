import Link from 'next/link';

const cards = [
  { label: 'Pipeline Reliability', value: '99.3%', note: '7d stability score' },
  { label: 'Median UI Runtime', value: '8m 42s', note: 'warm-cache avg' },
  { label: 'Flaky Tests Quarantined', value: '12', note: 'auto-tagged @flaky' },
  { label: 'Parallel Workers', value: '8', note: 'browser × shard matrix' }
];

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl p-8">
      <h1 className="text-3xl font-bold">PulseGuard AI</h1>
      <p className="mt-2 text-slate-400">AI-native API failure detection and debugging.</p>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <article key={card.label} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <p className="text-xs uppercase tracking-wide text-cyan-400">{card.label}</p>
            <p className="mt-2 text-2xl font-semibold">{card.value}</p>
            <p className="mt-1 text-xs text-slate-400">{card.note}</p>
          </article>
        ))}
      </section>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/dashboard" className="inline-block rounded bg-cyan-500 px-4 py-2 font-semibold text-black">Open Dashboard</Link>
        <span className="inline-block rounded border border-slate-700 px-4 py-2 text-slate-300">Live UI pipeline health panel</span>
      </div>
    </main>
  );
}
