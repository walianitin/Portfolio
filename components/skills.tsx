import React from 'react';

const techStack: string[] = [
    'React',
    'TypeScript',
    'JavaScript',
    'Next.js',
    'Node.js',
    'Express',
    'MongoDB',
    'HTML',
    'CSS',
    'Tailwind CSS',
    'Git',
    'Redux',
];

const Skills: React.FC = () => (
    <div className=''>
        <h2 className="text-4xl text-center font-bold mb-4">Skills</h2>
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