"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./tabButton";

const TAB_DATA: {
  title: string;
  id: string;
  content: React.JSX.Element;
}[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Next.js</li>
        <li>PostgreSQL</li>
        <li>MySql</li>
        <li>JavaScript/Typescript</li>
        <li>React</li>
        <li>Java</li>
        <li>Spring Boot</li>
      </ul>
    ),
  },
  {
    title: "Educação",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Ciência da Computação - UFV (2015 - 2016)</li>
        <li>Engenharia da Computação - CEFET-MG (2017 - 2024)</li>
      </ul>
    ),
  },
  {
    title: "Certificações",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Curso JavaScript / TypeScript - Udemy</li>
        <li>Curso de Java para Backend utilizando Bootstrap - Rocketseat</li>
        <li>Curso React.js + Inteligência artificial Rocketseat</li>
        <li>Curso de PYTHON 3 do básico ao avançado - Udemy</li>
      </ul>
    ),
  },
];

const AboutSection: React.FC = () => {
  const [tab, setTab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const currentTab = TAB_DATA.find((t) => t.id === tab);

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/codeimage.webp"
          width={500}
          height={500}
          alt="Descrição do perfil" 
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre Mim</h2>
          <p className="text-base lg:text-lg">
          Apaixonado por ciência e por novas descobertas, 
          estou sempre em busca de me aprimorar e evoluir continuamente. 
          Atualmente, concentro meus esforços em tecnologias como JavaScript, 
          React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS e Git. 
          Sou focado, aprendo rápido e estou constantemente ampliando meus 
          conhecimentos e habilidades. Valorizo o trabalho em equipe e estou 
          entusiasmado para colaborar com outros profissionais na criação de 
          aplicações inovadoras e impactantes.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {currentTab ? currentTab.content : <div>Select a tab</div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
