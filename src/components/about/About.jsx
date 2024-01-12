// import React from 'react';
// import { CarouselWithContent } from '../home/CarouselWithContent';
// import { motion } from 'framer-motion';
// import { IoMdQuote } from 'react-icons/io';
// import { FaQuoteRight } from 'react-icons/fa';
// import TechnicalTeamImage1 from '../../assets/technical-team/team-member-1.jpg';
// import TechnicalTeamImage2 from '../../assets/technical-team/team-member-2.jpg';
// import BackgroundImage from '../../assets/image3.png'; // Add your background image path
// import './about.css';


// // ... (previous imports)

// // ... (previous imports)

// const About = () => {
//   const technicalTeamMembers = [
//     { id: 1, name: 'Wabwile Sifuna', role: 'General Manager', image: TechnicalTeamImage1 },
//     { id: 2, name: 'Tracy Mmbone', role: 'Sales Supervisor', image: TechnicalTeamImage2 },
//   ];

//   const fadeInVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 },
//   };

//   const contentData = [
//     {
//       title: 'Vision',
//       description:
//         'Our goal and concern are to provide value addition to the construction industry by adding innovation and providing state-of-the-art equipment to our customers. We aim to become a dynamic leader committed to quality service.',
//     },
//     {
//       title: 'Mission',
//       description:
//         'Our mission is to remain the most reliable, efficient, and at the forefront of Kenya\'s industrial construction and rental equipment.',
//     },
//     {
//       title: 'Motivation',
//       description:
//         'The Sanho quality assurance system spans all phases of the project life cycle, from the preliminary feasibility and analysis to concept development to the final commissioning of the project. Meeting the project objective requires an understanding of the qualitative and quantitative principles of management, cost implications, and delivery as applied to each project.',
//     },
//   ];

//   return (
//     <div className="container mx-auto mt-8 text-center w-full relative">
//       {/* Carousel component on top */}
//       <CarouselWithContent />

//       {/* Profile section */}
//       <section className=" container-r mb-8 bg-white text-black p-6 rounded-lg text-left">
//         <h2 className="text-4xl font-bold mb-4 text-center">Profile</h2>
//         <p className="text-gray-600 mx-auto max-w-2xl text-lg">
//           The company was established in 2014 from Lumwika Geotech, a geomining and mining company made of highly skilled employees. The company gets its name Sanho to allow for the expansion of services that could be offered. We are always available with the necessary skills, knowledge, and equipment to meet any requirement in the field of general construction, civil construction, mechanical construction, and rental equipment. Safety is one of our key concerns, and priorities, we, therefore, strive to provide safe working conditions for our employees.
//         </p>
//       </section>

//       {/* Flex layout for Vision, Mission, Motivation */}
//       <div className="container-r mx-auto my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 relative z-10">
//         {/* Background image for Mission, Vision, Motivation sections */}
//         <div
//           className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
//           style={{
//             backgroundImage: `url(${BackgroundImage})`,
//             filter: 'blur(2px)', // You can adjust the blur effect if needed
//           }}
//         ></div>

//         {/* Vision, Mission, Motivation sections */}
//         {contentData.map((section, index) => (
//           <motion.div
//             key={section.title}
//             initial="hidden"
//             animate="visible"
//             variants={fadeInVariants}
//             transition={{ duration: 0.5, delay: index * 0.2 }}
//             className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300 mb-4 flex flex-col relative"
//             style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
//           >
//             <IoMdQuote className="text-3xl mb-2" />
//             <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
//             <p className="text-gray-600">{section.description}</p>
//             <FaQuoteRight className="text-3xl mt-2" />
//           </motion.div>
//         ))}
//       </div>

//       {/* Technical Team section */}
//       <section className="mb-8">
//         <h2 className="text-3xl font-bold mb-4">Technical Team</h2>
//         <div className="flex flex-wrap justify-around">
//           {technicalTeamMembers.map((member) => (
//             <motion.div
//               key={member.id}
//               initial="hidden"
//               animate="visible"
//               variants={fadeInVariants}
//               transition={{ duration: 0.5, delay: member.id * 0.2 }}
//               className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 mb-4 flex flex-col items-center relative"
//               style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
//             >
//               <img
//                 src={member.image}
//                 alt={`${member.name} Image`}
//                 className="w-full h-32 object-cover mb-4 rounded-full hover:scale-105 transition-transform duration-300"
//               />
//               <h2 className="text-xl font-semibold mb-2">{member.name}</h2>
//               <p className="text-gray-600">{member.role}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;
import React from 'react';

const EricDierTransferPage = () => {
  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Breaking News: Eric Dier Joins Bayern Munich from Tottenham Hotspur!</h2>
        <p className="text-gray-700 mb-8">In a surprising transfer move, England defender Eric Dier has made a significant switch from Tottenham Hotspur to Bayern Munich, shaking up the football world with this unexpected development.</p>
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="md:w-1/2 mb-4 md:mb-0">
            {/* Placeholder for an image */}
            <img
              src="/path/to/eric-dier-image.jpg"
              alt="Eric Dier"
              className="w-full rounded-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-2xl font-bold mb-4">Key Points</h3>
            <p className="text-gray-700 mb-4">Diers move to Bayern Munich comes after a successful stint at Tottenham Hotspur, where he established himself as a versatile and reliable defender. Known for his strong defensive skills and tactical awareness, Diers addition to Bayerns squad is expected to bolster their defensive lineup and add depth to their roster.</p>
            <p className="text-gray-700 mb-4">This transfer marks a new chapter in Diers career, as he looks to make an impact in one of Europes most competitive leagues. His experience in the Premier League and international football adds a valuable dimension to Bayern Munichs defensive strategy.</p>
            <h3 className="text-2xl font-bold mb-4">Anticipation</h3>
            <p className="text-gray-700 mb-4">Football fans are eager to see how Eric Dier will adapt to his new environment at Bayern Munich and how he will contribute to the teams success. With his proven track record and potential for further growth, Diers move has sparked discussions and excitement among football enthusiasts.</p>
            <p className="text-gray-700">Stay tuned for more updates on Eric Diers journey with Bayern Munich as we bring you exclusive insights, reactions from fans and experts, and in-depth coverage of his performances on the pitch.</p>
          </div>
        </div>
        <div className="text-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
            Share Your Thoughts
          </button>
        </div>
      </div>
    </div>
  );
}

export default EricDierTransferPage;
