import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Directors from './sections/Directors';
import Menu from './sections/Menu';
import BYOB from './sections/BYOB';
import Reservations from './sections/Reservations';
import OrderOnline from './sections/OrderOnline';
import Ratings from './sections/Ratings';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Directors />
        <Menu />
        <BYOB />
        <Reservations />
        <OrderOnline />
        <Ratings />
      </main>
      <Footer />
    </>
  );
}
