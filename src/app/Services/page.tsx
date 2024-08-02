import React from 'react'
import dynamic from 'next/dynamic';

import Nav from '../Container/Nav'
import Hero from '../Container/Hero'
import AboutService from '../Container/Services/AboutService'
import Footer from '../Components/Universal/Footer'
import Sectors from '../Container/Services/Sectors'
import Categories from '../Container/Services/categories';
// Dynamically import the Carousel component with no SSR
const Carousel = dynamic(() => import('../Components/Universal/Carousel'), {
  ssr: false,
});

const Services = () => {
  return (
    <>
    <Nav/>
    <Hero/>
    <Carousel/>
    <AboutService/>
    <Sectors/>
    <Categories/>
    <Footer/>
    </>
  )
}

export default Services