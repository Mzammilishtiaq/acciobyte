"use client";

import { motion } from 'framer-motion'
import { ChevronDown, X } from 'lucide-react'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Logo from '../../public/logo.png'
import {useRouter} from 'next/navigation'

function Navbar() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bgColor, setBgColor] = useState('bg-transparent');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    setLastScrollY(window.scrollY);
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 2) {
        setBgColor('bg-[#010203]');
      } else if (currentScrollY < lastScrollY) {
        setBgColor('bg-transparent');
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 px-4 sm:px-6 py-4 sm:py-6 ${bgColor}`}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 relative">
            <Image src={Logo} alt=''/>
          </div>
        </motion.div>

        {/* Hamburger for mobile */}
        <div className="lg:hidden">
          <button 
            className="text-white focus:outline-none z-50"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={closeMenu}></div>
        )}

        {/* Mobile Navigation Menu */}
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : '100%' }}
          transition={{ duration: 0.3 }}
          className={`fixed top-0 right-0 h-full w-80 bg-[#010203] z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6">
            <div className="flex justify-end mb-8">
              <button
                onClick={closeMenu}
                className="text-white hover:text-lime-400 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-6">
              <a
                href=""
                className="block text-white hover:text-lime-400 transition-colors font-medium text-lg"
                onClick={closeMenu}
              >
                HOME
              </a>
              <a
                href="/project"
                className="block text-white hover:text-lime-400 transition-colors font-medium text-lg"
                onClick={closeMenu}
              >
                PROJECTS
              </a>
              <a
                href="/pricing_plan"
                className="block text-white hover:text-lime-400 transition-colors font-medium text-lg"
                onClick={closeMenu}
              >
                PRICING PLAN
              </a>
              <a
                href="/blog"
                className="block text-white hover:text-lime-400 transition-colors font-medium text-lg"
                onClick={closeMenu}
              >
                BLOGS
              </a>
              
              {/* Mobile Services Dropdown */}
              <div className="space-y-2">
                <div className="text-white font-medium text-lg">SERVICES</div>
                <div className="pl-4 space-y-3">
                  <a
                    href="/services/web-development"
                    className="block text-gray-300 hover:text-lime-400 transition-colors"
                    onClick={closeMenu}
                  >
                    Web Development
                  </a>
                  <a
                    href="/services/app-development"
                    className="block text-gray-300 hover:text-lime-400 transition-colors"
                    onClick={closeMenu}
                  >
                    App Development
                  </a>
                  <a
                    href="/services/digital-marketing"
                    className="block text-gray-300 hover:text-lime-400 transition-colors"
                    onClick={closeMenu}
                  >
                    Digital Marketing
                  </a>
                  <a
                    href="/services/graphic-designing"
                    className="block text-gray-300 hover:text-lime-400 transition-colors"
                    onClick={closeMenu}
                  >
                    Graphic Designing
                  </a>
                  <a
                    href="/services/social-media-marketing"
                    className="block text-gray-300 hover:text-lime-400 transition-colors"
                    onClick={closeMenu}
                  >
                    Social Media Marketing
                  </a>
                  <a
                    href="/services/content-writing"
                    className="block text-gray-300 hover:text-lime-400 transition-colors"
                    onClick={closeMenu}
                  >
                    Content Writing
                  </a>
                  <a
                    href="/services/search-engine-optimization"
                    className="block text-gray-300 hover:text-lime-400 transition-colors"
                    onClick={closeMenu}
                  >
                    Search Engine Optimization
                  </a>
                  <a
                    href="/services/software-development"
                    className="block text-gray-300 hover:text-lime-400 transition-colors"
                    onClick={closeMenu}
                  >
                    Software Development
                  </a>
                  <a
                    href="/services/cyber-secuirty"
                    className="block text-gray-300 hover:text-lime-400 transition-colors"
                    onClick={closeMenu}
                  >
                    Cyber Security
                  </a>
                  <a
                    href="/services/e-commerce"
                    className="block text-gray-300 hover:text-lime-400 transition-colors"
                    onClick={closeMenu}
                  >
                    E-Commerce
                  </a>
                  <a
                    href="/services/illustrations"
                    className="block text-gray-300 hover:text-lime-400 transition-colors"
                    onClick={closeMenu}
                  >
                    Illustrations
                  </a>
                  <a
                    href="/services/video-animation"
                    className="block text-gray-300 hover:text-lime-400 transition-colors"
                    onClick={closeMenu}
                  >
                    Video Animation
                  </a>
                </div>
              </div>
              
              <a
                href="/about"
                className="block text-white hover:text-lime-400 transition-colors font-medium text-lg"
                onClick={closeMenu}
              >
                ABOUT US
              </a>
              
              {/* Mobile Contact Button */}
              <button 
                className="w-full bg-lime-400 hover:bg-lime-500 text-black font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 text-lg"
                onClick={() => {
                  closeMenu();
                  router.push('/contact');
                }}
              >
                Contact Us
              </button>
            </div>
          </div>
        </motion.div>

        {/* Desktop Navigation Links */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden lg:flex items-center space-x-4 xl:space-x-8"
        >
          <a
            href=""
            className="text-white hover:text-lime-400 transition-colors font-medium"
          >
            HOME
          </a>
          <a
            href="/project"
            className="text-white hover:text-lime-400 transition-colors font-medium"
          >
            PROJECTS
          </a>
          <a
            href="/pricing_plan"
            className="text-white hover:text-lime-400 transition-colors font-medium"
          >
            PRICING PLAN
          </a>
          <a
            href="/blog"
            className="text-white hover:text-lime-400 transition-colors font-medium"
          >
            BLOGS
          </a>
          <div className="relative group">
            <button
              type="button"
              className="text-white hover:text-lime-400 transition-colors font-medium flex items-center focus:outline-none"
            >
              SERVICES
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200 z-20 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto">
              <a
                href="/services/web-development"
                className="block px-4 py-2 text-gray-800 hover:bg-lime-100"
              >
                Web Development
              </a>
              <a
                href="/services/app-development"
                className="block px-4 py-2 text-gray-800 hover:bg-lime-100"
              >
                App Development
              </a>
              <a
                href="/services/digital-marketing"
                className="block px-4 py-2 text-gray-800 hover:bg-lime-100"
              >
                Digital Marketing
              </a>
              <a
                href="/services/graphic-designing"
                className="block px-4 py-2 text-gray-800 hover:bg-lime-100"
              >
                Graphic Designing
              </a>
              <a
                href="/services/social-media-marketing"
                className="block px-4 py-2 text-gray-800 hover:bg-lime-100"
              >
                Social Media Marketing
              </a>
              <a
                href="/services/content-writing"
                className="block px-4 py-2 text-gray-800 hover:bg-lime-100"
              >
               Content Writing
              </a>
              <a
                href="/services/search-engine-optimization"
                className="block px-4 py-2 text-gray-800 hover:bg-lime-100"
              >
                Search Engine Optimization
              </a>
              <a
                href="/services/software-development"
                className="block px-4 py-2 text-gray-800 hover:bg-lime-100"
              >
                Software Development
              </a>
              <a
                href="/services/cyber-secuirty"
                className="block px-4 py-2 text-gray-800 hover:bg-lime-100"
              >
               Cyber Security
              </a>
              <a
                href="/services/e-commerce"
                className="block px-4 py-2 text-gray-800 hover:bg-lime-100"
              >
                E-Commerce
              </a>
              <a
                href="/services/illustrations"
                className="block px-4 py-2 text-gray-800 hover:bg-lime-100"
              >
                Illustrations
              </a>
              <a
                href="/services/video-animation"
                className="block px-4 py-2 text-gray-800 hover:bg-lime-100"
              >
               Video Animation
              </a>
            </div>
          </div>
          <a
            href="/about"
            className="text-white hover:text-lime-400 transition-colors font-medium"
          >
            ABOUT US
          </a>
        </motion.div>

        {/* Contact Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden sm:block"
        >
          <button className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 hover:scale-105 text-sm sm:text-base" onClick={()=>router.push('/contact')}>
            Contact Us
          </button>
        </motion.div>
      </div>
    </nav>
  )
}

export default Navbar