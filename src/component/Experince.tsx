"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

// --- Framer Motion Variants ---

// Variants for the overall container entrance (for staggering the entire card)
const projectContainerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1, // Stagger text elements
    } 
  },
};

// Variants for the text elements (title, link, description)
const textItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WorkHighlights() {
  const projects = [
    {
      tags: ["UI/UX", "Webflow Dev", "Jetboost", "Memberstack"],
      title: "Iconstica · Icon Library",
      link: "https://iconstica.com",
      description:
        "Iconstica is our latest venture, created for designers and developers, offering an extensive range of premium and free icons. Dive into our library to find minimalist, unique, and consistent icons.",
      author: {
        name: "Salim Lunat",
        role: "Founder - Iconstica",
        avatar: "/avatar.png",
      },
      image: {
        src: "https://cdn.prod.website-files.com/6333c43995273d509e9a2a16/664b03c5e4f48db0f42c6496_work-05.avif",
        alt: "Iconstica preview",
      },
    },
    {
      tags: ["UI/UX Design", "Webflow Development", "Animation"],
      title: "E54 · Marketing Efficiency Platform",
      link: "#",
      description:
        "Salim and his team were impressive on our project. Not only their execution was at the level of top agencies but they brought their experience, instinct, and taste to the table to offer a radical vision.",
      author: {
        name: "Romain T",
        role: "Co-founder - e54.io",
        avatar:
          "https://cdn.prod.website-files.com/6333c43995273d509e9a2a16/64f5af87b3bd2af3ca9e6f0b_work-04.avif",
      },
      image: {
        src: "https://cdn.prod.website-files.com/6333c43995273d509e9a2a16/64f5af87b3bd2af3ca9e6f0b_work-04.avif",
        alt: "E54 Webflow Website",
      },
    },
    {
      tags: ["UI/UX Design", "Webflow Development", "Animation"],
      title: "Puremium · High-Intent Users Generation",
      link: "#",
      description:
        "PUREMIUM specializes in generating high-intent users for businesses through targeted marketing services. We crafted this website using Figma for design, Webflow for development, and added captivating animations with Lottie.",
      author: null,
      image: {
        src: "https://cdn.prod.website-files.com/6333c43995273d509e9a2a16/6527b2027be2a14ddfad179a_puremium.avif",
        alt: "Puremium Website",
      },
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-12 space-y-20 max-w-6xl mx-auto">
        
        {/* Title with Motion */}
        <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-10 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            Work highlights
        </motion.h1>

        {/* Project Sections */}
        {projects.map(({ tags, title, link, description, author, image }, index) => (
            <motion.section 
                key={index} 
                className="w-screen px-4 md:px-10 py-16"
                variants={projectContainerVariants}
                initial="hidden"
                whileInView="visible" // Trigger animation when section scrolls into view
                viewport={{ once: true, amount: 0.3 }} // Animate once when 30% visible
            >
                <div className="border border-gray-800 rounded-3xl shadow-2xl bg-gradient-to-br from-black to-gray-900 transition-shadow duration-300 p-8 md:p-10 flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">

                    {/* Left: Text content */}
                    <motion.div className="flex-1 flex flex-col justify-between gap-6" initial="hidden" animate="visible" variants={projectContainerVariants}>
                        {/* Tags */}
                        <div className="flex gap-3 text-sm text-gray-400 flex-wrap">
                            {tags.map((tag, i) => (
                                <motion.span key={i} variants={textItemVariants} className="bg-gray-800/50 px-3 py-1 rounded-full">
                                    {tag}
                                </motion.span>
                            ))}
                        </div>

                        {/* Project Title */}
                        <motion.h2 variants={textItemVariants} className="text-3xl md:text-4xl font-bold text-white">
                            {title}
                        </motion.h2>

                        {/* Link */}
                        <motion.a
                            variants={textItemVariants}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline font-medium"
                        >
                            View live site
                        </motion.a>

                        {/* Description or Testimonial */}
                        <motion.p variants={textItemVariants} className="text-gray-300 leading-relaxed">{description}</motion.p>

                        {/* Author if available */}
                        {author && (
                            <motion.div variants={textItemVariants} className="flex items-center gap-4 mt-6">
                                <Image
                                    src={author.avatar}
                                    alt={author.name}
                                    width={50}
                                    height={50}
                                    className="rounded-full object-cover border-2 border-gray-700"
                                />
                                <div>
                                    <p className="font-medium text-white">{author.name}</p>
                                    <p className="text-sm text-gray-400">{author.role}</p>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Right: Image content with Motion Hover */}
                    <motion.div 
                        className="flex-shrink-0 w-full max-w-md"
                        // Added motion hover effects directly to the image container
                        whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 40px rgba(59, 130, 246, 0.3)" }}
                        transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
                    >
                        <div className="overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-gray-800 to-black">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={480}
                                height={300}
                                // Removed the old CSS hover scale and brightness
                                className="w-full h-auto object-cover transition-all duration-300" 
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        ))}

        {/* Animated border button with motion */}
        <motion.div 
            className="relative group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <motion.button
                type="button"
                className="relative z-10 px-8 py-3 bg-transparent rounded-xl text-white font-semibold tracking-wide border-2 border-white overflow-hidden"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.98 }}
            >
                View all workflow projects
            </motion.button>
            {/* Animated border effect (Kept as CSS for pulse, added a motion.span) */}
            <motion.span 
                className="absolute inset-0 rounded-xl border-2 border-white opacity-0 group-hover:opacity-100 animate-pulse pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            ></motion.span>
        </motion.div>

        {/* CSS for custom hover shadow */}
        <style jsx global>{`
            @keyframes pulse {
                0%, 100% { box-shadow: 0 0 10px rgba(255, 255, 255, 0.5); }
                50% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.8); }
            }
            .animate-pulse {
                animation: pulse 1.5s infinite;
            }
        `}</style>
    </main>
  );
}