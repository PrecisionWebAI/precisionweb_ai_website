import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import logo from '../../images/logo.png';

const Footer: React.FC = () => {
  return (
    <>
      <div className=" text-white py-8">
        <div className="mx-auto w-11/12 lg:w-9/12">
          <div className="flex flex-col lg:flex-row mt-12 pb-12 border-b-2 border-white">
            <div className="flex flex-col justify-evenly lg:w-1/2 mb-8 lg:mb-0">
              <div className="flex items-center mb-4">
                <Link href="/" passHref>
                  {/* <Image src={logo} alt="Logo" className="mr-8" /> */}
                  
                </Link>
                <h1 className="text-2xl">Precision AI</h1>
              </div>
              <Link href="#contact-box" passHref>
                <div className="w-40 py-2 border-2 border-white text-white rounded-lg text-center">Contact Our Team</div>
              </Link>
            </div>
            <div className="flex justify-end items-center lg:w-1/2">
              <div className="flex flex-col lg:flex-row justify-evenly w-full lg:w-96">
                <div className="mb-4 lg:mb-0">
                  <p className="text-xl font-medium mb-2">Quick Links</p>
                  <ul>
                    <li className="mb-2 text-sm">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="mb-2 text-sm">
                      <Link href="#service-box">Service</Link>
                    </li>
                    <li className="mb-2 text-sm">
                      <Link href="#contact-box">Contact</Link>
                    </li>
                    <li className="mb-2 text-sm">
                      <Link href="/#about-us">About Us</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-xl font-medium mb-2">Legal Information</p>
                  <ul>
                    <li className="mb-2 text-sm">
                      <Link href="/">Privacy Policy</Link>
                    </li>
                    <li className="mb-2 text-sm">
                      <Link href="/about">Terms of Service</Link>
                    </li>
                    <li className="mb-2 text-sm">
                      <Link href="/datascience">Cookies Policy</Link>
                    </li>
                    <li className="mb-2 text-sm">
                      <Link href="/fswd">Privacy Shield</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-11/12 lg:w-9/12 flex flex-col lg:flex-row justify-between mt-8 mb-8 text-white">
        <div className="flex space-x-4 mb-4 lg:mb-0">
          <Link href="https://www.linkedin.com/company/apna-webapp/" target="_blank">LinkedIn</Link>
          <Link href="https://www.instagram.com/apnawebapp/" target="_blank">Instagram</Link>
          <Link href="https://www.facebook.com/profile.php?id=61554513943795" target="_blank">Facebook</Link>
        </div>
        <div>
          2023 @ PrecisionAI Copyrights
        </div>
      </div>
    </>
  );
}

export default Footer;
