import React from 'react'
import Imagecomponent from '../Components/Imagecomponent'
import homebg from '../assets/home-bg.jpg'
import WhatWedo from '../Components/WhatWedo'
import Features from '../Components/Features'
import feature1 from '../assets/feature-01.jpg'
import feature2 from '../assets/feature-02.jpg'
import feature3 from '../assets/about-bg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight, faSearch } from '@fortawesome/free-solid-svg-icons'
import Review from '../Components/review'
import connecting from '../assets/connecting.jpg'
import ContactUsftr from '../Components/ContactUsftr'
import { faFacebook, faInstagram, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Footer from '../Components/Footer'
import ImageText from '../Components/ImageText'
import Featuredpropety from '../Components/Featuredpropety'


function Home() {
  return (
    <div className='bg-[#f8f4f0] px-4 lg:px-14'>
      <div>
        <Imagecomponent imageSrc={homebg} id="Discover Your Dream Home with Us" heading="Find the Perfect Property for Your Lifestyle" showbtn={true} />
      </div>

      {/* what we do  */}
      <div className='  bg-white mt-12 lg:mt-44 px-4  md:px-14  rounded-3xl'>
        <div className='w-full bg-gray-30   text-center   md:mt-'>
          <h1 className='text-3xl md:text-6xl font-semibold pt-16 pb-4 '>What We Do</h1>
          <div className='bg-gray-70 md:flex md:justify-center '>
            <p className='lg:w-1/2 pb-8'>Simplifying the journey of buying, selling, and renting properties. Our expert team provides comprehensive real estate solutions tailored to your needs</p>

          </div>
          <hr className='w-14 h-[1.2px] bg-[#34a0a4] m-auto ' />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-gray-40	gap-8 py-4  lg:py-32	'>

          <div>
            <WhatWedo id="01" heading="Property Sales" para="Find your dream home with Real Estate - our expert team will guide you through the process and ensure a smooth transaction." />
          </div>
          <div>
            <WhatWedo id="02" heading="Property Rentals" para="Find your dream rental property with Real Estate, offering a variety of options to suit your needs and preferences." />
          </div>
          <div>
            <WhatWedo id="03" heading="Property Management" para="Trust Real Estate to handle the day-to-day management of your property, maximizing its value and minimizing your stress." />
          </div>
          <div>
            <WhatWedo id="04" heading="Lucrative Investments" para="Real Estate presents lucrative investment opportunities in the real estate market, providing high returns on investments." />
          </div>

        </div>
      </div>

      {/* featured properties */}

      <div className=''>
        <Featuredpropety/>

        <div className='grid gird-cols-1 md:grid-cols-3	gap-16 py-24'>

          <Features imageSrc={feature1} heading="Modern Stylish Apartment" para="Discover the epitome of contemporary living in our sleek and chic modern stylish apartments. " />
          <Features imageSrc={feature2} heading="Contemporary Apartments" para="Experience the perfect blend of sophistication and urban living in our cutting-edge contemporary apartments." />
          <Features imageSrc={feature3} heading="Suburban Single-Family Homes" para="Embrace the idyllic charm and tranquility of suburban living in our spacious and welcoming single-family homes." />

        </div>
      </div>

      {/* review */}

      <div className=' bg-white grid md:grid-cols-2   rounded-3xl'>
        <div className='bg-gray-30  md:grid grid-rows-2 px-4 md:px-8 md:py-4 my-4 md:my-14'>

          <div className='mt-'>
            <span className='text-[#34a0a4] text-4xl  '><FontAwesomeIcon icon={faQuoteRight} /></span>
            <h1 className='text-3xl md:text-5xl leading-snug	font-semibold	'>Read from clients who have found the perfect place where they can create...  </h1>
            <hr className='w-14 h-[1.5px] bg-[#34a0a4] my-4' />
          </div>
          <div>
            <p className='text-lg leading-18	 opacity-75'>Discover testimonials from satisfied clients who have found their dream properties with Real Estate, the trusted experts in helping you find the perfect place to call home.</p>
            <button className='bg-[#34a0a4] text-white  rounded-full font-semibold tracking-wide	mt-6 px-12 md:mt-16 md:px-8 py-4'>MORE TESTIMONIALS</button>
          </div>

        </div>
        <div className='bg-gray-40 grid gap-8 my-8 md:py-10 px-4 md:pr-16 md:pl-10'>
          <Review />
          <Review />
        </div>
      </div>

      {/* connecting */}
    <ImageText imageSrc={connecting}  heading='Connecting people with perfect homes is our passion.' para='With a genuine passion for helping people find their dream homes, we are dedicated to connecting buyers and sellers in the real estate market. Trust us to make your home buying dor selling experience seamless and satisfying.' showbtn={true} />
    
      <ContactUsftr />


      {/* footer */}
      <Footer/>

    </div>
  )
}

export default Home