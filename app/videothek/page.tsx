import { videos, statusColor } from "../data";

export default function Videothek() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm text-gray-500">Beispieldaten</p>
          <h1 className="text-3xl font-extrabold text-navy">Videothek</h1>
        </div>
        <button className="rounded-xl bg-accent px-6 py-3 font-semibold text-white hover:bg-accent-dark">+ Video hochladen</button>
      </div>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((v) => (
          <article key={v.id} className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <div className="flex h-36 items-center justify-center bg-navy text-4xl text-white/60">▶</div>
            <div className="p-4">
              <span className="text-xs font-semibold text-gray-500">{v.type} · {v.date}</span>
              <h3 className="mt-1 font-bold text-navy">{v.title}</h3>
              <span className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-semibold ${statusColor[v.status]}`}>{v.status}</span>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100">
                <div className="h-full bg-accent" style={{ width: `${v.progress}%` }} />
              </div>
              <p className="mt-1 text-xs text-gray-500">Analysefortschritt: {v.progress} %</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
