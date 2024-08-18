"use client";

import React, { useEffect, useRef, RefObject } from "react"; 
import { FlipWordsDemo } from "../Universal/FlipWordsDemo";
import { CardStackDemo } from "../Universal/CardStackDemo";
import DotPattern from "../magic_ui/DotPatternProps";
import { cn } from "../../lib/utils";

const WebsiteWithUs = () => {

  const sectionRefs: { [key: string]: RefObject<HTMLDivElement> } = {
    filpCard: useRef<HTMLDivElement>(null),
    cardStack: useRef<HTMLDivElement>(null),
    // Add more refs here as needed
  };

  useEffect(() => {
    const handleScroll = () => {
      for (const section in sectionRefs) {
        const element = sectionRefs[section]?.current;
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

          if (isVisible) {
            element.classList.add("active");
          } else {
            element.classList.remove("active");
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionRefs]);

  return (
    <>
      {/* <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      /> */}
      <div className="flex justify-center items-center h-[100vh]">
        <div className="flex flex-row justify-between w-[80%] flex-wrap">
          <div className="filpCard" ref={sectionRefs.filpCard}>
            <FlipWordsDemo />
          </div>
          <div className="cardStack" ref={sectionRefs.cardStack}>
            <CardStackDemo />
          </div>
        </div>
      </div>
    </>
  );
};

export default WebsiteWithUs;
