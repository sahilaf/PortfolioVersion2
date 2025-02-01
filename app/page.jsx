"use client";
import React, { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Section from "@/components/sectiontext";
import Header from "../components/header";
import Model from "@/components/model";

function Page() {
  useEffect(() => {
    // Ensure smooth scrolling is enabled
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);
  return (
    <>
      <Header
        
      />

      <Hero />
      <div className="h-screen w-full fixed left-0 top-14 z-10">
        <Model /> {/* Pass the callback to Model */}
      </div>
      <Section />
    </>
  );
}

export default Page;
