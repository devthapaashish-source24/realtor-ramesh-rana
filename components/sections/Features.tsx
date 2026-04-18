import { Hammer, UserCheck, ShieldCheck } from "lucide-react";

type Feature = {
  title: string;
  description: string;
};

type FeaturesProps = {
  features: Feature[];
};

export default function Features({ features }: FeaturesProps) {
  const icons = [Hammer, UserCheck, ShieldCheck];

  return (
    <section id="features" className="py-16 md:py-24">
      
      {/* Section Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-2xl md:text-4xl font-semibold">
          Why Choose Us
        </h2>
        <p className="mt-4 text-gray-600 text-sm md:text-base">
          Delivering exceptional service with expertise, integrity, and a client-first approach.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = icons[index];
          return (
            <div
              key={index}
              className="border rounded-2xl p-6 text-center hover:shadow-md transition"
            >
              <Icon className="mx-auto mb-3 text-blue-600" size={32} />
              <h3 className="text-lg font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>

    </section>
  );
}