import React from 'react';
import Slider from 'react-slick';
import PartHome from '../home/PartHome';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './machines.css'; // Assuming you have defined styles in this file

// Import images
import image1 from '../../assets/machines/shantui.png';
import image2 from '../../assets/machines/machine3.jpeg';
import image3 from '../../assets/machines/volvo2.jpg';
import image4 from '../../assets/machines/js_205.jpeg';
import image5 from '../../assets/machines/hyundai.png';
import image6 from '../../assets/machines/case2.jpeg';

// ... (import statements)
const imagesWithText = [
  {
      image: image1,
      heading: 'Shantui',
      paragraph: 'We support a wide range of heavy equipment parts for Shantui machinery.',
  },
  {
      image: image2,
      heading: 'Komatsu',
      paragraph: 'Find the right equipment part for your Komatsu machinery and project requirements.',
  },
  {
      image: image3,
      heading: 'Volvo',
      paragraph: 'Our extensive community includes Volvo heavy equipment brands.',
  },
  {
      image: image4,
      heading: 'JCB',
      paragraph: 'We offer a variety of services and products for JCB machinery maintenance.',
  },
  {
      image: image5,
      heading: 'Hyundai',
      paragraph: 'Maintenance made easier with our Hyundai heavy machinery spare parts and equipment.',
  },
  {
      image: image6,
      heading: 'Case',
      paragraph: 'We provide on-site construction services for Case heavy equipment.',
  },

  // Add more image-text pairs as needed
];

const Machines = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <h1 className='text-center text-3xl font-bold bg-white hover:border-orange-950'>View an extensive community of brands we support</h1>
      <div  className="carousel-container relative h-96 overflow-hidden rounded-lg w-full">
      <Slider {...sliderSettings}>
        {imagesWithText.map((item, index) => (
          <div key={index} className="slider-item">
            <div className="content-wrapper">
              <img
                src={item.image}
                alt={`Heavy Equipment Part ${index + 1}`}
                className="carousel-image object-cover w-full h-full rounded-xl blend-overlay"
              />
              <div className="text-container">
                <h1 className="text-2xl text-orange-950 mb-2">{item.heading}</h1>
                <p className="text-lg mb-4">{item.paragraph}</p>
                <Link to="/parts">
                  <button className="bg-orange-950 hover:bg-orange-900 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      </div>
   
    
      <PartHome />
    </div>
  );
};

export default Machines;

  