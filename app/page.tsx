"use client";

import { FloatingDockMenu } from "@/components/floating-dock";
import { Header } from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen relative">
      <Header />
      <FloatingDockMenu />
      <div className="absolute bottom-0 left-0 lg:left-18 z-10 opacity-50 lg:opacity-80 w-[150px] h-[300px] sm:w-[290px] lg:h-[680px]">
        <Image src="/lana.png" alt="Lana" fill className="object-cover" />
      </div>
      <div className="absolute bottom-0 right-0 lg:right-0 z-10 opacity-50 lg:opacity-80 w-[150px] h-[300px] sm:w-[290px] lg:h-[680px]">
        <Image src="/haruo.png" alt="Haruo" fill className="object-cover" />
      </div>
      {/* <div className="absolute bottom-0 left-0 lg:left-16 z-10 opacity-1">
        <Image
          src="/lana.png"
          alt="Lana"
          width={100} // Required but will be overridden by class styling
          height={100} // Required but will be overridden by class styling
          className="w-72 h-96 sm:w-96 sm:h-96 lg:h-[480px] object-contain opacity-50 lg:opacity-1"
        />
      </div> */}
      {/* <div className="absolute bottom-0 right-1 lg:right-16 z-10 opacity-1">
        <Image
          src="/haruo.png"
          alt="Haruo"
          fill
          className="w-60 h-60 sm:w-60 sm:h-60 lg:h-[480px] object-contain opacity-50 lg:opacity-1"
        />
      </div> */}
      {/* <div className="absolute bottom-0 right-0 lg:right-60 z-10 opacity-50 lg:opacity-1">
        <Image src={"/haruo.png"} height={320} width={320} alt="Haruo" />
      </div> */}
    </div>
  );
}
