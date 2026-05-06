import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prolens | Personal website of an entrepreneur, investor, and business partner",
  description:
    "Entrepreneur, investor, and business partner focused on building scalable companies and long-term value. I work with founders and teams to turn ideas into successful ventures through strategy, execution, and hands-on experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full bg-[#fafaf8] text-[#0a0a0a] antialiased">
        {children}
      </body>
    </html>
  );
}
