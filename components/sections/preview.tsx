"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { useState, useCallback } from "react"
import { Upload } from "lucide-react"
import { cn } from "@/lib/utils"

interface PreviewProps {
  onComplete: () => void
}

export function Preview({ onComplete }: PreviewProps) {
  const [agentName, setAgentName] = useState("")
  const [welcomeMessage, setWelcomeMessage] = useState("")
  const [background, setBackground] = useState("light")

  const handleBackgroundChange = useCallback((bg: string) => {
    setBackground(bg)
  }, [])

  return (
    <div className="grid grid-cols-2 gap-6">
      <Card className="p-6">
        <h3 className="text-lg font-medium mb-6">Agent Settings</h3>
        <div className="space-y-6">
          <div>
            <Label>Agent Icon</Label>
            <div className="mt-2 border-2 border-dashed rounded-lg p-4 text-center">
              <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
              <p className="text-xs text-gray-500">Upload your agent icon</p>
            </div>
          </div>

          <div>
            <Label>Agent Name</Label>
            <Input
              className="mt-2"
              placeholder="Enter agent name"
              value={agentName}
              onChange={(e) => setAgentName(e.target.value)}
            />
          </div>

          <div>
            <Label>Background</Label>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {["light", "dark", "gradient"].map((bg) => (
                <Button
                  key={bg}
                  variant={background === bg ? "default" : "outline"}
                  className="capitalize"
                  onClick={() => handleBackgroundChange(bg)}
                >
                  {bg}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <Label>Welcome Message</Label>
            <Textarea
              className="mt-2"
              placeholder="Enter welcome message"
              value={welcomeMessage}
              onChange={(e) => setWelcomeMessage(e.target.value)}
            />
          </div>

          <Button
            className="w-full bg-green-500 hover:bg-green-600 text-white"
            onClick={onComplete}
          >
            Save Settings
          </Button>
        </div>
      </Card>

      <Card className={cn(
        "p-6",
        background === "dark" && "bg-gray-900 text-white",
        background === "gradient" && "bg-gradient-to-br from-blue-500 to-purple-600 text-white"
      )}>
        <div className="h-full flex flex-col">
          <div className="flex items-center gap-2 p-4 border-b">
            <div className="w-8 h-8 rounded-full bg-gray-200" />
            <span className="font-medium">{agentName || "Your Agent"}</span>
          </div>
          <div className="flex-1 p-4">
            <div className="inline-block bg-blue-500 text-white rounded-lg px-4 py-2 max-w-[80%]">
              {welcomeMessage || "Welcome! How can I help you today?"}
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}