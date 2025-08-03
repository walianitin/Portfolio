"use client";
import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

interface Project {
  logo: string;
  title: string;
  description: string;
  techStack: string[];
  link: string;
  source: string;
}

const data: Project[] = [
  {
    logo: '/exchange.svg',
    title: "Exchange Monitor",
    description: "Exchange monitor is a platform to monitor your cryptos live .",
    techStack: ["Nextjs", "Tailwind CSS", "Websocket", "Nodemailer", "React Charts", "Node.js", "Backpack API"],
    link: "https://exchange-frontend-1.vercel.app/",
    source: "https://github.com/walianitin/exchange",
  },
  {
    logo: '/confluence.svg',
    title: "Confluence' 24 Nitkkr",
    description: "Confluence Nitkkr is the official website for the Cultural fest of college",
    techStack: ["React", "TypeScript", "framer-motion", "tailwindCss", "NextAuth"],
    link: "https://www.confluencenitkkr.com/",
    source: "https://github.com/confluencenitkkr/Confluence-2k24",
  },
  {
    logo: '/opensox.svg',
    title: "Opensox",
    description: "A platform to discover and find open source repositories for contribution. Explore projects, connect with maintainers, and start contributing to the open source community.",
    techStack: ["Next.js", "Framer Motion", "GitHub API", "Tailwind CSS"],
    link: "https://github.com/walianitin/opensox",
    source: "https://github.com/walianitin/opensox",
  },
  {
    logo: '/Blooger.png',
    title: "Blooger",
    description: "An AI-Powered tool with 200+ users designed to refine your tweets with full customizations and make them stand out—because GPT just doesn't get it.",
    techStack: ["Next.js", "TypeScript","PostgreSql", "Prisma ORM", "NextAuth", "Tailwind CSS","Auth"],
    link: "https://blogger-uqi9.vercel.app/",
    source: "https://github.com/walianitin/blogger",
  },
];

export default function ProjectCardList() {
  const [visibleProjects, setVisibleProjects] = useState(2);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 6);
  };

  if (!mounted) {
    return (
      <div className="w-full flex justify-center items-center py-10">
        <div className="text-foreground">Loading projects...</div>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-4xl font-stretch-125% mb-5 text-foreground">Proof of Work</h1>
      <div className="grid grid-cols-2 gap-4 w-[50rem]">
        {data.slice(0, visibleProjects).map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            logo={project.logo}
            link={project.link}
            source={project.source}
            techStack={project.techStack}
          />
        ))}
      </div>

      {visibleProjects < data.length && (
        <div className="w-fit flex flex-col items-center mt-4">
          <button
            onClick={loadMoreProjects}
            className="bg-primary text-primary-foreground rounded-lg text-sm p-2 cursor-pointer shadow-sm m-5 hover:bg-primary/90 transition-colors"
          >
            Load More..
          </button>
        </div>
      )}
    </>
  );
}