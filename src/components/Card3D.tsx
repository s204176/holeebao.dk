import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState, useRef, MouseEvent } from 'react';

interface Card3DProps {
  children: React.ReactNode;
  backContent?: React.ReactNode;
  className?: string;
  canFlip?: boolean;
}

export default function Card3D({ children, backContent, className = '', canFlip = false }: Card3DProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 300, damping: 30 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const percentX = (e.clientX - centerX) / (rect.width / 2);
    const percentY = (e.clientY - centerY) / (rect.height / 2);

    x.set(percentX);
    y.set(percentY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleClick = () => {
    if (canFlip) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={{
        perspective: 1000
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <motion.div
        style={{
          rotateX: isFlipped ? 180 : rotateX,
          rotateY: isFlipped ? 180 : rotateY,
          transformStyle: 'preserve-3d'
        }}
        transition={{
          duration: isFlipped ? 0.6 : 0.1,
          type: isFlipped ? 'spring' : 'tween'
        }}
        whileHover={{
          scale: 1.05,
          z: 50,
          transition: { duration: 0.2 }
        }}
        className="w-full h-full relative"
      >
        {/* Front */}
        <div
          className="absolute inset-0 backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {children}
        </div>

        {/* Back */}
        {canFlip && backContent && (
          <div
            className="absolute inset-0 backface-hidden"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)'
            }}
          >
            {backContent}
          </div>
        )}

        {/* Glow effect */}
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-bao-golden/50 to-yellow-600/50 rounded-3xl blur-xl opacity-0"
          whileHover={{ opacity: 0.6 }}
          transition={{ duration: 0.3 }}
          style={{ zIndex: -1 }}
        />
      </motion.div>
    </motion.div>
  );
}
