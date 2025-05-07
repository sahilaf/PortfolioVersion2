"use client";

import { easeIn, motion } from "framer-motion";
import Image from "next/image";
const Photo = () => {
  return (
    <motion.div
  className="relative w-[300px] h-[300px] xl:w-[506px] xl:h-[506px]"
>
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      delay: 2,
      duration: 0.4,
      ease: easeIn,
    }}
    className="absolute inset-0"
  >
    <Image
      src="/assets/Photo.png"
      priority
      quality={100}
      fill
      alt=""
      className="object-contain w-full h-full"
    />
  </motion.div>
  {/*circle */}
  <motion.svg
   initial={{
    opacity: 0,
  }}
  animate={{
    opacity: 1,
    transition: {
      delay: 1.7,
      duration: 0.5,
      ease: "easeIn",
    }
  }}
    className="absolute inset-0 w-full h-full"
    fill="transparent"
    viewBox="0 0 506 506"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.circle
      cx="253"
      cy="253"
      r="250"
      stroke="#00DF82"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{
        strokeDasharray: "24 10 0 0",
      }}
      animate={{
        strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
        rotate: [120, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  </motion.svg>
</motion.div>
  );
};

export default Photo;