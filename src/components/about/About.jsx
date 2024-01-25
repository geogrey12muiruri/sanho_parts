import React from 'react';
import johnDoeImage from '../../assets/technical-team/sifuna.jpg';
import janeSmithImage from '../../assets/technical-team/tracy1.png';
import BelindaAtienoImage from '../../assets/technical-team/belinda.jpeg';
import Machines from '../machines/Machines';

const TechnicalTeam = () => {
  const teamMembers = [
    {
      name: 'Webwile Sifuna',
      role: 'General Manager & Co-Founder',
      image: johnDoeImage,
    },
    {
      name: 'Tracy Mmbone',
      role: 'Sales Manager',
      image: janeSmithImage,
    },
    {
      name: 'Belinda Atieno',
      role: 'Marketing Director',
      image: BelindaAtienoImage,
    },
  ];

  return (
    <section className="bg-white text-black py-12 lg:py-16 px-4 md:px-8 lg:px-24">
     
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">Our Technical Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="rounded-full w-32 h-32 mx-auto mb-4"
              />
              <h3 className="text-lg lg:text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <div className="bg-white text-black">
    <Machines />
      <div className="py-12 lg:py-16 px-4 md:px-8 lg:px-24">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 ">Who We Are</h2>
          <p className="mb-8">
            Sanho was established in 2014 from Lumwika Geotech company, a geomining and mapping company made up of highly skilled employees. The company was named Sanho to allow for the expansion of service provision. We are always ready to deliver top-notch skills in the field of general construction, civil construction, mechanical construction, and rental equipment. At Sanho, we believe that safety takes precedence; therefore, we endeavor to provide safe working conditions not only for our employees but also to our customers. Our aim is to become a leading infrastructure development company and a national player who delivers best-in-class integrated services, products, and solutions to meet our customers' expectations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-orange-950 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Vision</h3>
              <p className="mb-4">
                To provide value-added service to the construction company by adding innovation and providing state-of-the-art equipment to our customers.
              </p>
              <p>
                <i className="fas fa-quote-left mr-2"></i>
                We are committed to delivering the highest quality service to our customers and maintaining our position as the most reliable, efficient, and innovative industrial construction and rental equipment company in Kenya.
              </p>
            </div>
            <div className="bg-orange-950 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Mission</h3>
              <p className="mb-4">
                To remain the most reliable, efficient, and at the forefront of the Kenya industrial construction and rental equipment.
              </p>
              <p>
                <i className="fas fa-quote-left mr-2"></i>
                Our mission is to achieve customer satisfaction through excellence in design, supply chain management, manufacturing, and installation of high-quality products and services.
              </p>
            </div>
          </div>
        </div>
      </div>
      <TechnicalTeam />
    </div>
  );
};

export default AboutSection;
