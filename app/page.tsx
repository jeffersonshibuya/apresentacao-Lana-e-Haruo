/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import AudioPlayer from "@/components/audio-player";
import { FloatingDockMenu } from "@/components/floating-dock";
import { Header } from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen relative overflow-hidden">
        <AudioPlayer />
        <Header />
        <div className="pb-8">
          <FloatingDockMenu />
        </div>
        <div className="absolute bottom-0 left-0 lg:left-18 z-10 opacity-50 lg:opacity-80 w-[150px] h-[300px] sm:w-[290px] lg:h-[680px]">
          <Image src="/lana.png" alt="Lana" fill className="object-cover" />
        </div>
        <div className="absolute bottom-0 right-0 lg:right-0 z-10 opacity-50 lg:opacity-80 w-[150px] h-[300px] sm:w-[290px] lg:h-[680px]">
          <Image src="/haruo.png" alt="Haruo" fill className="object-cover" />
        </div>
      </div>
    </>
  );
}
