// app/page.tsx
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-12 space-y-20 max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">
        Work highlights
      </h1>

      {/* Section 1 */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="space-y-5 border border-gray-800 rounded-2xl p-8 shadow-lg bg-gradient-to-br from-black to-gray-900">
          <div className="flex gap-3 text-sm text-gray-400 flex-wrap">
            <span>UI/UX</span>
            <span>Webflow Dev</span>
            <span>Jetboost</span>
            <span>Memberstack</span>
          </div>
          <h2 className="text-2xl font-semibold">Iconstica · Icon Library</h2>
          <a
            href="https://iconstica.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline block mb-2 font-medium"
          >
            View live site
          </a>
          <p className="text-gray-300 leading-relaxed max-w-md">
            Iconstica is our latest venture, created for designers and developers,
            offering an extensive range of premium and free icons. Dive into our library
            to find minimalist, unique, and consistent icons.
          </p>
          <div className="flex items-center gap-3 mt-8">
            <Image
              src="/avatar.png"
              alt="Salim Lunat"
              width={40}
              height={40}
              className="rounded-full bg-gray-700 border border-gray-700"
            />
            <div>
              <p className="font-medium">Salim Lunat</p>
              <p className="text-sm text-gray-400">Founder - Iconstica</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <div className="border border-gray-800 rounded-2xl shadow-lg overflow-hidden max-w-md w-full bg-gradient-to-br from-gray-800 to-black">
            <Image
              src="https://cdn.prod.website-files.com/6333c43995273d509e9a2a16/664b03c5e4f48db0f42c6496_work-05.avif"
              alt="Iconstica preview"
              width={420}
              height={260}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4 max-w-xl text-gray-300">
          <div className="flex gap-3 text-sm text-gray-400 flex-wrap">
            <span>UI/UX Design</span>
            <span>Webflow Development</span>
            <span>Animation</span>
          </div>
          <h2 className="text-2xl font-semibold">E54 · Marketing Efficiency Platform</h2>
          <a
            href="#"
            className="text-blue-400 hover:underline block mb-3 font-medium"
          >
            View live site
          </a>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-400">
            Salim and his team were impressive on our project. Not only their execution was at the level of top agencies but they brought their experience, instinct, and taste to the table to offer a radical vision.
          </blockquote>
          <div className="flex items-center gap-3 mt-4">
            <Image
              src="https://cdn.prod.website-files.com/6333c43995273d509e9a2a16/64f5af87b3bd2af3ca9e6f0b_work-04.avif"
              alt="Romain T"
              width={40}
              height={40}
              className="rounded-full object-cover"
              placeholder="blur"
              blurDataURL="/avatar.png"
            />
            <div>
              <p className="font-medium">Romain T</p>
              <p className="text-sm text-gray-400">Co-founder - e54.io</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full max-w-md mx-auto">
          <Image
            src="https://cdn.prod.website-files.com/6333c43995273d509e9a2a16/64f5af87b3bd2af3ca9e6f0b_work-04.avif"
            alt="E54 Webflow Website"
            width={420}
            height={260}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Section 3 */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4 max-w-xl text-gray-300">
          <div className="flex gap-3 text-sm text-gray-400 flex-wrap">
            <span>UI/UX Design</span>
            <span>Webflow Development</span>
            <span>Animation</span>
          </div>
          <h2 className="text-2xl font-semibold">Puremium · High-Intent Users Generation</h2>
          <a
            href="#"
            className="text-blue-400 hover:underline block mb-3 font-medium"
          >
            View live site
          </a>
          <p>
            PUREMIUM specializes in generating high-intent users for businesses through targeted marketing services. We crafted this website using Figma for design, Webflow for development, and added captivating animations with Lottie.
          </p>
        </div>
        <div className="flex justify-center w-full max-w-md mx-auto">
          <Image
            src="https://cdn.prod.website-files.com/6333c43995273d509e9a2a16/6527b2027be2a14ddfad179a_puremium.avif"
            alt="Puremium Website"
            width={420}
            height={260}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Animated border button */}
      <div className="relative group">
        <button
          type="button"
          className="relative z-10 px-8 py-3 bg-transparent rounded-xl text-white font-semibold tracking-wide border-2 border-white overflow-hidden"
        >
          View all workflow projects
        </button>
        {/* Animated border effect */}
        <span className="absolute inset-0 rounded-xl border-2 border-white opacity-0 group-hover:opacity-100 animate-pulse"></span>
      </div>
    </main>
  );
}
