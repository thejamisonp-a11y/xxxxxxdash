"use client"

import { Card } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { ChevronRight } from "lucide-react"

export function CategoryBrowse() {
  const router = useRouter()

  const categories = [
    { name: "Dinner & Dating", count: "450+" },
    { name: "Fine Dining", count: "320+" },
    { name: "Car Companions", count: "180+" },
    { name: "Wellness", count: "290+" },
    { name: "Adventure", count: "210+" },
    { name: "Entertainment", count: "380+" },
    { name: "Events", count: "260+" },
    { name: "Conversation", count: "440+" },
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse by Category</h2>
          <p className="text-lg text-gray-600">Find the perfect companion for any occasion</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="p-6 border-0 shadow-md hover:shadow-lg transition-all hover:scale-105 cursor-pointer"
              onClick={() => router.push("/browse")}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg mb-1">{category.name}</h3>
                  <p className="text-sm text-primary font-semibold">{category.count} companions</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
