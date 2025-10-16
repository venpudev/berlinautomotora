import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_nAoO3lyM.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_F7AhD4GW.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useEffect, useMemo } from 'react';
import { V as VehicleCard } from '../chunks/ProductCard_oDAjdR-n.mjs';
import { f as formatPrice, b as fetchAllVehicles } from '../chunks/fetchSliders_C_IijAMM.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const parsePrice = (priceString) => {
  if (!priceString) return 0;
  return parseInt(priceString.replace(/,/g, ""));
};

const ITEMS_PER_PAGE = 12;
function Catalogo() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    brand: "",
    priceRange: { min: 0, max: 1e8 },
    fuelType: "",
    transmission: "",
    milesRange: { min: 0, max: 5e5 },
    available: null
  });
  useEffect(() => {
    const loadVehicles = async () => {
      try {
        const data = await fetchAllVehicles();
        setVehicles(data);
      } catch (error) {
        console.error("Error loading vehicles:", error);
      } finally {
        setLoading(false);
      }
    };
    loadVehicles();
  }, []);
  const uniqueBrands = useMemo(() => {
    return [...new Set(vehicles.map((v) => v.brand))].sort();
  }, [vehicles]);
  const priceRange = useMemo(() => {
    if (vehicles.length === 0) {
      return { min: 0, max: 1e8 };
    }
    const prices = vehicles.map((v) => parsePrice(v.price)).filter((price) => !isNaN(price) && price > 0);
    if (prices.length === 0) {
      return { min: 0, max: 1e8 };
    }
    return {
      min: Math.min(...prices),
      max: Math.max(...prices)
    };
  }, [vehicles]);
  const milesRange = useMemo(() => {
    if (vehicles.length === 0) {
      return { min: 0, max: 5e5 };
    }
    const miles = vehicles.map((v) => v.miles).filter((mile) => !isNaN(mile));
    return {
      min: Math.min(...miles),
      max: Math.max(...miles)
    };
  }, [vehicles]);
  useEffect(() => {
    if (vehicles.length > 0) {
      setFilters((prev) => {
        const newFilters = {
          ...prev,
          priceRange: {
            min: prev.priceRange.min === 0 || prev.priceRange.min === 1e8 ? priceRange.min : prev.priceRange.min,
            max: prev.priceRange.max === 1e8 || prev.priceRange.max === 0 ? priceRange.max : prev.priceRange.max
          },
          milesRange: {
            min: prev.milesRange.min === 0 || prev.milesRange.min === 5e5 ? milesRange.min : prev.milesRange.min,
            max: prev.milesRange.max === 5e5 || prev.milesRange.max === 0 ? milesRange.max : prev.milesRange.max
          }
        };
        return newFilters;
      });
    }
  }, [
    vehicles.length,
    priceRange.min,
    priceRange.max,
    milesRange.min,
    milesRange.max
  ]);
  const filteredVehicles = useMemo(() => {
    return vehicles.filter((vehicle) => {
      const price = parsePrice(vehicle.price);
      if (isNaN(price) || price <= 0) return false;
      return (filters.brand === "" || vehicle.brand === filters.brand) && price >= filters.priceRange.min && price <= filters.priceRange.max && (filters.fuelType === "" || vehicle.fuelType === filters.fuelType) && (filters.transmission === "" || vehicle.transmission === filters.transmission) && vehicle.miles >= filters.milesRange.min && vehicle.miles <= filters.milesRange.max && (filters.available === null || vehicle.available === filters.available);
    });
  }, [vehicles, filters]);
  const totalPages = Math.ceil(filteredVehicles.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedVehicles = filteredVehicles.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );
  const handleFilterChange = (filterKey, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterKey]: value
    }));
    setCurrentPage(1);
  };
  const clearFilters = () => {
    setFilters({
      brand: "",
      priceRange: { min: priceRange.min, max: priceRange.max },
      fuelType: "",
      transmission: "",
      milesRange: { min: milesRange.min, max: milesRange.max },
      available: null
    });
    setCurrentPage(1);
  };
  const formatNumber = (num) => {
    return new Intl.NumberFormat("es-CL").format(num);
  };
  if (loading) {
    return /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center min-h-screen", children: /* @__PURE__ */ jsx("div", { className: "animate-spin rounded-full h-32 w-32 border-b-2 border-red-400" }) });
  }
  return /* @__PURE__ */ jsxs("div", { className: "md:w-7xl mx-auto px-4 py-24", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-dark mb-4", children: "Catálogo de Vehículos" }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-gray-400", children: [
          filteredVehicles.length,
          " vehículos encontrados"
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setShowFilters(!showFilters),
            className: "lg:hidden bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold",
            children: showFilters ? "Ocultar Filtros" : "Mostrar Filtros"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-8", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: `lg:w-1/4 ${showFilters ? "block" : "hidden lg:block"}`,
          children: /* @__PURE__ */ jsxs("div", { className: "bg-gray-900 rounded-lg p-6 border border-gray-800 sticky top-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-6", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-white", children: "Filtros" }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: clearFilters,
                  className: "text-sm text-red-400 hover:text-red-300",
                  children: "Limpiar todo"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white mb-3", children: "Disponibilidad" }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxs("label", { className: "flex items-center text-gray-300", children: [
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "radio",
                      name: "availability",
                      checked: filters.available === null,
                      onChange: () => handleFilterChange("available", null),
                      className: "mr-2"
                    }
                  ),
                  "Todos"
                ] }),
                /* @__PURE__ */ jsxs("label", { className: "flex items-center text-gray-300", children: [
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "radio",
                      name: "availability",
                      checked: filters.available === true,
                      onChange: () => handleFilterChange("available", true),
                      className: "mr-2"
                    }
                  ),
                  "Disponibles"
                ] }),
                /* @__PURE__ */ jsxs("label", { className: "flex items-center text-gray-300", children: [
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "radio",
                      name: "availability",
                      checked: filters.available === false,
                      onChange: () => handleFilterChange("available", false),
                      className: "mr-2"
                    }
                  ),
                  "Vendidos"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white mb-3", children: "Marca" }),
              /* @__PURE__ */ jsxs(
                "select",
                {
                  value: filters.brand,
                  onChange: (e) => handleFilterChange("brand", e.target.value),
                  className: "w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-2",
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "", children: "Todas las marcas" }),
                    uniqueBrands.map((brand) => /* @__PURE__ */ jsx("option", { value: brand, children: brand }, brand))
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white mb-3", children: "Precio" }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("label", { className: "block text-sm text-gray-400 mb-1", children: [
                    "Mínimo: ",
                    formatPrice(filters.priceRange.min)
                  ] }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "range",
                      min: priceRange.min,
                      max: priceRange.max,
                      step: "1000000",
                      value: filters.priceRange.min,
                      onChange: (e) => {
                        const newMin = parseInt(e.target.value);
                        handleFilterChange("priceRange", {
                          ...filters.priceRange,
                          min: newMin
                        });
                      },
                      className: "w-full accent-red-400"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("label", { className: "block text-sm text-gray-400 mb-1", children: [
                    "Máximo: ",
                    formatPrice(filters.priceRange.max)
                  ] }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "range",
                      min: priceRange.min,
                      max: priceRange.max,
                      step: "1000000",
                      value: filters.priceRange.max,
                      onChange: (e) => {
                        const newMax = parseInt(e.target.value);
                        handleFilterChange("priceRange", {
                          ...filters.priceRange,
                          max: newMax
                        });
                      },
                      className: "w-full accent-red-400"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-500", children: [
                  "Rango disponible: ",
                  formatPrice(priceRange.min),
                  " -",
                  " ",
                  formatPrice(priceRange.max)
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white mb-3", children: "Combustible" }),
              /* @__PURE__ */ jsxs(
                "select",
                {
                  value: filters.fuelType,
                  onChange: (e) => handleFilterChange("fuelType", e.target.value),
                  className: "w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-2",
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "", children: "Todos" }),
                    /* @__PURE__ */ jsx("option", { value: "Bencina", children: "Bencina" }),
                    /* @__PURE__ */ jsx("option", { value: "Diesel", children: "Diesel" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white mb-3", children: "Transmisión" }),
              /* @__PURE__ */ jsxs(
                "select",
                {
                  value: filters.transmission,
                  onChange: (e) => handleFilterChange("transmission", e.target.value),
                  className: "w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-2",
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "", children: "Todas" }),
                    /* @__PURE__ */ jsx("option", { value: "Automático", children: "Automático" }),
                    /* @__PURE__ */ jsx("option", { value: "Manual", children: "Manual" }),
                    /* @__PURE__ */ jsx("option", { value: "Mecánico", children: "Mecánico" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white mb-3", children: "Kilometraje" }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("label", { className: "block text-sm text-gray-400 mb-1", children: [
                    "Mínimo: ",
                    formatNumber(filters.milesRange.min),
                    " km"
                  ] }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "range",
                      min: milesRange.min,
                      max: milesRange.max,
                      step: "10000",
                      value: filters.milesRange.min,
                      onChange: (e) => handleFilterChange("milesRange", {
                        ...filters.milesRange,
                        min: parseInt(e.target.value)
                      }),
                      className: "w-full accent-red-400"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("label", { className: "block text-sm text-gray-400 mb-1", children: [
                    "Máximo: ",
                    formatNumber(filters.milesRange.max),
                    " km"
                  ] }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "range",
                      min: milesRange.min,
                      max: milesRange.max,
                      step: "10000",
                      value: filters.milesRange.max,
                      onChange: (e) => handleFilterChange("milesRange", {
                        ...filters.milesRange,
                        max: parseInt(e.target.value)
                      }),
                      className: "w-full accent-red-400"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-500", children: [
                  "Rango disponible: ",
                  formatNumber(milesRange.min),
                  " -",
                  " ",
                  formatNumber(milesRange.max),
                  " km"
                ] })
              ] })
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "lg:w-3/4", children: paginatedVehicles.length === 0 ? /* @__PURE__ */ jsx("div", { className: "text-center py-12", children: /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-lg", children: "No se encontraron vehículos con los filtros seleccionados." }) }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8", children: paginatedVehicles.map((vehicle) => /* @__PURE__ */ jsx(VehicleCard, { vehicle }, vehicle.id)) }),
        totalPages > 1 && /* @__PURE__ */ jsxs("div", { className: "flex justify-center items-center space-x-2", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setCurrentPage((prev) => Math.max(prev - 1, 1)),
              disabled: currentPage === 1,
              className: "px-4 py-2 bg-gray-800 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700",
              children: "Anterior"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "flex space-x-1", children: Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            let pageNumber;
            if (totalPages <= 5) {
              pageNumber = i + 1;
            } else if (currentPage <= 3) {
              pageNumber = i + 1;
            } else if (currentPage >= totalPages - 2) {
              pageNumber = totalPages - 4 + i;
            } else {
              pageNumber = currentPage - 2 + i;
            }
            return /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setCurrentPage(pageNumber),
                className: `px-3 py-2 rounded-lg ${currentPage === pageNumber ? "bg-red-400 text-black font-bold" : "bg-gray-800 text-white hover:bg-gray-700"}`,
                children: pageNumber
              },
              pageNumber
            );
          }) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setCurrentPage((prev) => Math.min(prev + 1, totalPages)),
              disabled: currentPage === totalPages,
              className: "px-4 py-2 bg-gray-800 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700",
              children: "Siguiente"
            }
          )
        ] })
      ] }) })
    ] })
  ] });
}

const $$Catalogo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cat\xE1logo - Somos Expertos en veh\xEDculos 4x4", "description": "Cat\xE1logo de veh\xEDculos 4x4", "image": "/frontis-autoloa.webp" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "CatalogoComponent", Catalogo, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/matias/Repositorios/berlinautomotora/src/components/catalogo/Catalogo", "client:component-export": "Catalogo" })} </main> ` })}`;
}, "/Users/matias/Repositorios/berlinautomotora/src/pages/catalogo.astro", void 0);

const $$file = "/Users/matias/Repositorios/berlinautomotora/src/pages/catalogo.astro";
const $$url = "/catalogo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Catalogo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
