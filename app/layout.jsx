import "./globals.css";
import { Lato } from "next/font/google";

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
      <body className={lato.className}>
      
        {children}
        
      </body>
    </html>
  );
}
