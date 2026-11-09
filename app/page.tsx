import Link from "next/link";

const features = [
  ["🎥", "Videos hochladen", "Ganze Spiele oder kurze Szenen, sicher und privat gespeichert."],
  ["🤖", "KI erkennt Aktionen", "Würfe, Pässe, Paraden mit Zeitstempel und Vertrauenswert."],
  ["✅", "Trainer behält die Kontrolle", "Nichts wird veröffentlicht, bevor du es geprüft und freigegeben hast."],
  ["📈", "Entwicklung sichtbar", "Persönliche Statistiken und Verläufe für jeden Spieler."],
];

export default function Home() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center md:py-28">
          <h1 className="animate-fade-up text-4xl font-extrabold md:text-6xl">
            Spiele verstehen.<br /><span className="text-accent">Spieler entwickeln.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/75">
            KaderKlar macht Handball-Videoanalyse einfach: hochladen, prüfen, freigeben.
          </p>
          <Link href="/dashboard" className="mt-8 inline-block rounded-xl bg-accent px-8 py-3 font-semibold hover:bg-accent-dark">
            Vorschau ansehen
          </Link>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(([i, t, x]) => (
          <div key={t} className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="text-3xl">{i}</div>
            <h3 className="mt-3 font-bold text-navy">{t}</h3>
            <p className="mt-2 text-sm text-gray-600">{x}</p>
          </div>
        ))}
      </section>
    </>
  );
}
