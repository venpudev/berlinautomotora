import { c as createComponent, e as createAstro, m as maybeRenderHead, a as renderTemplate, r as renderComponent, d as addAttribute, F as Fragment } from '../chunks/astro/server_nAoO3lyM.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_F7AhD4GW.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
/* empty css                                 */
import 'clsx';
import { c as getFeaturedCars } from '../chunks/fetchSliders_C_IijAMM.mjs';
import { V as VehicleCard } from '../chunks/ProductCard_oDAjdR-n.mjs';
export { renderers } from '../renderers.mjs';

const slide01 = new Proxy({"src":"/_astro/slide-01.DNvISTNk.jpg","width":1500,"height":1001,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/matias/Repositorios/berlinautomotora/src/assets/slide-01.jpg";
							}
							
							return target[name];
						}
					});

const slide02 = new Proxy({"src":"/_astro/slide-02.CGYBVlAB.jpg","width":1500,"height":967,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/matias/Repositorios/berlinautomotora/src/assets/slide-02.jpg";
							}
							
							return target[name];
						}
					});

const slide03 = new Proxy({"src":"/_astro/slide-03.5PWXS7zL.jpg","width":1500,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/matias/Repositorios/berlinautomotora/src/assets/slide-03.jpg";
							}
							
							return target[name];
						}
					});

const slide04 = new Proxy({"src":"/_astro/slide-04.svog_8d1.jpg","width":1500,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/matias/Repositorios/berlinautomotora/src/assets/slide-04.jpg";
							}
							
							return target[name];
						}
					});

const slide05 = new Proxy({"src":"/_astro/slide-05.B9FJq4tD.jpg","width":1500,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/matias/Repositorios/berlinautomotora/src/assets/slide-05.jpg";
							}
							
							return target[name];
						}
					});

