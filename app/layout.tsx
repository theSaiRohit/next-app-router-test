import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
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
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{console.log('[opt-top] preState', window.history.state);/* synchronous top-of-head overwrite */window.history.replaceState({}, '', window.location.href);console.log('[opt-top] after replaceState', window.history.state);}catch(e){console.error('[opt-top] err', e);} })();` }} />
        <Script id="opt-early-replace" strategy="beforeInteractive">
          {`(function(){try{console.log('[opt-early] preState', window.history.state);window.history.replaceState({}, '', window.location.href);console.log('[opt-early] after replaceState', window.history.state);}catch(e){console.error('[opt-early] err', e);} })();`}
        </Script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.setOptiCookieConsent = function(consent) {
  try { localStorage.setItem("opti_consent", consent); } catch (e) {}
};
// Auto-accept consent if explicit consent mode is disabled
window.setOptiCookieConsent("yes");
`,
          }}
        />

        <script
          async
          dangerouslySetInnerHTML={{
            __html: `!(function (h, i, e) {
var t = 1000;
var n = h.createElement("style");
n.id = e;
n.innerHTML = "body{opacity:0}";
h.head.appendChild(n);
i.rmfk = function () {
  var t = h.getElementById(e);
  t && t.parentNode.removeChild(t);
};
setTimeout(i.rmfk, t);
})(document, window, "optimeleon-overlay");

!function(e,t,n,o,c,a,l){e.optimeleon||(c=e.optimeleon=function(){c.callMethod?c.callMethod.apply(c,arguments):c.queue.push(arguments)},c.push=c,c.queue=[],(a=t.createElement(n)).async=!0,a.src="https://cdn-stag.optimeleon.com/th0-48bcb/ver-1rtdg/v1.main.js",(l=t.getElementsByTagName(n)[0]).parentNode.insertBefore(a,l))}(window,document,"script");
optimeleon("init",true,true);`,
          }}
        />
      </head>

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
