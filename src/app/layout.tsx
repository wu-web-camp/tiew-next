import { Geist, Geist_Mono } from "next/font/google";
import { Sarabun } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { TanstackProvider } from "@/provider/tanstack";
import { ThemeProvider } from "@/provider/theme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sarabun = Sarabun({
  variable: "--font-sarabun",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TanstackProvider>
      <ThemeProvider>
        <html lang="th">
          <body
            className={`${geistSans.variable} ${geistMono.variable} ${sarabun.variable} antialiased min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-blue-100`}
          >
            <Header />
            <main className="flex-1 flex flex-col px-4 sm:px-8 md:px-16 py-8 sm:py-12">
              {children}
            </main>
            <Footer />
          </body>
        </html>
      </ThemeProvider>
    </TanstackProvider>
  );
}
