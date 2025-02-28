import React from 'react';
import { motion } from 'framer-motion';

function Kunjungan() {
  return (
    <div className="relative  flex flex-col justify-center items-center">
      {/* Judul */}
      <div className="text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="  text-center text-[24px] block md:hidden lg:hidden xl:hidden md:text-[40px] xl:text-[40px] text-[#2D210A]  font-[Montserrat] font-[1000] my-10">
          KUNJUNGI PHILIA <br/> SEKARANG!
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="  text-center text-[24px] hidden md:block xl:block lg:block  md:text-[40px] xl:text-[40px] text-[#2D210A]  font-[Montserrat] font-[1000] my-10">
          KUNJUNGI PHILIA SEKARANG!
        </motion.p>
      </div>

      {/* Grid Card */}
      <div className="grid grid-cols-1 mb-[6rem] md:w-[90%] xl:w-[86%] xl:mb-[30rem] lg:mb-[30rem] md:mb-[20rem] gap-6 md:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 z-[10]">
        {/* Card 1 */}
        

           <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3 }}
           >
<a href="/getting"  className="flex justify-center items-center"> 
          <img
            src="/images/kunjungan/01.png"
            alt="kunjungan"
            className="rounded-[20px] w-[90%] lg:w-[100%] xl:w-[100%] md:w-[100%]"
          />
 </a>
        </motion.div>
       
       
        
       
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          >
             <a href="/tiket" className="flex justify-center items-center">
          <img
            src="/images/kunjungan/02.png"
            alt="kunjungan"
            className="rounded-[20px] w-[90%] lg:w-[100%] xl:w-[100%] md:w-[100%]"
          />
          </a>
        </motion.div>
      </div>

      {/* Gambar Pohon di Bawah */}
      < div  className="absolute -bottom-1 w-full">
        <img
          src="/images/01.png"
          alt="Gambar wahana"
          className="w-full h-full"
        />
      </ div>
    </div>
  );
}

export default Kunjungan;
