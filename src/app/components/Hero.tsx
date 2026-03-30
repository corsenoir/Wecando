import { Phone } from 'lucide-react';
import heroBackground from '../../assets/fbe01419d2a7294393bac42aa981fd186648b198.png';
import logoImage from '../../assets/7cdd209acd490c1e731d651d1a4954aef1fadce2.png';

export function Hero() {
  return (
    <div className="relative h-screen min-h-[600px]">
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt="Modern home exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center px-4">
        <div className="text-center text-white max-w-4xl">
          <img 
            src={logoImage} 
            alt="We Can Do" 
            className="w-full max-w-xs mx-auto mb-6"
          />
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Professional privacy fencing installation and comprehensive home maintenance services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
              href="#contact"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Get a Free Quote
            </a>
            
              href="#services"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg border border-white/30 transition-colors inline-flex items-center justify-center"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}