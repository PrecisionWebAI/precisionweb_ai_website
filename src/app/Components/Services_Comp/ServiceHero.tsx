"use client";

import React from "react";
import { cn } from "../../lib/utils";
import { Spotlight } from "../ui/Spotlight";
import TypingAnimation from "../magic_ui/TypingAnimationProps";
import ShinyButton from "../magic_ui/ShinyButton";
import { SparklesCore } from "../ui/Sparkles";
import { motion, useTransform, useScroll } from "framer-motion";
import Link from "next/link";



interface ServiceHeroProps {
  Service_Heading: string;
  Description: string;
}

export const ServiceHero: React.FC<ServiceHeroProps> = ({ Service_Heading, Description }) => {


  const { scrollY } = useScroll();

  // Transform scroll position to vertical movement
  const y = useTransform(scrollY, [0, 450], [0, 300]);

  // Transform scroll position to scaling
  const scale = useTransform(scrollY, [0, 450], [1, 1.5]);

  return (
    <>
    <div className="h-[100vh] w-full rounded-md flex flex-col md:items-center md:justify-center  antialiased bg-grid-white/[0.02] relative overflow-hidden">
      {/* <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      /> */}
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        {/* <TypingAnimation
          className="text-6xl font-bold text-white"
          text="Contact Us"
        /> */}
        <motion.div 
        className="z-1 w-full  flex justify-center items-center text-8xl font-light"
        style={{
          y, // vertical movement
          scale, // scaling
          opacity: useTransform(scrollY, [0, 450], [1, 0.5]), // opacity effect
        }}
        // Apply transition settings through initial/animate/exit props if needed
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        > 
        {Service_Heading}
            {/* <TextGenerateEffect words="Precision Web AI"/> */}
            </motion.div>
        <p className="mt-4 font-light text-base text-neutral-300 max-w-lg text-center mx-auto">
        
          {Description}
        </p>
        <div className="flex justify-center mt-4">
        <Link href="/Contact/#form">
        <ShinyButton text="Contact Us" className="" />
        </Link>
        </div>
      </div>
      <div className="w-[40rem] h-40 absolute">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
      </>
  );
}
