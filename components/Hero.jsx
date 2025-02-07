"use client";

import { Oxanium, JetBrains_Mono } from "next/font/google";
import { WavyBackground } from "./ui/wavy-background";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const oxanium = Oxanium({
  weight: ["400", "800"],
  subsets: ["latin"],
});
const jetBrains_Mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrainsMono",
});
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Trigger animation when the element enters and exits the viewport
  });

  const text = [
    "A passionate MERN stack developer with",
    "a strong foundation in AI & Machine Learning.",
    "I love building futuristic and interactive web",
    "applications that push the boundaries of innovation.",
    " Set course for adventure,",
    "A journey through space and possibilities.",
    "As we travel, you’ll get to know",
    "the man behind the mask"
  ];
  const opacity1 = useTransform(scrollYProgress, [0, 0.05], [0, 1]);
  const y1 = useTransform(scrollYProgress, [0, 0.05], [20, 0]);

  const opacity2 = useTransform(scrollYProgress, [0.05, 0.1], [0, 1]);
  const y2 = useTransform(scrollYProgress, [0.05, 0.1], [20, 0]);

  const opacity3 = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
  const y3 = useTransform(scrollYProgress, [0.1, 0.2], [20, 0]);

  const opacity4 = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
  const y4 = useTransform(scrollYProgress, [0.2, 0.3], [20, 0]);

  const opacity5 = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
  const y5 = useTransform(scrollYProgress, [0.3, 0.4], [20, 0]);

  const opacity6 = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const y6 = useTransform(scrollYProgress, [0.4, 0.5], [20, 0]);

  const opacity7 = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const y7 = useTransform(scrollYProgress, [0.5, 0.6], [20, 0]);

  const opacity8 = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);
  const y8 = useTransform(scrollYProgress, [0.6, 0.7], [20, 0]);

  const opacity9 = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);
  const y9 = useTransform(scrollYProgress, [0.6, 0.7], [20, 0]);

  return (
    <div className={oxanium.className}>
      <div className="z-0 absolute inset-0">
        <WavyBackground className="overflow-hidden"></WavyBackground>
      </div>

      <div className="h-screen overflow-hidden flex items-center justify-center mt-0 md:mt-[0px] ">
        <div className="flex whitespace-nowrap animate-marquee">
          <h1 className="text-[7rem] md:text-[12rem] font-black ml-10 text-[#ffffff36] text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-[#ffffff36] text-stroke-lg text-[7rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[7rem] md:text-[12rem] font-black ml-10 text-[#ffffff36] text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-[#ffffff36] text-stroke-lg text-[7rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[7rem] md:text-[12rem] font-black ml-10 text-[#ffffff36] text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-[#ffffff36] text-stroke-lg text-[7rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[7rem] md:text-[12rem] font-black ml-10 text-[#ffffff36] text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-[#ffffff36] text-stroke-lg text-[7rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[7rem] md:text-[12rem] font-black ml-10 text-[#ffffff36] text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-[#ffffff36] text-stroke-lg md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[7rem] md:text-[12rem] font-black ml-10 text-[#ffffff36] text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-[#ffffff36] text-stroke-lg text-[7rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[7rem] md:text-[12rem] font-black ml-10 text-[#ffffff36] text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-[#ffffff36] text-stroke-lg text-[7rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[7rem] md:text-[12rem] font-black ml-10 text-[#ffffff36] text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-[#ffffff36] text-stroke-lg text-[7rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[7rem] md:text-[12rem] font-black ml-10 text-[#ffffff36] text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-[#ffffff36] text-stroke-lg text-[7rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[7rem] md:text-[12rem] font-black ml-10 text-[#ffffff36] text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-[#ffffff36] text-stroke-lg text-[7rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[7rem] md:text-[12rem] font-black ml-10 text-[#ffffff36] text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-[#ffffff36] text-stroke-lg text-[7rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[7rem] md:text-[12rem] font-black ml-10 text-[#ffffff36] text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-[#ffffff36] text-stroke-lg text-[7rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[7rem] md:text-[12rem] font-black ml-10 text-[#ffffff36] text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-[#ffffff36] text-stroke-lg text-[7rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[7rem] md:text-[12rem] font-black ml-10 text-[#ffffff36] text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-[#ffffff36] text-stroke-lg text-[7rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[7rem] md:text-[12rem] font-black ml-10 text-[#ffffff36] text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-[#ffffff36] text-stroke-lg text-[7rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[7rem] md:text-[12rem] font-black ml-10 text-[#ffffff36] text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-[#ffffff36] text-stroke-lg text-[7rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[7rem] md:text-[12rem] font-black ml-10 text-[#ffffff36] text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-[#ffffff36] text-stroke-lg text-[7rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[7rem] md:text-[12rem] font-black ml-10 text-[#ffffff36] text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-[#ffffff36] text-stroke-lg text-[7rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[7rem] md:text-[12rem] font-black ml-10 text-[#ffffff36] text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-[#ffffff36] text-stroke-lg text-[7rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[7rem] md:text-[12rem] font-black ml-10 text-[#ffffff36] text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-[#ffffff36] text-stroke-lg text-[7rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[7rem] md:text-[12rem] font-black ml-10 text-[#ffffff36] text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-[#ffffff36] text-stroke-lg text-[7rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[7rem] md:text-[12rem] font-black ml-10 text-[#ffffff36] text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-[#ffffff36] text-stroke-lg text-[7rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[7rem] md:text-[12rem] font-black ml-10 text-[#ffffff36] text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-[#ffffff36] text-stroke-lg text-[7rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[7rem] md:text-[12rem] font-black ml-10 text-[#ffffff36] text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-[#ffffff36] text-stroke-lg text-[7rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[7rem] md:text-[12rem] font-black ml-10 text-[#ffffff36] text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-[#ffffff36] text-stroke-lg text-[7rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[7rem] md:text-[12rem] font-black ml-10 text-[#ffffff36] text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-[#ffffff36] text-stroke-lg text-[7rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[7rem] md:text-[12rem] font-black ml-10 text-[#ffffff36] text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-[#ffffff36] text-stroke-lg text-[7rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[7rem] md:text-[12rem] font-black ml-10 text-[#ffffff36] text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-[#ffffff36] text-stroke-lg text-[7rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
        </div>
      </div>
      <div className="h-[200vh] w-full overflow-x-hidden fixed left-0 top-14 bg-transparent z-40"></div>

      <div className={jetBrains_Mono.className}>
        <div
          className="w-full absolute z-40 md:px-40 px-5"
          ref={ref}
        >
          <div className="rounded-2xl text-left">
            <p className="text-lg/relaxed sm:text-2xl/relaxed md:text-3xl/relaxed font-black text-white ">
              <motion.span
                style={{ opacity: opacity1, y: y1, display: "block" }}
              >
                {text[0]}
              </motion.span>
              <motion.span
                style={{ opacity: opacity2, y: y2, display: "block" }}
              >
                {text[1]}
              </motion.span>
              <motion.span
                style={{ opacity: opacity3, y: y3, display: "block" }}
              >
                {text[2]}
              </motion.span>
              <motion.span
                style={{ opacity: opacity4, y: y4, display: "block" }}
              >
                {text[3]}
              </motion.span>
            </p>
          </div>
          <div className="rounded-2xl text-right mt-10">
            <p className="text-lg/relaxed sm:text-2xl/relaxed md:text-3xl/relaxed font-black text-white">
              <motion.span
                style={{ opacity: opacity5, y: y5, display: "block" }}
              >
                {text[4]}
              </motion.span>
              <motion.span
                style={{ opacity: opacity6, y: y6, display: "block" }}
              >
                {text[5]}
              </motion.span>
              <motion.span
                style={{ opacity: opacity7, y: y7, display: "block" }}
              >
                {text[6]}
              </motion.span>
              <motion.span
                style={{ opacity: opacity8, y: y8, display: "block" }}
              >
                {text[7]}
              </motion.span>
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
               
                className="bg-accent py-[2px] px-[2px] cursor-pointer z-50 font-jetbrains mt-10"
                style={{
                  clipPath:
                    "polygon(100% 75.75%, 90.75% 100%, 0% 100%, 0% 25.75%,10.75% 0% , 100% 0%)",
                
                 opacity: opacity9, y: y9 }
              }
                onClick={() => setMenuOpen(true)}
              >
                <div
                  className="hover:transition-all duration-500 justify-end bg-[#000a01] hover:bg-accent hover:text-black py-3 px-10 "
                  style={{
                    clipPath:
                      "polygon(100% 75.75%, 90.75% 100%, 0% 100%, 0% 25.75%, 10.75% 0% , 100% 0%)",
                  }}
                >
                  <p className="font-normal scramble-text" data-value="Start">
                    Start
                  </p>
                </div>
              </motion.button>
              
          </div>
        </div>
        <div className="h-screen w-full stop">
        
        </div>
      </div>
    </div>
  );
}

export default Hero;
