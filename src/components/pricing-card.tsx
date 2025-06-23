"use client";
import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface PricingCardProps {
    title: string;
    description: string;
    price: string;
    features: string[];
    highlighted?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, description, price, features, highlighted }) => {
    const midPoint = Math.ceil(features.length / 2);
    const firstHalfFeatures = features.slice(0, midPoint);
    const secondHalfFeatures = features.slice(midPoint);

    return (
        <motion.div
            className="bg-[#1C1C1C] border border-gray-800 rounded-2xl p-4 sm:p-6 md:p-8 h-full flex flex-col"
            whileHover={{ scale: 1.02,
                 borderColor: '#A3E635',
                 boxShadow: '0 0 25px rgba(163, 230, 53, 0.5)' 
            }}
            transition={{ duration: 0.3 }}
        >
            <div className="flex-grow">
                <div className="flex flex-col md:flex-row justify-between md:items-start gap-3 sm:gap-4">
                    <div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-white">{title}</h3>
                        <p className="text-gray-400 mt-1 sm:mt-2 text-xs sm:text-sm">{description}</p>
                    </div>
                    <div className="text-left md:text-right flex-shrink-0 mt-3 sm:mt-4 md:mt-0">
                         <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white">
                            ${price}
                            <span className="text-sm sm:text-base md:text-lg text-gray-400">/per month</span>
                         </p>
                    </div>
                </div>

                <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-6 md:gap-x-8">
                    <ul className="space-y-3 sm:space-y-4">
                        {firstHalfFeatures.map((feature, index) => (
                            <li key={index} className="flex items-start">
                                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-lime-400 mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0" />
                                <span className="text-xs sm:text-sm md:text-base">{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <ul className={`space-y-3 sm:space-y-4 ${highlighted ? 'sm:border-l sm:border-gray-700 sm:pl-4 md:pl-8' : ''}`}>
                        {secondHalfFeatures.map((feature, index) => (
                            <li key={index} className="flex items-start">
                                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-lime-400 mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0" />
                                <span className="text-xs sm:text-sm md:text-base">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="mt-6 sm:mt-8 md:mt-10">
                <button className="bg-lime-400 text-black font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-xl w-full hover:bg-lime-500 transition-colors text-sm sm:text-base md:text-lg">
                    Get Started
                </button>
            </div>
        </motion.div>
    );
};

export default PricingCard; 