"use client";
import { motion } from "framer-motion";
import { CheckCircle, MessageSquare } from "lucide-react";
import { useState } from "react";
import PageHeader from "@/components/pagerheader";
export default function ServicesPage() {
  const [faqOpen, setFaqOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <PageHeader title={"Search Engine Optimization"} subtitle1={"Home"} subtitle2={"service"} classsubtitle2={""} subtitle3={"search-engine-optimization"} classsubtitle3={"text-lime-400"} star={"*"}/>
        <div className=" bg-lime-400 py-2 sm:py-4 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ x: { repeat: Number.POSITIVE_INFINITY, repeatType: "loop", duration: 20, ease: "linear" } }}
        >
          <div className="flex items-center space-x-4 sm:space-x-8 text-black font-bold text-base sm:text-xl">
            <span>Android App Development</span>
            <span className="text-2xl">✱</span>
            <span>Website Development</span>
            <span className="text-2xl">✱</span>
            <span>Digital Marketing</span>
            <span className="text-2xl">✱</span>
            <span>UI/UX Design</span>
            <span className="text-2xl">✱</span>
            <span>E-commerce Solutions</span>
            <span className="text-2xl">✱</span>
            <span>Mobile App Development</span>
            <span className="text-2xl">✱</span>
            <span>SEO Optimization</span>
            <span className="text-2xl">✱</span>
            <span>Brand Identity</span>
            <span className="text-2xl">✱</span>
            <span>Android App Development</span>
            <span className="text-2xl">✱</span>
            <span>Website Development</span>
            <span className="text-2xl">✱</span>
            <span>Digital Marketing</span>
            <span className="text-2xl">✱</span>
            <span>UI/UX Design</span>
          </div>
        </motion.div>
      </div>
      <div className=" py-20 md:py-40 px-4 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left: Steps and FAQ */}
        <div className="md:col-span-3 flex flex-col gap-8">
          {/* Steps Section */}
          {/* Web Development Hero & Features Section */}
          <div className=" rounded-xl p-6 mb-10">
            {/* Hero Image & Intro */}
            <div className="flex flex-col md:flex-col gap-6 items-center mb-8">
              <img
                src="https://www.acciobyte.com/_next/static/media/sec1.2b520679.jpg"
                alt="Web Dev Hero"
                className="rounded-lg  h-[70vh] w-full object-cover"
              />
              <div className="flex-1 w-full">
                <p className="text-gray-300 text-sm mb-2">
                  Our Website Development Services are designed to create
                  high-performing, user-friendly, and visually appealing
                  websites, driving your business forward. We combine creative
                  vision, technical expertise, and the latest technologies to
                  ensure your website stands out.
                </p>
              </div>
            </div>
            {/* Key Features */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Key <span className="text-lime-400">features</span> of website
                development
              </h2>
              <p className="text-gray-300 text-sm mb-4">
                We provide scalable, flexible, and secure website solutions. Our
                focus is on high performance, modern design, and seamless user
                experience. With cutting-edge technology, we ensure reliability
                and growth potential. Check out the key features of what we
                deliver:
              </p>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <ul className="flex-1 space-y-2 text-sm text-gray-200">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-lime-400 w-5 h-5" /> Custom
                    solutions for your business.
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-lime-400 w-5 h-5" /> Fully
                    responsive across all devices.
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-lime-400 w-5 h-5" /> Smooth and
                    modern user experience.
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-lime-400 w-5 h-5" />{" "}
                    SEO-optimized for better ranking.
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-lime-400 w-5 h-5" /> Fast,
                    secure, and reliable performance.
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-lime-400 w-5 h-5" /> Easy
                    content management with CMS.
                  </li>
                </ul>
                <img
                  src="https://www.acciobyte.com/_next/static/media/main.31cc89c1.jpg"
                  alt="Features"
                  className="rounded-lg w-full md:w-1/2 h-60 object-cover"
                />
              </div>
            </div>
            {/* Process Section */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Our <span className="text-lime-400">process</span> of website
                development
              </h2>
              <p className="text-gray-300 text-sm mb-6">
                Our website development approach is built on a customer-centric
                strategy that includes thorough design, development, and
                testing. We work closely with you, providing regular updates and
                transparent communication to ensure your vision is achieved. By
                following a structured methodology, we deliver websites that are
                reliable, scalable, and effective in helping you reach your
                business goals.
              </p>
            </div>
            {/* Process Section: Vertical Cards with Icon, Step, Text, and Image */}
            <div className="flex flex-col items-center justify-center gap-6 mb-10">
              {/* Step 1 */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex flex-col md:flex-row rounded-xl p-6 shadow-lg items-center gap-6"
              >
                <div className="flex items-center justify-center bg-[#232323] rounded-2xl w-full md:w-[40%] h-64 px-5 py-5">
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between gap-x-20 ">
                      <span className="p-2 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-shapes w-8 h-8 text-lime-400 text-default !w-16 !h-16"
                        >
                          <path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"></path>
                          <rect x="3" y="14" width="7" height="7" rx="1"></rect>
                          <circle cx="17.5" cy="17.5" r="3.5"></circle>
                        </svg>
                      </span>
                      <span className="flex flex-col items-start text-2xl">
                        <span>STEP</span>
                        <span className="text-lime-400">01</span>
                      </span>
                    </div>
                    <div className="flex flex-col gap-y-5 mt-5">
                      <h3 className="font-semibold text-2xl text-white">
                        Planning & Strategy
                      </h3>
                      <p className="text-sm text-gray-400">
                        We understand your business needs, target audience, and
                        goals to create a development roadmap.
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  src="https://www.acciobyte.com/_next/static/media/step1.816b4402.jpg"
                  alt="Planning & Strategy"
                  className="rounded-lg w-full md:w-[40%] h-64 object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex flex-col md:flex-row items-center rounded-xl p-6 shadow-lg gap-6"
              >
                <img
                  src="https://www.acciobyte.com/_next/static/media/step2.ae7e685e.jpg"
                  alt="Planning & Strategy"
                  className="rounded-lg w-full md:w-[40%] h-64 object-cover"
                />
                <div className=" bg-[#232323] rounded-2xl w-full md:w-[40%] h-64 px-5 py-5">
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between gap-x-20 ">
                      <span className="p-2 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-layers w-8 h-8 text-default !w-16 !h-16"
                        >
                          <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                          <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                          <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                        </svg>
                      </span>
                      <span className="flex flex-col items-start text-2xl">
                        <span>STEP</span>
                        <span className="text-lime-400">02</span>
                      </span>
                    </div>
                    <div className="flex flex-col gap-y-5 mt-5">
                      <h3 className="font-semibold text-2xl text-white">
                      Design & Development
                      </h3>
                      <p className="text-sm text-gray-400">
                      Our designers create a visually appealing UI, while developers build a functional, high-performance website
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex flex-col md:flex-row rounded-xl p-6 shadow-lg items-center gap-6"
              >
                <div className="flex items-center justify-center bg-[#232323] rounded-2xl w-full md:w-[40%] h-64 px-5 py-5">
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between gap-x-20 ">
                      <span className="p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-database w-8 h-8 text-default !w-16 !h-16"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
                      </span>
                      <span className="flex flex-col items-start text-2xl">
                        <span>STEP</span>
                        <span className="text-lime-400">03</span>
                      </span>
                    </div>
                    <div className="flex flex-col gap-y-5 mt-5">
                      <h3 className="font-semibold text-2xl text-white">
                      Testing & Deployment
                      </h3>
                      <p className="text-sm text-gray-400">
                      We conduct thorough testing to ensure security, responsiveness, and speed before launching the website.
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  src="https://www.acciobyte.com/_next/static/media/step3.a15b4ce3.jpg"
                  alt="Planning & Strategy"
                  className="rounded-lg w-full md:w-[40%] h-64 object-cover"
                />
              </motion.div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-10">
            <h2 className="text-3xl font-bold mb-6 text-lime-400">
              Lets address your questions today!
            </h2>
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
                    The timeline depends on the projects complexity and
                    requirements. Typically, a standard website takes 2-6 weeks
                    from planning to launch.
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
                  className="flex items-center justify-between hover:text-lime-400 cursor-pointer"
                >
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
            <p className="text-gray-400 mb-4">
              Our team is available to answer all your questions.
            </p>
            <a
              href="tel:+20106565314"
              className="bg-lime-400 text-black font-bold px-6 py-2 rounded-full hover:bg-lime-500 transition"
            >
              (20) 1065-65314
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
