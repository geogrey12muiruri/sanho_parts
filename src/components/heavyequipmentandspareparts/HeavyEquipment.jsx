

import contactUsImage from '../../assets/image6.png'; // Replace with your actual image
import { CarouselWithContent } from '../home/CarouselWithContent';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import { Link } from 'react-router-dom';




const HeavyEquipment = () => {
 

  return (
    <div>
      {/* Carousel */}
      <CarouselWithContent />
      {/* Main Content */}

  
      <div className="container mx-auto my-12 p-6 bg-white rounded-lg shadow-lg">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img src={contactUsImage} alt="Contact Us" className="w-full h-auto rounded-lg" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h1 className="text-4xl font-bold mb-4">Sanho Heavy Equipment</h1>
            <p className="text-lg mb-4">
              As a company Sanho strives to provide the best quality heavy equipment and spare parts to our customers. We are committed to providing our customers with the best service possible. We have a wide range of products that are available for purchase. We also offer a full line of parts for all makes and models of construction equipment and heavy machinery. We have a large inventory of parts in stock and can order any part you need. We also offer a full line of parts for all makes and models of construction equipment and heavy machinery. We have a large inventory of parts in stock and can order any part you need. 
            </p>
            <div className="flex gap-4">
              <button className="bg-orange-950 hover:bg-orange-900 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                <Link to="/contact">Contact Us</Link>
              </button>
              <button className="bg-orange-950 hover:bg-orange-900 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                <Link to="/parts">View Parts</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default HeavyEquipment;
