import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconMusic, IconMap, IconUser } from "@tabler/icons-react";
import { useLocal } from "@/hooks/use-local";
import { Roboto } from "next/font/google";
import { useHaruo } from "@/hooks/use-haruo";
import { useLana } from "@/hooks/use-lana";
import { useMusics } from "@/hooks/use-musics";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export function FloatingDockMenu() {
  const { onOpen: openLocal } = useLocal();
  const { onOpen: openHaruo } = useHaruo();
  const { onOpen: openLana } = useLana();
  const { onOpen: openMusics } = useMusics();

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
    // {
    //   title: "Data e Horário",
    //   icon: (
    //     <IconCalendar className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "#",
    // },
    {
      title: "Músicas",
      icon: (
        <IconMusic className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      onOpenPage: openMusics,
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
