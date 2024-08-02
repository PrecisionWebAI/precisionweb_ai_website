import React from "react";
import { cn } from "../../lib/utils";
import { Spotlight } from "../ui/Spotlight";
import TypingAnimation from "../magic_ui/TypingAnimationProps";
import ShinyButton from "../magic_ui/ShinyButton";
import { SparklesCore } from "../ui/Sparkles";

export function ContactHero() {
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
        <div className="z-1 w-full  flex justify-center items-center text-8xl font-light"> 
            Contact Us
            {/* <TextGenerateEffect words="Precision Web AI"/> */}
            </div>
        <p className="mt-4 font-light text-base text-neutral-300 max-w-lg text-center mx-auto">
          Ready to bring your vision to life? Whether you have a question, a
          project in mind, or just want to explore how we can collaborate, we're
          here to help. Let's connect and create something extraordinary
          together.
        </p>
        <div className="flex justify-center mt-4">
        <ShinyButton text="Contact Us" className="" />
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
