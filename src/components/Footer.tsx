export default function Footer() {
  return (
    <footer className="w-full bg-blue-50/60 border-t border-blue-100 text-gray-500 py-8 mt-16">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 px-6">
        <div className="flex gap-8 text-sm tracking-widest uppercase">
          <a href="#" className="hover:text-blue-400 transition">about me</a>
          <a href="#" className="hover:text-blue-400 transition">contact us</a>
        </div>
        <div className="flex gap-4 text-lg">
          <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition">🐦</a>
          <a href="#" aria-label="Facebook" className="hover:text-blue-400 transition">📘</a>
          <a href="#" aria-label="Instagram" className="hover:text-blue-400 transition">📸</a>
        </div>
      </div>
    </footer>
  );
} 