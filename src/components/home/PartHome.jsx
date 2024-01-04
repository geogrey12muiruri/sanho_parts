import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import filtersImage from '../../assets/parts-images/filter.webp';
import undercarriageImage from '../../assets/parts-images/under-carriage.png';
import quickWearImage from '../../assets/parts-images/quickwear.jpeg';
import enginePartsImage from '../../assets/parts-images/engine.jpeg';

const PartHome = () => {
    const partsCategories = [
        { id: 1, name: 'Filters', description: 'Explore our high-quality filters.', image: filtersImage },
        { id: 2, name: 'Undercarriage', description: 'Discover undercarriage components.', image: undercarriageImage },
        { id: 3, name: 'QuickWear', description: 'Find durable quick wear parts.', image: quickWearImage },
        { id: 4, name: 'Engine', description: 'Browse our reliable engine parts.', image: enginePartsImage },
      ];

      const fadeInVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      };
    
      // Define controls inside the component
      const controls = useAnimation();
    
      const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-50px 0px', // Adjust the rootMargin as needed
      });
    
      // Use useEffect to start animation on component mount
      useEffect(() => {
        if (inView) {
          controls.start({ opacity: 1 });
        }
      }, [controls, inView]);
  return (
    <div>
       <div className="bg-gray-100 p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Explore Our Spare Parts Solutions</h1>
        <p className="text-lg text-gray-700">
          Find the right spare parts for your needs from our diverse categories.
        </p>
      </div>

      {/* Parts categories */}
      <div className="container mx-auto my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
        {partsCategories.map((category, index) => (
          <motion.div
            key={category.id}
            ref={ref}
            initial="hidden"
            animate={inView ? controls : 'hidden'}
            variants={fadeInVariants}
            transition={{ duration: 0.3, delay: index * 1 }}
            className="bg-white p-6 rounded-lg shadow-md shake hover:shake transition-all duration-300"
          >
            <Link to={`/parts/${category.name.toLowerCase()}`}>
              <img
                src={category.image}
                alt={`${category.name} Image`}
                className="w-full h-32 object-cover mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
              <p className="text-gray-600">{category.description}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default PartHome
