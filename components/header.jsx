import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { JetBrains_Mono } from "next/font/google";
import { AnimatePresence } from 'framer-motion';
const jetBrains_Mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrainsMono",
});
const socials = [
  { icon: <FaGithub />, path: "https://github.com/sahilaf" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/sahil-al-farib-b45b75270/",
  },
  { icon: <FaTwitter />, path: "https://x.com/SFarib44572" },
  { icon: <FaFacebook />, path: "https://www.facebook.com/sahil.alfarib" },
];
const Socials = ({ containerStyles, iconStyles }) => (
  <div className={containerStyles}>
    {socials.map((item, index) => (
      <Link key={index} href={item.path} className={iconStyles}>
        {item.icon}
      </Link>
    ))}
  </div>
);

function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
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
  return (
    <>
      <header
        className="bg-transparent backdrop-blur-md pt-6 py-3 xl:py-4 text-white fixed top-0 left-0 right-0 z-50 border-b border-[#03624C]"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
        }}
      >
        <div className={jetBrains_Mono.className}>
          <div className="container mx-auto flex justify-between ">
            <div className="w-32 pl-7 md:pl-14 xl:pl-0">
              <Link href="/">
                <h1 className="text-2xl md:text-3xl font-bold items-start">
                  <span>{`{`}</span>
                  <span
                    className="text-accent scramble-text"
                    data-value={"Sahil"}
                  >
                    Sahil
                  </span>
                  <span>{`]`}</span>
                </h1>
              </Link>
            </div>
            <Socials
              containerStyles="hidden md:flex md:gap-3"
              iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-white text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
            />

            <div className="w-32 flex justify-end pr-7 md:pr-14 xl:pr-0">
              <div
                className={`bg-accent py-[2px] px-[2px] cursor-pointer ${jetBrains_Mono.className}`}
                style={{
                  clipPath:
                    "polygon(100% 75.75%, 90.75% 100%, 0% 100%, 0% 25.75%,10.75% 0% , 100% 0%)",
                }}
              >
                <div
                  className={`hover:transition-all duration-500 justify-end bg-[#000a01]  hover:bg-accent hover:text-[#000a01] py-1 px-5 ${jetBrains_Mono.className}`}
                  style={{
                    clipPath:
                      "polygon(100% 75.75%, 90.75% 100%, 0% 100%, 0% 25.75%, 10.75% 0% , 100% 0%)",
                  }}
                >
                  <AnimatePresence mode="wait">
                    {menuIsOpen && (
                      <>
                        <Stairs />
                        <Menu
                          closeMenu={() => {
                            setMenuIsOpen(false);
                          }}
                        />
                      </>
                    )}
                  </AnimatePresence>
                  <p className="font-light scramble-text" data-value={"Menu"}>
                    Menu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
