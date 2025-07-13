'use client'

import { MagicCard } from '@/components/magicui/magic-card'

import {  GitHubLogoIcon} from '@radix-ui/react-icons'

import Image from 'next/image'
import { MdOnlinePrediction } from "react-icons/md";


interface Project{  
    title: string;
    description: string;
    logo: string;
    link?: string;
    source: string;
    techStack: string[];  
}   

const ProjectCard = (props: Project) => {
    // const { isDarkMode } = useDarkMode()
    // Add styles to make the <a> tag expand and fill available space
    // Example: flex-grow for the first <a>
    return (
        <MagicCard gradientSize={250} gradientColor='cyan'gradientOpacity={0.2} className='h-full  relative group  w-full bg-neutral-600 rounded-sm inset-shadow-neutral flex flex-row gap-2 p-4  '>
            <Image src={props.logo} alt={props.title} width={64} height={64} className="rounded-sm mb-2" />
                <h1>{props.title}</h1>
                <p className=' text-sm '>{props.description}</p>
                <div className="m-3 ">
                     {props.techStack.map((name, idx) => (
                         <button  className="bg-gray-100 px-3 py-1 rounded shadow text-sm font-small mr-2 mb-2 inline-block transition-colors duration-300 hover:bg-blue-200 "key={idx}>{name}</button>
                        ))}
                </div>
                <div className=' flex flex-grow   text-2xl gap-4 items-center '>
                       <a href={props.link} className=' shadow-cyan-400 rounded-sm '> <MdOnlinePrediction></MdOnlinePrediction></a>
                       <a href={props.source} className=' shadow-cyan-400 rounded-sm '> <GitHubLogoIcon></GitHubLogoIcon></a>
                </div>
        </MagicCard>
    )
}

export default ProjectCard