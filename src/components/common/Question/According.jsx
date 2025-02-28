"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import React from "react";
import { motion } from "framer-motion";
import useSWR from "swr";
import { fetchFAQ } from "@/lib/fetchData";

const According = () => {
  const { data: question, error } = useSWR("faq", fetchFAQ, {
       refreshInterval: 3000, // Refresh setiap 3 detik
    });
   
    if (!question)
      return (
        <div className="flex justify-center items-center h-screen">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-[#2D210A] rounded-full animate-spin"></div>
        </div>
      );

  return (
    <div className="mt-20 relative">
      <div>
        <h1 className="text-[24px]  md:text-[40px] xl:text-[40px] font-[1000] text-[#2D210A] text-center mb-10">Apa yang ingin kamu tahu?</h1>
      </div>

      <div className="container mx-auto  relative z-10 xl:pb-[80rem] md:pb-[40rem] pb-[30rem] lg:pb-[50rem] md:px-[2rem] lg:px-[10rem] xl:px-[10rem] px-[1rem]">
        {question.length > 0 ? (
          <Accordion type="single" collapsible className="w-full px-3">
            {question.map((item, index) => (
              <motion.div
                key={item.id_question}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 1.0,
                  delay: index * 0.3,
                  ease: "easeOut",
                }}
              >
                <AccordionItem className="text-red" value={item.id_question.toString()}>
                  <AccordionTrigger className="text-[#2D210A] hover:text-[#553800] group-hover:text-[#8B5A2B] transition-colors duration-300">
                    {item.pertanyaan}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 group-hover:text-[#3E3729] flex  items-center text-white font-bold transition-colors duration-300">
                    {item.jawaban}
                  </AccordionContent>
                </AccordionItem>
               
              </motion.div>
            ))}
          </Accordion>
        ) : (
          <div className="text-center text-xl font-semibold text-gray-600 mt-10">
            Loading ...
          </div>
        )}
      </div>

      <div className="absolute -bottom-1 w-full">
        <img src="/images/01.png" alt="Gambar wahana" className="w-full h-full" />
      </div>
    </div>
  );
};

export default According;