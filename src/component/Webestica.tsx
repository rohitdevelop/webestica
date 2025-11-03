"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import Experince from "./Experince";
import OurServices from "./OurServices";
import Trustus from "./Trustus";
import Clientsays from "./Clientsays";
import Footer from "./Footer";
import { motion } from "framer-motion";

interface Position {
  left: string;
  top: string;
}

interface Issue {
  icon: string;
  text: string;
  position: Position;
  delay: number;
}

interface FloatingIssueProps {
  icon: string;
  text: string;
  delay: number;
  position: Position;
}

const FloatingIssue: React.FC<FloatingIssueProps> = ({ icon, text, delay, position }) => (
  <motion.div
    initial={{ y: -80, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1.2, delay: delay / 1000 }}
    style={{
      position: "absolute",
      left: position.left,
      top: position.top,
      zIndex: 0,
    }}
  >
    <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 flex items-center gap-2 border border-white/20 shadow-lg hover:scale-105 transition-transform">
      <span className="text-xl">{icon}</span>
      <span className="text-white text-sm font-medium">{text}</span>
    </div>
  </motion.div>
);

interface InfiniteVerticalFloatingIssueProps {
  icon: string;
  text: string;
  delay: number;
}

const InfiniteVerticalFloatingIssue: React.FC<InfiniteVerticalFloatingIssueProps> = ({ icon, text, delay }) => (
  <motion.div
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: "110vh", opacity: 1 }}
    transition={{
      duration: 6,
      ease: "linear",
      repeat: Infinity,
      delay: delay / 1000,
    }}
    className="absolute"
    style={{
      left: `${Math.random() * 80}%`,
      zIndex: 0,
    }}
  >
    <div className="bg-white/50 backdrop-blur-sm rounded-full px-5 py-3 flex items-center gap-3 border border-white/20 shadow-lg hover:scale-105 transition-transform">
      <span className="text-2xl">{icon}</span>
      <span className="text-white font-medium">{text}</span>
    </div>
  </motion.div>
);

const issues: Issue[] = [
  { icon: "🔴", text: "Bad visual hierarchy", position: { top: "15%", left: "65%" }, delay: 200 },
  { icon: "🟠", text: "Risk of security", position: { top: "30%", left: "75%" }, delay: 400 },
  { icon: "📱", text: "Mobile incompatibility", position: { top: "35%", left: "55%" }, delay: 600 },
  { icon: "⏱️", text: "Slow loading time", position: { top: "42%", left: "80%" }, delay: 800 },
  { icon: "🟢", text: "Error free website", position: { top: "65%", left: "62%" }, delay: 1000 },
  { icon: "🔧", text: "Poor UI/UX", position: { top: "12%", left: "80%" }, delay: 1200 },
];
          const mainVisualUrl = "https://cdn.prod.website-files.com/6333c43995273d509e9a2a16/664f0bfb372b6bebb524a65f_shape-14.svg";


