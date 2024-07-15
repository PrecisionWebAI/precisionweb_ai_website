"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import leftimg from "../../images/people-working-html-codes.jpg";
import rightimg from "../../images/person-working-html-computer.jpg";

const Mcontainer3: React.FC = () => {
  const sectionRefs = {
    whoweareleftdiv: useRef<HTMLDivElement>(null),
    whowearerightdiv: useRef<HTMLDivElement>(null),
    whatwedoleftdiv: useRef<HTMLDivElement>(null),
    whatwedorightdiv: useRef<HTMLDivElement>(null),
  };

  type SectionRefsKeys = keyof typeof sectionRefs;

  useEffect(() => {
    const handleScroll = () => {
      for (const section in sectionRefs) {
        const element = sectionRefs[section as SectionRefsKeys].current;
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
  }, []);

  return (
    <>
      <section>
        <div className="who-we-are-container text-white">
          <div className="who-we-are-outer-div flex justify-center">
            <div className="who-we-are-inner-outer flex flex-row justify-evenly mt-20 w-4/5">
              <div
                className=" items-center justify-center"
               
              >
                <Image src={leftimg} alt="" className="w-[31rem] rounded-l-full" />
              </div>
              <div
                className="who-we-are-right-div flex flex-col justify-center ml-8"
                ref={sectionRefs.whowearerightdiv}
              >
                <div className="right-div-inner-container flex flex-row mb-4 items-center">
                  <div className="who-we-are-right-section w-2 h-14 bg-blue-600 rounded-tr-full rounded-br-full mr-4"></div>
                  <h1>Who we are ?</h1>
                </div>
                <p className="w-[36rem] text-justify">
                  At Precision Web AI, we're not just another tech company;
                  we're your strategic partner in navigating the digital
                  frontier. We transform visionary ideas into state-of-the-art
                  digital experiences that captivate and engage. Whether you're
                  looking to revolutionize your product design, enhance your
                  UI/UX, develop cutting-edge mobile apps, or embark on a
                  full-scale digital transformation, we've got you covered. Our
                  expertise extends to cloud services, data science, blockchain
                  technology, IT consulting, DevOps, and artificial
                  intelligence, ensuring that we provide holistic and innovative
                  solutions tailored to your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------what we do  -------------- */}
      <section>
        <div className="who-we-are-container text-white">
          <div className="who-we-are-outer-div flex justify-center">
            <div className="who-we-are-inner-outer flex flex-row-reverse justify-evenly mt-20 mb-20 w-4/5">
              <div
                className="who-we-are-left-div items-center justify-center"
                ref={sectionRefs.whoweareleftdiv}
              >
                <Image src={rightimg} alt="" className="w-[31rem] rounded-r-full" />
              </div>
              <div
                className="who-we-are-right-div flex flex-col justify-center mr-8"
                ref={sectionRefs.whowearerightdiv}
              >
                <div className="right-div-inner-container flex flex-row mb-4 items-center">
                  <div className="who-we-are-right-section w-2 h-14 bg-blue-600 rounded-tr-full rounded-br-full mr-4"></div>
                  <h1>What we do ?</h1>
                </div>
                <p className="w-[36rem] text-justify">
                  Innovative at Precision Web AI, we excel in ideation,
                  intuitive UI/UX design, robust mobile app development, and
                  comprehensive digital transformation across diverse
                  industries. Our expertise spans cloud consulting and managed
                  services, advanced data analytics, blockchain solutions
                  including NFT marketplaces and DApp development, secure IT
                  consulting, and leveraging artificial intelligence for
                  automation and innovation. We deliver transformative digital
                  solutions that empower businesses to thrive in today's dynamic
                  market.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mcontainer3;
