import type { Datum } from "../../types/vehicule";
import { formatNameForURL, extractYearFromName } from "../../helpers/stringHelpers";
import { formatPrice } from "../../helpers/formatHelpers";

//icons
interface VehicleCardProps {
  readonly vehicle: Datum;
}

export function VehicleCard({ vehicle }: VehicleCardProps) {
  const formattedPrice = formatPrice(vehicle.price);
  const vehicleYear = extractYearFromName(vehicle.name);

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
      {/* Image Container */}
      <div className="relative overflow-hidden flex-shrink-0">
        <a href={`/vehiculos/${formatNameForURL(vehicle.name)}`}>
          <img
            src={vehicle.imageUrl}
            alt={vehicle.name}
            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </a>

        {/* Status Badge */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {vehicle.available ? (
            <>
              {vehicle.label && (
                <div className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold shadow-lg whitespace-nowrap">
                  {vehicle.label}
                </div>
              )}
              <div className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
                ✓ Disponible
              </div>
            </>
          ) : (
            <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
              ✕ Vendido
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        {/* Title */}
        <div className="mb-3 flex-shrink-0">
          <h3 className="font-semibold text-gray-900 text-sm leading-tight line-clamp-2 min-h-[2.5rem]">
            <a
              href={`/vehiculos/${formatNameForURL(vehicle.name)}`}
              className="hover:text-gray-700 transition-colors"
            >
              {vehicle.name}
            </a>
          </h3>
        </div>

        {/* Vehicle Details */}
        <div className="mb-4 flex-1">
          <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
            {vehicleYear && (
              <div className="flex items-center space-x-1">
                <span className="text-gray-400">📅</span>
                <span className="font-medium truncate">{vehicleYear}</span>
              </div>
            )}
            <div className="flex items-center space-x-1">
              <span className="text-gray-400">🚗</span>
              <span className="truncate">{vehicle.miles?.toLocaleString()} km</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-gray-400">⛽</span>
              <span className="truncate">{vehicle.fuelType}</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-gray-400">⚙️</span>
              <span className="truncate">{vehicle.transmission}</span>
            </div>
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100">
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-500 mb-1">Precio</p>
            <p className="text-sm font-bold text-gray-900 truncate">
              {formattedPrice}
            </p>
          </div>

          {/* CTA Button */}
          <a
            href={`/vehiculos/${formatNameForURL(vehicle.name)}`}
            className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg text-xs font-medium transition-colors duration-200 shadow-sm hover:shadow-md flex-shrink-0 ml-2"
          >
            Ver más
          </a>
        </div>
      </div>
    </div>
  );
}
