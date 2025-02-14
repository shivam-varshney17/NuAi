"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import { useState } from "react"

const plans = [
  {
    name: "Base",
    price: "$49/month",
    description: "Perfect for small businesses",
    features: [
      "1 AI Sales Agent",
      "Basic Website Learning",
      "8/5 Support",
      "100 Conversations/month"
    ],
    isPopular: false,
  },
  {
    name: "Pro",
    price: "$149/month",
    description: "Ideal for growing companies",
    features: [
      "3 AI Sales Agents",
      "Advanced Website Learning",
      "24/7 Support",
      "1000 Conversations/month"
    ],
    isPopular: true,
  },
  {
    name: "Ultra",
    price: "$399/month",
    description: "For enterprises",
    features: [
      "Unlimited AI Agents",
      "Custom Website Learning",
      "Dedicated Support",
      "Unlimited Conversations"
    ],
    isPopular: false,
  },
];

export function Deploy() {
  const [isDeployed, setIsDeployed] = useState(false);

  const handleDeploy = () => {
    // Logic for deploying the agent
    setIsDeployed(true);
  };

  return (
    <div className="h-screen">
      <div className="flex h-[calc(100vh-3.5rem)]">
        <main className="flex-1 overflow-y-auto bg-gray-50/50 p-6">
          <div className="max-w-[1400px] mx-auto space-y-4">
            <h1 className="text-3xl font-bold mb-4 text-center">Ready to Deploy</h1>
            <p className="text-gray-600 mb-6 text-center">
              Deploy your AI sales agent in minutes and start converting visitors into qualified leads
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {plans.map((plan, index) => (
                <div key={index} className={`bg-white p-6 rounded-lg shadow ${plan.isPopular ? 'border-2 border-blue-500' : ''}`}>
                  <h2 className="text-xl font-semibold">{plan.name}</h2>
                  <p className="text-lg text-gray-500">{plan.description}</p>
                  <p className="text-2xl font-bold mt-2">{plan.price}</p>
                  <ul className="mt-4 space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="text-green-500">✔️</span>
                        <span className="ml-2">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-4 w-full" variant="outline">
                    Select {plan.name}
                  </Button>
                  {plan.isPopular && <span className="text-sm text-blue-500 mt-2 block">Popular</span>}
                </div>
              ))}
            </div>

            {!isDeployed ? (
              <Card className="p-6 text-center mt-6">
                <CheckCircle2 className="mx-auto h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-lg font-medium mb-2">Ready to Deploy</h3>
                <p className="text-gray-600 mb-6">
                  Your agent is configured and ready to be deployed
                </p>
                <Button
                  className="bg-green-500 hover:bg-green-600 text-white"
                  onClick={handleDeploy}
                >
                  Deploy Agent
                </Button>
              </Card>
            ) : (
              <p className="text-green-500 mt-6">Your agent has been deployed successfully!</p>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}