export function formatNameForURL(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
}

/**
 * Extrae el año del nombre del vehículo
 * @param name - El nombre del vehículo
 * @returns El año como número o null si no se encuentra
 */
export function extractYearFromName(name: string): number | null {
  // Buscar un año de 4 dígitos (1900-2099) al inicio del nombre
  const yearMatch = name.match(/^(19|20)\d{2}/);
  if (yearMatch) {
    return parseInt(yearMatch[0], 10);
  }
  
  // Buscar un año de 4 dígitos en cualquier parte del nombre
  const yearMatchAnywhere = name.match(/\b(19|20)\d{2}\b/);
  if (yearMatchAnywhere) {
    return parseInt(yearMatchAnywhere[0], 10);
  }
  
  return null;
}
