"use client"

interface PlanCardProps {
  name: string;
  price: string;
  messages: string;
  features: string[];
  isCurrent?: boolean;
  isRecommended?: boolean;
}

export function PlanCard({ name, price, messages, features, isCurrent, isRecommended }: PlanCardProps) {
  return (
    <div className={`relative bg-white p-6 rounded-xl border ${
      isCurrent ? 'border-blue-500' : isRecommended ? 'border-purple-500' : 'border-gray-200'
    }`}>
      {isRecommended && (
        <div className="absolute -top-3 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
          <span className="text-white">★</span>
          Recommended
        </div>
      )}
      
      <div className="mb-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-600">{price}</p>
      </div>
      
      <div className={`rounded-lg p-3 mb-4 ${
        isCurrent ? 'bg-blue-50' : isRecommended ? 'bg-purple-50' : 'bg-gray-50'
      }`}>
        <p className="text-sm font-medium">{messages}</p>
      </div>

      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm">
            <span className="mr-2 text-sm">•</span>
            {feature}
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-2 px-4 rounded-lg font-medium ${
          isCurrent 
            ? 'bg-blue-500 text-white'
            : isRecommended
              ? 'bg-purple-600 text-white'
              : 'bg-black text-white'
        }`}
      >
        {isCurrent ? 'Current Plan' : `Upgrade to ${name}`}
      </button>
    </div>
  )
} 