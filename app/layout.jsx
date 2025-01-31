import "./globals.css";
import { Lato } from "next/font/google";
import Script from "next/script";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sahil Al Farib",
  description:
    "Passionate software developer crafting efficient and innovative solutions. Explore my portfolio, showcasing expertise in web development, cutting-edge technologies, and creative problem-solving.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className={lato.className}>
        
        {children}
      </body>
    </html>
  );
}
