import type { Metadata } from "next";
import { Roboto, Fira_Sans } from "next/font/google";
import "./globals.css";

const roboto = Fira_Sans({
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
    <html lang="pt-br" className={roboto.className}>
      <body>{children}</body>
    </html>
  );
}
