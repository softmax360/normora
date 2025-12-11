"use client";
import { useEffect, useRef } from "react";
import missions from "@/data/missions";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";
import Image from "next/image";
import useGsapReveal from "@/hooks/useGsapReveal";

export default function MissionSection() {
  const sectionRef = useRef(null);
    useGsapReveal(sectionRef);

  return (
    <section ref={sectionRef} className="animation-section py-12 lg:py-[120px] bg-surface">
      <Container>
        <div className="reveal-other">
          <SectionTitle
            toptitle="Our Mission & Company"
            title="Your strategic growth partner"
            subtitle="At NORMORA, we help founders scale without distraction. We provide deep financial and data insights so you can focus on growing your business ।"
            variant="light"
          />
        </div>

        <div className="reveal-card grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {missions.map((mission, index) => {
            const marginMap = ["", "xl:translate-y-10", "xl:translate-y-20", "xl:translate-y-30"];

            return (
              <div
                key={mission.id}
                className={`bg-white rounded-xl border border-[#D8DEE2] py-6 px-5 hover:shadow-lg transition ${marginMap[index]}`}
              >
                <Image
                  src={mission.img}
                  alt={mission.title}
                  width={48}
                  height={48}
                  className="mb-6"
                />
                <h3 className="text-xl sm:text-2xl font-semibold text-display">
                  {mission.title}
                </h3>
                <p className="text-body mt-4">
                  {mission.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="reveal-card bg-white rounded-xl border border-[#D8DEE2] text-center flex flex-col items-center p-6 mt-6 xl:mt-36">
          <Image
            src="./trust.svg"
            alt="Trustworthy image"
            width={90}
            height={122}
            className="mb-6 hidden md:block"
          />
          <Image
            src="./mobile-trust.svg"
            alt="Trustworthy image"
            width={80}
            height={80}
            className="mb-6 md:hidden"
          />
          <h6 className="font-bold">Trustworthy:</h6>
          <p className="max-w-lg mx-auto">You can rely on us for accurate insights and guidance.</p>
          <p className="max-w-2xl mx-auto lg:px-2">
            Analytical: We turn complex data into actionable strategies. Growth-Oriented: Your success drives ours.
          </p>
        </div>

        <div className="reveal-card flex flex-wrap items-center justify-center gap-4 mt-8">
          <Button as="a" type="primary" href="#contact" className="grow sm:flex-none">
            Let's Grow Together
          </Button>

          <Button as="a" type="outline" href="#contact" className="grow sm:flex-none">
            <Image src="/video-icon.svg" width={20} height={20} alt="icon" />
            Book a 15-minute Call
          </Button>
        </div>
      </Container>
    </section>
  );
}
