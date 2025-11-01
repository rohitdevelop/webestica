import React, { useState, useEffect } from "react";

const OurServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      title: "Website Development",
      description: "Convert designs to websites, migrate from outdated CMS to Webflow, or kickstart with Website design to Webflow.",
      image: "https://cdn.prod.website-files.com/6333c43995273d509e9a2a16/66ff972e9a10f57c14594888_element-10.svg",
      hasButton: false,
      gradient: "from-indigo-900/20 via-purple-900/10 to-black"
    },
    {
      id: 2,
      title: "Website Design",
      description: "Design stunning websites with engaging narratives, visuals, exceptional UX/UI and maximum usability.",
      image: "https://cdn.prod.website-files.com/6333c43995273d509e9a2a16/66ff9821a2a1dbe739ec7641_element-12.svg",
      hasButton: true,
      gradient: "from-blue-900/20 via-cyan-900/10 to-black"
    }
  ];

  return (
    <div className="bg-black text-white flex flex-col items-center py-20 px-4 max-w-7xl mx-auto space-y-16 overflow-hidden">
      {/* Animated Title */}
      <h1 
        className={`text-5xl md:text-6xl lg:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
      >
        Our Services
      </h1>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`relative group transform transition-all duration-700 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-20'
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
            onMouseEnter={() => setHoveredCard(service.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Animated Border Gradient */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500 animate-gradient-xy"></div>
            
            {/* Glow Effect */}
            <div className={`absolute -inset-4 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-3xl blur-2xl transition-opacity duration-500 ${
              hoveredCard === service.id ? 'opacity-100' : 'opacity-0'
            }`}></div>

            {/* Card Content */}
            <div 
              className={`relative border-2 border-gray-700 rounded-2xl p-8 flex flex-col bg-gradient-to-br ${service.gradient} shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 hover:scale-[1.02] hover:border-gray-600 overflow-hidden min-h-[500px]`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                  backgroundSize: '40px 40px'
                }}></div>
              </div>

              {/* Top Section */}
              <div className="relative z-10 text-center space-y-4 mb-8">
                <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  {service.title}
                </h2>
                <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                  {service.description}
                </p>
                
                {service.hasButton && (
                  <button className="mt-6 px-8 py-3 border-2 border-white rounded-xl font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-white/20 relative overflow-hidden group">
                    <span className="relative z-10">Get a quote</span>
                    <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    <span className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                      Get a quote
                    </span>
                  </button>
                )}
              </div>

              {/* Image Section */}
              <div className="relative flex-1 flex items-end justify-center">
                <div className={`transform transition-all duration-700 ${
                  hoveredCard === service.id 
                    ? 'scale-110 -translate-y-4' 
                    : 'scale-100 translate-y-0'
                }`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-72 h-72 object-contain drop-shadow-2xl"
                  />
                </div>

                {/* Floating Elements */}
                <div className={`absolute bottom-10 left-10 w-20 h-20 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-full blur-xl transition-all duration-700 ${
                  hoveredCard === service.id ? 'opacity-100 scale-150' : 'opacity-0 scale-50'
                }`}></div>
                <div className={`absolute top-10 right-10 w-16 h-16 bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-full blur-xl transition-all duration-700 delay-100 ${
                  hoveredCard === service.id ? 'opacity-100 scale-150' : 'opacity-0 scale-50'
                }`}></div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-tr-full"></div>
            </div>
          </div>
        ))}
      </section>

      <style jsx>{`
        @keyframes gradient-xy {
          0%, 100% {
            background-position: 0% 50%;
            background-size: 400% 400%;
          }
          50% {
            background-position: 100% 50%;
            background-size: 400% 400%;
          }
        }

        .animate-gradient-xy {
          animation: gradient-xy 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default OurServices;