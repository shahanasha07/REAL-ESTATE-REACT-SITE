import React from 'react'
import star from '../assets/gold-star.png'

function Review() {
  return (
    <div>
        <div className='border-2 border-gray-400/25	 rounded-xl px-4 py-8'>
            <img src={star} alt="" className='w-1/6' />
            <p className='py-4 leading-7 font-medium'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id convallis neque. Nam scelerisque placerat orci. Maecenas at pulvinar dui. In fermentum, lectus sed tincidunt ornare, arcu ex convallis sapien, quis vestibulum libero tellus quis nisl.” </p>
            <span className='uppercase text-[#34a0a4]'>James Oliver</span>
            </div>
    </div>
  )
}

export default Review