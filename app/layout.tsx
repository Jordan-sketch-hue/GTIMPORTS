import type { Metadata } from "next";
import { Montserrat, Inter, Oswald } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "GT Imports Consultants | Quality Imports at Affordable Prices",
  description: "Premier automotive and equipment sourcing from Japan, USA, UK, and Canada. Specializing in pickups, buses, machinery, and more.",
  keywords: "car imports, vehicle imports, Japanese cars, USA cars, UK cars, Canadian imports, Jamaica car dealer, import consultants",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${montserrat.variable} ${inter.variable} ${oswald.variable} font-inter antialiased bg-gt-black text-gt-white`}
      >
        {children}
      </body>
    </html>
  );
}
