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

const ContactUs = () => {
  return (
    <>
    <BackgroundBeams/>
    <div className="">
    <NavbarDemo/>
    <ContainerScroll
        titleComponent={
    <ServiceHero/>
        }
    >
    <FeaturesSectionDemo/>
    </ContainerScroll>
    <Categories/>
    
    <Footer/>

    </div>
    </>
  )
}

export default ContactUs