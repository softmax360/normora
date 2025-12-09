"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import SectionTitle from "../common/SectionTitle";
import brandsData from "@/data/brands";

export default function Brands() {
  return (
    <section className="py-12 lg:py-[120px] bg-[#071522] relative">
        <div className="text-center mb-12">
          <SectionTitle toptitle="Trusted by Industry Leaders" variant="dark" />
        </div>

        <div className="w-full relative">
          <div className="mb-8">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              centeredSlides={true}
              speed={5000}
              autoplay={{
                delay: 1,
                disableOnInteraction: false,
                reverseDirection: false,
              }}
              loop={true}
              slidesPerView="auto"
              allowTouchMove={false}
              className="brands-swiper"
              breakpoints={{
                 640: { slidesPerView: 3, spaceBetween: 40 },
                 768: { slidesPerView: 4, spaceBetween: 50 },
                 1024: { slidesPerView: 5, spaceBetween: 60 }
              }}
            >
              {brandsData.map((brand) => (
                <SwiperSlide key={brand.id} style={{ width: "auto" }}>
                  <div className="flex items-center justify-center opacity-100">
                    <div className="text-white text-xl font-bold flex items-center gap-2">
                      <Image 
                        src={brand.logo} 
                        alt={brand.name} 
                        width={100} 
                        height={48} 
                        objectFit="contain"
                        className="w-full"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          
          <div>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              centeredSlides={true}
              speed={5000}
              autoplay={{
                delay: 1,
                disableOnInteraction: false,
                reverseDirection: true,
              }}
              loop={true}
              slidesPerView="auto"
              allowTouchMove={false}
              className="brands-swiper"
               breakpoints={{
                 640: { slidesPerView: 3, spaceBetween: 40 },
                 768: { slidesPerView: 4, spaceBetween: 50 },
                 1024: { slidesPerView: 5, spaceBetween: 60 }
              }}
            >
              {brandsData.map((brand) => (
                <SwiperSlide key={brand.id} style={{ width: "auto" }}>
                  <div className="flex items-center justify-center">
                    <div className="text-white text-xl font-bold flex items-center gap-2">
                      <Image 
                        src={brand.logo} 
                        alt={brand.name} 
                        width={100} 
                        height={48} 
                        objectFit="contain"
                        className="w-full"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="absolute inset-y-0 left-0 w-[20%] bg-gradient-to-r from-[#071522] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-[20%] bg-gradient-to-l from-[#071522] to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}
