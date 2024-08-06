// src/app/Components/Universal/Parallax.tsx
"use client";

import React, { useRef } from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import Hero from './Hero';
import { Beginning } from './begining';
import WebsiteWithUs from '../MainPage/WebsiteWithUs';
import { MaskEffect } from '../MainPage/MaskEffect';
import { BackgroundBeams } from '../ui/background-boxes';
import { MagicCardDemo } from './DigitalContainer';

// Little helpers ...
const url = (name: string, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;

export default function ParallaxPage() {
  const parallax = useRef<IParallax>(null!);
  
  return (
    <div style={{ width: '100%', height: '100%', background: '#253237' }}>
      <Parallax ref={parallax} pages={3}>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

       

       
        <BackgroundBeams/>
         {/* <Hero/> */}
        

        <ParallaxLayer offset={1} speed={1} style={{ height:"100vh" ,  opacity:"0.5" , overflow:"hidden"}} >
          <Beginning/>
        </ParallaxLayer>
        <ParallaxLayer offset={1.9} speed={1} style={{ height:"100vh" }} >
          <MagicCardDemo/>
        </ParallaxLayer>


        <ParallaxLayer offset={2} speed={1}  style={{ height:"100vh"  }}>
        <WebsiteWithUs/>
        </ParallaxLayer>
<ParallaxLayer offset={3} speed={1}  style={{ height:"100vh"  }}>
         <MaskEffect/>
         </ParallaxLayer>
        

       

        {/* <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}>
          <img src={url('earth')} style={{ width: '60%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
            backgroundImage: url('clients', true),
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <img src={url('server')} style={{ width: '20%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <img src={url('bash')} style={{ width: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => parallax.current.scrollTo(0)}>
          <img src={url('clients-main')} style={{ width: '40%' }} />
        </ParallaxLayer> */}
      </Parallax>
    </div>
  );
}
