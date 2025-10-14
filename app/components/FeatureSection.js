"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);

  // Observer buat animasi fade-in
  useEffect(() => {
    const ref = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref) observer.observe(ref);
    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, []);

  // Animasi background bebas (bintang bergerak pelan)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const stars = Array.from({ length: 60 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      radius: Math.random() * 1.5,
      speed: Math.random() * 0.3 + 0.2,
    }));

    function drawStars() {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "rgba(255,255,255,0.6)";
      for (const s of stars) {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function updateStars() {
      for (const s of stars) {
        s.y += s.speed;
        if (s.y > h) {
          s.y = 0;
          s.x = Math.random() * w;
        }
      }
    }

    function animate() {
      drawStars();
      updateStars();
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Gambar-gambar fitur
  const features = [
    { src: "/gambar 1.png", alt: "Market Intelligence" },
    { src: "/gambar 2.png", alt: "Innovation Protocol" },
    { src: "/gambar3.png", alt: "Cultural Vision" },
    { src: "/gambar 4.jpg" },
    { src: "/gambar 5.jpg" },
    { src: "/gambar 6.jpg" },
  ];

  return (
    <section
      ref={sectionRef}
      id="vision"
      className="relative min-h-screen flex flex-col items-center justify-center py-24 px-6 text-white overflow-hidden"
    >
      {/* Canvas animasi background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full bg-gradient-to-b from-black via-[#1a1025] to-[#2a0a3a] z-0"
      />

      {/* Konten utama */}
      <div className="relative z-10 flex flex-col items-center mb-16 space-y-4">
        <Image
          src="/logo.png"
          alt="Logo"
          width={150}
          height={150}
          className="rounded-full"
        />
        <h2 className="text-4xl md:text-5xl font-bold text-center tracking-tight">
          Engineering the Future of Value
        </h2>
      </div>

      {/* Grid gambar */}
      <div
        className={`relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
          >
            <Image
              src={feature.src}
              alt={feature.alt || "Feature"}
              width={600}
              height={400}
              className="object-cover w-full h-72 md:h-80"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
