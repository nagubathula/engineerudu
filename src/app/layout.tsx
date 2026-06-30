import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Engineerudu",
  description: "Bridging the gap between academia and industry for engineering students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`light ${inter.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col relative bg-background overflow-x-hidden">
        {/* Prevent hydration mismatches caused by browser extensions (like Bitdefender/Buster) injecting bis_skin_checked */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const remove = (el) => el.removeAttribute && el.removeAttribute('bis_skin_checked');
                const observer = new MutationObserver((mutations) => {
                  for (const m of mutations) {
                    if (m.type === 'attributes') {
                      remove(m.target);
                    } else if (m.type === 'childList') {
                      m.addedNodes.forEach(node => {
                        if (node.nodeType === 1) {
                          remove(node);
                          node.querySelectorAll('[bis_skin_checked]').forEach(remove);
                        }
                      });
                    }
                  }
                });
                observer.observe(document.documentElement, {
                  attributes: true,
                  childList: true,
                  subtree: true,
                  attributeFilter: ['bis_skin_checked']
                });
              })();
            `,
          }}
        />

        {/* Clean Global Background */}
        <div className="fixed inset-0 bg-zinc-50 z-0 pointer-events-none"></div>

        <Navigation />
        <div className="relative z-10 flex-grow pt-24 pb-12">
          {children}
        </div>
      </body>
    </html>
  );
}
