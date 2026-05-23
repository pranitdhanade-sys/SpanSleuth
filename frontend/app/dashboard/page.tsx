const incidents = [
  { id: 'inc_101', service: 'payment', severity: 'critical', latency: 850 },
  { id: 'inc_102', service: 'auth', severity: 'high', latency: 420 },
];

export default function DashboardPage() {
  return (
    <main className="p-8 space-y-6">
      <h1 className="text-2xl font-semibold">Observability Dashboard</h1>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-xl bg-white/10 p-4">Requests: 12.4k/min</div>
        <div className="rounded-xl bg-white/10 p-4">P95: 220ms</div>
        <div className="rounded-xl bg-white/10 p-4">Active Incidents: 2</div>
      </section>
      <section className="rounded-xl bg-white/5 p-4">
        <h2 className="font-medium mb-2">Live Incident Feed</h2>
        {incidents.map((inc) => (
          <div key={inc.id} className="border-b border-white/10 py-2 text-sm">
            {inc.id} · {inc.service} · {inc.severity} · latency {inc.latency}ms
          </div>
        ))}
      </section>
    </main>
  );
}
