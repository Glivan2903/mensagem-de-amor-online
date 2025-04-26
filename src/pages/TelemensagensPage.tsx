
import React, { useState } from 'react';
import AudioPlayer from '../components/AudioPlayer';
import ProductCard from '../components/ProductCard';
import { telemensagensData, audioPlaceholder } from '../data/mockData';

type Category = 'Todos' | 'Aniversário' | 'Amor' | 'Namoro' | 'Relacionamento' | 'Datas Especiais' | 'Casamento';

const TelemensagensPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('Todos');
  const [currentAudio, setCurrentAudio] = useState<string | null>(null);
  
  // Get unique categories
  const categories = ['Todos', ...new Set(telemensagensData.map(item => item.category))] as Category[];
  
  // Filter telemensagens based on selected category
  const filteredTelemensagens = selectedCategory === 'Todos' 
    ? telemensagensData 
    : telemensagensData.filter(item => item.category === selectedCategory);
  
  return (
    <div className="min-h-screen py-8">
      <div className="container">
        {/* Page header */}
        <div className="text-center mb-10">
          <h1 className="font-playfair text-4xl font-bold text-love-700 mb-4">Telemensagens</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Surpreenda quem você ama com mensagens de voz personalizadas para qualquer ocasião. 
            Nossas telemensagens são criadas por profissionais para transmitir seus sentimentos da forma mais especial.
          </p>
        </div>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category 
                  ? 'bg-love-600 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Featured telemensagem with audio player */}
        {filteredTelemensagens.length > 0 && (
          <div className="bg-white rounded-xl shadow-md p-6 mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h2 className="font-playfair text-2xl font-bold text-love-700 mb-2">
                  {filteredTelemensagens[0].title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {filteredTelemensagens[0].description}
                </p>
                <div className="mb-4">
                  <span className="category-badge">
                    {filteredTelemensagens[0].category}
                  </span>
                </div>
                
                <AudioPlayer 
                  audioUrl={currentAudio || audioPlaceholder} 
                  title="Ouça uma prévia desta mensagem"
                />
                
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xl font-medium text-love-700">
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(filteredTelemensagens[0].price)}
                  </span>
                  
                  <button className="btn-primary flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                    Adicionar ao Carrinho
                  </button>
                </div>
              </div>
              
              <div className="hidden lg:block">
                <img 
                  src={filteredTelemensagens[0].imageUrl} 
                  alt={filteredTelemensagens[0].title} 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        )}
        
        {/* Telemensagens grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTelemensagens.map(item => (
            <div key={item.id} className="product-card">
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                />
                <div className="absolute top-2 left-2">
                  <span className="category-badge">{item.category}</span>
                </div>
                
                {/* Play button overlay */}
                <button 
                  className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity"
                  onClick={() => setCurrentAudio(audioPlaceholder)}
                  aria-label={`Ouvir prévia de ${item.title}`}
                >
                  <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                    <svg className="w-6 h-6 text-love-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                </button>
              </div>
              
              <div className="p-4">
                <h3 className="font-playfair font-medium text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-love-700 font-medium">
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price)}
                  </span>
                  <button 
                    className="bg-love-600 hover:bg-love-700 text-white p-2 rounded-full transition-colors"
                    aria-label={`Adicionar ${item.title} ao carrinho`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* No results message */}
        {filteredTelemensagens.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">Nenhuma telemensagem encontrada para esta categoria.</p>
            <button
              onClick={() => setSelectedCategory('Todos')}
              className="btn-outline mt-4"
            >
              Ver todas as telemensagens
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TelemensagensPage;
