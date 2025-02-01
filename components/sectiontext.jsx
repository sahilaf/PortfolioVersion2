
import { Orbitron } from "next/font/google";
import { projects } from './data';
import Card from '../components/Card';
import { useScroll } from 'framer-motion';
import { React, useRef ,useEffect} from 'react';

const orbitron = Orbitron({
  weight: "400",
  subsets: ["latin"],
});

function Section() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  
  return (
    <main ref={container} className="relative mt-[50vh] bg-transparent backdrop-blur-lg z-40 ">
      
    {projects.map((project, i) => {
      const targetScale = 1 - (projects.length - i) * 0.05;
      return (
        <Card
          key={`p_${i}`}
          i={i}
          {...project}
          progress={scrollYProgress}
          range={[i * 0.25, 1]}
          targetScale={targetScale}
        />
      );
    })}
  </main>
  );
}

export default Section;
