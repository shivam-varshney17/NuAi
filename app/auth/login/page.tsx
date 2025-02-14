"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Call your login API here
      setTimeout(() => {
        // Simulate successful login
        console.log("Logged in")
      }, 2000)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFFFF] via-[#FFCBA4] via-[#FFB07C] to-[#FF8C42] flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center">Welcome Back!</h1>
        <p className="text-center mb-4">Sign in to your account.</p>

        <div className="flex flex-col space-y-4">
          <Button className="w-full flex items-center justify-center bg-red-500 text-white" onClick={() => {/* Add Google OAuth logic */}}>
            Sign in with Google
          </Button>

          <Button className="w-full flex items-center justify-center bg-gray-800 text-white" onClick={() => {/* Add GitHub OAuth logic */}}>
            Sign in with GitHub
          </Button>
        </div>

        <div className="text-center mb-4">OR</div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="w-full h-12 rounded-lg border-gray-200"
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full h-12 rounded-lg border-gray-200"
          />
          <Button
            type="submit"
            className="w-full h-12 bg-blue-600 text-white rounded-lg"
            disabled={loading}
          >
            {loading ? 'Signing in...' : 'Log in'}
          </Button>
        </form>

        <p className="text-center mt-4">
          Don't have an account? <Link href="/auth/signup" className="text-blue-600">Sign up</Link>
        </p>
      </div>
    </div>
  )
}