"use client";


import React, { useState, ChangeEvent, FormEvent } from 'react';
import emailIcon from '../images/email.png'; // Adjust paths as necessary
import phoneIcon from '../images/Icon_Call.png';
import razorIcon from '../images/Trusted batch 1.png';

import Image from 'next/image';
import Footer from '../Components/Universal/Footer';

import backgroundImageUrl from "../images/bg-policy-4.png"
import Nav from '../Container/Nav';
import Form from '../Components/Universal/Form';
import Hero from '../Container/Hero';
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    qualification: '',
    profession: '',
  });

  const qualificationOptions = ['Option 1', 'Option 2']; // Replace with actual options
  const professionOptions = ['Option 1', 'Option 2']; // Replace with actual options

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <>
    <Nav/>
    <Hero/>
     

<Form/>
     

      <section className="section-option text-white">
        <div className="Options-container flex justify-evenly items-center flex-wrap w-1/2 mx-auto" id="callerSection">
          <div className="container-email flex flex-col justify-center items-center">
            <div className="email-inner inline-block  p-2 rounded-md">
              <Image src={emailIcon} alt="Email" />
            </div>
            <h5 className="text-lg">Email Us</h5>
            <p className="text-sm">Email us for general queries.</p>
            <h6 className="text-sm text-blue-500"><strong>support@precisionai.com</strong></h6>
          </div>
          <div className="container-email flex flex-col justify-center items-center">
            <div className="email-inner inline-block  p-2 rounded-md">
              <Image src={phoneIcon} alt="Phone" />
            </div>
            <h5 className="text-lg">Call Us</h5>
            <p className="text-sm">Request a call from our executive.</p>
            <h6 className="text-sm text-blue-500"><strong>+91-9999999999</strong></h6>
          </div>
        </div>
        <div className="razorpay flex justify-end items-center pr-8 mx-auto">
          <div>
            <Image src={razorIcon} alt="Razorpay" className="pr-4" />
          </div>
          <div className="razorpay-text flex flex-col justify-center items-center">
            <p className="m-0 p-0 text-sm">Trusted By</p>
            <h5 className="text-lg"><strong>Razorpay</strong></h5>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

// export default Contact;
