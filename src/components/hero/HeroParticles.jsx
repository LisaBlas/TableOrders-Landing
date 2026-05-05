import { useEffect, useRef } from 'react';

/**
 * Canvas particle animation for hero section
 * Ported from main.js lines 23-103
 */
export default function HeroParticles() {
  const canvasRef = useRef(null);
  const animIdRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    // Gold palette for particles
    const goldColors = [
      [218, 162, 119],  // base accent
      [232, 183, 142],  // lighter gold
      [200, 150, 90],   // deeper gold
      [240, 200, 140],  // bright gold
    ];

    function resizeCanvas() {
      const hero = canvas.parentElement;
      canvas.width = hero.offsetWidth;
      canvas.height = hero.offsetHeight;
      createParticles();
    }

    function createParticles() {
      particlesRef.current = [];
      const count = Math.floor((canvas.width * canvas.height) / 6000);

      for (let i = 0; i < count; i++) {
        const color = goldColors[Math.floor(Math.random() * goldColors.length)];
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.6 + 0.3,
          dx: (Math.random() - 0.5) * 0.2,
          dy: (Math.random() - 0.5) * 0.2,
          opacity: Math.random() * 0.4 + 0.08,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.01 + 0.003,
          color
        });
      }
    }

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particlesRef.current) {
        p.x += p.dx;
        p.y += p.dy;
        p.pulse += p.pulseSpeed;

        // Wrap around viewport boundaries
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const currentOpacity = p.opacity + Math.sin(p.pulse) * 0.18;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color[0]}, ${p.color[1]}, ${p.color[2]}, ${Math.max(0, currentOpacity)})`;
        ctx.fill();
      }

      animIdRef.current = requestAnimationFrame(drawParticles);
    }

    // Initialize
    resizeCanvas();
    drawParticles();

    // Handle resize
    window.addEventListener('resize', resizeCanvas);

    // Pause when not visible (IntersectionObserver)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!animIdRef.current) drawParticles();
        } else {
          if (animIdRef.current) {
            cancelAnimationFrame(animIdRef.current);
            animIdRef.current = null;
          }
        }
      },
      { threshold: 0 }
    );

    const heroSection = canvas.parentElement;
    if (heroSection) observer.observe(heroSection);

    // Cleanup
    return () => {
      if (animIdRef.current) {
        cancelAnimationFrame(animIdRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      observer.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="hero__particles" id="heroParticles" />;
}
