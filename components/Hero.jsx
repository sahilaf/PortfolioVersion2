"use client";
import React, { useEffect, useRef } from "react";
import Model from "@/components/model";
import { Orbitron } from "next/font/google";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


const orbitron = Orbitron({
  weight: "400",
  subsets: ["latin"],
});
function Hero() {
 
  return (
    <div className={orbitron.className}>
      <div className="h-full overflow-hidden flex items-center justify-center mt-52 md:mt-40 ">
        <div className="flex whitespace-nowrap animate-marquee">
          <h1 className="text-[9rem] md:text-[12rem] font-black ml-10 text-transparent text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-accent text-[9rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[9rem] md:text-[12rem] font-black ml-10 text-transparent text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-accent text-[9rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[9rem] md:text-[12rem] font-black ml-10 text-transparent text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-accent text-[9rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[9rem] md:text-[12rem] font-black ml-10 text-transparent text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-accent text-[9rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[9rem] md:text-[12rem] font-black ml-10 text-transparent text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-accent text-[9rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[9rem] md:text-[12rem] font-black ml-10 text-transparent text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-accent text-[9rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[9rem] md:text-[12rem] font-black ml-10 text-transparent text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-accent text-[9rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[9rem] md:text-[12rem] font-black ml-10 text-transparent text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-accent text-[9rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[9rem] md:text-[12rem] font-black ml-10 text-transparent text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-accent text-[9rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[9rem] md:text-[12rem] font-black ml-10 text-transparent text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-accent text-[9rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[9rem] md:text-[12rem] font-black ml-10 text-transparent text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-accent text-[9rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[9rem] md:text-[12rem] font-black ml-10 text-transparent text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-accent text-[9rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[9rem] md:text-[12rem] font-black ml-10 text-transparent text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-accent text-[9rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[9rem] md:text-[12rem] font-black ml-10 text-transparent text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-accent text-[9rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[9rem] md:text-[12rem] font-black ml-10 text-transparent text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-accent text-[9rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[9rem] md:text-[12rem] font-black ml-10 text-transparent text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-accent text-[9rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[9rem] md:text-[12rem] font-black ml-10 text-transparent text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-accent text-[9rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[9rem] md:text-[12rem] font-black ml-10 text-transparent text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-accent text-[9rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[9rem] md:text-[12rem] font-black ml-10 text-transparent text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-accent text-[9rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[9rem] md:text-[12rem] font-black ml-10 text-transparent text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-accent text-[9rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[9rem] md:text-[12rem] font-black ml-10 text-transparent text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-accent text-[9rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[9rem] md:text-[12rem] font-black ml-10 text-transparent text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-accent text-[9rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[9rem] md:text-[12rem] font-black ml-10 text-transparent text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-accent text-[9rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[9rem] md:text-[12rem] font-black ml-10 text-transparent text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-accent text-[9rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[9rem] md:text-[12rem] font-black ml-10 text-transparent text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-accent text-[9rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[9rem] md:text-[12rem] font-black ml-10 text-transparent text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-accent text-[9rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[9rem] md:text-[12rem] font-black ml-10 text-transparent text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-accent text-[9rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
          <h1 className="text-[9rem] md:text-[12rem] font-black ml-10 text-transparent text-stroke-lg">
            Hello I'm{" "}
          </h1>
          <h1 className="text-accent text-[9rem] md:text-[12rem] font-black ml-10">
            {" "}
            SAHIL AL FARIB
          </h1>
        </div>
      </div>
      <div className="h-screen w-full overflow-x-hidden fixed left-0 top-14 bg-transparent z-40"></div>
      <div className="h-screen w-full overflow-x-hidden fixed left-0 top-14 z-10">
        <Model />
      </div>
      <div className={orbitron.className}>
        <div className="h-screen w-full absolute z-40 overflow-hidden text-[3rem] md:text-[8rem] pt-80 font-black px-20">
          A <br />
          Passionate
        </div>
        <div className="h-screen w-full absolute z-0 overflow-hidden text-[3rem] md:text-[8rem] mt-[45rem] font-black text-end px-20">
          <h1 className="text-accent">Developer</h1> From the future
        </div>
        <div className="h-screen w-full "></div>
        
          {/* Horizontal scrollable content */}
          <div className="h-screen w-full stop bg-gray-800"></div>
          <div className="h-screen w-full bg-slate-700"></div>
        
      </div>
    </div>
  );
}

export default Hero;
