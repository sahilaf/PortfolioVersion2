import React from "react";
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

const Menu = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
          variants={menuVariants}
          className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center text-white right-0 top-0 h-screen "
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
            onClick={onClose}
            className="absolute top-5 right-7 text-3xl text-accent hover:text-white transition"
          >
            <IoClose />
          </button>

          {/* Navigation Links */}
          <nav
            className={`relative z-10 text-3xl md:text-5xl font-bold ${jetBrainsMono.className} space-y-6`}
          >
            <Link
              href="/"
              onClick={onClose}
              className="hover:text-accent transition-all"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={onClose}
              className="hover:text-accent transition-all"
            >
              About
            </Link>
            <Link
              href="/projects"
              onClick={onClose}
              className="hover:text-accent transition-all"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              onClick={onClose}
              className="hover:text-accent transition-all"
            >
              Contact
            </Link>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;