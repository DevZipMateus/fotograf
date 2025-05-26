
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Target, BarChart3 } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

  const features = [
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: 'Missão',
      description:
        'Transformar ideias em produtos únicos e personalizados que reflitam a identidade e os valores de nossos clientes, oferecendo soluções criativas de alta qualidade.',
    },
    {
      icon: <Target className="h-8 w-8 text-orange-500" />,
      title: 'Visão',
      description:
        'Ser reconhecidos como referência em personalização e comunicação visual, criando experiências memoráveis através de produtos únicos e inovadores.',
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-orange-500" />,
      title: 'Valores',
      description:
        'Criatividade, qualidade, inovação, compromisso com o cliente e responsabilidade são os pilares que orientam todas as nossas criações e relacionamentos.',
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-16 bg-orange-50">
      <div className="section-container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-orange-600 bg-orange-100 rounded-full">
            Sobre Nós
          </div>
          <h2 className="section-title">Quem Somos</h2>
          <p className="section-subtitle">
            Na Fotograf, transformamos ideias em produtos únicos. Somos especializados na criação de itens personalizados que unem criatividade, qualidade e identidade. Desde presentes especiais e lembranças marcantes até brindes corporativos e produtos promocionais, oferecemos soluções feitas sob medida para cada cliente.
          </p>
          <p className="text-lg text-amber-700 max-w-3xl mt-4">
            Nosso portfólio inclui camisetas, canecas, agendas, itens de papelaria, chaveiros, acessórios, embalagens personalizadas e muito mais. Trabalhamos com tecnologia de ponta e um atendimento próximo, garantindo resultados que encantam e fortalecem conexões. Seja para eternizar momentos, divulgar sua marca ou surpreender alguém especial, estamos aqui para dar forma ao que você imagina.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-subtle card-hover border border-orange-100"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
            >
              <div className="mb-4 bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-amber-900">{feature.title}</h3>
              <p className="text-amber-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