const slideImages = [
  {
    src: slide01.src,
    alt: "Tu próximo automóvil",
    title: "En Berlin Automotora",
    subtitle: "Tu próximo auto te está esperando"
  },
  {
    src: slide02.src,
    alt: "Automóvil de lujo en carretera",
    title: "Calidad Premium",
    subtitle: "Los mejores vehículos del mercado"
  },
  {
    src: slide03.src,
    alt: "Concesionario de automóviles",
    title: "Amplio Inventario",
    subtitle: "Miles de opciones para elegir"
  },
  {
    src: slide04.src,
    alt: "Auto eléctrico cargando",
    title: "Encuentra tu Auto Ideal",
    subtitle: "Autos de las mejores marcas"
  },
  {
    src: slide05.src,
    alt: "Llaves de automóvil",
    title: "Financiamiento Fácil",
    subtitle: "Planes de pago que se adaptan a ti"
  }
];
const HeroSlider = () => {
  const swiperRef = useRef(null);
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      /* Estilos aplicados inmediatamente para evitar el flash azul */
      .swiper-button-next,
      .swiper-button-prev {
        color: #dc2626 !important;
      }

      .swiper-button-next:hover,
      .swiper-button-prev:hover {
        color: #b91c1c !important;
      }

      .swiper-pagination-bullet {
        background: #dc2626 !important;
        opacity: 0.5 !important;
      }

      .swiper-pagination-bullet-active {
        background: #dc2626 !important;
        opacity: 1 !important;
      }
    `;
    document.head.appendChild(style);
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);
  return /* @__PURE__ */ jsx("section", { className: "hero-section my-14 py-8 sm:py-12 lg:py-16 relative overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "md:w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs(
    Swiper,
    {
      ref: swiperRef,
      modules: [Navigation, Pagination, Autoplay, EffectFade],
      effect: "fade",
      fadeEffect: {
        crossFade: true
      },
      loop: true,
      speed: 1e3,
      autoplay: {
        delay: 5e3,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      },
      navigation: {
        nextEl: ".custom-swiper-button-next",
        prevEl: ".custom-swiper-button-prev"
      },
      pagination: {
        el: ".custom-swiper-pagination",
        clickable: true,
        dynamicBullets: true
      },
      centeredSlides: true,
      grabCursor: true,
      watchOverflow: true,
      className: "w-full h-full",
      children: [
        slideImages.map((slide, index) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsxs("div", { className: "relative h-80 sm:h-96 md:h-[450px] lg:h-[500px] overflow-hidden rounded-[20px] sm:rounded-[30px] lg:rounded-[50px] ", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: slide.src,
              alt: slide.alt,
              className: "w-full h-full object-cover object-center"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/50 flex items-center rounded-[20px] sm:rounded-[30px] lg:rounded-[50px]", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-12 sm:px-8 lg:px-[130px]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-full sm:max-w-2xl lg:max-w-3xl text-white", children: [
            /* @__PURE__ */ jsx("h1", { className: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 leading-tight", children: slide.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 sm:mb-6 lg:mb-8 leading-relaxed opacity-90", children: slide.subtitle }),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "/catalogo",
                className: "inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm sm:text-base lg:text-lg rounded-md sm:rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl",
                children: [
                  "Ver Stock",
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      className: "ml-1 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M9 5l7 7-7 7"
                        }
                      )
                    }
                  )
                ]
              }
            )
          ] }) }) })
        ] }) }, index)),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "custom-swiper-button-prev swiper-button-prev",
            style: { color: "#dc2626" }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "custom-swiper-button-next swiper-button-next",
            style: { color: "#dc2626" }
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "custom-swiper-pagination swiper-pagination" })
      ]
    }
  ) }) });
};

const $$Astro = createAstro();
const $$BannerStock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BannerStock;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-full bg-[#020617] relative min-h-[100px]" data-astro-cid-unrifklh> <div class="banner-content" data-astro-cid-unrifklh> <h2 data-astro-cid-unrifklh>${title}</h2> <a href="/catalogo" class="arrows-container" data-astro-cid-unrifklh> <div class="arrow" data-astro-cid-unrifklh></div> <div class="arrow" data-astro-cid-unrifklh></div> <div class="arrow" data-astro-cid-unrifklh></div> </a> </div> </div> `;
}, "/Users/matias/Repositorios/berlinautomotora/src/components/banner-stock/BannerStock.astro", void 0);

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
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = sliderStyles;
  document.head.appendChild(styleSheet);
}
const brands = [
  {
    name: "Banco Falabella",
    logo: "/Banco-falabella.png",
    alt: "Banco Falabella Logo"
  },
  {
    name: "Santander Finance",
    logo: "/Santander-finance.png",
    alt: "Santander Finance Logo"
  },
  {
    name: "Tanner",
    logo: "/Tanner.png",
    alt: "Tanner Logo"
  },
  {
    name: "Unidad",
    logo: "/Unidad-financiera.png",
    alt: "Unidad Logo"
  },
  {
    name: "Venpu",
    logo: "/Venpu.png",
    alt: "Venpu Logo"
  },
  {
    name: "BCI Seguros",
    logo: "/bci-seguros.png",
    alt: "BCI Seguros Logo"
  }
];
function BrandSlider() {
  return /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-b from-gray-50 to-white py-20 sm:py-28", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4", children: "Nuestros Partners" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-lg max-w-2xl mx-auto", children: "Trabajamos con las mejores instituciones financieras para ofrecerte las mejores opciones" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" }),
      /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" }),
      /* @__PURE__ */ jsx(
        Swiper,
        {
          modules: [Autoplay],
          spaceBetween: 80,
          slidesPerView: 4,
          centeredSlides: false,
          autoplay: {
            delay: 2500,
            // 2.5 segundos para movimiento más fluido
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            // No pausar en hover para loop continuo
            reverseDirection: false
          },
          loop: true,
          loopAdditionalSlides: 2,
          speed: 800,
          allowTouchMove: true,
          grabCursor: true,
          breakpoints: {
            0: {
              slidesPerView: 1.5,
              // Mostrar 1.5 logos en móvil para mejor UX
              spaceBetween: 30,
              centeredSlides: true
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 40,
              centeredSlides: false
            },
            640: {
              slidesPerView: 2.5,
              spaceBetween: 50,
              centeredSlides: false
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 60,
              centeredSlides: false
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 70,
              centeredSlides: false
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 80,
              centeredSlides: false
            }
          },
          className: "brands-swiper-enhanced",
          children: brands.map((brand, index) => /* @__PURE__ */ jsx(SwiperSlide, { className: "!w-auto", children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center h-28 sm:h-32 lg:h-36 px-6 sm:px-8 group", children: /* @__PURE__ */ jsxs("div", { className: "relative transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-lg", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                className: "w-auto h-auto max-w-full max-h-full object-contain transition-all duration-500 filter brightness-100 contrast-100 group-hover:brightness-110 group-hover:contrast-110",
                src: brand.logo,
                alt: brand.alt,
                width: 250,
                height: 100,
                loading: "lazy"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" })
          ] }) }) }, index))
        }
      )
    ] })
  ] }) });
}

