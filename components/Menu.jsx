import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { JetBrains_Mono } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

// Load JetBrains Mono font
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrainsMono",
});

// Slide Animation Variants
const menuVariants = {
  initial: { y: "-100%", opacity: 0 }, // Start off-screen and invisible
  enter: {
    y: "0%",
    opacity: 1,
    transition: { duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.1 }, // Slightly longer duration and delay
  },
  exit: {
    y: "-100%",
    opacity: 0,
    transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] }, // Smooth exit
  },
};

// Background Overlay Animation Variants
const backgroundVariants = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] }, // Match menu animation duration
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] }, // Smooth fade out
  },
};

// Scramble Text Effect
const useScrambleText = (isOpen) => {
  useEffect(() => {
    if (!isOpen) return; // Run only when menu is open

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    const scrambleText = (event, scramble) => {
      const element = event.target;
      const originalText = element.dataset.value;
      
      let interval = element.dataset.intervalId;
      if (interval) clearInterval(interval);

      let iteration = 0;
      element.dataset.intervalId = setInterval(() => {
        element.innerText = element.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("");

        if (iteration >= originalText.length) {
          clearInterval(element.dataset.intervalId);
        }

        iteration += scramble ? 1 / 3 : 0.5;
      }, 30);
    };

    const linkElements = document.querySelectorAll(".scramble-text");

    const handleMouseEnter = (event) => scrambleText(event, true);
    const handleMouseLeave = (event) => {
      scrambleText(event, false);
      event.target.innerText = event.target.dataset.value;
    };

    linkElements.forEach((link) => {
      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      linkElements.forEach((link) => {
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [isOpen]); // Depend on isOpen
};

function Menu ({ isOpen, onClose }) {
  useScrambleText(isOpen);
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
          variants={menuVariants}
          className="fixed inset-0 bg-primary z-50 flex flex-col items-center justify-center text-white right-0 top-0 h-screen "
        >
          {/* Background Overlay */}
          <motion.div
            variants={backgroundVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            className="absolute inset-0 bg-black opacity-50"
          />

          {/* Close Button */}
          
          <button
                className="bg-accent py-[2px] px-[2px] cursor-pointer z-50 absolute top-6 right-5 md:right-40 font-jetbrains"
                style={{
                  clipPath:
                    "polygon(100% 75.75%, 90.75% 100%, 0% 100%, 0% 25.75%,10.75% 0% , 100% 0%)",
                }}
                onClick={onClose}
              >
                <div
                  className="hover:transition-all duration-500 justify-end bg-[#000a01] hover:bg-accent hover:text-[#000a01] py-1 px-4 "
                  style={{
                    clipPath:
                      "polygon(100% 75.75%, 90.75% 100%, 0% 100%, 0% 25.75%, 10.75% 0% , 100% 0%)",
                  }}
                >
                  <p className="font-light scramble-text" data-value="Close">
                    Close
                  </p>
                </div>
              </button>

          {/* Navigation Links */}
          <nav
            className={`relative z-10 text-3xl md:text-5xl font-bold ${jetBrainsMono.className} space-y-6 `}
          >
              <div>
                <Link
                  href="/"
                  onClick={onClose}
                  className="hover:text-accent transition-all"
                >
                  Home
                </Link>
              </div>
              <div>
                <Link
                  href="/about"
                  onClick={onClose}
                  className="hover:text-accent transition-all"
                >
                  About
                </Link>
              </div>
              <div>
                <Link
                  href="/projects"
                  onClick={onClose}
                  className="hover:text-accent transition-all"
                >
                  Projects
                </Link>
              </div>
              <div>
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="hover:text-accent transition-all"
                >
                  Contact
                </Link>
              </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;
