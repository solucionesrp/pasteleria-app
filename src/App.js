import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; 
import Home from './components/pages/Home';
import Productos from './components/pages/Productos';
import Nosotros from './components/pages/Nosotros';
import PanBlanco from './components/pages/PanBlanco';
import Cart from './components/pages/Cart';
import Navbar from './components/common/Navbar';
import './App.css';
import WhatsAppButton from './components/common/WhatsAppButton';
import Footer from './components/common/Footer';

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
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/pan-blanco" element={<PanBlanco />} />
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
