import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Philosophy from './components/Philosophy';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import Directors from './components/Directors';
import Ratings from './components/Ratings';
import WhatsAppOrder from './components/WhatsAppOrder';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Philosophy />
      <Menu />
      <Reservation />
      <Directors />
      <Ratings />
      <WhatsAppOrder />
      <Footer />
    </>
  );
}