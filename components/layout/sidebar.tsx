"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Database, Users, BarChart3 } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const routes = [
  {
    label: "Data Hub",
    icon: Database,
    href: "/dashboard",
  },
  {
    label: "Lead Base",
    icon: Users,
    href: "/leads",
  },
  {
    label: "Analytics",
    icon: BarChart3,
    href: "/analytics",
  },
  {
    label: "Usage & Billing",
    icon: Database,
    href: "/usage",
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="h-full bg-[#1C2A1E] text-white shadow-xl z-10 relative">
      <div className="p-6">
        {/* Removed Nuton title */}
      </div>
      <div className="px-3 py-2 flex-1">
        <div className="space-y-4"> {/* Changed space-y-1 to space-y-4 for more spacing */}
          {routes.map((route) => (
            <Button
              key={route.href}
              asChild
              variant={pathname === route.href ? "default" : "ghost"}
              className={cn(
                "w-full justify-start",
                pathname === route.href 
                  ? "bg-white/10 text-white hover:bg-white/20" 
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              )}
              size="sm"
            >
              <Link href={route.href}>
                <route.icon className="h-4 w-4 mr-2" />
                {route.label}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}