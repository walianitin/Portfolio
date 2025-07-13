"use client";

import { bricolage_grotesque} from "@/lib/fonts";
import { motion } from "motion/react"
import Image from 'next/image'
import { FaTwitter } from "react-icons/fa";


export default function Herosection() {
    return <div className=" w-full flex justify-center items-center py-6  dark:bg-black mt-10 ">
            <div className=" w-2/3 max-sm:w-full flex flex-col items-center ">

        <div >
           <Image src={"/logo.png"} height={300 } width={300} alt='logo' className='bg-red-600 rounded-full cursor-pointer '></Image>
            <a href="https://x.com/walia_niti37420" className="rounded-full text-xs"><FaTwitter></FaTwitter></a>
        </div>
        <div>
            <h1 className="text-center font-bold mt-2  !whitespace-nowrap max-sm:!text-[1.6rem] !text-[3rem] tracking-tight ">
                Hi, I&apos;m Nitin Walia 
             </h1>
        <h1 className={`mt-2 max-sm:mt-5 max-sm:px-3 !text-base max-sm:!text-sm text-center !font-normal !tracking-normal inter !leading-6 ${bricolage_grotesque}`}>
            <br />
     22, i break things, learn fast, and make shit happen. deep into code ; anything that pushes the limits. history, curiosity, cricket, and great books shaped me. still chasing mastery. 
        If you’re working on something real, let’s talk.
        </h1>
            </div>


         <motion.div className="mt-8 flex gap-4 mb-18" >
                        <a href="https://x.com/walia_niti37420" className=" bg-black text-white p-4 rounded-md border-l-inherit m-5"> Contact me</a>
            </motion.div>
        
        </div>
    
            </div>
}