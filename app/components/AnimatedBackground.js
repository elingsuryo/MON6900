"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.body.scrollHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // === Particle System ===
    const particles = [];
    const particleCount = 50;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 60 + 20;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.3 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.shadowBlur = 30;
        ctx.shadowColor = "rgba(255, 215, 0, 0.5)";
        ctx.fillStyle = `rgba(255, 215, 0, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <>
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full -z-10"
      />

      {/* Waves Animation */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
        <svg
          className="w-full"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 Q300,0 600,50 T1200,50 L1200,100 L0,100 Z"
            fill="rgba(255, 215, 0, 0.05)"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                M0,50 Q300,0 600,50 T1200,50 L1200,100 L0,100 Z;
                M0,50 Q300,100 600,50 T1200,50 L1200,100 L0,100 Z;
                M0,50 Q300,0 600,50 T1200,50 L1200,100 L0,100 Z
              "
            />
          </path>
        </svg>

        <svg
          className="w-full"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,70 Q300,30 600,70 T1200,70 L1200,100 L0,100 Z"
            fill="rgba(255, 165, 0, 0.03)"
          >
            <animate
              attributeName="d"
              dur="15s"
              repeatCount="indefinite"
              values="
                M0,70 Q300,30 600,70 T1200,70 L1200,100 L0,100 Z;
                M0,70 Q300,110 600,70 T1200,70 L1200,100 L0,100 Z;
                M0,70 Q300,30 600,70 T1200,70 L1200,100 L0,100 Z
              "
            />
          </path>
        </svg>
      </div>
    </>
  );
}
