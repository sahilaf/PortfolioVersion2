"use client"; // Ensure this component is client-side only
import { React, useEffect, useRef, useState, useCallback } from "react";
import { lerp } from "./blog/utils";
import "./styles.css";
import Footer from "./Footer";
import Aboutme from "./Aboutme";

const projects = [
  {
    name: "FairBasket",
    type: "WEB",
    pos: "start",
    image:
      "./assets/fairbasket.jpg",
  },
  {
    name: "Iphone 15 pro website clone",
    type: "WEB",
    pos: "mid",
    image:
      "./assets/Apple_clone.PNG",
  },
  {
    name: "Ask in pdf",
    type: "RAG",
    pos: "end",
    image:
      "https://github.com/sahilaf/Ask_in_pdf/raw/main/docs/PDF-LangChain.jpg",
  },
  {
    name: "Chat with websites",
    type: "AI AGENT",
    pos: "mid",
    image:
      "https://github.com/sahilaf/Chat_with_websites/blob/main/docs/HTML-rag-diagram.jpg?raw=true",
  },
  {
    name: "Instagram content agent",
    type: "AI AGENT",
    pos: "end",
    image:
      "https://github.com/sahilaf/Instagram-content-agent/raw/main/docs/Content_agent_flow.png",
  },
  {
    name: "Dr.Shawon Portfolio",
    type: "WEB",
    pos: "mid",
    image:
      "./assets/Portfolio.PNG",
  },
  {
    name: "ScholarSphare",
    type: "WEB",
    pos: "start",
    image:
      "./assets/scholarsphare.PNG",
  },
  {
    name: "SkyVoyager",
    type: "WEB",
    pos: "end",
    image:
      "https://github.com/sahilaf/Data/blob/main/SkyVoager.PNG?raw=true",
  },
];
const blogPosts = [
  {
    title: "Decentralized Intelligence: How Blockchain is Transforming AI Collaboration",
    time: "3 MIN",
    image:
      "./assets/blog3.PNG"
    },
  {
    title: "Autonomous Agents on the Ledger: How AI and Blockchain Are Powering the Next Internet",
    time: "4 MIN",
    image:
      "./assets/blog1.PNG"
    },
  {
    title: "Trustless AI: Using Blockchain to Verify AI Decisions in Critical Systems",
    time: "5 MIN",
    image:
      "./assets/blog2.PNG",
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
    if (!videoSection) return;

    const { top, bottom } = videoSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // 🌟 Improved Scaling (Keeps Video from Shrinking Too Much)
    const scale = Math.max(
      0.85,
      1 - Math.max((bottom - windowHeight) * 0.0003, 0)
    ); // Limits min scale to 0.85
    videoRef.current.style.transform = `scale(${scale})`;

    // 🌟 Improved Text Translation (Smoother)
    const textTrans = Math.max((bottom - windowHeight) * 0.6, 0);
    const headerLeft = videoSection.querySelector(".text__header__left");
    const headerRight = videoSection.querySelector(".text__header__right");

    if (headerLeft) headerLeft.style.transform = `translateX(${-textTrans}px)`;
    if (headerRight) headerRight.style.transform = `translateX(${textTrans}px)`;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", animateVideo);
    return () => window.removeEventListener("scroll", animateVideo);
  }, [animateVideo]);

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
    <div className="h-screen w-full backdrop-blur-md z-40 relative line__container overflow-hidden bg-transparent font-jetbrains">
      
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
                src="./void.mov"
              />
              <div className="video__text__overlay">
                <h2 className="text__header__left font-oxanium">SHOW</h2>
                <h2 className="text__header__right font-oxanium">CASE</h2>
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
            <div className="blog__hero font-oxanium stop">
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
          <Aboutme/>
          <Footer/>
        </div>
      </main>
      
    </div>
  );
}

export default Section;
