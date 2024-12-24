import Link from "next/link";

export default function Jahreschroniken() {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Jahreschroniken</h1>
        <nav className="mt-4">
          <Link href="/">
            <p className="text-blue-500 hover:underline">Zurück zur Startseite</p>
          </Link>
        </nav>
      </header>

      <main>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Chronik eines bestimmten Jahres</h2>
        <p className="text-gray-600 mb-6">
          Hier findest du die Ereignisse, die in bestimmten Jahren passiert sind. Wähle ein Jahr, um mehr zu erfahren.
        </p>
        <ul className="list-disc list-inside space-y-4 text-gray-600">
          <li><strong>2021:</strong> Jubiläumsfest mit über 500 Teilnehmern.</li>
          <li><strong>2022:</strong> Renovierung des Gemeindesaals.</li>
          <li><strong>2023:</strong> Einführung neuer Workshops für die Jugend.</li>
        </ul>
      </main>
    </div>
  );
}
