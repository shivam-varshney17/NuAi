"use client"

import Link from "next/link";
import { Brain } from "lucide-react";

export function Navigation() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Brain className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-bold text-blue-600 ml-2">Nuton</span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link href="/product" className="text-gray-700 hover:text-blue-600">Product</Link>
          <Link href="/solutions" className="text-gray-700 hover:text-blue-600">Solutions</Link>
          <Link href="/resources" className="text-gray-700 hover:text-blue-600">Resources</Link>
          <Link href="/company" className="text-gray-700 hover:text-blue-600">Company</Link>
          <Link href="/enterprise" className="text-gray-700 hover:text-blue-600">Enterprise</Link>
          <Link href="/pricing" className="text-gray-700 hover:text-blue-600">Pricing</Link>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex space-x-4">
          <Link href="/dashboard" className="text-gray-700 hover:text-blue-600">Get a demo</Link>
          <Link href="/auth/login" className="text-gray-700 hover:text-blue-600">Login</Link>
          <Link href="/auth/signup" className="bg-black text-white px-3 py-1 rounded flex items-center hover:bg-gray-800">
            <span>Sign up</span>
            <svg className="h-4 w-4 ml-1" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 2l-1.41 1.41L16.17 8H3v2h13.17l-5.58 5.59L12 22l10-10L12 2z" />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
}