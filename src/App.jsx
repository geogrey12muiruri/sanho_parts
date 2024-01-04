// src/App.jsx
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import Home from './components/home/Home';
import Service from './components/services/Service';
import Parts from './components/parts/Parts';
// import Blog from './components/blog/Blog';
import Product from './components/products/Product';
import QuickQuotationForm from './components/quickquotationform/QuickQuotationForm';
import About from './components/about/About'
import HeavyEquipment from './components/heavyequipmentandspareparts/HeavyEquipment';
import Filter from './components/filters/Filter';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import MachineryRepair from './components/machineryrepair/MachineryRepair';
import Construction from './components/construction/Construction';
import Engine from './components/engine/Engine';
import UnderCarriage from './components/undercarriage/UnderCarriage';
import QuickWear from './components/quickwear/QuickWear';
import Machines from './components/machines/Machines';
// import WhatsAppButton from './components/whatsapp/index';


const App = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  // const phoneNumber = '+254706565249';

  useEffect(() => {
    // Show the form after 10 seconds
    const timeoutId = setTimeout(() => {
      setIsFormVisible(true);
    }, 10000); // 10000 milliseconds = 10 seconds

    // Clear the timeout on component unmount
    return () => clearTimeout(timeoutId);
  }, []);

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service />} />
          <Route path="/products" element={<Product />} />
          <Route path="/parts" element={<Parts />} />
          <Route path="/about" element={<About />} />
          <Route path="/heavyequipment" element={<HeavyEquipment />} />
          <Route path='/filters' element={< Filter />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path='/machineryrepair' element={< MachineryRepair />} />
          <Route path='/construction' element={< Construction />} />
          <Route path='/engine' element={<Engine />} />
          <Route path='/parts/filters' element={<Filter />} />
          <Route path='/parts/engine' element={<Engine />} />
          <Route path='/parts/undercarriage' element={<UnderCarriage />} />
          <Route path='/parts/quickwear' element={<QuickWear />} />
          <Route path='/machines' element={<Machines />} />
          <Route path='/services/heavyequipment' element={<HeavyEquipment />} />
          <Route path='/services/repair' element={<MachineryRepair />} />
          <Route path='/services/construction' element={<Construction />} />
        </Routes>

        {/* Render QuickQuotationForm with onClose prop */}
        {isFormVisible && <QuickQuotationForm onClose={handleCloseForm} />}
        <Footer />
        {/* <WhatsAppButton phoneNumber={phoneNumber} /> */}
      </div>
    </Router>
  );
};

export default App;
