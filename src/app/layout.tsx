import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oricareo | We Care For You",
  description: "Verified caretaking agents who assist elderly family members with routine checkups, companion support, and daily assistance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} font-sans antialiased text-slate-800 bg-slate-50 selection:bg-teal-500 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
