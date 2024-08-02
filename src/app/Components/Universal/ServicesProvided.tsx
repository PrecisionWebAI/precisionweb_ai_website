"use Client"

import { Grid, Box, Typography } from '@mui/material';
import {
  
  PhoneAndroid,
  Code,
  Transform,
  DataUsage,
  Cloud,
  Lightbulb,
  Business,
  Build,
  Devices,
  SettingsEthernet,
  Diversity2,
  CurrencyBitcoin
} from '@mui/icons-material'; // Import icons
import React from 'react';
import TiltContainer from './TiltContainer';


const services = [
  { id: 1, title: 'Artificial Intelligence Service', icon: <Diversity2 fontSize="large" /> },
  { id: 2, title: 'Mobile App Development Service', icon: <PhoneAndroid fontSize="large" /> },
  { id: 3, title: 'Software Development Service', icon: <Code fontSize="large" /> },
  { id: 4, title: 'Digital Transformation', icon: <Transform fontSize="large" /> },
  { id: 5, title: 'Data Science and Analytics Service', icon: <DataUsage fontSize="large" /> },
  { id: 6, title: 'Cloud Service', icon: <Cloud fontSize="large" /> },
  { id: 7, title: 'Blockchain Development Service', icon: <CurrencyBitcoin fontSize="large" /> },
  { id: 8, title: 'Ideation and Design Strategy', icon: <Lightbulb fontSize="large" /> },
  { id: 9, title: 'IT Consulting', icon: <Business fontSize="large" /> },
  { id: 10, title: 'DevOps', icon: <Build fontSize="large" /> },
  { id: 11, title: 'IoT App Development', icon: <Devices fontSize="large" /> },
  { id: 12, title: 'Cloud Managed Services', icon: <SettingsEthernet fontSize="large" /> },
];

const ServicesProvided = () => {
  return (
    <div className="provided-outer">
        <h1 className='text-4xl text-white text-center mb-10'>What we Offer !</h1>
      <div className="provided-inner-container flex justify-center">
        <div className="provided-inner-div grid grid-cols-1 md:grid-cols-4 gap-4">
            
          {services.map((service) => (
            
                <TiltContainer>
            <div key={service.id} className="provided-box border-1 border-gray-700 rounded-md flex flex-col justify-center" style={{ width: "18rem", height:"10rem", cursor:"pointer" }}>
              <div className="provided-box-inner p-5 ">
                <div className="provide-img mb-2 ">
                  {service.icon} {/* Render the icon here */}
                </div>
                <div className="provided-heading text-white text-xl">{service.title}</div>
              </div>
            </div>
              </TiltContainer>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesProvided;
