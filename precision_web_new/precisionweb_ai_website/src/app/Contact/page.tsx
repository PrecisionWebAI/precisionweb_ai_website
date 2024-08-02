import React from 'react'
import { NavbarDemo } from '../Components/Universal/Navbar'
import { BackgroundBeams } from '../Components/ui/background-boxes'
import { ContactHero } from '../Components/Contact_Comp/ContactHero'
import { FormSection } from '../Components/Contact_Comp/FormSection'
import Footer from '../Components/Universal/Footer'
import { ContainerScroll } from '../Components/ui/ContainerScroll'

const ContactUs = () => {
  return (
    <>
    <BackgroundBeams/>
    <div className="">
    <NavbarDemo/>
    <ContainerScroll
        titleComponent={
    <ContactHero/>
        }
    >
    
    <FormSection/>
    </ContainerScroll>
    <Footer/>

    </div>
    </>
  )
}

export default ContactUs