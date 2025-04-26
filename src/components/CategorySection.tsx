
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

interface Product {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  category: string;
}

interface CategorySectionProps {
  title: string;
  description?: string;
  products: Product[];
  categoryLink: string;
  limit?: number;
}

const CategorySection: React.FC<CategorySectionProps> = ({ 
  title, 
  description, 
  products,
  categoryLink,
  limit = 4 
}) => {
  // Limit the number of products to display
  const displayProducts = products.slice(0, limit);
  
  return (
    <section className="py-10">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        
        {description && (
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {displayProducts.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.imageUrl}
              price={product.price}
              category={product.category}
              path={categoryLink}
            />
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            to={categoryLink}
            className="btn-outline inline-flex items-center"
          >
            Ver Todos
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
