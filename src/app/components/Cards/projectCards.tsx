"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./index"; 
import ProjectTag from "./projectTag";
import { motion, useInView } from "framer-motion";

interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
}

const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "WebSite de Notas",
    description: "WebSite de Notas utilizando React e TailWindCSS",
    image: "/images/projects/nlwnotes.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RafaelLS1/nlw-notecard",
    previewUrl: "https://nlw-notecard.vercel.app/",
  },
  {
    id: 2,
    title: "Portfólio em Next.js",
    description: "Portifólio desenvolvido em Next.js e TailWindCSS",
    image: "/images/projects/portfNext.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "WebSite de Redes Sociais",
    description: "WebSite de Redes Sociais utilizando HTML e CSS",
    image: "/images/projects/nlw.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RafaelLS1/NLW-1",
    previewUrl: "https://rafaells1.github.io/NLW-1/",
  },
  {
    id: 4,
    title: "Portifólio em React",
    description: "Portifólio desenvolvido em React para Faculdade",
    image: "/images/projects/portReact.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RafaelLS1/pw-react",
    previewUrl: "https://pw-react-rafaells1.vercel.app/",
  },
  {
    id: 5,
    title: "Portifólio HTML/CSS",
    description: "Portifólio desenvolvido em HTML e CSS para Faculdade",
    image: "/images/projects/portf.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "NutriApp",
    description: "Projeto de Nutrição desenvolvido em React para faculdade",
    image: "/images/projects/webs2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: ".Dot",
    description: "Jogo .Dot desenvolvido em C++ para faculdade",
    image: "/images/projects/dot.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectCards = () => {
  const [tag, setTag] = useState<string>("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Meus Projetos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectCards;
