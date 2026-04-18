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

      <About
        title="About Ramesh Rana"
        subtitle="A trusted Real Estate Broker with a rare blend of technical expertise, award‑winning performance, and a client‑first philosophy."
        paragraphs={[
          "Ramesh Rana is a licensed Real Estate Broker with Homelife Miracle Realty Ltd., Brokerage, bringing extensive industry experience since 2016. He began his career as a real estate salesperson and earned his broker designation in 2018, demonstrating a strong commitment to professional growth and excellence.",
          "His entry into the real estate industry was built upon a solid foundation of hands‑on experience in home renovation, complemented by formal education and training in construction technology. This technical background enables him to provide clients with valuable insights into property structure, quality, and long‑term investment potential.",
          "Prior to his real estate career, Ramesh developed strong client service and relationship management skills while working with a reputable organization, which continues to inform his client‑focused and service‑driven approach.",
          "Ramesh’s consistent performance has been recognized through numerous prestigious awards, including the Rookie of the Year Award (2016), Chairman Award (2021 and 2022), President Award (2017, 2020, and 2024), Platinum Award (2016, 2018, 2019, and 2025), and Gold Award (2023).",
          "He serves a broad geographic area, including the Greater Toronto Area and key markets such as Ottawa, Kingston, London, Kitchener, Waterloo, Cambridge, Guelph, Niagara Falls, and Brantford.",
          "Specializing in both residential and commercial real estate, Ramesh provides comprehensive services in buying, selling, leasing, and investment. He is known for his integrity, professionalism, approachable nature, and strict commitment to client confidentiality.",
          "With a career built on a rare combination of technical expertise and elite service, Ramesh has established himself as a premier force in Ontario real estate. Whether navigating complex commercial investments or helping families secure their first home, he is committed to delivering exceptional results with honesty and transparency."
        ]}
      />
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