const $$Brand = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BrandSlider", BrandSlider, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/matias/Repositorios/berlinautomotora/src/components/banner-brand/BrandSlider", "client:component-export": "default" })}`;
}, "/Users/matias/Repositorios/berlinautomotora/src/components/banner-brand/Brand.astro", void 0);

const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  const testimonials = [
    {
      name: "Richard Dur\xE1n",
      description: "El servicio de Solange es excelente, viaje desde Antofagasta y no tuve ning\xFAn problema, todo bien \u{1F642}",
      rating: 5,
      avatar: "RD"
    },
    {
      name: "Mario Cifuentes",
      description: "Excelente servicio muy confiable adem\xE1s muy amable est\xE1n atentos a cualquier duda que tengan as\xED que muy agradecido ,recomendable 100%",
      rating: 4,
      avatar: "MC"
    },
    {
      name: "Mabel \xC1lvarez",
      description: `Hace poco compre una 4runner, bellis\xEDma, s\xFAper buena la atenci\xF3n de Solange Roco, excelente y muy recomendable, satisfecha por la compra y agradecer la recepci\xF3n, soy de Vallenar y todo ha sido transparente ..feliz\u{1F601}`,
      rating: 5,
      avatar: "MA"
    }
  ];
  const truncateText = (text, maxLength = 120) => {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= rating);
    }
    return stars;
  };
  return renderTemplate`${maybeRenderHead()}<section class="relative py-16 bg-[#020617]"> <div class="absolute inset-0 z-0"${addAttribute({
    backgroundImage: `radial-gradient(circle 500px at 50% 200px, #3e3e3e, transparent)`
  }, "style")}></div> <!-- Content container --> <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <!-- Header --> <div class="text-center mb-12"> <h2 class="text-3xl font-bold text-white mb-4">
