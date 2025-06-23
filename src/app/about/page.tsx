"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import Image from "next/image";
import PageHeader from "../../components/pagerheader";
import AboutAgency from "@/components/about-agency";
import Features from "@/components/features";
import Stats from "@/components/stats";

const teamImage = "/app1.jpg"; // Replace with your own image if needed

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen flex flex-col gap-y-3">
      <PageHeader
        title={"About"}
        subtitle1={"Home"}
        subtitle2={"about"}
        classsubtitle2={""}
        subtitle3={""}
        classsubtitle3={""}
        star={""}
      />
      <div className=" bg-lime-400 py-2 sm:py-4 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          <div className="flex items-center space-x-4 sm:space-x-8 text-black font-bold text-sm sm:text-base md:text-xl">
            <span>Android App Development</span>
            <span className="text-lg sm:text-xl md:text-2xl">✱</span>
            <span>Website Development</span>
            <span className="text-lg sm:text-xl md:text-2xl">✱</span>
            <span>Digital Marketing</span>
            <span className="text-lg sm:text-xl md:text-2xl">✱</span>
            <span>UI/UX Design</span>
            <span className="text-lg sm:text-xl md:text-2xl">✱</span>
            <span>E-commerce Solutions</span>
            <span className="text-lg sm:text-xl md:text-2xl">✱</span>
            <span>Mobile App Development</span>
            <span className="text-lg sm:text-xl md:text-2xl">✱</span>
            <span>SEO Optimization</span>
            <span className="text-lg sm:text-xl md:text-2xl">✱</span>
            <span>Brand Identity</span>
            <span className="text-lg sm:text-xl md:text-2xl">✱</span>
            <span>Android App Development</span>
            <span className="text-lg sm:text-xl md:text-2xl">✱</span>
            <span>Website Development</span>
            <span className="text-lg sm:text-xl md:text-2xl">✱</span>
            <span>Digital Marketing</span>
            <span className="text-lg sm:text-xl md:text-2xl">✱</span>
            <span>UI/UX Design</span>
          </div>
        </motion.div>
      </div>
      <AboutAgency />
      <Features />

      <div className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-28 flex flex-col lg:flex-row gap-8 sm:gap-12">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 flex flex-col lg:flex-row items-start lg:items-center justify-around w-full gap-5 lg:gap-8"
        >
          <div className="flex items-start flex-col w-full lg:w-auto">
            <div className="flex items-center gap-2 mb-4">
              <Star
                className="text-lime-400 w-4 h-4 sm:w-5 sm:h-5"
                fill="#c6ff4a"
              />
              <span className="text-lime-400 font-semibold text-base sm:text-lg">
                OUR TEAM
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-4 sm:mb-6">
              Dynamic <span className="font-bold text-lime-400">team</span>
              <br />
              of digital experts
            </h1>
          </div>
          <div className="flex flex-col items-start w-full lg:w-auto">
            <p className="text-base sm:text-lg text-gray-300 max-w-xl mb-6 sm:mb-8">
              Our digital services empower brands with innovative strategies and
              solutions for sustainable growth and engagement. Our digital
              services empower brands with innovative strategies and solutions
              for sustainable growth and engagement.
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-lg flex items-center gap-2 transition">
                More About
              </button>
              <span className="bg-lime-400 rounded-full p-2 sm:p-3 flex items-center justify-center">
                <ArrowUpRight className="text-black w-4 h-4 sm:w-6 sm:h-6" />
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Section - Team Images */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 items-end"
        >
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="rounded-xl sm:rounded-2xl overflow-hidden bg-gray-800 shadow-lg"
            >
              <Image
                src={teamImage}
                alt={`Team member ${i}`}
                width={300}
                height={400}
                className="object-cover w-full h-48 sm:h-56 md:h-64 lg:h-70 opacity-80 hover:opacity-100 transition"
              />
            </div>
          ))}
        </motion.div>
      </div>
      <Stats />
    </div>
  );
}
