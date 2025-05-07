import React from "react";
import { gsap } from "gsap";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import "./flowingMenu.css";

function FlowingMenu({ items = [] }) {
  return (
    <div className="w-full h-full overflow-hidden">
      <nav className="flex flex-col h-full">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </nav>
    </div>
  );
}

function MenuItem({ text, skills = [] }) {
  const itemRef = React.useRef();
  const marqueeRef = React.useRef();

  // Create multiple copies for seamless looping
  const duplicatedSkills = React.useMemo(() => {
    return [...skills, ...skills]; // Triple the items for better continuity
  }, [skills]);

  const animationDefaults = { duration: 0.4, ease: "expo.out" };

  const findClosestEdge = (x, y, w, h) =>
    (x - w / 2) ** 2 + y ** 2 < (x - w / 2) ** 2 + (y - h) ** 2
      ? "top"
      : "bottom";

  const enter = (ev) => {
    if (!itemRef.current || !marqueeRef.current) return;
    const { left, top, width, height } = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(ev.clientX - left, ev.clientY - top, width, height);

    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" })
      .to(marqueeRef.current, { y: "0%" });
  };

  const leave = (ev) => {
    if (!itemRef.current || !marqueeRef.current) return;
    const { left, top, width, height } = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(ev.clientX - left, ev.clientY - top, width, height);

    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" });
  };

  return (
    <div className="menu-item" ref={itemRef}>
      <a className="flex items-center justify-center h-full relative cursor-pointer uppercase no-underline font-semibold text-white text-[4vh] hover:text-[#060606] focus:text-white focus-visible:text-[#060606]" onMouseEnter={enter} onMouseLeave={leave}>
        {text}
      </a>
      
      <div className="marquee-container" ref={marqueeRef}>
        <InfiniteMovingCards
          items={duplicatedSkills}  // Use duplicated skills here
          direction="left"
          speed="fast"
          pauseOnHover={true}
          className="!overflow-visible max-w-[100vw] pt-4"
        />
      </div>
    </div>
  );
}

export default FlowingMenu;