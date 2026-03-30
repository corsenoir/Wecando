import { Award, Clock, Users } from 'lucide-react';
import aboutImage from '../../assets/cdac786251e43e7e353a3ee7bd28fef184137f8b.png';

const features = [
  { icon: Award, title: 'Rigorous attention to detail', description: 'Every project is completed to the highest standards with attention to detail.' },
  { icon: Clock, title: 'Reliable Service', description: 'We respect your time and complete projects on schedule and within budget.' },
  { icon: Users, title: 'Local Experience', description: 'Bringing years of local expertise to every job.' },
];

export function About() {
  return (
    <section style={{padding:'5rem 1rem', background:'white'}}>
      <div style={{maxWidth:'80rem', margin:'0 auto'}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'3rem', alignItems:'center', marginBottom:'5rem'}}>
          <div>
            <h2 style={{fontSize:'3rem', fontWeight:'700', marginBottom:'1.5rem'}}>Why Choose Us</h2>
            <p style={{fontSize:'1.25rem', color:'#4b5563', marginBottom:'1.5rem'}}>
              With years of local experience, we have built a reputation for excellence in privacy fencing and general home maintenance across the community.
            </p>
            <p style={{color:'#4b5563', marginBottom:'1.5rem'}}>
              We take pride in transforming properties with durable, beautiful fences and providing comprehensive maintenance services that keep your home in pristine condition.
            </p>
            <p style={{color:'#4b5563'}}>
              From initial consultation to project completion, we work closely with you to ensure your vision becomes reality.
            </p>
          </div>
          <div style={{borderRadius:'0.5rem', overflow:'hidden', boxShadow:'0 20px 25px rgba(0,0,0,0.15)'}}>
            <img src={aboutImage} alt="Professional work" style={{width:'100%', height:'100%', objectFit:'cover'}} />
          </div>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'2rem'}}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} style={{textAlign:'center'}}>
                <div style={{width:'4rem', height:'4rem', background:'#dcfce7', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 1rem'}}>
                  <Icon size={32} color="#16a34a" />
                </div>
                <h3 style={{fontSize:'1.25rem', fontWeight:'600', marginBottom:'0.5rem'}}>{feature.title}</h3>
                <p style={{color:'#4b5563'}}>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
