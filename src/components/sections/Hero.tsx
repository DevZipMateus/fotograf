
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

  return (
    <section 
      ref={sectionRef} 
      className="hero-background relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-16 md:pt-20" 
      id="home"
    >
      <div className="absolute inset-0 z-0 bg-black/20"></div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto py-20 sm:py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 sm:mb-8"
        >
          
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-16 sm:mb-20 w-full max-w-md sm:max-w-none py-[20px]"
        >
          <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg text-center text-sm sm:text-base">
            Solicitar Orçamento
          </a>
          <a href="#services" className="bg-white/90 border border-orange-200 hover:border-orange-300 text-amber-800 px-4 sm:px-6 py-3 rounded-lg font-medium shadow-lg transition-all duration-200 backdrop-blur-sm text-center text-sm sm:text-base">
            Conheça Nossos Produtos
          </a>
        </motion.div>

        {/* Scroll indicator - hidden on mobile */}
        <motion.div 
          className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex-col items-center hidden sm:flex"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="w-6 h-10 border-2 border-amber-700 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-3 bg-amber-700 rounded-full animate-bounce"></div>
          </div>
          <span className="text-xs sm:text-sm text-amber-700 mt-2 drop-shadow-sm">Role para baixo</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
