import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const Preloader = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const preloaderRef = useRef(null);
  const startTime = useRef(null);
  const animationFrameId = useRef(null);

  // Languages to display
  const greetings = ["Hello", "Hola", "Bonjour", "你好", "नमस्ते"];
  let languageIndex = 0;

  useEffect(() => {
    const totalDuration = 3500; // 3.5s total effect
    const displayDuration = 800; // Show final text before hiding
    const scrambleInterval = 75; // Slower scrambling effect
    const languageChangeInterval = 700; // Change language every 500ms

    const animateText = (timestamp) => {
      if (!startTime.current) startTime.current = timestamp;
      const elapsedTime = timestamp - startTime.current;

      if (elapsedTime < totalDuration) {
        if (elapsedTime % languageChangeInterval < scrambleInterval) {
          languageIndex = (languageIndex + 1) % greetings.length; // Change greeting
        }

        setText(
          greetings[languageIndex].split("").map((letter) => {
            return Math.random() > 0.6 ? letters[Math.floor(Math.random() * letters.length)] : letter;
          }).join("")
        );

        setTimeout(() => {
          animationFrameId.current = requestAnimationFrame(animateText);
        }, scrambleInterval);
      } else {
        setText("Hello...");
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
      className="preloader fixed top-0 left-0 w-full h-screen bg-black flex items-center justify-center z-[1000]"
    >
      <div className="text-5xl font-bold font-jetbrains text-[#00DF82]">{text}</div>
    </div>
  );
};

export default Preloader;
