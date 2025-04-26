
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BannerProps {
  banners: {
    id: number;
    imageUrl: string;
    title: string;
    description: string;
    link: string;
  }[];
}

const Banner: React.FC<BannerProps> = ({ banners }) => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    // Auto-rotate banners every 5 seconds
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [banners.length]);

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goToBanner = (index: number) => {
    setCurrentBanner(index);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-md">
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[450px]">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentBanner ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
            <img
              src={banner.imageUrl}
              alt={banner.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 text-white z-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-playfair mb-2 sm:mb-4">{banner.title}</h2>
              <p className="hidden sm:block mb-4 text-white/90 max-w-lg">{banner.description}</p>
              <a
                href={banner.link}
                className="inline-block px-6 py-2.5 bg-love-600 hover:bg-love-700 text-white font-medium rounded-md transition-colors"
              >
                Ver Mais
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Banner controls */}
      <button
        onClick={prevBanner}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors z-30"
        aria-label="Banner anterior"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextBanner}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors z-30"
        aria-label="Próximo banner"
      >
        <ChevronRight size={24} />
      </button>

      {/* Banner indicators */}
      <div className="absolute bottom-4 flex justify-center space-x-2 w-full z-30">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToBanner(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentBanner ? 'bg-love-600' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Ir para banner ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
