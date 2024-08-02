
import FAQ from "./Components/Universal/Faq";
import Footer from "./Components/Universal/Footer";
import Hero from "./Container/Hero";
import Mcontainer1 from "./Container/Home/Mcontainer1";
import Mcontainer2 from "./Container/Home/Mcontainer2";
import Mcontainer3 from "./Container/Home/Mcontainer3";
import Mcontainer4 from "./Container/Home/Mcontainer4";
import Nav from "./Container/Nav";
import Contact from "./Contact/page";
import Form from "./Components/Universal/Form";
import CompanySlider from "./Components/Universal/CompanySlider";
import ServicesProvided from "./Components/Universal/ServicesProvided";



export default function Home() {
  return (
    <main className="font-primary">
      <Nav/>
      <Hero/>
      <ServicesProvided/>
      {/* <CompanySlider/> */}
      <Mcontainer1/>
      <Mcontainer2/>
      <Mcontainer3/>
      <Mcontainer4/>
      <Form/>
      <FAQ/>
      <Footer/>
    </main>
  );
}
