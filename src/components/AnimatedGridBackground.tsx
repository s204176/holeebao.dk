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

    // Configuration
    const dotSpacing = 40;
    const dotRadius = 1.5;
    const maxConnectionDistance = 150;
    const goldenColor = '#E8B84D';
    const goldenLight = '#F5CF6B';

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

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw dots
      dots.forEach((dot) => {
        // Subtle floating animation
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Bounce back to base position
        const dx = dot.baseX - dot.x;
        const dy = dot.baseY - dot.y;
        dot.x += dx * 0.05;
        dot.y += dy * 0.05;

        // Mouse interaction - repel dots
        const mdx = mouseX - dot.x;
        const mdy = mouseY - dot.y;
        const mouseDistance = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mouseDistance < 100) {
          const force = (100 - mouseDistance) / 100;
          dot.x -= (mdx / mouseDistance) * force * 3;
          dot.y -= (mdy / mouseDistance) * force * 3;
        }

        // Draw dot
        const distanceToMouse = Math.sqrt(
          (mouseX - dot.x) ** 2 + (mouseY - dot.y) ** 2
        );
        const opacity = distanceToMouse < 150 ? 0.6 : 0.15;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dotRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232, 184, 77, ${opacity})`;
        ctx.fill();
      });

      // Draw connections
      dots.forEach((dot, i) => {
        dots.slice(i + 1).forEach((otherDot) => {
          const dx = dot.x - otherDot.x;
          const dy = dot.y - otherDot.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxConnectionDistance) {
            const opacity = (1 - distance / maxConnectionDistance) * 0.15;

            // Golden gradient for connections
            const gradient = ctx.createLinearGradient(
              dot.x,
              dot.y,
              otherDot.x,
              otherDot.y
            );
            gradient.addColorStop(0, `rgba(232, 184, 77, ${opacity})`);
            gradient.addColorStop(0.5, `rgba(245, 207, 107, ${opacity})`);
            gradient.addColorStop(1, `rgba(232, 184, 77, ${opacity})`);

            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(otherDot.x, otherDot.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
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
