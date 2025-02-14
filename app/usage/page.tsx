"use client"

import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { MonthlyUsage } from "@/components/usage/MonthlyUsage"
import { AvailablePlans } from "@/components/usage/AvailablePlans"
import { CurrentStatus } from "@/components/usage/CurrentStatus"

export default function Usage() {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex h-[calc(100vh-3.5rem)]">
        <div className="w-64 flex-none">
          <Sidebar />
        </div>
        <main className="flex-1 overflow-y-auto bg-gray-50/50 p-6">
          <div className="max-w-[1400px] mx-auto space-y-4">
            <h1 className="text-3xl font-bold mb-4">Usage & Billing</h1>
            <p className="text-gray-600 mb-6">Monitor your AI agent's performance and resources</p>

            <CurrentStatus 
              planName="Hobby" 
              messagesUsed={1800} 
              totalMessages={2000} 
              cost="$40.00" 
              activeUsers={156} 
            />
            <MonthlyUsage used={1800} total={2000} activeUsers={156} />
            <AvailablePlans />
          </div>
        </main>
      </div>
    </div>
  )
} 