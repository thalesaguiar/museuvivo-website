"use client";
import type { Metadata } from "next";
import { Roboto, Fira_Sans, DM_Sans } from "next/font/google";
import "./globals.css";

export const roboto = Fira_Sans({
  weight: ["400", "300", "200", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const dm_Sans = DM_Sans({
  weight: ["400", "300", "200", "700", "600"],
  subsets: ["latin"],
  display: "optional",
});

// export const metadata: Metadata = {
//   title: "Museu Vivo",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={roboto.className}>
      <body>{children}</body>
    </html>
  );
}
