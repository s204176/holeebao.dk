import { motion, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Menu', id: 'menu' },
    { name: 'Location', id: 'location' },
    { name: 'Order', id: 'order' }
  ];

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const section = Math.floor(latest * sections.length);
      setActiveSection(Math.min(section, sections.length - 1));
    });
    return () => unsubscribe();
  }, [scrollYProgress, sections.length]);

  const handleDotClick = (id: string) => {
    const element = document.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Scroll indicator dots on the side */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[100] hidden md:flex flex-col gap-4">
        {sections.map((section, index) => {
          const isActive = index === activeSection;
          const isPassed = index <= activeSection;

          return (
            <motion.div
              key={section.id}
              className="group flex items-center gap-3 justify-end"
              whileHover={{ scale: 1.2 }}
            >
              <span className="text-sm font-bold text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-3 py-1 rounded-full shadow-lg border-2 border-gray-800">
                {section.name}
              </span>
              <motion.div
                className={`w-4 h-4 rounded-full cursor-pointer border-2 ${
                  isPassed ? 'bg-gray-900 border-gray-900' : 'bg-white border-gray-400'
                }`}
                style={{
                  boxShadow: isPassed ? '0 0 20px rgba(0, 0, 0, 0.5)' : 'none'
                }}
                animate={{
                  scale: isActive ? [1, 1.4, 1] : 1
                }}
                transition={{
                  duration: 0.5,
                  repeat: isActive ? Infinity : 0
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
