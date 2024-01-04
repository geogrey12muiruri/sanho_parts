import React from 'react';
import { motion } from 'framer-motion';
import { Carousel } from "@material-tailwind/react";
import Image1 from '../../assets/undercarriage/under1.webp';
import Image2 from '../../assets/undercarriage/under2.webp';
import Image3 from '../../assets/undercarriage/under3.webp';
import Image4 from '../../assets/undercarriage/under5.webp';

const UndercarriageCarousel = () => {
  const images = [Image1, Image2, Image3, Image4];

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative">
      <Carousel>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Undercarriage ${index + 1}`}
            className="w-full h-auto object-cover rounded-md"
          />
        ))}
      </Carousel>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={textVariants}
        transition={{ duration: 1 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center"
      >
        <motion.h1 className="text-5xl font-bold mb-4 text-white">Sanho Under-Carriage</motion.h1>
        <motion.p className="text-xl text-white font-bold">Explore our high-quality under-carriage components.</motion.p>
      </motion.div>
    </div>
  );
};

export default UndercarriageCarousel;
