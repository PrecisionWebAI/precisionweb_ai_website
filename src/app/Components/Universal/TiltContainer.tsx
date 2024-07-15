"use client"

import React, { useEffect, useRef, ReactNode } from 'react';
import VanillaTilt from 'vanilla-tilt';

type TiltContainerProps = {
  children: ReactNode;
};

const TiltContainer: React.FC<TiltContainerProps> = ({ children }) => {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tiltElement = tiltRef.current;

    if (tiltElement) {
      // Initialize Tilt.js
      VanillaTilt.init(tiltElement, {
        max: 25,
        speed: 400,
        glare: true,
        'max-glare': 0.5,
      });

      // Ensure the child elements are visible after tilt initialization
      tiltElement.style.visibility = 'visible'; // Ensure visibility

      // Clean up on component unmount
      return () => {
        if (tiltElement && (tiltElement as any).vanillaTilt) {
          (tiltElement as any).vanillaTilt.destroy();
        }
      };
    }
  }, []);

  return (
    <div ref={tiltRef} className="tilt-container">
      {children}
    </div>
  );
};

export default TiltContainer;
