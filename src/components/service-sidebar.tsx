import { ArrowUp } from 'lucide-react'
import React from 'react'

function ServiceSidebar() {
  return (
    <div className="flex flex-col gap-8">
          {/* Services Category Sidebar */}
          <div className="bg-[#181818] rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-bold mb-4">Services Category</h3>
            <ul className="space-y-10">
              {[
                "Website Development",
                "Digital Marketing",
                "Graphic Designing",
                "Social Media Marketing",
                "Search Engine Optimization",
                "Software Development",
                "Cyber Security",
                "E-Commerce",
                "Electronics",
                "Video Animation",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-between hover:text-[#bff747] cursor-pointer border-b-2 border-b-gray-500 pb-3"
                >
                  <span>{item}</span>
                  <ArrowUp className="w-4 h-4 text-[#bff747]" />
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Card */}
          <div className="bg-[#181818] rounded-xl p-7 flex flex-col items-center text-center shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide text-[#bff747] lucide-message-square-warning mx-auto mb-5 w-24 h-24 text-default"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><path d="M12 7v2"></path><path d="M12 13h.01"></path></svg>
            <h4 className="font-bold text-3xl text-[#bff747] mb-2">You have different questions?</h4>
            <p className="text-gray-400 mb-4">
              Our team is available to answer all your questions.
            </p>
            <a
              href="tel:+20106565314"
              className="bg-[#bff747] text-black font-bold px-6 py-2 rounded-full hover:bg-lime-500 transition"
            >
              (20) 1065-65314
            </a>
          </div>
        </div>
  )
}

export default ServiceSidebar