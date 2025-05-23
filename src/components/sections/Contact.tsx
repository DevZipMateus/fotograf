
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
      icon: <Phone className="h-6 w-6 text-blue-500" />,
      title: 'Telefone',
      details: '(49) 98805-4778',
      action: 'tel:+5549988054778',
      actionText: 'Contato via Telefone'
    },
    {
      icon: <Mail className="h-6 w-6 text-blue-500" />,
      title: 'Email',
      details: 'fotografcv@hotmail.com',
      action: 'mailto:fotografcv@hotmail.com',
      actionText: 'Contato via Email'
    },
    {
      icon: <MapPin className="h-6 w-6 text-blue-500" />,
      title: 'Endereço',
      details: 'Avenida Santo Antônio, 380, Chapecó - SC',
      action: 'https://maps.google.com/?q=Avenida+Santo+Antônio+380+Chapecó+SC',
      actionText: 'Ver no Mapa'
    }
  ];

  return (
    <section ref={sectionRef} id="contact" className="bg-white py-16">
      <div className="section-container px-4 md:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12" 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
            Contato
          </div>
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-4">Entre em Contato Conosco</h2>
          <p className="section-subtitle text-slate-600">
            Estamos prontos para atender suas necessidades de personalização. Entre em contato 
            através de um dos nossos canais de atendimento ou nos envie uma mensagem pelo WhatsApp.
          </p>
        </motion.div>

        {/* Instagram Highlight */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-8 rounded-xl text-white text-center shadow-lg">
            <Instagram className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Siga-nos no Instagram!</h3>
            <p className="text-lg mb-6 opacity-90">
              Veja mais dos nossos trabalhos e inspire-se com criações únicas
            </p>
            <a 
              href="https://www.instagram.com/fotografcomunicacaovisual/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              <Instagram className="h-5 w-5" />
              @fotografcomunicacaovisual
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* WhatsApp Contact Card */}
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="w-full p-8 rounded-xl shadow-lg bg-white border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Fale Conosco</h3>
              <p className="text-slate-600 mb-8">
                Clique no botão abaixo para iniciar uma conversa no WhatsApp com nossa equipe de atendimento.
              </p>
              
              <Button 
                onClick={handleWhatsAppClick}
                className="w-full py-6 text-lg gap-2 bg-green-500 hover:bg-green-600 transition-all duration-300"
              >
                <Send className="h-5 w-5" />
                Conversar no WhatsApp
              </Button>
              
              <div className="mt-8 text-center text-slate-500 text-sm">
                Horário de atendimento: Segunda a Sexta, das 9h às 18h
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="order-1 lg:order-2" 
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start hover:bg-slate-50 p-4 rounded-lg transition-colors duration-200">
                  <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-50">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-slate-900">{item.title}</h4>
                    <p className="mt-1 text-slate-600">{item.details}</p>
                    <a 
                      href={item.action} 
                      className="mt-2 inline-block text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      {item.actionText}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 overflow-hidden rounded-xl border border-slate-200 h-64 shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57551.38125432507!2d-52.68773398983812!3d-27.10104472156008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e4b666dded2d39%3A0x49689aceeaca6071!2sAv.%20Santo%20Ant%C3%B4nio%2C%20380%20-%20Chapec%C3%B3%2C%20SC!5e0!3m2!1spt-BR!2sbr!4v1720027350719!5m2!1spt-BR!2sbr" 
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
