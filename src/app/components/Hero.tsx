import { Phone } from 'lucide-react';
import heroBackground from '../../assets/fbe01419d2a7294393bac42aa981fd186648b198.png';
import logoImage from '../../assets/7cdd209acd490c1e731d651d1a4954aef1fadce2.png';

export function Hero() {
  return (
    <div style={{position:'relative', height:'100vh', minHeight:'600px'}}>
      <div style={{position:'absolute', inset:0}}>
        <img src={heroBackground} alt="hero" style={{width:'100%', height:'100%', objectFit:'cover'}} />
        <div style={{position:'absolute', inset:0, background:'rgba(0,0,0,0.5)'}}></div>
      </div>
      <div style={{position:'relative', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', padding:'0 1rem'}}>
        <div style={{textAlign:'center', color:'white', maxWidth:'56rem'}}>
          <img src={logoImage} alt="We Can Do" style={{width:'240px', margin:'0 auto 1.5rem'}} />
          <p style={{fontSize:'1.25rem', marginBottom:'2rem', color:'#e5e7eb'}}>
            Professional privacy fencing installation and comprehensive home maintenance services
          </p>
          <div style={{display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap'}}>
            <a href="#contact" style={{background:'#16a34a', color:'white', padding:'1rem 2rem', borderRadius:'0.5rem', display:'inline-flex', alignItems:'center', gap:'0.5rem', textDecoration:'none'}}>
              <Phone size={20} />
              Get a Free Quote
            </a>
            <a href="#services" style={{background:'rgba(255,255,255,0.1)', color:'white', padding:'1rem 2rem', borderRadius:'0.5rem', border:'1px solid rgba(255,255,255,0.3)', textDecoration:'none'}}>
              Our Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
