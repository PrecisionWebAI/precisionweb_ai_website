"use client";

import React from "react";
import { BackgroundBeams } from "../ui/background-boxes";
import { cn } from "../../lib/utils";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { NavbarDemo } from "./Navbar";

const Hero = () => {
    const words = [
        {
          text: "C",
        },
        {
          text: "O",
        },
        {
          text: "M",
        },
        {
          text: "P",
        },
        {
          text: "R",
        },
        {
          text: "E",
        },
        {
          text: "H",
        },
        {
          text: "E",
        },
        {
          text: "N",
        },
        {
          text: "S",
        },
        {
          text: "I",
        },
        {
          text: "V",
        },
        {
          text: "E",
        },
      ];

      const wordstech = [
        {
            text: "T",
        },
        {
            text: "E",
        },
        {
            text: "C",
        },
        {
            text: "H",
        }
      ]

      const word3 = [
        {
            text: "S",
        },
        {
            text: "O",
        },
        {
            text: "L",
        },
        {
            text: "U",
        },
        {
            text: "T",
        },
        {
            text: "I",
        },
        {
            text: "O",
        },
        {
            text: "N",
        },
      ]

  return (
    <>
    {/* <BackgroundBeams/> */}

    <NavbarDemo/>
    <div className="w-full ">
    <div className="z-1 w-full h-[100vh] flex justify-center items-center flex-col"> 
        <h1 className="z-1 w-full  flex justify-center items-center text-8xl font-light"> 
            Precision Web AI
            {/* <TextGenerateEffect words="Precision Web AI"/> */}
            </h1>
    <div className="under-head-box flex justify-center items-center w-[50%] ">
        <div className="under-head-inner flex flex-row flex justify-between w-full">
    <div className="comprehensive-box  tracking-[0.2em] font-light"><TypewriterEffectSmooth words={words}/></div>
    <div className="  font-light">|</div>
    <div className="tech-box  tracking-[0.2em] font-light"><TypewriterEffectSmooth words={wordstech}/></div>
    <div className=" font-light">|</div>
    <div className="solution-box  tracking-[0.2em] font-light"><TypewriterEffectSmooth words={word3}/></div>
    </div>
    </div>
    </div>
   
    </div>
    </>
  )
}

export default Hero