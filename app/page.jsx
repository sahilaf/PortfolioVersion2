"use client";
import React, { useState, useEffect } from 'react';
import Hero from "@/components/Hero";
import Section from "@/components/sectiontext";
import Header from "../components/header";
import LoadingScreen from "@/components/LoadingScreen";  // Import the LoadingScreen component

function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time and then hide the loading screen
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Set a 3-second delay to simulate loading
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}  {/* Show the loading screen if loading is true */}
      <Header className="z-10"/>
      <Hero />
      <Section />
    </>
  );
}

export default Page;
