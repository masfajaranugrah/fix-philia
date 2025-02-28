import React, { useRef } from "react";
import { motion } from "framer-motion";
import { WobbleCard } from "../../ui/wobble-card";
import { ImSearch } from "react-icons/im";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export default function Rasa() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative xl:w-[95%] container mx-auto px-2">
      {/* Judul Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center relative my-10"
      >
        <p className="text-[24px] md:text-[40px] xl:text-[40px] text-[#2D210A] font-[Montserrat] text-center font-extrabold">
          RASAKAN KESERUANNYA!
        </p>
      </motion.div>

      {/* Grid Container */}
<div className="flex flex-col md:grid md:grid-cols-[2.5fr_1fr] gap-4 px-4">
  {/* Kiri - Wahana */}
  <div className="grid grid-cols-2 gap-3">
    {/* ATV */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative"
    >
      <WobbleCard className="min-h-[165px] xl:min-h-[250px]">
        <img
          src="/images/rasa/01.png"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <h2 className="absolute bottom-0 left-0 max-w-80 text-left text-base md:text-xl lg:text-[20px] font-extrabold text-white p-4">
          ATV
        </h2>
      </WobbleCard>
    </motion.div>

    {/* Sky Bridge */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative"
    >
      <WobbleCard className="min-h-[165px] xl:min-h-[250px] relative">
        <img
          src="/images/rasa/02.png"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <h2 className="absolute bottom-0 left-0 max-w-80 text-left text-base md:text-xl lg:text-[20px] font-extrabold text-white p-4">
          Sky Bridge
        </h2>
      </WobbleCard>
    </motion.div>

    {/* Cave Adventure */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      viewport={{ once: true }}
      className="col-span-2 relative"
    >
      <WobbleCard className="min-h-[165px] xl:min-h-[250px]">
        <img
          src="/images/rasa/03.png"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <h2 className="absolute bottom-0 left-0 max-w-80 text-left text-base md:text-xl lg:text-[20px] font-extrabold text-white p-4">
          Cave Adventure
        </h2>
      </WobbleCard>
    </motion.div>
  </div>

  {/* Kanan - Learn More (Turun ke bawah di Mobile/Tablet) */}
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="rounded-[24px] bg-[#2D210A] flex justify-center items-center mt-4 md:mt-0"
  >
    <a href="/wahana">
    <WobbleCard className="w-full h-[10px] xl:h-full lg:h-full md:h-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <ImSearch className="text-white text-[50px] xl:text-[100px] md:text-[50px]" />
        <p className="mt-4 text-center text-[20px]  md:text-[20px] lg:text-[30px] font-bold text-neutral-200">
        Pelajari Lebih 
        Lanjut
        </p>
      </div>
    </WobbleCard>
    </a>
  </motion.div>
</div>

    </div>
  );
}
