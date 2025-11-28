"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const [copied, setCopied] = useState(false);

  const contractAddress = "0x75e11508A69901C5cAA55b091301C8B675dD7777";

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

        {/* Main Logo */}
        <div className="relative w-40 h-40 md:w-52 md:h-52 animate-fade-in-slow">
          <Image
            src="/sonicsm.png"
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

        {/* Sub-text */}
        <p className="text-gray-400 max-w-xl">
          Reimagining the financial singularity.
        </p>

        {/* Contract Address Capsule */}
        <div
          onClick={copyToClipboard}
          className="cursor-pointer mt-2 px-5 py-2 border border-blue-400/40 
                     rounded-full backdrop-blur-sm font-mono text-blue-300 text-sm
                     transition-all duration-300
                     hover:border-blue-300 hover:text-blue-200 
                     hover:shadow-[0_0_15px_rgba(96,165,250,0.4)] flex items-center gap-2"
        >
          <Copy size={16} />
          CA: {contractAddress}
        </div>

        {/* Copied Feedback */}
        {copied && (
          <div className="text-green-400 text-sm mt-1 flex items-center gap-1 animate-pulse">
            <Check size={16} /> Copied!
          </div>
        )}
      </div>
    </section>
  );
}
