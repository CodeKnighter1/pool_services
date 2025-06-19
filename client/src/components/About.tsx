import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, Users, Award, Clock } from 'lucide-react'

const About = () => {
  const features = [
    "Licensed and Insured",
    "Quality Materials Only",
    "Expert Craftsmanship",
    "Customer Satisfaction Guarantee",
    "Eco-Friendly Options",
    "Competitive Pricing"
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About AquaLux Pools
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              With over 15 years of experience in the pool industry, AquaLux Pools has been 
              transforming backyards across the region into stunning aquatic retreats. Our team 
              of certified professionals combines technical expertise with creative vision to 
              deliver exceptional results.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              From initial consultation to final installation and ongoing maintenance, we're 
              committed to providing unparalleled service and creating pools that exceed your 
              expectations.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-sky-600 hover:bg-sky-700"
            >
              Start Your Project
            </Button>
          </div>

          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Professional Pool Installation"
              className="rounded-lg shadow-2xl"
            />
            
            {/* Floating Stats Cards */}
            <Card className="absolute -bottom-6 -left-6 bg-white shadow-lg">
              <CardContent className="p-4 text-center">
                <Users className="h-8 w-8 text-sky-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">500+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </CardContent>
            </Card>

            <Card className="absolute -top-6 -right-6 bg-white shadow-lg">
              <CardContent className="p-4 text-center">
                <Award className="h-8 w-8 text-sky-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">12+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </CardContent>
            </Card>

            <Card className="absolute top-1/2 -right-8 bg-white shadow-lg">
              <CardContent className="p-4 text-center">
                <Clock className="h-8 w-8 text-sky-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About