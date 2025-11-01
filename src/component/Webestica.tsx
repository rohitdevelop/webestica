"use client";
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Experince from './Experince';
import OurServices from './OurServices';
import Trustus from './Trustus';
import Clientsays from './Clientsays';
import Footer from './Footer';

// Animated floating style
const floatingStyle = {
  animation: 'float 2.5s ease-in-out infinite'
};

const FloatingIssue = ({
  icon,
  text,
  delay,
  position
}: {
  icon: string,
  text: string,
  delay: number,
  position: { top: string, left: string }
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`absolute transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      style={{ top: position.top, left: position.left, ...(isVisible ? floatingStyle : {}) }}
    >
      <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 flex items-center gap-2 border border-white/20 shadow-lg hover:scale-105 transition-transform">
        <span className="text-xl">{icon}</span>
        <span className="text-white text-sm font-medium">{text}</span>
      </div>
    </div>
  );
};

const Logo = ({ delay }: { delay: number }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`absolute transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
      style={{ top: '40%', left: '60%', transform: 'translate(-50%, -50%)', ...(isVisible ? floatingStyle : {}) }}
    >
      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-2xl">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg"></div>
      </div>
    </div>
  );
};

export default function AnimatedAgencyHome() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const issues = [
    { icon: '🔴', text: 'Bad visual hierarchy', position: { top: '15%', left: '65%' }, delay: 200 },
    { icon: '🟠', text: 'Risk of security', position: { top: '30%', left: '75%' }, delay: 400 },
    { icon: '📱', text: 'Mobile incompatibility', position: { top: '35%', left: '55%' }, delay: 600 },
    { icon: '⏱️', text: 'Slow loading time', position: { top: '42%', left: '80%' }, delay: 800 },
    { icon: '🟢', text: 'Error free website', position: { top: '65%', left: '62%' }, delay: 1000 },
    { icon: '🔧', text: 'Poor UI/UX', position: { top: '12%', left: '80%' }, delay: 1200 },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      <div className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 w-full h-full bg-gradient-to-br from-orange-500/20 via-purple-500/20 to-blue-500/20 blur-3xl animate-pulse"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-blue-400 text-sm font-medium">Webflow certified expert</span>
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
                <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Get Started
                </button>
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm px-8 py-3 rounded-lg font-semibold border border-white/20 transition-colors">
                  View Portfolio
                </button>
              </div>
            </div>

            {/* Right Content - Animated Issues */}
            <div className="relative h-[500px] hidden lg:block">
              {mounted && (
                <>
                  {issues.map((issue, index) => (
                    <FloatingIssue
                      key={index}
                      icon={issue.icon}
                      text={issue.text}
                      delay={issue.delay}
                      position={issue.position}
                    />
                  ))}
                  <Logo delay={300} />
                </>
              )}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
      {/* Custom animation only once */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }
      `}</style>

    <Experince />
    <OurServices />
    <Trustus />
    <Clientsays /> 

<div className="bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            {/* Left Content */}
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Create your website with us
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                Your website should be more than just a digital placeholder. With our help, it can be a powerful tool for driving business growth. Connect with our team today and let's make it happen!
              </p>
              
              <div className="pt-4">
                <button className="bg-white text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors">
                  Start a project
                </button>
              </div>
            </div>

            {/* Right Images */}
            <div className="relative w-full lg:w-auto flex justify-center lg:justify-end">
              <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px]">
                {/* Background decoration */}
                <img 
                  src="https://cdn.prod.website-files.com/6333c43995273d509e9a2a16/640eafea2e85e8e089c74bc7_shape-42.svg" 
                  alt="Background decoration"
                  className="absolute top-0 left-0 w-full h-full object-contain opacity-20"
                />
                
                {/* Main central image */}
                <img 
                  src="https://cdn.prod.website-files.com/6333c43995273d509e9a2a16/664f0bfb372b6bebb524a65f_shape-14.svg" 
                  alt="Central decoration"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 object-contain"
                />
                
                {/* Foreground decoration */}
                <img 
                  src="https://cdn.prod.website-files.com/6333c43995273d509e9a2a16/640eb05b6aa303883ea79853_shape-44.svg" 
                  alt="Foreground decoration"
                  className="absolute bottom-0 right-0 w-3/4 h-3/4 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}
