// import React from 'react'

// function Imagecomponent(props) {
//     return (
//         <div className='py-10 px-14'>
//             <div className='text-white text-center rounded-3xl bg-gray-700 py-56 bg-black 'style={{ background: `url(${props.imageSrc})`, filter:'brightness(50%)', backgroundPosition:'bottom', backgroundSize:'cover' } } >

//                <p className='text-2xl'> {props.id}</p>
//                <h1 className='text-7xl'>{props.heading} </h1>

//             </div>

//         </div>


//     )
// }

// export default Imagecomponent






import React from 'react';
import Header from './Header';

function Imagecomponent(props) {
    return (
        <div className='py-4	'>
            <Header/>
            <div className='relative flex justify-center z-3 '>
                {/* Background div with the brightness filter */}
                <div
                    className='absolute inset-0 bg-cover bg-bottom rounded-3xl  py-80'
                    style={{
                        background: `url(${props.imageSrc})`,
                        filter: 'brightness(50%)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'bottom',
                    }}
                ></div>

                {/* Content (text) div */}
                <div className='relative text-center text-white bg-gray-30 w-4/5 mt-44 flex flex-col items-center '>
                    <p className='text-2xl'>{props.id}</p>
                    <h1 className='text-5xl md:text-7xl md:font-semibold	mt-8 w-4/5  '>{props.heading}</h1>
                    {props.showbtn && (
                        <button className='rounded-full bg-[#34a0a4] px-8 py-4 mt-10 hover:bg-teal-600  '> START SEARCHING</button>
                    )}
                    
                </div>
            </div>
        </div>
    );
}

export default Imagecomponent;
