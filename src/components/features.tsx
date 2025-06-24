"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Feature1 from "../../public/feature1.jpg";
import Feature2 from "../../public/feature2.jpg";
import asana from "../../public/asana.png";
import behance from "../../public/behance.png";
import fiverr from "../../public/fiverr.png";
import slack from "../../public/slack.png";
import trello from "../../public/trello.png";
import upwork from "../../public/upwork.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
export default function Features() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-black text-white relative overflow-hidden">
      {/* Background glow effects */}
      {/* <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-2 sm:left-10 w-40 h-40 sm:w-80 sm:h-80 bg-[#bff74797] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-2 sm:right-10 w-48 h-48 sm:w-96 sm:h-96 bg-[#bff74797] rounded-full blur-3xl"></div>
      </div> */}

      <div className="container mx-auto lg:px-32 px-6 relative z-10">
        {/* Top Section */}
        <div className="mb-10 sm:mb-16">
          <div className="grid gap-8 md:gap-12 items-center md:grid-cols-2">
            <div>
              {/* Section Label */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 mb-6"
              >
                <span className="text-[#bff747] text-lg">✱</span>
                <span className="text-[#bff747] font-medium tracking-wider">
                  FEATURES
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-normal leading-tight mb-6 sm:mb-8"
              >
                Innovative <span className="text-[#bff747]">features</span>
                <br />
                for your digital
                <br />
                success
              </motion.h2>
            </div>

            <div>
              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-gray-400 leading-relaxed text-base sm:text-lg mb-6 sm:mb-8"
              >
                Our digital services empower brands with innovative strategies
                and cutting-edge solutions designed to drive growth and success.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
              >
                <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base">
                  Learn More
                </button>

                <button className="bg-[#bff747] hover:bg-lime-500 text-black w-12 h-12 sm:w-14 sm:h-14 rounded-full p-0 transition-all duration-300 hover:scale-110 flex items-center justify-center">
                  <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="flex lg:flex-row flex-col gap-6 sm:gap-8 mb-12 sm:mb-20">
          {/* Custom Branding Solutions Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group lg:w-[40vw]"
          >
            <div className="bg-gray-900/50 border border-gray-800 rounded-3xl overflow-hidden hover:border-[#bff747]/50 transition-all duration-300 hover:bg-gray-800/50 p-10 ">
              <div className="relative overflow-hidden">
                <Image
                  src={Feature1}
                  alt="Team collaborating on custom branding solutions"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 hover:rounded-xl rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#bff747] transition-colors duration-300">
                  Custom Branding Solutions
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Tailored branding strategies that reflect your unique identity
                  and resonate with your target audience for maximum impact.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Data-Driven Digital Marketing Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="group lg:w-[30vw]"
          >
            <div className="bg-gray-900/50 border border-gray-800 rounded-3xl overflow-hidden hover:border-[#bff747]/50 transition-all duration-300 hover:bg-gray-800/50 p-10">
              <div className="relative overflow-hidden">
                <Image
                  src={Feature2}
                  alt="Data-driven digital marketing analytics"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 hover:rounded-xl rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#bff747] transition-colors duration-300">
                  Data-Driven Digital Marketing
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Strategic marketing campaigns backed by comprehensive data
                  analysis to maximize ROI and drive measurable growth.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Content Creation Section */}
        <div className="grid gap-8 md:gap-12 items-center md:grid-cols-2 mb-10 sm:mb-16">
          <div>
            {/* Heading */}
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4 sm:mb-6"
            >
              Content Creation And Strategy
            </motion.h3>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-400 leading-relaxed text-base sm:text-lg"
            >
              Comprehensive content marketing strategies designed to captivate
              and retain audiences.
            </motion.p>
          </div>

          <div className="flex justify-center">
            {/* Circular Progress/Logo */}
            <motion.div
             initial={{ rotate: 0 }}
             animate={{ rotate: 360 }}
             transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
             className="-ml-10 -z-10 w-32 h-32 rounded-full"
            >
              <div className="relative w-20 h-20 sm:w-16 sm:h-16">
                {/* Outer ring with text */}
                <div className="inset-0 rounded-full w-32 h-32">
                  <svg className="w-32 h-32" viewBox="0 0 120 120">
                    <defs>
                      <path
                        id="circle-path"
                        d="M 60, 60 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
                      />
                    </defs>
                    <text className="text-xs fill-gray-400 font-medium">
                      <textPath href="#circle-path" startOffset="0%">
                        LEARN MORE • LEARN MORE • LEARN MORE •
                      </textPath>
                    </text>
                  </svg>
                </div>
                {/* Inner circle with play button */}
               <div className="w-32 h-32 rounded-full flex items-center justify-center absolute left-0 top-0 bottom-0 right-0">
               <ArrowUpRight className=" h-5 w-5 sm:h-6 sm:w-6" />
               </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Partner Logos */}
        <div>
          <div className="mt-8 sm:mt-12">
            <Swiper
              spaceBetween={10}
              slidesPerView={2}
              breakpoints={{
                640: { slidesPerView: 3, spaceBetween: 20 },
                768: { slidesPerView: 4, spaceBetween: 30 },
                1024: { slidesPerView: 5, spaceBetween: 30 },
              }}
              loop={true}
              autoplay={true}
            >
              <SwiperSlide>
                <div className="flex-shrink-0 bg-[#1a1a1a] rounded-2xl p-5 flex items-center justify-center min-w-[200px] h-20">
                  <Image
                    src={upwork}
                    alt="Partner logo"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex-shrink-0 bg-[#1a1a1a] rounded-2xl p-5 flex items-center justify-center min-w-[200px] h-20">
                  <Image
                    src={asana}
                    alt="Partner logo"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex-shrink-0 bg-[#1a1a1a] rounded-2xl p-5 flex items-center justify-center min-w-[200px] h-20">
                  <Image
                    src={behance}
                    alt="Partner logo"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex-shrink-0 bg-[#1a1a1a] rounded-2xl p-5 flex items-center justify-center min-w-[200px] h-20">
                  <Image
                    src={fiverr}
                    alt="Partner logo"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex-shrink-0 bg-[#1a1a1a] rounded-2xl p-5 flex items-center justify-center min-w-[200px] h-20">
                  <Image
                    src={slack}
                    alt="Partner logo"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex-shrink-0 bg-[#1a1a1a] rounded-2xl p-5 flex items-center justify-center min-w-[200px] h-20">
                  <Image
                    src={trello}
                    alt="Partner logo"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        
      </div>
    </section>
  );
}
