"use client";
import { bricolage_grotesque } from "@/lib/fonts";
import { motion } from "motion/react";
import Image from 'next/image';
import { FaTwitter } from "react-icons/fa";

export default function Herosection() {
  return (
    <section className="w-full flex justify-center items-center py-6 dark:bg-black mt-10">
      <div className="w-2/3 max-sm:w-full flex flex-col items-center">
        <div className="flex flex-col items-center">
          <Image 
            src="/logo.png" 
            height={300}
            width={300}
            alt="logo"
            className="bg-red-600 rounded-full cursor-pointer"
          />
          <a 
            href="https://x.com/walia_niti37420" 
            className="rounded-full text-xs mt-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={16} />
          </a>
        </div>
        <div className="text-center">
          <h1 className="font-bold mt-2 whitespace-nowrap max-sm:text-[1.6rem] text-[3rem] tracking-tight">
            Hi, I&apos;m Nitin Walia
          </h1>
          <p className={`mt-2 max-sm:mt-5 max-sm:px-3 text-base max-sm:text-sm font-normal tracking-normal leading-6 ${bricolage_grotesque}`}>
            <br />
            22, I break things, learn fast, and make shit happen. Deep into code; anything that pushes the limits. History, curiosity, cricket, and great books shaped me. Still chasing mastery.
            If you&apos;re working on something real, let&apos;s talk.
          </p>
        </div>
        <motion.div 
          className="mt-8 mb-18"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a 
            href="https://x.com/walia_niti37420" 
            className="bg-black text-white p-4 rounded-md m-5 inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact me
          </a>
        </motion.div>
      </div>
    </section>
  );
}