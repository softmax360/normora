"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import impactData from "@/data/impact";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import { clsx } from "clsx";
import useGsapReveal from "@/hooks/useGsapReveal";

export default function Impact() {
  const [activeTab, setActiveTab] = useState(0);

  const sectionRef = useRef(null);
  useGsapReveal(sectionRef);

  return (
    <section ref={sectionRef} className="py-12 lg:py-[120px] w-full bg-surface">
      <Container>
        <div className="reveal-other">
          <SectionTitle
          toptitle="Clients & Impact"
          title="Made for founders ready to scale."
          subtitle="NORMORA partners with ambitious founders and teams who've outgrown basic bookkeeping and need real financial clarity and data-driven insight."
          variant="light"
        />
        </div>

        <div className="reveal-card grid lg:grid-cols-12 gap-6 lg:gap-8">
          <div className="lg:col-span-4 flex flex-col gap-4 lg:gap-6">
            {impactData.map((item, index) => (
              <div
                key={item.id}
                className={clsx(
                  "bg-white cursor-pointer rounded-lg p-5 border border-[#D8DEE2]",
                  activeTab === index
                    ? "bg-white flex-1"
                    : "bg-white"
                )}
                onClick={() => setActiveTab(index)}
              >
                <div className="flex items-start gap-3 lg:gap-4">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-semibold text-[#071522]">{item.title}</h3>
                    <div 
                        className={clsx( "overflow-hidden transition-all duration-500 ease-in-out",
                            activeTab === index ? "max-h-[200px] opacity-100 mt-2" : "max-h-0 opacity-0"
                        )}
                    >
                        <p className="text-body text-sm lg:text-base leading-relaxed">
                            {item.shortDescription}
                        </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="lg:col-span-8">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 h-full">
                  <div className="reveal-card relative h-full w-full flex flex-col gap-3 order-2 lg:order-1">
                    <div className="bg-white flex-1 rounded-lg hidden sm:flex justify-center items-center">
                      <Image
                        src={impactData[activeTab].image}
                        alt={impactData[activeTab].title}
                        width={252}
                        height={260}
                        objectFit="cover"
                      />
                    </div>
                    <Image
                      src="/mobile-impact.svg"
                      alt="image image"
                      width={100}
                      height={100}
                      objectFit="cover"
                      className="w-full h-auto"
                    />

                    <p className="text-display lg:text-base text-sm">
                      {impactData[activeTab].footerText}
                    </p>
                  </div>

                  <div className="space-y-5 reveal-card bg-white p-4 lg:p-6 rounded-lg border border-[#D8DEE2] order-1 lg:order-2">
                      <div className="pb-5 border-b border-[#D8DEE2]">
                        <Image
                          src="/impact-icon-1.svg"
                          alt="Challenge"
                          width={32}
                          height={32}
                        />
                        <h4 className="font-semibold text-sm lg:text-base text-display mt-2">Challenge</h4>
                        <p className="text-body text-sm lg:text-base">{impactData[activeTab].challenge}</p>
                      </div>

                      <div className="pb-5 border-b border-[#D8DEE2]">
                          <Image
                          src="/impact-icon-2.svg"
                          alt="Challenge"
                          width={32}
                          height={32}
                        />
                        <h4 className="font-semibold text-sm lg:text-base text-display mt-2">What They Need</h4>
                        <p className="text-body text-sm lg:text-base">{impactData[activeTab].whatTheyNeed}</p>
                      </div>

                      <div className="pb-5">
                          <Image
                          src="/impact-icon-3.svg"
                          alt="Challenge"
                          width={32}
                          height={32}
                        />
                        <h4 className="font-semibold text-sm lg:text-base text-display mt-2">How We Help</h4>
                        <p className="text-body text-sm lg:text-base lg:mt-0 mt-1">{impactData[activeTab].howWeHelp}</p>
                      </div>
                  </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
