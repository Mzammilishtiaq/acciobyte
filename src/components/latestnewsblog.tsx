"use client"

import { ArrowUpRight, Star } from "lucide-react"
import Image from "next/image"
import BLog1 from "../../public/blog1.png";
import Blog2 from "../../public/blog2.png";
import BLog3 from "../../public/blog3.png";
const news = [
  {
    image: BLog1, // Replace with your image paths
    title: "Web 3.0 – How It's Changing the Internet",
    link: "#",
  },
  {
    image: Blog2,
    title: "Best Practices for Secure Mobile App Development",
    link: "#",
  },
  {
    image: BLog3,
    title: "Progressive Web Apps (PWA) – The Future of Mobile Experience",
    link: "#",
  },
]

export default function LatestNewBLog() {
  return (
    <section className="relative bg-black py-16 px-4 md:px-0 overflow-hidden">
      {/* Green radial gradient top right */}
      <div className="absolute right-0 top-0 w-1/2 h-1/2 pointer-events-none z-0">
        <div className="w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#bff747]/20 via-transparent to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-4 h-4 text-[#bff747]" fill="#d9ff3e" />
              <span className="uppercase text-[#bff747] font-semibold tracking-wider text-sm">Latest News</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
              Insights on digital <span className="text-[#bff747]">innovation</span><br />and growth
            </h2>
          </div>
          <div className="flex-1 flex flex-col items-end justify-start">
            <p className="text-white/80 text-base md:text-lg max-w-md text-right">
              Explore the latest trends, strategies, and tools driving digital innovation and helping businesses thrive in a rapidly evolving digital landscape.
            </p>
            <span className="block w-4 h-4 bg-[#bff747] rounded-full mt-8 mr-8"></span>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, idx) => (
            <div key={idx} className="bg-[#181818] rounded-3xl p-4 flex flex-col shadow-lg hover:shadow-[#bff747]/10 transition-shadow duration-300">
              <div className="rounded-2xl overflow-hidden mb-4 aspect-[4/3] bg-gray-800">
                <Image src={item.image} alt={item.title} width={400} height={300} className="object-cover w-full h-full" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-4 leading-snug">{item.title}</h3>
              <a href={item.link} className="text-[#bff747] font-semibold flex items-center gap-1 mt-auto group text-base">
                Read More
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
