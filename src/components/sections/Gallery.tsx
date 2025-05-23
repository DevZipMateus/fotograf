
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Gallery = () => {
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

  const galleryImages = [
    {
      src: '/lovable-uploads/463dbcba-1d24-4e49-983f-4780a7c2ec71.png',
      alt: 'Copos térmicos personalizados com logos',
      title: 'Copos Térmicos Personalizados'
    },
    {
      src: '/lovable-uploads/3ebd7203-ff5a-4b51-9f84-fffa7087443f.png',
      alt: 'Cadernos personalizados coloridos',
      title: 'Cadernos e Agendas'
    },
    {
      src: '/lovable-uploads/794df7e0-bdc8-44bf-8dda-a9782a8dd342.png',
      alt: 'Adesivos personalizados formato especial',
      title: 'Adesivos Especiais'
    },
    {
      src: '/lovable-uploads/e40fd358-77f3-4cde-833c-97fbaf92c333.png',
      alt: 'Banner promocional grande formato',
      title: 'Banners Promocionais'
    },
    {
      src: '/lovable-uploads/ec953a71-b478-4132-b57f-68a2a82d7690.png',
      alt: 'Camiseta branca personalizada',
      title: 'Camisetas Personalizadas'
    },
    {
      src: '/lovable-uploads/367d4c0e-fc7d-4118-9bcd-c453f2e60df5.png',
      alt: 'Camiseta cinza com logo personalizado',
      title: 'Estampas Personalizadas'
    },
    {
      src: '/lovable-uploads/c534fd8b-a0e3-4f0c-96f4-073f000d4128.png',
      alt: 'Banner de venda imobiliária',
      title: 'Banners Comerciais'
    },
    {
      src: '/lovable-uploads/fae4277d-3575-44aa-80e3-fbf825bc434a.png',
      alt: 'Faixa personalizada colorida',
      title: 'Faixas e Comunicação Visual'
    },
    {
      src: '/lovable-uploads/5316026f-ebba-4196-a719-e17d933f7a4c.png',
      alt: 'Adesivos redondos diversos logos',
      title: 'Adesivos Redondos'
    },
    {
      src: '/lovable-uploads/e6263084-533d-42cb-a3ca-2c21f2bc3b0a.png',
      alt: 'Canecas brancas personalizadas',
      title: 'Canecas Personalizadas'
    }
  ];

  return (
    <section ref={sectionRef} className="bg-white py-16">
      <div className="section-container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16" 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
            Galeria de Produtos
          </div>
          <h2 className="section-title">Nossos Trabalhos</h2>
          <p className="section-subtitle">
            Confira alguns dos produtos personalizados que já criamos para nossos clientes.
            Qualidade e criatividade em cada projeto.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div 
                    className="bg-slate-50 rounded-xl overflow-hidden shadow-subtle card-hover"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.7, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-slate-900 text-center">
                        {image.title}
                      </h3>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </motion.div>

        <motion.div 
          className="mt-12 text-center" 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <p className="text-slate-600 mb-6">
            Gostou do que viu? Entre em contato e transforme sua ideia em realidade!
          </p>
          <a href="#contact" className="btn-primary">
            Fazer Meu Pedido
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
