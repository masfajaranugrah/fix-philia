"use client";
import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const cardData = [
  {
    id: 1,
    title: "Lokasi di Hutan yang Asri dan Luas",
    description:
      "Rasakan kesegaran udara alami jauh dari hiruk-pikuk kota! Philia Adventure Park berada di tengah hutan yang masih asri, menawarkan lingkungan yang bersih dan udara yang menyegarkan.",
    image: "/images/about/pohon.png",
  },
  {
    id: 2,
    title: "Wahana yang Beragam",
    description:
      "Dari wahana santai hingga yang memacu adrenalin, Philia Adventure Park punya semuanya! Baik Anda ingin menikmati keindahan alam dengan tenang atau mencari tantangan seru, pilihan wahana di sini tidak akan mengecewakan. ",
    image: "/images//about/wahana.png",
  },
  {
    id: 3,
    title: "Sangat Ramah untuk Keluarga",
    description:
      "Philia Adventure Park adalah destinasi yang cocok untuk segala usia! Anak-anak bisa bermain dengan aman, orang dewasa bisa menikmati keindahan alam, dan seluruh keluarga bisa menghabiskan waktu berkualitas bersama.",
    image: "/images/about/people.png",
  },
  {
    id: 4,
    title: "Pengalaman Menjelajahi Hutan yang Aman",
    description:
      "Philia Adventure Park menyediakan berbagai opsi eksplorasi,  Semua dilakukan dalam pengawasan, sehingga Anda bisa menikmati alam dengan tenang dan tanpa rasa khawatir",
    image: "/images/about/jaket.png",
  },
];

const Card = () => {
  return (
    <div className="relative">
      <div>
         <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                > 
        <h1 className="text-[20px] md:text-[27px]  text-[#2D210A] lg:text-[40px] font-[1000] text-center">
        FASILITAS
        </h1>
        </motion.div>
      </div>
      
      <div className="container mx-auto relative z-10 pb-[10rem] lg:pb-[20rem] ">
        <div className="grid grid-cols-1 lg:mx-20 mx-[2rem] xl:mx-[6rem] md:grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          {cardData.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-3xl shadow-[8px_8px_0px_#0A2D19] bg-[#F6FFEA]"
            >
              <div className="flex flex-col px-2 md:px-2 xl:px-2 lg:px-2 items-center justify-center">
                <div className="flex flex-col justify-center items-center md:flex-row xl:flex-row lg:flex-row">
                  <div className="xl:w-[100%] w-full md:w-[100%]  mt-10 lg:mb-0 md:mt-0 xl:mt-0 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-28 w-28 xl:h-[7rem] xl:w-30 md:h-30 md:w-30 lg:h-[10rem] lg:w-28 md:pl-0"
                    />
                  </div>

                  <div className="p-6 xl:w-[200%] md:w-[200%] flex md:text-left  flex-col">
                    <h4 className="mb-2 text-[18px] md:text-[20px] lg:text-[1.5rem] xl:text-[1.5rem] xl:text-left md:text-left lg:text-left text-center font-bold text-blue-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-[14px] md:text-[10px] xl:text-[16px] lg:text-[16px] text-center xl:text-start lg:text-start md:text-start text-gray-700">
                      {item.description}
                    </p>
                  </div>
                </div>

               
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute -bottom-1 w-full">
        <img src="/images/01.png" alt="Gambar wahana" className="w-full h-full" />
      </div>
    </div>
  );
};
export default Card;
