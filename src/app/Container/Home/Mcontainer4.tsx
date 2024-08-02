import React from 'react';
import Image from 'next/image';
import journeyimg from '../../images/journeyimg.webp';

// Define the services data
const services = [
  {
    number: "01",
    title: "Comprehensive Solutions",
    description: "We offer a range of digital services to kickstart your online journey, from web development to digital marketing strategies.",
  },
  {
    number: "02",
    title: "Expert Guidance",
    description: "Benefit from our experienced team's insights and industry knowledge to navigate the digital landscape effectively.",
  },
  {
    number: "03",
    title: "Tailored Approach",
    description: "Every client's journey is unique. We tailor our services to meet your specific needs and ensure a successful digital transformation.",
  },
];

// JourneyBegins component
const Mcontainer4: React.FC = () => {
  return (
    <div className="journey-begins text-white">
      <div className="journey-begins-outer">
        <div className="journey-begins-inner col-10 mx-auto flex flex-row mt-8">
          <div className="journey-begin-text-box flex flex-col items-end pt-8 text-white w-1/2">
            <h2 className="w-10/12 text-4xl ">Your digital journey Begins with our firm.</h2>
            <div className="journey-what-we-offer-services">
              <div className="journey-best-services-div flex flex-col mt-8 mb-8 items-end">
                {services.map((service, index) => (
                  <div className="journey-best-services-we-provide flex flex-row w-10/12 border-b-2 border-gray-800 p-5 hover:border-red-600" key={index}>
                    <div className="journey-best-services-no flex justify-center items-center w-12 h-8 p-2 text-center rounded-full mr-4 border border-white hover:border-red-700 hover:bg-red-700 hover:text-white">
                      {service.number}
                    </div>
                    <div className="journey-best-services-text">
                      <h5 className='text-2xl'>{service.title}</h5>
                      <p className="journey-best-services-text-para text-sm pt-2">{service.description}</p>
                      {/* <div className="journey-best-services-btn text-red-600">Learn More</div> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="journey-begins-img-box w-1/2 flex justify-center items-center">
            <Image src={journeyimg} alt="Journey Image" className="w-[31rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mcontainer4;
