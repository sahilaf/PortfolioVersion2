import React, { useEffect } from "react";
import Photo from "./Photo";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

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

const Footer = () => {
  useScrambleText();
 
  return (
    <footer className="bg-primary text-white h-auto overflow-x-hidden pt-32 md:pt-36" id="footer">
      <section id="contact" className="w-auto mx-5 md:mx-10 lg:mx-20 xl:mx-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20 md:mb-28">
          <div
            className="flex justify-center md:justify-start"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            <Photo className="w-24 h-24 md:w-48 md:h-48" />
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <h1
                className="text-3xl md:text-4xl lg:text-[42px] font-black leading-[40px] md:leading-[50px] text-accent"
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-duration="500"
              >
                Hi, Got a project? <br /> <span className="text-white">Let's Talk.</span>
              </h1>
              <p
                className="text-base md:text-lg font-mono font-medium text-[#03dd82e7] mt-4"
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-duration="500"
              >
                Send me a mail at <span className="text-white"> sahilfarib320@gmail.com</span> <br /> and let's discuss further about your project.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {/* Send Mail Button */}
                <div className="w-auto flex justify-end">
                <a href="https://wa.me/8801936064767">
                    <button
                      className="bg-accent py-[3px] px-[2px] cursor-pointer z-30 font-jetbrains"
                      style={{
                        clipPath:
                          "polygon(100% 75.75%, 90.75% 100%, 0% 100%, 0% 25.75%,10.75% 0% , 100% 0%)",
                      }}
                    >
                      <div
                        className="hover:transition-all duration-500 justify-end bg-[#000a01] hover:bg-accent hover:text-[#000a01] py-2 px-5 font-jetbrains"
                        style={{
                          clipPath:
                            "polygon(100% 75.75%, 90.75% 100%, 0% 100%, 0% 25.75%, 10.75% 0% , 100% 0%)",
                        }}
                      >
                        <p
                          className="font-light scramble-text"
                          data-value="WhatsApp Me"
                        >
                          WhatsApp Me
                        </p>
                      </div>
                    </button>
                    </a>
                </div>
              </div>
            </div>

            <p
              className="text-2xl md:text-3xl font-nunito font-black"
              data-aos="fade-left"
              data-aos-delay="800"
              data-aos-duration="500"
            >
              Or
            </p>

            <div>
              <h1
                className="text-2xl md:text-3xl font-nunito font-black mb-6"
                data-aos="fade-left"
                data-aos-delay="900"
                data-aos-duration="500"
              >
                Contact me through other media
              </h1>
              <Socials
                containerStyles="flex gap-3"
                iconStyles="w-10 h-10 md:w-12 md:h-12 border border-accent rounded-full flex justify-center items-center text-white text-2xl hover:bg-accent hover:text-primary hover:transition-all duration-500"
              />
            </div>
          </div>
        </div>

        <div className="">
          <hr className="border-[#0a0a0a] border-2" />
          <div className="flex flex-col md:flex-row justify-between items-center py-6 gap-4 text-center md:text-left">
            <p
              className="text-base md:text-lg font-poppins font-medium text-[#00a05da9]"
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="500"
            >
              &copy; {new Date().getFullYear()} | Sahil
            </p>
            <p
              className="text-base md:text-lg font-poppins font-medium text-[#00a05da9]"
              data-aos="zoom-in"
              data-aos-delay="500"
              data-aos-duration="500"
            >
              Site by{" "}
              <span className="bg-gradient-to-r from-[#00df82a9] to-[#00df82c2] bg-clip-text text-transparent font-semibold">
                Sahil Al Farib.
              </span>
            </p>
            <p
              className="text-base md:text-lg font-poppins font-medium text-[#00a05da9]"
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="500"
            >
              All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;