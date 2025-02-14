"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useState, useEffect } from "react"
import { Upload, X, Play , Plus, History, Shield, Database, FileCode, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

interface DataHubProps {
  onComplete: () => void
}

const steps = [
  {
    title: "Securing the files",
    icon: Shield,
    description: "Encrypting and validating your documents..."
  },
  {
    title: "Preparing embeddings",
    icon: FileCode,
    description: "Converting your content into AI-readable format..."
  },
  {
    title: "Setting up Vector Database",
    icon: Database,
    description: "Organizing your data for quick retrieval..."
  },
  {
    title: "Success, your own RAG is ready!!",
    icon: CheckCircle2,
    description: "Your AI is ready to assist!"
  }
]

export function DataHub({ onComplete }: DataHubProps) {
  const [urls, setUrls] = useState<string[]>([])
  const [newUrl, setNewUrl] = useState("")
  const [files, setFiles] = useState<File[]>([])
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isTraining, setIsTraining] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (isTraining) {
      const stepDuration = 15000 / steps.length // Total 15 seconds divided by number of steps
      
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval)
            return 100
          }
          return prev + 1
        })
      }, 15000 / 100) // Update progress 100 times over 15 seconds

      const stepInterval = setInterval(() => {
        setCurrentStep(prev => {
          if (prev >= steps.length - 1) {
            clearInterval(stepInterval)
            setTimeout(() => {
              setIsTraining(false)
              onComplete()
            }, 1000)
            return prev
          }
          return prev + 1
        })
      }, stepDuration)

      return () => {
        clearInterval(progressInterval)
        clearInterval(stepInterval)
      }
    }
  }, [isTraining, onComplete])

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    
    const droppedFiles = Array.from(e.dataTransfer.files)
    setFiles([...files, ...droppedFiles])
  }

  const handleUrlAdd = () => {
    if (newUrl && !urls.includes(newUrl)) {
      setUrls([...urls, newUrl])
      setNewUrl("")
    }
  }

  const handleStartTraining = () => {
    setIsTraining(true)
    setCurrentStep(0)
    setProgress(0)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="space-x-2">
          {isLoading ? (
            <TrainingLoader />
          ) : (
            <Button variant="outline" size="sm">
            <Play className="mr-2 h-4 w-4" />
            Start Training
          </Button>
          )}
          <Button variant="outline" size="sm">
            <History className="mr-2 h-4 w-4" />
            Training History
          </Button>
        </div>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-medium mb-4">Website URLs</h3>
        <div className="flex gap-2 mb-4">
          <Input
            placeholder="Add your website URL to scrape content"
            value={newUrl}
            onChange={(e) => setNewUrl(e.target.value)}
          />
          <Button onClick={handleUrlAdd}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        {urls.length > 0 && (
          <div className="space-y-2">
            {urls.map((url, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                <span className="text-sm truncate">{url}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setUrls(urls.filter((_, i) => i !== index))}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-medium mb-4">Document Upload</h3>
        <div
          className={cn(
            "border-2 border-dashed rounded-lg p-8 text-center",
            isDragging && "border-blue-500 bg-blue-50"
          )}
          onDragOver={(e) => {
            e.preventDefault()
            setIsDragging(true)
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
        >
          <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <p className="text-sm text-gray-600 mb-2">
            Drag and drop your files here, or click to browse
          </p>
          <p className="text-xs text-gray-500">
            Supports PDF, DOC, TXT, XLS
          </p>
        </div>
        {files.length > 0 && (
          <div className="mt-4 space-y-2">
            {files.map((file, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                <span className="text-sm truncate">{file.name}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setFiles(files.filter((_, i) => i !== index))}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Progress value={uploadProgress} className="mt-2" />
          </div>
        )}
      </Card>

      <div className="flex justify-end mt-6">
        <AnimatePresence>
          {isTraining ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl"
              >
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold">Training in Progress</h3>
                    <p className="text-gray-500">Please wait while we set up your AI</p>
                  </div>

                  <Progress value={progress} className="h-2" />
                  
                  <div className="space-y-4">
                    {steps.map((step, index) => {
                      const isActive = index === currentStep
                      const isComplete = index < currentStep
                      const Icon = step.icon

                      return (
                        <motion.div
                          key={index}
                          initial={false}
                          animate={{
                            opacity: isActive || isComplete ? 1 : 0.5,
                          }}
                          className={cn(
                            "flex items-center space-x-4 p-3 rounded-lg transition-colors",
                            isActive && "bg-blue-50"
                          )}
                        >
                          <motion.div
                            initial={false}
                            animate={{
                              scale: isActive ? 1.1 : 1,
                              rotate: isActive ? 360 : 0,
                            }}
                            transition={{ duration: 0.5 }}
                            className={cn(
                              "p-2 rounded-full",
                              isComplete ? "bg-green-100 text-green-600" : 
                              isActive ? "bg-blue-100 text-blue-600" : 
                              "bg-gray-100 text-gray-400"
                            )}
                          >
                            <Icon className="w-6 h-6" />
                          </motion.div>
                          <div className="flex-1">
                            <p className={cn(
                              "font-medium",
                              isComplete && "text-green-600 line-through",
                              isActive && "text-blue-600"
                            )}>
                              {step.title}
                            </p>
                            {isActive && (
                              <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-sm text-gray-500"
                              >
                                {step.description}
                              </motion.p>
                            )}
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <Button
              onClick={handleStartTraining}
              className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white transition-all duration-200 transform hover:scale-105"
            >
              Start Training Now
            </Button>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}