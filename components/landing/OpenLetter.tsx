"use client"

import Link from "next/link";

export function OpenLetter() {
  return (
    <section className="bg-[#ffffff] h-screen">
      <div className="max-w-7xl mx-auto px-6 h-full">
        <div className="bg-white rounded-lg w-full h-full p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            An open letter from CEO
          </h2>
          <p className="text-gray-700 mb-4">
            Dear valued customers and partners,
          </p>
          <p className="text-gray-700 mb-4">
            As we navigate through these challenging times, I want to take a moment to express my heartfelt gratitude for your unwavering support. Our journey has been remarkable, and it is your trust that fuels our passion for innovation and excellence.
          </p>
          <p className="text-gray-700 mb-4">
            At Nuton, we are committed to providing you with the best solutions tailored to your needs. Our team is continuously working to enhance our services, ensuring that we meet and exceed your expectations. We believe in the power of collaboration and are excited to partner with you in achieving your goals.
          </p>
          <p className="text-gray-700 mb-4">
            Thank you for being an integral part of our community. Together, we can create a brighter future and drive meaningful change in our industry.
          </p>
          <p className="text-gray-700 mb-4">
            Sincerely,
          </p>
          <p className="text-gray-700 font-bold">
            [Your Name] <br />
            CEO, Nuton
          </p>
        </div>
      </div>
    </section>
  );
} 