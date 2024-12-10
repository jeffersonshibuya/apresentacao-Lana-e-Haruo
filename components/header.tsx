import React from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import ShiftingCountdown from "./countdown";
import { Butterfly_Kids } from "next/font/google";

const butterfly_kids = Butterfly_Kids({
  weight: "400",
  subsets: ["latin"],
});

export function Header() {
  return (
    <div className={`${butterfly_kids.className}`}>
      <BackgroundGradientAnimation>
        <ShiftingCountdown />
        <div
          className={`font-atop absolute z-40 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl`}
        >
          <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 flex flex-col space-y-6">
            <span className="text-white/50  text-5xl lg:text-7xl">
              Haruo e Lana aprentam:
            </span>
            <span className="text-7xl lg:text-9xl text-white/30">
              NOSSO PALCO
            </span>
          </p>
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
}
