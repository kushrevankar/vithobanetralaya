import React from 'react';
import './globals.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero'
import Herobel from './components/herobel/Herobel';
import Timings from './components/timings/Timings';
import Diseases from './components/diseases/Diseases';
import Abovefooter from './components/abovefooter/Abovefooter';
import Footer from './components/footer/Footer'
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Hero />
        <Herobel />
        <Timings />
        <Diseases />
        <Abovefooter />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
