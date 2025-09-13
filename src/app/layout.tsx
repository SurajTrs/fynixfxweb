import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import StickyDisclaimer from "@/components/StickyDisclaimer";

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
      <body suppressHydrationWarning className="antialiased font-sans pop-on-hover">
        <Navbar />
        {children}
        <StickyDisclaimer />
      </body>
    </html>
  );
}
