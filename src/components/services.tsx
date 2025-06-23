"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import wcfeServiceImag from '../../public/whyus-service.png' 
import Image from "next/image"
export default function Services() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-black text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 sm:top-40 left-4 sm:left-20 w-48 h-48 sm:w-96 sm:h-96 bg-lime-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 sm:bottom-40 right-4 sm:right-20 w-40 h-40 sm:w-80 sm:h-80 bg-lime-400/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Section */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="grid gap-8 md:gap-12 items-center md:grid-cols-2">
            <div>
              {/* Section Label */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 mb-6"
              >
                <span className="text-lime-400 text-lg">✱</span>
                <span className="text-lime-400 font-medium tracking-wider">OUR SERVICES</span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight mb-4 sm:mb-6"
              >
                Our <span className="text-lime-400 font-semibold">digital services</span>
                <br />
                to grow your brand
              </motion.h2>
            </div>

            <div>
              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8"
              >
                We help brands communicate to consumers, investors, and their teams through our comprehensive digital
                marketing services.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
              >
                <button
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base"
                >
                  All Services
                </button>

                <button
                  className="bg-lime-400 hover:bg-lime-500 text-black w-12 h-12 sm:w-14 sm:h-14 rounded-full p-0 transition-all duration-300 hover:scale-110 flex items-center justify-center"
                >
                  <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-20">
          {/* Website Development Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 hover:border-lime-400/50 transition-all duration-300 hover:bg-gray-800/50 relative">
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-lime-400">
                    <path
                      d="M3 12h4l3-8 4 16 3-8h4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <ArrowUpRight className="h-6 w-6 text-lime-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-white">Website Development</h3>

              <p className="text-gray-400 leading-relaxed text-sm">
                We build responsive, fast, and secure websites tailored to your brands needs. Whether its an eCommerce
                store, a corporate website, or a custom web application, we deliver top-notch solutions.
              </p>
            </div>
          </motion.div>

          {/* Digital Marketing Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 hover:border-lime-400/50 transition-all duration-300 hover:bg-gray-800/50 relative">
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-lime-400 rounded-full flex items-center justify-center">
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-lime-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-lime-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="h-6 w-6 text-lime-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-white">Digital Marketing</h3>

              <p className="text-gray-400 leading-relaxed text-sm">
                Enhance your online presence with our result-driven digital marketing services, including social media
                management, pay-per-click (PPC) advertising, email marketing, and brand growth strategies.
              </p>

              <div className="w-2 h-2 bg-lime-400 rounded-full mt-4"></div>
            </div>
          </motion.div>

          {/* Graphic Designing Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 hover:border-lime-400/50 transition-all duration-300 hover:bg-gray-800/50 relative">
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-lime-400">
                    <path
                      d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <ArrowUpRight className="h-6 w-6 text-lime-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-white">Graphic Designing</h3>

              <p className="text-gray-400 leading-relaxed text-sm">
                Our creative design team provides professional branding, UI/UX design, logo design, brochures, and other
                visuals that make your business stand out in a competitive market.
              </p>
            </div>
          </motion.div>

          {/* Content Writing Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 hover:border-lime-400/50 transition-all duration-300 hover:bg-gray-800/50 relative">
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-lime-400 rounded-full flex items-center justify-center">
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-lime-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-lime-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="h-6 w-6 text-lime-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-white">Content Writing</h3>

              <p className="text-gray-400 leading-relaxed text-sm">
                Engage your audience with high-quality, SEO-friendly content. Our expert writers craft compelling blog
                posts, website content, product descriptions, and marketing copy to boost your brands visibility.
              </p>
            </div>
          </motion.div>

          {/* Search Engine Optimization Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 hover:border-lime-400/50 transition-all duration-300 hover:bg-gray-800/50 relative">
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-lime-400 rounded-full flex items-center justify-center">
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-lime-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-lime-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="h-6 w-6 text-lime-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-white">Search Engine Optimization (SEO)</h3>

              <p className="text-gray-400 leading-relaxed text-sm">
                Get found on search engines and increase organic traffic with our SEO services, including keyword
                research, on-page optimization, technical SEO, and link-building strategies.
              </p>
            </div>
          </motion.div>

          {/* Software Development Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 hover:border-lime-400/50 transition-all duration-300 hover:bg-gray-800/50 relative">
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-lime-400 rounded-full flex items-center justify-center">
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-lime-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-lime-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="h-6 w-6 text-lime-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-white">Software Development</h3>

              <p className="text-gray-400 leading-relaxed text-sm">
                We offer tailored software solutions to help businesses automate workflows, manage data efficiently, and
                improve operational efficiency through innovative applications.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-20"
        >
          <div className="border-2 border-lime-400 rounded-3xl p-4 sm:p-8 md:p-12 bg-gray-900/20">
            <div className="grid gap-8 md:gap-12 items-start md:grid-cols-2">
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-12 leading-tight">
                  Expertise that
                  <br />
                  drives digital
                  <br />
                  <span className="text-lime-400">success</span>
                </h3>

                <div className="grid grid-cols-2 gap-4 sm:gap-8">
                  <div>
                    <div className="text-3xl sm:text-5xl md:text-6xl font-bold text-lime-400 mb-2 sm:mb-4">+60%</div>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      By optimizing your website for search engines.
                    </p>
                  </div>

                  <div>
                    <div className="text-3xl sm:text-5xl md:text-6xl font-bold text-lime-400 mb-2 sm:mb-4">+30%</div>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      Rise in revenue as more visitors convert into paying customers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 sm:space-y-8">
                <div>
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-lime-400 text-lg mt-1">✱</span>
                    <h4 className="text-xl font-bold text-white">Social Media Management:</h4>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Our social media management services focus on building and enhancing your brands online presence.
                    We create engaging content, manage your social media accounts, and analyze performance.
                  </p>
                </div>

                <div>
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-lime-400 text-lg mt-1">✱</span>
                    <h4 className="text-xl font-bold text-white">E-commerce Solutions:</h4>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Our e-commerce solutions are designed to create seamless online shopping experiences. From
                    user-friendly website design to secure payment processing and inventory management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Section */}
        <div className="grid gap-8 md:gap-12 items-center md:grid-cols-2">
          <div>
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="text-lime-400 text-lg">✱</span>
              <span className="text-lime-400 font-medium tracking-wider">WHY CHOOSE</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold leading-tight mb-8"
            >
              Expertise for <span className="text-lime-400">your digital</span>
              <br />
              growth journey
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-400 leading-relaxed mb-8"
            >
              Our dedicated team is committed to understanding your unique needs, ensuring that we provide innovative
              strategies that drive results. With a focus on quality and integrity.
            </motion.p>

            {/* Feature Boxes */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors duration-300"
              >
                <h4 className="text-xl font-bold mb-3">Data-Driven Approach</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We leverage data and insights to make informed decisions that lead to more effective and efficient
                  solutions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors duration-300 relative"
              >
                <h4 className="text-xl font-bold mb-3">Competitive Pricing</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We offer our top-quality services at competitive prices, providing you with great value for your
                  investment.
                </p>
                <div className="absolute bottom-4 right-4 w-3 h-3 bg-lime-400 rounded-full"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
                className="border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors duration-300"
              >
                <h4 className="text-xl font-bold mb-3">Ethical Business Practices</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We maintain the highest level of professionalism and ethical standards professionalism in all our
                  business dealings.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Professional Meeting Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden">
              <Image
                src={wcfeServiceImag}
                alt="Professional business meeting with team members discussing strategy"
                className="w-full h-48 sm:h-72 md:h-96 object-cover"
              />
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-6 sm:w-8 h-6 sm:h-8 bg-lime-400 rounded-full opacity-60"
            ></motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-4 sm:w-6 h-4 sm:h-6 bg-lime-400/60 rounded-full"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
