"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useGsapReveal(sectionRef) {
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll(".reveal-card");
    const other = section.querySelectorAll(".reveal-other");

    // Initial State
    if (cards.length) gsap.set(cards, { autoAlpha: 0, y: 40 });
    if (other.length) gsap.set(other, { autoAlpha: 0, y: 40 });

    // Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none",
        once: true,
      },
    });

    if (other.length) {
      tl.to(other, {
        duration: 0.7,
        autoAlpha: 1,
        y: 0,
        ease: "power2.out",
        stagger: 0.15,
      });
    }

    if (cards.length) {
      tl.to(
        cards,
        {
          duration: 0.7,
          autoAlpha: 1,
          y: 0,
          ease: "power2.out",
          stagger: 0.2,
        },
        "-=0.3" // overlap animations
      );
    }

    // FIX: Next/Image layout shift
    const imgs = section.querySelectorAll("img");
    let loaded = 0;

    imgs.forEach((img) => {
      if (img.complete) {
        loaded++;
      } else {
        img.addEventListener("load", () => {
          loaded++;
          if (loaded === imgs.length) ScrollTrigger.refresh();
        });
        img.addEventListener("error", () => {
          loaded++;
          if (loaded === imgs.length) ScrollTrigger.refresh();
        });
      }
    });

    if (loaded === imgs.length) ScrollTrigger.refresh();

    // Cleanup
    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, [sectionRef]);
}
