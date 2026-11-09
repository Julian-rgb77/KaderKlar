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
