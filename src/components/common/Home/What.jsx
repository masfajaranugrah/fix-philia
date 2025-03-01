import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { fetchAcara } from "@/lib/fetchData";
import useSWR from "swr";
const BASE_URL = "https://dashboard.philiadventureland.com/storage/whats/";
 
const fetcher = async () => {
  const data = await fetchAcara();
  return Array.isArray(data) ? data.map((item) => BASE_URL + item.images) : [];
};

function What() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  // Fetching data dengan SWR
  const { data: images, error } = useSWR("acara", fetcher, {
    refreshInterval: 3000, // Refresh setiap 3 detik
 });
  // Efek untuk mengatur navigasi Swiper setelah data tersedia
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper && images) {
      setTimeout(() => {
        if (prevRef.current && nextRef.current) {
          const swiper = swiperRef.current.swiper;
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }
      }, 100);
    }
  }, [images]);
  if (!images)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-[#2D210A] rounded-full animate-spin"></div>
      </div>
    );
   
  return (
    <motion.div initial="hidden" animate="visible" className="container mx-auto flex flex-col items-center">
      <motion.p className="text-center text-[24px]  md:text-[40px] xl:text-[40px] text-[#2D210A] px-2 font-[Montserrat] font-[1000] my-10">
      ADA APA DI PHILIA HARI INI
      </motion.p>

      <motion.div className="relative w-full container mx-20 px-5">
        {/* Tombol Navigasi */}
        <motion.button ref={prevRef} className="absolute left-2 xl:left-0 top-1/2 transform -translate-y-1/2 bg-[#2D210A] rounded p-2 text-white hover:bg-opacity-75 z-10">
          <ChevronLeft size={40} />
        </motion.button>

        {images.length > 0 ? (
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            loop={images.length > 1} // Loop hanya jika jumlah gambar lebih dari 1
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            className="rounded-lg overflow-hidden"
          >
            {images.map((img, index) => (
          <SwiperSlide key={index}>
          <motion.div className="relative flex justify-center items-center">
            <img src={img} alt={`Slide ${index + 1}`} className="w-full h-1/2 object-cover rounded-lg" />
            <motion.div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <img src="/images/banner/logo.png" alt="Logo" className="w-20 xl:w-40" />
              <h2 className="text-[15px] lg:text-[40px] font-[1000] mt-2">PHILIA</h2>
              <p className="text-[10px] lg:text-[20px] font-semibold">ADVENTURE LAND</p>
            </motion.div>
          </motion.div>
        </SwiperSlide>
        
            ))}
          </Swiper>
        ) : (
          <p className="text-center text-gray-500">Acara Tidak Tersedia</p>
        )}

        {/* Tombol Navigasi */}
        <motion.button ref={nextRef} className="absolute right-2 xl:right-0 top-1/2 transform -translate-y-1/2 bg-[#2D210A] rounded p-2 text-white hover:bg-opacity-75 z-10">
          <ChevronRight size={40} />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default What;
