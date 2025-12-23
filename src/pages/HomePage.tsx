import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SteamEffect from '../components/effects/SteamEffect';
import TiltWrapper from '../components/effects/TiltWrapper';
import Typewriter from '../components/ui/Typewriter';
import ShinyText from '../components/ui/ShinyText';

export default function HomePage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center px-6 bg-bao-golden relative overflow-hidden">
      {/* Hero Section */}
      <div className="text-center max-w-6xl w-full relative z-10">
        {/* Massive Logo with Enhanced Steam */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="relative mb-12 inline-block"
        >
          <div className="relative w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] md:w-[700px] md:h-[700px] flex items-center justify-center mx-auto">
            {/* Enhanced Steam Effect */}
            <div className="absolute inset-0 scale-150">
              <SteamEffect />
            </div>

            {/* Massive golden glow */}
            <div className="absolute inset-0 bg-gradient-radial from-bao-golden/40 via-bao-golden/20 to-transparent rounded-full blur-3xl scale-125" />

            {/* Logo */}
            <div className="relative z-10">
              <TiltWrapper>
                <img
                  src="/images/logos/001_WnY_CMYK@4x.png"
                  alt="HO LEE BAO"
                  className="w-full h-full object-contain drop-shadow-2xl"
                  style={{
                    filter: 'drop-shadow(0 0 30px rgba(232, 184, 77, 0.7)) drop-shadow(0 0 60px rgba(232, 184, 77, 0.4))',
                  }}
                />
              </TiltWrapper>
            </div>
          </div>
        </motion.div>

        {/* HO LEE BAO Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        >
          <h1 className="text-white font-display font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-8 tracking-wider">
            HO LEE BAO
          </h1>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="text-white/70 text-sm font-medium"
          >
            <div className="flex flex-col items-center gap-2">
              <span>Scroll to explore</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
