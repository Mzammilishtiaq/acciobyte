"use client"
import React from "react";
import PricingCard from "@/components/pricing-card";
import PageHeader from '@/components/pagerheader'
import { motion } from "framer-motion";
const pricingData = [
  {
    title: "Bronze League",
    description: "Our popular Plan for small teams.",
    price: "449.00",
    features: [
      "Logo Design",
      "3 Dedicated Designers",
      "Stationary",
      "MS Word Letterhead",
      "5 Pages Static Website",
      "5 Logo Concepts",
      "Icon Design",
      "Business Card, Letterhead, Envelope",
      "Website",
      "Team of Expert Designers & Developers",
    ],
    highlighted: false,
  },
  {
    title: "Silver League",
    description: "Advanced features and reporting",
    price: "999.99",
    features: [
      "Logo Design",
      "5 Dedicated Designers",
      "Stationary",
      "MS Word Letterhead",
      "10 Unique Pages Website",
      "10 Logo Concepts",
      "Icon Design",
      "Business Card, Letterhead, Envelope, Fax Template",
      "Website",
      "Content Management System (CMS)",
    ],
    highlighted: false,
  },
  {
    title: "Gold League",
    description: "Gold for idea to existence and premium quality",
    price: "1399.99",
    features: [
      "Logo Design",
      "8 Dedicated Designers",
      "Stationary",
      "MS Word Letterhead (Letterhead, Envelope, Business Card, Invoice)",
      "Trifold Brochure Design",
      "Unlimited Logo Concepts",
      "Icon Design",
      "2 Free Custom Stationary Designs",
      "Company Profile Design (4 pages)",
      "Presentation Folder Design",
    ],
    highlighted: true,
  },
];

function PricingPage() {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col gap-y-3 relative">
      <PageHeader title={"Pricing"} subtitle1={"Home"} subtitle2={"pricing"} classsubtitle2={"text-[#bff747]"} subtitle3={""} classsubtitle3={""} star={""}/>
      
      {/* Scroll Banner - Improved for mobile */}
      <div className=" bg-[#bff747] py-2 sm:py-4 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ x: { repeat: Number.POSITIVE_INFINITY, repeatType: "loop", duration: 20, ease: "linear" } }}
        >
          <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-8 text-black font-bold text-xs sm:text-base md:text-xl">
            <span>Android App Development</span>
            <span className="text-lg sm:text-2xl">✱</span>
            <span>Website Development</span>
            <span className="text-lg sm:text-2xl">✱</span>
            <span>Digital Marketing</span>
            <span className="text-lg sm:text-2xl">✱</span>
            <span>UI/UX Design</span>
            <span className="text-lg sm:text-2xl">✱</span>
            <span>E-commerce Solutions</span>
            <span className="text-lg sm:text-2xl">✱</span>
            <span>Mobile App Development</span>
            <span className="text-lg sm:text-2xl">✱</span>
            <span>SEO Optimization</span>
            <span className="text-lg sm:text-2xl">✱</span>
            <span>Brand Identity</span>
            <span className="text-lg sm:text-2xl">✱</span>
            <span>Android App Development</span>
            <span className="text-lg sm:text-2xl">✱</span>
            <span>Website Development</span>
            <span className="text-lg sm:text-2xl">✱</span>
            <span>Digital Marketing</span>
            <span className="text-lg sm:text-2xl">✱</span>
            <span>UI/UX Design</span>
          </div>
        </motion.div>
      </div>
      
      {/* Main Content - Improved responsive layout */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-20 py-8 sm:py-12 md:py-16 lg:py-20 pb-20 sm:pb-24 md:pb-28 lg:pb-32">
        {/* First two cards - Responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <PricingCard {...pricingData[0]} />
          <PricingCard {...pricingData[1]} />
        </div>
        
        {/* Third card - Centered with responsive width */}
        <div className="flex justify-center">
          <div className="w-full sm:w-4/5 md:w-3/4 lg:w-1/2">
            <PricingCard {...pricingData[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingPage;