export default function AnimatedAgencyHome() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />

      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-[180px] pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[140px] bg-gradient-to-b from-orange-500/70 via-purple-500/40 to-transparent blur-2xl opacity-90"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[160px] bg-gradient-to-b from-yellow-300/90 via-orange-500/60 to-transparent blur-[100px] opacity-95"></div>
        <div className="absolute top-20 left-0 w-full h-[120px] bg-gradient-to-b from-purple-500/20 via-blue-500/10 to-transparent blur-xl"></div>
      </div>

      <div className="absolute top-20 left-0 w-full h-[40vh] pointer-events-none z-0 overflow-hidden">
        <div className="absolute w-6 h-[20vh] inset-0 bg-gradient-to-br from-orange-500/70 via-fuchsia-500/40 to-purple-600/30 blur-[140px] opacity-10"></div>
        <div className="absolute top-[-20%] w-6 h-[20vh] left-1/2 -translate-x-1/2 bg-gradient-to-br from-yellow-300 via-orange-400 to-pink-500 blur-[130px] opacity-95 rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-6 bg-gradient-to-b from-transparent via-purple-500/10 to-blue-500/10 blur-2xl"></div>
      </div>

      {/* Main grid content */}
      <div className="relative w-full z-10 min-h-screen flex items-center mt-16">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left text */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2">
                <svg
                  className="w-5 h-5 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-blue-400 text-sm font-medium">
                  Webflow certified expert
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  Webflow development agency
                </span>
              </h1>
              <p className="text-xl text-gray-400 max-w-xl">
                We specialize in Webflow development and exceptional UI/UX design to make your brand shine.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm px-8 py-3 rounded-lg font-semibold border border-white/20 transition-colors">
                  Start a Project
                </button>
              </div>
            </div>

            {/* Right floating issues animation area */}
            <div className="relative w-full h-[400px] lg:h-[600px] overflow-hidden mt-12">
              {mounted &&
                issues.map((issue, idx) => (
                  <InfiniteVerticalFloatingIssue
                    key={idx}
                    icon={issue.icon}
                    text={issue.text}
                    delay={idx * 0.5 * 1000}
                  />
                ))}

              {/* Foreground Icon Bar */}
              <div className="absolute top-48 left-1/2 transform -translate-x-1/2 flex items-center justify-around bg-gray-700/80 border-b border-t-2 rounded-2xl shadow-2xl px-6 py-3 gap-8 z-10"
                style={{
                  borderImageSlice: 1,
                  borderImageSource: 'linear-gradient(to bottom, rgba(249 115 22 / 0.7), rgba(139 92 246 / 0.4))',
                  borderTopWidth: 2,
                  borderTopStyle: 'solid',
                }}
              >
                <span className="text-3xl ">🔴</span>
                <span className="text-3xl ">🟠</span>
                <span className="text-3xl ">📱</span>
                <span className="text-3xl ">⏱️</span>
                <span className="text-3xl ">🔧</span>
              </div>
            </div>
          </div>
        </div>

        
      </div>

      {/* Sectioned content */}
      <Experince />
      <OurServices />
      <Trustus />
      <Clientsays />

      {/* Call to action */}

      <motion.section
            id="cta-section"
            className="py-20 px-4 bg-black flex items-center justify-center min-h-[80vh] font-sans"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
        >
      <div className="max-w-7xl mx-auto w-full">
                {/* Enhanced CTA Card Container with strong shadow */}
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 border border-cyan-800/50 rounded-[2rem] p-8 md:p-12 lg:p-16 overflow-hidden shadow-3xl">
                    
                    {/* Background Decorative Element (Shape-42) - Set to a subtle opacity */}
                    <img 
                        src="https://cdn.prod.website-files.com/6333c43995273d509e9a2a16/640eafea2e85e8e089c74bc7_shape-42.svg" 
                        alt="Abstract wave pattern decoration"
                        className="absolute top-0 right-0 w-full h-full object-cover opacity-5 pointer-events-none"
                        loading="lazy"
                        // Added style for subtle positioning
                        style={{ transform: 'translateX(20%) translateY(-20%)' }}
                    />

                    <div className="relative flex flex-col lg:flex-row justify-between items-center gap-12 z-10">
                        
                        {/* Left Content */}
                        <div className="flex-1 space-y-6 text-center lg:text-left">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                                Create your website with us
                            </h1>
                            
                            {/* Decorative Shape 44 - Placed subtly */}
                            <img
                                src="https://cdn.prod.website-files.com/6333c43995273d509e9a2a16/640eb05b6aa303883ea79853_shape-44.svg"
                                alt="Small abstract star decoration"
                                className="w-10 h-10 inline-block lg:absolute lg:top-8 lg:left-8 opacity-40"
                                loading="lazy"
                            />

                            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl lg:max-w-none">
                                Your website should be more than just a digital placeholder. With our help, it can be a powerful tool for driving business growth. Connect with our team today and let's make it happen!
                            </p>
                            
                            <div className="pt-4">
                                {/* Gradient Button */}
                                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-xl hover:shadow-cyan-500/40">
                                    Start a project
                                </button>
                            </div>
                        </div>

                        {/* Right Images (Main Visual - Shape 14, now much bigger) */}
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
                            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] p-6 bg-cyan-500/10 rounded-full backdrop-blur-sm">
                                {/* Main central image, made bigger with floating animation */}
                                <img
                                    src={mainVisualUrl}
                                    alt="Abstract 3D visual representing web creation"
                                    className="w-full h-full object-contain animate-float"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
               <style>{`
                @keyframes float {
                    0% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(1deg); }
                    100% { transform: translateY(0px) rotate(0deg); }
                }
                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }
                .shadow-3xl {
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 50px rgba(6, 182, 212, 0.4);
                }
            `}</style>
        </motion.section>
      <Footer />
    </div>
  );
}
