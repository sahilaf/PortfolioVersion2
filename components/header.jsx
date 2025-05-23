"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { JetBrains_Mono } from "next/font/google";
import Menu from "./Menu";
// Font configuration
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrainsMono",
});

// Social links data
const socials = [
  { icon: <FaGithub />, path: "https://github.com/sahilaf" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/sahil-al-farib-b45b75270/",
  },
  { icon: <FaTwitter />, path: "https://x.com/SFarib44572" },
  { icon: <FaFacebook />, path: "https://www.facebook.com/sahil.alfarib" },
];

// Reusable Socials Component
const Socials = ({ containerStyles, iconStyles }) => (
  <div className={containerStyles}>
    {socials.map((item, index) => (
      <Link
        key={index}
        href={item.path}
        className={iconStyles}
        aria-label={`Link to ${item.path}`}
      >
        {item.icon}
      </Link>
    ))}
  </div>
);

// Scramble Text Effect
const useScrambleText = () => {
  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const scrambleText = (event, scramble) => {
      const element = event.target;
      const originalText = element.dataset.value;

      let interval = element.dataset.intervalId;

      if (interval) {
        clearInterval(interval);
      }

      let iteration = 0;
      element.dataset.intervalId = setInterval(() => {
        element.innerText = element.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            return letters[Math.floor(Math.random() * 26)];
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
  }, []);
};

// Header Component
function Header() {
  // Scramble text effect
  useScrambleText();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div
        className="bg-transparent backdrop-blur-md pt-6 py-3 xl:py-4 text-white fixed top-0 left-0 right-0 z-50 border-b border-[#03624C] flex justify-between px-5 font-jetbrains md:px-40"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
            {/* Logo */}
            <div className="w-32">
              <Link href="/">
                <h1 className="text-2xl md:text-3xl font-bold items-start">
                  <span>{`{`}</span>
                  <span
                    className="text-accent scramble-text"
                    data-value="Sahil"
                  >
                    Sahil
                  </span>
                  <span>{`]`}</span>
                </h1>
              </Link>
            </div>

            {/* Social Links */}
            <Socials
              containerStyles="hidden md:flex md:gap-3"
              iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-white text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
            />

            {/* Menu Button */}
            <div className="w-32 flex justify-end">
              <button
                className={`bg-accent py-[2px] px-[2px] cursor-pointer z-50 ${jetBrainsMono.className}`}
                style={{
                  clipPath:
                    "polygon(100% 75.75%, 90.75% 100%, 0% 100%, 0% 25.75%,10.75% 0% , 100% 0%)",
                }}
                onClick={() => setMenuOpen(true)}
              >
                <div
                  className={`hover:transition-all duration-500 justify-end bg-[#000a01] hover:bg-accent hover:text-[#000a01] py-1 px-5 ${jetBrainsMono.className}`}
                  style={{
                    clipPath:
                      "polygon(100% 75.75%, 90.75% 100%, 0% 100%, 0% 25.75%, 10.75% 0% , 100% 0%)",
                  }}
                >
                  <p className="font-light scramble-text" data-value="Menu">
                    Menu
                  </p>
                </div>
              </button>
            </div>
          </div>

      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}

export default Header;
