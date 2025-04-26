
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, ShoppingCart, User, X } from 'lucide-react';

const categories = [
  { name: 'Telemensagens', path: '/telemensagens' },
  { name: 'Cestas de Café', path: '/cestas' },
  { name: 'Pelúcias', path: '/pelucias' },
  { name: 'Outros Presentes', path: '/presentes' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-love-700 font-playfair font-bold text-2xl">Mensagens de Amor</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="nav-link font-medium">Início</Link>
            
            {/* Categories Dropdown */}
            <div className="relative group">
              <button className="nav-link font-medium flex items-center">
                Produtos
                <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
              <div className="absolute z-10 left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-1">
                  {categories.map((category) => (
                    <Link
                      key={category.path}
                      to={category.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-love-50 hover:text-love-700"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            <Link to="/sobre" className="nav-link font-medium">Sobre</Link>
            <Link to="/contato" className="nav-link font-medium">Contato</Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-love-600">
              <Search size={20} />
            </button>
            <Link to="/carrinho" className="text-gray-700 hover:text-love-600">
              <ShoppingCart size={20} />
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-love-600">
              <User size={20} />
            </Link>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-700 hover:text-love-600"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
          <div className="container py-4">
            <div className="flex justify-between items-center mb-6">
              <Link to="/" className="text-love-700 font-playfair font-bold text-xl" onClick={() => setMobileMenuOpen(false)}>
                Mensagens de Amor
              </Link>
              <button 
                className="text-gray-700 hover:text-love-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col space-y-4">
              <Link to="/" className="py-2 border-b border-gray-100 text-lg" onClick={() => setMobileMenuOpen(false)}>
                Início
              </Link>
              
              <div className="py-2 border-b border-gray-100 text-lg font-medium">
                Produtos
              </div>
              <div className="pl-4 flex flex-col space-y-2">
                {categories.map((category) => (
                  <Link
                    key={category.path}
                    to={category.path}
                    className="py-2 text-gray-700 hover:text-love-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
              
              <Link to="/sobre" className="py-2 border-b border-gray-100 text-lg" onClick={() => setMobileMenuOpen(false)}>
                Sobre
              </Link>
              <Link to="/contato" className="py-2 border-b border-gray-100 text-lg" onClick={() => setMobileMenuOpen(false)}>
                Contato
              </Link>
              <Link to="/login" className="py-2 border-b border-gray-100 text-lg" onClick={() => setMobileMenuOpen(false)}>
                Minha Conta
              </Link>
              <Link to="/carrinho" className="py-2 border-b border-gray-100 text-lg" onClick={() => setMobileMenuOpen(false)}>
                Carrinho
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
