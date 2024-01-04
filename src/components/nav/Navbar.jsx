import React, { useState, useEffect } from 'react';

import hamburgerMenu from '../../assets/hamburgerMenu.svg';
import close from '../../assets/close.svg';
import logo from '../../assets/image/sanho.png';
import './nav.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [showServicesModal, setShowServicesModal] = useState(false);

  const handleClick = () => setToggle(!toggle);

  const handleServicesHover = () => {
    setShowServicesModal(true);
  };

  const handleModalHover = () => {
    setShowServicesModal(true);
  };

 

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click was outside the modal
      if (showServicesModal && !event.target.closest('.services-modal')) {
        setShowServicesModal(false);
      }
    };

    // Attach the event listener when the modal is shown
    if (showServicesModal) {
      document.body.addEventListener('click', handleClickOutside);
    }

    // Detach the event listener when the component unmounts or when the modal is hidden
    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, [showServicesModal]);

  return (
    <div className='relative w-full h-[80px] bg-white border-b p-6'>
      <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4'>
        <img src={logo} alt="Company Logo" className="logo bg-none" />

        <div className='hidden md:flex items-center'>
          <ul className='flex gap-4'>
            <li className='inline-block mx-4 text-gray-400 hover:text-orange-950 cursor-pointer'>
            <Link to="/" >Home</Link></li>
            <div
              className='relative'
              onMouseEnter={handleServicesHover}
            >
              <li className='inline-block mx-4 text-gray-400 hover:text-orange-950'>Services</li>
              <div
                className={`absolute mt-2 p-6 bg-white border rounded shadow-md services-modal ${showServicesModal ? 'block' : 'hidden'}`}
                style={{ zIndex: 999, minWidth: '250px' }}
                onMouseEnter={handleModalHover}
              >
                <h2 className="text-xl font-semibold mb-4 text-orange-950">Services</h2>
                <ul>
                <li className='flex items-center my-2 text-gray-400 hover:text-gray-800 cursor-pointer  text-orange-950'>
                    <Link to="/heavyequipment"> {/* Add Link to Heavy Equipment Service */}
                      Heavy Equipment & Spare Parts
                    </Link>
                    <span className="ml-2">&gt;</span>
                  </li>
                  <li className='flex items-center my-2 text-gray-400 hover:text-orange-950 cursor-pointer  text-orange-950'>
                  <Link to="/machineryrepair"> {/* Add Link to Heavy Equipment Service */}
                      Machinery Repair
                    </Link>
                    <span className="ml-2">&gt;</span>
                  </li>
                  <li className='flex items-center my-2 text-gray-400 hover:text-gray-800 cursor-pointer  text-orange-950'>
                  <Link to="/construction"> {/* Add Link to Heavy Equipment Service */}
                      Construction
                    </Link>
                    <span className="ml-2">&gt;</span>
                  </li>
                </ul>
              </div>
            </div>
            <li className='inline-block mx-4 text-gray-400 hover:text-orange-950'>
            <Link to="/machines">Machines</Link>
            </li>
            <li className='inline-block mx-4 text-gray-400 hover:text-orange-950'>
              <Link to="/parts">Parts</Link>
            </li>
            <li className='inline-block mx-4 text-gray-400 hover:text-orange-950'>
            <Link to="/about">About</Link>
            </li>
          </ul>
        </div>

        <div className='hidden md:flex'>
          <button className="bg-transparent hover:bg-orange-600 text-gray-800 font-semibold hover:text-white py-2 px-3 md:px-4 border border-orange-600 hover:border-transparent rounded">Login</button>
          <button className="bg-transparent hover:bg-orange-600 text-gray-800 font-semibold hover:text-white py-2 px-3 md:px-4 border border-orange-600 hover:border-transparent rounded">Signup</button>
        </div>

        <div className='md:hidden' onClick={handleClick}>
          <img src={toggle ? close : hamburgerMenu} className='h-[25px]' alt="Toggle Icon" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
