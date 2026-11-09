import Link from "next/link";
import { videos, statusColor } from "../data";

const stats = [
  ["Videos", "4"], ["Zur Prüfung", "1"], ["Bestätigte Aktionen", "128"], ["Spieler im Kader", "14"],
];

export default function Dashboard() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <p className="text-sm text-gray-500">Handball · männliche D-Jugend · Beispieldaten</p>
      <h1 className="text-3xl font-extrabold text-navy">Trainer-Dashboard</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([l, v]) => (
          <div key={l} className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">{l}</p>
            <p className="mt-1 text-4xl font-extrabold text-navy">{v}</p>
          </div>
        ))}
      </div>
      <h2 className="mt-8 text-xl font-bold text-navy">Zuletzt hochgeladen</h2>
      <div className="mt-4 space-y-3">
        {videos.map((v) => (
          <div key={v.id} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white p-4 shadow-sm">
            <div>
              <p className="font-semibold text-navy">{v.title}</p>
              <p className="text-sm text-gray-500">{v.type} · {v.date}</p>
            </div>
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusColor[v.status]}`}>{v.status}</span>
          </div>
        ))}
      </div>
      <Link href="/analyse" className="mt-6 inline-block rounded-xl bg-accent px-6 py-3 font-semibold text-white hover:bg-accent-dark">
        Analyse prüfen
      </Link>
    </div>
  );
}
