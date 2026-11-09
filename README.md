 /workspaces/KaderKlar
mkdir -p app/dashboard app/spieler app/videothek app/analyse

cat > package.json <<'EOF'
{
  "name": "kaderklar",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "^15.1.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.0.0",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "tailwindcss": "^4.0.0",
    "typescript": "^5"
  }
}
EOF

cat > tsconfig.json <<'EOF'
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }]
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
EOF

cat > postcss.config.mjs <<'EOF'
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
EOF

cat > next.config.mjs <<'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
EOF

cat > .gitignore <<'EOF'
node_modules
.next
next-env.d.ts
EOF

cat > app/globals.css <<'EOF'
@import "tailwindcss";

@theme {
  --color-navy: #0b1f3a;
  --color-navy-light: #16335c;
  --color-accent: #ff6b2c;
  --color-accent-dark: #e5531a;
  --color-surface: #f4f6fa;
}

body {
  background: var(--color-surface);
  color: #1a2433;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
}

@keyframes fade-up {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-up {
  animation: fade-up 0.5s ease-out both;
}
EOF

cat > app/data.ts <<'EOF'
// ACHTUNG: Alles hier sind BEISPIELDATEN, keine echten Analysen.
export const videos = [
  { id: 1, title: "Heimspiel vs. TV Musterstadt", type: "Spiel", date: "07.11.2026", status: "Trainerprüfung erforderlich", progress: 100 },
  { id: 2, title: "Auswärts vs. HSG Beispiel", type: "Spiel", date: "31.10.2026", status: "Wird analysiert", progress: 62 },
  { id: 3, title: "Clip: Gegenstoß 2. Halbzeit", type: "Szene", date: "07.11.2026", status: "Freigegeben", progress: 100 },
  { id: 4, title: "Training: Torwurf", type: "Szene", date: "04.11.2026", status: "Hochgeladen", progress: 0 },
];

export const statusColor: Record<string, string> = {
  "Trainerprüfung erforderlich": "bg-amber-100 text-amber-700",
  "Wird analysiert": "bg-blue-100 text-blue-700",
  Freigegeben: "bg-green-100 text-green-700",
  Hochgeladen: "bg-gray-100 text-gray-600",
};

export const actions = [
  { t: "00:02:14", type: "Torwurf", player: "Nr. 7", result: "Tor", conf: "hoch", pc: "mittel", pos: 8 },
  { t: "00:05:40", type: "Pass", player: "Nr. 4", result: "angekommen", conf: "hoch", pc: "hoch", pos: 18 },
  { t: "00:12:34", type: "Ballverlust", player: "unklar", result: "–", conf: "niedrig", pc: "niedrig", pos: 35 },
  { t: "00:18:03", type: "Parade", player: "Nr. 1", result: "gehalten", conf: "mittel", pc: "hoch", pos: 52 },
  { t: "00:24:51", type: "Fehlwurf", player: "Nr. 9", result: "daneben", conf: "mittel", pc: "mittel", pos: 74 },
];

export const typeColor: Record<string, string> = {
  Torwurf: "bg-green-500", Pass: "bg-blue-500", Ballverlust: "bg-red-500",
  Parade: "bg-purple-500", Fehlwurf: "bg-amber-500",
};
EOF

cat > app/Navbar.tsx <<'EOF'
import Link from "next/link";

const links = [
  { href: "/", label: "Start" },
  { href: "/dashboard", label: "Trainer" },
  { href: "/spieler", label: "Spieler" },
  { href: "/videothek", label: "Videothek" },
  { href: "/analyse", label: "Analyse" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-navy text-white shadow-md">
      <nav className="mx-auto flex max-w-6xl items-center gap-6 px-4 py-3">
        <Link href="/" className="text-xl font-extrabold">
          Kader<span className="text-accent">Klar</span>
        </Link>
        <ul className="flex gap-1 overflow-x-auto">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-white/80 hover:bg-navy-light hover:text-white">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
EOF

cat > app/layout.tsx <<'EOF'
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";

export const metadata: Metadata = {
  title: "KaderKlar – Spiele verstehen. Spieler entwickeln.",
  description: "KI-gestützte Videoanalyse für Mannschaftssportarten.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="min-h-screen">
        <Navbar />
        <main>{children}</main>
        <footer className="mt-16 border-t border-gray-200 py-6 text-center text-sm text-gray-500">
          KaderKlar – Spiele verstehen. Spieler entwickeln. · Vorschau mit Beispieldaten
        </footer>
      </body>
    </html>
  );
}
EOF

cat > app/page.tsx <<'EOF'
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
EOF

cat > app/dashboard/page.tsx <<'EOF'
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
EOF

cat > app/spieler/page.tsx <<'EOF'
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
EOF

cat > app/videothek/page.tsx <<'EOF'
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
EOF

cat > app/analyse/page.tsx <<'EOF'
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
EOF

echo "FERTIG: alle Dateien wurden angelegt"
ls -R app
git add .
git commit -m "KaderKlar Phase 1"
git push