import React from 'react'
import contactbg from '../assets/cntct-bg.jpg'

function ContactUsftr() {
  return (
    <div>
        <div
        className="h-[120vh] rounded-3xl mt-8 flex justify-center items-center relative overflow-hidden ">

        <div
          className="absolute inset-0"
          style={{
            background: `url(${contactbg})`,
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
            filter: 'brightness(75%)',
            zIndex: 0,
          }}
        ></div>


        <div className="md:w-3/4 h-3/4 bg-white rounded-3xl relative z-10 ">

          <div className='bg-gray-30 flex flex-col justify-center items-center h-1/3'>
            <p className='uppercase tracking-widest mt-8	'>Contact Us</p>
            <h1 className='text-xl text-center sm:text-4xl md:font-semibold my-2'>Schedule an Appointment</h1>
            <hr className='w-14 h-[1.5px] bg-[#34a0a4] mt-10' />
          </div>
          <div className='flex flex-col h-1/3 '>
            <label htmlFor="" className='mt-5 px-10 font-bold opacity-65'>Name</label>
            <input type="text" name="" id="" className='border-b	border-black text-balck mx-10 focus:outline-none	' />
            <label htmlFor="" className='mt-5 px-10 font-bold opacity-65'>Email</label>
            <input type="email" name="" id="" className='border-b	border-black text-balck mx-10 focus:outline-none' />
            <label htmlFor="" className='mt-5 px-10 font-bold opacity-65'>Message</label>
            {/* <textarea name="" id="" className='border-b	border-black text-balck mx-10 py-14 focus:outline-none text-clip		'></textarea> */}
            <textarea name="" id="" className='border-b	border-black text-balck mx-10 py-14 focus:outline-none'></textarea>
          </div>
          <div className='text-center'>
            <button className='bg-[#34a0a4] text-white  rounded-full font-semibold tracking-wide uppercase	mt-24 px-4 py-2 sm:px-12 md:mt-24  md:py-4'> request a call back</button>

          </div>
        </div>
      </div>


    </div>
  )
}

export default ContactUsftr