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
