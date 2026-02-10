"use client";

import Image from "next/image";

const works = [
  { id: 1, src: "/images/img1.jpg", title: "Film Production" },
  { id: 2, src: "/images/img2.jpg", title: "Action Scene" },
  { id: 3, src: "/images/img3.jpg", title: "Cinematic Shot" },
  { id: 4, src: "/images/img4.jpg", title: "Behind The Scenes" },
  { id: 5, src: "/images/img5.jpg", title: "Studio Setup" },
  { id: 6, src: "/images/img6.jpg", title: "Creative Direction" },
];

export default function Portfolio() {
  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_center,_rgba(192,132,252,0.45)_0%,_rgba(168,85,247,0.25)_25%,_rgba(17,24,39,0.95)_70%)] py-12 sm:py-20 px-4 sm:px-6">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-red-500">
          Our Work
        </h2>

        <p className="text-gray-400 mb-8 max-w-xl font-medium hover:text-gray-300 transition-colors">
          Featured projects showcasing cinematic storytelling and visual excellence.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {works.map((work) => (
            <div
              key={work.id}
              className="group relative overflow-hidden rounded-xl shadow-lg bg-black"
            >
              {/* Aspect ratio wrapper */}
              <div className="relative aspect-[4/3]">
                <Image
                  src={work.src}
                  alt={work.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <h3 className="text-white text-lg font-semibold p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {work.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
