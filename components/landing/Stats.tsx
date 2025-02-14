"use client"

import { motion } from "framer-motion";

const stats = [
  {
    number: "5.5B",
    label: "customer interactions powered",
    bgColor: "bg-white",
  },
  {
    number: "8X",
    label: "more productive than human agents",
    bgColor: "bg-[#E8EDF6]", // Light blue/purple tint
  },
  {
    number: "83%",
    label: "upto 83% of conversations autonomously resolved",
    bgColor: "bg-[#B7D5F7]", // Medium blue
  },
  {
    number: "99.9%+",
    label: "uptime of uninterrupted service",
    bgColor: "bg-[#89C2F7]", // Brighter blue
  },
];

export function Stats() {
  return (
    <section className="relative bg-[#F9F1E9]">
      {/* Top dark section - reduced height */}
      <div className="bg-[#0A0B2E] pt-20 pb-48"> {/* Adjusted padding */}
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="mb-8"> {/* Reduced margin */}
            <h2 className="text-[40px] leading-tight font-medium text-[#B7C0D8]">
              quality customer service
            </h2>
            <h3 className="text-[48px] leading-tight font-semibold text-white">
              automation at scale
            </h3>
          </div>
        </div>
      </div>

      {/* Stats Grid - Positioned to overlap the sections */}
      <div className="absolute left-0 right-0" style={{ top: '40%' }}> {/* Adjusted positioning */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`${stat.bgColor} rounded-3xl p-8 aspect-[4/5] flex flex-col justify-end
                           shadow-lg transition-shadow duration-300`}
              >
                <div>
                  <div className="text-[32px] font-bold text-[#0A0B2E] mb-4">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-700 leading-tight">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom section to maintain height */}
      <div className="h-80 bg-[#F9F1E9]" /> {/* Added background color */}
    </section>
  );
} 