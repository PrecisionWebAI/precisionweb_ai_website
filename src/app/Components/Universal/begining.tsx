"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import { MagicCard } from "../magic_ui/magiccard";
import { MagicCardDemo } from "./DigitalContainer";

export function Beginning() {
  return (
    <>
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl z-[-1]"
      >
       Your digital journey <br /> Begins with our firm.
      </motion.h1>

    </LampContainer>
    <MagicCardDemo />
    
    </>
  );
}
