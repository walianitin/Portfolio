import React from 'react';

const techStack: string[] = [
   // Frameworks & Libraries
  "Next.js",
  "React",
  "Node.js",
  "Express.js",
  "Hono",
  
  // Languages
  "TypeScript",
  "JavaScript",
  "Python",
  "C++",
  "C",
  
  // Databases & ORMs
  "PostgreSQL",
  "MongoDB",
  "Prisma",
  
  // Styling
  "Tailwind CSS",
  "HTML",
  "CSS",
  
  // Infrastructure & DevOps
  "Cloudflare Workers",
  "Docker",
  "CI/CD",
  "Monorepo",
  
  // Auth & Security
  "OAuth",
  "JWT",
  "Zod",
  
  // APIs & Data
  "Webhooks",
  "Axios",
  
  // Tools
  "Git",
  "GitHub",
  "VS Code",
  "Postman",
  "Figma",
  "Adobe Photoshop",
  "Adobe Illustrator",
  
  
];

const Skills: React.FC = () => (
    <div className=' mr-10 ml-10'>
        <h2 className="text-4xl text-center font-bold mb-4 ">Skills</h2>
        <div className='text-center'>
            {techStack.map((tech) => (
                <span
                    key={tech}
                    className="bg-gray-100 px-3 py-1 rounded shadow text-sm font-medium mr-2 mb-2 inline-block transition-colors duration-200 hover:bg-blue-200 "
                >
                    {tech}
                </span>
            ))}
        </div>
    </div>
        
);

export default Skills;