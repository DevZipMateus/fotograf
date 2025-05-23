
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Image, Printer, Camera, Sticker, ShoppingBag, Shirt, Coffee, Gift, BookOpen } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

  const services = [
    {
      icon: <Printer className="h-8 w-8 text-blue-500" />,
      title: 'Impressão de Fotos',
      description: 'Impressões de alta qualidade em diversos tamanhos e acabamentos para eternizar seus momentos especiais.'
    },
    {
      icon: <Image className="h-8 w-8 text-blue-500" />,
      title: 'Banners',
      description: 'Banners personalizados para eventos, divulgação comercial e decoração, em diferentes materiais e tamanhos.'
    },
    {
      icon: <Sticker className="h-8 w-8 text-blue-500" />,
      title: 'Adesivos',
      description: 'Adesivos personalizados para diversas finalidades, desde rótulos até decoração, em vinil de alta durabilidade.'
    },
    {
      icon: <Coffee className="h-8 w-8 text-blue-500" />,
      title: 'Canecas Personalizadas',
      description: 'Canecas de cerâmica, polímero e mágicas com sua foto, arte ou logotipo para presentes e lembranças.'
    },
    {
      icon: <Shirt className="h-8 w-8 text-blue-500" />,
      title: 'Camisetas',
      description: 'Camisetas personalizadas para eventos, empresas ou presentes especiais com estampas digitais de alta definição.'
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-500" />,
      title: 'Cartões e Tags',
      description: 'Cartões de visita, convites, tags e materiais impressos para sua comunicação visual com acabamento profissional.'
    },
    {
      icon: <ShoppingBag className="h-8 w-8 text-blue-500" />,
      title: 'Copos Térmicos',
      description: 'Copos térmicos personalizados para manter suas bebidas na temperatura ideal, perfeitos para uso diário ou presentes.'
    },
    {
      icon: <Gift className="h-8 w-8 text-blue-500" />,
      title: 'Itens Personalizados',
      description: 'Diversos itens personalizáveis como chaveiros, agendas, embalagens e produtos promocionais para sua marca.'
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="bg-slate-50 py-16">
      <div className="section-container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16" 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
            Nossos Produtos
          </div>
          <h2 className="section-title">Soluções Personalizadas</h2>
          <p className="section-subtitle">
            Transformamos suas ideias em produtos únicos que unem criatividade, qualidade e identidade.
            Confira nosso portfólio de produtos personalizados.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-subtle card-hover" 
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
            >
              <div className="mb-4 bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-slate-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center" 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <a href="#contact" className="btn-primary">
            Solicite um Orçamento
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
