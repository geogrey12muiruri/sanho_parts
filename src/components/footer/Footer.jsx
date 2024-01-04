import React from 'react';
import { Link } from 'react-router-dom';
import whatsapp from '../../assets/whatsapp-icon.png'

const Footer = () => {
  const phoneNumber = '+254718528410'; 
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  return (
    <footer className="bg-orange-950 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* Services */}
        <div className="footer-column">
          <h3 className="text-lg text-black font-bold mb-4">Services</h3>
          <ul>
            <li>
              <Link to="/services/heavyequipment">Heavy Equipment & Spare Parts</Link>
            </li>
            <li>
              <Link to="/services/repair">Machinery Repair</Link>
            </li>
            <li>
              <Link to="/services/construction">Construction</Link>
            </li>
            {/* Add other services as needed */}
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-column">
          <h3 className="text-lg text-black font-bold mb-4">Resources</h3>
          <ul>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/quotations">Quotations</Link>
            </li>
            {/* Add other resource links as needed */}
          </ul>
        </div>

        {/* Company */}
        <div className="footer-column">
          <h3 className="text-lg text-black font-bold mb-4">Company</h3>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/customer-story">Customer Stories</Link>
            </li>
            {/* Add other company links as needed */}
          </ul>
        </div>

        {/* Support */}
        <div className="footer-column">
          <h3 className="text-lg text-black font-bold mb-4">Support</h3>
          <ul>
          <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>Email: sanhoequipment@gmail.com</li>
            <li>Phone:  0718528410</li>
            <li>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <img
                  src={whatsapp}
                  alt="WhatsApp Icon"
                  className="w-6 h-6 inline-block"
                />
                
              </a>
            </li>
            {/* Add other support contacts as needed */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
