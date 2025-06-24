"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Target, Box, Layers, Database } from "lucide-react"
import SphereSpinner from '../../public/sphere.png'
import Image from 'next/image'
const features = [
  {
    icon: Target,
    title: "Your Success, Our Mission",
    description:
      "We measure our success through the achievements of our clients. With a results-driven approach and a commitment to quality, we deliver digital solutions that create meaningful impact.",
  },
  {
    icon: Box,
    title: "Creators Of Digital Excellence",
    description:
      "Driven by innovation and excellence, we reimagine digital possibilities. Our team builds solutions that not only fulfill your vision but also elevate your brand to the next level.",
  },
  {
    icon: Layers,
    title: "Innovating the digital landscape",
    description:
      "At the core of our agency is a commitment to excellence and creativity. We specialize in crafting digital solutions that not only meet your needs but also exceed your brand.",
  },
  {
    icon: Database,
    title: "Helping Brands Thrive Online",
    description:
      "Our goal is simple: empower brands to grow and succeed in the digital world. Through strong client partnerships and custom strategies, we deliver results that matter.",
  },
]

export default function AboutAgency() {
  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto lg:px-32 px-5 sticky top-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side */}
          <div >
          <div className="relative">
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-8 lg:mx-0 lg:justify-start justify-center mx-auto"
            >
              <span className="text-[#bff747] text-lg">✱</span>
              <span className="text-[#bff747] font-medium tracking-wider">ABOUT AGENCY</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-12 text-center lg:text-left"
            >
              <h2 className="text-4xl lg:text-5xl md:text-6xl font-normal leading-tight">
                Crafting <span className="text-[[#bff747]]">unique</span>
                <br />
                <span className="text-[#bff747]">digital</span>
                <br />
                <span className="lg:text-5xl text-sm">experiences that elevate your brand</span>
              </h2>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center gap-x-4 mb-16 lg:justify-start justify-center"
            >
              <button
                className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Contact Us
              </button>

              <button
                className="bg-[#bff747] hover:bg-lime-500 text-black w-14 h-14 rounded-full p-0 transition-all duration-300 hover:scale-110 flex justify-center items-center"
              >
                <ArrowUpRight className="h-6 w-6" />
              </button>
            </motion.div>

          
          </div>
          </div>

          {/* Right Side */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute -left-8 top-0 bottom-0 w-px bg-gray-700"></div>

            {/* Features List */}
            <div className="space-y-36">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 bg-[#bff747] rounded-2xl flex items-center justify-center mb-6  group-hover:bg-lime-300 transition-colors duration-300"
                  >
                    <feature.icon className="h-8 w-8 text-black" />
                  </motion.div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-bold group-hover:text-[[#bff747]] transition-colors duration-300 mb-6">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg">{feature.description}</p>
                  </div>

                  {/* Connector Line */}
                  {index < features.length - 1 && (
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                      viewport={{ once: true }}
                      className="w-5 h-5 rounded-full bg-[[#bff747]] -ml-10 -mt-32 origin-top"
                    ></motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

       {/* 3D Hexagonal Sphere */}
       <motion.div
              animate={{ 
                rotate: [0,360],
              }}
              transition={{ 
                duration: 100,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-44  -left-36 w-80 h-80 lg:block hidden"
            >
              <motion.div
                animate={{ 
                  rotate: [0,360],
                }}
                transition={{ 
                  duration: 100,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="w-full h-full"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Image src={SphereSpinner} className="opacity-50" alt={""}/>
              </motion.div>
            </motion.div>

    </section>
  )
}
