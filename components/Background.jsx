import React from "react";
import { WavyBackground } from "./ui/wavy-background";
function Background() {
  return (
    <div className="overflow-hidden h-screen w-full">
      <WavyBackground className="overflow-hidden"></WavyBackground>
    </div>
  );
}

export default Background;
