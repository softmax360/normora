"use client";

import { useState } from "react";
import Container from "../common/Container";
import Button from "../common/Button";
import Image from "next/image";
import Link from "next/link";
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
    <header className="w-full bg-white">
      <Container>
        <div className="flex items-center justify-between py-4">

          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={120}
              height={40}
              className="cursor-pointer"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
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
          <div className="hidden lg:block">
            <Button as="a" type="secondary" href="#contact">
              Get in Touch
            </Button>
          </div>

          <button
            className="lg:hidden w-12 h-12 bg-dark rounded-full inline-flex justify-center items-center border border-gray-400 relative z-[0] after:content-[''] after:absolute after:inset-0 after:z-[-1] after:rounded-full after:bg-gradient-to-b after:from-white after:to-transparent after:opacity-[0.28]"
            onClick={() => setOpen(!open)}
          >
            <svg
              className="w-7 h-7 text-white"
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

      {/* === Mobile Menu === */}
      {open && (
        <nav className="lg:hidden bg-white border-t border-gray-200 px-4 pb-4">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block py-2 text-gray-700 hover:text-primary transition font-medium"
            >
              {item.name}
            </a>
          ))}

          <Button as="a" type="secondary" href="#contact">
            Get in Touch
          </Button>
        </nav>
      )}
    </header>
  );
}
