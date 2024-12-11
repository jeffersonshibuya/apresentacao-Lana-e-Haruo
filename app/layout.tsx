import type { Metadata } from "next";
import "./globals.css";

import { LocalModal } from "@/components/pagesinfo/local";
import { HaruoModal } from "@/components/pagesinfo/haruo";
import { LanaModal } from "@/components/pagesinfo/lana";
import { MusicModal } from "@/components/pagesinfo/musics";
import localFont from "next/font/local";
import { PixModal } from "@/components/pagesinfo/pix";

// Font files can be colocated inside of `app`
const atop = localFont({
  src: "./fonts/Atop.ttf",
  display: "swap",
  variable: "--font-atop",
});
const shootingstar = localFont({
  src: "./fonts/ShootingStar.ttf",
  display: "swap",
  variable: "--font-shooting-star",
});

export const metadata: Metadata = {
  title: "Haruo e Lana - NOSSO PALCO",
  description: "Espetáculo NOSSO PALCO apresentados por Haruo e Lana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${atop.variable} ${shootingstar.variable} antialiased`}>
        <LocalModal />
        <HaruoModal />
        <LanaModal />
        <MusicModal />
        <PixModal />
        {children}
      </body>
    </html>
  );
}
