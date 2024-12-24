import React from 'react'

function ImageText(props) {
    return (
        <div>
            <div className={`bg-white rounded-3xl mt-8 flex flex-col py-6 md:flex-row ${props.revers ? 'md:flex-row-reverse	' : ''} lg:py-20`} >
                <div className='px-6 md:px-12 md:w-2/3    bg-gray-30'>
                    <img src={props.imageSrc} alt="" className='  lg:h-[100%] rounded-xl ' />
                </div>
                <div className={`bg-gray-40 md:w-2/3 md:grid grid-rows-2 px-4 md:px-0 md:pr-8  my-4 lg:my-14 ${props.revers ? 'md:px-20' : ''} `}>

                    <div className=''>
                        <span className='text-[#34a0a4]'>{props.number} </span>
                        <h1 className='text-3xl lg:text-5xl  tracking-wide leading-snug	 		font-semibold	'>{props.heading} </h1>
                        <hr className='w-14 h-[1.5px] bg-[#34a0a4] my-8' />
                    </div>
                    <div>
                        <p className='text-lg  opacity-75'>{props.para} </p>


                        {props.showbtn && (<button className='bg-[#34a0a4] text-white  rounded-full font-semibold tracking-wide	mt-6 md:mt-4 px-12 lg:mt-16  py-4 uppercase'> Read more </button>)}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ImageText







