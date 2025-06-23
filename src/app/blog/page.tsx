"use client"
import React from 'react'
import BlogCard from '@/components/blog-card'
import PageHeader from '../../components/pagerheader'
import { motion } from 'framer-motion'
function page() {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col gap-y-3">
      <PageHeader title={'Blog'} subtitle1={'Home'} subtitle2={'blog'} classsubtitle2={'text-lime-400'} subtitle3={''} classsubtitle3={''} star={''}/>
      <div className="absolute bottom-0 left-0 right-0 bg-lime-400 py-2 sm:py-4 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ x: { repeat: Number.POSITIVE_INFINITY, repeatType: "loop", duration: 20, ease: "linear" } }}
        >
          <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-8 text-black font-bold text-xs sm:text-base md:text-xl">
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
      <div className='px-4 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-12 md:py-16 lg:py-20'>
        <BlogCard/>
      </div>
    </section>
  )
}

export default page