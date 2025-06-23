"use client"

import { ArrowUpRight } from "lucide-react"

export default function Stats() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[60vh] bg-black overflow-hidden">
      {/* Green radial gradient top left */}
      <div className="absolute left-0 top-0 w-1/2 h-1/2 pointer-events-none" style={{zIndex:0}}>
        <div className="w-full h-full bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-lime-400/30 via-transparent to-transparent"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center w-full">
        <div className="text-white text-center font-bold text-lg mt-8 mb-6 tracking-wide">LETS COLLABORATE</div>
        <div className="relative flex flex-col items-center">
          {/* Green dot above E */}
          <span className="absolute -top-6 left-0 md:left-2 w-3 h-3 bg-lime-400 rounded-full" style={{marginLeft: '0.25rem'}}></span>
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <span className="text-[3rem] md:text-[6rem] font-extrabold leading-none tracking-tight">LET</span>
              <span className="text-[3rem] md:text-[6rem] font-extrabold leading-none tracking-tight">S</span>
              <span className="ml-4 text-[3rem] md:text-[6rem] font-extrabold leading-none tracking-tight">WORK</span>
            </div>
            {/* Glowing button in the center */}
            <div className="relative flex justify-center w-full my-2">
              <button className="absolute left-1/2 -translate-x-1/2 -top-8 md:-top-12 bg-lime-400 text-black rounded-full shadow-lg px-6 py-6 md:px-8 md:py-8 flex flex-col items-center justify-center font-semibold text-xs md:text-base transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-lime-400" style={{boxShadow:'0 0 40px 10px #d9ff3e88'}}>
                <span className="flex items-center gap-2">
                  Get In Touch
                  <ArrowUpRight className="inline-block w-4 h-4 md:w-5 md:h-5" />
                </span>
              </button>
            </div>
            <div className="text-[3rem] md:text-[6rem] font-extrabold leading-none tracking-tight mt-8">TOGETHER</div>
          </div>
        </div>
      </div>
    </section>
  )
}
