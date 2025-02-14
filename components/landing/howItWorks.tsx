"use client"

import { motion } from "framer-motion";
import { Calendar, Clock, Users } from "lucide-react";
import Image from "next/image";
import { images, ImageComponent } from "./ImageComponent";

const steps = [
  {
    id: "01",
    title: "Connect your calendar",
    description: "We'll handle all the cross-referencing, so you don't have to worry about double bookings.",
    icon: <Calendar className="h-12 w-12 text-orange-500" />,
    imagePath: images.dashboard,
  },
  {
    id: "02",
    title: "Set your availability",
    description: "Want to block off weekends? Set up any buffers? We make that easy.",
    icon: <Clock className="h-12 w-12 text-orange-500" />,
    imagePath: images.dashboard,
  },
  {
    id: "03",
    title: "Choose how to meet",
    description: "It could be a video chat, phone call, or a walk in the park!",
    icon: <Users className="h-12 w-12 text-orange-500" />,
    imagePath: images.dashboard,
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-[#F0E4D8]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Label */}
        <div className="flex justify-center mb-8">
          <div className="bg-[#1C1C1C] text-white px-6 py-2 rounded-full text-sm font-medium">
            How it Works
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-[#1C1C1C]">
            With us, building an agent is easy
          </h2>
          <p className="text-xl text-gray-600">
            Effortless solution for individuals, powerful solutions for fast-growing modern companies.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-3xl shadow-lg overflow-hidden"
            >
              {/* Card Content */}
              <div className="p-8 flex flex-col h-full">
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center bg-[#1C1C1C] text-white 
                               rounded-full w-8 h-8 text-sm font-medium mb-6">
                  {step.id}
                </div>

                {/* Title and Description */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>

                {/* Icon */}
                <div className="mb-6">
                  {step.icon}
                </div>

                {/* Image Container at the bottom */}
                <div className="aspect-square w-full overflow-hidden rounded-2xl bg-gray-100 mt-auto">
                  <ImageComponent 
                    src={step.imagePath} 
                    alt={step.title}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}