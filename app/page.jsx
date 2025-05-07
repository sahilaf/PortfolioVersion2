// app/page.js
"use client";

import React, { useEffect, useRef } from "react";
import Hero from "@/components/Hero";
import Section from "@/components/sectiontext";

import Header from "@/components/header"
import Preloader from "@/components/Preloader";
function Page() {
  const sectionRef = useRef(null);// Get the current pathname to force remount of Model

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
        root: null,
        threshold: 0.3,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      console.log("Page component unmounted");
    };
  }, []);

  return (
    <div className="relative">
      <Preloader/> {/* Add Preloader here */}
      <Header />
      <Hero />
      {/* 
        Using the pathname as key forces React to fully remount the Model 
        when the route changes. This ensures cleanup happens and no duplicate 
        instances persist.
      */}
      

      <div ref={sectionRef}>
        <Section />
      </div>
      
    </div>
  );
}

export default Page;
