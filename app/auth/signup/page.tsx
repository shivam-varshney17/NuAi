"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Brain } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SignUpPage() {
  const [email, setEmail] = useState("")
  const [fullName, setFullName] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      // Call your signup API here
      setTimeout(() => {
        router.push('/auth/login')
      }, 2000)
    } catch (err) {
      setError('Failed to sign up')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFFFF] via-[#FFCBA4] via-[#FFB07C] to-[#FF8C42] animate-gradient-slow flex flex-col items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl">
        <div className="flex items-center justify-center mb-4">
          <Brain className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-bold text-blue-600 ml-2">Nuton AI</span>
        </div>
        <h1 className="text-2xl font-bold text-center mb-2">Welcome to Nuton!</h1>
        <p className="text-center mb-6 text-gray-600">Sign up to turn any growth idea into reality — in minutes.</p>

        <Button className="w-full mb-4 bg-white text-gray-800 flex items-center justify-center border border-gray-300 hover:bg-gray-50" onClick={() => {/* Add Google OAuth logic */}}>
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          Sign up with Google
        </Button>

        <div className="relative flex items-center justify-center mb-4">
          <div className="border-t border-gray-300 w-full"></div>
          <span className="bg-white/80 px-4 text-sm text-gray-500">OR</span>
          <div className="border-t border-gray-300 w-full"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Full name"
            className="w-full h-12 rounded-lg border-gray-200"
          />
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
            placeholder="Create a password"
            className="w-full h-12 rounded-lg border-gray-200"
          />
          <Button
            type="submit"
            className="w-full h-12 bg-blue-600 text-white rounded-lg"
            disabled={loading}
          >
            {loading ? 'Creating account...' : 'Continue'}
          </Button>
        </form>

        <p className="text-center mt-4">
          Already have an account? <Link href="/auth/login" className="text-blue-600">Log in</Link>
        </p>
        <p className="text-center text-sm text-gray-500 mt-2">
          By signing up for a Nuton AI account, you agree to our <Link href="/privacy" className="text-blue-600">Privacy Policy</Link> and <Link href="/terms" className="text-blue-600">Terms of Service</Link>.
        </p>
      </div>
    </div>
  )
}