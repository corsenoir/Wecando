import { Award, Clock, Users } from 'lucide-react';
import aboutImage from '../../assets/cdac786251e43e7e353a3ee7bd28fef184137f8b.png';

const features = [
  {
    icon: Award,
    title: 'Rigorous attention to detail',
    description: 'Every project is completed to the highest standards with attention to detail.',
  },
  {
    icon: Clock,
    title: 'Reliable Service',
    description: 'We respect your time and complete projects on schedule and within budget.',
  },
  {
    icon: Users,
    title: 'Local Experience',
    description: 'Bringing years of local expertise to every job.',
  },
];

export function About() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl mb-6">Why Choose Us</h2>
            <p className="text-xl text-gray-600 mb-6">
              With years of local experience, we've built a reputation for excellence in privacy fencing and general home maintenance across the community.
            </p>
            <p className="text-gray-600 mb-6">
              We take pride in transforming properties with durable, beautiful fences and providing comprehensive maintenance services that keep your home in pristine condition. Our commitment to quality workmanship and customer satisfaction sets us apart.
            </p>
            <p className="text-gray-600">
              From initial consultation to project completion, we work closely with you to ensure your vision becomes reality.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src={aboutImage}
              alt="Professional tools"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}