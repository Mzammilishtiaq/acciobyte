import React from 'react'
import Image from "next/image"
import BLog1 from "../../public/blog1.png";
import Blog2 from "../../public/blog2.png";
import BLog3 from "../../public/blog3.png";
import BLog4 from "../../public/blog4.png";
import BLog5 from "../../public/blog5.png";
import BLog6 from "../../public/blog6.png";
import BLog7 from "../../public/blog7.png";
import BLog8 from "../../public/blog8.png";
import BLog9 from "../../public/blog9.png";
import BLog10 from "../../public/blog10.png";
import BLog11 from "../../public/blog11.png";
import BLog12 from "../../public/blog12.png";
import { ArrowUpRight } from 'lucide-react';
const news = [
  {
    image: BLog1, // Replace with your image paths
    title: "Web 3.0 – How It's Changing the Internet",
    link: "/blog/1",
  },
  {
    image: Blog2,
    title: "Best Practices for Secure Mobile App Development",
    link: "/blog/2",
  },
  {
    image: BLog3,
    title: "Progressive Web Apps (PWA) – The Future of Mobile Experience",
    link: "/blog/3",
  },
  {
    image: BLog4,
    title: "Progressive Web Apps (PWA) – The Future of Mobile Experience",
    link: "/blog/4",
  },
  {
    image: BLog5,
    title: "Progressive Web Apps (PWA) – The Future of Mobile Experience",
    link: "/blog/1",
  },
  {
    image: BLog6,
    title: "Progressive Web Apps (PWA) – The Future of Mobile Experience",
    link: "/blog/6",
  },
  {
    image: BLog7,
    title: "Progressive Web Apps (PWA) – The Future of Mobile Experience",
    link: "/blog/7",
  },
  {
    image: BLog8,
    title: "Progressive Web Apps (PWA) – The Future of Mobile Experience",
    link: "/blog/8",
  },
  {
    image: BLog9,
    title: "Progressive Web Apps (PWA) – The Future of Mobile Experience",
    link: "/blog/9",
  },
  {
    image: BLog10,
    title: "Progressive Web Apps (PWA) – The Future of Mobile Experience",
    link: "/blog/10",
  },
  {
    image: BLog11,
    title: "Progressive Web Apps (PWA) – The Future of Mobile Experience",
    link: "/blog/11",
  },
  {
    image: BLog12,
    title: "Progressive Web Apps (PWA) – The Future of Mobile Experience",
    link: "/blog/12",
  }
]

function blogCard() {
  return (
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
  )
}

export default blogCard