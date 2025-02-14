"use client"

import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { DataHub } from "@/components/sections/data-hub"
import { Preview } from "@/components/sections/preview"
import { Deploy } from "@/components/sections/deploy"
import { useState } from "react"
import { Database, Eye, Rocket } from "lucide-react"
import { cn } from "@/lib/utils"
import { TrainingLoader } from "@/components/TrainingLoader"

type TabType = 'datahub' | 'preview' | 'deploy'

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<TabType>('datahub')
  const [isLoading, setIsLoading] = useState(false)

  const tabs = [
    { id: 'datahub', label: 'Data Hub', icon: Database },
    { id: 'preview', label: 'Preview', icon: Eye },
    { id: 'deploy', label: 'Deploy', icon: Rocket },
  ]

  return (
    <div className="h-screen">
      <Header />
      <div className="flex h-[calc(100vh-3.5rem)]">
        <div className="w-64 flex-none">
          <Sidebar />
        </div>
        <main className="flex-1 overflow-y-auto bg-gray-50/50 p-6">
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="border-b">
              <div className="flex space-x-8">
                {tabs.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id as TabType)}
                    className={cn(
                      "flex items-center gap-2 py-4 px-2 border-b-2 transition-colors",
                      activeTab === id 
                        ? "border-black text-black" 
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              {activeTab === 'datahub' && (
                <DataHub onComplete={() => setActiveTab('preview')} />
              )}
              {activeTab === 'preview' && (
                <Preview onComplete={() => setActiveTab('deploy')} />
              )}
              {activeTab === 'deploy' && (
                <Deploy onComplete={() => { /* Your completion logic here */ }} />
              )}
            </div>

            {isLoading && <TrainingLoader />}
          </div>
        </main>
      </div>
    </div>
  )
}
