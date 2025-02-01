"use client"; // Ensure this component is client-side only
import { React, useEffect, useRef, useState, useCallback } from "react";
import { lerp } from "./blog/utils";
import { Orbitron } from "next/font/google";
import "./styles.css";
const orbitron = Orbitron({
  weight: "400",
  subsets: ["latin"],
});

const projects = [
  {
    name: "PROJECT ONE",
    type: "WEB DESIGN",
    pos: "start",
    image:
      "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=2370&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "PROJECT 2",
    type: "GRAPHIC DESIGN",
    pos: "mid",
    image:
      "https://images.unsplash.com/reserve/aOcWqRTfQ12uwr3wWevA_14401305508_804b300054_o.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2952&q=80",
  },
  {
    name: "PROJECT 3",
    type: "TYPE DESIGN",
    pos: "end",
    image:
      "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=2487&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "PROJECT 4",
    type: "WEB DESIGN",
    pos: "mid",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2564&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "PROJECT 5",
    type: "WEB DESIGN",
    pos: "end",
    image:
      "https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&q=80&w=2487&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "PROJECT 6",
    type: "GRAPHIC DESIGN",
    pos: "mid",
    image:
      "https://images.unsplash.com/photo-1561998338-13ad7883b20f?auto=format&fit=crop&q=80&w=2487&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "PROJECT 7",
    type: "WEB DESIGN",
    pos: "start",
    image:
      "https://images.unsplash.com/photo-1454117096348-e4abbeba002c?auto=format&fit=crop&q=80&w=2602&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "PROJECT 8",
    type: "TYPE DESIGN",
    pos: "end",
    image:
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
const blogPosts = [
  {
    title: "BLOG POST ONE",
    time: "3 MIN",
    image:
      "https://images.unsplash.com/photo-1561998338-13ad7883b20f?auto=format&fit=crop&q=80&w=2487&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "BLOG POST TWO",
    time: "4 MIN",
    image:
      "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=2370&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "BLOG POST THREE",
    time: "5 MIN",
    image:
      "https://images.unsplash.com/photo-1454117096348-e4abbeba002c?auto=format&fit=crop&q=80&w=2602&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  
];
const TextReveal = ({ text }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            Array.from(entry.target.querySelectorAll("span")).forEach(
              (span, idx) => {
                setTimeout(() => {
                  span.style.transform = "translateY(0)";
                }, (idx + 1) * 50);
              }
            );
          }
        });
      },
      { threshold: 1.0 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="text__reveal" ref={ref}>
      {[...text].map((char, i) => (
        <span key={i} style={{ transform: "translateY(100%)" }}>
          {char}
        </span>
      ))}
    </div>
  );
};

