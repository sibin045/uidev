export default function About() {
  return (
    <section className="py-20 bg-[radial-gradient(circle_at_center,_rgba(192,132,252,0.45)_0%,_rgba(168,85,247,0.25)_25%,_rgba(17,24,39,0.95)_70%)]px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-red-500 tracking-widest mb-3">ABOUT US</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Crafting Visual Excellence <br /> Since 2010
          </h2>
          <p className="text-gray-600 leading-relaxed transition-colors hover:text-black">
            We are a creative cinematic studio delivering powerful visuals,
            immersive storytelling, and world-class production for brands,
            films, and digital platforms.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-24 bg-gray-200 rounded-lg transition-transform duration-300 hover:scale-105"
            />
          ))}
        </div>
      </div>
      

    </section>
  );
}
