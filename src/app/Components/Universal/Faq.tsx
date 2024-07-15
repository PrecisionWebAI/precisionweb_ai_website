import React from 'react';
// import faq from './path-to-your-image'; // Adjust the path to your image file
import Answer from './Answer'; // Adjust the path to your Answer component

const FAQ = () => {
  return (
    <div id="section1">
      <div className="faq-first-container col-10 mx-auto flex flex-row">
        {/* <img src={faq} alt="FAQ" loading="lazy" className="pr-2" /> */}
        <h3 className="m-0 p-0 text-white ml-5 text-2xl">Frequently Asked Questions</h3>
      </div>
      <div className="faq-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 justify-center text-white items-start" style={{justifyItems:"center"}}>
        <FAQBox 
          question="What is Data Science and its benefits?" 
          answer="Data science is the field of extracting insights and knowledge from data, and its benefits include informed decision making, improved business performance, and better understanding of the world around us." 
        />
        <FAQBox 
          question="What are the chances for getting job?" 
          answer="Based on your 100% efforts and attentiveness in class there is 100% chance to get placed in Various MNC's and startups too." 
        />
        <FAQBox 
          question="What will be the career outcome?" 
          answer="A professional certification from IBM as well as various job opportunities in the field of Data Science with a desired package, also adding up a good hands-on experience based on industrial real-time data." 
        />
        <FAQBox 
          question="Is it a Job guarantee or job assistance program?" 
          answer="Yes, we are providing you a 100% Job guarantee with some basic criteria such as Attendance, completion of project, Assignments." 
        />
        <FAQBox 
          question="What Certificates are provided?" 
          answer="Certification from IBM, Microsoft and eduStudio for course completion as well as a certification of completing the project on time." 
        />
        <FAQBox 
          question="Non technical student can do it?" 
          answer="Students from any background can do it, skills are the key feature that are required by the companies." 
        />
        <FAQBox 
          question="Can non graduates do this course and get job?" 
          answer="Non graduates can get job based on their skills they developed but only in startups, getting job in MNC is not possible as their minimum criteria is graduation with 50% and above." 
        />
      </div>
    </div>
  );
};

const FAQBox = ({ question, answer }: { question: string, answer: string }) => {
  return (
    <div className="faq-box p-4 rounded-xl flex flex-col " style={{width:"80%"}}>
      <h4 className="border-b-4 border-yellow-400 mb-4 pb-1 ">{question}</h4>
      <div className="answer pl-1 text-sm">
        <Answer answer={answer} />
      </div>
    </div>
  );
};

export default FAQ;
