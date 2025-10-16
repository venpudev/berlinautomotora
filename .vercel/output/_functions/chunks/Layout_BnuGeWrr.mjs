import { c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent, e as createAstro, h as renderSlot, i as renderHead } from './astro/server_Dvh0lmxh.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                            */

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const menuLinks = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Cat\xE1logo", href: "/catalogo" },
    { name: "Contacto", href: "/contacto" }
  ];
  const socialLinks = [
    {
      name: "Facebook",
      href: "https://web.facebook.com/profile.php?id=61552210761850",
      icon: "fab fa-facebook-f",
      target: "_blank"
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/berlinautomotora/",
      icon: "fab fa-instagram",
      target: "_blank"
    }
  ];
  const contactInfo = [
    {
      type: "Direcci\xF3n",
      value: "Alonso de Cordova 5727, Las Condes, Santiago, Chile",
      icon: "fas fa-map-marker-alt",
      link: "https://maps.google.com/?q=Alonso+de+Cordova+5727,+Las+Condes",
      // Link de Google Maps corregido
      isExternal: true
    },
    {
      type: "Tel\xE9fono",
      value: "+56 9 56 6336 1016",
      icon: "fas fa-phone",
      link: "tel:+56963361016",
      isExternal: false
    },
    {
      type: "Correo",
      value: "lamaalberto@gmail.com",
      icon: "fas fa-envelope",
      link: "mailto:lamaalberto@gmail.com",
      isExternal: false
    }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="bg-[#020617] text-white relative z-10"> <div class="absolute inset-0 z-0"${addAttribute({ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(30, 64, 175, 0.15), transparent 70%), #020617" }, "style")}></div> <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> <div class="space-y-6 lg:col-span-1"> <a href="/" class="flex items-center space-x-2"> <img class="h-8 w-auto" src="/logo-berlin.png" alt="Berlin Automotora"> <span class="ml-2 text-xl font-bold text-white">Berlin Automotora</span> </a> <div> <h3 class="text-lg font-semibold mb-4">Síguenos</h3> <div class="flex space-x-4"> ${socialLinks.map((social) => renderTemplate`<a${addAttribute(social.href, "href")} class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"${addAttribute(social.name, "aria-label")}${addAttribute(social.target, "target")} rel="noopener noreferrer"> <i${addAttribute([social.icon, "text-sm text-white"], "class:list")}></i> </a>`)} </div> </div> </div> <div class="lg:col-span-1"> <h3 class="text-lg font-semibold mb-6">Navegación</h3> <ul class="space-y-3"> ${menuLinks.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"> <i class="fas fa-chevron-right text-xs mr-2"></i> ${link.name} </a> </li>`)} </ul> </div> <div class="lg:col-span-1"> <h3 class="text-lg font-semibold mb-6">Contacto</h3> <div class="space-y-4"> ${contactInfo.map((contact) => renderTemplate`<div class="flex items-start space-x-3"> <div class="flex-shrink-0 pt-1"> <i${addAttribute([contact.icon, "text-blue-400"], "class:list")}></i> </div> <div> <p class="text-sm font-medium text-gray-300">${contact.type}</p>  ${contact.link ? renderTemplate`<a${addAttribute(contact.link, "href")}${addAttribute(contact.isExternal ? "_blank" : void 0, "target")}${addAttribute(contact.isExternal ? "noopener noreferrer" : void 0, "rel")} class="text-gray-400 hover:text-white transition-colors duration-200"> ${contact.value} </a>` : renderTemplate`<p class="text-gray-400">${contact.value}</p>`}  </div> </div>`)} </div> </div> </div> <div class="border-t border-gray-800 mt-12 pt-6"> <div class="text-center"> <p class="text-gray-400 text-sm">© ${(/* @__PURE__ */ new Date()).getFullYear()} Berlin Automotora. Todos los derechos reservados.</p> <p class="text-gray-500 text-xs mt-2">
Diseño y desarrollo por
<a href="https://venpu.cl" target="_blank" class="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium">
Venpu
</a> </p> </div> </div> </div> </footer>`;
}, "/Users/matias/Repositorios/berlinautomotora/src/components/footer/Footer.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Hamburger = createComponent(($$result, $$props, $$slots) => {
  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Cat\xE1logo", href: "/catalogo" },
    { name: "Contacto", href: "/contacto" }
  ];
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<button class="hamburger" type="button" aria-label="Abrir men\xFA" data-astro-cid-yw3sawaa> <svg class="hamburger-icon" width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-yw3sawaa> <path class="line line-1" d="M2 2H22" stroke="#000000" stroke-width="3" stroke-linecap="round" data-astro-cid-yw3sawaa></path> <path class="line line-2" d="M2 9H22" stroke="#000000" stroke-width="3" stroke-linecap="round" data-astro-cid-yw3sawaa></path> <path class="line line-3" d="M2 16H22" stroke="#000000" stroke-width="3" stroke-linecap="round" data-astro-cid-yw3sawaa></path> </svg> </button> <!-- Men\xFA m\xF3vil ESTILO AIRBNB --> <div class="movil-links fixed inset-0 bg-black/20 backdrop-blur-sm z-50 hidden" data-astro-cid-yw3sawaa> <!-- Overlay para cerrar al hacer click fuera --> <div class="absolute inset-0" onclick="document.querySelector('.movil-links').classList.add('hidden')" data-astro-cid-yw3sawaa></div> <!-- Contenedor principal del men\xFA --> <div class="absolute top-16 right-4 left-4 max-w-sm mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-slide-down" data-astro-cid-yw3sawaa> <!-- Header del men\xFA --> <div class="bg-black px-6 py-4" data-astro-cid-yw3sawaa> <div class="flex items-center justify-between" data-astro-cid-yw3sawaa> <h3 class="text-white font-semibold text-lg" data-astro-cid-yw3sawaa>Men\xFA</h3> <button onclick="document.querySelector('.movil-links').classList.add('hidden')" class="text-white/80 hover:text-white transition-colors" data-astro-cid-yw3sawaa> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-yw3sawaa> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-yw3sawaa></path> </svg> </button> </div> </div> <!-- Enlaces de navegaci\xF3n --> <div class="py-2" data-astro-cid-yw3sawaa> `, ` </div> <!-- Footer del men\xFA --> <div class="bg-gray-50 px-6 py-4 text-center" data-astro-cid-yw3sawaa> <p class="text-sm text-gray-600" data-astro-cid-yw3sawaa>Berl\xEDn Automotora</p> </div> </div> </div> <script>
  console.log("\u{1F525} Script hamburger iniciado - CON FUNCIONALIDAD DE MEN\xDA");
  
  function setupHamburger() {
    console.log("\u{1F680} Configurando hamburger...");
    
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".movil-links");
    
    console.log("\u{1F354} Hamburger encontrado:", !!hamburger);
    console.log("\u{1F4F1} Men\xFA m\xF3vil encontrado:", !!mobileMenu);

    if (hamburger && mobileMenu) {
      console.log("\u2705 Agregando event listeners al bot\xF3n");
      
      // M\xE9todo principal: addEventListener 
      hamburger.addEventListener("click", function(event) {
        console.log("\u{1F5B1}\uFE0F CLICK DETECTADO - Toggling men\xFA");
        event.preventDefault();
        event.stopPropagation();
        
        // Toggle del men\xFA m\xF3vil
        mobileMenu.classList.toggle("hidden");
        
        // Verificar estado del men\xFA
        const isHidden = mobileMenu.classList.contains("hidden");
        console.log("\uFFFD Men\xFA est\xE1 oculto:", isHidden);
        console.log("\u{1F3AF} Men\xFA " + (isHidden ? "cerrado" : "abierto"));
      });
      
      console.log("\u{1F3AA} Event listeners configurados correctamente");
    } else {
      console.error("\u274C No se encontraron los elementos:", {
        hamburger: !!hamburger,
        mobileMenu: !!mobileMenu
      });
    }
  }

  // Ejecutar cuando el DOM est\xE9 listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupHamburger);
  } else {
    setupHamburger();
  }
<\/script> `])), maybeRenderHead(), navLinks.map((link, index) => renderTemplate`<a${addAttribute(link.href, "href")} class="group flex items-center px-6 py-4 text-gray-800 hover:bg-gray-50 transition-all duration-200 border-b border-gray-50 last:border-b-0"${addAttribute(`animation-delay: ${index * 100}ms`, "style")} data-astro-cid-yw3sawaa> <!-- Icono dinámico --> <div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-gray-200 transition-all" data-astro-cid-yw3sawaa> ${link.name === "Inicio" && renderTemplate`<svg class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-yw3sawaa> <path d="M10.707 2.293a1 1 0 00-1.414 0l-9 9a1 1 0 001.414 1.414L2 12.414V17a1 1 0 001 1h14a1 1 0 001-1v-4.586l.293.293a1 1 0 001.414-1.414l-9-9z" data-astro-cid-yw3sawaa></path> </svg>`} ${link.name === "Nosotros" && renderTemplate`<svg class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-yw3sawaa> <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" data-astro-cid-yw3sawaa></path> </svg>`} ${link.name === "Cat\xE1logo" && renderTemplate`<svg class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-yw3sawaa> <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" data-astro-cid-yw3sawaa></path> </svg>`} ${link.name === "Contacto" && renderTemplate`<svg class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-yw3sawaa> <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" data-astro-cid-yw3sawaa></path> <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" data-astro-cid-yw3sawaa></path> </svg>`} </div> <!-- Texto del enlace --> <div class="flex-1" data-astro-cid-yw3sawaa> <span class="font-medium text-gray-900 group-hover:text-black transition-colors" data-astro-cid-yw3sawaa> ${link.name} </span> <div class="text-sm text-gray-500 mt-0.5" data-astro-cid-yw3sawaa> ${link.name === "Inicio" && "P\xE1gina principal"} ${link.name === "Nosotros" && "Conoce nuestro equipo"} ${link.name === "Cat\xE1logo" && "Explora nuestros veh\xEDculos"} ${link.name === "Contacto" && "Ponte en contacto"} </div> </div> <!-- Flecha --> <svg class="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-yw3sawaa> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-yw3sawaa></path> </svg> </a>`));
}, "/Users/matias/Repositorios/berlinautomotora/src/components/hamburger-menu/Hamburger.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const logo = {
    src: "/logo-berlin.png",
    alt: "Berlin Automotora Logo",
    width: 220,
    // Ajustado para el nuevo tamaño
    height: 88
  };
  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Cat\xE1logo", href: "/catalogo" },
    { name: "Contacto", href: "/contacto" }
  ];
  const socialLinks = [
    {
      name: "Facebook",
      href: "https://web.facebook.com/profile.php?id=61552210761850",
      iconClass: "fab fa-facebook-f",
      hoverColor: "hover:text-blue-500"
      // Hover sobre el ícono
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/berlinautomotora/",
      iconClass: "fab fa-instagram",
      hoverColor: "hover:text-pink-500"
      // Hover sobre el ícono
    }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="bg-black fixed w-full top-0 z-50 border-b border-gray-800/70 shadow-2xl"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center h-24"> <div class="flex-shrink-0"> <a href="/" class="flex items-center"> <img class="h-20 w-auto"${addAttribute(logo.src, "src")}${addAttribute(logo.alt, "alt")}${addAttribute(logo.width, "width")}${addAttribute(logo.height, "height")}> </a> </div> <nav class="hidden lg:flex flex-1 justify-center items-center space-x-8"> ${navLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="text-gray-300 hover:text-white font-semibold text-base tracking-wider uppercase transition-colors duration-300"> ${link.name} </a>`)} </nav> <div class="hidden lg:flex items-center justify-end space-x-5"> <div class="flex space-x-4"> ${socialLinks.map((social) => renderTemplate`<a${addAttribute(social.href, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(social.name, "aria-label")}> <i${addAttribute([social.iconClass, social.hoverColor, "text-gray-400 text-xl transition-colors duration-300"], "class:list")}></i> </a>`)} </div> <a href="/consignacion" class="bg-blue-600 text-white font-bold px-5 py-2.5 rounded-md hover:bg-blue-700 transition-all duration-300 text-sm shadow-lg transform hover:scale-105">
Vende tu Auto
</a> </div> <div class="lg:hidden"> ${renderComponent($$result, "Hamburger", $$Hamburger, {})} </div> </div> </div> </header>`;
}, "/Users/matias/Repositorios/berlinautomotora/src/components/navbar/Navbar.astro", void 0);

const $$WhatsappIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="96px" height="96px" fill-rule="evenodd" clip-rule="evenodd"><path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"></path></svg>`;
}, "/Users/matias/Repositorios/berlinautomotora/src/components/icons/WhatsappIcon.astro", void 0);

