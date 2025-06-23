"use client"

import { motion } from "framer-motion"
import { Mail, Phone } from "lucide-react"
import Image from "next/image"
import Logo from '../../public/logo.png'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Contact */}
          <div>
            <Image src={Logo} alt="Acciobyte Logo" width={90} height={90} className="mb-4" />
            <div className="text-base mb-2">14 West Street Wakefield WF2 8UA England</div>
            <div className="flex items-center text-base mb-1">
              <Phone className="h-4 w-4 mr-2 text-lime-400" />
              +447861402051
            </div>
            <div className="flex items-center text-base">
              <Mail className="h-4 w-4 mr-2 text-lime-400" />
              contact@acciobyte.com
            </div>
          </div>

          {/* Popular Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Popular Services</h4>
            <ul className="space-y-1 text-base">
              <li>Website Development</li>
              <li>Android & iOS Development</li>
              <li>Digital Marketing</li>
              <li>Graphic Designing</li>
              <li>Social Media Marketing</li>
              <li>Content Writing</li>
              <li className="">Search Engine Optimization</li>
              <li>Software Development</li>
              <li>Cyber Security</li>
              <li>E-Commerce</li>
              <li>Illustrations</li>
              <li>Video Animation</li>
              <li>Point of Sale (POS)</li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-1 text-base">
              <li>Home</li>
              <li>Project</li>
              <li>Services</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Services</li>
            </ul>
            {/* <div className="mt-6 flex items-center">
              <span className="inline-block w-4 h-4 bg-lime-400 rounded-full"></span>
            </div> */}
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Subscribe Our Newsletter</h4>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="your_email@example.com"
                className="w-full px-4 py-3 rounded bg-white text-black placeholder-gray-500 focus:outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-lime-400 hover:bg-lime-300 text-black font-semibold py-3 rounded transition-colors"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 text-center py-6 text-gray-300 text-base">
        &copy; 2025 — Acciobyte All Rights Reserved.
      </div>
    </footer>
  )
}
