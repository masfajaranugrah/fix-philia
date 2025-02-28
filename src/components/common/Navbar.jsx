 
"use client";
import { motion, AnimatePresence } from "framer-motion";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown, X } from "lucide-react";
 
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false); // Dropdown Mobile

  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current && !menuRef.current.contains(event.target) &&
        buttonRef.current && !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
      if (
        dropdownRef.current && !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="absolute lg:my-10 xl:my-10 my-0">
      <motion.nav 
           
        className="fixed bg-green-900 top-0 xl:top-4 md:top-4 lg:top-4 left-1/2 transform -translate-x-1/2 
         lg:w-[95%] w-full xl:w-[95%]  md:w-[95%] text-white p-4 flex justify-between items-center 
        xl:rounded-xl lg:rounded-xl md:rounded-xl rounded-none shadow-lg transition-all duration-300 z-40 mx-auto">
        <div className="w-[99%] flex justify-between items-center mx-auto">
          <div className="flex items-center space-x-2">
            <a href="/">
            <img src="/images/navbar/logo.png" alt="Logo" className="w-16 h-16" />
            
            </a>
            <div className="text-sm hidden  md:block xl:block lg:block">
              <p className="text-[15px] font-bold">Senin-Minggu : 08:00 - 17:00</p>
              <p className="text-[15px] font-bold">Tutup : 19:00</p>
            </div>
          </div>

 
            <div className="text-sm  text-center block md:hidden xl:hidden lg:hidden  ">
              <p className="text-[15px] font-bold">Senin-Minggu : 08:00 - 17:00</p>
              <p className="text-[15px] font-bold">Tutup : 19:00</p>
            </div>
          

          <div className="hidden lg:flex space-x-6">
            <Link href="/" className="text-[15px] font-bold">HOME</Link>
            <Link href="/about" className="text-[15px] font-bold">TENTANG KAMI</Link>
            <div className="relative" ref={dropdownRef}>
              <button 
                className="text-[15px] font-bold flex items-center space-x-1" 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <span>KUNJUNGI</span>
                <ChevronDown size={16} />
              </button>
              {isDropdownOpen && (
             <motion.div
             ref={menuRef}
             initial={{ opacity: 0, y: -10 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -10 }}
             transition={{ duration: 0.2 }}
             className="absolute -left-9 mt-2 w-[170%] top-9 bg-green-800 text-white rounded-md shadow-md"
           >
             <Link
               href="/tiket"
               className="block px-4 font-bold py-2 hover:bg-green-700 hover:rounded-b-md"
               onClick={() => setIsDropdownOpen(false)}
             >
               TIKET
             </Link>
             <Link
               href="/event"
               className="block px-4 font-bold py-2 hover:bg-green-700 hover:rounded-b-md"
               onClick={() => setIsDropdownOpen(false)}
             >
               ACARA
             </Link>
             <Link
               href="/group"
               className="block px-4 font-bold py-2 hover:bg-green-700 hover:rounded-b-md"
               onClick={() => setIsDropdownOpen(false)}
             >
               GROUP
             </Link>
             <Link
               href="/getting"
               className="block px-4 font-bold py-2 hover:bg-green-700 hover:rounded-b-md"
               onClick={() => setIsDropdownOpen(false)}
             >
               KUNJUNGI KAMI
             </Link>
           </motion.div>
           
              )}
            </div>
            <Link href="/wahana" className="text-[15px] font-bold">WAHANA</Link>
             <Link href="/question" className="text-[15px] font-bold">PERTANYAAN</Link>
            </div>

         
            <button
      ref={buttonRef}
      className="md:block lg:hidden relative z-50"
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.div className="w-6 h-5 flex flex-col justify-center relative">
        {/* Garis Atas */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-white"
          animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ originX: 0.5, originY: 0.5 }}
        />
        {/* Garis Tengah */}
        <motion.div
          className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-1 bg-white"
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        />
        {/* Garis Bawah */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-1 bg-white"
          animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ originX: 0.5, originY: 0.5 }}
        />
      </motion.div>
    </button>

          
        </div>
      </motion.nav>


      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-20 md:top-[6rem] right-0 left-0 mx-auto max-w-screen-md md:w-[893px] bg-green-900 text-center text-white p-4 shadow-lg rounded-lg lg:hidden z-[9999]"
          >
            <Link href="/" className="text-[15px] block font-bold py-2" onClick={() => setIsOpen(false)}>HOME</Link>
            <Link href="/about" className="text-[15px] block font-bold py-2" onClick={() => setIsOpen(false)}>TENTANG KAMI</Link>
            
            {/* Mobile Dropdown */}
            <button
              className="text-[15px] block font-bold py-2 flex justify-center items-center w-full"
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
            >
              KUNJUNGI <ChevronDown size={16} className="ml-1" />
            </button>
            
            <AnimatePresence>
              {isMobileDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-green-900 rounded-md overflow-hidden"
                >
                  <Link href="/tiket" className="block px-4 py-2 font-bold hover:bg-green-700" onClick={() => { setIsOpen(false); setIsMobileDropdownOpen(false); }}>TIKET</Link>
<Link href="/event" className="block px-4 py-2 font-bold hover:bg-green-700" onClick={() => { setIsOpen(false); setIsMobileDropdownOpen(false); }}>ACARA</Link>
<Link href="/group" className="block px-4 py-2 font-bold hover:bg-green-700" onClick={() => { setIsOpen(false); setIsMobileDropdownOpen(false); }}>GROUP</Link>
<Link href="/getting" className="block px-4 py-2 font-bold hover:bg-green-700" onClick={() => { setIsOpen(false); setIsMobileDropdownOpen(false); }}>KUNJUNGI KAMI</Link>

                </motion.div>
              )}
            </AnimatePresence>

            <Link href="/wahana" className="text-[15px] block font-bold py-2" onClick={() => setIsOpen(false)}>WAHANA</Link>
            <Link href="/question" className="text-[15px] block font-bold py-2" onClick={() => setIsOpen(false)}>PERTANYAAN</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
