"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Resources", href: "/resources" },
  { name: " Webflow Templates", href: "/webflow-templates" },

  { name: " Bootstrap Templates", href: "/bootstrap-templates" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full flex justify-center absolute top-0 left-0 z-[50] ">
      <div className="max-w-7xl w-full flex items-center justify-between p-4 md:p-6">
        <div className="flex justify-center items-center gap-9">

        <Link href="/">
          <Image
            src="https://cdn.prod.website-files.com/6333c43995273d509e9a2a16/6333d0835a429e3eff006c27_webestica.svg"
            alt="Logo"
            width={130}
            height={40}
            />
        </Link>

        <nav className="hidden md:flex items-center space-x-8 font-medium">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-white hover:text-[#7ED0FF] duration-300">
              {link.name}
            </Link>
          ))}
        </nav>

          </div>
        <div className="hidden md:block">
          <button className="px-4 py-2 rounded-lg border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/20 duration-300">
            Contact Us
          </button>
        </div>

        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-[70px] w-full bg-black/90 p-6 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white block py-3 border-b border-white/10 text-xl"
            >
              {link.name}
            </Link>
          ))}

          <button className="mt-5 w-full py-3 rounded-lg bg-white text-black font-semibold">
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
};
export default Navbar;
