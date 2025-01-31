"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { JetBrains_Mono } from "next/font/google";
import { useEffect } from "react";

const jetBrains_Mono = JetBrains_Mono({
  weight: "400",
  subsets: ["latin"],
});

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "projects",
    path: "/products",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "blogs",
    path: "/blogs",
  },
];

const Nav = () => {
  const pathname = usePathname();

  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Initialize audio element for hover sound
    const hoverSound = new Audio("/assets/effect.wav");  // Make sure to place your sound file in the public folder

    const scrambleText = (event, scramble) => {
      const element = event.target;
      const originalText = element.dataset.value;

      // Track the interval ID for each element
      let interval = element.dataset.intervalId;

      // If an interval exists, clear it before starting a new scramble
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
          clearInterval(element.dataset.intervalId);  // Clear the interval once done
        }

        iteration += scramble ? 1 / 3 : 0.5;
      }, 30);
    };

    const linkElements = document.querySelectorAll(".scramble-text");

    const handleMouseEnter = (event) => {
      scrambleText(event, true);
      hoverSound.play();  // Play the sound on hover
    };
    const handleMouseLeave = (event) => {
      scrambleText(event, false);
      // Reset the text to the original value
      event.target.innerText = event.target.dataset.value;
    };

    // Add event listeners for each link
    linkElements.forEach((link) => {
      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);
    });

    // Cleanup event listeners on component unmount
    return () => {
      linkElements.forEach((link) => {
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <nav className={`flex gap-8 ${jetBrains_Mono.className}`}>
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`scramble-text ${link.path === pathname ? "text-accent border-b-2 border-accent" : ""} capitalize font-light`}
          data-value={link.name} // Add the original text for scrambling
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
