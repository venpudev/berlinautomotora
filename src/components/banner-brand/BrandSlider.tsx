import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

// Estilos personalizados para el slider de partners mejorado
const sliderStyles = `
  .brands-swiper-enhanced {
    overflow: visible !important;
    padding: 30px 0;
  }
  
  .brands-swiper-enhanced .swiper-wrapper {
    align-items: center;
  }
  
  .brands-swiper-enhanced .swiper-slide {
    width: auto !important;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 120px;
  }
  
  .brands-swiper-enhanced .swiper-slide-active {
    transform: scale(1.05);
  }
  
  .brands-swiper-enhanced .swiper-slide:hover {
    transform: scale(1.1);
  }
  
  /* Mejoras visuales para las imágenes - LOGOS MÁS GRANDES */
  .brands-swiper-enhanced img {
    filter: none !important;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
    max-height: 80px !important;
    width: auto !important;
    object-fit: contain;
  }
  
  .brands-swiper-enhanced .swiper-slide:hover img {
    filter: brightness(1.1) contrast(1.1) saturate(1.1) !important;
    transform: translateY(-2px);
  }
  
  /* Efectos sutiles sin sombras de fondo */
  .brands-swiper-enhanced .swiper-slide {
    background: transparent;
    transition: all 0.3s ease;
  }
  
  .brands-swiper-enhanced .swiper-slide:hover {
    background: transparent;
  }
  
  /* Animación de entrada */
  .brands-swiper-enhanced .swiper-slide {
    animation: slideInUp 0.6s ease-out;
  }
  
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Responsive adjustments - MEJORADO PARA MÓVIL */
  @media (max-width: 640px) {
    .brands-swiper-enhanced {
      padding: 20px 0;
    }
    
    .brands-swiper-enhanced .swiper-slide {
      width: auto !important;
      height: 100px;
      margin: 0 10px;
    }
    
    .brands-swiper-enhanced img {
      max-height: 60px !important;
    }
    
    .brands-swiper-enhanced .swiper-wrapper {
      align-items: center;
    }
  }
  
  @media (max-width: 768px) {
    .brands-swiper-enhanced {
      padding: 25px 0;
    }
    
    .brands-swiper-enhanced .swiper-slide {
      height: 110px;
    }
    
    .brands-swiper-enhanced img {
      max-height: 70px !important;
    }
  }
  
  @media (min-width: 1024px) {
    .brands-swiper-enhanced img {
      max-height: 90px !important;
    }
    
    .brands-swiper-enhanced .swiper-slide {
      height: 130px;
    }
  }
`;

// Inyectar estilos
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = sliderStyles;
  document.head.appendChild(styleSheet);
}

const brands = [
  {
    name: 'Banco Falabella',
    logo: '/Banco-falabella.png',
    alt: 'Banco Falabella Logo'
  },
  {
    name: 'Santander Finance',      
    logo: '/Santander-finance.png',  
    alt: 'Santander Finance Logo' 
  },  
  {
    name: 'Tanner',      
    logo: '/Tanner.png',  
    alt: 'Tanner Logo' 
  },
  {
    name: 'Unidad',      
    logo: '/Unidad-financiera.png',  
    alt: 'Unidad Logo' 
  }, 
  {
    name: 'Venpu',
    logo: '/Venpu.png',
    alt: 'Venpu Logo'
  },
  {
    name: 'BCI Seguros',
    logo: '/bci-seguros.png',
    alt: 'BCI Seguros Logo'
  }
];

export default function BrandSlider() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nuestros Partners
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Trabajamos con las mejores instituciones financieras para ofrecerte las mejores opciones
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          {/* Gradientes laterales para efecto de desvanecimiento */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
          
          <Swiper
            modules={[Autoplay]}
            spaceBetween={80}
            slidesPerView={4}
            centeredSlides={false}
            autoplay={{
              delay: 2500, // 2.5 segundos para movimiento más fluido
              disableOnInteraction: false,
              pauseOnMouseEnter: false, // No pausar en hover para loop continuo
              reverseDirection: false,
            }}
            loop={true}
            loopAdditionalSlides={2} // Asegurar loop continuo
            speed={800} // Transición más rápida y fluida
            allowTouchMove={true}
            grabCursor={true}
            breakpoints={{
              0: {
                slidesPerView: 1.5, // Mostrar 1.5 logos en móvil para mejor UX
                spaceBetween: 30,
                centeredSlides: true,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 40,
                centeredSlides: false,
              },
              640: {
                slidesPerView: 2.5,
                spaceBetween: 50,
                centeredSlides: false,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 60,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 70,
                centeredSlides: false,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 80,
                centeredSlides: false,
              }
            }}
            className="brands-swiper-enhanced"
          >
            {brands.map((brand, index) => (
              <SwiperSlide key={index} className="!w-auto">
                <div className="flex items-center justify-center h-28 sm:h-32 lg:h-36 px-6 sm:px-8 group">
                  <div className="relative transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-lg">
                    <img
                      className="w-auto h-auto max-w-full max-h-full object-contain transition-all duration-500 filter brightness-100 contrast-100 group-hover:brightness-110 group-hover:contrast-110"
                      src={brand.logo}
                      alt={brand.alt}
                      width={250}
                      height={100}
                      loading="lazy"
                    />
                    {/* Efecto de brillo sutil al hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
