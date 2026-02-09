const services = [
  "Cinematic Filmmaking",
  "Brand Storytelling",
  "Corporate Videos",
  "Music Videos",
  "Post-Production",
  "Creative Direction",
];

export default function Services() {
  return (
    <section className="bg-black py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Our Services
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-red-600 p-6 rounded-xl transition-all duration-300 hover:bg-red-700 hover:scale-105 hover:shadow-xl"
            >
              <h3 className="font-semibold text-lg">{service}</h3>
              <p className="text-sm text-red-100 mt-3">
                High-quality production tailored to your vision.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
