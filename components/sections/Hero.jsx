"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Container from "../common/Container";
import Button from "../common/Button";
import useGsapReveal from "@/hooks/useGsapReveal";

export default function Hero() {
  const sectionRef = useRef(null);
  useGsapReveal(sectionRef);

  return (
    <section ref={sectionRef} className="w-full md:py-10 lg:py-20 bg-white relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          <div className="space-y-4">
            <div className="inline-flex font-medium items-center text-sm gap-2 reveal-other">
              <Image src="/title-star.svg" width={20} height={20} alt="icon" />
              <span>Driving your growth: strategic partner in finance and data</span>
            </div>

            <h1 className="reveal-other text-4xl lg:text-5xl xl:text-[56px] font-semibold leading-tight text-display">
              Driving your growth by leveraging finance and data
            </h1>

            <p className="reveal-other text-body lg:text-lg leading-relaxed">
              NORMORA acts as your on-demand CFO & analytics partner — financial strategy,
              forecasting and data systems so founders can focus on growth.
            </p>

            <div className="reveal-other flex flex-wrap items-center gap-4 mt-8">
              <Button as="a" type="primary" href="#contact" className="grow sm:flex-none">
                Let's Grow Together
              </Button>

              <Button as="a" type="outline" href="#contact" className="grow sm:flex-none">
                <Image src="/video-icon.svg" width={20} height={20} alt="icon" />
                Book a 15-minute Call
              </Button>
            </div>

            <div className="reveal-card flex items-center gap-4 pt-4">
              <Image src="/users.svg" width={168} height={48} alt="Secure" className="rounded-full" />
              <p className="text-body font-medium text-sm md:text-lg">
                Trusted by over <br /> 250K+ users
              </p>
            </div>

            <div className="reveal-card pt-10">
              <div className="flex flex-wrap items-center justify-center md:justify-between gap-4">
                <Image src="/brand-1.svg" width={66} height={28} alt="brand" />
                <Image src="/brand-2.svg" width={168} height={28} alt="brand" />
                <Image src="/brand-3.svg" width={72} height={28} alt="brand" />
                <Image src="/brand-4.svg" width={90} height={36} alt="brand" />
              </div>
            </div>
          </div>

          <div className="reveal-card lg:absolute top-0 right-0">
            <Image
              src="/hero-right.svg"
              fill
              alt="Normora hero image"
              className="relative! hidden lg:block object-cover lg:w-[500px]! xl:w-[700px]! h-full"
            />
            <Image
              src="/mobile-hero-right.svg"
              fill
              alt="Normora hero image"
              className="relative! lg:hidden object-cover w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
