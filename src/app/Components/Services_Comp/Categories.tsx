"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

import img1 from "../../images/servicePics/fotor-ai-2024071417252.jpg";
import img2 from "../../images/servicePics/mobile-app.jpg";
import img3 from "../../images/servicePics/software-dev.jpg";
import img4 from "../../images/servicePics/digital-transformation.jpg";
import img5 from "../../images/servicePics/business-person-futuristic-business-environment.jpg";
import img6 from "../../images/servicePics/cloud-service.jpg";
import img7 from "../../images/servicePics/blockchain.jpg";
import img8 from "../../images/servicePics/businessmen-hands-wooden-table-with-documents-drafts.jpg";
import img9 from "../../images/servicePics/it-consulting.jpg";
import img10 from "../../images/servicePics/devops.jpg";
import img11 from "../../images/servicePics/iot.jpg";
import img12 from "../../images/servicePics/cloud.jpg";

// Assuming img1, img2, ..., img12 are your imported images
const content = [
  {
    title: "Artificial Intelligence Service",
    description:
      "Our Artificial Intelligence Service leverages cutting-edge machine learning algorithms and deep learning models to help businesses automate processes, gain actionable insights from data, and enhance decision-making capabilities.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={img1}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Artificial Intelligence Service"
        />
      </div>
    ),
  },
  {
    title: "Mobile App Development Service",
    description:
      "We specialize in crafting intuitive mobile applications that deliver seamless user experiences across iOS and Android platforms. From concept to deployment, we ensure your app stands out in the competitive market.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={img2}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Mobile App Development Service"
        />
      </div>
    ),
  },
  {
    title: "Software Development Service",
    description:
      "Our software development services focus on delivering scalable, secure, and customized solutions tailored to meet your business objectives. We follow agile methodologies to ensure transparency and flexibility throughout the development lifecycle.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={img3}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Software Development Service"
        />
      </div>
    ),
  },
  {
    title: "Digital Transformation",
    description:
      "Embrace digital transformation with our comprehensive consulting services designed to modernize your business processes, improve operational efficiency, and foster innovation.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={img4}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Digital Transformation"
        />
      </div>
    ),
  },
  {
    title: "Data Science & Analytics Service",
    description:
      "Harness the power of data with our data science and analytics services. We provide advanced analytics solutions to extract actionable insights, predict trends, and optimize decision-making processes.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={img5}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Data Science & Analytics Service"
        />
      </div>
    ),
  },
  {
    title: "Cloud Service",
    description:
      "Transform your IT infrastructure with our cloud services. We offer cloud migration, deployment, and management solutions to enhance scalability, security, and flexibility.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={img6}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Cloud Service"
        />
      </div>
    ),
  },
  {
    title: "Blockchain Development Service",
    description:
      "Explore the potential of blockchain technology with our development services. From decentralized applications (DApps) to smart contracts, we help businesses leverage blockchain for enhanced security, transparency, and efficiency.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={img7}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Blockchain Development Service"
        />
      </div>
    ),
  },
  {
    title: "Ideation and Design Strategy",
    description:
      "Drive innovation with our ideation and design strategy services. We collaborate closely with your team to brainstorm ideas, conceptualize solutions, and create a strategic roadmap for success.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={img8}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Ideation and Design Strategy"
        />
      </div>
    ),
  },
  {
    title: "IT Consulting",
    description:
      "Gain strategic IT insights with our consulting services. We offer expertise in IT infrastructure management, cybersecurity, and digital transformation strategies to optimize your IT investments and achieve business goals.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={img9}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="IT Consulting"
        />
      </div>
    ),
  },
  {
    title: "DevOps",
    description:
      "Accelerate software delivery with our DevOps services. We implement continuous integration, continuous delivery (CI/CD) pipelines, and automation practices to streamline development cycles and improve deployment frequency.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={img10}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="DevOps"
        />
      </div>
    ),
  },
  {
    title: "IoT App Development",
    description:
      "Explore the potential of the Internet of Things (IoT) with our app development services. We create connected applications that leverage IoT sensors and devices to collect data, monitor assets, and automate processes.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={img11}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="IoT App Development"
        />
      </div>
    ),
  },
  {
    title: "Cloud Managed Services",
    description:
      "Optimize your cloud environment with our managed services. We provide 24/7 monitoring, maintenance, and support to ensure the reliability, security, and performance of your cloud infrastructure.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={img12}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Cloud Managed Services"
        />
      </div>
    ),
  },
];

export function Categories() {
  return (
    <div className="h-[100vh] mt-10">
      <StickyScroll content={content} />
    </div>
  );
}
