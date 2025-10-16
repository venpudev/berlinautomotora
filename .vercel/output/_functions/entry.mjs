import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_LyOaJZ3r.mjs';
import { manifest } from './manifest_C-1XTDBp.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/og/_filename_.astro.mjs');
const _page3 = () => import('./pages/api/send-email.astro.mjs');
const _page4 = () => import('./pages/catalogo.astro.mjs');
const _page5 = () => import('./pages/contacto.astro.mjs');
const _page6 = () => import('./pages/nosotros.astro.mjs');
const _page7 = () => import('./pages/vehiculos/_name_.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/og/[filename].ts", _page2],
    ["src/pages/api/send-email.ts", _page3],
    ["src/pages/catalogo.astro", _page4],
    ["src/pages/contacto.astro", _page5],
    ["src/pages/nosotros.astro", _page6],
    ["src/pages/vehiculos/[name].astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "cd1b81da-3a91-4eae-abb7-7c6b917c0249",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
