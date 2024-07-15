"use client";

import Link from 'next/link';
import Image from 'next/image';
import React, { FC } from 'react';
import { AccountCircle, Devices, Accessibility, Speed, Person, Security, SettingsInputComponent, Analytics } from '@mui/icons-material';

import de1 from "../../images/different/de1.png";  // Ensure you import correct image paths
import service2 from "../../images/different/Service 2.png";  // Ensure you import correct image paths

interface KeyFeatureProps {
  title: string;
  description: string;
  icon: JSX.Element;  // Change 'image' to 'icon' and use JSX.Element for icons
}

const KeyFeature: FC<KeyFeatureProps> = ({ title, description, icon }) => {
  return (
    <div className="key-feature-1 w-56">
      <div  className="icon-div mb-2 " > {icon}</div>
      
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

const Mcontainer2: FC = () => {
  return (
    <section className="key-feature-section w-full h-full mt-4 text-white">
      <div className="your-area-heading col-9 mx-auto">
        <h1 className='text-4xl'>
          Unleash Astonishing <br />Digital Experiences
        </h1>
        <p>
        Explore the Essential Key Features That Define  <br />Truly Exceptional Digital Experiences
          {/* Here are 10 key features to consider while evaluating <br /> our
          guards, gunmen, bouncers, and watchmen. */}
        </p>
        <Link href="/support#contactformsection">
          <div className="contact-us ">Contact Us</div>
        </Link>
      </div>

      <div className="key-features-outer-box col-9 mx-auto mt-12">
        <div className="key-feature-inner-box grid grid-cols-4 gap-2 mb-12 justify-items-center">
          <KeyFeature
            title="User-Centered Design"
            description="Prioritize intuitive interfaces and user-friendly navigation."
            icon={<AccountCircle />}
          />
          <KeyFeature
            title="Responsive Design"
            description="Ensure seamless functionality across devices and screen sizes."
            icon={<Devices />}
          />
          <KeyFeature
            title="Accessibility"
            description="Make your digital experience inclusive and accessible to all users."
            icon={<Accessibility />}
          />
          <KeyFeature
            title="Performance Optimization"
            description="Ensure fast loading times and smooth interactions."
            icon={<Speed />}
          />
          <KeyFeature
            title="Personalization"
            description="Tailor content and experiences based on user preferences and behavior."
            icon={<Person />}
          />
          <KeyFeature
            title="Security"
            description="Implement robust measures to protect user data and privacy."
            icon={<Security />}
          />
          <KeyFeature
            title="Integration"
            description="Seamlessly integrate with other platforms or systems for a cohesive experience."
            icon={<SettingsInputComponent />}
          />
          <KeyFeature
            title="Analytics"
            description="Incorporate analytics to gather insights and optimize user journeys."
            icon={<Analytics />}
          />
          
          {/* Add more KeyFeature components with respective content */}
        </div>
      </div>
    </section>
  );
};

export default Mcontainer2;
