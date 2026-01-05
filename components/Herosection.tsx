"use client";
import { bricolage_grotesque } from "@/lib/fonts";
import { motion } from "motion/react";
import Image from 'next/image';
import { FaTwitter } from "react-icons/fa";

export default function Herosection() {
  return (
    <section className="w-full flex justify-center items-center py-6 bg-background mt-10 relative">
      {/* Removed large horizon light effect at top asdfsdf*/}
      <div className="w-2/3 max-sm:w-full flex flex-col items-center relative z-10">
        <div className="flex flex-col items-center">
          <Image 
            src="/logo.ico"                                         
  
  
            height={300}
            width={300}
            alt="logo"
            className="bg-red-600 rounded-full cursor-pointer"
          />
          <a 
            href="https://x.com/walia_niti37420" 
            className="rounded-full text-xs mt-2 text-foreground hover:text-blue-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={16} />
          </a>
        </div>
        <div className="text-center relative">
          <h1 className="font-bold mt-2 whitespace-nowrap max-sm:text-[1.6rem] text-[3rem] tracking-tight text-foreground">
            Hi, I&apos;m Nitin Walia
          </h1>
          {/* Thin curved horizon light effect below text */}
          <div className="absolute left-1/2 top-[4.5rem] -translate-x-1/2 w-[60%] h-6 z-0" style={{
            background: "radial-gradient(ellipse at center, rgba(0,212,255,0.25) 0%, rgba(255,255,255,0.15) 60%, rgba(0,0,0,0) 100%)",
            borderRadius: "50%",
            filter: "blur(12px)"
          }} />
          {/* Full-width curved horizon line with white glow */}
          <div className="absolute left-0 right-0 top-[5.2rem] mx-auto w-full h-12 z-0 flex justify-center pointer-events-none">
            <div style={{
              width: '80vw',
              height: '60%',
              borderRadius: '0 0 100vw 100vw/0 0 12vw 12vw',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(0,212,255,0.15) 60%, rgba(0,0,0,0) 100%)',
              boxShadow: '0 0 100px 10px rgba(255,255,255,0.5)',
              filter: 'blur(60px)',
            }} />
          </div>
          <div className={`relative z-10 mt-6 text-xl text-shadow-xl leading-8 text-foreground ${bricolage_grotesque} px-6 py-4  bg-background/40 rounded-full opacity-80 shadow-lg flex flex-wrap justify-center gap-x-2`}>
            {[
              "Building,", "breaking,", "and", "mastering", "code.", "Curious,", "creative,", "and", "always", "chasing", "the", "next", "big", "thing."
            ].map((word, i) => {
              const floatingWords = [0, 3, 7, 10];
              const shouldAnimate = floatingWords.includes(i);
              return shouldAnimate ? (
                <motion.span
                  key={i}
                  initial={{ y: 0,x:0 }}
                  animate={{ y: [0, -10, 0, 10, 0] ,x:[0,3,-2,3] }}
                  transition={{ duration: 4 + i * 0.2, repeat: Infinity, repeatType:"loop" }}
                  className="inline-block duration-300"
                >
                  {word}
                </motion.span>
              ) : (
                <span key={i} className="inline-block">{word}</span>
              );
            })}
            <br />
            <motion.span
              initial={{ y: 0 }}
              animate={{ y: [0, -8, 0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
              className="block mt-2 text-primary font-bold text-lg"
            >
              Let&apos;s build something real together.
            </motion.span>
          </div>
        </div>
        <motion.div 
          className="mt-8 mb-18"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a 
            href="https://x.com/walia_niti37420" 
            className="bg-primary text-primary-foreground p-4 rounded-md m-5 inline-block hover:opacity-90 transition-opacity"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact me
          </a>
        </motion.div>
      </div>
      <div id="bottom-of-page"></div>
    </section>
  );
}
