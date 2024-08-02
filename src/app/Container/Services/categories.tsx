import { ArrowForwardIos } from "@mui/icons-material";
import Image from "next/image";
import React from "react";

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

const contentData = [
    {
      id: 1,
      img: img1,
      title: "Artificial Intelligence Service",
      description:
        "Our Artificial Intelligence Service leverages cutting-edge machine learning algorithms and deep learning models to help businesses automate processes, gain actionable insights from data, and enhance decision-making capabilities.",
      otherContent:
        "Our AI solutions include natural language processing, computer vision, predictive analytics, and recommendation systems tailored to your specific industry needs.",
      results: [
        { title: "Improved Efficiency", description: "Automating repetitive tasks to save time and resources." },
        { title: "Enhanced Insights", description: "Extracting meaningful insights from large datasets." },
      ],
    },
    {
      id: 2,
      img: img2,
      title: "Mobile App Development Service",
      description:
        "We specialize in crafting intuitive mobile applications that deliver seamless user experiences across iOS and Android platforms. From concept to deployment, we ensure your app stands out in the competitive market.",
      otherContent:
        "Our mobile app development services include UI/UX design, native and hybrid app development, testing, and ongoing support to ensure your app's success.",
      results: [
        { title: "User Engagement", description: "Creating apps that users love to interact with." },
        { title: "Scalability", description: "Building robust apps capable of handling growth and user demands." },
      ],
    },
    {
      id: 3,
      img: img3,
      title: "Software Development Service",
      description:
        "Our software development services focus on delivering scalable, secure, and customized solutions tailored to meet your business objectives. We follow agile methodologies to ensure transparency and flexibility throughout the development lifecycle.",
      otherContent:
        "From enterprise applications to niche-specific software, we cover a wide range of domains including healthcare, finance, and e-commerce.",
      results: [
        { title: "Customization", description: "Adapting software to fit your unique business processes." },
        { title: "Reliability", description: "Building robust software solutions with minimal downtime." },
      ],
    },
    {
      id: 4,
      img: img4,
      title: "Digital Transformation",
      description:
        "Embrace digital transformation with our comprehensive consulting services designed to modernize your business processes, improve operational efficiency, and foster innovation.",
      otherContent:
        "We help businesses integrate emerging technologies such as AI, IoT, and cloud computing to stay competitive in today's digital landscape.",
      results: [
        { title: "Operational Efficiency", description: "Streamlining workflows and reducing operational costs." },
        { title: "Innovation", description: "Driving innovation through technology adoption and digital strategies." },
      ],
    },
    {
      id: 5,
      img: img5,
      title: "Data Science & Analytics Service",
      description:
        "Harness the power of data with our data science and analytics services. We provide advanced analytics solutions to extract actionable insights, predict trends, and optimize decision-making processes.",
      otherContent:
        "Our expertise includes data visualization, predictive modeling, and machine learning algorithms to unlock the full potential of your data assets.",
      results: [
        { title: "Predictive Insights", description: "Anticipating future trends and customer behavior." },
        { title: "Data-Driven Decisions", description: "Making informed decisions based on data-driven insights." },
      ],
    },
    {
      id: 6,
      img: img6,
      title: "Cloud Service",
      description:
        "Transform your IT infrastructure with our cloud services. We offer cloud migration, deployment, and management solutions to enhance scalability, security, and flexibility.",
      otherContent:
        "Whether you're considering public, private, or hybrid cloud solutions, we provide strategic guidance and implementation expertise tailored to your business requirements.",
      results: [
        { title: "Scalability", description: "Scaling resources up or down based on business needs." },
        { title: "Security", description: "Ensuring data protection and compliance in cloud environments." },
      ],
    },
    {
      id: 7,
      img: img7,
      title: "Blockchain Development Service",
      description:
        "Explore the potential of blockchain technology with our development services. From decentralized applications (DApps) to smart contracts, we help businesses leverage blockchain for enhanced security, transparency, and efficiency.",
      otherContent:
        "Our blockchain solutions cover industries such as finance, supply chain, and healthcare, ensuring secure and traceable transactions.",
      results: [
        { title: "Transparency", description: "Enhancing transparency in transactions and operations." },
        { title: "Security", description: "Securing sensitive data and preventing fraud through blockchain." },
      ],
    },
    {
      id: 8,
      img: img8,
      title: "Ideation and Design Strategy",
      description:
        "Drive innovation with our ideation and design strategy services. We collaborate closely with your team to brainstorm ideas, conceptualize solutions, and create a strategic roadmap for success.",
      otherContent:
        "Our approach combines design thinking principles with market research and user-centric methodologies to deliver innovative and user-friendly products.",
      results: [
        { title: "Creative Solutions", description: "Turning ideas into impactful solutions that resonate with users." },
        { title: "Strategic Roadmap", description: "Developing a clear path from ideation to execution." },
      ],
    },
    {
      id: 9,
      img: img9,
      title: "IT Consulting",
      description:
        "Gain strategic IT insights with our consulting services. We offer expertise in IT infrastructure management, cybersecurity, and digital transformation strategies to optimize your IT investments and achieve business goals.",
      otherContent:
        "Whether you need guidance on IT governance or technology roadmap planning, our consultants provide tailored solutions to address your specific challenges.",
      results: [
        { title: "Efficiency", description: "Optimizing IT processes to improve efficiency and productivity." },
        { title: "Risk Management", description: "Mitigating IT risks and ensuring compliance with industry standards." },
      ],
    },
    {
      id: 10,
      img: img10,
      title: "DevOps",
      description:
        "Accelerate software delivery with our DevOps services. We implement continuous integration, continuous delivery (CI/CD) pipelines, and automation practices to streamline development cycles and improve deployment frequency.",
      otherContent:
        "Our DevOps engineers collaborate across development and operations teams to foster a culture of collaboration, efficiency, and innovation.",
      results: [
        { title: "Faster Time-to-Market", description: "Reducing time from development to deployment without compromising quality." },
        { title: "Reliable Deployments", description: "Achieving reliable and predictable software releases." },
      ],
    },
    {
      id: 11,
      img: img11,
      title: "IoT App Development",
      description:
        "Explore the potential of the Internet of Things (IoT) with our app development services. We create connected applications that leverage IoT sensors and devices to collect data, monitor assets, and automate processes.",
      otherContent:
        "Our IoT solutions span industries such as healthcare, smart cities, and industrial IoT, enabling businesses to innovate and transform operations.",
      results: [
        { title: "Real-Time Insights", description: "Gaining real-time visibility and control over connected devices." },
        { title: "Operational Efficiency", description: "Automating tasks and optimizing resource utilization with IoT." },
      ],
    },
    {
      id: 12,
      img: img12,
      title: "Cloud Managed Services",
      description:
        "Optimize your cloud environment with our managed services. We provide 24/7 monitoring, maintenance, and support to ensure the reliability, security, and performance of your cloud infrastructure.",
      otherContent:
        "From cost optimization to proactive security measures, our managed services team helps you maximize the benefits of cloud computing while minimizing operational risks.",
      results: [
        { title: "Reliability", description: "Ensuring high availability and performance of cloud applications." },
        { title: "Cost Efficiency", description: "Optimizing cloud spend and resource allocation." },
      ],
    },
];


