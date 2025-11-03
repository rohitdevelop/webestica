import React, { FC } from "react";
import { motion } from "framer-motion"; 
// Import Next.js Image component for optimization
import Image from "next/image"; 

// --- 1. Define Types ---

// Interface for a single testimonial object
interface Testimonial {
    id: number;
    text: string;
    avatar: string; // URL string for the avatar image
    name: string;
    role: string;
}

// Interface for TestimonialCard props
interface TestimonialCardProps extends Testimonial {
    index: number;
}


// --- 2. Testimonials Data ---

const testimonials: Testimonial[] = [
    {
        id: 1,
        text: `Salim and his team were impressive on our project. Not only their execution was at the level of top agencies (previously worked with IDG, newmedia, baunfire), but they also brought their experience, instinct, and taste to the table to completely go overboard and offer a radical vision. As a CTO for 20 years, I rarely had a good experience with top agencies around the globe, Salim and his team won me over with their open clear communication, technical insights, and delivery consistency along this months-long project. We are blessed to have met this team and will do everything we can to retain them in our orbit for future projects and collaborations. In summary, try Salim for your project you won’t regret it...`,
        avatar: "https://placehold.co/56x56/293a52/ffffff?text=RT", 
        name: "Romain T",
        role: "Co-founder - e54.io",
    },
    {
        id: 2,
        text: `I had the pleasure of working with the Webestica team to create my website, and I couldn’t be more satisfied. From the start, their responsiveness was outstanding—every question or need was met with a quick and precise reply. What truly sets Webestica apart is their ability to listen and understand exactly what I was looking for. I’ve worked with several agencies in the past, but none have reached the level of excellence that Webestica offers. Their team is incredibly professional, always available, and the final product is simply exceptional. If you’re looking for a company that can deliver a high-quality website in an impressive time frame, with unparalleled customer service, look no further. In my opinion, Webestica is the best on the market.`,
        avatar: "https://placehold.co/56x56/293a52/ffffff?text=VS",
        name: "Valentino Soubra",
        role: "CEO, Tip & Tap",
    },
    {
        id: 3,
        text: `Salim was a pleasure to work with. He communicated exceptionally well, delivered the site in half the time (despite requesting it over the weekend), and was willing to accommodate all changes and feedback. 10/10 experience.`,
        avatar: "https://placehold.co/56x56/293a52/ffffff?text=KS",
        name: "Keagan Stokoe",
        role: "Head of Data at Isizwe",
    },
    {
        id: 4,
        text: `I hired Mariya K. to help with revamping our new company's website. The site is looking fantastic and I am very pleased with the results. Looking forward to working with them on new projects. Highly recommend!`,
        avatar: "https://placehold.co/56x56/293a52/ffffff?text=YK",
        name: "Yiannis K",
        role: "I.T Analyst and Project Manager",
    },
    {
        id: 5,
        text: `Working with Salim was a great experience. He was such a delight to work with. He helped us with our website design and the whole transfer process, and honestly, it all went so smoothly thanks to him. Highly recommend!`,
        avatar: "https://placehold.co/56x56/293a52/ffffff?text=NK",
        name: "Natasha Kalathiveetil",
        role: "Marketing Specialist at Impact Apprentices Pty Ltd",
    },
];

// --- 3. Helper Component: TestimonialCard ---

// Use FC (Function Component) for proper TypeScript typing
const TestimonialCard: FC<TestimonialCardProps> = ({ text, avatar, name, role, index }) => {
    const cardGradient = "from-cyan-400 to-blue-500";
    
    // Create initials for the fallback image URL
    const initials = name.charAt(0) + (name.split(' ').length > 1 ? name.split(' ')[1].charAt(0) : '');
    const imageFallback = `https://placehold.co/56x56/0f172a/94a3b8?text=${initials}`;
    
    // State to handle image loading error and show fallback
    const [imgSrc, setImgSrc] = React.useState(avatar);
    const [isFallback, setIsFallback] = React.useState(false);

    // Function to generate the fallback URL for `placehold.co`
    const getFallbackUrl = (name: string): string => {
        const parts = name.split(' ');
        const initials = parts[0].charAt(0) + (parts.length > 1 ? parts[1].charAt(0) : '');
        return `https://placehold.co/56x56/0f172a/94a3b8?text=${initials}`;
    };

    return (
        // Use motion.div from 'framer-motion'
        <motion.div
            className="relative group h-full transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
        >
            {/* Animated Shadow Border */}
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${cardGradient} rounded-xl opacity-0 group-hover:opacity-60 blur-md transition-opacity duration-500`}></div>
            
            {/* Card Content */}
            <div className="relative bg-gray-900 border border-gray-800 rounded-xl p-7 transition-all duration-300 group-hover:border-cyan-700 h-full flex flex-col">
                
                {/* Quote Icon */}
                <svg className="w-8 h-8 text-cyan-500 mb-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21C7.817 21 4.5 17.683 4.5 13.5C4.5 10.383 6.643 7.846 9.5 7.086V4.5C4.246 5.56 1 9.248 1 13.5C1 19.516 5.984 24.5 12 24.5C18.016 24.5 23 19.516 23 13.5C23 9.248 19.754 5.56 14.5 4.5V7.086C17.357 7.846 19.5 10.383 19.5 13.5C19.5 17.683 16.183 21 12 21Z" clipRule="evenodd" fillRule="evenodd" /></svg>

                {/* Text */}
                <p className="text-gray-300 whitespace-pre-line mb-6 flex-grow leading-relaxed">
                    {text}
                </p>
                
                {/* Footer / Avatar */}
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-800/50">
                    {/* Next.js Image Component for better performance */}
                    <Image
                        // Dynamically use imgSrc and fallback when an error occurs
                        src={isFallback ? getFallbackUrl(name) : imgSrc} 
                        alt={name}
                        width={56} // Required for next/image
                        height={56} // Required for next/image
                        className="w-14 h-14 rounded-full object-cover border-2 border-cyan-500/50"
                        onError={() => {
                            if (!isFallback) {
                                setIsFallback(true);
                                setImgSrc(getFallbackUrl(name));
                            }
                        }}
                        loading="lazy"
                    />
                    <div>
                        <p className="font-semibold text-white">{name}</p>
                        <p className="text-sm text-cyan-400/80">{role}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};


// --- 4. Main Component: TestimonialsSection ---

const TestimonialsSection: FC = () => {
    return (
        <section id="client-says" className="py-24 px-4 bg-black min-h-screen flex items-center justify-center font-sans">
            <div className="max-w-7xl mx-auto w-full">
                
                {/* Header Section */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-sm uppercase tracking-widest text-cyan-400">Testimonials</span>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-2 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                        Why clients love us
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
                </motion.div>

                {/* Testimonial Grid */}
                <div className="flex flex-col gap-8">
                    
                    {/* Row 1: Items 1, 2, 3 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.slice(0, 3).map((testimonial, index) => (
                            <TestimonialCard 
                                key={testimonial.id} 
                                {...testimonial} 
                                index={index} 
                            />
                        ))}
                    </div>

                    {/* Row 2: Items 4, 5, centered */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:max-w-4xl mx-auto">
                        {testimonials.slice(3, 5).map((testimonial, index) => (
                            <TestimonialCard 
                                key={testimonial.id} 
                                {...testimonial} 
                                index={index + 3} // Staggered delay continuation
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;