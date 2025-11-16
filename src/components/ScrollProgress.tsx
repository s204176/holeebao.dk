import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const sections = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Menu', id: 'menu' },
    { name: 'Location', id: 'location' },
    { name: 'Order', id: 'order' }
  ];

  const handleDotClick = (id: string) => {
    const element = document.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-bao-golden via-yellow-500 to-orange-500 origin-left z-[100]"
        style={{ scaleX }}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 blur-sm bg-gradient-to-r from-bao-golden via-yellow-500 to-orange-500 opacity-60" />

        {/* Animated sparkles on the progress bar */}
        <motion.div
          className="absolute right-0 top-1/2 w-4 h-4 bg-white rounded-full"
          style={{
            y: '-50%',
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)',
            left: useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 1,
            repeat: Infinity
          }}
        />
      </motion.div>

      {/* Scroll indicator dots on the side */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[100] hidden md:flex flex-col gap-4">
        {sections.map((section, index) => {
          const progress = useTransform(scrollYProgress, [0, 1], [0, sections.length]);
          const isActive = useTransform(progress, (value) => value >= index && value < index + 1);
          const isPassed = useTransform(progress, (value) => value >= index);

          return (
            <motion.div
              key={section.id}
              className="group flex items-center gap-3"
              whileHover={{ scale: 1.2 }}
            >
              <span className="text-sm font-semibold text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                {section.name}
              </span>
              <motion.div
                className="w-3 h-3 rounded-full cursor-pointer"
                style={{
                  backgroundColor: useTransform(isPassed, (passed) => passed ? '#E8B84D' : '#d1d5db'),
                  boxShadow: useTransform(isPassed, (passed) => passed ? '0 0 15px rgba(232, 184, 77, 0.6)' : 'none')
                }}
                animate={{
                  scale: isActive.get() ? [1, 1.5, 1] : 1
                }}
                transition={{
                  duration: 0.3,
                  repeat: isActive.get() ? Infinity : 0
                }}
                onClick={() => handleDotClick(section.id)}
              />
            </motion.div>
          );
        })}
      </div>
    </>
  );
}
