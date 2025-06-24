"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Star, Facebook, Instagram, Twitter, Phone, ChevronDown } from "lucide-react";
import Image from "next/image";
import PageHeader from "../../components/pagerheader";
import AboutAgency from "@/components/about-agency";
import Features from "@/components/features";
import Stats from "@/components/stats";
import ScrollBanner from "@/components/ScrollBanner";
import TeadImage from "../../../public/team.jpg";
import { useState } from "react";
import wcfeServiceImag from "../../../public/whyus-service.png";
import Testimonial from "@/components/testmonial";

export default function AboutPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);
  const teamMembers = [
    {
      name: "Emily Davis",
      role: "Product Manager",
      image: TeadImage,
      socials: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        twitter: "https://twitter.com",
      },
    },
    {
      name: "Alex Johnson",
      role: "Lead Developer",
      image: TeadImage,
      socials: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        twitter: "https://twitter.com",
      },
    },
    {
      name: "Samantha Miller",
      role: "UX/UI Designer",
      image: TeadImage,
      socials: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        twitter: "https://twitter.com",
      },
    },
    {
      name: "Mike Wilson",
      role: "Marketing Head",
      image: TeadImage,
      socials: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        twitter: "https://twitter.com",
      },
    },
  ];

  const faqs = [
    {
      question: "What services does your agency offer?",
      answer: "We offer a wide range of digital services, including web development, app development, SEO, content writing, graphic design, and more. Our goal is to provide comprehensive solutions to help your business grow.",
    },
    {
      question: "How long does a typical project take?",
      answer: "The timeline for a project varies depending on its scope and complexity. We work closely with you to establish a realistic timeline during the initial consultation.",
    },
    {
      question: "Do you work with small businesses?",
      answer: "Absolutely! We enjoy working with businesses of all sizes, from startups to large enterprises. We tailor our services to meet the unique needs and budgets of small businesses.",
    },
    {
      question: "Can you help with existing websites?",
      answer: "Yes, we can. Whether you need a complete redesign, new features, or ongoing maintenance, our team can help improve your existing website's performance and user experience.",
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col gap-y-3">
      <PageHeader
        title={"About"}
        subtitle1={"Home"}
        subtitle2={"about"}
        classsubtitle2={""}
        subtitle3={""}
        classsubtitle3={""}
        star={""}
      />
      <ScrollBanner />
      <AboutAgency />
      <Features />

      <div className="min-h-screen bg-black text-white sm:px-6 py-12 sm:py-16 lg:py-28 flex flex-col lg:flex-col gap-8 sm:gap-12 lg:px-32">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 flex lg:flex-row flex-row items-start lg:items-center justify-around w-full gap-5 lg:gap-8"
        >
          <div className="flex items-start flex-col w-full lg:w-auto">
            <div className="flex items-center gap-2 mb-4">
              <Star
                className="text-[#bff747] w-4 h-4 sm:w-5 sm:h-5"
                fill="#c6ff4a"
              />
              <span className="text-[#bff747] font-semibold text-base sm:text-lg">
                OUR TEAM
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-4 sm:mb-6">
              Dynamic <span className="font-bold text-[#bff747]">team</span>
              <br />
              of digital experts
            </h1>
          </div>
          <div className="flex flex-col items-start w-full lg:w-auto">
            <p className="text-base sm:text-lg text-gray-300 max-w-xl mb-6 sm:mb-8">
              Our digital services empower brands with innovative strategies and
              solutions for sustainable growth and engagement. Our digital
              services empower brands with innovative strategies and solutions
              for sustainable growth and engagement.
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-lg flex items-center gap-2 transition">
                More About
              </button>
              <span className="bg-[#bff747] rounded-full p-2 sm:p-3 flex items-center justify-center">
                <ArrowUpRight className="text-black w-4 h-4 sm:w-6 sm:h-6" />
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Section - Team Images */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-end"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="relative group rounded-2xl overflow-hidden shadow-lg h-96"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={member.image}
                alt={member.name}
                layout="fill"
                objectFit="cover"
                className="transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
             {hoveredIndex === index && ( 
             <div className="absolute inset-x-0 bottom-0 p-6 text-white mx-auto">
                <h3 className="text-2xl font-bold flex items-center">
                  {member.name}
                  <span className="w-2.5 h-2.5 bg-[#bff747] rounded-full ml-2"></span>
                </h3>
                <p className="text-gray-300 mb-4">{member.role}</p>
                
                  <motion.div
                    className="flex items-center mx-auto gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <a
                      href={member.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-[#bff747] flex items-center justify-center text-white hover:bg-[#bff747] hover:text-black transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href={member.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-[#bff747] flex items-center justify-center text-white hover:bg-[#bff747] hover:text-black transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-[#bff747] flex items-center justify-center text-white hover:bg-[#bff747] hover:text-black transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  </motion.div>
                
              </div>)}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Why Choose Section */}
      <div className=" relative flex flex-col gap-10 px-4 lg:px-32 overflow-hidden">
          <div className="w-full flex">
            <div className="w-full">
              {/* Section Label */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 mb-6"
              >
                <span className="text-[#bff747] text-lg">✱</span>
                <span className="text-[#bff747] font-medium tracking-wider">
                  WHY CHOOSE
                </span>
              </motion.div>
              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-normal leading-tight mb-8"
              >
                Expertise for{" "}
                <span className="text-[#bff747] text-semibold">
                  your digital
                </span>
                <br />
                growth journey
              </motion.h2>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-400 leading-relaxed mb-8"
            >
              Our dedicated team is committed to understanding your unique
              needs, ensuring that we provide innovative strategies that drive
              results. With a focus on quality and integrity.
            </motion.p>
          </div>

          <div className="flex lg:flex-row flex-col gap-x-10 w-full">
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
                  We leverage data and insights to make informed decisions that
                  lead to more effective and efficient solutions.
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
                  We offer our top-quality services at competitive prices,
                  providing you with great value for your investment.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
                className="border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors duration-300"
              >
                <h4 className="text-xl font-bold mb-3">
                  Ethical Business Practices
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We maintain the highest level of professionalism and ethical
                  standards professionalism in all our business dealings.
                </p>
              </motion.div>
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
                  className="w-[50vw] h-[100vh] sm:h-72 md:h-96 object-cover"
                />
              </div>
            </motion.div>
          </div>
          <motion.div
             initial={{ rotate: 0 }}
             animate={{ rotate: 360 }}
             transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
             className="-z-10 w-[20vw] h-[50vh] rounded-full absolute -right-20 top-48"
            >
          <img src="https://www.acciobyte.com/_next/static/media/hex.eced7c60.png" alt="" className="w-[50vw] h-[50vh]" />
          </motion.div>
        </div>
       
        <Testimonial/>
 <div className="bg-black text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side with image */}
          <div className="relative h-[550px] w-[30vw] rounded-2xl overflow-hidden ml-10">
              <Image
                  src={TeadImage}
                  alt="Support agent"
                  className="rounded-2xl w-[30vw]"
              />
              <div className="absolute bottom-8 right-8 bg-black/60 text-white px-5 py-3 rounded-full flex items-center gap-3 backdrop-blur-sm">
                  <Phone className="text-[#bff747] w-6 h-6" />
                  <span className="text-lg font-semibold tracking-wider">(30) 8855–314</span>
              </div>
               <div className="absolute top-1/2 left-0 -translate-x-1/2 w-4 h-4 bg-[#bff747] rounded-full"></div>
          </div>
  
          {/* Right side with FAQ */}
          <div className="w-full">
            <div className="flex items-center gap-2 mb-4">
              <Star className="text-[#bff747] w-5 h-5" />
              <span className="text-[#bff747] font-semibold tracking-wide">
                HAVE ANY QUESTIONS?
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
              Let us address your <br />
              <span className="text-[#bff747] font-bold">questions</span> today!
            </h2>
  
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-[#1A1A1A] rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                    className="w-full flex justify-between items-center text-left p-6 hover:bg-[#222222] transition-colors"
                  >
                    <span className="text-lg font-medium text-gray-200">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                        openQuestion === index ? "rotate-180 text-[#bff747]" : ""
                      }`}
                    />
                  </button>
                  {openQuestion === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="text-gray-400 px-6 pb-6">{faq.answer}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Stats />
    </div>
  );
}
