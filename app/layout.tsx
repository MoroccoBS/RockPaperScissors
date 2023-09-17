import "./globals.css";
import type { Metadata } from "next";
import { Barlow_Semi_Condensed } from "next/font/google";

const font = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Rock, Paper, Scissors",
  description: "A game of Rock, Paper, Scissors",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
