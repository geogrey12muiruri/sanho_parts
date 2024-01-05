import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/image/sanho.png';
import hamburgerMenu from '../../assets/hamburgerMenu.svg';
import close from '../../assets/close.svg';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setToggle(!toggle);

  return (
    <div className='bg-white border-b'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4'>
        <div>
          <Link to="/">
            <img src={logo} alt="Company Logo" className="h-25 md:h-36" />
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className="text-gray-500 hover:text-orange-600">Home</Link>
          <Link to="/services" className="text-gray-500 hover:text-orange-600">Services</Link>
          <Link to="/machines" className="text-gray-500 hover:text-orange-600">Machines</Link>
          <Link to="/parts" className="text-gray-500 hover:text-orange-600">Parts</Link>
          <Link to="/about" className="text-gray-500 hover:text-orange-600">About</Link>
        </div>

        <div className="md:hidden">
          <button onClick={handleClick}>
            <img src={toggle ? close : hamburgerMenu} className='h-6' alt="Toggle Icon" />
          </button>
        </div>

        {toggle && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white z-10">
            <div className="flex flex-col items-center py-4">
              <Link to="/" className="text-gray-500 hover:text-orange-600 mb-2">Home</Link>
              <Link to="/services" className="text-gray-500 hover:text-orange-600 mb-2">Services</Link>
              <Link to="/machines" className="text-gray-500 hover:text-orange-600 mb-2">Machines</Link>
              <Link to="/parts" className="text-gray-500 hover:text-orange-600 mb-2">Parts</Link>
              <Link to="/about" className="text-gray-500 hover:text-orange-600 mb-2">About</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
