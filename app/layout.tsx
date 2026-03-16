import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieConsent from "../components/CookieConsent";
import AnalyticsNotice from "../components/AnalyticsNotice";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PulseMark — Marketing Tool",
  description: "PulseMark marketing tool demo page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="border-b border-gray-200 dark:border-gray-800 py-4">
          <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
            <a href="/" className="font-semibold text-lg text-gray-900 dark:text-gray-100">PulseMark</a>
            <nav className="flex gap-4">
              <a href="/" className="text-gray-700 dark:text-gray-300 hover:underline">Home</a>
              <a href="/about" className="text-gray-700 dark:text-gray-300 hover:underline">About</a>
              <a href="/pricing" className="text-gray-700 dark:text-gray-300 hover:underline">Pricing</a>
              <a href="/team" className="text-gray-700 dark:text-gray-300 hover:underline">Team</a>
            </nav>
          </div>
        </header>

        <main className="min-h-[60vh]">{children}</main>

        <AnalyticsNotice />

        <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
          <div className="max-w-5xl mx-auto px-6 text-sm text-gray-700 dark:text-gray-300">
            © {new Date().getFullYear()} PulseMark. All rights reserved.
          </div>
        </footer>

        <CookieConsent />
      </body>
    </html>
  );
}
