 
import React from "react";
import { motion } from "framer-motion";
import logo from '/images/logo.png'

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children
}) => {
  return (
    (<div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-white hover:opacity-[0.9] dark:text-white">
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}>
          {active === item && (
            <div
            className="absolute top-[calc(100%_+_1.2rem)] -left-[2rem] transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                // layoutId ensures smooth animation
                layoutId="active"
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl">
                <motion.div
                  // layout ensures smooth animation
                  layout
                  className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>)
  );
};

export const Menu = ({
  setActive,
  children
}) => {
  return (
    (<nav  onMouseLeave={() => setActive(null)} className="relative rounded-[20px] border border-black text-white bg-gradient-to-r from-[#0A2D19] via-[#0D4023] to-[#0A2D19] shadow-input  space-x-4 px-8 py-6">
        <div className="flex justify-between">
            <div className="flex gap-4">
              <div>
                  <img src={logo} alt="logo" className="w-[54px] h-[54px]" />

              </div>
              <div className="flex flex-col">
                  <p>Mon-Sun : 00.00 - 00.00</p>
                  <p>Last Entry : 19.00</p>
              </div>
            </div>
        <div className="flex gap-3 justify-center items-center">
        {children}
        </div> 
        </div>
      
    </nav>)
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src
}) => {
  return (
    (<a href={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl" />
      <div>
        <h4 className="text-xl font-bold mb-1 text-white dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </a>)
  );
};

export const HoveredLink = ({
  children,
  ...rest
}) => {
  return (
    (<a 
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black ">
      {children}
    </a>)
  );
};
