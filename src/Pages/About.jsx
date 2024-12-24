import React from 'react'
import Imagecomponent from '../Components/Imagecomponent'
import aboutbg from '../assets/about-bg.jpg'
import ImageText from '../Components/ImageText'
import aboutus from '../assets/about-us.jpg'
import ContactUsftr from '../Components/ContactUsftr'
import ourstory from '../assets/our-story.jpg'
import Footer from '../Components/Footer'

function About() {
  return (
    <div className='bg-[#f8f4f0] px-4 lg:px-14' >
        <Imagecomponent imageSrc={aboutbg} id="About" heading="Discover Our Story and Expertise" />
        <div className='mt-56 md:mt-72'>
        <ImageText imageSrc={aboutus} heading='About Us' para='Welcome to Real Estate, your trusted partner in the world of real estate. With a passion for connecting people with their dream properties, we are dedicated to providing exceptional service and delivering outstanding results. '
        revers={false} />
        </div>

        <div className='text-center'> 
          <p className='uppercase text-[#34a0a4] pt-16 md:pt-36 tracking-wider'> Client-Centric Approach </p>
          <hr className='w-14 h-[1.5px] bg-[#34a0a4] m-auto my-8' />
          <h1 className='text-3xl md:text-5xl md:px-24 leading-snug	tracking-wider	 md:pb-36 font-medium'>Our clients are our priority. Exceptional customer service and personalized experiences define our company culture. </h1>
        </div>

        <ImageText imageSrc={ourstory} 
        heading='Our Story' 
        para='Founded 10 years ago by John Oliver, our company was born out of a deep understanding of the challenges and frustrations that buyers, sellers, and investors often face in the market.'
        revers={true} />

        <ContactUsftr/>
        <Footer/>
    </div>
  )
}

export default About