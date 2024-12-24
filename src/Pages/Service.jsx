import React from 'react'
import Imagecomponent from '../Components/Imagecomponent'
import servicebg from '../assets/services-bg.jpg'
import ContactUsftr from '../Components/ContactUsftr'
import Footer from '../Components/Footer'
import ImageText from '../Components/ImageText'
import services1 from '../assets/services-01.jpg'
import services2 from '../assets/services-02.jpg'
import services3 from '../assets/services-03.jpg'
import services4 from '../assets/services-04.jpg'

function Service() {
  return (
    <div className='bg-[#f8f4f0] px-4 lg:px-16' >
        <Imagecomponent imageSrc={servicebg}  id="Services" heading="We offer a wide Range of Services" />
        <div className='mt-56 md:mt-72'> 
          <ImageText imageSrc={services1} number='01' heading='Property Sales' para='Looking to buy or sell a property? Look no further. Real Estate offers a wide range of properties for sale, matching you with your dream home or investment. Trust our experienced team to guide you through the entire process.' />
          <ImageText imageSrc={services2} number='02' heading='Property Rentals' para='Finding the perfect rental property can be a challenge. Real Estate makes it easy. Choose from our extensive selection of rental properties, whether youre looking for a cozy apartment or a spacious house. Let us help you find your ideal rental.' revers={true} />
          <ImageText imageSrc={services3} number='03' heading='Property Sales'  para='Finding the perfect property to buy is a significant decision. Real Estate understands this and offers a comprehensive list of properties for sale. Rely on our expertise and personalized service to discover your dream property and make a sound investment.' />
          <ImageText imageSrc={services4} number='04' heading='Property Rentals'  para='In search of a rental property? Real Estate has you covered. Our vast portfolio of properties for rent caters to all your needs and preferences. With our assistance, you can find the perfect rental space in no time. Lets get started.' revers={true} />
        </div>


        <ContactUsftr/>
        <Footer/>
    </div>
  )
}

export default Service