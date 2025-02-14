"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  FileText,
  Table,
  FormInput,
  Layout,
  Calendar,
  Plus,
  ArrowUpRight,
  Sparkles,
} from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Blank Page", href: "/blank", icon: FileText },
  { name: "Tables", href: "/tables", icon: Table },
  { name: "Forms", href: "/forms", icon: FormInput },
  { name: "Tabbed Content", href: "/tabbed", icon: Layout },
  { name: "Calendar", href: "/calendar", icon: Calendar },
]

export function Sidebar() {
  return (
    <div className="flex h-screen w-64 flex-col fixed left-0 top-0 bg-black border-r border-yellow-500/20 text-white">
      <div className="p-6">
        <div className="flex items-center gap-2 text-xl font-semibold">
          <Sparkles className="h-6 w-6 text-yellow-500" />
          <span>Build with AI</span>
        </div>
        <Button variant="outline" className="mt-4 w-full border-yellow-500/50 hover:bg-yellow-500/10 text-yellow-500">
          <Plus className="mr-2 h-4 w-4" /> New Report
        </Button>
      </div>

      <nav className="flex-1 space-y-1 px-3">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-yellow-500/10 text-gray-300 hover:text-yellow-500"
          >
            <item.icon className="h-5 w-5" />
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="p-4 mt-auto">
        <Button variant="outline" className="w-full border-yellow-500/50 hover:bg-yellow-500/10 text-yellow-500">
          <ArrowUpRight className="mr-2 h-4 w-4" /> Upgrade to Pro!
        </Button>
      </div>
    </div>
  )
} 