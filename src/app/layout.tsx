import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function Header() {
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

function Footer() {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-200 py-6 mt-12">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-4">
        <div className="flex gap-6">
          <a href="#" className="hover:underline">About Me</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>
        <div className="flex gap-4">
          <a href="#" aria-label="Twitter" className="hover:text-blue-500">Twitter</a>
          <a href="#" aria-label="Facebook" className="hover:text-blue-700">Facebook</a>
          <a href="#" aria-label="Instagram" className="hover:text-pink-500">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 dark:bg-gray-950 min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
