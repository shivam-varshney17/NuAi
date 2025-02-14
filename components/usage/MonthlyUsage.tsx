"use client"

interface MonthlyUsageProps {
  used: number;
  total: number;
}

export function MonthlyUsage({ used, total }: MonthlyUsageProps) {
  const usagePercentage = (used / total) * 100;

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
      <h2 className="text-lg font-semibold mb-4">Monthly Usage</h2>
      <p className="text-sm text-gray-600">{used} of {total} messages used</p>
      <div className="relative mt-2">
        <div className="h-2 bg-gray-100 rounded-full">
          <div 
            className="absolute h-2 rounded-full bg-gradient-to-r from-yellow-400 via-blue-500 to-blue-500"
            style={{ width: `${usagePercentage}%` }}
          />
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-xs text-gray-500">0</span>
          <span className="text-xs text-gray-500">50%</span>
          <span className="text-xs text-red-500">Limit 100%</span>
        </div>
      </div>
    </div>
  )
} 