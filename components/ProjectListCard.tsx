"use client";
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const data:any[] = [
  {
    logo: '/saloon-5.png',
    title: "Enrich Salon Management",
    description: "Enrich Hair Salon is a salon booking system with online payments and an admin dashboard for managing services and bookings.",
    techStack: ["React", "MUI", "Tailwind CSS", "Razorpay", "Nodemailer", "React Charts", "Node.js", "Express.js", "MongoDB"],
    link: "https://enrich-salon.fardeen.tech",
    source: "https://github.com/Fardeen26/enrich-salon-management",
  },
  {
    logo: '/flick-ai.png',
    title: "Flick.AI",
    description: "An AI-Powered tool with 200+ users designed to refine your tweets with full customizations and make them stand out—because GPT just doesn’t get it.",
    techStack: ["Next.js", "TypeScript", "Google Gemini", "Prisma", "PostgreSQL", "NextAuth", "Tailwind CSS"],
    link: "https://flick-ai.fardeen.tech/",
    source: "https://github.com/Fardeen26/flick-ai",
  },
]

export default function ProjectCardList(){
 const [visibleProjects, setVisibleProjects] = useState(6);

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 6);
  };
    
        return (
            <>
            {data.map((project, index) => 
            
                <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    logo={project.logo}
                    link={project.link}
                    source={project.source}
                    techStack={project.techStack}/>
            )}       
            </>
        );
    }
    