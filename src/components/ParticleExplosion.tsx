import { motion, useAnimationFrame } from 'framer-motion';
import { useRef, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
  hue: number;
}

export default function ParticleExplosion() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particleIdRef = useRef(0);

  const createExplosion = (x: number, y: number) => {
    const newParticles: Particle[] = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount;
      const velocity = 2 + Math.random() * 4;

      newParticles.push({
        id: particleIdRef.current++,
        x,
        y,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity,
        life: 1,
        size: 2 + Math.random() * 4,
        hue: 40 + Math.random() * 20 // Golden colors
      });
    }

    setParticles(prev => [...prev, ...newParticles]);
  };

  useAnimationFrame((time, delta) => {
    setParticles(prev =>
      prev
        .map(p => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy,
          vy: p.vy + 0.1, // gravity
          life: p.life - 0.015
        }))
        .filter(p => p.life > 0)
    );
  });

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    createExplosion(e.clientX - rect.left, e.clientY - rect.top);
  };

  return (
    <div
      className="fixed inset-0 pointer-events-none z-30"
      onClick={handleClick}
      style={{ pointerEvents: 'all' }}
    >
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            backgroundColor: `hsl(${p.hue}, 100%, 60%)`,
            opacity: p.life,
            boxShadow: `0 0 ${p.size * 2}px hsl(${p.hue}, 100%, 60%)`
          }}
        />
      ))}
    </div>
  );
}
