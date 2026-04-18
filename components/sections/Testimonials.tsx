type Testimonial = {
  name: string;
  feedback: string;
};

type TestimonialsProps = {
  testimonials: Testimonial[];
};

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-4xl font-semibold">
            Testimonials
          </h2>
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            What clients say about working with Ramesh Rana.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition bg-gray-50"
            >
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                “{t.feedback}”
              </p>
              <h4 className="mt-4 font-semibold text-gray-900">
                — {t.name}
              </h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}