import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; 
import Home from './components/pages/Home';
import Productos from './components/pages/Productos';
import Nosotros from './components/pages/Nosotros';
import Tortas from './components/pages/Tortas';
import Tartas from './components/pages/Tartas';
import Alfajores from './components/pages/Alfajores';
import Pasteles from './components/pages/Pasteles';
import Cart from './components/pages/Cart';
import Navbar from './components/common/Navbar';
import './App.css';
import WhatsAppButton from './components/common/WhatsAppButton';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/tortas" element={<Tortas />} />
            <Route path="/tartas" element={<Tartas />} />
            <Route path="/alfajores" element={<Alfajores />} />
            <Route path="/pasteles" element={<Pasteles />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <WhatsAppButton />
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
