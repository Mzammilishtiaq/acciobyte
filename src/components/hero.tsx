"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Play} from "lucide-react";
import BGImage from '../../public/hero_bg3.jpg'
export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-black text-white overflow-hidden"
      style={{
        backgroundImage: `url(${(BGImage).src || BGImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >


      {/* Background Geometric Elements */}
      <div className="absolute inset-0 bg-[#0000006d]">
        {/* Large geometric shape - top right */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-0 right-0 w-96 h-96"
        >
          <svg viewBox="0 0 400 400" className="w-full h-full opacity-20">
            <polygon
              points="200,50 350,150 350,250 200,350 50,250 50,150"
              fill="none"
              stroke="#374151"
              strokeWidth="1"
            />
            <polygon
              points="200,80 320,160 320,240 200,320 80,240 80,160"
              fill="none"
              stroke="#374151"
              strokeWidth="1"
            />
          </svg>
        </motion.div> */}

        {/* Dots pattern - top right */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute top-20 right-20"
        >
          <div className="grid grid-cols-3 gap-2">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-lime-400 rounded-full opacity-60"
              ></div>
            ))}
          </div>
        </motion.div> */}

        {/* Bottom left geometric shapes */}
        {/* <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-20 left-20 w-64 h-64"
        >
          <svg viewBox="0 0 200 200" className="w-full h-full opacity-30">
            <polygon
              points="100,20 180,60 180,140 100,180 20,140 20,60"
              fill="#374151"
              stroke="#4b5563"
              strokeWidth="1"
            />
            <polygon
              points="100,40 160,70 160,130 100,160 40,130 40,70"
              fill="#4b5563"
              stroke="#6b7280"
              strokeWidth="1"
            />
          </svg>
        </motion.div> */}
      </div>

      {/* Main Content */}
      <div className="container flex flex-col lg:flex-col md:flex-row mx-auto px-4 sm:px-6 relative z-10 pt-16 sm:pt-20 gap-8 md:gap-0">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6 sm:mb-8"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-normal leading-tight">
              Innovative solutions for
              <br />
              <span className="text-lime-400 font-semibold">Website Development</span>
            </h1>
          </motion.div>
        <div className="flex lg:flex-row flex-col items-start">
        <div className="max-w-6xl mx-auto w-full md:w-1/2">
          {/* Left Side Circular Element */}
          <div className="flex  items-center gap-4 sm:gap-[10px] mb-6">
            <div className="inset-4 bg-lime-400 rounded-full flex items-center justify-center hover:bg-lime-500 transition-colors cursor-pointer group p-3 sm:p-5">
              <Play className="h-5 w-5 sm:h-6 sm:w-6 text-black group-hover:scale-110 transition-transform" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
              animate={{ opacity: 90, scale: 1, rotate: [0,360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className=""
            >
              <div className="relative w-12 h-12 sm:w-16 sm:h-16">
                {/* Outer ring with text */}
                <div className="inset-0 rounded-full border border-gray-600">
                  <svg className="" viewBox="0 0 120 120">
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
                <ArrowUpRight className="absolute lg:left-6 left-2 lg:top-5 top-[30%] bottom-0 right-0 h-5 w-5 sm:h-6 sm:w-6" />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-2xl mb-8 sm:mb-12"
          >
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              At our Creative Digital Agency, we bring your ideas to life by
              crafting engaging, impactful digital experiences that captivate
              audiences and drive results. From innovative web design to
              compelling content and cutting-edge digital strategies.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
          >
            <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base">
              Get In Touch
            </button>
            <button className="bg-lime-400 hover:bg-lime-500 text-black w-12 h-12 sm:w-14 sm:h-14 rounded-full p-0 transition-all duration-300 hover:scale-110 flex justify-center items-center">
              <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </motion.div>
        </div>
        </div>
      </div>

      {/* Scrolling Services Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-lime-400 py-2 sm:py-4 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ x: { repeat: Number.POSITIVE_INFINITY, repeatType: "loop", duration: 20, ease: "linear" } }}
        >
          <div className="flex items-center space-x-4 sm:space-x-8 text-black font-bold text-base sm:text-xl">
            <span>Android App Development</span>
            <span className="text-2xl">✱</span>
            <span>Website Development</span>
            <span className="text-2xl">✱</span>
            <span>Digital Marketing</span>
            <span className="text-2xl">✱</span>
            <span>UI/UX Design</span>
            <span className="text-2xl">✱</span>
            <span>E-commerce Solutions</span>
            <span className="text-2xl">✱</span>
            <span>Mobile App Development</span>
            <span className="text-2xl">✱</span>
            <span>SEO Optimization</span>
            <span className="text-2xl">✱</span>
            <span>Brand Identity</span>
            <span className="text-2xl">✱</span>
            <span>Android App Development</span>
            <span className="text-2xl">✱</span>
            <span>Website Development</span>
            <span className="text-2xl">✱</span>
            <span>Digital Marketing</span>
            <span className="text-2xl">✱</span>
            <span>UI/UX Design</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
