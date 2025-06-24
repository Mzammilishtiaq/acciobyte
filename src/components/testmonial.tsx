"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Star, ArrowRight, ArrowLeft, Wallet, AppWindow, ShieldCheck, Headphones, Gem, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    text: "Super impressed with their mobile app development service. The team listened carefully to our needs and delivered an app that exceeded expectations. A little delay in testing phase but they managed it professionally. Highly recommended!",
    author: "Olivia Reed",
    title: "Marketing Manager",
    avatar: "/app1.jpg",
    logo: "/logo.png"
  },
  {
    text: "The web development team was fantastic. They created a stunning and highly functional website for us, which has significantly boosted our online presence. The project was delivered on time and on budget.",
    author: "John Doe",
    title: "CEO, Tech Solutions",
    avatar: "/app2.jpg",
    logo: "/logo.png"
  },
  {
    text: "Working with them on our SEO was a game-changer. Our search engine rankings have soared, and we're seeing a consistent increase in organic traffic. Their expertise is truly top-notch.",
    author: "Jane Smith",
    title: "Head of Growth",
    avatar: "/app3.jpg",
    logo: "/logo.png"
  }
];

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <div className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start mb-16">
                    <div className="w-full md:w-1/2">
                        <div className="flex items-center space-x-2 mb-4">
                            <Star className="text-lime-300" size={20} />
                            <p className="font-semibold tracking-widest text-sm">TESTIMONIALS</p>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                            Read what they have to say about <span className="text-lime-300">working with us</span>
                        </h2>
                    </div>
                    <div className="w-full md:w-1/2 md:pl-12 flex flex-col items-start md:items-end mt-4 md:mt-0">
                        <p className="text-gray-400 mb-6 max-w-md text-left md:text-right">
                            Discover how our clients have achieved success through our innovative solutions and dedicated support.
                        </p>
                        <div className="flex items-center space-x-4">
                            <button className="bg-zinc-800 hover:bg-zinc-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300 text-sm">
                                All Testimonials
                            </button>
                            <button className="bg-lime-300 hover:bg-[#bff747] text-black p-3 rounded-full transition duration-300">
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center mb-24">
                    <div className="w-full lg:w-1/3 text-center lg:text-left">
                        <p className="text-8xl font-bold text-lime-300">4.9</p>
                        <div className="flex justify-center lg:justify-start my-2">
                            {[...Array(5)].map((_, i) => <Star key={i} className="text-lime-300" fill="#a3e635" />)}
                        </div>
                        <p className="text-gray-400 mb-4">(40+ Reviews)</p>
                        <p className="text-lg font-semibold mb-6">Customer experiences that speak for themselves</p>
                        <div className="flex justify-center lg:justify-start -space-x-2">
                            {['/app1.jpg', '/app2.jpg', '/app3.jpg', '/app4.jpg', '/app5.jpg'].map((src, i) => (
                                <Image key={i} src={src} alt={`person ${i+1}`} width={40} height={40} className="rounded-full border-2 border-black object-cover" />
                            ))}
                        </div>
                    </div>

                    <div className="w-full lg:w-2/3 relative">
                         <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="bg-zinc-900/30 p-8 rounded-lg border border-zinc-800 relative backdrop-blur-sm"
                            >
                                <div className="flex items-center mb-4">
                                    <Image src={currentTestimonial.logo} alt="logo" width={100} height={40} className="filter grayscale brightness-200" />
                                    <div className="flex ml-auto">
                                        {[...Array(5)].map((_, i) => <Star key={i} className="text-lime-300" fill="#a3e635" />)}
                                    </div>
                                </div>
                                <p className="text-gray-300 lg:text-lg text-sm mb-6 h-32">
                                    {currentTestimonial.text}
                                </p>
                                <div className="flex items-center mt-20">
                                    <Image src={currentTestimonial.avatar} alt={currentTestimonial.author} width={60} height={60} className="rounded-full object-cover" />
                                    <div className="ml-4">
                                        <p className="font-semibold">{currentTestimonial.author}</p>
                                        <p className="text-gray-400">{currentTestimonial.title}</p>
                                    </div>
                                    <div className="flex ml-auto space-x-2">
                                        <button onClick={prevTestimonial} className="bg-zinc-800 hover:bg-zinc-700 text-white p-3 rounded-full transition-colors">
                                            <ArrowLeft size={20} />
                                        </button>
                                        <button onClick={nextTestimonial} className="bg-zinc-800 hover:bg-zinc-700 text-white p-3 rounded-full transition-colors">
                                            <ArrowRight size={20} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                         </AnimatePresence>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800 rounded-lg">
                    {[
                        { icon: Wallet, title: "Low Cost", items: ["Competitive fee", "Flexible rates"] },
                        { icon: AppWindow, title: "Permission Less", items: ["Open for integration", "Run your own nodes"] },
                        { icon: ShieldCheck, title: "Secure Data", items: ["Open source sheet", "360 Security"] },
                        { icon: Headphones, title: "24 X 7 Support", items: ["Toll free number", "Ticket systems"] }
                    ].map((feature, i) => (
                        <div key={i} className="p-6 bg-black">
                            <div className="p-3 bg-lime-900/50 inline-block rounded-full mb-4 border border-lime-500/50">
                               <feature.icon className="text-lime-300" size={32} />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                            <ul className="space-y-2 text-gray-400">
                                {feature.items.map((item, j) => (
                                    <li key={j} className="flex items-center">
                                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 + i * 0.1 + j * 0.1 }}>
                                          <Gem size={12} className="text-lime-300 mr-3" />
                                        </motion.div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black via-zinc-900 to-black opacity-80 z-0"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-500/10 rounded-full filter blur-3xl animate-blob"></div>
            <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-green-500/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div> */}
        </div>
    );
};

export default Testimonial;
