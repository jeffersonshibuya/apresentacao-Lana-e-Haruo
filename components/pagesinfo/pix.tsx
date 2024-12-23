"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CircleDollarSign, DollarSign, Drum, HeadphonesIcon } from "lucide-react";
import { usePix } from "@/hooks/use-pix";
import Image from "next/image";
// import Ballon from "next/font/local";

// const ballon = Ballon({ src: "../../app/fonts/ballon.ttf" });

export const PixModal = () => {
  const { isOpen, onClose } = usePix();

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
            className={`font-shootingStar bg-gradient-to-br from-violet-600/50 to-indigo-600 text-white p-6 rounded-lg w-full max-w-3xl shadow-xl cursor-default relative overflow-hidden`}
          >
            <CircleDollarSign className="text-white/10 rotate-45 w-[250px] h-[250px] absolute z-50 -top-24 -left-24" />
            <Drum className="text-white/10 rotate-45 w-[250px] h-[250px] absolute z-50 -bottom-16 -right-14" />
            <HeadphonesIcon className="text-white/10 -rotate-45 w-[250px] h-[250px] absolute z-50 hidden lg:visible lg:top-10 lg:right-16" />
            <div className="relative z-10">
              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                <DollarSign />
              </div>
              <div className="my-10 bg-gradient-to-r text-transparent from-pink-400  via-white to-green-400 bg-clip-text">
                <h3 className=" text-center mb-2 text-2xl lg:text-7xl p-3">
                  PIX
                </h3>
                <div className="text-center mb-8 mt-10 flex-col sapce-y-2 flex">
                  <span className="text-3xl">Valor do ingresso</span>
                  <span className="text-4xl">R$ 20,00</span>
                </div>
                <div className="w-full flex flex-col font-serif space-y-6 items-center justify-center">
                  <span>Leia o QRCode ou pela chave: 012.517.985-51</span>
                  <Image width={250} height={250} src={'/qrcode.jpg'} alt="qrcode"/>
                </div>
                <div className="text-2xl font-mono">
                  * Todo valor arrecadado será usado para comprar um presente de natal para o Haruo e a Lana
                </div>
              </div>
              <div className="flex gap-2 w-full z-50" > 
                <button
                  onClick={onClose}
                  className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                >
                  Fechar
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
