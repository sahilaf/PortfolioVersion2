import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const Preloader = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789*/{}[]():/+-";
  const preloaderRef = useRef(null);
  const startTime = useRef(null);
  const animationFrameId = useRef(null);

  useEffect(() => {
    const totalDuration = 1000; // 2.5s scramble effect
    const displayDuration = 500; // 1s display "Hello..."
    const scrambleInterval = 50; // Slows down scrambling (100ms per update)

    const animateText = (timestamp) => {
      if (!startTime.current) startTime.current = timestamp;
      const elapsedTime = timestamp - startTime.current;

      if (elapsedTime < totalDuration) {
        setText(
          "My Work".split("").map((letter, index) => {
            return Math.random() > 0.6 ? letters[Math.floor(Math.random() * letters.length)] : letter;
          }).join("")
        );
        setTimeout(() => {
          animationFrameId.current = requestAnimationFrame(animateText);
        }, scrambleInterval); // Adds delay to slow down scrambling
      } else {
        setText("My Work");
        setTimeout(() => {
          gsap.to(preloaderRef.current, {
            y: "-100%", // Slide up effect
            duration: 1.2,
            ease: "power3.inOut",
            onComplete: () => setLoading(false),
          });
        }, displayDuration);
      }
    };

    animationFrameId.current = requestAnimationFrame(animateText);

    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <div
      ref={preloaderRef}
      className={`preloader fixed top-0 left-0 w-full h-screen bg-black flex items-center justify-center z-[1000]`}
    >
      <div className="text-5xl font-bold font-jetbrains text-[#00DF82]">{text}</div>
    </div>
  );
};

export default Preloader;
