import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconMusic, IconMap, IconUser } from "@tabler/icons-react";
import { useLocal } from "@/hooks/use-local";
import { Roboto } from "next/font/google";
import { useHaruo } from "@/hooks/use-haruo";
import { useLana } from "@/hooks/use-lana";
import { useMusics } from "@/hooks/use-musics";
import { usePix } from "@/hooks/use-pix";
import { DollarSign } from "lucide-react";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export function FloatingDockMenu() {
  const { onOpen: openLocal } = useLocal();
  const { onOpen: openHaruo } = useHaruo();
  const { onOpen: openLana } = useLana();
  const { onOpen: openMusics } = useMusics();
  const { onOpen: openPix } = usePix();

  const links = [
    {
      title: "Local",
      icon: (
        <IconMap className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      onOpenPage: openLocal,
    },
    {
      title: "Haruo",
      icon: (
        <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      onOpenPage: openHaruo,
    },
    {
      title: "Lana",
      icon: (
        <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      onOpenPage: openLana,
    },
   
    {
      title: "Músicas",
      icon: (
        <IconMusic className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      onOpenPage: openMusics,
    },
    {
      title: "Ingresso",
      icon: (
        <DollarSign className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      onOpenPage: openPix,
    },
    // {
    //   title: "Convidados",
    //   icon: (
    //     <IconUsersGroup className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "#",
    // },
  ];
  return (
    <div
      className={`${roboto.className} absolute bottom-16 flex items-center justify-center w-full z-40`}
    >
      <FloatingDock mobileClassName="translate-y-20" items={links} />
    </div>
  );
}
