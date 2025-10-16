import 'kleur/colors';
import { f as decodeKey } from './chunks/astro/server_nAoO3lyM.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_xJeDS6g5.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/matias/Repositorios/berlinautomotora/","cacheDir":"file:///Users/matias/Repositorios/berlinautomotora/node_modules/.astro/","outDir":"file:///Users/matias/Repositorios/berlinautomotora/dist/","srcDir":"file:///Users/matias/Repositorios/berlinautomotora/src/","publicDir":"file:///Users/matias/Repositorios/berlinautomotora/public/","buildClientDir":"file:///Users/matias/Repositorios/berlinautomotora/dist/client/","buildServerDir":"file:///Users/matias/Repositorios/berlinautomotora/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"@keyframes float{0%,to{transform:translateY(0)}50%{transform:translateY(-10px)}}.animate-float[data-astro-cid-zetdm5md]{animation:float 3s ease-in-out infinite}.animate-pulse[data-astro-cid-zetdm5md]{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes pulse{0%,to{opacity:1}50%{opacity:.5}}\n"},{"type":"external","src":"/_astro/catalogo.DLGBkPHj.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/og/[filename]","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/og\\/([^/]+?)\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"og","dynamic":false,"spread":false}],[{"content":"filename","dynamic":true,"spread":false}]],"params":["filename"],"component":"src/pages/api/og/[filename].ts","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/send-email","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/send-email\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"send-email","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/send-email.ts","pathname":"/api/send-email","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/catalogo.DLGBkPHj.css"}],"routeData":{"route":"/catalogo","isIndex":false,"type":"page","pattern":"^\\/catalogo\\/?$","segments":[[{"content":"catalogo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/catalogo.astro","pathname":"/catalogo","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/catalogo.DLGBkPHj.css"}],"routeData":{"route":"/contacto","isIndex":false,"type":"page","pattern":"^\\/contacto\\/?$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto.astro","pathname":"/contacto","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/catalogo.DLGBkPHj.css"}],"routeData":{"route":"/financiamiento","isIndex":false,"type":"page","pattern":"^\\/financiamiento\\/?$","segments":[[{"content":"financiamiento","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/financiamiento.astro","pathname":"/financiamiento","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/catalogo.DLGBkPHj.css"}],"routeData":{"route":"/nosotros","isIndex":false,"type":"page","pattern":"^\\/nosotros\\/?$","segments":[[{"content":"nosotros","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/nosotros.astro","pathname":"/nosotros","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/catalogo.DLGBkPHj.css"},{"type":"inline","content":".scrollbar-hide[data-astro-cid-ajdznhba]{-ms-overflow-style:none;scrollbar-width:none}.scrollbar-hide[data-astro-cid-ajdznhba]::-webkit-scrollbar{display:none}#thumbnail-strip[data-astro-cid-ajdznhba]{scroll-behavior:smooth}.thumbnail-btn[data-astro-cid-ajdznhba]:hover{transform:scale(1.05)}.thumbnail-btn[data-astro-cid-ajdznhba]{transition:all .2s ease-in-out}#prev-image[data-astro-cid-ajdznhba]:disabled,#next-image[data-astro-cid-ajdznhba]:disabled{opacity:.3;cursor:not-allowed}#current-index[data-astro-cid-ajdznhba]{font-weight:600}@media (max-width: 640px){.thumbnail-btn[data-astro-cid-ajdznhba]{width:4rem;height:4rem}}@media (min-width: 768px){.thumbnail-btn[data-astro-cid-ajdznhba]{width:5rem;height:5rem}}.fixed[data-astro-cid-ajdznhba].bottom-0{backdrop-filter:blur(10px);background-color:#fffffff2}#main-image[data-astro-cid-ajdznhba]{transition:all .3s ease-in-out}.characteristic-card[data-astro-cid-ajdznhba]{transition:all .2s ease-in-out}.characteristic-card[data-astro-cid-ajdznhba]:hover{transform:translateY(-2px);box-shadow:0 4px 12px #0000001a}\n"}],"routeData":{"route":"/vehiculos/[name]","isIndex":false,"type":"page","pattern":"^\\/vehiculos\\/([^/]+?)\\/?$","segments":[[{"content":"vehiculos","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"params":["name"],"component":"src/pages/vehiculos/[name].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CDPgfbrv.css"},{"type":"external","src":"/_astro/catalogo.DLGBkPHj.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/matias/Repositorios/berlinautomotora/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/matias/Repositorios/berlinautomotora/src/pages/catalogo.astro",{"propagation":"none","containsHead":true}],["/Users/matias/Repositorios/berlinautomotora/src/pages/contacto.astro",{"propagation":"none","containsHead":true}],["/Users/matias/Repositorios/berlinautomotora/src/pages/financiamiento.astro",{"propagation":"none","containsHead":true}],["/Users/matias/Repositorios/berlinautomotora/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/matias/Repositorios/berlinautomotora/src/pages/nosotros.astro",{"propagation":"none","containsHead":true}],["/Users/matias/Repositorios/berlinautomotora/src/pages/vehiculos/[name].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/api/og/[filename]@_@ts":"pages/api/og/_filename_.astro.mjs","\u0000@astro-page:src/pages/api/send-email@_@ts":"pages/api/send-email.astro.mjs","\u0000@astro-page:src/pages/contacto@_@astro":"pages/contacto.astro.mjs","\u0000@astro-page:src/pages/financiamiento@_@astro":"pages/financiamiento.astro.mjs","\u0000@astro-page:src/pages/vehiculos/[name]@_@astro":"pages/vehiculos/_name_.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/nosotros@_@astro":"pages/nosotros.astro.mjs","\u0000@astro-page:src/pages/catalogo@_@astro":"pages/catalogo.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","/Users/matias/Repositorios/berlinautomotora/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CDNRRIrV.mjs","\u0000@astrojs-manifest":"manifest_vLOA7Nmk.mjs","/Users/matias/Repositorios/berlinautomotora/src/components/hero-slider/Hero":"_astro/Hero.DyE9i0gG.js","/Users/matias/Repositorios/berlinautomotora/src/components/featured-cars/FeaturedCars":"_astro/FeaturedCars.CRQcSAyv.js","/Users/matias/Repositorios/berlinautomotora/src/components/catalogo/Catalogo":"_astro/Catalogo.DTlXuAwV.js","/Users/matias/Repositorios/berlinautomotora/src/components/banner-brand/BrandSlider":"_astro/BrandSlider.DCSAUodm.js","@astrojs/react/client.js":"_astro/client.BxCTEn3I.js","/Users/matias/Repositorios/berlinautomotora/src/pages/contacto.astro?astro&type=script&index=0&lang.ts":"_astro/contacto.astro_astro_type_script_index_0_lang.BlrK86z8.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/matias/Repositorios/berlinautomotora/src/pages/contacto.astro?astro&type=script&index=0&lang.ts","const t=document.getElementById(\"contact-form\"),e=document.getElementById(\"form-status\"),n=e?.querySelector(\"p\");t?.addEventListener(\"submit\",async d=>{if(d.preventDefault(),!t||!e||!n)return;const a=window.hcaptcha?.getResponse();if(!a){e.classList.remove(\"hidden\"),n.textContent=\"Por favor, completa la verificación de seguridad.\",e.className=\"text-red-700 text-center p-4 bg-red-50 rounded-xl border border-red-200\";return}const i=new FormData(t),s=Object.fromEntries(i.entries());s[\"h-captcha-response\"]=a;const o=t.querySelector('button[type=\"submit\"]'),l=o.textContent;t.querySelectorAll(\"input, textarea, button\").forEach(r=>{r.setAttribute(\"disabled\",\"true\")}),o.textContent=\"Enviando...\",e.classList.remove(\"hidden\"),n.textContent=\"Enviando mensaje...\",e.className=\"text-gray-600 text-center p-4 bg-gray-50 rounded-xl\";try{const c=await(await fetch(\"/api/send-email\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(s)})).json();if(c.error)throw new Error(c.error);t.reset(),window.hcaptcha?.reset(),n.textContent=\"¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.\",e.className=\"text-green-700 text-center p-4 bg-green-50 rounded-xl border border-green-200\",setTimeout(()=>{e.classList.add(\"hidden\")},5e3)}catch{window.hcaptcha?.reset(),n.textContent=\"Error al enviar el mensaje. Por favor, intenta nuevamente o contáctanos directamente.\",e.className=\"text-red-700 text-center p-4 bg-red-50 rounded-xl border border-red-200\"}finally{t.querySelectorAll(\"input, textarea, button\").forEach(r=>{r.removeAttribute(\"disabled\")}),o.textContent=l}});"]],"assets":["/_astro/wild-cars-mazda.BoVBJEmQ.webp","/_astro/slide-01.DNvISTNk.jpg","/_astro/slide-04.svog_8d1.jpg","/_astro/slide-03.5PWXS7zL.jpg","/_astro/slide-02.CGYBVlAB.jpg","/_astro/slide-05.B9FJq4tD.jpg","/_astro/catalogo.DLGBkPHj.css","/_astro/index.CDPgfbrv.css","/Banco-falabella.png","/Santander-finance.png","/Tanner.png","/Unidad-financiera.png","/Venpu.png","/autofin.png","/bci-seguros.png","/favicon.svg","/image-service-01.webp","/image-service-02.webp","/image-service-03.webp","/logo-berlin.png","/wildcar-auto.webp","/_astro/BrandSlider.DCSAUodm.js","/_astro/Catalogo.DTlXuAwV.js","/_astro/FeaturedCars.CRQcSAyv.js","/_astro/Hero.DyE9i0gG.js","/_astro/ProductCard.DoVZbuAH.js","/_astro/autoplay.Cf0YmYR4.js","/_astro/client.BxCTEn3I.js","/_astro/index.BJfUAbRs.js","/_astro/index.BypzdWfS.css","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/navigation.CmaoPDIx.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"jnFz4tHzqW0QobZIYZwEPZmJ8fNu2nLkr+d/xjD7a28="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
