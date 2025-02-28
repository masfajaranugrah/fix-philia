"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { useOutsideClick } from "./hook/use-outside-click";
import { fetchFasilitas } from "@/lib/fetchData";
import useSWR from "swr";
import { AnimatePresence, motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/thumbs';
import DOMPurify from "dompurify";
import { FaMapMarkerAlt } from "react-icons/fa";
 
interface Fasilitas {
  id: number;
  title: string;
  description: string;
  src: string;
  images?: string | null;
  location : string,
  price:number
}

const fetcher = async (): Promise<Fasilitas[]> => {
  return await fetchFasilitas();
};

const Cards: React.FC = () => {
  const [active, setActive] = useState<Fasilitas | null>(null);
   const id = useId();
  const ref = useRef<HTMLDivElement>(null);
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(null);
      }
    };

    document.body.style.overflow = active ? "hidden" : "auto";

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const { data: wahana } = useSWR<Fasilitas[]>("/fasilitas", fetcher, {
    refreshInterval: 3000,
  });

   if (!wahana)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-[#2D210A] rounded-full animate-spin"></div>
      </div>
    );
  return (
    <div className="relative xl:pb-[40rem] lg:pb-[40rem] md:pb-[10rem] pb-[8rem]">
    
   <AnimatePresence>
  {active && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/40  h-full w-full z-[99]"
    />
  )}
</AnimatePresence>

      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.div
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden relative"
            >
                <motion.button
  key={`button-${active.title}-${id}`}
  layout
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0, transition: { duration: 0.05 } }}
  className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6 z-[101]" // Tambah z-index
  onClick={() => setActive(null)}
>
  <CloseIcon />
</motion.button>
              <motion.div>
  <Swiper
  modules={[Autoplay, Thumbs]}
   autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  loop={true}
  className="w-full h-full"
>
{active.images &&
  typeof active.images === "string" &&
  JSON.parse(active.images).map((img: string) => (
    <SwiperSlide key={`${active.id}-${img}`}>
        <img
          width={200}
          height={200}
          src={`https://dashboard.philiadventureland.com/storage/wahana/${img}`}
          alt={active.title}
          className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover"
        />
      </SwiperSlide>
    ))}
</Swiper>

 
 

              </motion.div>
              <div className="p-4 ">
                <div className="flex justify-between">

                  <motion.h2 className="font-bold text-[20px] font-[700] flex justify-center items-center text-neutral-700 dark:text-neutral-200">
                  {active.title}
                </motion.h2>
                <motion.a
                    layoutId={`button-${active.title}-${id}`}
                     target="_blank"
                    className="px-4 py-3 text-sm rounded-[10px] font-bold bg-[#2D210A] text-white"
                  >
                     {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(active.price)} 
                  </motion.a>
                </div>
                

                <div className="relative max-h-[290px] overflow-hidden">
  <motion.p
    className="mt-4 text-neutral-800 dark:text-neutral-300 max-h-[290px] custom-scrollbar scrollbar-hide overflow-hidden relative overflow-y-auto scrollbar-none 
    [&>ul]:list-disc [&>ul]:pl-5 [&>ol]:list-decimal [&>ol]:pl-5"
    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(active.description) }}
  ></motion.p>

  {/* Efek blur / fade di bagian bawah */}
  <div className="absolute bottom-0 left-0 w-full h-[3rem] bg-gradient-to-t from-white/100 to-transparent dark:from-black"></div>
</div>

 
              </div>
            

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <h1 className="text-[24px] xl:text-[40px] md:text-[40px] mt-10 font-[1000] text-[#2D210A] text-center">
          RASAKAN KESERUANNYA!
        </h1>
      </motion.div>


      <ul className="z-[22] relative mx-7 py-20 grid grid-cols-1 xl:grid-cols-2 lg:mx-[110px] md:mx-[103px] xl:mx-[110px] md:grid-cols-1 gap-4">
      {wahana.map((card) => {
        let images = [];
        if (typeof card.images === "string") {
          try {
            images = JSON.parse(card.images);
          } catch (error) {
            console.error("Error parsing images JSON for", card.id, ":", error);
          }
        }

        return (
          <motion.div
            key={card.id}
            onClick={() => setActive(card)}
            className="pb-4 flex flex-col bg-[#F6FFEA] shadow-[8px_8px_0px_#2D210A] rounded-[10px] border-black border-[3px] cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div>
              {images.length > 0 && (
                <img
                  width={100}
                  height={100}
                  src={`https://dashboard.philiadventureland.com/storage/wahana/${images[0]}`}
                  alt={card.title}
                  className="h-60 w-full rounded-t-lg object-cover border border-b-[3px] border-b-black"
                />
              )}
            </motion.div>
            <div className="mx-4">
              <motion.h3 className="font-bold text-left text-neutral-800 dark:text-neutral-200 text-[25px]">
                {card.title}
              </motion.h3>
              <motion.p
                className="text-gray-700 text-[17px] font-medium line-clamp-3"
                dangerouslySetInnerHTML={{
                  __html:
                    card.description.length > 150
                      ? card.description.substring(0, 120) + "... "
                      : card.description,
                }}
              />
            </div>
            <div className="mx-4 mt-5 flex justify-between items-center">
              <span className="text-white bg-[#2D210A] font-medium rounded-lg text-sm px-5 py-2.5 flex items-center">
                <FaMapMarkerAlt /> {card.location.split(" ")[0] + " ..."}
              </span>
              <span className="text-white bg-[#2D210A] font-medium rounded-lg text-sm px-5 py-2.5">
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(card.price)}
              </span>
            </div>
          </motion.div>
        );
      })}


        
    </ul>

      {/* Fixed Background Image */}
      <div className="absolute -bottom-1 z-[11] w-full">
        <img
          src="/images/01.png"
          alt="Gambar wahana"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

export default Cards;
