import { useState, useEffect, useMemo } from "react";
import { VehicleCard } from "../product-card/ProductCard";
import { fetchAllVehicles } from "../../lib/fetchSliders";
import { formatPrice } from "../../helpers/formatHelpers";
import { parsePrice } from "../../helpers/parcePrice";
import type { Datum } from "../../types/vehicule";

interface FilterState {
  brand: string;
  priceRange: { min: number; max: number };
  fuelType: string;
  transmission: string;
  milesRange: { min: number; max: number };
  available: boolean | null;
}

const ITEMS_PER_PAGE = 12;

export function Catalogo() {
  const [vehicles, setVehicles] = useState<Datum[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false); // Controls the off-canvas filter panel

  const [filters, setFilters] = useState<FilterState>({
    brand: "",
    priceRange: { min: 0, max: 100000000 },
    fuelType: "",
    transmission: "",
    milesRange: { min: 0, max: 500000 },
    available: null,
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

  // --- Memoized calculations for filters (no changes needed here) ---
  const uniqueBrands = useMemo(() => [...new Set(vehicles.map((v) => v.brand))].sort(), [vehicles]);
  const priceRange = useMemo(() => {
    if (vehicles.length === 0) return { min: 0, max: 100000000 };
    const prices = vehicles.map((v) => parsePrice(v.price)).filter((p) => !isNaN(p) && p > 0);
    if (prices.length === 0) return { min: 0, max: 100000000 };
    return { min: Math.min(...prices), max: Math.max(...prices) };
  }, [vehicles]);
  const milesRange = useMemo(() => {
    if (vehicles.length === 0) return { min: 0, max: 500000 };
    const miles = vehicles.map((v) => v.miles).filter((m) => !isNaN(m));
    return { min: Math.min(...miles), max: Math.max(...miles) };
  }, [vehicles]);
  
  // --- Effect to initialize filter ranges (no changes needed here) ---
  useEffect(() => {
    if (vehicles.length > 0) {
      setFilters((prev) => ({
        ...prev,
        priceRange: { min: priceRange.min, max: priceRange.max },
        milesRange: { min: milesRange.min, max: milesRange.max },
      }));
    }
  }, [vehicles.length, priceRange.min, priceRange.max, milesRange.min, milesRange.max]);

  // --- Filtered vehicles logic (no changes needed here) ---
  const filteredVehicles = useMemo(() => {
    return vehicles.filter((vehicle) => {
      const price = parsePrice(vehicle.price);
      if (isNaN(price) || price <= 0) return false;
      return (
        (filters.brand === "" || vehicle.brand === filters.brand) &&
        price >= filters.priceRange.min && price <= filters.priceRange.max &&
        (filters.fuelType === "" || vehicle.fuelType === filters.fuelType) &&
        (filters.transmission === "" || vehicle.transmission === filters.transmission) &&
        vehicle.miles >= filters.milesRange.min && vehicle.miles <= filters.milesRange.max &&
        (filters.available === null || vehicle.available === filters.available)
      );
    });
  }, [vehicles, filters]);

  // --- Pagination logic and handlers (no changes needed here) ---
  const totalPages = Math.ceil(filteredVehicles.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedVehicles = filteredVehicles.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleFilterChange = (filterKey: keyof FilterState, value: any) => {
    setFilters((prev) => ({ ...prev, [filterKey]: value }));
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setFilters({
      brand: "",
      priceRange: { min: priceRange.min, max: priceRange.max },
      fuelType: "",
      transmission: "",
      milesRange: { min: milesRange.min, max: milesRange.max },
      available: null,
    });
    setCurrentPage(1);
  };

  const formatNumber = (num: number) => new Intl.NumberFormat("es-CL").format(num);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-400"></div>
      </div>
    );
  }

  // Helper component for filter panel content
  const FilterPanelContent = () => (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white">Filtros</h2>
        <button onClick={clearFilters} className="text-sm text-red-400 hover:text-red-300">Limpiar todo</button>
      </div>
      {/* Disponibilidad */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white mb-3">Disponibilidad</h3>
        <div className="space-y-2">
          <label className="flex items-center text-gray-300"><input type="radio" name="availability" checked={filters.available === null} onChange={() => handleFilterChange("available", null)} className="mr-2"/>Todos</label>
          <label className="flex items-center text-gray-300"><input type="radio" name="availability" checked={filters.available === true} onChange={() => handleFilterChange("available", true)} className="mr-2"/>Disponibles</label>
          <label className="flex items-center text-gray-300"><input type="radio" name="availability" checked={filters.available === false} onChange={() => handleFilterChange("available", false)} className="mr-2"/>Vendidos</label>
        </div>
      </div>
      {/* Marca */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white mb-3">Marca</h3>
        <select value={filters.brand} onChange={(e) => handleFilterChange("brand", e.target.value)} className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-2">
          <option value="">Todas las marcas</option>
          {uniqueBrands.map((brand) => (<option key={brand} value={brand}>{brand}</option>))}
        </select>
      </div>
      {/* Rango de precio */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white mb-3">Precio</h3>
        <div className="space-y-3">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Mínimo: {formatPrice(filters.priceRange.min)}</label>
            <input type="range" min={priceRange.min} max={priceRange.max} step="1000000" value={filters.priceRange.min} onChange={(e) => handleFilterChange("priceRange", {...filters.priceRange, min: parseInt(e.target.value)})} className="w-full accent-red-400"/>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Máximo: {formatPrice(filters.priceRange.max)}</label>
            <input type="range" min={priceRange.min} max={priceRange.max} step="1000000" value={filters.priceRange.max} onChange={(e) => handleFilterChange("priceRange", {...filters.priceRange, max: parseInt(e.target.value)})} className="w-full accent-red-400"/>
          </div>
        </div>
      </div>
      {/* Combustible y Transmisión */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Combustible</h3>
          <select value={filters.fuelType} onChange={(e) => handleFilterChange("fuelType", e.target.value)} className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-2">
            <option value="">Todos</option>
            <option value="Bencina">Bencina</option>
            <option value="Diesel">Diesel</option>
          </select>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Transmisión</h3>
          <select value={filters.transmission} onChange={(e) => handleFilterChange("transmission", e.target.value)} className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-2">
            <option value="">Todas</option>
            <option value="Automático">Automático</option>
            <option value="Manual">Manual</option>
            <option value="Mecánico">Mecánico</option>
          </select>
        </div>
      </div>
      {/* Kilometraje */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white mb-3">Kilometraje</h3>
        <div className="space-y-3">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Mínimo: {formatNumber(filters.milesRange.min)} km</label>
            <input type="range" min={milesRange.min} max={milesRange.max} step="10000" value={filters.milesRange.min} onChange={(e) => handleFilterChange("milesRange", {...filters.milesRange, min: parseInt(e.target.value)})} className="w-full accent-red-400"/>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Máximo: {formatNumber(filters.milesRange.max)} km</label>
            <input type="range" min={milesRange.min} max={milesRange.max} step="10000" value={filters.milesRange.max} onChange={(e) => handleFilterChange("milesRange", {...filters.milesRange, max: parseInt(e.target.value)})} className="w-full accent-red-400"/>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="md:w-7xl mx-auto px-4 py-24">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-dark mb-4">Catálogo de Vehículos</h1>
        <div className="flex justify-between items-center">
          <p className="text-gray-400">{filteredVehicles.length} vehículos encontrados</p>
          {/* BOTÓN DE FILTROS PARA MÓVIL */}
          <button onClick={() => setShowFilters(true)} className="lg:hidden bg-red-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" /></svg>
            <span>Filtros</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* --- FILTROS --- */}
        {/* 1. Sidebar para Desktop (visible en lg y superior) */}
        <div className="hidden lg:block lg:w-1/4">
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 sticky top-24">
            <FilterPanelContent />
          </div>
        </div>

        {/* 2. Off-canvas para Móvil (controlado por showFilters) */}
        <div className={`fixed top-0 left-0 h-full w-full z-50 transform transition-transform duration-300 ease-in-out ${showFilters ? "translate-x-0" : "-translate-x-full"} lg:hidden`}>
          <div className="absolute top-0 left-0 h-full w-full bg-black/50" onClick={() => setShowFilters(false)}></div>
          <div className="relative h-full w-4/5 max-w-sm bg-gray-900 p-6 border-r border-gray-800 overflow-y-auto">
            <button onClick={() => setShowFilters(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <FilterPanelContent />
          </div>
        </div>
        
        {/* --- GRID DE PRODUCTOS --- */}
        <div className="lg:w-3/4">
          {paginatedVehicles.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-md">
              <p className="text-gray-500 text-lg">No se encontraron vehículos con los filtros seleccionados.</p>
              <button onClick={clearFilters} className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Limpiar Filtros</button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                {paginatedVehicles.map((vehicle) => (<VehicleCard key={vehicle.id} vehicle={vehicle} />))}
              </div>

              {/* Paginación */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-2">
                  <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} disabled={currentPage === 1} className="px-4 py-2 bg-gray-800 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700">Anterior</button>
                  <div className="flex space-x-1">
                    {Array.from({ length: totalPages }).map((_, i) => i + 1).map(p => (
                      <button key={p} onClick={() => setCurrentPage(p)} className={`px-3 py-2 rounded-lg hidden sm:block ${currentPage === p ? 'bg-red-400 text-black font-bold' : 'bg-gray-800 text-white hover:bg-gray-700'}`}>{p}</button>
                    ))}
                    <span className="px-3 py-2 rounded-lg sm:hidden bg-red-400 text-black font-bold">{currentPage} / {totalPages}</span>
                  </div>
                  <button onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages} className="px-4 py-2 bg-gray-800 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700">Siguiente</button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}