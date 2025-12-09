"use client";
import Image from "next/image";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import clientsData from "@/data/clients";
import useGsapReveal from "@/hooks/useGsapReveal";
import { useRef } from "react";

export default function Clients() {
  const sectionRef = useRef(null);
  useGsapReveal(sectionRef);

  return (
    <section ref={sectionRef} className="py-12 lg:py-[120px] bg-[#071522] overflow-hidden relative z-0">
      <Container>
        <div className="text-center mb-4 relative z-10">
          <div className="reveal-other">
            <SectionTitle
            toptitle="Clients"
            title="Who We Serve Best!"
            variant="dark"
          />
          </div>
          
          <div className="flex flex-col items-center justify-center relative">
             <div className="relative z-10">
                 <h3 className="text-xl font-bold text-primary uppercase">NORMORA</h3>
                 <div className="h-[1px] w-full bg-primary mt-1"></div>
             </div>
             <Image
                src="/items-arrow.svg"
                alt="Normora"
                width={1200}
                height={117}
              />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative z-10 pt-8">
          {clientsData.map((client, index) => (
            <div key={client.id} className="flex flex-col items-center text-center group reveal-card">
              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 relative z-10">
                 <Image
                    src={client.icon}
                    alt={client.category}
                    width={100}
                    height={100}
                    className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]"
                  />
              </div>

              <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-6">
                {client.category}
              </h3>

              <Image
                src={client.image}
                alt={client.category}
                width={100}
                height={100}
                sizes="100vw"
                className="w-full h-auto mb-6"
              />

              <h4 className="text-xl lg:text-2xl font-semibold text-white mb-3">
                {client.title}
              </h4>
              
              <p className="text-white text-sm lg:text-base leading-relaxed">
                {client.description}
              </p>
            </div>
          ))}
        </div>
      </Container>

      <Image src="/wave-bg-2.svg" alt="wave" fill className="absolute !bottom-0 left-0 !top-auto !h-auto !w-full z-[-1]" />
    </section>
  );
}
