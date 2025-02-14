"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const resources = [
  {
    id: 1,
    image: "/images/blog/blog-1.jpg",
    title: "How AI is Transforming Customer Service",
    description: "Learn about the latest trends in AI-powered customer service solutions.",
    link: "/blog/ai-customer-service"
  },
  {
    id: 2,
    image: "/images/blog/blog-2.jpg",
    title: "Building Scalable Support Systems",
    description: "Best practices for implementing enterprise-grade support infrastructure.",
    link: "/blog/scalable-support"
  },
  {
    id: 3,
    image: "/images/blog/blog-3.jpg",
    title: "The Future of Automation",
    description: "Insights into upcoming trends in automation and AI technology.",
    link: "/blog/future-automation"
  },
  {
    id: 4,
    image: "/images/blog/blog-4.jpg",
    title: "Maximizing Customer Satisfaction",
    description: "Strategies for improving customer experience with AI tools.",
    link: "/blog/customer-satisfaction"
  }
];

export function Resources() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 >= resources.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? resources.length - 3 : prevIndex - 1
    );
  };

  const visibleResources = resources.slice(currentIndex, currentIndex + 3);

  return (
    <section className="py-24 bg-[#F9F1E9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-5xl font-bold text-[#1C1C1C]">
            Explore Resources
          </h2>
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Next slide"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleResources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="aspect-square bg-gray-200 rounded-3xl overflow-hidden mb-6">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              
              <Link 
                href={resource.link}
                className="block group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {resource.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
                <p className="text-gray-600 mb-4">
                  {resource.description}
                </p>
                <div className="flex items-center text-gray-900 font-medium group-hover:text-blue-600 transition-colors">
                  View blog
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 