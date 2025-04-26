
import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing email:', email);
    alert('Obrigado por se inscrever em nossa newsletter!');
    setEmail('');
  };

  return (
    <section className="py-16 bg-love-50">
      <div className="container max-w-4xl">
        <div className="text-center mb-8">
          <Mail size={32} className="mx-auto text-love-600 mb-4" />
          <h2 className="section-title">Assine Nossa Newsletter</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Receba novidades, promoções exclusivas e mensagens inspiradoras diretamente na sua caixa de entrada.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor e-mail"
              required
              className="flex-1 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-love-500"
            />
            <button 
              type="submit"
              className="btn-primary py-3 font-medium"
            >
              Inscrever-se
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-3 text-center">
            Respeitamos sua privacidade. Você pode cancelar sua inscrição a qualquer momento.
          </p>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
