import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs, Pagination } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';

// Inline styles for pagination dots and hover effect
const componentStyles = `
  /* Pagination dots */
  .swiper-pagination-bullet { background-color: #333 !important; opacity: 0.6 !important; }
  .swiper-pagination-bullet-active { background-color: #000 !important; opacity: 1 !important; }

  /* --- HOVER EFFECT STYLES --- */
  /* Target images within slides */
  .swiper-slide img {
    /* Smooth transition */
    transition: transform 0.4s ease, filter 0.4s ease;
  }
  /* Apply effect on hover */
  .swiper-slide:hover img {
    /* Slight zoom */
    transform: scale(1.03);
    /* Slight brightness increase */
    filter: brightness(1.05);
  }
`;

interface HeroProps {
  images?: { url: string; alt: string }[];
}

const Hero: React.FC<HeroProps> = ({ images = [] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  if (images.length === 0) {
    return (
        <div className="w-full h-[450px] md:h-[600px] bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">No hay imágenes disponibles.</p>
        </div>
    );
  }

  return (
    <div className="w-full">
      {/* Inject styles */}
      <style>{componentStyles}</style>
      
      {/* Main Slider */}
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        pagination={{ clickable: true }}
        modules={[FreeMode, Navigation, Thumbs, Pagination]}
        className="w-full rounded-lg h-[450px] md:h-[600px]" // Updated height
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
      
      {/* Thumbnails Slider (Desktop only) */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mt-4 hidden h-24 w-full rounded-lg md:block" // Updated height
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