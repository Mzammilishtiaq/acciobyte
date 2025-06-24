"use client";
import { motion } from "framer-motion";
import { CheckCircle} from "lucide-react";
import { useState } from "react";
import ServiceSidebar from "./service-sidebar";
import Image from "next/image";
interface Props {
  firstImage: string;
  firsttitle: string;
  featurekeyname: string;
  featurekeyimage: string;
  featurekeytitle: string;
  featurekeystep1: string;
  featurekeystep2: string;
  featurekeystep3: string;
  featurekeystep4: string;
  featurekeystep5: string;
  featurekeystep6: string;
  processkeyname: string;
  processkeytitle: string;
  planingcardimage1: string;
  planingcardimage2: string;
  planingcardimage3: string;
  planingcardtitle1: string;
  planingcardtitle2: string;
  planingcardtitle3: string;
  planingcarddescription1: string;
  planingcarddescription2: string;
  planingcarddescription3: string;
}
export default function ServicesBLog({
  featurekeyname,
  featurekeyimage,
  featurekeystep1,
  featurekeystep2,
  featurekeystep3,
  featurekeystep4,
  featurekeystep5,
  featurekeystep6,
  featurekeytitle,
  firstImage,
  firsttitle,
  planingcarddescription1,
  planingcarddescription2,
  planingcarddescription3,
  planingcardimage1,
  planingcardimage2,
  planingcardimage3,
  planingcardtitle1,
  planingcardtitle2,
  planingcardtitle3,
  processkeyname,
  processkeytitle,
}: Props) {
  const [faqOpen, setFaqOpen] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8 px-2 lg:px-32 mt-24">
      {/* Left: Steps and FAQ */}
      <div className="lg:col-span-3 flex flex-col gap-6 md:gap-8">
        {/* Steps Section */}
        {/* Web Development Hero & Features Section */}
        <div className="rounded-xl p-4 sm:p-6 mb-6 md:mb-10">
          {/* Hero Image & Intro */}
          <div className="flex lg:flex-col flex-col gap-4 sm:gap-6 items-center mb-6 md:mb-8">
            <Image
              src={firstImage}
              alt="Web Dev Hero"
              className="rounded-lg h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] w-full object-cover"
              width={100}
              height={100}
            />
            <div className="flex-1">
              <p className="text-gray-300 text-sm lg:text-lg sm:text-base mb-2">
               {firsttitle}
              </p>
            </div>
          </div>
          {/* Key Features */}
          <div className="mb-6 md:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-white">
              Key <span className="text-[#bff747]">features</span> of {featurekeyname}
              development
            </h2>
            <p className="text-gray-300 text-sm mb-4">
             {featurekeytitle}
            </p>
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-center">
              <ul className="flex-1 space-y-2 text-sm text-gray-200">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-[#bff747] w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />{" "}
                  {featurekeystep1}
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-[#bff747] w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />{" "}
                  {featurekeystep2}
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-[#bff747] w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />{" "}
                  {featurekeystep3}
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-[#bff747] w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />{" "}
                  {featurekeystep4}
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-[#bff747] w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />{" "}
                  {featurekeystep5}
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-[#bff747] w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />{" "}
                  {featurekeystep6}
                </li>
              </ul>
              <Image
                src={featurekeyimage}
                alt="Features"
                className="rounded-lg w-full lg:w-[50%] h-48 sm:h-56 md:h-60 object-cover"
                width={100}
                height={100}
              />
            </div>
          </div>
          {/* Process Section */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-white">
              Our <span className="text-[#bff747]">process</span> of {processkeyname}
              development
            </h2>
            <p className="text-gray-300 text-sm mb-6">
              {processkeytitle}
            </p>
          </div>
          {/* Process Section: Vertical Cards with Icon, Step, Text, and Image */}
          <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 mb-8 md:mb-10">
            {/* Step 1 */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex flex-col lg:flex-row rounded-xl p-4 sm:p-6 shadow-lg items-center gap-4 sm:gap-6 w-full"
            >
              <div className="flex items-center justify-center bg-[#232323] rounded-2xl w-full lg:w-[40%] h-48 sm:h-56 md:h-64 px-4 sm:px-5 py-4 sm:py-5">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between gap-x-8 sm:gap-x-12 md:gap-x-20">
                    <span className="p-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        // stroke-width="2"
                        // stroke-linecap="round"
                        // stroke-linejoin="round"
                        className="lucide lucide-shapes w-6 h-6 sm:w-8 sm:h-8 md:w-16 md:h-16 text-[#bff747] text-default"
                      >
                        <path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"></path>
                        <rect x="3" y="14" width="7" height="7" rx="1"></rect>
                        <circle cx="17.5" cy="17.5" r="3.5"></circle>
                      </svg>
                    </span>
                    <span className="flex flex-col items-start text-lg sm:text-xl md:text-2xl">
                      <span>STEP</span>
                      <span className="text-[#bff747]">01</span>
                    </span>
                  </div>
                  <div className="flex flex-col gap-y-3 sm:gap-y-5 mt-3 sm:mt-5">
                    <h3 className="font-semibold text-lg sm:text-xl md:text-2xl text-white">
                      {planingcardtitle1}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400">
                      {planingcarddescription1}
                    </p>
                  </div>
                </div>
              </div>
              <img
                src={planingcardimage1}
                alt="Planning & Strategy"
                className="rounded-lg w-full lg:w-[40%] h-48 sm:h-56 md:h-64 object-cover"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex flex-col lg:flex-row rounded-xl p-4 sm:p-6 shadow-lg gap-4 sm:gap-6 w-full"
            >
              <img
                src={planingcardimage2}
                className="rounded-lg w-full lg:w-[40%] h-48 sm:h-56 md:h-64 object-cover order-1 lg:order-1"
              />
              <div className="bg-[#232323] rounded-2xl w-full lg:w-[40%] h-48 sm:h-56 md:h-64 px-4 sm:px-5 py-4 sm:py-5 order-2 lg:order-2">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between gap-x-8 sm:gap-x-12 md:gap-x-20">
                    <span className="p-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        // stroke-width="2"
                        // stroke-linecap="round"
                        // stroke-linejoin="round"
                        className="lucide lucide-layers w-6 h-6 sm:w-8 sm:h-8 md:w-16 md:h-16 text-default"
                      >
                        <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                        <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                        <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                      </svg>
                    </span>
                    <span className="flex flex-col items-start text-lg sm:text-xl md:text-2xl">
                      <span>STEP</span>
                      <span className="text-[#bff747]">02</span>
                    </span>
                  </div>
                  <div className="flex flex-col gap-y-3 sm:gap-y-5 mt-3 sm:mt-5">
                    <h3 className="font-semibold text-lg sm:text-xl md:text-2xl text-white">
                      {planingcardtitle2}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400">
                      {planingcarddescription2}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex flex-col lg:flex-row rounded-xl p-4 sm:p-6 shadow-lg items-center gap-4 sm:gap-6 w-full"
            >
              <div className="flex items-center justify-center bg-[#232323] rounded-2xl w-full lg:w-[40%] h-48 sm:h-56 md:h-64 px-4 sm:px-5 py-4 sm:py-5">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between gap-x-8 sm:gap-x-12 md:gap-x-20">
                    <span className="p-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        // stroke-width="2"
                        // stroke-linecap="round"
                        // stroke-linejoin="round"
                        className="lucide lucide-database w-6 h-6 sm:w-8 sm:h-8 md:w-16 md:h-16 text-default"
                      >
                        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                        <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                        <path d="M3 12A9 3 0 0 0 21 12"></path>
                      </svg>
                    </span>
                    <span className="flex flex-col items-start text-lg sm:text-xl md:text-2xl">
                      <span>STEP</span>
                      <span className="text-[#bff747]">03</span>
                    </span>
                  </div>
                  <div className="flex flex-col gap-y-3 sm:gap-y-5 mt-3 sm:mt-5">
                    <h3 className="font-semibold text-lg sm:text-xl md:text-2xl text-white">
                      {planingcardtitle3}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400">
                     {planingcarddescription3}
                    </p>
                  </div>
                </div>
              </div>
              <img
                src={planingcardimage3}
                alt="Planning & Strategy"
                className="rounded-lg w-full lg:w-[40%] h-48 sm:h-56 md:h-64 object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-6 md:mt-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[#bff747]">
            Lets address your questions today!
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {/* FAQ Item 1 */}
            <motion.div
              className="bg-[#181818] rounded-lg p-3 sm:p-4 cursor-pointer"
              whileTap={{ scale: 0.98 }}
              onClick={() => setFaqOpen((prev) => !prev)}
            >
              <div className="flex justify-between items-center">
                <span className="text-sm sm:text-base">
                  How long does it take to develop a website?
                </span>
                <span className="text-[#bff747] text-lg sm:text-xl transition-transform duration-200">
                  {faqOpen ? "−" : "+"}
                </span>
              </div>
              {faqOpen && (
                <div className="mt-2 text-gray-400 text-xs sm:text-sm">
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
      <ServiceSidebar />
    </div>
  );
}
