import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Directors from './sections/Directors';
import Menu from './sections/Menu';
import Reservations from './sections/Reservations';
import Ratings from './sections/Ratings';
import Footer from './components/Footer';
import OrderPage from './pages/OrderPage';

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Directors />
        <Menu />
        <Reservations />
        <Ratings />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </BrowserRouter>
  );
}
