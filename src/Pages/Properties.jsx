import React from 'react'
import Imagecomponent from '../Components/Imagecomponent'
import proprtiesbg from '../assets/properties-bg.jpg'
import ContactUsftr from '../Components/ContactUsftr'
import Footer from '../Components/Footer'
import Featuredpropety from '../Components/Featuredpropety'
import Features from '../Components/Features'
import feature1 from '../assets/feature-01.jpg'
import feature2 from '../assets/feature-02.jpg'
import feature3 from '../assets/about-bg.jpg'
import feature4 from '../assets/feature-04.jpg'
import feature5 from '../assets/feature-05.jpg'
import feature6 from '../assets/feature-06.jpg'

function Properties() {
  return (
    <div className='bg-[#f8f4f0] px-4 lg:px-16' >
      <Imagecomponent imageSrc={proprtiesbg} id="Properties" heading="Looking to Buy, Sell, Rent, Invest or Manage?" />

      <div className='mt-44'>
        <Featuredpropety />
        <div className='grid gird-cols-1 md:grid-cols-3	gap-16 py-24'>
          <Features imageSrc={feature1} heading="Modern Stylish Apartment" para="Discover the epitome of contemporary living in our sleek and chic modern stylish apartments. " />
          <Features imageSrc={feature2} heading="Contemporary Apartments" para="Experience the perfect blend of sophistication and urban living in our cutting-edge contemporary apartments." />
          <Features imageSrc={feature3} heading="Suburban Single-Family Homes" para="Embrace the idyllic charm and tranquility of suburban living in our spacious and welcoming single-family homes." />

        </div>
        <div className='grid gird-cols-1 md:grid-cols-3	gap-16 '>
          <Features imageSrc={feature4} heading="Luxury Estates" para="Experience opulence and sophistication with our exclusive collection of luxury estate properties. " />
          <Features imageSrc={feature5} heading="Townhouses" para="Enjoy modern living and convenience with our stylish and well-designed townhouse residences." />
          <Features imageSrc={feature6} heading="Vacation Homes" para="Vacation Homes" />

        </div>

      </div>
      <ContactUsftr />
      <Footer />
    </div>
  )
}

export default Properties