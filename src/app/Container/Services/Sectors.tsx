import { Grid, Box, Typography } from "@mui/material";
import {
  LocalHospital as HealthcareIcon,
  AccountBalance as FinanceIcon,
  Restaurant as RestaurantIcon,
  ShoppingCart as EcommerceIcon,
  ElectricCar as ElectricVehiclesIcon,
  Cloud as SaaSIcon,
  Flight as TravelIcon,
  Theaters as EntertainmentIcon,
  LocalOffer as OnDemandIcon,
  Public as SocialMediaIcon,
  LocalShipping as LogisticsIcon,
  School as EducationIcon,
  Home as RealEstateIcon,
  AirplanemodeActive as AviationIcon,
  EmojiNature as AgricultureIcon,
} from "@mui/icons-material";
import React from "react";

const services = [
  {
    id: 1,
    title: "Healthcare",
    icon: <HealthcareIcon fontSize="large" />,
    description:
      "Enhance patient care and operational efficiency with cutting-edge digital solutions tailored to healthcare providers. Utilize AI-powered diagnostics, telemedicine platforms, and secure patient management systems.",
  },
  {
    id: 2,
    title: "Finance",
    icon: <FinanceIcon fontSize="large" />,
    description:
      "Transform financial services with secure, scalable software solutions. Offer seamless banking experiences, automated investment management, and robust compliance tools.",
  },
  {
    id: 3,
    title: "Restaurant",
    icon: <RestaurantIcon fontSize="large" />,
    description:
      "Revolutionize the dining experience with innovative technology solutions. From mobile ordering apps to kitchen automation systems, optimize operations and customer engagement.",
  },
  {
    id: 4,
    title: "eCommerce",
    icon: <EcommerceIcon fontSize="large" />,
    description:
      "Build scalable online stores with intuitive user interfaces and personalized shopping experiences. Implement AI-driven recommendations, secure payment gateways, and real-time inventory management.",
  },
  {
    id: 5,
    title: "EV (Electric Vehicles)",
    icon: <ElectricVehiclesIcon fontSize="large" />,
    description:
      "Drive the future of transportation with smart EV solutions. Develop charging station networks, vehicle-to-grid technology, and fleet management systems for sustainable mobility.",
  },
  {
    id: 6,
    title: "SaaS",
    icon: <SaaSIcon fontSize="large" />,
    description:
      "Empower businesses with cloud-based software solutions. Offer subscription-based services for CRM, ERP, project management, and collaboration tools tailored to diverse industries.",
  },
  {
    id: 7,
    title: "Travel",
    icon: <TravelIcon fontSize="large" />,
    description:
      "Redefine travel experiences with digital innovation. Develop booking platforms, itinerary management tools, and personalized travel recommendations powered by machine learning algorithms.",
  },
  {
    id: 8,
    title: "Entertainment",
    icon: <EntertainmentIcon fontSize="large" />,
    description:
      "Engage audiences with immersive digital entertainment solutions. Create streaming platforms, interactive gaming experiences, and content recommendation engines.",
  },
  {
    id: 9,
    title: "On-Demand Services",
    icon: <OnDemandIcon fontSize="large" />,
    description:
      "Connect service providers and consumers efficiently with on-demand service platforms. Develop apps for ridesharing, home services, and freelance marketplaces.",
  },
  {
    id: 10,
    title: "Social Media",
    icon: <SocialMediaIcon fontSize="large" />,
    description:
      "Foster community engagement with social media platforms. Develop features for content sharing, real-time messaging, and influencer marketing analytics.",
  },
  {
    id: 11,
    title: "Logistics",
    icon: <LogisticsIcon fontSize="large" />,
    description:
      "Optimize supply chain operations with logistics management software. Offer route optimization, inventory tracking, and predictive analytics for streamlined operations.",
  },
  {
    id: 12,
    title: "Education",
    icon: <EducationIcon fontSize="large" />,
    description:
      "Transform learning experiences with digital education platforms. Develop virtual classrooms, personalized learning paths, and assessment tools for educational institutions.",
  },
  {
    id: 13,
    title: "Real Estate",
    icon: <RealEstateIcon fontSize="large" />,
    description:
      "Digitize property transactions and management processes. Offer virtual property tours, CRM systems for agents, and predictive analytics for property valuation.",
  },
  {
    id: 14,
    title: "Aviation",
    icon: <AviationIcon fontSize="large" />,
    description:
      "Innovate aviation services with digital solutions. Develop flight booking systems, maintenance tracking tools, and passenger experience enhancements for airlines and airports.",
  },
  {
    id: 15,
    title: "Agriculture",
    icon: <AgricultureIcon fontSize="large" />,
    description:
      "Boost agricultural productivity with precision farming technology. Develop IoT solutions for crop monitoring, smart irrigation systems, and supply chain management for farm-to-table transparency.",
  },
];

const Sectors = () => {
  return (
    <div className="provided-outer">
      <h1 className="text-4xl text-white text-center mb-10 mt-10">
      Innovative Solutions for Today's Varied Industry Needs!
      </h1>
      <div className="provided-inner-container flex justify-center">
        <div className="provided-inner-div grid grid-cols-1 md:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="provided-box border-1 border-gray-700 rounded-md flex flex-col justify-center relative"
              style={{ width: "18rem", height: "auto", cursor: "pointer" }}
            >
              <div className="provided-box-inner p-5">
                <div className="provide-img mb-2">
                  {service.icon} {/* Render the icon here */}
                </div>
                <div className="provided-heading text-white text-xl mt-6">
                  {service.title}
                </div>
                <p className="text-white text-sm text-left mt-3">
                  {service.description}
                </p>
              </div>
              <div className="provided-box-inner-back p-5">
                <div className="provide-img mb-2">
                  {service.icon} {/* Render the icon here */}
                </div>
                <div className="provided-heading text-white text-xl mt-6">
                  {service.title}
                </div>
                <p className="text-white text-sm text-left mt-3">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sectors;
