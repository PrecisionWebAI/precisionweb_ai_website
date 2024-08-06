"use Client"



import { Feedback } from "./Components/MainPage/Feedback";
import { MaskEffect } from "./Components/MainPage/MaskEffect";
import WebsiteWithUs from "./Components/MainPage/WebsiteWithUs";
import { BackgroundBeams } from "./Components/ui/background-boxes";
import { TracingBeam } from "./Components/ui/tracing-beam";
import { Beginning } from "./Components/Universal/begining";
import Footer from "./Components/Universal/Footer";
import Hero from "./Components/Universal/Hero";
import ParallaxPage from "./Components/Universal/Parallax";






export default function Home() {
  return (
    <main className="font-primary">
      
  <ParallaxPage/>
      <BackgroundBeams/>
  <TracingBeam >
     <Hero/>
     <Beginning/>
     <WebsiteWithUs/>
     <MaskEffect/>
     <Feedback/>
     <Footer/>

     </TracingBeam>

    </main>
    
  );
}
