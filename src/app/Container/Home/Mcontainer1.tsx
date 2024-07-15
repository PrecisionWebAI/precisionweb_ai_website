"use client";

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image'; // use next/image for better optimization
import img from '../../images/19430.jpg';
import img1 from '../../images/Artboard 25.png';
import container1 from '../../images/idea.jpg';
import container2 from '../../images/happyClient.jpg';
import container3 from '../../images/hike.jpg';

const Mcontainer1: React.FC = () => {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  const sectionRefs = {
    faqaskedouter: useRef<HTMLDivElement>(null),
    faqtextwrapper: useRef<HTMLDivElement>(null),
    whatwedorightdiv: useRef<HTMLDivElement>(null),
    whatwedoleftdiv: useRef<HTMLDivElement>(null),
    whowearerightdiv: useRef<HTMLDivElement>(null),
    whoweareleftdiv: useRef<HTMLDivElement>(null),
    otherservicescontainer: useRef<HTMLDivElement>(null),
    otherservicesheading: useRef<HTMLDivElement>(null),
    mainservicesleftdiv: useRef<HTMLDivElement>(null),
    keyfeaturesouterbox: useRef<HTMLDivElement>(null),
    yourareaheading: useRef<HTMLDivElement>(null),
    guardianrightdiv: useRef<HTMLDivElement>(null),
    guardianleftdiv: useRef<HTMLDivElement>(null),
    headingrated: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const handleScroll = () => {
      for (const section in sectionRefs) {
        const element = sectionRefs[section as keyof typeof sectionRefs].current;
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

          if (isVisible) {
            element.classList.add('active');
          } else {
            element.classList.remove('active');
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleBoxClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleBoxHover = (index: number) => {
    setActiveIndex(index);
  };

  const handleBoxMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <section>
      <div className="text-center mt-12 leading-8 tracking-wide text-white" ref={sectionRefs.headingrated}>
        <h1 className="font-bold">Rated More than 4.5 Stars on all Platforms</h1>
        <p className="text-lg font-semibold">10,000+ reviews across all platforms</p>
      </div>

      <div className="mt-20 text-white">
        <div className="flex justify-center">
          <div className="flex flex-row justify-center w-full">
            <div className="w-2/5 flex justify-center items-center" ref={sectionRefs.guardianleftdiv}>
              {/* <div className="imageContainer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Image src={isHovered ? img1 : img} className={isHovered ? "frontImage": "hoverImage"} alt="Guardian" width={512} height={512} />
              </div> */}
              <Image src={img1}  alt="Container 1" width={512} height={512} />
            </div>
            <div className="flex flex-col justify-center w-2/5" ref={sectionRefs.guardianrightdiv}>
              <h1>We are Guardians</h1>
              <p className="text-gray-600 w-[35rem]">
                Guardian Angel Security Services offers a comprehensive range of security solutions, including skilled gunmen, vigilant bouncers, adept security guards, efficient peons, and caring ward boys.
              </p>
              <div className="mt-8">
                <div
                  className={`flex flex-row justify-between items-center w-[32rem] mb-4 rounded-lg ${activeIndex === 0 ? 'active-boxes0 bg-[#141c27]  cursor-pointer' : 'cursor-pointer'}`}
                  onClick={() => handleBoxClick(0)}
                  onMouseEnter={() => handleBoxHover(0)}
                >
                  <div className="bg-[#2977BE] w-4 h-16 rounded-r-full"></div>
                  <div>
                    <h1 className="font-bold text-2xl text-center">100%</h1>
                    <p className="font-semibold m-0">Innovative Solutions</p>
                  </div>
                  <Image src={container1} alt="Container 1" width={36} height={36} className="p-2 w-36" />
                </div>
                <div
                  className={`flex flex-row justify-between items-center w-[32rem] mb-4 rounded-lg ${activeIndex === 1 ? 'active-boxes1 bg-[#141c27]  cursor-pointer' : 'cursor-pointer'}`}
                  onClick={() => handleBoxClick(1)}
                  onMouseEnter={() => handleBoxHover(1)}
                >
                  <div className="bg-[#2977BE] w-4 h-16 rounded-r-full"></div>
                  <div>
                    <h1 className="font-bold text-2xl text-center">10k+</h1>
                    <p className="font-semibold m-0">Happy Clients</p>
                  </div>
                  <Image src={container2} alt="Container 2" width={36} height={36} className="p-2 w-36" />
                </div>
                <div
                  className={`flex flex-row justify-between items-center w-[32rem] mb-4 rounded-lg ${activeIndex === 2 ? 'active-boxes2 bg-[#141c27]  cursor-pointer' : 'cursor-pointer'}`}
                  onClick={() => handleBoxClick(2)}
                  onMouseEnter={() => handleBoxHover(2)}
                >
                  <div className="bg-[#2977BE] w-4 h-16 rounded-r-full"></div>
                  <div>
                    <h1 className="font-bold text-2xl text-center">25%</h1>
                    <p className="font-semibold m-0">
                      Higher Conversion
                    </p>
                  </div>
                  <Image src={container3} alt="Container 3" width={36} height={36} className="p-2 w-36" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mcontainer1;
