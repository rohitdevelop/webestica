"use client";

import React, { useState, FC } from "react";
import Image from "next/image";
// Import motion and the Variants type
import { motion, Variants } from "framer-motion"; 

// --- Framer Motion Variants ---

// 1. Explicitly type the Variants constants using the imported 'Variants' interface

// Variants for the overall container entrance (staggering the cards)
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Delay between cards
            delayChildren: 0.5,
        },
    },
};

// Variants for individual card entrance
const cardVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 20 } },
};

// Variants for the title entrance (where the previous ease error was likely occurring)
const titleVariants: Variants = {
    hidden: { y: -30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

// Variants for the image on hover - This function returns a regular object, not Framer Motion Variants
// To properly type this function, you can use a generic type like 'object' or an inferred type, 
// or simply keep it untyped as it returns an object used by the 'animate' prop.
const imageHoverVariants = (isHovered: boolean) => ({
    scale: isHovered ? 1.1 : 1,
    y: isHovered ? -10 : 0,
    transition: { duration: 0.5, type: "spring", stiffness: 150, damping: 15 },
});


// --- Component ---

const OurServices: FC = () => {
    // Specify the state type for clarity: number or null
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    return (
        <div className="bg-black text-white flex flex-col items-center py-20 px-4 max-w-7xl mx-auto space-y-16 overflow-hidden">
            
            {/* Animated Title using motion.h1 */}
            <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400"
                initial="hidden"
                whileInView="visible" // Using whileInView for title is common in scroll sections
                viewport={{ once: true, amount: 0.5 }}
                variants={titleVariants}
            >
                Our Services
            </motion.h1>

            {/* Services Grid Container */}
            <motion.section 
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full"
                initial="hidden"
                whileInView="visible" // Use whileInView for scroll-based animation
                viewport={{ once: true, amount: 0.2 }} // Only animate once when 20% visible
                variants={containerVariants}
            >

                {/* ----------------- Card 1: Website Development ----------------- */}
                <motion.div
                    variants={cardVariants}
                    className="relative group overflow-hidden"
                    onMouseEnter={() => setHoveredCard(1)}
                    onMouseLeave={() => setHoveredCard(null)}
                    // Add a subtle lift effect on hover for the entire card
                    whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(59, 130, 246, 0.2)" }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="relative border border-gray-800 rounded-3xl p-8 flex flex-col bg-gradient-to-br from-gray-900/50 to-black shadow-2xl transition-all duration-500 hover:border-gray-700 min-h-[600px]">
                        
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

                        {/* Image Section - Larger and Centered with Motion */}
                        <div className="relative flex-1 flex items-center justify-center">
                            <motion.div
                                animate={imageHoverVariants(hoveredCard === 1)} // Apply motion variants based on hover state
                            >
                                <Image
                                    src="https://cdn.prod.website-files.com/6333c43995273d509e9a2a16/66ff972e9a10f57c14594888_element-10.svg"
                                    alt="Website Development"
                                    width={400}
                                    height={400}
                                    className="object-contain drop-shadow-2xl"
                                /> 
                            </motion.div>

                            {/* Subtle Glow Effect on Hover (Enhanced with motion opacity) */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-t from-blue-500/5 via-transparent to-transparent rounded-3xl"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: hoveredCard === 1 ? 1 : 0 }}
                                transition={{ duration: 0.7 }}
                            ></motion.div>
                        </div>

                        {/* Corner Accents (Subtle) */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-gray-800/20 to-transparent rounded-bl-full"></div>
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-gray-800/20 to-transparent rounded-tr-full"></div>
                    </div>
                </motion.div>

                {/* ----------------- Card 2: Website Design ----------------- */}
                <motion.div
                    variants={cardVariants}
                    className="relative group overflow-hidden"
                    onMouseEnter={() => setHoveredCard(2)}
                    onMouseLeave={() => setHoveredCard(null)}
                    // Add a subtle lift effect on hover for the entire card
                    whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(168, 85, 247, 0.2)" }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="relative border border-gray-800 rounded-3xl p-8 flex flex-col bg-gradient-to-br from-gray-900/50 to-black shadow-2xl transition-all duration-500 hover:border-gray-700 min-h-[600px]">
                        
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

                            {/* Button with Framer Motion hover */}
                            <motion.button 
                                className="mt-6 px-8 py-3 bg-white text-black rounded-xl font-semibold transition-all duration-300 transform hover:shadow-lg hover:shadow-white/10"
                                whileHover={{ scale: 1.05, backgroundColor: "#E5E7EB" }} // Light gray on hover
                                whileTap={{ scale: 0.98 }}
                            >
                                Get a quote
                            </motion.button>
                        </div>

                        {/* Image Section - Larger and Centered with Motion */}
                        <div className="relative flex-1 flex items-center justify-center">
                            <motion.div
                                animate={imageHoverVariants(hoveredCard === 2)} // Apply motion variants based on hover state
                            >
                                <Image
                                    src="https://cdn.prod.website-files.com/6333c43995273d509e9a2a16/66ff9821a2a1dbe739ec7641_element-12.svg"
                                    alt="Website Design"
                                    width={400}
                                    height={400}
                                    className="object-contain drop-shadow-2xl"
                                />
                            </motion.div>

                            {/* Subtle Glow Effect on Hover (Enhanced with motion opacity) */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-t from-purple-500/5 via-transparent to-transparent rounded-3xl"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: hoveredCard === 2 ? 1 : 0 }}
                                transition={{ duration: 0.7 }}
                            ></motion.div>
                        </div>

                        {/* Corner Accents (Subtle) */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-gray-800/20 to-transparent rounded-bl-full"></div>
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-gray-800/20 to-transparent rounded-tr-full"></div>
                    </div>
                </motion.div>

            </motion.section>
        </div>
    );
};

export default OurServices;