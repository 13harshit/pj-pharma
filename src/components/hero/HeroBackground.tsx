import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

export const MolecularBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const particleCount = Math.min(80, Math.floor(window.innerWidth / 20));
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2,
    }));

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      particles.forEach((particle, i) => {
        // Mouse interaction
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const force = (150 - dist) / 150;
          particle.vx -= (dx / dist) * force * 0.02;
          particle.vy -= (dy / dist) * force * 0.02;
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Boundary check
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(8, 145, 178, ${particle.opacity})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j];
          const distance = Math.sqrt(
            (particle.x - other.x) ** 2 + (particle.y - other.y) ** 2
          );
          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(8, 145, 178, ${0.15 * (1 - distance / 120)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
};

export const FloatingOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large gradient orb */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-radial from-primary/30 via-accent/10 to-transparent blur-3xl"
        animate={{
          x: [0, 100, 50, 0],
          y: [0, -50, 100, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: '-20%', right: '-10%' }}
      />
      
      {/* Secondary orb */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-gradient-radial from-accent/20 via-primary/5 to-transparent blur-2xl"
        animate={{
          x: [0, -80, 40, 0],
          y: [0, 80, -40, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{ bottom: '-10%', left: '-5%' }}
      />

      {/* Small accent orbs */}
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-primary/40 blur-xl"
        animate={{
          y: [0, -30, 0],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: '30%', left: '20%' }}
      />

      <motion.div
        className="absolute w-24 h-24 rounded-full bg-accent/30 blur-lg"
        animate={{
          y: [0, 20, 0],
          x: [0, 10, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{ top: '60%', right: '25%' }}
      />
    </div>
  );
};

export const DNAHelix = () => {
  const points = 20;
  
  return (
    <div className="absolute right-10 top-1/2 -translate-y-1/2 h-[400px] w-20 hidden lg:block">
      <div className="relative h-full">
        {Array.from({ length: points }).map((_, i) => {
          const progress = i / points;
          const delay = progress * 2;
          
          return (
            <motion.div
              key={i}
              className="absolute left-1/2"
              style={{ top: `${progress * 100}%` }}
              animate={{
                x: [
                  Math.sin(progress * Math.PI * 2) * 30 - 15,
                  Math.sin(progress * Math.PI * 2 + Math.PI) * 30 - 15,
                  Math.sin(progress * Math.PI * 2) * 30 - 15,
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay,
              }}
            >
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent opacity-60" />
            </motion.div>
          );
        })}
        
        {/* Connecting lines */}
        {Array.from({ length: points - 1 }).map((_, i) => {
          const progress = i / points;
          return (
            <motion.div
              key={`line-${i}`}
              className="absolute left-1/2 -translate-x-1/2 w-px h-4 bg-gradient-to-b from-primary/30 to-accent/30"
              style={{ top: `${progress * 100 + 2}%` }}
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: progress * 2,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
