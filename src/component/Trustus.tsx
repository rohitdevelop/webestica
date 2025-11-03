import React from "react";
// motion is required for the scroll-based entrance animation
import { motion } from "framer-motion"; 

// Data for the credibility cards
const trustItems = [
    {
        id: 1,
        icon: (<svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L3 7V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>),
        title: "Webflow Certified Partner",
        description: "As certified Webflow experts and part of the exclusive Webflow Template Services program, our certification ensures your project is in trusted hands.",
    },
    {
        id: 2,
        icon: (<svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8C21 6.9 20.1 6 19 6H5C3.9 6 3 6.9 3 8V16C3 17.1 3.9 18 5 18H19C20.1 18 21 17.1 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 10H9M7 14H9M11 10H17M11 14H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>),
        title: "Proven Template Creator",
        description: "With a portfolio of over 280+ templates on Webflow, we focus on delivering high-quality designs that guarantee seamless functionality and outstanding user experience.",
    },
    {
        id: 3,
        icon: (<svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>),
        title: "Global Bootstrap Partner",
        description: "As one of 26 global Bootstrap partners, we've sold over 5000+ templates, streamlining workflows for thousands of developers worldwide with reliable, clean code.",
    }
];

// Main App component serves as the requested section
const App = () => {
    // Single gradient color scheme (Blue/Cyan)
    const gradient = "from-blue-500 to-cyan-400";
    const bgGradient = "from-gray-950 to-gray-900"; // Background gradient for card inner

    return (
        <section id="trustus" className="py-24 px-4 bg-black min-h-screen flex items-center justify-center font-sans">
            <div className="max-w-7xl mx-auto w-full">
                {/* Header Section */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-sm uppercase tracking-widest text-cyan-400">Credibility</span>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-2 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                        Here's why you can trust us
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
                </motion.div>

                {/* Trust Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {trustItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="relative group transition-all duration-300 hover:scale-[1.03]"
                            // Animation to fade in as the user scrolls to the section
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.7, delay: index * 0.15 }}
                        >
                            {/* Simple Animated Border/Glow effect on hover */}
                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-2xl opacity-0 group-hover:opacity-60 blur-lg transition-opacity duration-300`}></div>
                            
                            {/* Card Content Container */}
                            <div className={`relative bg-gradient-to-br ${bgGradient} border border-gray-800 rounded-2xl p-8 transition-all duration-300 group-hover:border-blue-700 min-h-[350px] flex flex-col justify-start space-y-6 shadow-2xl group-hover:shadow-blue-500/10`}>
                                
                                {/* Icon Container */}
                                <div className="relative z-10 mb-2">
                                    <div className={`inline-flex p-4 rounded-xl bg-blue-500/10 backdrop-blur-sm transform transition-all duration-300 group-hover:bg-blue-500/20`}>
                                        <div className={`text-white`}>
                                            {item.icon}
                                        </div>
                                    </div>
                                </div>

                                {/* Title and Description */}
                                <div className="relative z-10 flex-1 space-y-4">
                                    <h3 className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${gradient}`}>
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed text-base">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default App;
