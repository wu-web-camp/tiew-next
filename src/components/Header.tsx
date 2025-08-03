import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white/80 backdrop-blur border-b border-blue-50">
      <nav className="max-w-5xl mx-auto flex items-center justify-between py-6 px-6">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-lg font-semibold text-blue-500 tracking-tight"
          >
            Trip Planner
          </Link>
          <Link
            href="/my-trip"
            className="text-gray-500 hover:text-blue-400 transition"
          >
            My Trip
          </Link>
          <Link
            href="/contibutor"
            className="text-gray-500 hover:text-blue-400 transition"
          >
            Contibutor
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <span className="rounded px-3 py-1 bg-blue-50 text-blue-400 text-lg">
            ☀️
          </span>
          <Link
            href="/signup"
            className="px-4 py-2 bg-gradient-to-r from-red-600 to-[#A54141] text-white rounded-lg hover:from-red-700 hover:to-[#8A3535] active:shadow-lg active:shadow-red-300/50 transition-all duration-200 font-medium"
          >
            Signup
          </Link>
        </div>
      </nav>
    </header>
  );
}
