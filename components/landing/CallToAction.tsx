"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export function CallToAction() {
  return (
    <section className="py-24 bg-[#F9F1E9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {/* Find an Expert Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-start"
          >
            <Button 
              variant="outline" 
              className="mb-4 rounded-full border-2 hover:bg-gray-100"
              asChild
            >
              <Link href="/find-expert">Find an Expert</Link>
            </Button>
          </motion.div>

          {/* Follow on X Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-start"
          >
            <h3 className="text-xl font-semibold mb-3">Follow us on X.</h3>
            <p className="text-gray-500 mb-4">
              Get nutonAI news, company information and media resources
            </p>
            <Button 
              variant="outline" 
              className="rounded-full border-2 hover:bg-gray-100"
              asChild
            >
              <Link href="https://twitter.com/nutonai">Follow @nutonai</Link>
            </Button>
          </motion.div>

          {/* Community Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-start"
          >
            <h3 className="text-xl font-semibold mb-3">Join our community.</h3>
            <p className="text-gray-500 mb-4">
              For code related questions, join our community forum
            </p>
            <Button 
              variant="outline" 
              className="rounded-full border-2 hover:bg-gray-100"
              asChild
            >
              <Link href="/community">View our community forum</Link>
            </Button>
          </motion.div>
        </div>

        {/* Bottom Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-gray-200 pt-12">
          {/* Ready to Deploy Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-start"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to deploy? <span className="text-gray-500">Start building with a free account.</span>
            </h2>
            <p className="text-gray-500 mb-6">
              Speak to an expert for your Pro or Enterprise needs.
            </p>
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                className="rounded-full border-2 hover:bg-gray-100"
                asChild
              >
                <Link href="/deploy">Start Deploying</Link>
              </Button>
              <Button 
                className="rounded-full bg-[#4F46E5] hover:bg-[#4338CA] text-white"
                asChild
              >
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </motion.div>

          {/* Explore Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-start"
          >
            <h2 className="text-3xl font-bold mb-4">
              Explore nutonAI <span className="text-gray-500">with an interactive product tour,</span>
            </h2>
            <p className="text-gray-500 mb-6">
              trial or a personalized demo
            </p>
            <Button 
              variant="outline" 
              className="rounded-full border-2 hover:bg-gray-100"
              asChild
            >
              <Link href="/enterprise">Explore Enterprise</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 