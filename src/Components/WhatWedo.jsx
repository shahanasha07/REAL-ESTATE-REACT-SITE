import React from 'react'

function WhatWedo(props) {
  return (
    <div>
         <div>
            <span className='text-[#34a0a4]'>{props.id} </span>
            <h1 className='text-2xl font-medium'>{props.heading} </h1>
            <p className='text-lg font-normal opacity-75'>{props.para}</p>
          </div>
    </div>
  )
}

export default WhatWedo