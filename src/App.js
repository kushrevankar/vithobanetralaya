import React from 'react';
import './globals.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero'
import Herobel from './components/herobel/Herobel';
import Timings from './components/timings/Timings';
import Diseases from './components/diseases/Diseases';
import Abovefooter from './components/abovefooter/Abovefooter';
import Footer from './components/footer/Footer'
import About from './components/about/About';
import Treatments from './components/treatments/Treatments'
import Doctors from './components/doctors/Doctors'
import Contact from './components/contact/Contact'
import Appointment from './components/appointment/Appointment'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Herobel />
            <Timings />
            <Diseases />
            <Abovefooter />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
