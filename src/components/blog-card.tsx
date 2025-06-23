import React from 'react'
import Image from "next/image"
import BLog1 from "../../public/blog1.png";
import Blog2 from "../../public/blog2.png";
import BLog3 from "../../public/blog3.png";
import { ArrowUpRight } from 'lucide-react';
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

function blogCard() {
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, idx) => (
            <div key={idx} className="bg-[#181818] rounded-3xl p-4 flex flex-col shadow-lg hover:shadow-lime-400/10 transition-shadow duration-300">
              <div className="rounded-2xl overflow-hidden mb-4 aspect-[4/3] bg-gray-800">
                <Image src={item.image} alt={item.title} width={400} height={300} className="object-cover w-full h-full" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-4 leading-snug">{item.title}</h3>
              <a href={item.link} className="text-lime-400 font-semibold flex items-center gap-1 mt-auto group text-base">
                Read More
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
  )
}

export default blogCard