import { motion } from 'framer-motion'
import React from 'react'

function howtowork() {
  return (
    <div>{/* Top Section */}
    <div className="mt-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              HOW IT WORK
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="sm:text-4xl lg:text-5xl md:text-5xl font-normal leading-tight"
          >
            Our proven
            <br />
            <span className="text-[#bff747]">process</span> for
            <br />
            achieving success
          </motion.h2>
        </div>

        <div>
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-400 leading-relaxed text-lg"
          >
            Our proven process combines research, strategy, and creativity
            to deliver tailored solutions that drive measurable results.
          </motion.p>
        </div>
      </div>
    </div></div>
  )
}

export default howtowork