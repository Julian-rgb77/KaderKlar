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
