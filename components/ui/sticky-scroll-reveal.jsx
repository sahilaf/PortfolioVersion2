"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export const AccordionDrawer = ({ content, contentClassName }) => {
  const [activeIndex, setActiveIndex] = useState(0); // Open first item initially

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // Cyan → Emerald
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // Pink → Indigo
    "linear-gradient(to bottom right, #f97316, #facc15)", // Orange → Yellow
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-center items-start space-y-6 lg:space-x-10 p-6 lg:p-12">
      {/* Left Side - Accordion */}
      <div className="w-full lg:w-1/2">
        {content.map((item, index) => (
          <div key={index} className="mb-4 rounded-lg overflow-hidden">
            <button
              className={cn(
                "w-full flex justify-between items-center px-6 py-4 text-lg font-semibold text-white bg-gray-800 rounded-lg transition-all duration-300",
                activeIndex === index && "bg-gray-900"
              )}
              onClick={() => toggleAccordion(index)}
            >
              {item.title}
              <span className="text-xl">{activeIndex === index ? "▲" : "▼"}</span>
            </button>
            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 py-4 text-gray-300 bg-gray-900 rounded-b-lg"
                >
                  {item.description}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Right Side - Dynamic Image Change */}
      <motion.div
        animate={{
          background: linearGradients[activeIndex % linearGradients.length] || linearGradients[0],
        }}
        className={cn(
          "h-64 w-full lg:w-80 rounded-lg flex items-center justify-center text-white text-lg font-bold shadow-lg transition-all duration-500",
          contentClassName
        )}
      >
        {content[activeIndex]?.content ?? <p>Select an item</p>}
      </motion.div>
    </div>
  );
};
