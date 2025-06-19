import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Star } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Beverly Hills, CA",
      rating: 5,
      content: "AquaLux Pools transformed our backyard into a paradise! The attention to detail and professionalism throughout the entire process was outstanding. Our infinity pool is exactly what we dreamed of.",
      initials: "SJ"
    },
    {
      name: "Michael Chen",
      location: "Malibu, CA",
      rating: 5,
      content: "From design to completion, the team exceeded our expectations. The quality of work is exceptional, and the ongoing maintenance service keeps our pool in perfect condition year-round.",
      initials: "MC"
    },
    {
      name: "Emily Rodriguez",
      location: "Newport Beach, CA",
      rating: 5,
      content: "We've been using AquaLux for pool maintenance for 3 years now. They're reliable, professional, and always ensure our pool is crystal clear. Highly recommend their services!",
      initials: "ER"
    },
    {
      name: "David Thompson",
      location: "Laguna Beach, CA",
      rating: 5,
      content: "The renovation of our old pool was incredible. AquaLux modernized everything - new tiles, updated equipment, and beautiful lighting. It feels like we have a brand new pool!",
      initials: "DT"
    },
    {
      name: "Lisa Park",
      location: "Manhattan Beach, CA",
      rating: 5,
      content: "Outstanding customer service and craftsmanship. The team was punctual, clean, and communicative throughout the project. Our family loves spending time in our new pool!",
      initials: "LP"
    },
    {
      name: "Robert Martinez",
      location: "Redondo Beach, CA",
      rating: 5,
      content: "AquaLux delivered on every promise. The pool design perfectly fits our space and lifestyle. The installation was completed on time and within budget. Couldn't be happier!",
      initials: "RM"
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about their experience with AquaLux Pools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarFallback className="bg-sky-100 text-sky-600 font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials