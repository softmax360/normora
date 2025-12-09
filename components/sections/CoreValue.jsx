"use client";
import Image from "next/image";
import coreValues from "@/data/coreValues";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import useGsapReveal from "@/hooks/useGsapReveal";
import { useRef } from "react";

export default function CoreValue() {
  const sectionRef = useRef(null);
  useGsapReveal(sectionRef);

  return (
    <section ref={sectionRef} className="py-12 lg:py-[120px] bg-surface">
      <Container>
        <div className="reveal-other">
          <SectionTitle
          toptitle="Core Values"
          title="How we help you scale with clarity"
          subtitle="Tailored to your company's stage, our Finance-as-a-Service and Analytics-as-a-Service free you to focus on what you do best: driving growth."
          variant="light"
        />
        </div>
        
        <div className="reveal-card mb-16">
          <Image
            src="/core-value-main.svg"
            alt="Core Values Illustration"
            fill
            className="relative! w-full hidden lg:block"
          />
          <Image
            src="/mobile-core-value.png"
            alt="Core Values Illustration"
            fill
            className="relative! w-full lg:hidden"
          />
        </div>

        <div className="reveal-card grid grid-cols-1 sm:grid-cols-3 gap-8">
          {coreValues.map((value) => (
            <div
              key={value.id}
              className="text-center"
            >
              <div className="w-16 h-16 lg:w-24 lg:h-24 inline-flex justify-center items-center rounded-full bg-white mb-4">
                <Image
                  src={value.icon}
                  alt={value.title}
                  width={100}
                  height={100}
                  className="w-[32px] h-[32px] lg:w-[48px] lg:h-[48px]"
                />
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold text-display mb-2">
                {value.title}
              </h3>
              <p className="text-body text-sm lg:text-base">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
