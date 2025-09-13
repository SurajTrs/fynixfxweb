import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import StickyDisclaimer from "@/components/StickyDisclaimer";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "IC Markets Global — Demo",
  description: "Landing page demo built with Next.js, TypeScript and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="antialiased font-sans pop-on-hover min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyDisclaimer />
      </body>
    </html>
  );
}
