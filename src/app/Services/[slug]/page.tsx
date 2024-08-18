"use client";

import { ServiceHero } from "@/app/Components/Services_Comp/ServiceHero";
import { useParams } from "next/navigation";
import service from "../../data/service.json";
import { NavbarDemo } from "@/app/Components/Universal/Navbar";
import { ArrowForwardIos } from "@mui/icons-material";
import Image from "next/image";
import { ContainerScroll } from "@/app/Components/ui/ContainerScroll";
import { FeaturesSectionDemo } from "@/app/Components/ui/FeaturesSection";
import Footer from "@/app/Components/Universal/Footer";

type Result = {
  title: string;
  description: string;
}

type ServiceData = {
  id: number;
  img: string;
  title: string;
  description: string;
  otherContent: string;
  results: Result[];
}

const Page = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Debug logging
  console.log("Slug from URL:", slug);
  console.log("Service Data:", service);

  // Find the service item based on the slug
  const selectedService: ServiceData | undefined = service.find((serviceItem) => {
    // Normalize the title and slug for comparison
    const normalizedTitle = serviceItem.title
      .replaceAll("&", "-")
      .replaceAll(" ", "-")
      .toLowerCase();
    const normalizedSlug = slug?.replaceAll(" ", "-").toLowerCase();
    
    console.log(`Comparing: ${normalizedTitle} with ${normalizedSlug}`);
    return normalizedTitle === normalizedSlug;
  });

  // Debug logging for selected service
  console.log("Selected Service:", selectedService);

  return (
    <>
      {selectedService ? ( 
        <>
          <NavbarDemo/>
          <ContainerScroll
            titleComponent={
              <ServiceHero 
                Service_Heading={selectedService.title
                  .replaceAll("-", " ")
                  .replaceAll("and", "&")}  
                Description={selectedService.description}
              />
            }
          >
            {/* -----------------------------service-dynamic-component----------------------------------------- */}
            <div className="container mb-52 mt-52" key={selectedService.id}>
              <div className="container-outer flex justify-center">
                <div className="container-inner w-[80%]">
                  <div
                    className="main-container text-white"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="heading-container" style={{ width: "50%" }}>
                      <h1 className="text-6xl">{selectedService.title}</h1>
                      <div className="box-with-arrow border-2 border-white py-2 px-4 w-1/2 mt-10 rounded-xl text-center text-white no-underline flex items-center justify-between">
                        Consult With Us{" "}
                        <span>
                          <ArrowForwardIos />
                        </span>
                      </div>
                    </div>
                    <div className="para-container p-2 mt-1" style={{ width: "50%" }}>
                      {selectedService.description}
                    </div>
                  </div>
                </div>
              </div>
              
              <section>
                <div className="container-outer flex justify-center mt-16">
                  <div className="container-description" style={{ width: "80%" }}>
                    <div className="container-description-inner text-white border border-white flex flex-row rounded-xl ">
                      <div className="image-container">
                        <Image src={selectedService.img} alt="image" className="rounded-s-xl object-cover" width={1000} height={800}/>
                      </div>
                      <div className="content-container p-4">
                        <div>
                          <h3 className="text-4xl pb-4 font-bold">
                            {selectedService.title}
                          </h3>
                          <p>{selectedService.otherContent}</p>
                        </div>
                        <p className="text-2xl pt-6 pb-4 font-semibold">Functionality</p>
                        <div className="content-inner-container flex flex-row">
                          {selectedService.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="content-box p-2 ">
                              <div className="text-xl mb-2">{result.title}</div>
                              <p className="text-sm">{result.description}</p>
                            </div>
                          ))}
                        </div>
                        <div className="box-with-arrow border-2 border-white py-2 px-4 w-1/2 mt-10 rounded-xl text-center text-white no-underline flex items-center justify-between">
                          Consult With our Expert{" "}
                          <span>
                            <ArrowForwardIos />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            {/* -----------------------------service-dynamic-component----------------------------------------- */}
          </ContainerScroll>
          
          <FeaturesSectionDemo/>
          <Footer/>
        </>
      ) : (
        <div>Service not found</div>
      )}
    </>
  );
}

export default Page;