const Categories = () => {
  return (
    <>
      {contentData.map((category) => (
        <div className="container mb-52 mt-52" key={category.id}>
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
                <div className="heading-container"style={{width:"50%"}}>
                  <h1 className="text-6xl">{category.title}</h1>
                  <div className="box-with-arrow border-2 border-white py-2 px-4 w-1/2 mt-10 rounded-xl text-center text-white no-underline flex items-center justify-between">
                    Consult With Us{" "}
                    <span>
                      <ArrowForwardIos />
                    </span>
                  </div>
                </div>
                <div className="para-container p-2 mt-1" style={{width:"50%"}}>
                  {category.description}
                </div>
              </div>
            </div>
          </div>
          
          <section>
            <div className="container-outer flex justify-center mt-16">
              <div className="container-description" style={{ width: "80%" }}>
                <div className="container-description-inner text-white border border-white flex flex-row rounded-xl ">
                  <div className="image-container">
                    <Image src={category.img} alt="image" className="rounded-s-xl" />
                  </div>
                  <div className="content-container p-4">
                    <div>
                      <h3 className="text-4xl pb-4 font-bold">
                        {category.title}
                      </h3>
                      <p>{category.otherContent}</p>
                    </div>
                    <p className="text-2xl pt-6 pb-4 font-semibold">Functionlaity</p>
                    <div className="content-inner-container flex flex-row">
                      {category.results.map((result, resultIndex) => (
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
      ))}
    </>
  );
};

export default Categories;
