"use client";

import React, { useState, FC } from "react";
import Image from "next/image";
// Framer Motion imports removed

// --- Removed Framer Motion Variants ---
/*
const containerVariants: Variants = { ... };
const cardVariants: Variants = { ... };
const titleVariants: Variants = { ... };
const imageHoverVariants = (isHovered: boolean): TargetAndTransition => ({ ... });
*/

// --- Component ---

const OurServices: FC = () => {
    // State is kept to manage hover effects using simple CSS/Tailwind classes instead of motion
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    return (
        <div className="bg-black text-white flex flex-col items-center py-20 px-4 max-w-7xl mx-auto space-y-16 overflow-hidden">
            
            {/* Title - Removed motion.h1 and animation props */}
            <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400"
            >
                Our Services
            </h1>

            {/* Services Grid Container - Removed motion.section and animation props */}
            <section 
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full"
            >

                {/* ----------------- Card 1: Website Development ----------------- */}
                {/* Card wrapper - Removed motion.div and animation props */}
                <div
                    className="relative group overflow-hidden"
                    onMouseEnter={() => setHoveredCard(1)}
                    onMouseLeave={() => setHoveredCard(null)}
                >
                    {/* Inner Div with simple Tailwind hover effects */}
                    <div className={`
                        relative border border-gray-800 rounded-3xl p-8 flex flex-col bg-gradient-to-br from-gray-900/50 to-black shadow-2xl transition-all duration-500 hover:border-gray-700 min-h-[600px]
                        ${hoveredCard === 1 ? 'shadow-blue-500/30 -translate-y-1' : ''}
                        transition duration-300 ease-in-out
                    `}>
                        
                        {/* Top Section */}
                        <div className="relative z-10 space-y-4 mb-8">
                            <div className="flex gap-3 text-sm text-gray-400 flex-wrap">
                                <span className="bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700">Website Development</span>
                                <span className="bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700">Webflow Dev</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                                Website Development
                            </h2>
                            <p className="text-gray-400 leading-relaxed text-base md:text-lg max-w-lg">
                                Convert designs to websites, migrate from outdated CMS to Webflow, or kickstart with Website design to Webflow.
                            </p>
                        </div>

                        {/* Image Section - Apply hover transform via simple className */}
                        <div className="relative flex-1 flex items-center justify-center">
                            {/* Replaced motion.div with a standard div and dynamic Tailwind class */}
                            <div
                                className={`
                                    transition-transform duration-500 ease-in-out 
                                    ${hoveredCard === 1 ? 'scale-[1.05] -translate-y-2' : ''}
                                `}
                            >
                                <Image
                                    src="https://cdn.prod.website-files.com/6333c43995273d509e9a2a16/66ff972e9a10f57c14594888_element-10.svg"
                                    alt="Website Development"
                                    width={400}
                                    height={400}
                                    className="object-contain drop-shadow-2xl"
                                /> 
                            </div>

                            {/* Subtle Glow Effect on Hover (Using state and opacity classes) */}
                            <div
                                className={`
                                    absolute inset-0 bg-gradient-to-t from-blue-500/5 via-transparent to-transparent rounded-3xl transition-opacity duration-700
                                    ${hoveredCard === 1 ? 'opacity-100' : 'opacity-0'}
                                `}
                            ></div>
                        </div>

                        {/* Corner Accents (Subtle) */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-gray-800/20 to-transparent rounded-bl-full"></div>
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-gray-800/20 to-transparent rounded-tr-full"></div>
                    </div>
                </div>

                {/* ----------------- Card 2: Website Design ----------------- */}
                {/* Card wrapper - Removed motion.div and animation props */}
                <div
                    className="relative group overflow-hidden"
                    onMouseEnter={() => setHoveredCard(2)}
                    onMouseLeave={() => setHoveredCard(null)}
                >
                    {/* Inner Div with simple Tailwind hover effects */}
                    <div className={`
                        relative border border-gray-800 rounded-3xl p-8 flex flex-col bg-gradient-to-br from-gray-900/50 to-black shadow-2xl transition-all duration-500 hover:border-gray-700 min-h-[600px]
                        ${hoveredCard === 2 ? 'shadow-purple-500/30 -translate-y-1' : ''}
                        transition duration-300 ease-in-out
                    `}>
                        
                        {/* Top Section */}
                        <div className="relative z-10 space-y-4 mb-8">
                            <div className="flex gap-3 text-sm text-gray-400 flex-wrap">
                                <span className="bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700">Website Design</span>
                                <span className="bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700">Animation</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                                Website Design
                            </h2>
                            <p className="text-gray-400 leading-relaxed text-base md:text-lg max-w-lg">
                                Design stunning websites with engaging narratives, visuals, exceptional UX/UI, and maximum usability.
                            </p>

                            {/* Button - Removed motion.button and animation props */}
                            <button 
                                className="mt-6 px-8 py-3 bg-white text-black rounded-xl font-semibold transition-all duration-300 transform hover:shadow-lg hover:shadow-white/10 hover:scale-[1.05] active:scale-[0.98]"
                            >
                                Get a quote
                            </button>
                        </div>

                        {/* Image Section - Apply hover transform via simple className */}
                        <div className="relative flex-1 flex items-center justify-center">
                            {/* Replaced motion.div with a standard div and dynamic Tailwind class */}
                            <div
                                className={`
                                    transition-transform duration-500 ease-in-out 
                                    ${hoveredCard === 2 ? 'scale-[1.05] -translate-y-2' : ''}
                                `}
                            >
                                <Image
                                    src="https://cdn.prod.website-files.com/6333c43995273d509e9a2a16/66ff9821a2a1dbe739ec7641_element-12.svg"
                                    alt="Website Design"
                                    width={400}
                                    height={400}
                                    className="object-contain drop-shadow-2xl"
                                />
                            </div>

                            {/* Subtle Glow Effect on Hover (Using state and opacity classes) */}
                            <div
                                className={`
                                    absolute inset-0 bg-gradient-to-t from-purple-500/5 via-transparent to-transparent rounded-3xl transition-opacity duration-700
                                    ${hoveredCard === 2 ? 'opacity-100' : 'opacity-0'}
                                `}
                            ></div>
                        </div>

                        {/* Corner Accents (Subtle) */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-gray-800/20 to-transparent rounded-bl-full"></div>
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-gray-800/20 to-transparent rounded-tr-full"></div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default OurServices;