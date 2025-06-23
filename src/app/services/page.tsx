"use client"
import { motion } from 'framer-motion';
import { CheckCircle, MessageSquare } from 'lucide-react';
import { useState } from 'react';
export default function ServicesPage() {
    const [faqOpen, setFaqOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white py-10 px-4 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left: Steps and FAQ */}
        <div className="md:col-span-3 flex flex-col gap-8">
          {/* Steps Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <motion.div className="bg-[#181818] rounded-xl p-6 flex flex-col items-center shadow-lg" whileHover={{ scale: 1.03 }}>
              <img src="/app1.jpg" alt="Step 1" className="rounded-lg mb-4 w-full h-32 object-cover" />
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="text-lime-400" />
                <span className="text-lime-400 font-bold">STEP 01</span>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-center">Requirement Analysis</h3>
              <p className="text-sm text-gray-400 text-center">We understand your business needs, target audience, and goals to create a development roadmap.</p>
            </motion.div>
            {/* Step 2 */}
            <motion.div className="bg-[#181818] rounded-xl p-6 flex flex-col items-center shadow-lg" whileHover={{ scale: 1.03 }}>
              <img src="/app2.jpg" alt="Step 2" className="rounded-lg mb-4 w-full h-32 object-cover" />
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="text-lime-400" />
                <span className="text-lime-400 font-bold">STEP 02</span>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-center">Design & Development</h3>
              <p className="text-sm text-gray-400 text-center">Our designers create a visually appealing product, while developers build a functional, high-performance website.</p>
            </motion.div>
            {/* Step 3 */}
            <motion.div className="bg-[#181818] rounded-xl p-6 flex flex-col items-center shadow-lg" whileHover={{ scale: 1.03 }}>
              <img src="/app3.jpg" alt="Step 3" className="rounded-lg mb-4 w-full h-32 object-cover" />
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="text-lime-400" />
                <span className="text-lime-400 font-bold">STEP 03</span>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-center">Testing & Deployment</h3>
              <p className="text-sm text-gray-400 text-center">Each solution is tested across browsers, security, and speed, and deployed for launch with ongoing support.</p>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <div className="mt-10">
            <h2 className="text-3xl font-bold mb-6 text-lime-400">Lets address your questions today!</h2>
            <div className="space-y-4">
              {/* FAQ Item 1 */}
                <motion.div
                  className="bg-[#181818] rounded-lg p-4 cursor-pointer"
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setFaqOpen((prev) => !prev)}
                >
                  <div className="flex justify-between items-center">
                    <span>How long does it take to develop a website?</span>
                    <span className="text-lime-400 text-xl transition-transform duration-200">
                      {faqOpen ? "−" : "+"}
                    </span>
                  </div>
                  {faqOpen && (
                    <div className="mt-2 text-gray-400 text-sm">
                      The timeline depends on the projects complexity and requirements. Typically, a standard website takes 2-6 weeks from planning to launch.
                    </div>
                  )}
                </motion.div>            
            </div>
          </div>
        </div>

        {/* Right: Sidebar and Contact Card */}
        <div className="flex flex-col gap-8">
          {/* Services Category Sidebar */}
          <div className="bg-[#181818] rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-bold mb-4">Services Category</h3>
            <ul className="space-y-2">
              {['Website Development', 'Digital Marketing', 'Graphic Designing', 'Social Media Marketing', 'Search Engine Optimization', 'Software Development', 'Cyber Security', 'E-Commerce', 'Electronics', 'Video Animation'].map((item) => (
                <li key={item} className="flex items-center justify-between hover:text-lime-400 cursor-pointer">
                  <span>{item}</span>
                  <span className="text-lime-400">+</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Card */}
          <div className="bg-[#181818] rounded-xl p-6 flex flex-col items-center text-center shadow-lg">
            <MessageSquare className="text-lime-400 w-10 h-10 mb-2" />
            <h4 className="font-bold mb-2">You have different questions?</h4>
            <p className="text-gray-400 mb-4">Our team is available to answer all your questions.</p>
            <a href="tel:+20106565314" className="bg-lime-400 text-black font-bold px-6 py-2 rounded-full hover:bg-lime-500 transition">(20) 1065-65314</a>
          </div>
        </div>
      </div>
    </div>
  );
} 