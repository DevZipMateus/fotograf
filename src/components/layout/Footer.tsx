import { Mail, MapPin, Phone, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <div className="mb-6">
              <h3 className="text-2xl font-bold font-display">Fotograf</h3>
              <p className="mt-2 text-orange-100">
                Transformamos ideias em produtos únicos personalizados.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://www.instagram.com/fotografcomunicacaovisual/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-600 transition-colors duration-200" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-orange-100 hover:text-white transition-colors duration-200">Início</a>
              <a href="#about" className="text-orange-100 hover:text-white transition-colors duration-200">Sobre Nós</a>
              <a href="#services" className="text-orange-100 hover:text-white transition-colors duration-200">Serviços</a>
              <a href="#contact" className="text-orange-100 hover:text-white transition-colors duration-200">Contato</a>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Entre em Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <span className="text-orange-100">R. Santo Antônio - Centro<br />Lebon Régis - SC, 89515-000</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-orange-400 flex-shrink-0" />
                <a href="tel:+5549988054778" className="text-orange-100 hover:text-white transition-colors duration-200">
                  (49) 98805-4778
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-orange-400 flex-shrink-0" />
                <a href="mailto:fotografcv@hotmail.com" className="text-orange-100 hover:text-white transition-colors duration-200">
                  fotografcv@hotmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-orange-700 text-orange-200 text-sm text-center">
          <p>© {new Date().getFullYear()} Fotograf Personalizados. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
