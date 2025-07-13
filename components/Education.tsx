'use client'

import { MagicCard } from '@/components/magicui/magic-card'
import Image from 'next/image'

interface EducationItem {
  institution: string;
  degree: string;
  department: string;
  duration: string;
  logo: string;
}

const educationData: EducationItem[] = [
  {
    institution: 'National Institute of Technology, Kurukshetra',
    degree: 'B.Tech',
    department: 'Production Engineering (Mechanical)',
    duration: '2022 - 2026 (Expected)',
    logo: '/nitkkr-log.png' // Replace with your image path
  }
];

const EducationCard = () => (
  <div className="max-w-2xl mx-auto p-4">
    <h2 className="text-3xl text-center font-bold mb-6">Education</h2>
    
    <div className="grid gap-4">
      {educationData.map((edu, index) => (
        <MagicCard 
          key={index}
          gradientSize={200}
          gradientColor='neutral'
          gradientOpacity={0.15}
          className='w-full bg-neutral-600 rounded-sm flex items-center p-4 gap-4 hover:shadow-md transition-all'
        >
          <Image 
            src={edu.logo} 
            alt={edu.institution} 
            width={40} 
            height={40} 
            className="rounded-sm object-contain"
          />
          
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
              <h3 className="text-lg font-bold truncate">{edu.institution}</h3>
              <span className="text-neutral-300 text-xs whitespace-nowrap">{edu.duration}</span>
            </div>
            
            <div className="flex gap-2 text-sm mt-1">
              <span>{edu.degree}</span>
              <span className="text-neutral-400">|</span>
              <span className="text-neutral-400 truncate">{edu.department}</span>
            </div>
          </div>
        </MagicCard>
      ))}
    </div>
  </div>
);

export default EducationCard;