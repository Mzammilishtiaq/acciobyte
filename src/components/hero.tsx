"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Play} from "lucide-react";
import BGImage from '../../public/hero_bg3.jpg'
import ScrollBanner from "./ScrollBanner";
import { useState, useEffect } from "react";

export default function Hero() {
  // Carousel service names
  const services = [
    "Website Development",
    "App Development",
    "Content Writing",
    "Graphic Designing",
    "SEO Optimization",
    "Cyber Security",
    "Video Animation"
  ];
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % services.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [services.length]);

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
      <div className="absolute inset-0 bg-[#00000000]">
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
                className="w-2 h-2 bg-[#bff747] rounded-full opacity-60"
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
      <div className="container flex flex-col lg:flex-col md:flex-row mx-auto lg:px-32 px-6 relative z-10 pt-16 sm:pt-20 gap-8 md:gap-0">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6 sm:mb-8"
          >
            <h1 className="lg:text-left text-center text-4xl md:text-5xl lg:text-8xl font-normal leading-tight">
              Innovative solutions for
              <br />
              <span className="inline-block min-h-[1em]">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={services[current]}
                    className="text-[#bff747] font-semibold inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    {services[current]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
          </motion.div>
        <div className="flex lg:flex-row flex-col items-start">
        <div className="max-w-6xl flex lg:flex-row flex-col items-start justify-between lg:gap-x-[300px] w-full">
          {/* Left Side Circular Element */}
          <div className="flex  items-start  sm:gap-[10px] mb-6 lg:mx-0 mx-auto">
            <div className="inset-4 bg-[#bff747] rounded-full flex items-center justify-center hover:bg-lime-500 transition-colors cursor-pointer group lg:p-10 p-10">
              <Play className="h-5 w-5 sm:h-6 sm:w-6 text-black group-hover:scale-110 transition-transform" />
            </div>
            <motion.div
             initial={{ rotate: 0 }}
             animate={{ rotate: 360 }}
             transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
             className="-ml-10 -z-10 w-32 h-32 rounded-full md:block lg:block hidden"
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
        <div className="lg:w-full w-full md:w-1/2">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8 sm:mb-12"
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
            className="flex flex-row items-center gap-x-4 sm:gap-6 lg:pb-0 pb-10"
          >
            <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base">
              Get In Touch
            </button>
            <button className="bg-[#bff747] hover:bg-lime-500 text-black w-12 h-12 sm:w-14 sm:h-14 rounded-full p-0 transition-all duration-300 hover:scale-110 flex justify-center items-center">
              <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </motion.div>
        </div>
        </div>
        </div>
      </div>

      {/* Scrolling Services Banner */}
     <div className="my-10 lg:my-0">
     <ScrollBanner/>
     </div>
    </section>
  );
}
