import { cn } from "../../lib/utils";
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

export function FeaturesSectionDemo() {
    const features = [
        {
          id: 1,
          title: "Healthcare",
          icon: <HealthcareIcon fontSize="large" />,
          description:
            "Enhance patient care and efficiency with AI diagnostics, telemedicine, and secure management.",
        },
        {
          id: 2,
          title: "Finance",
          icon: <FinanceIcon fontSize="large" />,
          description:
            "Transform financial services with secure, scalable solutions and seamless banking experiences.",
        },
        {
          id: 3,
          title: "Restaurant",
          icon: <RestaurantIcon fontSize="large" />,
          description:
            "Revolutionize dining with mobile ordering apps, kitchen automation, and customer engagement tools.",
        },
        {
          id: 4,
          title: "eCommerce",
          icon: <EcommerceIcon fontSize="large" />,
          description:
            "Build scalable online stores with AI-driven recommendations and secure payment gateways.",
        },
        {
          id: 5,
          title: "EV (Electric Vehicles)",
          icon: <ElectricVehiclesIcon fontSize="large" />,
          description:
            "Drive smart EV solutions with charging networks, vehicle-to-grid tech, and fleet management.",
        },
        {
          id: 6,
          title: "SaaS",
          icon: <SaaSIcon fontSize="large" />,
          description:
            "Empower businesses with cloud-based CRM, ERP, and collaboration tools tailored to industries.",
        },
        {
          id: 7,
          title: "Travel",
          icon: <TravelIcon fontSize="large" />,
          description:
            "Redefine travel with booking platforms, itinerary management, and machine learning recommendations.",
        },
        {
          id: 8,
          title: "Entertainment",
          icon: <EntertainmentIcon fontSize="large" />,
          description:
            "Engage audiences with streaming platforms, interactive gaming, and content recommendation engines.",
        },
        {
          id: 9,
          title: "On-Demand Services",
          icon: <OnDemandIcon fontSize="large" />,
          description:
            "Connect consumers with service providers through efficient on-demand apps for various services.",
        },
        {
          id: 10,
          title: "Social Media",
          icon: <SocialMediaIcon fontSize="large" />,
          description:
            "Foster engagement with social media platforms for content sharing, messaging, and analytics.",
        },
        {
          id: 11,
          title: "Logistics",
          icon: <LogisticsIcon fontSize="large" />,
          description:
            "Optimize supply chains with route optimization, inventory tracking, and predictive analytics.",
        },
        {
          id: 12,
          title: "Education",
          icon: <EducationIcon fontSize="large" />,
          description:
            "Transform education with virtual classrooms, personalized learning, and assessment tools.",
        },
        {
          id: 13,
          title: "Real Estate",
          icon: <RealEstateIcon fontSize="large" />,
          description:
            "Digitize real estate with virtual tours, CRM for agents, and predictive property analytics.",
        },
        {
          id: 14,
          title: "Aviation",
          icon: <AviationIcon fontSize="large" />,
          description:
            "Innovate aviation with flight booking systems, maintenance tracking, and passenger enhancements.",
        },
        {
          id: 15,
          title: "Agriculture",
          icon: <AgricultureIcon fontSize="large" />,
          description:
            "Boost agriculture with IoT crop monitoring, smart irrigation, and farm-to-table transparency.",
        },
      ];
      
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l border-neutral-800",
        index < 4 && "lg:border-b border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
