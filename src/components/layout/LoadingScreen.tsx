import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ backgroundColor: '#E8B84D' }}
    >
      {/* Logo */}
      <motion.img
        src="/images/logos/001_WnY_CMYK@4x.png"
        alt="HO LEE BAO"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain mb-6"
        style={{ filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.15))' }}
      />

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-3"
        style={{ textShadow: '0 2px 20px rgba(0,0,0,0.2)' }}
      >
        HO LEE BAO
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-white/80 text-lg tracking-wide"
      >
        Fresh Steamed Baos
      </motion.p>

      {/* Simple loading dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="flex gap-2 mt-8"
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.15,
              ease: 'easeInOut',
            }}
            className="w-3 h-3 rounded-full bg-white/60"
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
