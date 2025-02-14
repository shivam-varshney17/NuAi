"use client"

interface CurrentStatusProps {
  planName: string;
  messagesUsed: number;
  totalMessages: number;
  cost: string;
  activeUsers: number;
}

export function CurrentStatus({ planName, messagesUsed, totalMessages, cost, activeUsers }: CurrentStatusProps) {
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      {/* Status Cards */}
      <div className="bg-white p-4 rounded-xl border border-gray-200 relative">
        <div className="w-12 h-12 bg-blue-100 rounded-lg absolute top-3 right-3" />
        <h3 className="text-sm text-gray-600">Current Plan</h3>
        <p className="text-xl font-bold mt-1">{planName}</p>
      </div>
      <div className="bg-white p-4 rounded-xl border border-gray-200 relative">
        <div className="w-12 h-12 bg-blue-100 rounded-lg absolute top-3 right-3" />
        <h3 className="text-sm text-gray-600">Messages Used</h3>
        <p className="text-xl font-bold mt-1">{messagesUsed}</p>
      </div>
      <div className="bg-white p-4 rounded-xl border border-gray-200 relative">
        <div className="w-12 h-12 bg-blue-100 rounded-lg absolute top-3 right-3" />
        <h3 className="text-sm text-gray-600">Current Cost</h3>
        <p className="text-xl font-bold mt-1">{cost}</p>
      </div>
      <div className="bg-white p-4 rounded-xl border border-gray-200 relative">
        <div className="w-12 h-12 bg-blue-100 rounded-lg absolute top-3 right-3" />
        <h3 className="text-sm text-gray-600">Active Users</h3>
        <p className="text-xl font-bold mt-1">{activeUsers}</p>
      </div>
    </div>
  )
} 