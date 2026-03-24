import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600">
            Ready to start your project? Contact us for a free quote
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl mb-1">Phone</h3>
                <a href="tel:2505057916" className="text-gray-600 hover:text-green-600 transition-colors">
                  (250) 505-7916
                </a>
                <p className="text-sm text-gray-500 mt-1">Call us for immediate assistance</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl mb-1">Email</h3>
                <p className="text-gray-600">wecandomaintenance@gmail.com</p>
                <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl mb-1">Nelson, BC and Area</h3>
                <p className="text-gray-600">Nelson Area</p>
                <p className="text-sm text-gray-500 mt-1">Serving all surrounding communities</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl mb-1">Business Hours</h3>
                <p className="text-gray-600">Monday - Friday: 7:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Saturday: 8:00 AM - 4:00 PM</p>
                <p className="text-sm text-gray-500 mt-1">Sunday: 8:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl mb-6">Request a Quote</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm mb-2 text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm mb-2 text-gray-700">
                  Service Needed
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                >
                  <option>Select a service</option>
                  <option>Privacy Fencing</option>
                  <option>General Repairs</option>
                  <option>Painting Services</option>
                  <option>Yard Maintenance</option>
                  <option>Deck & Patio Work</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-gray-700">
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}