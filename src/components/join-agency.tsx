"use client";

import { motion } from "framer-motion";
import {
  Linkedin,
  Instagram,
  ArrowRight,
  Facebook,
} from "lucide-react";

export default function JoinAgency() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-black text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-2 sm:left-10 w-40 h-40 sm:w-80 sm:h-80 bg-lime-400/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-2 sm:right-10 w-48 h-48 sm:w-96 sm:h-96 bg-lime-400/2 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Join Agency Section */}
        <div className="mb-16 sm:mb-24 md:mb-32">
          <div className="grid gap-8 md:gap-12 items-start md:grid-cols-2">
            <div>
              {/* Section Label */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 mb-6"
              >
                <span className="text-lime-400 text-lg">✱</span>
                <span className="text-lime-400 font-medium tracking-wider">
                  JOIN AGENCY
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 sm:mb-8"
              >
                Join our <span className="text-lime-400">agency</span> of
                creative
                <br />
                innovators
              </motion.h2>
            </div>

            <div>
              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-gray-400 leading-relaxed text-base sm:text-lg"
              >
                Join our creative community to collaborate, innovate, and thrive
                together.
                <br />
                We welcome passionate individuals eager to make.
              </motion.p>
            </div>
          </div>

          {/* Social Media Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-0 sm:gap-x-8 lg:gap-x-[100px] mt-10 sm:mt-16 relative">
            <svg
              className="absolute top-1/2 left-0 w-full h-20 -translate-y-1/2 hidden lg:block"
              viewBox="0 0 1200 100"
              preserveAspectRatio="none"
            >
              <path
                d="M0,50 Q300,0 600,50 T1200,50"
                fill="none"
                stroke="#86c232"
                strokeWidth="1"
                strokeDasharray="5,5"
                className="opacity-20"
              ></path>
            </svg>
            {/* Facebook Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className=" relative">
                <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center absolute -top-5 left-0">
                  <Facebook className="h-6 w-6 text-black" />
                </div>
                <div className="flex items-center justify-between mb-4 p-8 gap-x-[20px] bg-gray-900/50 border border-gray-800 hover:border-lime-400/50 transition-all duration-300 hover:bg-gray-800/50 rounded-full">
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-lime-400 transition-colors duration-300">
                      Facebook
                    </h3>
                    <p className="text-gray-400 text-sm">@acciobyte</p>
                  </div>
                  <div className="w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center group-hover:border-lime-400 transition-colors duration-300">
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-lime-400" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* LinkedIn Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative">
                <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center absolute -top-5 left-0">
                  <Linkedin className="h-6 w-6 text-black" />
                </div>
                <div className="flex items-center justify-between gap-x-[20px] mb-4 bg-gray-900/50 border border-gray-800 rounded-full p-8 hover:border-lime-400/50 transition-all duration-300 hover:bg-gray-800/50">
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-lime-400 transition-colors duration-300">
                      LinkedIn
                    </h3>
                    <p className="text-gray-400 text-sm">@acciobyte</p>
                  </div>
                  <div className="w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center group-hover:border-lime-400 transition-colors duration-300">
                    <span className="text-xs text-gray-400 group-hover:text-lime-400">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Instagram Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative">
                <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center absolute -top-5 left-0">
                  <Instagram className="h-6 w-6 text-black" />
                </div>
                <div className="flex items-center justify-between gap-x-[20px] mb-4 rounded-full bg-gray-900/50 border border-gray-800 p-8 hover:border-lime-400/50 transition-all duration-300 hover:bg-gray-800/50">
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-lime-400 transition-colors duration-300">
                      Instagram
                    </h3>
                    <p className="text-gray-400 text-sm">@acciobyte</p>
                  </div>
                  <div className="w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center group-hover:border-lime-400 transition-colors duration-300">
                    <span className="text-xs text-gray-400 group-hover:text-lime-400">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* How It Works Section */}
        <div>
          <div className="grid gap-8 md:gap-12 items-center md:grid-cols-2 mb-10 sm:mb-16">
            <div>
              {/* Section Label */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 mb-6"
              >
                <span className="text-lime-400 text-lg">✱</span>
                <span className="text-lime-400 font-medium tracking-wider">
                  HOW IT WORK
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight"
              >
                Our proven{" "}
                <span className="text-lime-400 font-semibold">process</span>
                <br />
                for achieving
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
                className="text-gray-400 leading-relaxed text-base sm:text-lg"
              >
                Our proven process combines research, strategy, and creativity
                to deliver tailored solutions that drive measurable results.
              </motion.p>
            </div>
          </div>

          {/* ==================================Process Steps============================= */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Discovery Phase */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="group bg-[#181A1B] rounded-3xl p-8 relative border border-gray-800  hover:border-lime-400/50 transition-all duration-300 hover:bg-gray-800/50"
            >
              {/* Neon Icon Top Right */}
              <div className="">
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-lime-400 flex items-center justify-center">
                  <ArrowRight className="h-5 w-5 text-lime-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-lime-400 transition-colors duration-300">
                  Discovery Phase
                </h3>
                <p className="text-gray-300 text-base mb-10">
                  We begin with an in-depth consultation to understand your
                  brand, objectives, and target audience. This is followed by
                  thorough market research and trend analysis to identify key
                  opportunities.
                </p>
              </div>
              {/* Step Number and Icon */}
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-4 ">
                  {/* Step label */}
                  <span className=" text-gray-400 text-sm tracking-widest">
                    STEP
                  </span>
                  <span className="text-5xl font-bold text-black">01</span>
                </div>
                <div className="flex items-center justify-center w-36 h-36 rounded-br-[17%] rounded-bl-xl rounded-tl-xl rounded-tr-2xl absolute bottom-0 right-0  bg-lime-400 group-hover:bg-[#181A1B] transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-circle-dot relative w-14 h-14 text-black transition-colors duration-700 ease-out group-hover:text-white"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="1"></circle>
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Implementation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="group bg-[#181A1B] rounded-3xl p-8 relative border border-gray-800  hover:border-lime-400/50 transition-all duration-300 hover:bg-gray-800/50"
            >
              {/* Neon Icon Top Right */}
              <div className="">
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-lime-400 flex items-center justify-center">
                  <ArrowRight className="h-5 w-5 text-lime-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-lime-400 transition-colors duration-300">
                Implementation
                </h3>
                <p className="text-gray-300 text-base mb-10">
                Based on the insights gathered, we develop and execute a tailored digital strategy that aligns with your goals — ensuring each step delivers measurable impact.
                </p>
              </div>
              {/* Step Number and Icon */}
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-4 ">
                  {/* Step label */}
                  <span className=" text-gray-400 text-sm tracking-widest">
                    STEP
                  </span>
                  <span className="text-5xl font-bold text-black">02</span>
                </div>
                <div className="flex items-center justify-center w-36 h-36 rounded-br-[17%] rounded-bl-xl rounded-tl-xl rounded-tr-2xl absolute bottom-0 right-0  bg-lime-400 group-hover:bg-[#181A1B] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-layers relative w-14 h-14 text-black transition-colors duration-700 ease-out group-hover:text-white"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
                </div>
              </div>
            </motion.div>
            {/* Collaboration */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="group bg-[#181A1B] rounded-3xl p-8 relative border border-gray-800  hover:border-lime-400/50 transition-all duration-300 hover:bg-gray-800/50"
            >
              {/* Neon Icon Top Right */}
              <div className="">
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-lime-400 flex items-center justify-center">
                  <ArrowRight className="h-5 w-5 text-lime-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-lime-400 transition-colors duration-300">
                Collaboration
                </h3>
                <p className="text-gray-300 text-base mb-10">
                We believe in working closely with our clients throughout the process. Your feedback and insights help us refine strategies in real time and ensure alignment with your brand vision.
                </p>
              </div>
              {/* Step Number and Icon */}
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-4 ">
                  {/* Step label */}
                  <span className=" text-gray-400 text-sm tracking-widest">
                    STEP
                  </span>
                  <span className="text-5xl font-bold text-black">03</span>
                </div>
                <div className="flex items-center justify-center w-36 h-36 rounded-br-[17%] rounded-bl-xl rounded-tl-xl rounded-tr-2xl absolute bottom-0 right-0  bg-lime-400 group-hover:bg-[#181A1B] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-database relative w-14 h-14 text-black transition-colors duration-700 ease-out group-hover:text-white"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
