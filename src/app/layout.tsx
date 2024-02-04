import type { Metadata } from "next";
import { Junge } from "next/font/google";
import "./globals.css";

const junge = Junge({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Museu Vivo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={junge.className}>
      <body>{children}</body>
    </html>
  );
}
