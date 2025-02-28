"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaChevronRight, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const menuItems1 = [
    { name: "Beranda", url: "/" },
    { name: "Tentang Kami", url: "/about" },
    { name: "Wahana", url: "/wahana" },
    { name: "Pertanyaan", url: "/question" },
  
  ];
  const menuItems2 = [
    { name: "Tiket Informasi", url: "/tiket" },
    { name: "Group", url: "/group" },
    { name: "Kunjungi", url: "/getting" },
    { name: "Acara", url: "/event" },
  ];
  return (
    <footer
      className="text-white py-10"
      style={{
        backgroundImage: "url('/images/mobile.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Logo & About Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <div className="flex justify-center">
                      <img src="/images/banner/logo.png" alt="logo" className="w-[50%] lg:w-[50%] md:w-[30%] xl:w-[60%]" />

          </div>
       
      <div className="flex justify-center gap-4">
        <a href="https://www.instagram.com/philiadventureland" target="_blank" className="text-white text-lg hover:text-gray-300">
            <FaInstagram />
          </a>
          <a href="#" className="text-white text-lg hover:text-gray-300">
            <FaFacebook />
          </a>
      </div>
          
        </motion.div>

        {/* Quick Links */}
 

<motion.div
  initial={{ opacity: 0, y: -50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.4 }}
>
  <h3 className="text-xl font-semibold mb-4">Halaman</h3>
  <ul className="space-y-2">
    {menuItems1.map((item, index) => (
      <motion.li
        key={index}
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
        className="flex items-center"
      >
        <FaChevronRight className="mr-2" />
        <a href={item.url} className="hover:text-gray-300">
          {item.name}
        </a>
      </motion.li>
    ))}
  </ul>
</motion.div>

<motion.div
  initial={{ opacity: 0, y: -50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.4 }}
>
  <h3 className="text-xl font-semibold mb-4">Kunjungi</h3>
  <ul className="space-y-2">
    {menuItems2.map((item, index) => (
      <motion.li
        key={index}
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
        className="flex items-center"
      >
        <FaChevronRight className="mr-2" />
        <a href={item.url} className="hover:text-gray-300">
          {item.name}
        </a>
      </motion.li>
    ))}
  </ul>
</motion.div>
        {/* Contact Us */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-4">Alamat</h3>
          <p className="md:w-2/4 xl:w-full w-full">Jl. M. Bakri Kampung Gunung Letik, RT.01/RW.02, Cibodas, Kec. Jonggol, Bogor Timur, Jawa Barat 16830</p>
        </motion.div>

        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4">Kontak</h3>
          <ul className="space-y-2">
            <li className="flex items-center flex">
              <div>
                 <FaEnvelope />
              </div>
              <div>
                     <a href="mailto:philiadventureland@gmail.com" class="hover:text-gray-300 flex items-center">
    <i class="fas fa-envelope mr-2"></i> philiadventureland@gmail.com
</a>
              </div>
          

            </li>
            
            <li className="flex items-center">
              <FaWhatsapp className="mr-2" /> <a href="tel:+6285282945084" className="hover:text-gray-300">+62 852-8294-5084</a>
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="mr-2" /> <a href="tel:+6285282945084" className="hover:text-gray-300">+62 852-8294-5084</a>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.7 }}
        className="border-t font-bold border-gray-700 mt-10 pt-4 text-center text-sm"
      >
        <p>&copy; 2025 PHILIA.<br /> Developed by Astheron Technologies.<br /> All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
