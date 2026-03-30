import { Fence, Hammer, Wrench, PaintBucket, Leaf, Home } from 'lucide-react';
import privacyFencingImage from '../../assets/46f09c304d2df8e90d7f5750cb6282d707653800.png';
import yardMaintenanceImage from '../../assets/b3415399c05c9feb700b4e81ed5dc7980c9ebf90.png';

const services = [
  {
    icon: Fence,
    title: 'Privacy Fencing',
    description: 'Firesmart metal fences/partitions custom built to your preferences',
    image: privacyFencingImage,
  },
  {
    icon: Leaf,
    title: 'Yard Maintenance and Retaining walls',
    description: 'Keep your outdoor spaces pristine with our comprehensive yard care services.',
    image: yardMaintenanceImage,
  },
  {
    icon: PaintBucket,
    title: 'Painting and Dry Wall Services',
    description: 'Dry Wall repairs and Interior/exterior painting and to refresh and protect your home\'s surfaces.',
  },
  {
    icon: Hammer,
    title: 'General Repairs',
    description: 'From minor fixes to major repairs, we handle all your home maintenance needs with expertise.',
  },
  {
    icon: Wrench,
    title: 'Deck & Patio Work',
    description: 'Build, repair, and maintain beautiful outdoor living spaces for your enjoyment.',
  },
  {
    icon: Home,
    title: 'Property Upkeep',
    description: 'Regular maintenance packages to keep your property in top condition year-round.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for all your fencing and home maintenance needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                {service.image && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}