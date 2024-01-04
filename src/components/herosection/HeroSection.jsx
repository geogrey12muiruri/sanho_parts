import React, { useState } from 'react';
import Slider from 'react-slick';
import image1 from '../../assets/hero/case2.jpeg';
import image2 from '../../assets/hero/hyundai.png';

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselData = [
    {
      title: "Excavator Parts",
      description: "Find the right parts for your next digging project.",
      image: image1,
    },
    {
      title: "Bulldozer Parts",
      description: "Keep your earthmoving equipment running smoothly.",
      image: image2,
    },
    // ... add more data items with imported images
  ];
  

 

  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (slide) => setCurrentSlide(slide),
  };

  return (
    <section className="bg-gray-800 h-screen relative">
      <Slider {...settings}>
        {carouselData.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center h-full px-4 py-16 text-center ${
              currentSlide === index ? 'text-white' : 'text-gray-300'
            }`}
          >
            <img
             
              alt={item.title}
              className="mb-4 w-full h-auto object-cover"
            />
            <h1 className="text-5xl font-bold mb-4">{item.title}</h1>
            <p className="text-xl">{carouselData[currentSlide].text}</p> <a href="/shop" className="btn btn-primary mt-8">Shop Parts Now</a>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default HeroSection;
