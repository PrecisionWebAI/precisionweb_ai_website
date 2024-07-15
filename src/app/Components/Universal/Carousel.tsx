"use client";

import React, { useState, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Requires CSS
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import Image from 'next/image'; // Import next/image for optimized images


import logo1 from "../../images/company-logo/accenture.png"
import logo2 from "../../images/company-logo/wallmart.png"
import logo3 from "../../images/company-logo/facebook.png"
import logo4 from "../../images/company-logo/Samsung.webp"
import logo5 from "../../images/company-logo/microsoft.png"
import logo6 from "../../images/company-logo/deloitte.png"


// Custom hook to get window dimensions
const useWindowDimensions = () => {
  const hasWindow = typeof window !== 'undefined';

  const getWindowDimensions = () => {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  };

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions);

  useEffect(() => {
    if (hasWindow) {
      const handleResize = () => {
        setWindowDimensions(getWindowDimensions());
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [hasWindow]);

  return windowDimensions;
};

const CarouselPage: React.FC = () => {
  const { width, height } = useWindowDimensions();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">Our Clients</h1>
     
      <ResponsiveCarousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        centerMode
        centerSlidePercentage={20} // Adjust this to fit your logos
        swipeable
        emulateTouch
      >
        <div className="item flex items-center justify-center h-32">
          <div className="logo-wrapper">
          <Image src={logo1} alt="Brand 6" width={160} height={80} />
          </div>
        </div>
        <div className="item flex items-center justify-center h-32">
          <div className="logo-wrapper">
          <Image src={logo2} alt="Brand 6" width={160} height={80} />
          </div>
        </div>
        <div className="item flex items-center justify-center h-32">
          <div className="logo-wrapper">
          <Image src={logo3} alt="Brand 6" width={160} height={80} />
          </div>
        </div>
        <div className="item flex items-center justify-center h-32">
          <div className="logo-wrapper">
          <Image src={logo4} alt="Brand 6" width={160} height={80} />
          </div>
        </div>
        <div className="item flex items-center justify-center h-32">
          <div className="logo-wrapper">
          <Image src={logo5} alt="Brand 6" width={160} height={80} />
          </div>
        </div>
        <div className="item flex items-center justify-center h-32">
          <div className="logo-wrapper">
          <Image src={logo6} alt="Brand 6" width={160} height={80} />
          </div>
        </div>
        <div className="item flex items-center justify-center h-32">
          <div className="logo-wrapper">
          <Image src={logo6} alt="Brand 6" width={160} height={80} />
          </div>
        </div>
      </ResponsiveCarousel>
    </div>
  );
};

export default CarouselPage;
