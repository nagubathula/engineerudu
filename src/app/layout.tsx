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
      className={`dark ${inter.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col relative bg-background overflow-x-hidden">
        {/* Global Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed inset-0 w-full h-full object-cover z-0 opacity-40 pointer-events-none"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4" type="video/mp4" />
        </video>
        
        {/* Dark overlay to make content readable */}
        <div className="fixed inset-0 bg-background/60 z-0 pointer-events-none"></div>

        <Navigation />
        <div className="relative z-10 flex-grow pt-24 pb-12">
          {children}
        </div>
      </body>
    </html>
  );
}
