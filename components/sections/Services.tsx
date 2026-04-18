import { Home, Tag, Key, LineChart } from "lucide-react";

type Service = {
  title: string;
  description: string;
};

type ServicesProps = {
  services: Service[];
  className?: string;
};

export default function Services({ services, className }: ServicesProps) {
  const icons = [Home, Tag, Key, LineChart];

  return (
    <section id="services" className={`py-16 md:py-24 bg-gray-50 ${className || ""}`}>
      
      {/* Section Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-2xl md:text-4xl font-semibold">
          Services
        </h2>
        <p className="mt-4 text-gray-600 text-sm md:text-base">
          Comprehensive real estate solutions backed by deep technical knowledge,
          award‑winning performance, and a client‑first approach.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid p-5 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => {
          const Icon = icons[index];
          return (
            <div
              key={index}
              className="border rounded-2xl p-6 bg-white hover:shadow-md transition"
            >
              <Icon className="mb-3 text-blue-600" size={32} />
              <h3 className="text-lg font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>

    </section>
  );
}