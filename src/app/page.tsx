import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8 relative">
      {/* Hintergrund-Wappen */}
      <div className="absolute inset-0 z-0 flex justify-center items-center opacity-10">
        <Image
          src="/chronik-wappen.png" // Stelle sicher, dass dieses Bild existiert
          alt="Wappen der Gemeinde"
          width={600}
          height={600}
        />
      </div>

      <header className="text-center relative z-10">
        <h1 className="text-6xl font-fraktur text-red-700">
          Chronik der Gemeinde
        </h1>
        <h2 className="text-4xl font-serif text-gray-700 mt-4">Jüdenberg</h2>
        <p className="text-lg text-gray-600 mt-6">
          Ein Blick in die Geschichte und Tradition unserer Gemeinschaft.
        </p>
      </header>

      {/* Navigation */}
      <nav className="flex gap-8 mt-16 relative z-10">
        <Link href="/chronik">
          <button className="bg-red-700 text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-red-800">
            Allgemeine Chroniken
          </button>
        </Link>
        <Link href="/jahreschroniken">
          <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-yellow-600">
            Jahreschroniken
          </button>
        </Link>
      </nav>
    </div>
  );
}
