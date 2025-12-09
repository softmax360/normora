import Hero from "@/components/sections/Hero";
import MissionSection from "@/components/sections/Mission";
import HowWork from "@/components/sections/HowWork";
import CoreValue from "@/components/sections/CoreValue";
import WhyChoose from "@/components/sections/WhyChoose";
import Impact from "@/components/sections/Impact";
import Clients from "@/components/sections/Clients";
import Projects from "@/components/sections/Projects";
import Brands from "@/components/sections/Brands";
import FAQ from "@/components/sections/FAQ";
import CallToAction from "@/components/sections/CallToAction";


export default function Home() {
  return (
    <>
      <Hero />
      <MissionSection />
      <HowWork />
      <CoreValue />
      <WhyChoose />
      <Impact />
      <Clients />
      <Projects />
      <Brands />
      <FAQ />
      <CallToAction />
    </>
  );
}
