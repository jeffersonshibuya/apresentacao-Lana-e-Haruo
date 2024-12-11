"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, MapIcon } from "lucide-react";
import { useLocal } from "@/hooks/use-local";
import Image from "next/image";
// import Ballon from "next/font/local";

// const ballon = Ballon({ src: "../../app/fonts/ballon.ttf" });

export const LocalModal = () => {
  const { isOpen, onClose } = useLocal();

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
            className={`font-shootingStar bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-2xl shadow-xl cursor-default relative overflow-hidden`}
          >
            <div className="absolute top-0 left-0 opacity-30 w-full h-full">
              <Image
                src={`/varanda.png`}
                alt="varanda"
                fill
                className="object-fill aspect-auto"
              />
            </div>
            <AlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                <MapIcon />
              </div>
              <div className="my-10 bg-gradient-to-r text-transparent from-pink-400  via-white to-green-400 bg-clip-text">
                <h3 className="text-center mb-2 text-4xl lg:text-7xl p-3">
                  LOCAL
                </h3>
                <div className="text-center mb-6 flex-col sapce-y-2">
                  <p className="flex flex-col text-4xl lgtext-6xl space-y-3 mt-12">
                    <span>Casa da Vovó </span> <br />
                    <span>Palco Varanda</span>
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={onClose}
                  className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                >
                  EU VOU!
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
