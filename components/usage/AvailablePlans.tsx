"use client"

import { PlanCard } from "./PlanCard";

const plans = [
  {
    name: "Starter",
    price: "$40/month",
    messages: "2,000 messages per month",
    features: [
      "1 AI Sales Agent",
      "Basic Analytics",
      "Email Support",
      "5 AI Actions"
    ],
    isCurrent: true,
  },
  {
    name: "Pro",
    price: "$150/month",
    messages: "12,000 messages per month",
    features: [
      "2 AI Sales Agents",
      "Advanced Analytics",
      "Priority Support",
      "10 AI Actions",
      "Custom Branding"
    ],
    isRecommended: true,
  },
  {
    name: "Ultra",
    price: "$500/month",
    messages: "40,000 messages per month",
    features: [
      "3 AI Sales Agents",
      "Enterprise Analytics",
      "24/7 Support",
      "15 AI Actions",
      "API Access",
      "Custom Integration"
    ],
  },
];

export function AvailablePlans() {
  return (
    <div className="space-y-6 bg-gray-50 rounded-xl p-6">
      <div className="flex items-center space-x-4">
        <h2 className="text-lg font-semibold">Available Plans</h2>
        <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 border border-gray-200">
          <div className="flex items-center">
            <input type="radio" id="monthly" name="billing" className="text-purple-600" defaultChecked />
            <label htmlFor="monthly" className="text-sm ml-2">Monthly</label>
          </div>
          <div className="h-4 w-px bg-gray-200" />
          <div className="flex items-center">
            <input type="radio" id="yearly" name="billing" className="text-purple-600" />
            <label htmlFor="yearly" className="text-sm ml-2">Yearly <span className="text-purple-600">(Save 30%)</span></label>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <PlanCard key={index} {...plan} />
        ))}
      </div>
    </div>
  )
} 