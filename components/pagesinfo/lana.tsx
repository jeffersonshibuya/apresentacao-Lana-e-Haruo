"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useLana } from "@/hooks/use-lana";
import Image from "next/image";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import { BookA, ForkKnife, School2 } from "lucide-react";
import { IconNumber } from "@tabler/icons-react";

export const LanaModal = () => {
  const { isOpen, onClose } = useLana();

  const images = [
    "/lana/lana1.jpg",
    "/lana/lana2.jpg",
    "/lana/lana3.jpg",
    "/lana/lana4.jpg",
    "/lana/lana5.jpg",
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className={`font-shooting-star bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer`}
        >
          <motion.div
            initial={{ scale: 0, rotate: "180deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "180deg" }}
            onClick={(e) => e.stopPropagation()}
            className={`font-shootingStar  w-auto h-auto cursor-default relative`}
          >
            <BackgroundBeamsWithCollision className="bg-gradient-to-br text-white p-6 w-full h-full max-w-4xl from-pink-800 to-white/80 rounded-lg shadow-xl">
              <div className="w-full text-pink-900">
                <div className="flex justify-center items-center">
                  {images.map((image, idx) => (
                    <motion.div
                      key={"images" + idx}
                      style={{
                        rotate: Math.random() * 20 - 10,
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: 0,
                        zIndex: 100,
                      }}
                      whileTap={{
                        scale: 1.1,
                        rotate: 0,
                        zIndex: 100,
                      }}
                      className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                    >
                      <Image
                        src={image}
                        alt="haruo images"
                        width="500"
                        height="500"
                        className="rounded-lg w-16 h-16 lg:h-28 lg:w-28 md:h-40 md:w-40 object-cover flex-shrink-0"
                      />
                    </motion.div>
                  ))}
                </div>
                <div className="font-atop  py-10 flex flex-col flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-lg mx-auto">
                  <h1 className="text-4xl"> Lana Ayumi Shibuya</h1>
                  <div className="flex items-center justify-center gap-2">
                    <IconNumber className=" size-5" />
                    <span className="text-2xl">6 anos</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <School2 className=" size-5 " />
                    <span className="text-2xl">
                      Aluna do 2 ano na Escola Adventista
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Image
                      width={20}
                      height={20}
                      alt="ballet"
                      src={"/ballet.png"}
                    />
                    <span className="text-2xl">Dançarina de Balé</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <BookA className="size-5 " />
                    <span className="text-2xl">Escritora e Roteirista</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <ForkKnife className="size-5 shrink-0" />
                    <span className="text-2xl">
                      Comida preferida: Frutas, sanduiches e sushi
                    </span>
                  </div>
                </div>
              </div>
            </BackgroundBeamsWithCollision>
            <div className="flex gap-2">
              <button
                onClick={onClose}
                className="bg-white/50 absolute bottom-0 left-0 hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded-b-sm"
              >
                Fechar
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
