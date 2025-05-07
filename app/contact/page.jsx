"use client"

import Footer from "@/components/Footer";
import Header from "@/components/header";
import Preloader from "@/components/PreloaderContact";
import React from "react";

function page() {
  return (
    <div>
      <Preloader/>
      <Header/>
      <Footer />
    </div>
  );
}

export default page;
