"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function GetStarted() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Universe-like Background */}
      <div className="absolute inset-0 bg-[url('/path/to/universe-background.jpg')] bg-cover bg-center opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Row */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="col-span-3 bg-white rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900">Welcome to Nuton, let's get started!</h2>
            <p className="text-gray-600 mt-2">Jump into some of our most popular solutions</p>
          </div>

          <div className="col-span-1 bg-white rounded-2xl p-6 shadow-lg">
            <p className="text-gray-600">Not ready to jump in yet?</p>
            <Link href="/control-panel" className="text-blue-600 hover:underline">
              Explore our control panel
            </Link>
          </div>
        </div>

        {/* First Row of 3 Boxes */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="h-16 mb-4">
              <svg className="w-full h-full" viewBox="0 0 100 40">
                <rect x="10" y="5" width="80" height="5" rx="1" fill="#0066FF" fillOpacity="0.4" />
                <rect x="20" y="15" width="60" height="5" rx="1" fill="#00CC88" fillOpacity="0.4" />
                <rect x="15" y="25" width="70" height="5" rx="1" fill="#1C1C1C" fillOpacity="0.4" />
              </svg>
            </div>
            <h3 className="text-gray-900 font-medium">Deploy a web application</h3>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="h-16 mb-4">
              <svg className="w-full h-full" viewBox="0 0 100 40">
                <circle cx="30" cy="20" r="10" fill="#1C1C1C" />
                <circle cx="60" cy="20" r="10" fill="#0066FF" />
                <circle cx="80" cy="20" r="8" fill="#00CC88" />
              </svg>
            </div>
            <h3 className="text-gray-900 font-medium">Host a website or static site</h3>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="h-16 mb-4">
              <svg className="w-full h-full" viewBox="0 0 100 40">
                {[...Array(15)].map((_, i) => (
                  <circle
                    key={i}
                    cx={15 + (i % 5) * 18}
                    cy={10 + Math.floor(i / 5) * 12}
                    r="4"
                    fill={i % 3 === 0 ? "#1C1C1C" : i % 3 === 1 ? "#0066FF" : "#00CC88"}
                    fillOpacity="0.4"
                  />
                ))}
              </svg>
            </div>
            <h3 className="text-gray-900 font-medium">Deploy a container-based app</h3>
          </motion.div>
        </div>

        {/* Second Row of 3 Boxes */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="h-16 mb-4">
              <svg className="w-full h-full" viewBox="0 0 100 40">
                {[...Array(12)].map((_, i) => (
                  <rect
                    key={i}
                    x={10 + (i % 4) * 22}
                    y={5 + Math.floor(i / 4) * 12}
                    width="18"
                    height="8"
                    rx="1"
                    fill={i % 3 === 0 ? "#1C1C1C" : i % 3 === 1 ? "#0066FF" : "#00CC88"}
                    fillOpacity="0.4"
                  />
                ))}
              </svg>
            </div>
            <h3 className="text-gray-900 font-medium">Deploy a database</h3>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="h-16 mb-4">
              <svg className="w-full h-full" viewBox="0 0 100 40">
                {[...Array(3)].map((_, i) => (
                  <g key={i}>
                    <line
                      x1="10"
                      y1={10 + i * 10}
                      x2="90"
                      y2={10 + i * 10}
                      stroke="#0066FF"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />
                    {[...Array(5)].map((_, j) => (
                      <circle
                        key={j}
                        cx={15 + j * 18}
                        cy={10 + i * 10}
                        r="4"
                        fill={j % 2 === 0 ? "#0066FF" : "#00CC88"}
                      />
                    ))}
                  </g>
                ))}
              </svg>
            </div>
            <h3 className="text-gray-900 font-medium">Deploy a virtual machine</h3>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="h-16 mb-4">
              <svg className="w-full h-full" viewBox="0 0 100 40">
                <rect x="20" y="5" width="20" height="20" rx="2" fill="#1C1C1C" />
                <rect x="45" y="5" width="20" height="20" rx="2" fill="#0066FF" />
                <rect x="70" y="5" width="20" height="20" rx="2" fill="#00CC88" />
                <circle cx="50" cy="30" r="6" fill="#00CC88" fillOpacity="0.4" />
              </svg>
            </div>
            <h3 className="text-gray-900 font-medium">Store static objects</h3>
          </motion.div>
        </div>

        {/* Bottom Row - 2 wider boxes */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-8 h-8" viewBox="0 0 32 32">
                <circle cx="16" cy="16" r="12" fill="#0066FF" fillOpacity="0.2" />
                <path d="M16 8v16M8 16h16" stroke="#0066FF" strokeWidth="2" />
              </svg>
            </div>
            <h3 className="text-gray-900 font-medium text-center">DigitalOcean GPU Droplets</h3>
            <p className="text-gray-600 text-center text-sm mt-2">
              Sign up today for early access to GPU Droplets—simple, flexible, and scalable machines for your AI/ML workloads.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <svg className="h-6" viewBox="0 0 120 24">
                <path d="M0 12h100" stroke="#0066FF" strokeWidth="2" />
                <path d="M90 6l10 6-10 6" fill="#0066FF" />
              </svg>
              <span className="text-blue-600 font-bold ml-2">CLOUDWAYS</span>
            </div>
            <h3 className="text-gray-900 font-medium text-center">DigitalOcean now offers Managed Hosting</h3>
            <p className="text-gray-600 text-center text-sm mt-2">
              Hassle-free managed website hosting is now part of DigitalOcean!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 