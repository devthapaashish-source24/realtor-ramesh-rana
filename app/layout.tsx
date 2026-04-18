import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Ramesh Rana | Real Estate Broker",
  description: "Trusted real estate broker serving Ontario since 2016",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}