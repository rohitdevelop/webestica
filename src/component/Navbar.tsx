"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Resources", href: "#resources" },
    { name: "Webflow Templates", href: "#webflow-templates" },
    { name: "Bootstrap Templates", href: "#bootstrap-templates" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 shadow-lg backdrop-blur-xl border-b border-white/10"
          : "bg-black/90 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 md:p-6">
        
        {/* Left Section: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://cdn.prod.website-files.com/6333c43995273d509e9a2a16/6333d0835a429e3eff006c27_webestica.svg"
            alt="Webestica Logo"
            width={130}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {/* Navigation Links */}
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-indigo-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <Link
            href="#contact"
            className="px-5 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-90 transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10">
          <ul className="flex flex-col space-y-4 p-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-indigo-400 transition block py-2"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Contact Button for Mobile */}
            <li>
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-5 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
