import React from "react";

const testimonials = [
  {
    id: 1,
    text: `Salim and his team were impressive on our project. Not only their execution was at the level of top agencies (previously worked with IDG, newmedia, baunfire), but they also brought their experience, instinct, and taste to the table to completely go overboard and offer a radical vision.

As a CTO for 20 years, I rarely had a good experience with top agencies around the globe, Salim and his team won me over with their open clear communication, technical insights, and delivery consistency along this months-long project. We are blessed to have met this team and will do everything we can to retain them in our orbit for future projects and collaborations. In summary, try Salim for your project you won’t regret it...`,
    avatar: "/avatar1.png", // replace with actual image paths in /public
    name: "Romain T",
    role: "Co-founder - e54.io",
  },
  {
    id: 2,
    text: `I had the pleasure of working with the Webestica team to create my website, and I couldn’t be more satisfied. From the start, their responsiveness was outstanding—every question or need was met with a quick and precise reply. What truly sets Webestica apart is their ability to listen and understand exactly what I was looking for.

I’ve worked with several agencies in the past, but none have reached the level of excellence that Webestica offers. Their team is incredibly professional, always available, and the final product is simply exceptional. If you’re looking for a company that can deliver a high-quality website in an impressive time frame, with unparalleled customer service, look no further. In my opinion, Webestica is the best on the market.`,
    avatar: "/avatar2.png",
    name: "Valentino Soubra",
    role: "CEO, Tip & Tap",
  },
  {
    id: 3,
    text: `Salim was a pleasure to work with. He communicated exceptionally well, delivered the site in half the time (despite requesting it over the weekend), and was willing to accommodate all changes and feedback. 10/10 experience.`,
    avatar: "/avatar3.png",
    name: "Keagan Stokoe",
    role: "Head of Data at Isizwe",
  },
  {
    id: 4,
    text: `I hired Mariya K. to help with revamping our new company's website. The site is looking fantastic and I am very pleased with the results. Looking forward to working with them on new projects. Highly recommend!`,
    avatar: "/avatar4.png",
    name: "Yiannis K",
    role: "I.T Analyst and Project Manager",
  },
  {
    id: 5,
    text: `Working with Salim was a great experience. He was such a delight to work with. He helped us with our website design and the whole transfer process, and honestly, it all went so smoothly thanks to him. Highly recommend!`,
    avatar: "/avatar5.png",
    name: "Natasha Kalathiveetil",
    role: "Marketing Specialist at Impact Apprentices Pty Ltd",
  },
];

const Clientsays = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-12 space-y-20 max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">
        Why clients love us
      </h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {testimonials.map(({ id, text, avatar, name, role }) => (
          <div
            key={id}
            className="bg-gray-900 rounded-xl p-6 shadow-lg flex flex-col"
          >
            <p className="text-gray-300 whitespace-pre-line mb-6">{text}</p>
            <div className="flex items-center gap-4 mt-auto">
              <img
                src={avatar}
                alt={name}
                className="w-14 h-14 rounded-full object-cover border-2 border-gray-700"
                loading="lazy"
              />
              <div>
                <p className="font-semibold">{name}</p>
                <p className="text-sm text-gray-400">{role}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Clientsays;
