import { Phone, Home, Award } from "lucide-react";

type HeroProps = {
  name: string;
  title: string;
  tagline: string;
  image?: string;
};

export default function Hero({ name, title, tagline, image }: HeroProps) {
  return (
    <section className="text-center py-20 md:py-28 px-6 bg-gradient-to-b from-white to-gray-50">

      {/* Profile Image */}
      {image && (
        <div className="flex justify-center mb-6 fade-up opacity-0">
         <img
            src={image}
            alt={name}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg border border-gray-200"
          />
        </div>
      )}

      {/* Tagline Badge */}
      <p className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 px-4 py-1 rounded-full text-xs md:text-sm mb-4 fade-up-delay-1 opacity-0">
        <Award size={16} className="text-blue-600" />
        {tagline}
      </p>

      {/* Main Heading */}
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-3xl mx-auto fade-up-delay-2 opacity-0">
        {name}
      </h1>

      {/* Sub Title */}
      <p className="mt-4 text-base md:text-lg text-gray-600 fade-up-delay-2 opacity-0">
        {title}
      </p>

      {/* CTA Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 fade-up-delay-3 opacity-0">

        <a
          href="tel:+16474568442"
          className="bg-black text-white px-6 py-3 rounded-full text-sm md:text-base hover:bg-gray-800 transition inline-flex items-center gap-2"
        >
          <Phone size={18} />
          Contact Now
        </a>

        <a
          href="https://www.realtor.ca/agent/2005011/ramesh-rana-821-bovaird-dr-west-31-brampton-ontario-l6x0t9"
          target="_blank"
          className="border border-gray-300 px-6 py-3 rounded-full text-sm md:text-base hover:bg-gray-100 transition inline-flex items-center gap-2"
        >
          <Home size={18} />
          View Listings
        </a>

      </div>

    </section>
  );
}