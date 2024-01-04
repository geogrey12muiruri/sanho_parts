import React from 'react';
import { CarouselWithContent } from '../home/CarouselWithContent';
import { motion } from 'framer-motion';
import { IoMdQuote } from 'react-icons/io';
import { FaQuoteRight } from 'react-icons/fa';
import TechnicalTeamImage1 from '../../assets/technical-team/team-member-1.jpg';
import TechnicalTeamImage2 from '../../assets/technical-team/team-member-2.jpg';
import BackgroundImage from '../../assets/image3.png'; // Add your background image path
import './about.css';


// ... (previous imports)

// ... (previous imports)

const About = () => {
  const technicalTeamMembers = [
    { id: 1, name: 'Wabwile Sifuna', role: 'General Manager', image: TechnicalTeamImage1 },
    { id: 2, name: 'Tracy Mmbone', role: 'Sales Supervisor', image: TechnicalTeamImage2 },
  ];

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const contentData = [
    {
      title: 'Vision',
      description:
        'Our goal and concern are to provide value addition to the construction industry by adding innovation and providing state-of-the-art equipment to our customers. We aim to become a dynamic leader committed to quality service.',
    },
    {
      title: 'Mission',
      description:
        'Our mission is to remain the most reliable, efficient, and at the forefront of Kenya\'s industrial construction and rental equipment.',
    },
    {
      title: 'Motivation',
      description:
        'The Sanho quality assurance system spans all phases of the project life cycle, from the preliminary feasibility and analysis to concept development to the final commissioning of the project. Meeting the project objective requires an understanding of the qualitative and quantitative principles of management, cost implications, and delivery as applied to each project.',
    },
  ];

  return (
    <div className="container mx-auto mt-8 text-center w-full relative">
      {/* Carousel component on top */}
      <CarouselWithContent />

      {/* Profile section */}
      <section className=" container-r mb-8 bg-white text-black p-6 rounded-lg text-left">
        <h2 className="text-4xl font-bold mb-4 text-center">Profile</h2>
        <p className="text-gray-600 mx-auto max-w-2xl text-lg">
          The company was established in 2014 from Lumwika Geotech, a geomining and mining company made of highly skilled employees. The company gets its name Sanho to allow for the expansion of services that could be offered. We are always available with the necessary skills, knowledge, and equipment to meet any requirement in the field of general construction, civil construction, mechanical construction, and rental equipment. Safety is one of our key concerns, and priorities, we, therefore, strive to provide safe working conditions for our employees.
        </p>
      </section>

      {/* Flex layout for Vision, Mission, Motivation */}
      <div className="container-r mx-auto my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 relative z-10">
        {/* Background image for Mission, Vision, Motivation sections */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${BackgroundImage})`,
            filter: 'blur(2px)', // You can adjust the blur effect if needed
          }}
        ></div>

        {/* Vision, Mission, Motivation sections */}
        {contentData.map((section, index) => (
          <motion.div
            key={section.title}
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300 mb-4 flex flex-col relative"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
          >
            <IoMdQuote className="text-3xl mb-2" />
            <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
            <p className="text-gray-600">{section.description}</p>
            <FaQuoteRight className="text-3xl mt-2" />
          </motion.div>
        ))}
      </div>

      {/* Technical Team section */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Technical Team</h2>
        <div className="flex flex-wrap justify-around">
          {technicalTeamMembers.map((member) => (
            <motion.div
              key={member.id}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              transition={{ duration: 0.5, delay: member.id * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 mb-4 flex flex-col items-center relative"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
            >
              <img
                src={member.image}
                alt={`${member.name} Image`}
                className="w-full h-32 object-cover mb-4 rounded-full hover:scale-105 transition-transform duration-300"
              />
              <h2 className="text-xl font-semibold mb-2">{member.name}</h2>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
