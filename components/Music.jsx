"use client";
import React, { useState, useRef, useEffect } from "react";

const Music = () => {
  const [isPlaying, setIsPlaying] = useState(false); // Start with paused state
  const audioRef = useRef(null);
  const lottiePlayerRef = useRef(null);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
      if (lottiePlayerRef.current) lottiePlayerRef.current.pause();
    } else {
      audioRef.current.play();
      if (lottiePlayerRef.current) lottiePlayerRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    // Ensure the lottie-player instance is properly initialized, but do not play immediately
    if (lottiePlayerRef.current) {
      lottiePlayerRef.current.stop();
    }
    // Do not play the audio on load, let it be controlled by the user's click
  }, []);

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/assets/music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div
        onClick={toggleMusic}
        className="fixed bottom-8 right-10 cursor-pointer z-50 bg-transparent"
      >
        <lottie-player
          ref={lottiePlayerRef}
          src="/assets/animation.json"
          background="transparent"
          speed="0.3"
          loop
          style={{ width: "100px", height: "100px" }}
        ></lottie-player>
        
      </div>
    </>
  );
};

export default Music;
