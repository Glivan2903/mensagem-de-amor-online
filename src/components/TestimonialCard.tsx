
import React from 'react';

interface TestimonialCardProps {
  id: number;
  name: string;
  text: string;
  imageUrl?: string;
  location: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  text,
  imageUrl,
  location,
  rating
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
      {/* Stars rating */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-gold-500' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        ))}
      </div>

      {/* Quote mark */}
      <div className="text-love-200 text-4xl font-serif mb-2">"</div>

      {/* Testimonial text */}
      <p className="text-gray-600 flex-1 mb-4">{text}</p>

      {/* Customer info */}
      <div className="flex items-center mt-auto">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={`Foto de ${name}`}
            className="w-10 h-10 rounded-full object-cover mr-3" 
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-love-100 flex items-center justify-center text-love-700 mr-3">
            {name.charAt(0)}
          </div>
        )}
        
        <div>
          <p className="font-medium text-love-700">{name}</p>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
