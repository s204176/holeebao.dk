import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  animationType?: 'wave' | 'bounce' | 'rotate' | 'scale' | 'glitch';
}

export default function AnimatedText({
  text,
  className = '',
  delay = 0,
  duration = 0.05,
  stagger = 0.03,
  animationType = 'wave'
}: AnimatedTextProps) {
  const characters = text.split('');

  const getAnimation = (index: number) => {
    const animations = {
      wave: {
        initial: { y: 0 },
        animate: {
          y: [0, -20, 0],
          transition: {
            duration: 0.6,
            delay: delay + index * stagger,
            repeat: Infinity,
            repeatDelay: 2
          }
        }
      },
      bounce: {
        initial: { y: -100, opacity: 0 },
        animate: {
          y: 0,
          opacity: 1,
          transition: {
            type: 'spring',
            damping: 12,
            stiffness: 200,
            delay: delay + index * stagger
          }
        }
      },
      rotate: {
        initial: { rotate: -180, opacity: 0 },
        animate: {
          rotate: 0,
          opacity: 1,
          transition: {
            duration: 0.6,
            delay: delay + index * stagger,
            ease: 'backOut'
          }
        }
      },
      scale: {
        initial: { scale: 0, opacity: 0 },
        animate: {
          scale: 1,
          opacity: 1,
          transition: {
            type: 'spring',
            damping: 10,
            stiffness: 100,
            delay: delay + index * stagger
          }
        }
      },
      glitch: {
        initial: { x: 0, y: 0 },
        animate: {
          x: [0, -2, 2, -2, 2, 0],
          y: [0, 2, -2, 2, -2, 0],
          transition: {
            duration: 0.3,
            delay: delay + index * stagger,
            repeat: 1
          }
        }
      }
    };

    return animations[animationType];
  };

  return (
    <div className={`inline-block ${className}`}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          {...getAnimation(index)}
          whileHover={{
            scale: 1.2,
            color: '#E8B84D',
            transition: { duration: 0.2 }
          }}
          className="inline-block"
          style={{
            display: char === ' ' ? 'inline' : 'inline-block',
            marginRight: char === ' ' ? '0.25em' : '0'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );
}
