
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  category: string;
  path: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, imageUrl, price, category, path }) => {
  return (
    <div className="product-card group">
      <Link to={`${path}/${id}`} className="block overflow-hidden relative">
        <div className="aspect-square overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
          />
        </div>
        <div className="absolute top-2 left-2">
          <span className="category-badge">{category}</span>
        </div>
      </Link>
      <div className="p-4">
        <Link to={`${path}/${id}`} className="block">
          <h3 className="font-playfair font-medium text-lg mb-2 hover:text-love-700 transition-colors line-clamp-2">{title}</h3>
        </Link>
        <div className="flex items-center justify-between">
          <span className="text-love-700 font-medium">
            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)}
          </span>
          <button 
            className="bg-love-600 hover:bg-love-700 text-white p-2 rounded-full transition-colors"
            aria-label={`Adicionar ${title} ao carrinho`}
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
