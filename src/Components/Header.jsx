import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import navlogo from '../assets/site-logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="w-full flex items-center  relative top-20  z-10 justify-between px-8 py-">
        {/* Logo Section */}
        <div>
           <Link to={'/'}>
          <img src={navlogo} alt="Logo" className="h-8" />
           </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-4 text-white font-medium">
          <li className='hover:text-[#34a0a4] hover:ease-in-out	duration-300	'><Link to={'/'}>Home</Link></li>
          <li className='hover:text-[#34a0a4] hover:ease-in-out	duration-300	'><Link to={'/about'}>About</Link></li>
          <li className='hover:text-[#34a0a4] hover:ease-in-out	duration-300	'><Link to={'/services'}>Services</Link></li>
          <li className='hover:text-[#34a0a4] hover:ease-in-out	duration-300	'><Link to={'/properties'}>Properties</Link></li>
          <li className='hover:text-[#34a0a4] hover:ease-in-out	duration-300	'><Link to={'/contact'}>Contact</Link></li>
        </ul>

        {/* Social Icons */}
        <div className="hidden lg:flex gap-4 text-white ">
          <FontAwesomeIcon icon={faTwitter}  className='hover:text-[#34a0a4] hover:ease-in-out	duration-300'/>
          <FontAwesomeIcon icon={faInstagram} className='hover:text-[#34a0a4] hover:ease-in-out	duration-300' />
          <FontAwesomeIcon icon={faYoutube} className='hover:text-[#34a0a4] hover:ease-in-out	duration-300' />
          <FontAwesomeIcon icon={faSearch} className='hover:text-[#34a0a4] hover:ease-in-out	duration-300' />
        </div>

        {/* Hamburger Menu Button (Visible on Mobile) */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white text-2xl focus:outline-none"
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="lg:hidden bg-[#f8f4f0]   font-medium absolute z-20 w-full top-[10.5rem] left-0  px-16 py-4">
          <li className="py-2"><Link to={'/'} onClick={toggleMenu}>Home</Link></li>
          <li className="py-2"><Link to={'/about'} onClick={toggleMenu}>About</Link></li>
          <li className="py-2"><Link to={'/services'} onClick={toggleMenu}>Services</Link></li>
          <li className="py-2"><Link to={'/properties'} onClick={toggleMenu}>Properties</Link></li>
          <li className="py-2"><Link to={'/contact'} onClick={toggleMenu}>Contact</Link></li>
        </ul>
      )}
    </div>
  );
}

export default Header;
