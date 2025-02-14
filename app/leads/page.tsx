"use client"

import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Filter, ArrowUpDown, Download } from "lucide-react"
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table"

interface Lead {
  name: string
  company: string
  email: string
  status: "Qualified" | "In Progress" | "New"
  messages: number
  chatTime: string
  score: number
  lastContact: string
}

const leads: Lead[] = [
  {
    name: "John Smith",
    company: "Tech Corp",
    email: "john@techcorp.com",
    status: "Qualified",
    messages: 24,
    chatTime: "45:20",
    score: 85,
    lastContact: "2024-01-28",
  },
  {
    name: "Sarah Johnson",
    company: "Data Systems",
    email: "sarah@datasys.com",
    status: "In Progress",
    messages: 15,
    chatTime: "28:15",
    score: 72,
    lastContact: "2024-01-27",
  },
  // Add other leads...
]

export default function LeadsPage() {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex h-[calc(100vh-3.5rem)]">
        <div className="w-64 flex-none">
          <Sidebar />
        </div>
        <main className="flex-1 overflow-y-auto bg-gray-50/50 p-6">
          <div className="max-w-[1400px] mx-auto space-y-4">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-semibold">Leads</h1>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                  <Input 
                    className="pl-8 w-[300px]" 
                    placeholder="Search leads..." 
                  />
                </div>
                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg border shadow-sm">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">
                      <Button variant="ghost" className="p-0 h-8 font-semibold">
                        Name
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </Button>
                    </TableHead>
                    <TableHead>
                      <Button variant="ghost" className="p-0 h-8 font-semibold">
                        Company
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </Button>
                    </TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Messages</TableHead>
                    <TableHead>Chat Time</TableHead>
                    <TableHead>Score</TableHead>
                    <TableHead>
                      <Button variant="ghost" className="p-0 h-8 font-semibold">
                        Last Contact
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </Button>
                    </TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leads.map((lead) => (
                    <TableRow key={lead.email}>
                      <TableCell className="font-medium">{lead.name}</TableCell>
                      <TableCell>{lead.company}</TableCell>
                      <TableCell>{lead.email}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          lead.status === "Qualified" ? "bg-green-100 text-green-700" :
                          lead.status === "In Progress" ? "bg-blue-100 text-blue-700" :
                          "bg-gray-100 text-gray-700"
                        }`}>
                          {lead.status}
                        </span>
                      </TableCell>
                      <TableCell>{lead.messages}</TableCell>
                      <TableCell>{lead.chatTime}</TableCell>
                      <TableCell>
                        <span className={`font-medium ${
                          lead.score >= 80 ? "text-green-600" :
                          lead.score >= 70 ? "text-yellow-600" :
                          "text-gray-600"
                        }`}>
                          {lead.score}
                        </span>
                      </TableCell>
                      <TableCell>{lead.lastContact}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Chat
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}