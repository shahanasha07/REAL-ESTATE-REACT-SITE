import React from 'react'

function Features(props) {
  return (
    <div>
         <div className=''>
            <img src={props.imageSrc} alt="" className='rounded-2xl' />
            <div className=''>
              <p className='uppercase	py-4'>Apartment - Queens </p>
              <h1 className='text-xl font-semibold'> {props.heading} </h1>
              <p className='py-4 text-lg  opacity-55'>{props.para} </p>
              <span className='text-teal-700	 font-bold text-lg'>$150,000 </span>
            </div>
          </div>
    </div>
  )
}

export default Features