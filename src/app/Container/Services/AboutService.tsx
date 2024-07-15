"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import leftimg from "../../images/person-working-html-computer (1).jpg";
import rightimg from "../../images/person-working-html-computer.jpg";
import lottie from 'lottie-web';
import animationData from "../../../../servicesvg.json"


const AboutService: React.FC = () => {

  const animationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: animationContainer.current!,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    // Cleanup function to destroy the animation when the component unmounts
    return () => {
      animation.destroy();
    };
  }, []);


  const sectionRefs = {
    whoweareleftdiv: useRef<HTMLDivElement>(null),
    whowearerightdiv: useRef<HTMLDivElement>(null),
  };

  return (
    <>
      <section>
        <div className="who-we-are-container text-white mb-32 mt-32">
          <div className="who-we-are-outer-div flex justify-center">
            <div className="who-we-are-inner-outer flex flex-row justify-evenly mt-12 w-4/5">
              <div
                className=" items-center justify-center"
                ref={sectionRefs.whoweareleftdiv}
              >
                <Image
                  src={leftimg}
                  alt=""
                  className="w-[31rem] "
                />
                {/* <div ref={animationContainer} className="w-[31rem] h-[31rem]"></div> */}
              </div>
              <div
                className="who-we-are-right-div flex flex-col justify-center ml-8"
                ref={sectionRefs.whowearerightdiv}
              >
                <div className="right-div-inner-container flex flex-row mb-4 items-center">
                  <div className="who-we-are-right-section w-2 h-14 bg-blue-600 rounded-tr-full rounded-br-full mr-4"></div>
                  <h1>Why Choose Us ?</h1>
                </div>
                <p className="w-[36rem] text-justify">
                  Precision Web AI stands out for its unmatched expertise and
                  innovation across a comprehensive suite of digital services.
                  From ideation to execution, we deliver tailored solutions in
                  UI/UX design, mobile app development, PWA, digital
                  transformation, and more. Our commitment to excellence in
                  ERP/Customer Relationship Management, AR/VR, IoT, and cloud
                  services—including AWS—ensures cutting-edge solutions for
                  every challenge. With deep expertise in data science,
                  blockchain technology, healthcare IT consulting, DevOps, and
                  generative AI, we empower businesses with precision and
                  transformative digital strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutService;
