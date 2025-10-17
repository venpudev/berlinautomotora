import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs, Pagination } from 'swiper/modules';

// Estilos de Swiper
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';

// Estilos para la paginación (dots)
const paginationStyles = `
  .swiper-pagination-bullet { background-color: #333 !important; opacity: 0.6 !important; }
  .swiper-pagination-bullet-active { background-color: #000 !important; opacity: 1 !important; }
`;

interface HeroProps {
  images: { url: string; alt: string }[];
}

const Hero: React.FC<HeroProps> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  // Si no hay imágenes, no renderizar nada para evitar errores.
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="w-full">
      <style>{paginationStyles}</style>
      
      {/* Slider Principal */}
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        pagination={{ clickable: true }}
        modules={[FreeMode, Navigation, Thumbs, Pagination]}
        className="h-100w-full rounded-lg"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img 
              src={image.url} 
              alt={image.alt || `Imagen de vehículo ${index + 1}`} 
              className="h-full w-full object-cover" 
            />
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Slider de Miniaturas (solo para escritorio) */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mt-4 hidden h-32 w-full rounded-lg md:block"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img 
              src={image.url} 
              alt={image.alt || `Miniatura de vehículo ${index + 1}`} 
              className="h-full w-full cursor-pointer object-cover" 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;