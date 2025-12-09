"use client";
import { useState, useRef } from "react";
import Container from "../common/Container";
import Button from "../common/Button";
import faqData from "@/data/faq";
import { clsx } from "clsx";
import useGsapReveal from "@/hooks/useGsapReveal";

export default function FAQ() {
  const sectionRef = useRef(null);
  useGsapReveal(sectionRef);

  const [openId, setOpenId] = useState(1);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section ref={sectionRef} className="py-12 lg:py-[120px] bg-surface">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-6 reveal-card">
            <div className="mb-4">
               <span className="py-2 px-4 rounded-3xl leading-none  text-gray-600 bg-white">
                 FAQ
               </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-semibold text-display mb-6 lg:mb-10">
              Got questions? We've got answers.
            </h2>
            <p className="text-body lg:text-lg mb-4">
              Got queries? Reach out with Your Questions!
            </p>
            <Button as="a" href="#contact" type="primary">
              Let's Chat!
            </Button>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-4 reveal-card">
            {faqData.map((item) => (
              <div 
                key={item.id} 
                className="border border-[#D8DEE2] rounded-lg overflow-hidden transition-all duration-300 bg-white"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-lg lg:text-xl font-semibold text-display pr-8">
                    {item.question}
                  </span>
                  <span 
                    className={clsx(
                        "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300",
                        openId === item.id ? "bg-[#0F3858] text-white" : "bg-[#0F3858] text-white"
                    )}
                  >
                     {openId === item.id ? (
                        <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="14" height="2" rx="1" fill="currentColor"/>
                        </svg>
                     ) : (
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 8H0V6H6V0H8V6H14V8H8V14H6V8Z" fill="currentColor"/>
                        </svg>
                     )}
                  </span>
                </button>
                
                <div 
                    className={clsx(
                        "grid transition-[grid-template-rows] duration-300 ease-out",
                        openId === item.id ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}
                >
                    <div className="overflow-hidden">
                        <div className="p-6 pt-0 text-body text-sm lg:text-base leading-relaxed">
                            {item.answer}
                        </div>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
