"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

const noise = createNoise3D();

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}) => {
  const canvasRef = useRef(null);
  const animationIdRef = useRef(null);

  const [isSafari, setIsSafari] = useState(false);

  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const waveColors = colors ?? [
    "#4AFFFF", // Very dark greenish teal for deep shadows
    "#00DF82", // Muted emerald green for smooth transitions
    "#2CC295", // Radiant neon green (main highlight)
    "#AACBC4", // Cyan-green for a futuristic glow
    "#F1F7F7", // Soft pastel green for smooth blending
  ];
  

  useEffect(() => {
    let canvas = canvasRef.current;
    let ctx = canvas.getContext("2d");
    let w = (ctx.canvas.width = window.innerWidth);
    let h = (ctx.canvas.height = window.innerHeight);
    let nt = 0;

    const init = () => {
      ctx.filter = `blur(${blur}px)`;
      window.onresize = () => {
        w = ctx.canvas.width = window.innerWidth;
        h = ctx.canvas.height = window.innerHeight;
        ctx.filter = `blur(${blur}px)`;
      };
    };

    const drawWave = (n) => {
      nt += getSpeed();
      for (let i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.lineWidth = waveWidth || 50;
        ctx.strokeStyle = waveColors[i % waveColors.length];
        for (let x = 0; x < w; x += 5) {
          const y = noise(x / 800, 0.3 * i, nt) * 100;
          ctx.lineTo(x, y + h * 0.5);
        }
        ctx.stroke();
        ctx.closePath();
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.globalAlpha = waveOpacity || 0.5;
      drawWave(5);
      animationIdRef.current = requestAnimationFrame(render);
    };

    init();
    render();

    return () => {
      cancelAnimationFrame(animationIdRef.current);
      window.onresize = null;
    };
  }, [blur, waveWidth]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsSafari(
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
      );
    }
  }, []);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center overflow-hidden",
        containerClassName
      )}
    >
      <canvas
        className="relative z-0 overflow-hidden"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn("relative z-10 overflow-hidden", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
