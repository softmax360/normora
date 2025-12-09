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
            className="relative! w-full"
          />
        </div>

        <div className="reveal-card grid grid-cols-1 sm:grid-cols-3 gap-8">
          {coreValues.map((value) => (
            <div
              key={value.id}
              className="text-center"
            >
              <div className="w-24 h-24 inline-flex justify-center items-center rounded-full bg-white mb-4">
                <Image
                  src={value.icon}
                  alt={value.title}
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="text-2xl font-semibold text-display mb-2">
                {value.title}
              </h3>
              <p className="text-body">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
