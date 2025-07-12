"use client";

import  Avatar  from "@/components/Avatar";
import { bricolage_grotesque, inter } from "@/lib/fonts";
import Link from "next/link";
import { RainbowButton } from "./RainbowButton";
import { Link as ScrollLink } from 'react-scroll';

export default function Herosection() {
    return <div className=" w-full flex justify-center items-center py-6 pt-36 dark:bg-black ">
            <div className=" w-2/3 max-sm:w-full flex flex-col items-center ">

        <div className=" h-24 w-24 rounded-full overflow-hidden mb-6">
            <Avatar />
        </div>

        <div>
            <h1 className="text-center font-bold mt-2  !whitespace-nowrap max-sm:!text-[1.6rem] !text-[3rem] tracking-tight ">
                Hi, I&apos;m Nitin Walia 
             </h1>
        <h1 className={`mt-2 max-sm:mt-5 max-sm:px-3 !text-base max-sm:!text-sm text-center !font-normal !tracking-normal inter !leading-6 ${inter} `}>
            <br />
     19, i break things, learn fast, and make shit happen. deep into code and cs; anything that pushes the limits. history, curiosity, cricket, and great books shaped me. still chasing mastery. 
        If you’re working on something real, let’s talk.
        </h1>
            </div>


        <div className="mt-8 flex gap-4">
            <Link href="#" target="_b"></Link>
                <RainbowButton> Contact me </RainbowButton>
                <RainbowButton>
                 <ScrollLink to="contact-section" activeClass="active" smooth={true} offset={-120} duration={1100}>Get in touch</ScrollLink>
                </RainbowButton>
            </div>
        
        </div>
    
            </div>
}