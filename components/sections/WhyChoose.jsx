"use client";
import Image from "next/image";
import reasons from "@/data/reasons";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";
import useGsapReveal from "@/hooks/useGsapReveal";
import { useRef } from "react";

export default function WhyChoose() {
  const sectionRef = useRef(null);
    useGsapReveal(sectionRef);

  return (
    <section ref={sectionRef} className="py-12 lg:py-[120px] w-full bg-[#071522] text-white relative z-0">
      <Container>
        <div className="reveal-other">
          <SectionTitle
          toptitle="Why us"
          title="Beyond consulting: A partnership"
          variant="dark"
        />
        </div>

        <div className="reveal-card mt-16 grid gap-10 grid-cols-12 items-start">
          <div className="space-y-6 col-span-6">
            {reasons.map((value, idx) => (
              <div
                key={idx}
                className="group flex items-start gap-4 rounded-lg p-3 transition"
              >
                <div className="w-16 h-16 rounded-full bg-white/10 flex justify-center items-center">
                  <Image
                    src={value.icon}
                    alt={value.title}
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex-1">
                  <p className="text-2xl font-semibold">{value.title}</p>
                  <p className="mt-1 text-[#D8DEE2]">{value.description}</p>
                </div>
              </div>
            ))}

            <div className="flex flex-wrap items-center gap-4 mt-4">
              <Button as="a" type="primary" href="#contact" className="grow sm:flex-none">
                Let's Grow Together
              </Button>

              <Button as="a" type="outline" href="#contact" className="grow sm:flex-none">
                <Image src="/video-icon.svg" width={20} height={20} alt="icon" />
                Book a 15-minute Call
              </Button>
            </div>
          </div>

          <div className="col-span-6 flex flex-col items-end">
            <Image
              src="/choose-1.svg"
              alt="Why Choose Image"
              width={403}
              height={217}
              className="ml-auto"
            />
            <Image
              src="/choose-2.svg"
              alt="Why Choose Image"
              width={487}
              height={202}
              className="mr-14 -mt-12"
            />
          </div>
        </div>
      </Container>

      <Image src="/wave-bg-1.svg" alt="wave" fill className="absolute !bottom-0 left-0 !top-auto !h-auto !w-full z-[-1]" />
    </section>
  );
}
