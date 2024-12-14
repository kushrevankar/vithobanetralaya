import React from 'react';
import './globals.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero'
import Herobel from './components/herobel/Herobel';
import Timings from './components/timings/Timings';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Hero />
        <Herobel />
        <Timings />
      </div>
    </BrowserRouter>
  );
};

export default App;
