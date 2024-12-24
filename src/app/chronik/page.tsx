import Link from "next/link";

export default function Chronik() {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Chronik der Gemeinde</h1>
        <nav className="mt-4">
          <Link href="/">
            <p className="text-blue-500 hover:underline">Zurück zur Startseite</p>
          </Link>
        </nav>
      </header>

      <main>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Wichtige Ereignisse</h2>
        <ul className="list-disc list-inside space-y-4 text-gray-600">
          <li><strong>1800:</strong> Gründung der Gemeinde.</li>
          <li><strong>1850:</strong> Bau der Kirche.</li>
          <li><strong>1920:</strong> Einführung des Gemeindefests.</li>
          <li><strong>2000:</strong> 200-jähriges Jubiläum.</li>
        </ul>
      </main>
    </div>
  );
}
