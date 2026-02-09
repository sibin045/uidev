export default function CTA() {
  return (
   <section
  className="
    relative
    min-h-[60vh]
    overflow-hidden
    flex items-center
    bg-[radial-gradient(circle_at_center,_rgba(192,132,252,0.45)_0%,_rgba(168,85,247,0.25)_25%,_rgba(17,24,39,0.95)_70%)]
  "
>
  <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <div>
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Let’s Create <br /> Something Amazing
      </h1>
      <p className="text-gray-300 mb-6 max-w-md">
        Ready to bring your story to life? Let’s collaborate and create
        cinematic visuals that stand out.
      </p>
      <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
        Get In Touch
      </button>
    </div>
    <div className="bg-black rounded-2xl p-6">
      <div className="bg-slate-800 h-64 rounded-xl"></div>
    </div>
  </div>
</section>
  );
}
