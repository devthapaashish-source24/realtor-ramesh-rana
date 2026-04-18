"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-lg md:text-xl font-semibold tracking-tight">
          Ramesh Rana
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#home"  className="
                text-gray-600 hover:text-black transition relative
                after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                after:w-0 after:bg-black after:transition-all after:duration-300
                hover:after:w-full
              "
>Home</Link>
          <Link href="#about"  className="
                text-gray-600 hover:text-black transition relative
                after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                after:w-0 after:bg-black after:transition-all after:duration-300
                hover:after:w-full
              "
>About</Link>
          <Link href="#services"  className="
                text-gray-600 hover:text-black transition relative
                after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                after:w-0 after:bg-black after:transition-all after:duration-300
                hover:after:w-full
              "
>Services</Link>
          <Link href="#testimonials"  className="
                text-gray-600 hover:text-black transition relative
                after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                after:w-0 after:bg-black after:transition-all after:duration-300
                hover:after:w-full
              "
>Testimonials</Link>
          <Link href="#contact"  className="
                text-gray-600 hover:text-black transition relative
                after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                after:w-0 after:bg-black after:transition-all after:duration-300
                hover:after:w-full
              "
>Contact</Link>
        </div>

        {/* Desktop CTA */}
       <a
        href="tel:+16474568442"
        className="hidden md:flex items-center gap-2 bg-black text-white px-5 py-2 rounded-full text-sm hover:bg-gray-800 transition"
        >
        <Phone size={18} />
        Call Me
        </a>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-gray-700 font-medium animate-slideDown">
          <Link href="/#hero" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/#about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/#services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/#testimonials" onClick={() => setOpen(false)}>Testimonials</Link>
          <Link href="/#contact" onClick={() => setOpen(false)}>Contact</Link>

          <a
            href="tel:+1XXXXXXXXXX"
            className="bg-black text-white px-4 py-2 rounded-lg text-center flex items-center justify-center gap-2"
            onClick={() => setOpen(false)}
            >
            <Phone size={18} />
            Call Me
        </a>
        </div>
      )}
    </nav>
  );
}