"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import App1 from "../../public/app1.jpg";
import App2 from "../../public/app2.jpg";
import App3 from "../../public/app3.jpg";
import App4 from "../../public/app4.jpg";
import App5 from "../../public/app5.jpg";
import App6 from "../../public/app6.jpg";
import App7 from "../../public/app7.png";
import App8 from "../../public/app8.png";
import App9 from "../../public/app9.png";
import Image from "next/image";
const portfolioItems = [
  {
    id: 1,
    title: "Dashboard Interface",
    category: "All Development",
    image: App1,
    bgColor: "bg-blue-500",
    description: "Modern dashboard design with clean UI components",
  },
  {
    id: 2,
    title: "Brand Identity System",
    category: "Branding",
    image: App2,
    bgColor: "bg-gray-200",
    description: "Complete branding package with logo and guidelines",
  },
  {
    id: 3,
    title: "Mobile App Design",
    category: "All Development",
    image: App3,
    bgColor: "bg-red-500",
    description: "iOS and Android app interface design",
  },
  {
    id: 4,
    title: "E-commerce Platform",
    category: "Business",
    image: App4,
    bgColor: "bg-orange-400",
    description: "Full e-commerce website with shopping features",
  },
  {
    id: 5,
    title: "Fintech App",
    category: "All Development",
    image: App5,
    bgColor: "bg-purple-600",
    description: "Financial technology mobile application",
  },
  {
    id: 6,
    title: "Healthcare Platform",
    category: "Business",
    image: App6,
    bgColor: "bg-pink-100",
    description: "Medical platform with patient management",
  },
  {
    id: 7,
    title: "Corporate Website",
    category: "Business",
    image: App7,
    bgColor: "bg-indigo-500",
    description: "Professional corporate website design",
  },
  {
    id: 8,
    title: "Restaurant Branding",
    category: "Branding",
    image: App8,
    bgColor: "bg-green-500",
    description: "Complete restaurant brand identity",
  },
  {
    id: 9,
    title: "Logo Collection",
    category: "Logo",
    image: App9,
    bgColor: "bg-yellow-400",
    description: "Various logo designs for different clients",
  },
];

const filterCategories = ["All Development", "Branding", "Business", "Logo"];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All Development");
  const [filteredItems, setFilteredItems] = useState(portfolioItems);

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    if (category === "All Development") {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(
        portfolioItems.filter((item) => item.category === category)
      );
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-black text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-[#bff747]/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-[#bff747]/2 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12 justify-center"
        >
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilterChange(category)}
              className={`px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full font-medium transition-all duration-300 text-xs sm:text-sm md:text-base ${
                activeFilter === category
                  ? "bg-[#bff747] text-black"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 overflow-y-auto scrollbar-thin scrollbar-thumb-[#bff747] scrollbar-track-gray-800"
          style={{
            maxHeight: "70vh",
            scrollbarColor: "#a3e635 #1f2937",
            scrollbarWidth: "thin",
          }}
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-[#bff747]/50 transition-all duration-300 hover:bg-gray-800/50 ">
                <div
                  className={`relative  h-[50vh] ${item.bgColor} overflow-hidden`}>
                  {/* Project Preview */}
                  <div className="absolute inset-3 sm:inset-4 bg-white/10 rounded-xl sm:rounded-2xl backdrop-blur-sm border border-white/20">
                    <Image src={item.image} alt="" className="rounded-lg sm:rounded-xl"/>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#bff747] rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-up-right w-8 h-8 text-white group-hover/hover-circle:!text-black"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                      </div>
                      <span className="text-white font-medium text-xs sm:text-sm md:text-base">
                        View Project
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-gray-800 hover:bg-[#bff747] hover:text-black text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
            Load More Projects
          </button>
        </motion.div> */}
      </div>
    </section>
  );
}
