import { faFacebook, faInstagram, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import footerlogo from '../assets/footer-logo.svg'
function Footer() {
  return (
    <div>
        
      <footer className=' overflow-hidden bg-gray-20 text-center md:text-left'>
        <div className='grid  md:grid-cols-4 gap-8 my-24'> 
          <div className='flex justify-center md:block	'> <img src={footerlogo} alt="" /></div>
          <ul>
            <li className='text-2xl pb-4'>About Us</li>
            <li className='text-lg'>At Real Estate, we pride ourselves on being a trusted and reputable name in the real estate industry with years of experience.</li>

          </ul>

          <ul>
            <li className='text-2xl pb-4'>Contact Info</li>
            <li className='text-lg text-[#34a0a4]'><a href="#">13,Fifthe Avenue,New York, NY 101660 contact@info.com <br /> 555-345-4599 </a></li>
          </ul>

          <ul>
            <li className='text-2xl pb-4'>Property Search </li>
            <li className='text-lg'> Lorem ipsum dolor sit amet, consectetur elit. Donec faucibus, quam sed.</li>
            <li className='mt-4 '><input type="text" placeholder='Search Properties' className=' text-center'/></li>
            <li><button className='bg-[#34a0a4] py-2 px-3 rounded-full mt-2'><FontAwesomeIcon icon={faSearch}/></button></li>
          </ul>
        </div>
        <hr className='w- h-[2px] bg-slate-200	 my-8' />
        <div className='md:flex justify-between '>
          <p>Copyright © 2024 Real Estate Company</p>
          <ul className='flex gap-4 justify-center py-4 '>
            <li><FontAwesomeIcon icon={faTwitter}/></li>
            <li><FontAwesomeIcon icon={faPinterest}/></li>
            <li><FontAwesomeIcon icon={faYoutube}/></li>
            <li><FontAwesomeIcon icon={faInstagram}/></li>
            <li><FontAwesomeIcon icon={faFacebook}/></li>
          
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer