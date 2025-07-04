import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const isMobile = useIsMobile();

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

  const handleWhatsAppClick = () => {
    // Open WhatsApp with predefined message
    window.open('https://wa.me/5549988054778?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20produtos%20personalizados.', '_blank');
    
    // Show toast notification
    toast({
      title: "Redirecionando para o WhatsApp",
      description: "Você será conectado com nossa equipe."
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-orange-500" />,
      title: 'Telefone',
      details: '(49) 98805-4778',
      action: 'tel:+5549988054778',
      actionText: 'Contato via Telefone'
    },
    {
      icon: <Mail className="h-6 w-6 text-orange-500" />,
      title: 'Email',
      details: 'fotografcv@hotmail.com',
      action: 'mailto:fotografcv@hotmail.com',
      actionText: 'Contato via Email'
    },
    {
      icon: <MapPin className="h-6 w-6 text-orange-500" />,
      title: 'Endereço',
      details: 'R. Santo Antônio - Centro, Lebon Régis - SC, 89515-000',
      action: 'https://maps.app.goo.gl/51TqsbYBxmgVLkGD8',
      actionText: 'Ver no Mapa'
    }
  ];

  return (
    <section ref={sectionRef} id="contact" className="bg-orange-50 py-16">
      <div className="section-container px-4 md:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12" 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-orange-600 bg-orange-100 rounded-full">
            Contato
          </div>
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-4">Entre em Contato Conosco</h2>
          <p className="section-subtitle text-amber-800">
            Estamos prontos para atender suas necessidades de personalização. Entre em contato 
            através de um dos nossos canais de atendimento ou nos envie uma mensagem pelo WhatsApp.
          </p>
        </motion.div>

        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500 p-8 rounded-xl text-white text-center shadow-lg">
            <Instagram className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Siga-nos no Instagram!</h3>
            <p className="text-lg mb-6 opacity-90">
              Veja mais dos nossos trabalhos e inspire-se com criações únicas
            </p>
            <a 
              href="https://www.instagram.com/fotografcomunicacaovisual/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              <Instagram className="h-5 w-5" />
              @fotografcomunicacaovisual
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="w-full p-8 rounded-xl shadow-lg bg-white border border-orange-200">
              <h3 className="text-2xl font-bold text-amber-900 mb-6">Fale Conosco</h3>
              <p className="text-amber-800 mb-8">
                Clique no botão abaixo para iniciar uma conversa no WhatsApp com nossa equipe de atendimento.
              </p>
              
              <Button 
                onClick={handleWhatsAppClick}
                className="w-full py-6 text-lg gap-2 bg-green-500 hover:bg-green-600 transition-all duration-300"
              >
                <Send className="h-5 w-5" />
                Conversar no WhatsApp
              </Button>
              
              <div className="mt-8 text-center text-amber-700 text-sm">
                Horário de atendimento: Segunda a Sexta, das 9h às 18h
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="order-1 lg:order-2" 
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start hover:bg-white/50 p-4 rounded-lg transition-colors duration-200">
                  <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-amber-900">{item.title}</h4>
                    <p className="mt-1 text-amber-800">{item.details}</p>
                    <a 
                      href={item.action} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-sm font-medium text-orange-600 hover:text-orange-700 hover:underline"
                    >
                      {item.actionText}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 overflow-hidden rounded-xl border border-orange-200 h-64 shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.7418234885896!2d-50.62932888795615!3d-27.509949776394773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dfa0f0b0b0b0b0%3A0x1234567890abcdef!2sR.%20Santo%20Ant%C3%B4nio%20-%20Centro%2C%20Lebon%20R%C3%A9gis%20-%20SC%2C%2089515-000!5e0!3m2!1spt-BR!2sbr!4v1732705400000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                title="Mapa de localização"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
