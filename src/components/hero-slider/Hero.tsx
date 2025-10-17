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

  // Si no hay imágenes, muestra un placeholder.
  if (!images || images.length === 0) {
    return (
        <div className="w-full h-[450px] md:h-[600px] bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">No hay imágenes disponibles.</p>
        </div>
    );
  }

  return (
    <div className="w-full">
      <style>{paginationStyles}</style>
      
      {/* Slider Principal con altura aumentada */}
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        pagination={{ clickable: true }}
        modules={[FreeMode, Navigation, Thumbs, Pagination]}
        // --- CAMBIO DE ALTURA AQUÍ ---
        className="w-full rounded-lg h-[450px] md:h-[600px]"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img 
              src={image.url} 
              alt={image.alt || `Imagen de vehículo ${index + 1}`} 
              // --- CAMBIO DE ALTURA AQUÍ (para llenar el contenedor) ---
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
        // --- CAMBIO DE ALTURA Y VISIBILIDAD AQUÍ ---
        className="mt-4 hidden h-24 w-full rounded-lg md:block"
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