"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["ABOUT", "VISION", "INDEX"];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-blue/80 shadow-md backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="SCI Logo"
            width={42}
            height={42}
            className="rounded-full"
          />
          <span className="text-xl font-bold text-white tracking-wide">
            MON6900
          </span>
        </div>

        {/* Right Section (X & Telegram) */}
        <div className="flex items-center space-x-4">
          {/* Logo X */}
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-110"
          >
            <Image
              src="/logo_x.png" // ganti dengan path icon X kamu
              alt="X Logo"
              width={42}
              height={42}
            />
          </a>

          {/* Logo Telegram */}
          <a
            href="https://t.me"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-110"
          >
            <Image
              src="/logo_tele.png" // ganti dengan path icon Telegram kamu
              alt="Telegram Logo"
              width={42}
              height={42}
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
