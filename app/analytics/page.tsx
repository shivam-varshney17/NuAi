"use client"

import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { Card } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 700 },
]

export default function AnalyticsPage() {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex h-[calc(100vh-3.5rem)]">
        <div className="w-64 flex-none">
          <Sidebar />
        </div>
        <main className="flex-1 overflow-y-auto bg-gray-50/50 p-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-2xl font-semibold mb-6">Analytics</h1>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { label: "Total Conversations", value: "1,234" },
                { label: "Active Users", value: "856" },
                { label: "Response Rate", value: "94%" }
              ].map((stat, i) => (
                <Card key={i} className="p-4">
                  <h3 className="text-sm font-medium text-gray-500">{stat.label}</h3>
                  <p className="text-2xl font-semibold mt-1">{stat.value}</p>
                </Card>
              ))}
            </div>
            
            <Card className="p-6">
              <h3 className="text-lg font-medium mb-4">Conversation Trends</h3>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="hsl(var(--chart-1))"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}