const $$Whatsapp = createComponent(($$result, $$props, $$slots) => {
  const whatsappNumber = "+56963361016";
  const defaultMessage = "Quisiera m\xE1s informaci\xF3n sobre Automotora Berlin";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(whatsappUrl, "href")} target="_blank" class="whatsapp-button" data-astro-cid-4hhrgezd> ${renderComponent($$result, "WhatsappIcon", $$WhatsappIcon, { "data-astro-cid-4hhrgezd": true })} </a> `;
}, "/Users/matias/Repositorios/berlinautomotora/src/components/whatsapp-button/Whatsapp.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, image } = Astro2.props;
  const getImageFilename = (imageUrl) => {
    if (imageUrl.trim() === "") {
      return "logo.webp";
    }
    if (imageUrl.includes("digitaloceanspaces.com")) {
      const parts = imageUrl.split("/");
      return parts[parts.length - 1];
    }
    return imageUrl.startsWith("/") ? imageUrl.substring(1) : imageUrl;
  };
  const imageFilename = getImageFilename(image || "logo.webp");
  const apiBaseUrl = "https://www.berlinautomotora.cl";
  console.log(`Original image URL: ${image}`);
  console.log(`Extracted filename: ${imageFilename}`);
  console.log(`Environment: ${"production"}`);
  console.log(`API Base URL: ${apiBaseUrl}`);
  return renderTemplate(_a || (_a = __template(['<html lang="es" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><meta name="description"', '><meta property="og:image" itemprop="image"', '><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:type" content="image/jpeg"><title>', '</title><!-- Font Awesome CDN --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer"><!-- hCaptcha Script --><script src="https://js.hcaptcha.com/1/api.js" async defer></script>', "</head> <body data-astro-cid-sckkx6r4> ", " ", " ", " ", ` <!-- <div style="position: fixed; bottom: 20px; right: 20px; z-index: 9999; background: white; padding: 10px; border: 2px solid #ccc; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); max-width: 300px;">
			<p style="margin: 0 0 10px 0; font-size: 12px; font-weight: bold; color: #333;">
				🔍 Debug: Open Graph Image
			</p>
			<p style="margin: 0 0 8px 0; font-size: 11px; color: #666; word-break: break-all;">
				<strong>Original:</strong> {image}
			</p>
			<p style="margin: 0 0 10px 0; font-size: 11px; color: #666; word-break: break-all;">
				<strong>Filename:</strong> {imageFilename}
			</p>
			
			<div style="margin-bottom: 15px;">
				<p style="margin: 0 0 5px 0; font-size: 10px; font-weight: bold; color: #333;">🔗 Direct DigitalOcean:</p>
				<img 
					src={image && image.includes('digitaloceanspaces.com') ? image : '/frontis-autoloa.webp'} 
					alt="Direct test" 
					style="width: 100%; max-width: 100px; height: auto; border-radius: 4px; border: 1px solid #ddd;"
					onload="console.log('✅ Direct image loaded:', this.src)"
					onerror="console.log('❌ Direct image failed:', this.src); this.style.border='2px solid orange'"
				/>
			</div>
			

			<div style="margin-bottom: 10px;">
				<p style="margin: 0 0 5px 0; font-size: 10px; font-weight: bold; color: #333;">🔄 Via API:</p>
				<img 
					src={\`\${apiBaseUrl}/api/og/\${imageFilename}\`} 
					alt={title} 
					style="width: 100%; max-width: 100px; height: auto; border-radius: 4px; border: 1px solid #ddd;"
					onload="console.log('✅ OG Image loaded successfully:', this.src)"
					onerror="console.log('❌ OG Image failed to load:', this.src); this.style.border='2px solid red'; this.style.background='#ffebee'"
				/>
			</div>
			
			<p style="margin: 5px 0 0 0; font-size: 10px; color: #888; word-break: break-all;">
				<strong>API URL:</strong> {apiBaseUrl}/api/og/{imageFilename}
			</p>
			<button 
				onclick={\`window.open('\${apiBaseUrl}/api/og/\${imageFilename}', '_blank')\`}
				style="margin-top: 5px; padding: 3px 8px; font-size: 10px; background: #007acc; color: white; border: none; border-radius: 3px; cursor: pointer;">
				🔗 Abrir API URL
			</button>
		</div> --> </body></html>`], ['<html lang="es" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><meta name="description"', '><meta property="og:image" itemprop="image"', '><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:type" content="image/jpeg"><title>', '</title><!-- Font Awesome CDN --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer"><!-- hCaptcha Script --><script src="https://js.hcaptcha.com/1/api.js" async defer></script>', "</head> <body data-astro-cid-sckkx6r4> ", " ", " ", " ", ` <!-- <div style="position: fixed; bottom: 20px; right: 20px; z-index: 9999; background: white; padding: 10px; border: 2px solid #ccc; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); max-width: 300px;">
			<p style="margin: 0 0 10px 0; font-size: 12px; font-weight: bold; color: #333;">
				🔍 Debug: Open Graph Image
			</p>
			<p style="margin: 0 0 8px 0; font-size: 11px; color: #666; word-break: break-all;">
				<strong>Original:</strong> {image}
			</p>
			<p style="margin: 0 0 10px 0; font-size: 11px; color: #666; word-break: break-all;">
				<strong>Filename:</strong> {imageFilename}
			</p>
			
			<div style="margin-bottom: 15px;">
				<p style="margin: 0 0 5px 0; font-size: 10px; font-weight: bold; color: #333;">🔗 Direct DigitalOcean:</p>
				<img 
					src={image && image.includes('digitaloceanspaces.com') ? image : '/frontis-autoloa.webp'} 
					alt="Direct test" 
					style="width: 100%; max-width: 100px; height: auto; border-radius: 4px; border: 1px solid #ddd;"
					onload="console.log('✅ Direct image loaded:', this.src)"
					onerror="console.log('❌ Direct image failed:', this.src); this.style.border='2px solid orange'"
				/>
			</div>
			

			<div style="margin-bottom: 10px;">
				<p style="margin: 0 0 5px 0; font-size: 10px; font-weight: bold; color: #333;">🔄 Via API:</p>
				<img 
					src={\\\`\\\${apiBaseUrl}/api/og/\\\${imageFilename}\\\`} 
					alt={title} 
					style="width: 100%; max-width: 100px; height: auto; border-radius: 4px; border: 1px solid #ddd;"
					onload="console.log('✅ OG Image loaded successfully:', this.src)"
					onerror="console.log('❌ OG Image failed to load:', this.src); this.style.border='2px solid red'; this.style.background='#ffebee'"
				/>
			</div>
			
			<p style="margin: 5px 0 0 0; font-size: 10px; color: #888; word-break: break-all;">
				<strong>API URL:</strong> {apiBaseUrl}/api/og/{imageFilename}
			</p>
			<button 
				onclick={\\\`window.open('\\\${apiBaseUrl}/api/og/\\\${imageFilename}', '_blank')\\\`}
				style="margin-top: 5px; padding: 3px 8px; font-size: 10px; background: #007acc; color: white; border: none; border-radius: 3px; cursor: pointer;">
				🔗 Abrir API URL
			</button>
		</div> --> </body></html>`])), addAttribute(Astro2.generator, "content"), addAttribute(description, "content"), addAttribute(`${apiBaseUrl}/api/og/${imageFilename}`, "content"), title, renderHead(), renderComponent($$result, "Navbar", $$Navbar, { "data-astro-cid-sckkx6r4": true }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Whatsapp", $$Whatsapp, { "data-astro-cid-sckkx6r4": true }), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true }));
}, "/Users/matias/Repositorios/berlinautomotora/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
