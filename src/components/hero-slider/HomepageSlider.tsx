import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

// Estilos de Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Imágenes para el slider de la página de inicio
import slide01 from "../../assets/slide-01.jpg";
import slide02 from "../../assets/slide-02.jpg";
import slide03 from "../../assets/slide-03.jpg";
import slide04 from "../../assets/slide-04.jpg";
import slide05 from "../../assets/slide-05.jpg";

const homepageSlides = [
    { src: slide01.src, alt: "Tu próximo automóvil", title: "En Berlin Automotora", subtitle: "Tu próximo auto te está esperando" },
    { src: slide02.src, alt: "Automóvil de lujo en carretera", title: "Calidad Premium", subtitle: "Los mejores vehículos del mercado" },
    { src: slide03.src, alt: "Concesionario de automóviles", title: "Amplio Inventario", subtitle: "Miles de opciones para elegir" },
    { src: slide04.src, alt: "Auto eléctrico cargando", title: "Encuentra tu Auto Ideal", subtitle: "Autos de las mejores marcas" },
    { src: slide05.src, alt: "Llaves de automóvil", title: "Financiamiento Fácil", subtitle: "Planes de pago que se adaptan a ti" },
];

const HomepageSlider: React.FC = () => {
  return (
    <section className="hero-section py-8 sm:py-12 lg:py-16 relative overflow-hidden">
      <div className="md:w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={true}
          speed={1000}
          autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          navigation
          pagination={{ clickable: true }}
          className="w-full h-full"
        >
          {homepageSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-80 sm:h-96 md:h-[450px] lg:h-[500px] overflow-hidden rounded-xl">
                <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-black/50 flex items-center rounded-xl">
                  <div className="container mx-auto px-12 sm:px-8 lg:px-[130px]">
                    <div className="max-w-full sm:max-w-2xl lg:max-w-3xl text-white">
                      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 leading-tight">{slide.title}</h1>
                      <p className="text-base sm:text-lg lg:text-xl mb-8 leading-relaxed opacity-90">{slide.subtitle}</p>
                      <a href="/catalogo" className="inline-flex items-center px-6 py-3 lg:px-8 lg:py-4 bg-red-600 hover:bg-red-700 text-white font-semibold text-base rounded-lg transition-transform duration-300 transform hover:scale-105 shadow-lg">
                        Ver Stock <span className="ml-2">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HomepageSlider;