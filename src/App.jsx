import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import WhatsAppButton from './components/WhatsAppButton';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';

function AnimatedRoutes({ onOpenQuoteModal }) {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage onOpenQuoteModal={onOpenQuoteModal} />} />
          <Route path="/about" element={<AboutPage onOpenQuoteModal={onOpenQuoteModal} />} />
          <Route path="/solutions" element={<ServicesPage onOpenQuoteModal={onOpenQuoteModal} />} />
          <Route path="/solutions/:slug" element={<ServiceDetailPage onOpenQuoteModal={onOpenQuoteModal} />} />
          <Route path="/careers" element={<CareersPage onOpenQuoteModal={onOpenQuoteModal} />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const handleOpenQuoteModal = () => {
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen bg-paper text-ink font-sans flex flex-col justify-between overflow-x-hidden">
        <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

        <main className="flex-grow">
          <AnimatedRoutes onOpenQuoteModal={handleOpenQuoteModal} />
        </main>

        <Footer />

        <QuoteModal
          isOpen={isQuoteModalOpen}
          onClose={handleCloseQuoteModal}
        />

        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}
