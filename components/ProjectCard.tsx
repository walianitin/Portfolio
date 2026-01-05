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
  
    return (
        // <button onclick>

        <MagicCard gradientSize={200} gradientColor='grey'gradientOpacity={0.2} className='h-fit  relative group  w-full bg-neutral-600 rounded-sm inset-shadow-neutral flex flex-row gap-2 p-4   bg-grey-500  cursor-pointer ' >
            {/* <div id="></div> */}
            <Image src={props.logo} alt={props.title} width={64} height={64} className="rounded-sm mb-2" />
                <h1>{props.title}</h1>
                <p className=' text-sm '>{props.description}</p>
                <div className="m-3 ">
                     {props.techStack.map((name, idx) => (
                         <button  className="bg-background px-3 py-1 rounded shadow text-sm font-small mr-2 mb-2 inline-block transition-colors duration-300 dark:hover:bg-white-200 dark:text-gray-500  dark:hover:bg-gray-800  
                         hover:bg-blue-200 dark:hover:text-blue-400"key={idx}>{name}</button>
                        ))}
                </div>
                <div className='flex flex-row text-3xl justify-between items-center gap-4  '>
                       <a href={props.link} className='  rounded-sm hover:text-red-200'> <MdOnlinePrediction></MdOnlinePrediction></a>
                       <a href={props.source} className='  hover:text-red-200 text-4xl rounded-sm '> <GitHubLogoIcon></GitHubLogoIcon></a>
                </div>
        </MagicCard>
    // </button>
    )
}

export default ProjectCard