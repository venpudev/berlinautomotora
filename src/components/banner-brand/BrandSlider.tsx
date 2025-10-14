import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Image } from 'astro:assets';

import falabella from '../../assets/brands/Banco-falabella.png';
import santander from '../../assets/brands/Santander-finance.png';
import tanner from '../../assets/brands/Tanner.png';
import unidad from '../../assets/brands/Unidad-financiera.png';
import venpu from '../../assets/brands/Venpu.png';
import autofin from '../../assets/brands/autofin.png';
import bciSeguros from '../../assets/brands/bci-seguros.png';

import "swiper/css";
import "swiper/css/autoplay";

// Estilos personalizados para el slider de partners
const sliderStyles = `
  .brands-swiper {
    overflow: visible !important;
  }
  
  .brands-swiper .swiper-slide {
    width: auto !important;
    flex-shrink: 0;
  }
  
  .brands-swiper .swiper-slide-active {
    transform: scale(1.05);
  }
  
  .brands-swiper .swiper-slide:hover {
    transform: scale(1.1);
  }
  
  /* Gradientes sutiles en los bordes para indicar scroll */
  .brands-swiper::before,
  .brands-swiper::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 40px;
    z-index: 10;
    pointer-events: none;
  }
  
  .brands-swiper::before {
    left: 0;
    background: linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0));
  }
  
  .brands-swiper::after {
    right: 0;
    background: linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,0));
  }
  
  /* Responsive adjustments */
  @media (max-width: 640px) {
    .brands-swiper::before,
    .brands-swiper::after {
      width: 20px;
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
    logo: falabella,
    alt: 'Banco Falabella Logo'
  },
  {
    name: 'Santander Finance',      
    logo: santander,  
    alt: 'Santander Finance Logo' 
  },  
  {
    name: 'Tanner',      
    logo: tanner,  
    alt: 'Tanner Logo' 
  },
  {
    name: 'Unidad',      
    logo: unidad,  
    alt: 'Unidad Logo' 
  }, 
  {
    name: 'Venpu',
    logo: venpu,
    alt: 'Venpu Logo'
  },
  {
    name: 'Autofin',
    logo: autofin,
    alt: 'Autofin Logo'
  },
  {
    name: 'BCI Seguros',
    logo: bciSeguros,
    alt: 'BCI Seguros Logo'
  }
];

export default function BrandSlider() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-center font-semibold text-black text-2xl sm:text-4xl mb-12">
          Nuestros Partners
        </h2>
        
        <div className="relative">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView="auto"
            centeredSlides={false}
            autoplay={{
              delay: 4000, // 4 segundos para dar tiempo a leer
              disableOnInteraction: false,
              pauseOnMouseEnter: true, // Pausa al hacer hover
            }}
            loop={true}
            speed={800} // Transición suave
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 35,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 45,
              },
              1536: {
                slidesPerView: 7,
                spaceBetween: 50,
              }
            }}
            className="brands-swiper"
          >
            {brands.map((brand, index) => (
              <SwiperSlide key={index} className="!w-auto">
                <div className="flex items-center justify-center h-24 px-4 group">
                  <div className="transition-all duration-300 group-hover:scale-110 group-hover:opacity-80">
                    <Image
                      className="max-h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      src={brand.logo}
                      alt={brand.alt}
                      width={180}
                      height={64}
                    />
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
