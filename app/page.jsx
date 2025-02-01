"use client";
import React, { useState, useEffect } from "react";
import Hero from "@/components/Hero";

import Section from "@/components/sectiontext";
import Model from "@/components/model";

function Page() {
  useEffect(() => {
    // Ensure smooth scrolling is enabled
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);
  return (
    <div className="overflow-y-auto">
      <Hero />
      <div className="h-screen w-full fixed left-0 top-14 z-10 overflow-hidden">
        <Model /> {/* Pass the callback to Model */}
      </div>
      <Section />
      
    </div>
  );
}

export default Page;
