"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { images, ImageComponent } from "./ImageComponent";

export function LeadGeneration() {
  return (
    <section className="py-24 bg-[#F9F8F6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-bold">
            Your website's <span className="text-blue-700">lead generation engine</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Large Box on Left */}
          <div className="bg-blue-100/50 rounded-3xl min-h-[400px] p-8">
            {/* Content for the left box */}
          </div>

          {/* Chat Messages on Right */}
          <div className="relative">
            {/* Center Circle Icon */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 24 24" className="w-10 h-10">
                  <path
                    fill="#00A3FF"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                  />
                  <circle cx="12" cy="12" r="5" fill="#FF3366" />
                </svg>
              </div>
            </div>

            {/* Chat Messages Container */}
            <div className="bg-blue-100/50 rounded-3xl p-8 space-y-4">
              {[1, 2, 3, 4].map((index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-4 flex items-center space-x-3"
                >
                  <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <svg viewBox="0 0 24 24" className="w-5 h-5">
                      <path
                        fill="#00A3FF"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                      />
                      <circle cx="12" cy="12" r="3" fill="#FF3366" />
                    </svg>
                  </div>
                  <div className="h-2 bg-gray-200 rounded w-full"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 