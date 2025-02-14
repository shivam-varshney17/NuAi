"use client"

import { motion } from "framer-motion";
import { Shield, Lock, BarChart } from "lucide-react"; // Import icons from lucide-react

const features = [
  {
    icon: <Shield className="h-8 w-8 text-gray-700 mb-4" />,
    title: "Enterprise-grade security",
    description: "HIPAA, SOC2 and GDPR compliance safeguard sensitive data with industry leading security practices",
  },
  {
    icon: <Lock className="h-8 w-8 text-gray-700 mb-4" />,
    title: "Privacy by design",
    description: "High standards of protection at every stage of the data lifecycle ensure full compliance with privacy laws and regulations",
  },
  {
    icon: <BarChart className="h-8 w-8 text-gray-700 mb-4" />,
    title: "Reliability and Scale",
    description: "Manage hundreds of millions of interactions and effectively handle peak loads without compromising service quality",
  },
];

export function BattleTestedAI() {
  return (
    <section className="py-24 bg-[#F9F8F6]">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          battle tested AI with <span className="text-blue-600">enterprise-level rigor</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-8 shadow-lg flex flex-col items-center"
          >
            {feature.icon}
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-center">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 