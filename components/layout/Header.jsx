"use client";

import { useState } from "react";
import Container from "../common/Container";
import Button from "../common/Button";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "How we help", href: "#how" },
    { name: "Why us", href: "#features" },
    { name: "Clients & Impact", href: "#clients" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="w-full bg-white sticky top-0 z-40">
      <Container>
        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={120}
              height={40}
              className="cursor-pointer"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary transition font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button as="a" type="secondary" href="#contact">
              Get in Touch
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            <svg
              className="w-7 h-7 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden bg-white border-t border-gray-200 px-4 pb-4">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block py-2 text-gray-700 hover:text-primary transition font-medium"
            >
              {item.name}
            </a>
          ))}

          <a
            href="#contact"
            className="mt-2 block text-center px-5 py-2 rounded-md bg-primary text-white font-semibold hover:bg-primary/90 transition"
          >
            Get Started
          </a>
        </nav>
      )}
    </header>
  );
}
