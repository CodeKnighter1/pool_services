import { Waves, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Waves className="h-8 w-8 text-sky-400" />
              <span className="text-2xl font-bold">AquaLux Pools</span>
            </div>
            <p className="text-gray-300 mb-6">
              Creating stunning aquatic retreats with professional pool design, 
              construction, and maintenance services for over 15 years.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-sky-400 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-sky-400 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-sky-400 cursor-pointer transition-colors" />
              <Youtube className="h-6 w-6 text-gray-400 hover:text-sky-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-sky-400 transition-colors">Pool Construction</a></li>
              <li><a href="#" className="text-gray-300 hover:text-sky-400 transition-colors">Pool Renovation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-sky-400 transition-colors">Pool Maintenance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-sky-400 transition-colors">Pool Cleaning</a></li>
              <li><a href="#" className="text-gray-300 hover:text-sky-400 transition-colors">Heating Systems</a></li>
              <li><a href="#" className="text-gray-300 hover:text-sky-400 transition-colors">Safety Features</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><button onClick={scrollToTop} className="text-gray-300 hover:text-sky-400 transition-colors">Home</button></li>
              <li><a href="#services" className="text-gray-300 hover:text-sky-400 transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-sky-400 transition-colors">Gallery</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-sky-400 transition-colors">About</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-sky-400 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-sky-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-3">
              <div>
                <div className="font-semibold">Phone</div>
                <div className="text-gray-300">(998) 91 112 11 11</div>
              </div>
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-gray-300">info@aqualuxpools.com</div>
              </div>
              <div>
                <div className="font-semibold">Address</div>
                <div className="text-gray-300">
                  123 Pool Lane<br />
                  Los Angeles, CA 90210
                </div>
              </div>
              <div>
                <div className="font-semibold">Business Hours</div>
                <div className="text-gray-300">
                  Mon-Fri: 8am-6pm<br />
                  Sat: 9am-4pm
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 AquaLux Pools. All rights reserved. | 
            <span className="hover:text-sky-400 cursor-pointer"> Privacy Policy</span> | 
            <span className="hover:text-sky-400 cursor-pointer"> Terms of Service</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer