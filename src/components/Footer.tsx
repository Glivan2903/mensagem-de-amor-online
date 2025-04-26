
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-6 border-t">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About section */}
          <div>
            <h3 className="font-playfair text-xl font-bold text-love-700 mb-4">Mensagens de Amor</h3>
            <p className="text-gray-600 mb-4">
              Especialistas em proporcionar momentos memoráveis através de presentes especiais e mensagens únicas.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-gray-600 hover:text-love-600" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="text-gray-600 hover:text-love-600" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-600 hover:text-love-600" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links section */}
          <div>
            <h3 className="font-playfair text-xl font-bold text-love-700 mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-love-600">Início</Link></li>
              <li><Link to="/telemensagens" className="text-gray-600 hover:text-love-600">Telemensagens</Link></li>
              <li><Link to="/cestas" className="text-gray-600 hover:text-love-600">Cestas de Café</Link></li>
              <li><Link to="/pelucias" className="text-gray-600 hover:text-love-600">Pelúcias</Link></li>
              <li><Link to="/presentes" className="text-gray-600 hover:text-love-600">Outros Presentes</Link></li>
            </ul>
          </div>

          {/* Categories section */}
          <div>
            <h3 className="font-playfair text-xl font-bold text-love-700 mb-4">Informações</h3>
            <ul className="space-y-2">
              <li><Link to="/sobre" className="text-gray-600 hover:text-love-600">Sobre Nós</Link></li>
              <li><Link to="/contato" className="text-gray-600 hover:text-love-600">Contato</Link></li>
              <li><Link to="/politica-de-privacidade" className="text-gray-600 hover:text-love-600">Política de Privacidade</Link></li>
              <li><Link to="/termos-de-servico" className="text-gray-600 hover:text-love-600">Termos de Serviço</Link></li>
              <li><Link to="/duvidas-frequentes" className="text-gray-600 hover:text-love-600">Dúvidas Frequentes</Link></li>
            </ul>
          </div>

          {/* Contact section */}
          <div>
            <h3 className="font-playfair text-xl font-bold text-love-700 mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-0.5 text-love-600 flex-shrink-0" />
                <span className="text-gray-600">(11) 99999-9999</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-0.5 text-love-600 flex-shrink-0" />
                <span className="text-gray-600">mensagensoiamor@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 text-love-600 flex-shrink-0" />
                <span className="text-gray-600">São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 border-t border-gray-200 pt-8 pb-4">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="font-playfair text-xl font-bold text-love-700 mb-4">Inscreva-se em nossa Newsletter</h3>
            <p className="text-gray-600 mb-6">Receba novidades, promoções e mensagens especiais.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="flex-1 rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-love-500" 
              />
              <button 
                className="btn-primary whitespace-nowrap"
              >
                Inscrever-se
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-200 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Mensagens de Amor. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
