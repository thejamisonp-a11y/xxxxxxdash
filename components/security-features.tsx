import { Card } from "@/components/ui/card"
import { Shield, Star, CheckCircle2, Headphones } from "lucide-react"

export function SecurityFeatures() {
  const features = [
    {
      icon: Shield,
      title: "SSL Encrypted",
      description: "Bank-level encryption for all transactions",
    },
    {
      icon: Star,
      title: "4.9/5 Rating",
      description: "Highest customer satisfaction guaranteed",
    },
    {
      icon: CheckCircle2,
      title: "Background Verified",
      description: "All professionals thoroughly vetted",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Always here to help when you need us",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise-Grade Security</h2>
          <p className="text-lg text-gray-600">Built with trust and transparency</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="p-6 border-0 shadow-md hover:shadow-lg transition-shadow text-center">
                <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
