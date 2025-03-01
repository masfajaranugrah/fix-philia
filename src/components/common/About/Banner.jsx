"use client";
import React from "react";
import { motion } from "framer-motion";

function Banner() {
  return (
    <section className="  xl:mx-0 md:px-[40px]  lg:mx-[40px] rounded-[20px] relative mt-[10rem] lg:mt-[9rem] px-4 md:px-0">
      <motion.div
        className="relative overflow-hidden rounded-[20px] rounded bg-cover bg-no-repeat text-center h-[329px] sm:h-[400px] md:h-[300px] xl:h-[400px] lg:h-[800px]"
        style={{
          backgroundImage: "url('/images/bg-about.png')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center px-8 sm:px-20">
          <motion.div
            className="text-white max-w-lg"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <h4 className="text-center md:text-[25px] xl:text-[48px] text-[#F6FFEA] lg:text-[48px] text-[40px] font-[1000]">
            TENTANG KAMI
            </h4>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Banner;