Lo que dicen nuestros clientes
</h2> <p class="text-lg text-gray-300 max-w-2xl mx-auto">
Trabajamos con aliados financieros confiables para ofrecerte el mejor servicio.
</p> </div> <!-- Testimonials Grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${testimonials.map((testimonial) => renderTemplate`<div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"> <!-- Avatar and Name --> <div class="flex items-center mb-4"> <div class="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-semibold text-lg"> ${testimonial.avatar} </div> <div class="ml-4"> <h3 class="font-semibold text-gray-900">${testimonial.name}</h3> <!-- Stars Rating --> <div class="flex items-center"> ${renderStars(testimonial.rating).map((isFilled) => renderTemplate`<svg${addAttribute(`w-4 h-4 ${isFilled ? "text-yellow-400" : "text-gray-300"}`, "class")} fill="currentColor" viewBox="0 0 20 20"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg>`)} <span class="ml-2 text-sm text-gray-600">(${testimonial.rating}/5)</span> </div> </div> </div> <!-- Description --> <blockquote class="text-gray-700 italic">
"${truncateText(testimonial.description, 120)}"
</blockquote> </div>`)} </div> </div> </section>`;
}, "/Users/matias/Repositorios/berlinautomotora/src/components/testimonials/Testimonials.astro", void 0);

const FeaturedCars = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchFeaturedCars = async () => {
    try {
      const autos = await getFeaturedCars();
      setVehicles(autos.map((auto) => ({ vehicle: auto })));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching vehicles:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchFeaturedCars();
  }, []);
  const isLoopEnabled = vehicles.length > 4;
  return /* @__PURE__ */ jsxs("section", { className: "py-0 md:py-5 bg-white text-black", children: [
    /* @__PURE__ */ jsxs("div", { className: "md:w-7xl mx-auto px-4 mb-0", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-center text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2", children: "Destacados" }),
      /* @__PURE__ */ jsx("p", { className: "text-center text-gray-600", children: "Tenemos una amplia variedad de vehículos usados y de todas las marcas" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "md:w-7xl mx-auto px-4 py-5", children: /* @__PURE__ */ jsx(
      Swiper,
      {
        modules: [Navigation, Autoplay],
        spaceBetween: 30,
        slidesPerView: 4,
        pagination: { clickable: true },
        autoplay: {
          delay: 3e3,
          // Tiempo entre cada cambio de diapositiva (en ms)
          disableOnInteraction: false
          // Continúa el autoplay incluso si el usuario interactúa
        },
        loop: isLoopEnabled,
        breakpoints: {
          0: {
            slidesPerView: 1
          },
          639: {
            slidesPerView: 1
          },
          865: {
            slidesPerView: 2
          },
          1e3: {
            slidesPerView: 3
          },
          1500: {
            slidesPerView: 4
          },
          1700: {
            slidesPerView: 4
          }
        },
        children: vehicles.map(({ vehicle }) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx("div", { className: "py-8", children: /* @__PURE__ */ jsx(VehicleCard, { vehicle }) }) }, vehicle.id))
      }
    ) })
  ] });
};

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      img: "/image-service-01.webp",
      title: "Financiamiento Flexible",
      desc: "Opciones de cr\xE9dito adaptadas a ti."
    },
    {
      img: "/image-service-02.webp",
      title: "Certificaci\xF3n de Veh\xEDculos",
      desc: "Todos nuestros autos pasan por revisi\xF3n profesional."
    },
    {
      img: "/image-service-03.webp",
      title: "Atenci\xF3n Personalizada",
      desc: "Te acompa\xF1amos en todo el proceso."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-white relative"> <div class="absolute inset-0 z-0 pointer-events-none"${addAttribute({
    backgroundImage: `
        repeating-linear-gradient(22.5deg, transparent, transparent 2px, rgba(75, 85, 99, 0.06) 2px, rgba(75, 85, 99, 0.06) 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(67.5deg, transparent, transparent 2px, rgba(107, 114, 128, 0.05) 2px, rgba(107, 114, 128, 0.05) 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(112.5deg, transparent, transparent 2px, rgba(55, 65, 81, 0.04) 2px, rgba(55, 65, 81, 0.04) 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(157.5deg, transparent, transparent 2px, rgba(31, 41, 55, 0.03) 2px, rgba(31, 41, 55, 0.03) 3px, transparent 3px, transparent 8px)
      `
  }, "style")}></div> <div class="md:w-7xl mx-auto px-4"> <h2 class="text-center text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">Servicios</h2> <p class="text-xl text-center text-gray-600 mb-12">Asesoramiento automotriz especializado en compra y venta de vehículos</p> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${services.map((service) => renderTemplate`<div class="relative rounded-2xl overflow-hidden shadow-lg group"> ${service.title === "Financiamiento Flexible" ? renderTemplate`<a href="/financiamiento" class="block"> <img${addAttribute(service.img, "src")}${addAttribute(service.title, "alt")} class="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"> <div class="absolute inset-0 bg-black/50 flex flex-col justify-center items-center px-4 group-hover:bg-black/60 transition-colors duration-300"> <h3 class="text-white text-2xl font-bold mb-2 text-center drop-shadow-lg">${service.title}</h3> <p class="text-white text-base text-center opacity-90 drop-shadow-md">${service.desc}</p> <div class="mt-3 px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
Ver más →
</div> </div> </a>` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <img${addAttribute(service.img, "src")}${addAttribute(service.title, "alt")} class="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"> <div class="absolute inset-0 bg-black/50 flex flex-col justify-center items-center px-4"> <h3 class="text-white text-2xl font-bold mb-2 text-center drop-shadow-lg">${service.title}</h3> <p class="text-white text-base text-center opacity-90 drop-shadow-md">${service.desc}</p> </div> ` })}`} </div>`)} </div> </div> </section>`;
}, "/Users/matias/Repositorios/berlinautomotora/src/components/service-cars/Services.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Berlin Automotora - Compra, venta y consignaci\xF3n de veh\xEDculos", "description": "Amplio stock de veh\xEDculos. Descubre nuestro cat\xE1logo.", "image": "/wildcar-auto.webp" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", HeroSlider, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/matias/Repositorios/berlinautomotora/src/components/hero-slider/Hero", "client:component-export": "default" })} ${renderComponent($$result2, "FeaturedCars", FeaturedCars, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/matias/Repositorios/berlinautomotora/src/components/featured-cars/FeaturedCars", "client:component-export": "FeaturedCars" })}  ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "BannerStock", $$BannerStock, { "title": "Ver stock completo" })} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "Brand", $$Brand, {})} ` })}`;
}, "/Users/matias/Repositorios/berlinautomotora/src/pages/index.astro", void 0);

const $$file = "/Users/matias/Repositorios/berlinautomotora/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
