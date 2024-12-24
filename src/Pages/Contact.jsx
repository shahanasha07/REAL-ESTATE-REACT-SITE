import React from 'react'
import Imagecomponent from '../Components/Imagecomponent'
import contactbg from '../assets/contact-us-bg.jpg'
import Footer from '../Components/Footer'
import map from '../assets/map.jpg'

function Contact() {
  return (
    <div className='bg-[#f8f4f0] px-4 lg:px-16 overflow-hidden' >
      <Imagecomponent imageSrc={contactbg} id="Contact Us" heading="We offer a wide Range of Services" />

      <div className='  flex flex-col md:flex-row items-center mt-28  py-4'>
        < div className='md:w-1/2 px-4 lg:px-0 py-24 '>
          <h1 className='text-5xl'>We are excited to connect with you and assist you with your real estate needs</h1>
          <hr className='w-14 h-[1.5px] bg-[#34a0a4]  my-8' />
          <ul className='my-6 text-base	 flex flex-col '>
            <li className='my-2 font-semibold 	'><a href=""> <span className='text-teal-600 uppercase   font-normal'>Phone</span> <br />123 Fifth Avenue, New York, NY 10160</a></li>
            <li className='my-2 font-semibold 	'><a href=""><span className='text-teal-600 uppercase   font-normal'>Emali</span><br /> Contact@info.com</a></li>
            <li className='my-2 font-semibold 	'><a href=""><span className='text-teal-600 uppercase   font-normal'>Address</span> <br />9-334-7565-9787</a></li>
          </ul>
        </div>

        <div className='md:w-1/2 md:mt-44   bg-gray-30'>
          <div className="  bg-white rounded-3xl relative z-10 ">

            <div className='bg-gray-30 flex flex-col   justify-center items-center h-1/3'>
              <p className='uppercase tracking-widest mt-8	'>Contact Us</p>
              <h1 className='text-2xl text-center sm:text-4xl font-semibold my-2'>Schedule an Appointment</h1>
              <hr className='w-14 h-[1.5px] bg-[#34a0a4] mt-10' />
            </div>
            <div className='flex flex-col h-1/3 '>
              <label htmlFor="" className='mt-5 px-10 font-bold opacity-65'>Name</label>
              <input type="text" name="" id="" className='border-b	border-black text-balck mx-10 focus:outline-none' />
              <label htmlFor="" className='mt-5 px-10 font-bold opacity-65'>Email</label>
              <input type="email" name="" id="" className='border-b	border-black text-balck mx-10 focus:outline-none' />
              <label htmlFor="" className='mt-5 px-10 font-bold opacity-65'>Message</label>
              <textarea name="" id="" className='border-b	border-black text-balck mx-10 py-14 focus:outline-none'></textarea>
            </div>
            <div className='text-center'>
              <button className='bg-[#34a0a4] text-white  rounded-full font-semibold tracking-wide uppercase	my-4 px-4 py-4 sm:px-12 md:my-16  md:py-4'> request a call back</button>

            </div>
          </div>
        </div>

      </div>
      {/* map  */}
      <div className='flex justify-center'>
        <img src={map} alt="" />
      </div>
      <Footer />
    </div>
  )
}

export default Contact