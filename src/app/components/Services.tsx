import { Fence, Hammer, Wrench, PaintBucket, Leaf, Home } from 'lucide-react';
import privacyFencingImage from '../../assets/46f09c304d2df8e90d7f5750cb6282d707653800.png';
import yardMaintenanceImage from '../../assets/b3415399c05c9feb700b4e81ed5dc7980c9ebf90.png';

const services = [
  { icon: Fence, title: 'Privacy Fencing', description: 'Firesmart metal fences/partitions custom built to your preferences', image: privacyFencingImage },
  { icon: Leaf, title: 'Yard Maintenance and Retaining Walls', description: 'Keep your outdoor spaces pristine with our comprehensive yard care services.', image: yardMaintenanceImage },
  { icon: PaintBucket, title: 'Painting and Dry Wall Services', description: 'Dry wall repairs and interior/exterior painting to refresh and protect your home.' },
  { icon: Hammer, title: 'General Repairs', description: 'From minor fixes to major repairs, we handle all your home maintenance needs.' },
  { icon: Wrench, title: 'Deck and Patio Work', description: 'Build, repair, and maintain beautiful outdoor living spaces for your enjoyment.' },
  { icon: Home, title: 'Property Upkeep', description: 'Regular maintenance packages to keep your property in top condition year-round.' },
];

export function Services() {
  return (
    <section id="services" style={{padding:'5rem 1rem', background:'#f9fafb'}}>
      <div style={{maxWidth:'80rem', margin:'0 auto'}}>
        <div style={{textAlign:'center', marginBottom:'4rem'}}>
          <h2 style={{fontSize:'3rem', fontWeight:'700', marginBottom:'1rem'}}>Our Services</h2>
          <p style={{fontSize:'1.25rem', color:'#4b5563', maxWidth:'42rem', margin:'0 auto'}}>
            Comprehensive solutions for all your fencing and home maintenance needs
          </p>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:'2rem'}}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} style={{background:'white', borderRadius:'0.5rem', overflow:'hidden', boxShadow:'0 4px 6px rgba(0,0,0,0.1)'}}>
                {service.image && (
                  <div style={{height:'12rem', overflow:'hidden'}}>
                    <img src={service.image} alt={service.title} style={{width:'100%', height:'100%', objectFit:'cover'}} />
                  </div>
                )}
                <div style={{padding:'1.5rem'}}>
                  <div style={{width:'3rem', height:'3rem', background:'#dcfce7', borderRadius:'0.5rem', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'1rem'}}>
                    <Icon size={24} color="#16a34a" />
                  </div>
                  <h3 style={{fontSize:'1.25rem', fontWeight:'600', marginBottom:'0.5rem'}}>{service.title}</h3>
                  <p style={{color:'#4b5563'}}>{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
