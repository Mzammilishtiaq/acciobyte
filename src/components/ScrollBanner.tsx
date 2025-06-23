"use client"
import React from 'react'
import {motion} from 'framer-motion'

interface ScrollBannerProps {
  items?: string[]
  backgroundColor?: string
  textColor?: string
  duration?: number
  className?: string
}

function ScrollBanner({ 
  items = [
    "Android App Development",
    "Website Development", 
    "Digital Marketing",
    "UI/UX Design",
    "E-commerce Solutions",
    "Mobile App Development",
    "SEO Optimization",
    "Brand Identity"
  ],
  backgroundColor = "bg-lime-400",
  textColor = "text-black",
  duration = 2,
  className = ""
}: ScrollBannerProps) {
  return (
    <div className={`absolute bottom-0 left-0 right-0 ${backgroundColor} py-2 sm:py-4 overflow-hidden ${className}`}>
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ x: { repeat: Number.POSITIVE_INFINITY, repeatType: "loop", duration, ease: "linear" } }}
        >
          <div className={`flex items-center space-x-4 sm:space-x-8 ${textColor} font-bold text-base sm:text-xl`}>
            {items.map((item, index) => (
              <React.Fragment key={index}>
                <span>{item}</span>
                {index < items.length - 1 && <span className="text-2xl">✱</span>}
              </React.Fragment>
            ))}
            {items.map((item, index) => (
              <React.Fragment key={`duplicate-${index}`}>
                <span>{item}</span>
                {index < items.length - 1 && <span className="text-2xl">✱</span>}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
  )
}

export default ScrollBanner