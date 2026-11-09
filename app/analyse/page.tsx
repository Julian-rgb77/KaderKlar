import { actions, typeColor } from "../data";

const confColor: Record<string, string> = {
  hoch: "text-green-600", mittel: "text-amber-600", niedrig: "text-red-600",
};

export default function Analyse() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <p className="text-sm text-gray-500">Vorschau der Analyse-Oberfläche · Beispieldaten, keine echte KI</p>
      <h1 className="text-3xl font-extrabold text-navy">Heimspiel vs. TV Musterstadt</h1>
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="flex aspect-video items-center justify-center rounded-2xl bg-navy text-white/60">
            Videoplayer (Platzhalter)
          </div>
          <div className="relative mt-4 h-8 rounded-full bg-gray-200">
            {actions.map((a) => (
              <span key={a.t} title={a.type} className={`absolute top-1 h-6 w-2 rounded-full ${typeColor[a.type]}`} style={{ left: `${a.pos}%` }} />
            ))}
          </div>
          <div className="mt-2 flex flex-wrap gap-3 text-xs text-gray-600">
            {Object.entries(typeColor).map(([n, c]) => (
              <span key={n} className="flex items-center gap-1"><i className={`h-3 w-3 rounded-full ${c}`} />{n}</span>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-3 font-bold text-navy">Erkannte Aktionen</h2>
          <ul className="space-y-3">
            {actions.map((a) => (
              <li key={a.t} className={`rounded-2xl bg-white p-4 shadow-sm ${a.conf === "niedrig" ? "ring-2 ring-red-300" : ""}`}>
                <div className="flex justify-between">
                  <b className="text-navy">{a.type}</b>
                  <span className="text-sm text-gray-500">{a.t}</span>
                </div>
                <p className="text-sm text-gray-600">{a.player} · {a.result}</p>
                <p className="text-xs">
                  Aktion: <span className={confColor[a.conf]}>{a.conf}</span> · Zuordnung: <span className={confColor[a.pc]}>{a.pc}</span>
                </p>
                <div className="mt-2 flex gap-2 text-xs font-semibold">
                  <button className="rounded-lg bg-green-100 px-3 py-1 text-green-700">Bestätigen</button>
                  <button className="rounded-lg bg-gray-100 px-3 py-1 text-gray-700">Bearbeiten</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
