"use client"

import { useEffect, useState } from "react"

const steps = [
  "Securing the files",
  "Preparing embeddings",
  "Setting up Vector Database",
  "Success, your own RAG is ready!!"
]

export function TrainingLoader() {
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    if (currentStep < steps.length) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1)
      }, 3750) // Change step every 3.75 seconds

      return () => clearTimeout(timer)
    }
  }, [currentStep])

  return (
    <div className="flex flex-col items-center justify-center h-full p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Start training now</h2>
      <div className="flex flex-col items-start">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center mb-2">
            <div
              className={`w-4 h-4 rounded-full transition-colors duration-500
                ${index < currentStep ? 'bg-green-500' : 'bg-gray-300'}
                ${index === currentStep ? 'animate-pulse' : ''}`}
            />
            <span
              className={`ml-2 transition-all duration-500
                ${index < currentStep ? 'line-through text-gray-600' : 'text-gray-800'}`}
            >
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
