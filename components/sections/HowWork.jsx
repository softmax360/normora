"use client";
import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import howItWorksItems from "@/data/howItWorksItems";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";

gsap.registerPlugin(ScrollTrigger);

export default function HowWork() {
  useEffect(() => {
    const cardsWrappers = gsap.utils.toArray(".how-work-item-wrapper");
    const cards = gsap.utils.toArray(".how-work-item");

    cardsWrappers.forEach((wrapper, i) => {
      const card = cards[i];
      let scale = 1,
        rotation = 0;

      if (i !== cards.length - 1) {
        scale = 0.8 + 0.025 * i;
        rotation = -10;
      }

      gsap.to(card, {
        scale: scale,
        rotationX: rotation,
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "top " + (60 + 70 * i),
          end: "bottom 550",
          endTrigger: ".how-work-wrapper",
          scrub: true,
          pin: wrapper,
          pinSpacing: false,
          id: i + 1,
        },
      });
    });
  }, []);

  return (
    <section className="py-12 lg:py-[120px] bg-[#071522] relative overflow-hidden z-1">
      <Container>
        <SectionTitle
          toptitle="How we help"
          title="How we drive your growth"
          subtitle="Strategic financial guidance and analytics insights without the commitment to a full-time headcount. We partner with you from Seed to Exit"
          variant="dark"
        />
        <div className="space-y-20 how-work-wrapper">
          {howItWorksItems.map((item, index) => (
            <div key={item.id} className="how-work-item-wrapper">
              <div className={`how-work-item flex flex-col lg:flex-row items-center gap-10 rounded-md border border-[#AFBFCD] ${
                  index % 2 === 1 ? "bg-surface" : "bg-white"
                }`}
              >
                <div className="w-[440px] flex justify-center items-center">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={271}
                    height={224}
                    className="rounded-xl"
                  />
                </div>

                {/* Text Content */}
                <div className="flex-1 flex py-6 pr-12 items-start gap-3">
                  <Image
                    src={item.imgIcon}
                    alt={item.title}
                    width={36}
                    height={36}
                    className="rounded-xl"
                  />
                  <div className="flex-1">
                    <h3 className="text-3xl font-semibold text-display mb-4">
                      {item.title}
                    </h3>
                    <p className="text-body mb-8">
                      {item.description}
                    </p>

                    {/* Points */}
                    <ul className="space-y-4">
                      {item.points.map((point) => (
                        <li key={point.id} className="flex flex-col">
                          <h6 className="text-lg font-semibold text-display mb-1">
                            {point.title}
                          </h6>
                          <p className="text-body">
                            {point.description}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <Button as="a" type="primary" href="#contact" className="grow sm:flex-none">
            Let's Grow Together
          </Button>

          <Button as="a" type="outline" href="#contact" className="grow sm:flex-none">
            <Image src="/video-icon.svg" width={20} height={20} alt="icon" />
            Book a 15-minute Call
          </Button>
        </div>
      </Container>
      <Image src="/wave-bg-3.svg" alt="wave" fill className="absolute !bottom-0 left-0 !top-auto !h-auto !w-full z-[-1]" />
    </section>
  );
}
