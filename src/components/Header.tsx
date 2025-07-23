import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow mb-8">
      <nav className="max-w-4xl mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">Trip Planner</Link>
          <Link href="/my-trip" className="text-gray-700 dark:text-gray-200 hover:underline">My Trip</Link>
        </div>
        <span className="rounded px-3 py-1 border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">☀️</span>
      </nav>
    </header>
  );
} 