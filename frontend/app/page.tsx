import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">PulseGuard AI</h1>
      <p className="text-slate-400 mt-2">AI-native API failure detection and debugging.</p>
      <Link href="/dashboard" className="mt-4 inline-block rounded bg-cyan-500 px-4 py-2 text-black">Open Dashboard</Link>
    </main>
  );
}
