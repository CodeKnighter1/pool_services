import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Hammer, 
  Droplets, 
  Wrench, 
  Sparkles, 
  Thermometer, 
  ShieldCheck 
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Hammer className="h-12 w-12 text-sky-600" />,
      title: "Pool Construction",
      description: "Custom pool design and construction tailored to your space and vision.",
      features: ["Custom Design", "Excavation", "Plumbing & Electrical", "Finishing"]
    },
    {
      icon: <Droplets className="h-12 w-12 text-sky-600" />,
      title: "Pool Cleaning",
      description: "Professional cleaning services to keep your pool crystal clear.",
      features: ["Weekly Cleaning", "Chemical Balancing", "Filter Maintenance", "Skimming & Vacuuming"]
    },
    {
      icon: <Wrench className="h-12 w-12 text-sky-600" />,
      title: "Maintenance & Repair",
      description: "Complete maintenance and repair services for all pool equipment.",
      features: ["Equipment Repair", "Pump Maintenance", "Leak Detection", "Tile Repair"]
    },
    {
      icon: <Sparkles className="h-12 w-12 text-sky-600" />,
      title: "Pool Renovation",
      description: "Transform your existing pool with modern upgrades and renovations.",
      features: ["Resurfacing", "Tile Replacement", "Equipment Upgrade", "Deck Renovation"]
    },
    {
      icon: <Thermometer className="h-12 w-12 text-sky-600" />,
      title: "Heating Systems",
      description: "Installation and maintenance of pool heating systems for year-round comfort.",
      features: ["Gas Heaters", "Heat Pumps", "Solar Heating", "System Maintenance"]
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-sky-600" />,
      title: "Safety Features",
      description: "Pool safety installations to protect your family and comply with regulations.",
      features: ["Safety Covers", "Pool Fencing", "Alarms", "Non-slip Surfaces"]
    }
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Pool Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial design to ongoing maintenance, we provide comprehensive pool services 
            to ensure your aquatic paradise remains perfect year-round.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-lg">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-sky-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-sky-600 hover:bg-sky-700"
                >
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services