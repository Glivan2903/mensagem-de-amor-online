
import React from 'react';
import Banner from '../components/Banner';
import CategorySection from '../components/CategorySection';
import NewsletterSection from '../components/NewsletterSection';
import TestimonialCard from '../components/TestimonialCard';
import { bannerData, telemensagensData, cestasData, peluciasData, presentesData, testimonialsData, categories } from '../data/mockData';
import { Heart } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Banner */}
      <section className="py-6">
        <div className="container">
          <Banner banners={bannerData} />
        </div>
      </section>
      
      {/* Welcome Section */}
      <section className="py-12 bg-love-50">
        <div className="container max-w-4xl text-center">
          <div className="flex justify-center mb-4">
            <Heart size={32} className="text-love-600" />
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-love-700 mb-4">
            Mensagens de Amor
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Especialistas em proporcionar momentos memoráveis através de presentes especiais e mensagens únicas.
            Encontre a maneira perfeita de expressar seus sentimentos.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map(category => (
              <a 
                key={category.id} 
                href={category.path}
                className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow"
              >
                <h3 className="font-playfair font-medium text-love-700">{category.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      {/* Telemensagens Section */}
      <CategorySection 
        title="Telemensagens"
        description="Surpreenda com mensagens de voz personalizadas para qualquer ocasião especial."
        products={telemensagensData.map(item => ({
          id: item.id,
          title: item.title,
          imageUrl: item.imageUrl,
          price: item.price,
          category: item.category
        }))}
        categoryLink="/telemensagens"
      />
      
      {/* Cestas de Café Section */}
      <CategorySection 
        title="Cestas de Café da Manhã"
        description="Cestas preparadas com carinho para surpreender logo no despertar."
        products={cestasData.map(item => ({
          id: item.id,
          title: item.title,
          imageUrl: item.imageUrl,
          price: item.price,
          category: item.category
        }))}
        categoryLink="/cestas"
      />
      
      {/* Pelúcias Section */}
      <CategorySection 
        title="Pelúcias"
        description="Presentes fofos e encantadores para transmitir seu carinho."
        products={peluciasData.map(item => ({
          id: item.id,
          title: item.title,
          imageUrl: item.imageUrl,
          price: item.price,
          category: item.category
        }))}
        categoryLink="/pelucias"
      />
      
      {/* Outros Presentes Section */}
      <CategorySection 
        title="Outros Presentes"
        description="Opções especiais para completar sua surpresa."
        products={presentesData.map(item => ({
          id: item.id,
          title: item.title,
          imageUrl: item.imageUrl,
          price: item.price,
          category: item.category
        }))}
        categoryLink="/presentes"
      />
      
      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="section-title">O Que Nossos Clientes Dizem</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonialsData.map(testimonial => (
              <TestimonialCard 
                key={testimonial.id}
                id={testimonial.id}
                name={testimonial.name}
                text={testimonial.text}
                location={testimonial.location}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
};

export default Index;
