import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { TanstackProvider } from "@/provider/tanstack";
import { ThemeProvider } from "@/provider/theme";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TanstackProvider>
      <ThemeProvider>
                <html lang="en">
          <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          </head>
          <body
            className="antialiased min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-blue-100 font-sans"
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