function Section() {
  const mainRef = useRef(null);
  const videoRef = useRef(null);
  const projectsStickyRef = useRef(null);
  const projectSliderRef = useRef(null);
  const blogSectionRef = useRef(null);

  const [projectCurrentX, setProjectCurrentX] = useState(0);
  const [projectTargetX, setProjectTargetX] = useState(0);
  const [limit, setLimit] = useState(100);
  // Update limit based on window width
  useEffect(() => {
    const updateLimit = () => {
      setLimit(
        window.innerWidth <= 600 ? 700 : window.innerWidth <= 1100 ? 300 : 100
      );
    };

    updateLimit();
    window.addEventListener("resize", updateLimit);
    return () => window.removeEventListener("resize", updateLimit);
  }, []);

  // Video Animation
  const animateVideo = useCallback(() => {
    if (!videoRef.current) return;
    const videoSection = videoRef.current.closest("section");
    const { bottom } = videoSection.getBoundingClientRect();

    const scale = Math.min(
      Math.max(1 - (bottom - window.innerHeight) * 0.0005, 0.2),
      1
    );
    videoRef.current.style.transform = `scale(${scale})`;

    const textTrans = Math.max(bottom - window.innerHeight, 0);
    const headerLeft = videoSection.querySelector(".text__header__left");
    const headerRight = videoSection.querySelector(".text__header__right");
    if (headerLeft) headerLeft.style.transform = `translateX(${-textTrans}px)`;
    if (headerRight) headerRight.style.transform = `translateX(${textTrans}px)`;
  }, []);

  // Projects Animation
  const animateProjects = useCallback(() => {
    if (!projectsStickyRef.current || !projectSliderRef.current) return;
    const offsetTop = projectsStickyRef.current.parentElement.offsetTop;
    const percentage = Math.min(
      Math.max(
        ((mainRef.current.scrollTop - offsetTop) / window.innerHeight) * 100,
        0
      ),
      limit
    );
    setProjectTargetX(percentage);
  }, [limit]);

  // Blog Posts Animation
  const scrollBlogPosts = useCallback(() => {
    if (!blogSectionRef.current) return;
    const blogSectionTop = blogSectionRef.current.getBoundingClientRect().top;
    const posts = Array.from(blogSectionRef.current.querySelectorAll(".post"));

    posts.forEach((post, i) => {
      if (post.parentElement.getBoundingClientRect().top <= 1) {
        const offset = Math.min(
          Math.max(
            (blogSectionTop + window.innerHeight * (i + 1)) * 0.0005,
            -1
          ),
          0
        );
        post.style.transform = `scale(${1 + offset})`;
      }
    });
  }, []);

  //effect
  useEffect(() => {
    const handleScroll = () => {
      animateVideo();
      animateProjects();
      scrollBlogPosts();
    };

    const element = mainRef.current;
    if (element) {
      element.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (element) {
        element.removeEventListener("scroll", handleScroll);
      }
    };
  }, [animateVideo, animateProjects, scrollBlogPosts]);

  // Smooth Animation for Projects Slider
  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      const newX = lerp(projectCurrentX, projectTargetX, 0.1);
      setProjectCurrentX(newX);
      if (projectSliderRef.current) {
        projectSliderRef.current.style.transform = `translate3d(${-newX}vw, 0, 0)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [projectCurrentX, projectTargetX]);

  return (
    <div className="h-screen w-full backdrop-blur-md z-40 relative line__container overflow-hidden bg-primary">
      <div className="separator" />
      <div className="separator" />
      <div className="separator" />
      <main ref={mainRef}>
      <div className="scroll__container">

      {/* Video Section */}
      <section id="video" ref={videoRef}>
        <div className="shim" />
        <div className="video__sticky">
          <video
            className="main__video"
            autoPlay
            muted
            loop
            playsInline
            src="https://framerusercontent.com/modules/assets/BcIElVBzSD9P1ht5PhehnVyzTA~0iRDOKjSaNyoXJfsXAcSsdeEYSbJ8aAp3MvS5ts7LL0.mp4"
          />
          <div className="video__text__overlay">
            <h2 className="text__header__left">SHOW</h2>
            <h2 className="text__header__right">CASE</h2>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="projects__sticky" ref={projectsStickyRef}>
          <div className="slider__container">
            <div className="projects__slider" ref={projectSliderRef}>
              {projects.map((project, i) => (
                <div key={i} className={`project ${project.pos}`}>
                  <div className="image__container">
                    <img
                      className="project__image"
                      src={project.image}
                      alt={project.name}
                    />
                  </div>
                  <div className="project__details">
                    <p>{project.name}</p>
                    <p>{project.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      
      {/*Blog section */}
      <section id="blog" ref={blogSectionRef}>
        <div className="blog__hero">
          <TextReveal text="BLOGS" />
        </div>
        {blogPosts.map((post, i) => (
          <div key={i} className="blog__post">
            <div className="post">
              <div className="post__image__container">
                <img
                  className="blog__post__img"
                  src={post.image}
                  alt={post.title}
                />
              </div>
              <div className="post__details">
                <p>{post.title}</p>
                <p>{post.time}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
      </div>
      </main>
      
    </div>
  );
}

export default Section;
