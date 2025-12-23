import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from './components/layout/Navigation';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import LocationPage from './pages/LocationPage';
import LoadingScreen from './components/layout/LoadingScreen';
import Threads from './components/effects/Threads';
import FloatingBaos from './components/effects/FloatingBaos';

export default function AppRouter() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loading screen for 2.6 seconds on initial load (matches animation duration)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loading" />
      ) : (
        <BrowserRouter key="main">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative min-h-screen bg-bao-golden overflow-x-hidden"
          >
            {/* Threads Effect - Fixed Background */}
            <div className="fixed inset-0 z-0">
              <Threads
                color={[1, 1, 1]}
                amplitude={0.6}
                distance={1}
                enableMouseInteraction={true}
              />
            </div>

            {/* Floating Background Shapes */}
            <FloatingBaos />

            {/* Navigation */}
            <Navigation />

            {/* Page Content */}
            <div className="relative z-10 pt-20">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/location" element={<LocationPage />} />
              </Routes>
            </div>
          </motion.div>
        </BrowserRouter>
      )}
    </AnimatePresence>
  );
}
