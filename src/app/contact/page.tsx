"use client"
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Stats from '@/components/stats';
import PageHeader from '../../components/pagerheader';
export default function Page() {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className='w-full mb-3 sm:mb-5'>
          <PageHeader title={'Contact'} subtitle1={'Home'} subtitle2={'Contact'} classsubtitle2={'text-lime-400'} subtitle3={''} classsubtitle3={''} star={''}/>
          <div className="absolute bottom-0 left-0 right-0 bg-lime-400 py-2 sm:py-4 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ x: { repeat: Number.POSITIVE_INFINITY, repeatType: "loop", duration: 20, ease: "linear" } }}
        >
          <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-8 text-black font-bold text-xs sm:text-base md:text-xl">
            <span>Android App Development</span>
            <span className="text-lg sm:text-xl md:text-2xl">✱</span>
            <span>Website Development</span>
            <span className="text-lg sm:text-xl md:text-2xl">✱</span>
            <span>Digital Marketing</span>
            <span className="text-lg sm:text-xl md:text-2xl">✱</span>
            <span>UI/UX Design</span>
            <span className="text-lg sm:text-xl md:text-2xl">✱</span>
            <span>E-commerce Solutions</span>
            <span className="text-lg sm:text-xl md:text-2xl">✱</span>
            <span>Mobile App Development</span>
            <span className="text-lg sm:text-xl md:text-2xl">✱</span>
            <span>SEO Optimization</span>
            <span className="text-lg sm:text-xl md:text-2xl">✱</span>
            <span>Brand Identity</span>
            <span className="text-lg sm:text-xl md:text-2xl">✱</span>
            <span>Android App Development</span>
            <span className="text-lg sm:text-xl md:text-2xl">✱</span>
            <span>Website Development</span>
            <span className="text-lg sm:text-xl md:text-2xl">✱</span>
            <span>Digital Marketing</span>
            <span className="text-lg sm:text-xl md:text-2xl">✱</span>
            <span>UI/UX Design</span>
          </div>
        </motion.div>
      </div>
          </div>
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
        {/* Left Side: Info */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center order-2 lg:order-1"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Get in <span className="text-[#C6FF3A]">touch</span> with us
          </h1>
          <p className="text-gray-300 mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
            We`d love to hear from you! Whether you have questions, need support, or want to discuss a project, feel free to reach out.
          </p>
          <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full block mb-6 sm:mb-8 bg-[#C6FF3A]" />

          {/* Contact Info Cards */}
          <div className="rounded-xl sm:rounded-2xl bg-[#18191C] p-4 sm:p-6 mb-4 sm:mb-6 flex flex-col sm:flex-row gap-4 sm:gap-6 shadow-lg">
            <div className="flex-1 flex items-start gap-3 sm:gap-4">
              <Phone className="w-5 h-5 sm:w-7 sm:h-7 text-[#C6FF3A] mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold text-white text-sm sm:text-base">Phone Number</div>
                <div className="text-gray-300 text-sm sm:text-base">(309) 8855–314</div>
              </div>
            </div>
            <div className="flex-1 flex items-start gap-3 sm:gap-4">
              <Mail className="w-5 h-5 sm:w-7 sm:h-7 text-[#C6FF3A] mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold text-white text-sm sm:text-base">Email Address</div>
                <div className="text-gray-300 text-sm sm:text-base">contact@acciobyte.com</div>
              </div>
            </div>
          </div>

          <div className="rounded-xl sm:rounded-2xl bg-[#18191C] p-4 sm:p-6 flex items-start gap-3 sm:gap-4 shadow-lg">
            <MapPin className="w-5 h-5 sm:w-7 sm:h-7 text-[#C6FF3A] mt-1 flex-shrink-0" />
            <div>
              <div className="font-semibold text-white text-sm sm:text-base">Address</div>
              <div className="text-gray-300 text-sm sm:text-base">
                123 Creative Lane London, SW1A 1AA United Kingdom
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.form
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-xl sm:rounded-2xl bg-[#18191C] p-4 sm:p-6 lg:p-8 flex flex-col gap-3 sm:gap-4 shadow-lg order-1 lg:order-2"
          onSubmit={e => e.preventDefault()}
        >
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="flex-1 bg-[#111214] text-white placeholder-gray-400 rounded-md px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#C6FF3A]"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="flex-1 bg-[#111214] text-white placeholder-gray-400 rounded-md px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#C6FF3A]"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Phone No"
            className="bg-[#111214] text-white placeholder-gray-400 rounded-md px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#C6FF3A]"
            required
          />
          <input
            type="email"
            placeholder="E-mail"
            className="bg-[#111214] text-white placeholder-gray-400 rounded-md px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#C6FF3A]"
            required
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="bg-[#111214] text-white placeholder-gray-400 rounded-md px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#C6FF3A] resize-none"
            required
          />
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="mt-2 w-full py-2 sm:py-3 rounded-md font-semibold text-black text-sm sm:text-base shadow-md bg-[#C6FF3A]"
          >
            Submit Message
          </motion.button>
        </motion.form>
      </div>
    <div className="mt-6 sm:mt-8 lg:mt-10 w-full flex justify-center px-4 sm:px-6 lg:px-8">
      <iframe
        src="https://www.google.com/maps?ll=51.528642,-0.101599&z=17&t=m&hl=en-US&gl=US&mapclient=embed&q=London"
        width="100%"
        height="250"
        className="sm:h-[300px] lg:h-[350px]"
        style={{ border: 0, borderRadius: "12px" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map - London"
      ></iframe>
    </div>
    <Stats/>
    </div>
  );
}