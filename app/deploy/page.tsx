"use client";

import { useState } from "react";

const plans = [
  {
    name: "Base",
    price: "$49/month",
    description: "Perfect for small businesses",
    features: [
      "1 AI Sales Agent",
      "Basic Website Learning",
      "8/5 Support",
      "100 Conversations/month",
    ],
  },
  {
    name: "Pro",
    price: "$149/month",
    description: "Ideal for growing companies",
    features: [
      "3 AI Sales Agents",
      "Advanced Website Learning",
      "24/7 Support",
      "1000 Conversations/month",
    ],
  },
  {
    name: "Ultra",
    price: "$399/month",
    description: "For enterprises",
    features: [
      "Unlimited AI Agents",
      "Custom Website Learning",
      "Dedicated Support",
      "Unlimited Conversations",
    ],
  },
];

const Deploy = () => {
  const [isDeployed, setIsDeployed] = useState(false);

  const handleDeploy = () => {
    setIsDeployed(true);
  };

  return (
    <div className="h-screen p-6">
      <h1 className="text-3xl font-bold text-center">Ready to Deploy</h1>
      <p className="text-gray-600 text-center mb-6">
        Deploy your AI sales agent in minutes.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
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
            <button
              className="mt-4 w-full bg-blue-500 text-white py-2 rounded"
              onClick={handleDeploy}
            >
              Select {plan.name}
            </button>
          </div>
        ))}
      </div>
      {!isDeployed ? (
        <button
          className="bg-green-500 hover:bg-green-600 text-white mt-6 py-2 px-4 rounded"
          onClick={handleDeploy}
        >
          Deploy Agent
        </button>
      ) : (
        <p className="text-green-500 mt-6">Your agent has been deployed!</p>
      )}
    </div>
  );
};

export default Deploy;
