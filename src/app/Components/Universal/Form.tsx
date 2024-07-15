"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';

import Image from 'next/image';


const Form = () => {

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
     <section id="header" className="flex items-center justify-center" >
        <div className="nav_bg flex justify-center items-center">
          <div className="row w-full max-w-screen-lg mx-auto">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 flex justify-center items-center flex-col" id="policy-page-container">
                  <h1 className="text-[3rem] text-white font-bold mb-4 ">
                    Connect with our Team
                  </h1>
                  <p className="policy-para text-white text-center text-[1.3rem]">
                    We'd love to hear from you! If you have any questions or comments, please feel free to get in touch with us using the contact form below.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     <div className="form-container w-full max-w-lg mx-auto p-6  mb-12  rounded-lg border border-gray-300 text-white">
        <form onSubmit={handleSubmit} className="form-leet flex flex-col">
          <label className="label-leet mb-1 flex justify-between">
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder='Enter your name here'
              className="input-leet p-2 mb-4 border border-gray-300 rounded-md"
            />
          </label>
          <label className="label-leet mb-1 flex justify-between">
            Email:
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder='Enter your name here'
              className="input-leet p-2 mb-4 border border-gray-300 rounded-md"
            />
          </label>
          <label className="label-leet mb-1 flex justify-between">
            Phone Number:
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              placeholder='Enter your phone here'
              className="input-leet p-2 mb-4 border border-gray-300 rounded-md"
            />
          </label>
          <label className="label-leet mb-1 flex justify-between">
            City:
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
              placeholder='Enter your city here'
              className="input-leet p-2 mb-4 border border-gray-300 rounded-md"
            />
          </label>
          <label className="label-leet mb-1 flex justify-between">
            Qualification:
            <select
              name="qualification"
              value={formData.qualification}
              onChange={handleInputChange}
              required
              
              className="input-leet p-2 mb-4 border border-gray-300 rounded-md"
            >
              <option value="">Select Qualification</option>
              {qualificationOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label className="label-leet mb-1 flex justify-between">
            Working Professional or Fresher:
            <select
              name="profession"
              value={formData.profession}
              onChange={handleInputChange}
              required
              className="input-leet p-2 mb-4 border border-gray-300 rounded-md"
            >
              <option value="">Select Profession</option>
              {professionOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <button type="submit" className="button-leet bg-blue-500 text-white p-2 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default Form