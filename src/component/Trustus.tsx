import React, { useState, useEffect } from 'react';

const Trustus = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const trustItems = [
    {
      id: 1,
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L3 7V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Webflow certified partner",
      description: "We are Webflow experts and part of the exclusive Webflow Template Services program, our certification ensures your project is in trusted hands.",
      gradient: "from-blue-600 to-cyan-500",
      bgGradient: "from-blue-900/20 via-cyan-900/10 to-black",
      glowColor: "blue"
    },
    {
      id: 2,
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 16V8C21 6.9 20.1 6 19 6H5C3.9 6 3 6.9 3 8V16C3 17.1 3.9 18 5 18H19C20.1 18 21 17.1 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 10H9M7 14H9M11 10H17M11 14H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Created templates on Webflow",
      description: "With a portfolio of 280+ templates, we focus on delivering high-quality designs that guarantee seamless functionality and an outstanding user experience.",
      gradient: "from-purple-600 to-pink-500",
      bgGradient: "from-purple-900/20 via-pink-900/10 to-black",
      glowColor: "purple"
    },
    {
      id: 3,
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Bootstrap template partner",
      description: "As one of 26 global Bootstrap partners, we've sold over 5000+ templates, streamlining workflows for thousands of developers worldwide.",
      gradient: "from-indigo-600 to-violet-500",
      bgGradient: "from-indigo-900/20 via-violet-900/10 to-black",
      glowColor: "indigo"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-20 space-y-16">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div 
          className={`text-center mb-20 transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
            Here's why you can trust us
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* Trust Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustItems.map((item, index) => (
            <div
              key={item.id}
              className={`relative group transform transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setActiveCard(item.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Animated Border */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500`}></div>
              
              {/* Glow Effect */}
              <div className={`absolute -inset-4 bg-${item.glowColor}-500/20 rounded-3xl blur-2xl transition-opacity duration-500 ${
                activeCard === item.id ? 'opacity-100' : 'opacity-0'
              }`}></div>

              {/* Card */}
              <div className={`relative bg-gradient-to-br ${item.bgGradient} border-2 border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-500 hover:scale-[1.02] shadow-2xl min-h-[400px] flex flex-col overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '32px 32px'
                  }}></div>
                </div>

                {/* Icon Container */}
                <div className="relative z-10 mb-6">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.gradient} bg-opacity-10 backdrop-blur-sm transform transition-all duration-500 ${
                    activeCard === item.id ? 'scale-110 rotate-6' : 'scale-100 rotate-0'
                  }`}>
                    <div className={`text-transparent bg-clip-text bg-gradient-to-br ${item.gradient}`}>
                      {item.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1 space-y-4">
                  <h3 className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${item.gradient}`}>
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-base">
                    {item.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${item.gradient} opacity-10 rounded-tl-full transition-all duration-500 ${
                  activeCard === item.id ? 'scale-150' : 'scale-100'
                }`}></div>
                
                {/* Floating Orb */}
                <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${item.gradient} opacity-20 rounded-full blur-xl transition-all duration-700 ${
                  activeCard === item.id ? 'opacity-40 scale-150' : 'opacity-20 scale-100'
                }`}></div>

                {/* Number Badge */}
                <div className="absolute top-6 left-6 w-10 h-10 flex items-center justify-center">
                  <span className={`text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-br ${item.gradient} opacity-10`}>
                    {item.id}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </section>
 
      </div>
    </div>
  );
};

export default Trustus;