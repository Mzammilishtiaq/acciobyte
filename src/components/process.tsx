"use client"

import { ClipboardList, Settings, FileText, Headphones, Star } from "lucide-react"

const benefits = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Personalized Approach",
    description: "We customize strategies to fit your brand's specific needs, ensuring alignment.",
  },
  {
    number: "02",
    icon: Settings,
    title: "Experienced Team",
    description: "Combines industry knowledge and creativity to exceptional results for your brand.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Data-Driven Decisions",
    description: "We utilize data insights to refine strategies, optimize and ensure impactful, measurable results.",
  },
  {
    number: "04",
    icon: Headphones,
    title: "Ongoing Support",
    description: "We provide continuous support and maintenance to keep your digital assets at their best.",
  },
]

export default function Process() {
  return (
    <section className="relative bg-black py-16 px-4 md:px-0 overflow-hidden">
      {/* Green radial gradient top right */}
      <div className="absolute right-0 top-0 w-1/2 h-1/2 pointer-events-none z-0">
        <div className="w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-lime-400/20 via-transparent to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-4 h-4 text-lime-400" fill="#d9ff3e" />
              <span className="uppercase text-lime-400 font-semibold tracking-wider text-sm">Key Benefits</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
              Discover the <span className="text-lime-400">benefits</span><br />of choosing us today
            </h2>
          </div>
          <div className="flex-1 flex flex-col items-end justify-start">
            <p className="text-white/80 text-base md:text-lg max-w-md text-right">
              Join our creative community to collaborate, innovate, and thrive together We welcome passionate individuals eager to make.
            </p>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {benefits.map((item, idx) => (
            <div key={idx} className="bg-[#181818] rounded-3xl p-8 flex flex-col shadow-lg hover:shadow-lime-400/10 transition-shadow duration-300 min-h-[280px]">
              <div className="text-gray-400 font-bold text-lg mb-4">{item.number}</div>
              <item.icon className="w-9 h-9 text-lime-400 mb-6" />
              <h3 className="text-white text-lg font-semibold mb-2 leading-snug">{item.title}</h3>
              <p className="text-gray-400 text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
