import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { f as formatPrice, e as extractYearFromName, a as formatNameForURL } from './fetchSliders_C_IijAMM.mjs';

function VehicleCard({ vehicle }) {
  const formattedPrice = formatPrice(vehicle.price);
  const vehicleYear = extractYearFromName(vehicle.name);
  return /* @__PURE__ */ jsxs("div", { className: "group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden flex-shrink-0", children: [
      /* @__PURE__ */ jsx("a", { href: `/vehiculos/${formatNameForURL(vehicle.name)}`, children: /* @__PURE__ */ jsx(
        "img",
        {
          src: vehicle.imageUrl,
          alt: vehicle.name,
          className: "w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-3 right-3 flex flex-col gap-2", children: vehicle.available ? /* @__PURE__ */ jsxs(Fragment, { children: [
        vehicle.label && /* @__PURE__ */ jsx("div", { className: "bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold shadow-lg whitespace-nowrap", children: vehicle.label }),
        /* @__PURE__ */ jsx("div", { className: "bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg", children: "✓ Disponible" })
      ] }) : /* @__PURE__ */ jsx("div", { className: "bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg", children: "✕ Vendido" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-4 flex-1 flex flex-col", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-3 flex-shrink-0", children: /* @__PURE__ */ jsx("h3", { className: "font-semibold text-gray-900 text-sm leading-tight line-clamp-2 min-h-[2.5rem]", children: /* @__PURE__ */ jsx(
        "a",
        {
          href: `/vehiculos/${formatNameForURL(vehicle.name)}`,
          className: "hover:text-gray-700 transition-colors",
          children: vehicle.name
        }
      ) }) }),
      /* @__PURE__ */ jsx("div", { className: "mb-4 flex-1", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2 text-xs text-gray-600", children: [
        vehicleYear && /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "📅" }),
          /* @__PURE__ */ jsx("span", { className: "font-medium truncate", children: vehicleYear })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "🚗" }),
          /* @__PURE__ */ jsxs("span", { className: "truncate", children: [
            vehicle.miles?.toLocaleString(),
            " km"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "⛽" }),
          /* @__PURE__ */ jsx("span", { className: "truncate", children: vehicle.fuelType })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "⚙️" }),
          /* @__PURE__ */ jsx("span", { className: "truncate", children: vehicle.transmission })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mt-auto pt-2 border-t border-gray-100", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mb-1", children: "Precio" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-gray-900 truncate", children: formattedPrice })
        ] }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: `/vehiculos/${formatNameForURL(vehicle.name)}`,
            className: "bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg text-xs font-medium transition-colors duration-200 shadow-sm hover:shadow-md flex-shrink-0 ml-2",
            children: "Ver más"
          }
        )
      ] })
    ] })
  ] });
}

export { VehicleCard as V };
