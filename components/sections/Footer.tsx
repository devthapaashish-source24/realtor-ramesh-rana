import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h3 className="text-xl font-semibold text-white">Ramesh Rana</h3>
          <p className="text-sm mt-3 leading-relaxed">
            Real Estate Broker | Homelife Miracle Realty Ltd.
            <br />
            Serving Ontario with integrity, expertise, and a client‑first approach.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-white transition">Home</a></li>
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#services" className="hover:text-white transition">Services</a></li>
            <li><a href="#testimonials" className="hover:text-white transition">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>

          <div className="flex items-start gap-3 mb-3">
            <Phone size={18} className="text-blue-400" />
            <a href="tel:6474568442" className="text-sm hover:underline">
              647‑456‑8442
            </a>
          </div>

          <div className="flex items-start gap-3 mb-3">
            <Mail size={18} className="text-blue-400" />
            <p className="text-sm">123@email.com</p>
          </div>

          <div className="flex items-start gap-3 mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="text-blue-400 hover:text-blue-600 transition"
            >
              <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12z" />
            </svg>
            <a
              href="https://www.facebook.com/ramesh.rana.96780"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-white transition"
            >
              Ramesh Rana
            </a>
          </div>

          <div className="flex items-start gap-3">
            <MapPin size={18} className="text-blue-400" />
            <p className="text-sm">Homelife Miracle Realty Ltd., Ontario</p>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Ramesh Rana. All rights reserved.
      </div>

      {/* Developer Credit */}
      <p className="text-xs text-gray-500 text-center mt-3 mb-2">
        Developed by{" "}
        <a
          href="https://www.facebook.com/ashish.thapa.1213"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 font-medium hover:underline"
        >
          Ashish Thapa
        </a>
      </p>
    </footer>
  );
}