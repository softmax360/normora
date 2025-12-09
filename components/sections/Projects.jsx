"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Button from "../common/Button";
import { clsx } from "clsx";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import projectsData, { projectsCategories } from "@/data/projects";
import useGsapReveal from "@/hooks/useGsapReveal";

export default function Projects() {
  const sectionRef = useRef(null);
  useGsapReveal(sectionRef);

  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredData = activeCategory === "All Projects" 
    ? projectsData 
    : projectsData.filter(item => item.categories.includes(activeCategory));

  return (
    <section ref={sectionRef} className="py-12 lg:py-[120px] bg-surface">
      <Container>
        <div className="reveal-other">
          <SectionTitle
          toptitle="Our Projects"
          title="Our Impact in Action"
          subtitle="We help startups, scaleups, and corporates build sustainable financial growth with data-backed decisions. Here are a few of our recent success stories."
          variant="light"
        />
        </div>

        <div className="reveal-card flex justify-center mb-6 lg:mb-10">
          <div className="inline-flex bg-linear-to-bl from-[#EDF0F3] to-[#F5FBFF] rounded-full shadow-sm">
            {projectsCategories.map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={clsx(
                  "px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer",
                  index === 0 && "rounded-r-none",
                  index === projectsCategories.length - 1 && "rounded-l-none",
                  activeCategory === category
                    ? "bg-linear-to-b from-[#1774ff0d] to-[#1774ff40] text-display"
                    : "text-body hover:text-display"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="reveal-card flex flex-col gap-6">
          {filteredData.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-lg overflow-hidden border border-[#D8DEE2] flex flex-col lg:flex-row hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-4 lg:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="mb-4">
                    <span className="inline-block px-4 py-1.5 border border-gray-200 rounded-full bg-surface text-body">
                      {item.tag}
                    </span>
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-semibold text-display mb-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-body mb-8 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                <div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-7 pt-6 border-t border-[#E2E8F0]">
                    {item.stats.map((stat, idx) => (
                      <div key={idx}>
                        <div className="text-3xl font-light text-display mb-1">{stat.value}</div>
                        <div className="text-sm text-body">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  <Button as="a" type="primary" href={item.link}>
                    View Case Study
                  </Button>
                </div>
              </div>
              
              <div className="lg:w-[35%] bg-[#EDF5F5] flex items-center justify-center p-12 min-h-[300px]">
                 <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item.tag}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-auto h-auto"
                    />
                 </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button as="a" type="primary" href="#contact">
            See All Projects
          </Button>
        </div>
      </Container>
    </section>
  );
}
