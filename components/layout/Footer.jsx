"use client";
import Container from "../common/Container";
import Link from "next/link";
import Image from "next/image";
import useGsapReveal from "@/hooks/useGsapReveal";
import { useRef } from "react";

export default function Footer() {
  const sectionRef = useRef(null);
  useGsapReveal(sectionRef);

  return (
    <footer ref={sectionRef} className="bg-[#071522] pt-14 lg:pt-30 pb-8">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-12 text-white">
          <div className="col-span-2 lg:col-span-5 pr-8 reveal-card">
            <Link href="/" className="inline-block mb-4 sm:mb-6">
               <Image
                src="/logo.svg"
                alt="Logo"
                width={120}
                height={48}
                className="cursor-pointer"
              />
            </Link>
            
            <p className="text-[#B4B8BC] leading-relaxed max-w-sm sm:text-base text-sm">
              NORMORA is a family-owned company dedicated to helping businesses grow through financial expertise and data-driven insights.
            </p>
          </div>

          <div className="lg:col-span-2 reveal-card">
            <h4 className="text-lg lg:text-xl font-semibold mb-3 lg:mb-8">Menu</h4>
            <ul className="flex flex-col text-sm lg:text-base gap-4 text-[#B4B8BC]">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="#benefits" className="hover:text-primary transition-colors">Benefits</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2 reveal-card">
            <h4 className="text-lg lg:text-xl font-semibold mb-3 lg:mb-8">Quick Link</h4>
             <ul className="flex flex-col text-sm lg:text-base gap-4 text-[#B4B8BC]">
              <li><Link href="#faq" className="hover:text-primary transition-colors">FAQs</Link></li>
              <li><Link href="#testimonial" className="hover:text-primary transition-colors">Testimonial</Link></li>
              <li><Link href="/404" className="hover:text-primary transition-colors">404</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3 reveal-card">
            <h4 className="text-lg lg:text-xl font-semibold mb-3 lg:mb-8">Contacts</h4>
             <ul className="flex flex-col text-sm lg:text-base gap-4 text-[#B4B8BC]">
              <li>
                <a href="mailto:Hello@Normora.Com" className="hover:text-primary transition-colors">Hello@Normora.Com</a>
              </li>
              <li>
                <a href="tel:+324XX XXX XXX" className="hover:text-primary transition-colors">+32 4XX XXX XXX</a>
              </li>
              <li>
                <span className="block">Antwerp, Belgium</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#1F2937] flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[#B4B8BC]">
            © 2025 NORMORA. All Rights Reserved.
          </p>

          <div className="flex items-center gap-2">
            <a href="#">
                <Image
                src="/linkedin.svg"
                alt="Logo"
                width={44}
                height={44}
                className="cursor-pointer"
              />
            </a>
            <a href="#">
                <Image
                src="/twitter.svg"
                alt="Logo"
                width={44}
                height={44}
                className="cursor-pointer"
              />
            </a>
            <a href="#">
                <Image
                src="/instagram.svg"
                alt="Logo"
                width={44}
                height={44}
                className="cursor-pointer"
              />
            </a>
          </div>

          <a href="#" className="text-[#B4B8BC] hover:text-white transition-colors">
            Privacy Policy
          </a>
        </div>
      </Container>
    </footer>
  );
}