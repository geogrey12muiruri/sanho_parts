
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { CarouselWithContent } from './CarouselWithContent';
import Machines from '../machines/Machines';
 import PartHome from './PartHome';

const Home = () => {


  return (
    <div>
      <CarouselWithContent />      
      {/* <Hero /> */}
      {/* Other content for the Home page */}
       <PartHome /> 
     <Machines />
     
    </div>
  );
};

export default Home;
