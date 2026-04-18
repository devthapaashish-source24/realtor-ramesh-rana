"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(`New Inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:ramesh@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-4xl font-semibold">Contact</h2>
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            Get in touch with Ramesh Rana for buying, selling, leasing, or investment inquiries.
          </p>
        </div>

        {/* Contact Info + Form */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Phone className="text-blue-600" size={24} />
              <div>
                <h4 className="font-semibold">Phone</h4>
               <a href="tel:6474568442" className="text-gray-600 text-sm hover:underline">
                  647‑456‑8442
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-blue-600" size={24} />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-600 text-sm">example@email.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-blue-600" size={24} />
              <div>
                <h4 className="font-semibold">Office Location</h4>
                <p className="text-gray-600 text-sm">
                  Homelife Miracle Realty Ltd., Ontario
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              name="name"
              className="w-full border rounded-lg p-3 text-sm"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              name="email"
              className="w-full border rounded-lg p-3 text-sm"
              required
            />

            <input
              type="text"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              name="phone"
              className="w-full border rounded-lg p-3 text-sm"
              required
            />

            <textarea
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              name="message"
              rows={5}
              className="w-full border rounded-lg p-3 text-sm"
              required
            />

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}