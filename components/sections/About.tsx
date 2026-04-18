"use client";

import { Award, Home, MapPin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">About Ramesh Rana</h2>
          <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
            With years of experience in the Ontario real estate market, 
            Ramesh is committed to helping families, investors, and first‑time buyers 
            make confident property decisions. His approach is built on trust, 
            transparency, and delivering results.
          </p>
        </div>

        {/* Achievements Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-16">

          <div>
            <h3 className="text-3xl font-bold text-blue-600">10+</h3>
            <p className="text-gray-600 text-sm">Years Experience</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-600">250+</h3>
            <p className="text-gray-600 text-sm">Properties Sold</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-600">Top 5%</h3>
            <p className="text-gray-600 text-sm">Homelife Miracle Agents</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-600">GTA</h3>
            <p className="text-gray-600 text-sm">Areas Served</p>
          </div>

        </div>

        {/* Awards Section */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-sm mb-16">
          <h3 className="text-xl font-semibold text-center mb-6">Awards & Recognition</h3>

          <div className="grid md:grid-cols-2 gap-6 text-center">

            <div className="p-4 border rounded-lg bg-white">
              <p className="font-semibold text-blue-600">Top 5% Agent</p>
              <p className="text-gray-600 text-sm">Homelife Miracle Realty</p>
            </div>

            <div className="p-4 border rounded-lg bg-white">
              <p className="font-semibold text-blue-600">Platinum Award</p>
              <p className="text-gray-600 text-sm">Outstanding Sales Performance</p>
            </div>

            <div className="p-4 border rounded-lg bg-white">
              <p className="font-semibold text-blue-600">100% Club Award</p>
              <p className="text-gray-600 text-sm">Consistent High-Level Achievement</p>
            </div>

            <div className="p-4 border rounded-lg bg-white">
              <p className="font-semibold text-blue-600">Client Excellence Award</p>
              <p className="text-gray-600 text-sm">Exceptional Customer Satisfaction</p>
            </div>

          </div>
        </div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Expertise */}
          <div className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
            <Award className="text-blue-600 mb-3" size={32} />
            <h4 className="font-semibold text-lg mb-2">Professional Expertise</h4>
            <p className="text-gray-600 text-sm">
              A trusted realtor with deep knowledge of the GTA and surrounding areas.
            </p>
          </div>

          {/* Areas Served */}
          <div className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
            <MapPin className="text-blue-600 mb-3" size={32} />
            <h4 className="font-semibold text-lg mb-2">Areas Served</h4>
            <p className="text-gray-600 text-sm">
              Specializing in Brampton, Mississauga, Toronto, and the entire GTA region.
            </p>
          </div>

          {/* Services */}
          <div className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
            <Home className="text-blue-600 mb-3" size={32} />
            <h4 className="font-semibold text-lg mb-2">Real Estate Services</h4>
            <p className="text-gray-600 text-sm">
              Residential, commercial, leasing, and investment properties tailored to your goals.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}