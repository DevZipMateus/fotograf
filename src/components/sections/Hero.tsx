
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

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
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden"
      id="home"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-white/95"></div>
        <div className="absolute inset-0 opacity-40 bg-[url('/images/pattern.svg')] bg-repeat"></div>
      </div>

      <div className="section-container relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <img 
            src="/lovable-uploads/0d5cafbe-0356-46e7-a3e9-c0b30ef71569.png" 
            alt="Fotograf Comunicação Visual Logo" 
            className="h-32 md:h-40 mx-auto"
          />
        </motion.div>

        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight mb-6 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Transformamos ideias em{' '}
          <span className="text-gradient">produtos únicos</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-slate-600 max-w-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Especialistas na criação de itens personalizados que unem criatividade, qualidade e identidade.
          Desde presentes especiais até brindes corporativos, oferecemos soluções feitas sob medida.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a href="#contact" className="btn-primary">
            Solicitar Orçamento
          </a>
          <a href="#services" className="btn-secondary">
            Conheça Nossos Produtos
          </a>
        </motion.div>

        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-3 bg-slate-400 rounded-full animate-bounce"></div>
          </div>
          <span className="text-sm text-slate-500 mt-2">Role para baixo</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
