import React from 'react'
import { NavbarDemo } from '../Components/Universal/Navbar'
import { BackgroundBeams } from '../Components/ui/background-boxes'
import { ContactHero } from '../Components/Contact_Comp/ContactHero'
import { FormSection } from '../Components/Contact_Comp/FormSection'
import Footer from '../Components/Universal/Footer'
import { ContainerScroll } from '../Components/ui/ContainerScroll'
import { ServiceHero } from '../Components/Services_Comp/ServiceHero'
import { FeaturesSectionDemo } from '../Components/ui/FeaturesSection'
import { Categories } from '../Components/Services_Comp/Categories'

const Services = () => {
  return (
    <>
    <BackgroundBeams/>
    <div className="">
    <NavbarDemo/>
    <ContainerScroll
        titleComponent={
          <ServiceHero Service_Heading="Services"  Description="Ready to bring your vision to life? Whether you have a question, a
          project in mind, or just want to explore how we can collaborate, we're
          here to help. Let's connect and create something extraordinary
          together. "/>
          
        }
    >
    <FeaturesSectionDemo/>
    </ContainerScroll>
    {/* <Categories/> */}
    
    <Footer/>

    </div>
    </>
  )
}

export default Services