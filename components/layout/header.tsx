"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Brain } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="border-b flex justify-between items-center px-4 h-14">
      <div className="flex items-center gap-2">
        <Brain className="h-8 w-8" />
        <Link href="/" className="text-2xl font-semibold">Nuton</Link>
      </div>
      
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm">My Dash</Button>
        <Avatar className="h-8 w-8">
          <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces" />
          <AvatarFallback>UN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
