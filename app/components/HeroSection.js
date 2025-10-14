"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "0xc8976d31824c6133b5fd5c2906d7a1d2da624444";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-b from-[#5b21b6] via-[#3b0764] to-black text-white overflow-hidden"
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center space-y-6 px-4">
        {/* Main Logo on Top */}
        <div className="relative w-40 h-40 md:w-52 md:h-52 animate-fade-in-slow">
          <Image
            src="/sonicsm.png" // pastikan file logo kamu disimpan di /public/logo.png
            alt="SSE6900 Logo"
            fill
            className="object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            priority
          />
        </div>

        {/* Title */}
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">
          <span className="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent animate-pulse">
            MON6900
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl font-medium italic text-gray-200">
          The Future is Indexed.
        </p>

        <p className="text-gray-400 max-w-xl">
          Reimagining the financial singularity.
        </p>
      </div>
    </section>
  );
}
