import { useEffect, useRef } from 'react';

export default function AnimatedGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Configuration - OPTIMIZED for performance
    const dotSpacing = 80; // Doubled spacing = 4x fewer dots
    const dotRadius = 1.5;
    const maxConnectionDistance = 120; // Reduced

    // Mouse position
    let mouseX = -1000;
    let mouseY = -1000;

    // Create grid of dots
    const dots: { x: number; y: number; baseX: number; baseY: number; vx: number; vy: number }[] = [];
    for (let x = 0; x < canvas.width + dotSpacing; x += dotSpacing) {
      for (let y = 0; y < canvas.height + dotSpacing; y += dotSpacing) {
        dots.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
        });
      }
    }

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop - HEAVILY OPTIMIZED
    let animationId: number;
    let frameCount = 0;

    const animate = () => {
      frameCount++;

      // Only clear and redraw every other frame (30fps instead of 60fps)
      if (frameCount % 2 !== 0) {
        animationId = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw dots - simplified
      dots.forEach((dot) => {
        // Subtle floating only
        dot.x += dot.vx * 0.3;
        dot.y += dot.vy * 0.3;

        // Bounce back to base
        dot.x += (dot.baseX - dot.x) * 0.05;
        dot.y += (dot.baseY - dot.y) * 0.05;

        // Draw dot with static opacity
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dotRadius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(232, 184, 77, 0.2)';
        ctx.fill();
      });

      // Draw connections - MUCH simpler, no gradients
      const goldenStroke = 'rgba(232, 184, 77, 0.1)';
      dots.forEach((dot, i) => {
        // Only check next 3 dots to limit calculations
        for (let j = i + 1; j < Math.min(i + 4, dots.length); j++) {
          const otherDot = dots[j];
          const dx = dot.x - otherDot.x;
          const dy = dot.y - otherDot.y;
          const distSq = dx * dx + dy * dy; // Skip sqrt for performance
          const maxDistSq = maxConnectionDistance * maxConnectionDistance;

          if (distSq < maxDistSq) {
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(otherDot.x, otherDot.y);
            ctx.strokeStyle = goldenStroke;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
