// Stairs component
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Stairs({ isOpen }) {
  console.log("Stairs isOpen:", isOpen);
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-screen z-50 flex pointer-events-none">
          {[...Array(5)].map((_, index) => (
            <Stair key={index} index={index} />
          ))}
          <Background />
        </div>
      )}
    </AnimatePresence>
  );
}

const Stair = ({ index }) => {
  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      custom={index}
      className="w-[20vw] h-full bg-black z-50"
    ></motion.div>
  );
};

const Background = () => {
  return (
    <motion.div
      variants={background}
      initial="initial"
      animate="enter"
      exit="exit"
      className="absolute w-full h-full bg-black z-50"
    ></motion.div>
  );
};

// Animations (Ensure exit states are included)
const height = {
  initial: { height: 0 },
  enter: { height: "100vh" },
  exit: { height: 0 },
};

const background = {
  initial: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};
