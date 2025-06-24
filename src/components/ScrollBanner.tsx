"use client"
import React from 'react'
import {motion} from 'framer-motion'

function ScrollBanner() {
  return (
<div className="absolute bottom-0 left-0 right-0 z-50 bg-[#bff747] py-2 sm:py-4 overflow-hidden">
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
  )
}

export default ScrollBanner