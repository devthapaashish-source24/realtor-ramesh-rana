import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
export default function Home() {
  return (
    <>
      <Hero
        name="Ramesh Rana"
        title="Real Estate Broker | Homelife Miracle Realty Ltd."
        tagline="Trusted Real Estate Expert Serving Ontario Since 2016"
        image="/ramesh-profile.jpg"

      />

      <Features
        features={[
          {
            title: "Deep Technical Knowledge",
            description:
              "Strong background in construction and renovation allows better property evaluation.",
          },
          {
            title: "Client-First Approach",
            description:
              "Focused on understanding client needs and delivering personalized solutions.",
          },
          {
            title: "Integrity & Trust",
            description:
              "Committed to transparency, honesty, and complete client confidentiality.",
          },
        ]}
      />
      <Services
        services={[
          {
            title: "Buying",
            description:
              "Guiding buyers with expert market insights, structural evaluation knowledge, and a client‑first approach to secure the right property at the right value.",
          },
          {
            title: "Selling",
            description:
              "Helping sellers maximize property value through strategic pricing, professional marketing, and deep understanding of construction and renovation potential.",
          },
          {
            title: "Leasing",
            description:
              "Assisting landlords and tenants with smooth, transparent leasing services across residential and commercial properties throughout Ontario.",
          },
          {
            title: "Investment",
            description:
              "Providing data‑driven investment guidance backed by construction expertise and award‑winning real estate performance across multiple Ontario markets.",
          },
        ]}
      />

      <About/>
      <Testimonials
        testimonials={[
          {
            name: "Amit Sharma",
            feedback:
              "Ramesh guided us through the entire buying process with patience and deep knowledge. His construction background helped us avoid costly mistakes.",
          },
          {
            name: "Simran Kaur",
            feedback:
              "Professional, honest, and extremely reliable. Ramesh made selling our home smooth and stress‑free. Highly recommended!",
          },
          {
            name: "Gurpreet Singh",
            feedback:
              "His market insights and negotiation skills helped us secure a great investment property. Truly a top‑tier broker.",
          },
          {
            name: "Neha Patel",
            feedback:
              "Ramesh treats clients like family. Transparent, trustworthy, and always available. We felt supported at every step.",
          },
        ]}
      />
      <Contact />
      <Footer />
    </>
  );
}