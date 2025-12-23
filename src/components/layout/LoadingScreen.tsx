import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 2.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-bao-golden overflow-hidden"
    >
      {/* Golden Glow - Behind everything */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: [0, 0.3, 1, 1, 0],
          scale: [0.8, 1, 1.8, 1.8, 1.8]
        }}
        transition={{
          times: [0, 0.3, 0.5, 0.88, 1],
          duration: 2.6,
          ease: 'easeOut'
        }}
        className="absolute inset-0 flex items-center justify-center z-0"
      >
        <div className="w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] md:w-[1000px] md:h-[1000px] rounded-full bg-gradient-radial from-yellow-100 via-yellow-200/70 to-transparent blur-3xl" />
      </motion.div>

      {/* Logo Split Container */}
      <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] z-10">
        {/* Top Half - Opens Upward */}
        <motion.div
          initial={{ y: 0, opacity: 0, scale: 1 }}
          animate={{
            y: [0, 0, '-40vh', '-40vh'],
            opacity: [0, 0.7, 0.6, 0],
            scale: [0.9, 1, 0.8, 0.8]
          }}
          transition={{
            times: [0, 0.19, 0.62, 1],
            duration: 3.2,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="absolute inset-0"
          style={{
            clipPath: 'inset(0 0 50% 0)'
          }}
        >
          <img
            src="/images/logos/001_WnY_CMYK@4x.png"
            alt="HO LEE BAO Top"
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Bottom Half - Opens Downward */}
        <motion.div
          initial={{ y: 0, opacity: 0, scale: 1 }}
          animate={{
            y: [0, 0, '40vh', '40vh'],
            opacity: [0, 0.7, 0.6, 0],
            scale: [0.9, 1, 0.8, 0.8]
          }}
          transition={{
            times: [0, 0.19, 0.62, 1],
            duration: 3.2,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="absolute inset-0"
          style={{
            clipPath: 'inset(50% 0 0 0)'
          }}
        >
          <img
            src="/images/logos/001_WnY_CMYK@4x.png"
            alt="HO LEE BAO Bottom"
            className="w-full h-full object-contain"
          />
        </motion.div>
      </div>

      {/* Center Text - Revealed in gap */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{
          opacity: [0, 1, 1, 0],
          scale: [0.7, 1, 1, 1]
        }}
        transition={{
          times: [0, 0.35, 0.875, 1],
          duration: 3.2,
          delay: 1.2,
          ease: 'easeOut'
        }}
        className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none"
      >
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-display font-bold text-white mb-2">
          HO LEE BAO
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{
            times: [0, 0.19, 0.875, 1],
            duration: 3.2,
            delay: 2.2
          }}
          className="text-xl sm:text-2xl text-white/80"
        >
          蒸包
        </motion.p>
      </motion.div>

      {/* Steam Burst Effect */}
      <div className="absolute inset-0 z-8 pointer-events-none flex items-center justify-center">
        {/* Ambient Steam (before opening) */}
        {[...Array(12)].map((_, i) => {
          const randomOffset = (Math.random() - 0.5) * 60;
          return (
            <motion.div
              key={`ambient-${i}`}
              initial={{
                y: 0,
                x: randomOffset,
                opacity: 0,
                scale: 0.4
              }}
              animate={{
                y: [-50, -600],
                x: randomOffset + (Math.random() - 0.5) * 100,
                opacity: [0, 0.6, 0.5, 0],
                scale: [0.4, 1.2, 1.8, 2.2]
              }}
              transition={{
                times: [0, 0.25, 0.7, 1],
                duration: 2 + Math.random() * 1,
                repeat: Infinity,
                delay: i * 0.12,
                ease: 'easeOut'
              }}
              className="absolute w-12 h-12 rounded-full bg-white/70 blur-md"
            />
          );
        })}

        {/* Burst Steam (when opening) - Larger particles */}
        {[...Array(18)].map((_, i) => {
          const randomSpread = (Math.random() - 0.5) * 180;
          return (
            <motion.div
              key={`burst-${i}`}
              initial={{
                y: 0,
                x: 0,
                opacity: 0,
                scale: 0.6
              }}
              animate={{
                y: [-80, -700],
                x: randomSpread,
                opacity: [0, 0.9, 0.8, 0],
                scale: [0.6, 1.8, 2.5, 3.0]
              }}
              transition={{
                times: [0, 0.2, 0.7, 1],
                duration: 1.6,
                delay: 1.0 + (i * 0.06),
                ease: 'easeOut'
              }}
              className="absolute w-16 h-16 rounded-full bg-white/80 blur-lg"
            />
          );
        })}

        {/* Extra burst effect - massive clouds */}
        {[...Array(8)].map((_, i) => {
          const randomSpread = (Math.random() - 0.5) * 200;
          return (
            <motion.div
              key={`cloud-${i}`}
              initial={{
                y: 0,
                x: 0,
                opacity: 0,
                scale: 0.8
              }}
              animate={{
                y: [-100, -750],
                x: randomSpread,
                opacity: [0, 0.7, 0.6, 0],
                scale: [0.8, 2.2, 3.0, 3.5]
              }}
              transition={{
                times: [0, 0.15, 0.65, 1],
                duration: 1.8,
                delay: 1.0 + (i * 0.1),
                ease: 'easeOut'
              }}
              className="absolute w-24 h-24 rounded-full bg-white/60 blur-2xl"
            />
          );
        })}
      </div>
    </motion.div>
  );
}
