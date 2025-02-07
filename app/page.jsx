"use client";
import React, { useEffect, useRef } from "react";
import Hero from "@/components/Hero";
import Section from "@/components/sectiontext";
import Model from "@/components/model";

function Page() {
  const sectionRef = useRef(null);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          window.scrollTo({
            top: section.offsetTop,
            behavior: "smooth",
          });
        }
      },
      {
        root: null, // Use the viewport instead of a custom scroll container
        threshold: 0.3, // Trigger when 50% of the section is visible
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      <Hero />
      <div className="h-screen w-full fixed left-0 top-14 z-10 overflow-hidden pointer-events-none">
        <Model />
      </div>
      {/* Attach ref directly to the Section wrapper */}
      <div ref={sectionRef}>
        <Section />
      </div>
    </div>
  );
}

export default Page;
