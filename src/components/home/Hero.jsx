import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import './Hero.css'; // Import the stylesheet

// Import images directly
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';



const imagesWithText = [
  {
    image: image1,
    heading: 'Leading The Competition of Heavy Machinery Spare Parts Since 2014',
    paragraph: '​Find the right equipment part for your Machinery and project requirements.',
  },
  {
    image: image2,
    heading: 'Maintenance made easier with our Variety of Services and Products ',
    paragraph: ' We offer a wide range of heavy machinery spare parts and equipment for sale and rental ',
  },
  // Add more image-text pairs as needed
  {
    image: image3,
    heading: 'On-Site-Construction-Services',
    paragraph: 'Our Technical Team is available 24/7 to provide on-site construction services.',
  },

 

 
];

// ... (your existing imports)

// ... (your existing imports)
// ... (your existing imports)
// ... (your existing imports)

// Hero.js

// ... (existing imports)

// Hero.js

// ... (existing imports)

const Hero = () => {
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
      <Slider {...sliderSettings}>
        {imagesWithText.map((item, index) => (
          <div key={index} className="slider-item">
            <div className="slide-wrapper flex p-28">
              <div className="content-wrapper">
                {/* Use responsive image with srcset */}
                <img
                  srcSet={`${item.image} 600w, ${item.image} 1200w, ${item.image} 1920w`}
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  src={item.image}
                  alt={`Heavy Equipment Part ${index + 1}`}
                  className="slider-image"
                />
                <div className="text-container">
                  <h1 className="text-2xl mb-2">{item.heading}</h1>
                  <p className="text-lg mb-4">{item.paragraph}</p>
                  <Link to="/shop">
                    <button className="bg-orange-950 hover:bg-orange-900 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                      Shop Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Sanho</h1>
        <p className="text-lg mb-8">Your Trusted Partner for Heavy Machinery Spare Parts</p>
        <p className="text-xl mb-8 font-semibold">Delivering Excellence</p>
        <Link to="/services">
          <button className="bg-orange-950 hover:bg-orange-900 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

