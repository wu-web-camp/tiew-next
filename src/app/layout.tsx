import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { TanstackProvider } from "@/provider/tanstack";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TanstackProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-blue-100`}
        >
          <Header />
          <main className="flex-1 flex flex-col px-4 sm:px-8 md:px-16 py-8 sm:py-12">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </TanstackProvider>
  );
}
