import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

import whatsapp from '../../assets/whatsapp-icon.png';
import './whatsappbutton.css';

const WhatsAppButton = ({ phoneNumber }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <div
      className={`fixed bottom-4 right-4 transition-opacity duration-300 ${
        isVisible ? 'animate-shake' : 'opacity-100'
      }`}
    >
      <button
        onClick={handleClick}
        className="bg-white hover:scale-150 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        <img
          src={whatsapp}
          alt="WhatsApp Icon"
          className="w-6 h-6 inline-block mr-2"
        />
        Contact Our Expert on Whatsapp.
      </button>
    </div>
  );
};

// Define prop types
WhatsAppButton.propTypes = {
  phoneNumber: PropTypes.string.isRequired, // Require phoneNumber prop as a string
};

export default WhatsAppButton;
