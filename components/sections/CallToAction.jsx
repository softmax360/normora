"use client";
import Button from "../common/Button";
import Image from "next/image";
import useGsapReveal from "@/hooks/useGsapReveal";
import { useRef } from "react";

export default function CallToAction() {
  const sectionRef = useRef(null);
  useGsapReveal(sectionRef);

  return (
    <section ref={sectionRef} className="bg-surface px-6 relative z-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[65%] after:z-0 after:bg-gradient-to-t after:from-[#071522] after:from-50% after:to-transparent after:to-100%">
        <div className="bg-[#0A1E50] rounded-lg p-6 sm:p-12 lg:p-24 text-center relative overflow-hidden border border-[#1F2937] z-1 after:absolute after:inset-0 after:z-0 after:bg-gradient-to-b after:from-[#fff] after:to-transparent after:opacity-[0.10]">
          
          <div className="absolute bottom-0 left-0 w-full z-0 opacity-20 hover:opacity-30 transition-opacity duration-700 reveal-card">
            <Image 
            src="/particals.svg" 
            width={100}
            height={100} 
            alt="Normora CTA image" 
            className="absolute object-contain w-auto h-auto left-[50%] bottom-0 translate-x-[-50%]" 
            />
          </div>

          <div className="relative z-10 lg:max-w-2xl mx-auto reveal-card">
            <h2 className="text-3xl lg:text-5xl font-semibold text-white mb-2 sm:mb-6">
              Let's Grow Together
            </h2>
            <p className="text-white lg:text-lg mb-12 leading-relaxed">
              Whether You're Preparing For Your Next Round, Optimizing Profitability, Or Unlocking Data-Driven Growth — We're Ready When You Are.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8 reveal-card">
              <Button as="a" type="primary" href="#contact" className="grow sm:flex-none">
                Let's Grow Together
              </Button>

              <Button as="a" type="outline" href="#contact" className="grow sm:flex-none">
                <Image src="/video-icon.svg" width={20} height={20} alt="icon" />
                Book a 15-minute Call
              </Button>
            </div>
          </div>
        </div>
    </section>
  );
}
