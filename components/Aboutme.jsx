import React from "react";
import FlowingMenu from "./FlowingMenu/FlowingMenu";

// Reusing your skills array from the original file
const skills = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Vite",
    icon: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "Django",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "SQLite",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "Supabase",
    icon: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "TensorFlow",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  {
    name: "PyTorch",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  },
  {
    name: "OpenCV",
    icon: "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg",
  },
  {
    name: "C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  {
    name: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "React Native",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Linux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
];

// Group skills by category for the FlowingMenu
const frontendSkills = skills.filter(skill => 
  ['React', 'Next.js', 'Vite', 'JavaScript', 'TypeScript', 
   'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'].includes(skill.name)
);

const backendSkills = skills.filter(skill => 
  ['Node.js', 'Express.js', 'Django', 'MongoDB', 'PostgreSQL', 
   'SQLite', 'Firebase', 'Supabase'].includes(skill.name)
);

const mlAiSkills = skills.filter(skill => 
  ['Python', 'TensorFlow', 'PyTorch', 'OpenCV'].includes(skill.name)
);

const mobileDevSkills = skills.filter(skill => 
  ['React Native', 'JavaScript', 'TypeScript'].includes(skill.name)
);

const devOpsSkills = skills.filter(skill => 
  ['Docker', 'Git', 'GitHub', 'Linux'].includes(skill.name)
);
function Aboutme() {
  const flowingMenuItems = [
    {
      text: "Full-Stack Development",
      skills: [...frontendSkills, ...backendSkills],
    },
    {
      text: "Machine Learning & AI",
      skills: mlAiSkills,
    },
    {
      text: "Mobile & Cross-Platform Development",
      skills: mobileDevSkills,
    },
    {
      text: "DevOps & Cloud",
      skills: devOpsSkills,
    },
  ];

  return (
    <div className="h-auto w-full bg-primary md:py-32 pt-32 md:pt-20 border-t border-t-accent">
      <div className="mx-5 md:mx-20 lg:mx-40 text-center">
        <div className="mb-28">
          <h1 className="md:text-7xl text-5xl font-oxanium text-accent">Areas of Expertise</h1>
        </div>
        <div className="h-[600px] md:h-[500px]">
          <FlowingMenu items={flowingMenuItems} />
        </div>
      </div>
    </div>
  );
}

export default Aboutme;