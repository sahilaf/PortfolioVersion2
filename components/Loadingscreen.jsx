import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  weight: "900",
  subsets: ["latin"],
});

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [modelLoaded, setModelLoaded] = useState(false); // Track model loading

  useEffect(() => {
    // GSAP Timeline for loading screen
    const tl = gsap.timeline();

    // Fade in the loading screen smoothly
    tl.to(".loading-screen", { opacity: 1, duration: 0.5, ease: "power2.out" });

    // Animate the progress bar from 0% to 100% smoothly (duration set for 4 seconds)
    tl.to(".progress-bar", {
      width: "100%",
      duration: 4,
      ease: "power2.inOut",
      onUpdate: () => {
        setProgress(Math.round(tl.progress() * 100)); // Update progress percentage based on animation progress
      },
      onComplete: () => {
        // After the progress bar reaches 100%, trigger model loaded logic
        if (modelLoaded) {
          // Fade out the loading screen smoothly
          tl.to(".loading-screen", {
            opacity: 0,
            duration: 1,
            delay: 2,
            ease: "power2.in",
          });
          // Slide out the loading screen smoothly
          tl.to(".loading-screen", {
            x: "100%",
            duration: 1,
            ease: "power2.inOut",
          });
          // Hide the loading screen
          tl.set(".loading-screen", { display: "none" });
        }
      },
    });

    // Simulate model loading (replace this with actual model loading in a real scenario)
    setTimeout(() => {
      setModelLoaded(true); // Simulate model loading completion after 3 seconds
    }, 3000);

  }, [modelLoaded]); // Re-run effect when model is loaded

  return (
    <div className="loading-screen fixed top-0 left-0 w-full h-full bg-black flex justify-center items-center z-50">
      {/* Progress Bar Container */}
      <div className="w-full h-[2px] bg-gray-600 overflow-hidden relative">
        {/* Progress Bar */}
        <div className="progress-bar h-full bg-accent" style={{ width: "0%" }}></div>
      </div>

      {/* Percentage Text */}
      <div className={orbitron.className}>
        <div className="absolute inset-0 flex justify-center items-center text-white font-black text-5xl">
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
