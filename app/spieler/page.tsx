const stats = [
  ["Analysierte Spiele", "6"], ["Tore", "21"], ["Wurfquote", "58 %"], ["Technische Fehler", "9"],
];
const games = [["Spiel 1", 45], ["Spiel 2", 50], ["Spiel 3", 55], ["Spiel 4", 52], ["Spiel 5", 60], ["Spiel 6", 58]] as const;

export default function Spieler() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <p className="text-sm text-gray-500">Spieleransicht · Beispieldaten</p>
      <h1 className="text-3xl font-extrabold text-navy">Max Mustermann · Nr. 7 · Rückraum</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([l, v]) => (
          <div key={l} className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">{l}</p>
            <p className="mt-1 text-3xl font-extrabold text-navy">{v}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="font-bold text-navy">Wurfquote pro Spiel (nur freigegebene Daten)</h2>
        <div className="mt-4 flex h-40 items-end gap-3">
          {games.map(([n, v]) => (
            <div key={n} className="flex flex-1 flex-col items-center gap-1">
              <div className="w-full rounded-t-lg bg-accent" style={{ height: `${v * 2}px` }} />
              <span className="text-xs text-gray-500">{n}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-600">Hinweis: Aussagen zur Entwicklung erscheinen erst bei ausreichend vielen bestätigten Daten.</p>
      </div>
    </div>
  );
}
