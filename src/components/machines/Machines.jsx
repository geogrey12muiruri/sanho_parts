import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './machines.css'; // Assuming you have defined styles in this file
import image1 from '../../assets/machines/shantui.jpeg';
import image2 from '../../assets/machines/banner21.jpeg';
import image3 from '../../assets/machines/banner61.jpeg';
import image4 from '../../assets/machines/casse.jpeg';
import image5 from '../../assets/machines/hyundai.png';
import image6 from '../../assets/machines/banner345.jpg';

const imagesWithText = [
  {
    image: image1,
    heading: '',
    paragraph: '',
  },
  {
    image: image2,
    heading: '',
    paragraph: '',
  },
  {
    image: image3,
    heading: '',
    paragraph: '',
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
    heading: '',
    paragraph: '',
  },
  // Add more image-text pairs as needed
];

const Machines = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === imagesWithText.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-96 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full flex">
        {imagesWithText.map((item, index) => (
          <div
            key={index}
            className="w-full h-full bg-cover bg-center flex items-center justify-center absolute top-0 left-0"
            style={{ backgroundImage: `url(${item.image})`, opacity: index === currentIndex ? 1 : 0, transition: 'opacity 1s ease-in-out' }}
          >
            <div className="bg-white bg-opacity-70 p-4 rounded-lg text-center">
              <h1 className="text-2xl text-orange-950 mb-2">{item.heading}</h1>
              <p className="text-lg mb-4">{item.paragraph}</p>
              <Link to="/parts">
                <button className="bg-orange-950 hover:bg-orange-900 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Machines;
