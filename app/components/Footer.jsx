export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-14 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-bold mb-3">CINEMATIC STUDIO</h3>
          <p className="text-sm">
            Visual storytelling that connects brands and audiences.
          </p>
        </div>

        <div>
          <h4 className="text-white mb-3">Links</h4>
          <ul className="space-y-2">
            {["Home", "Work", "Services", "Contact"].map((item) => (
              <li
                key={item}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white mb-3">Contact</h4>
          <p className="text-sm">info@cinematicstudio.com</p>
          <p className="text-sm">+1 234 567 890</p>
        </div>

        <div>
          <h4 className="text-white mb-3">Follow</h4>
          <p className="text-sm hover:text-white transition-colors cursor-pointer">
            Instagram
          </p>
          <p className="text-sm hover:text-white transition-colors cursor-pointer">
            Vimeo
          </p>
        </div>
      </div>

      <p className="text-center text-xs mt-10 text-gray-600">
        © 2026 Cinematic Studio. All rights reserved.
      </p>
    </footer>
  );
}
