import Link from 'next/link'
import React from 'react'
import Image from 'next/image' // use next/image for better optimization
import heropic from "../images/Mans.png"
import { LocalPhone } from '@mui/icons-material'

const Hero: React.FC = () => {
  return (
    <div className="relative z-11 text-white">
      <div className="flex justify-center">
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col justify-center items-center w-1/2">
            <div className="text-left">
              <p className="text-[#69B2F5] text-xl leading-6 tracking-wide m-0">Elevate your business online</p>
              <h1 className="font-serif text-5xl font-semibold leading-12 tracking-normal mt-6">Precision Web AI </h1>
              <p className="font-serif text-3xl text-white leading-none mb-4 pb-4">Digital Services</p>
              <p className="leading-normal mt-6 mb-4" style={{width:"27rem"}}>
              Crafting innovative digital solutions to elevate your brand. Empower your online presence with expert strategy and flawless execution. </p>
            </div>
            <div className="flex flex-row justify-start w-3/5 mt-8 font-semibold leading-6 tracking-widest">
              <Link href="/service" passHref>
                <div className="bg-[#2977BE] py-2 px-4 w-40 rounded-xl text-center mr-8 text-white no-underline">Our Services</div>
              </Link>
              <Link href="/support#contactformsection" passHref>
                <div className="border-2 border-white py-2 px-4 w-42 rounded-xl text-center text-white no-underline flex items-center justify-center">
                  <LocalPhone /> &nbsp;Contact Us
                </div>
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center w-1/2">
            <Image src={heropic} alt="Hero Image" className='hero-img'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
