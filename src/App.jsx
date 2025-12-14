import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import ReactPixel from 'react-facebook-pixel';

// Importing components
import ScrollToTopOnNavigate from './components/ScrollToTopOnNavigate';
import TrustBanner from './components/TrustBanner/TrustBanner';
import Header from './components/Header/Header';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Footer from './components/Footer/Footer';

// Importing page components
import Home from './pages/Home/Home';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import ThankYou from './pages/ThankYou/ThankYou';
import NotFound from './pages/NotFound/NotFound';
import AboutUs from './pages/AboutUs/AboutUs';
import PolicyShipping from './pages/PolicyShipping/PolicyShipping';
import PolicyReturn from './pages/PolicyReturn/PolicyReturn';

// Importing styles
import './App.css';

function App() {
  const location = useLocation();

  useEffect(() => {
    ReactPixel.pageView();
  }, [location]);

  return (
    <>
      <ScrollToTopOnNavigate />
      <TrustBanner />
      <Header />

      <div className="App" dir='rtl'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/shipping-policy" element={<PolicyShipping />} />
          <Route path="/return-policy" element={<PolicyReturn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <WhatsAppButton />
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;