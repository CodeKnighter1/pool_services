import { Button } from '@/components/ui/button'
import { ArrowRight, Award, Users, Wrench } from 'lucide-react'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToGallery = () => {
    const element = document.getElementById('gallery')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/261105/pexels-photo-261105.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Dive Into Your
          <span className="text-sky-400 block">Dream Pool</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Transform your backyard into a stunning oasis with custom pool design, 
          professional installation, and expert maintenance services.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="bg-sky-600 hover:bg-sky-700 text-lg px-8 py-6"
          >
            Get Free Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={scrollToGallery}
            className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6"
          >
            View Gallery
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Award className="h-12 w-12 text-sky-400" />
            </div>
            <div className="text-3xl font-bold mb-2">15+</div>
            <div className="text-lg">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Users className="h-12 w-12 text-sky-400" />
            </div>
            <div className="text-3xl font-bold mb-2">500+</div>
            <div className="text-lg">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Wrench className="h-12 w-12 text-sky-400" />
            </div>
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-lg">Support Service</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero