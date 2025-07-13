'use client'

import { MagicCard } from '@/components/magicui/magic-card'
import { ShineBorder } from '@/components/magicui/shine-border'
import { useDarkMode } from '@/hooks/useDarkMode'

import { bricolage_grotesque, inter } from '@/lib/fonts'
import { ButtonIcon, GitHubLogoIcon, GlobeIcon } from '@radix-ui/react-icons'
import { Badge, Link } from '@radix-ui/themes'
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
                         <button  className="backdrop-blur-xl hover:bg-neutral-300  bg-transparent rounded-sm p-2 text-xs border m-1 "key={idx}>{name}</button>
                        ))}
                </div>
                <div className=' flex flex-grow   text- text-white gap-2 items-center  '>
                       <a href={props.link} className='bg-black shadow-cyan-400 rounded-sm w-fit h-full'> <MdOnlinePrediction></MdOnlinePrediction></a>
                       <a href={props.source} className='bg-black shadow-cyan-400 rounded-sm h-auto'> <GitHubLogoIcon></GitHubLogoIcon></a>
                </div>
        </MagicCard>
    )
}

export default ProjectCard