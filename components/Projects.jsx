"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Tabs from "./ui/tabs";
import { Orbitron } from "next/font/google";
import "./styles_proj.css";
const orbitron = Orbitron({
  weight: "400",
  subsets: ["latin"],
});

const Projects = () => {
  const projectTabs = [
    {
      id: "all",
      label: "All Projects",
    },
    {
      id: "web",
      label: "Web Development",
    },
    {
      id: "agents",
      label: "Ai Agents",
    },
  ];

  // Add a `url` field to each project
  const projectsList = {
    all: [
      {
        title: "FairBasket",
        description: "Empowering Fair Grocery Commerce",
        image:
          "./fairbasket.jpg",
        type: "Web Development",
        url: "https://github.com/sahilaf/bugsquashers",
      },
      {
        title: "Project 2",
        description: "Description for Project 2",
        image:
          "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2564",
        type: "Mobile Development",
        url: "/projects/project-2",
      },
      {
        title: "Project 3",
        description: "Description for Project 3",
        image:
          "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=2487",
        type: "UI/UX Design",
        url: "/projects/project-3",
      },
    ],
    web: [
      {
        title: "Web Project 1",
        description: "Web Development Project 1",
        image:
          "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=2370",
        type: "Web Development",
        url: "/projects/web-project-1",
      },
      {
        title: "Web Project 2",
        description: "Web Development Project 2",
        image:
          "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2564",
        type: "Web Development",
        url: "/projects/web-project-2",
      },
    ],
    agents: [
      {
        title: "Mobile App 1",
        description: "Mobile Development Project 1",
        image:
          "https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&q=80&w=2487",
        type: "Mobile Development",
        url: "/projects/mobile-app-1",
      },
      {
        title: "Mobile App 2",
        description: "Mobile Development Project 2",
        image:
          "https://images.unsplash.com/photo-1561998338-13ad7883b20f?auto=format&fit=crop&q=80&w=2487",
        type: "Mobile Development",
        url: "/projects/mobile-app-2",
      },
    ],
  };

  const [activeTab, setActiveTab] = React.useState(projectTabs[0].id);
  const sectionRef = useRef(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen bg-primary px-4 relative overflow-hidden line__container"
    >
      <div className="max-w-7xl mx-auto z-10 pt-20">
        <div className="mb-8 sm:mb-12 md:mb-16 relative z-10">
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={orbitron.className}
            >
              <h2 className="text-2xl sm:text-2xl md:text-4xl font-bold text-white tracking-wider mt-10">
                Projects
              </h2>
            </motion.div>
          </div>
        </div>

        <div className="overflow-x-auto -mx-4 px-4 mb-8 sm:mb-12 md:mb-16">
          <Tabs
            tabs={projectTabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            containerClassName="mb-8 font-jetbrains min-w-max mx-auto flex justify-center"
            tabClassName="text-sm sm:text-base whitespace-nowrap"
          />
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 font-jetbrains"
          variants={container}
          initial="hidden"
          animate="show"
          key={activeTab}
        >
          {projectsList[activeTab].map((project, index) => (
            <Link key={index} href={project.url} passHref>
              <motion.a
                variants={item}
                className="group relative overflow-hidden rounded-xl bg-neutral-900 hover:bg-neutral-800 transition-all duration-500 block"
              >
                <div className="aspect-video overflow-hidden">
                  <motion.img
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-xs sm:text-sm text-neutral-500 font-medium tracking-wider"
                  >
                    {project.type}
                  </motion.span>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-lg sm:text-xl font-semibold text-white mt-2 mb-2 sm:mb-3"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-sm sm:text-base text-neutral-400"
                  >
                    {project.description}
                  </motion.p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.a>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
