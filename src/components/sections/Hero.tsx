import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setIsVisible(true);
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden" id="home" style={{
    backgroundImage: `url('/lovable-uploads/852b96e2-1744-458b-809a-7808581e4a19.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}>
      <div className="absolute inset-0 z-0 bg-black/10"></div>

      
    </section>;
};
export default Hero;