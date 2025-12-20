import { Card } from "@/components/ui/card"
import { Smartphone, Clock, Heart } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Browse & Select",
      description: "Browse verified professionals in your area and select your perfect match",
      icon: Smartphone,
    },
    {
      number: "02",
      title: "Book Instantly",
      description: "Choose your time and location, then book with just a few taps",
      icon: Clock,
    },
    {
      number: "03",
      title: "Enjoy",
      description: "Meet your companion and enjoy an unforgettable experience",
      icon: Heart,
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How WhoreDash Works</h2>
          <p className="text-lg text-gray-600">Simple, secure and seamless booking experience</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <Card key={index} className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="text-5xl font-bold text-gray-200 mb-4">{step.number}</div>
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
