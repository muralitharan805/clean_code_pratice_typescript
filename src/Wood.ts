export enum Wood {
  INDIAN_ROSEWOOD = "Indian Rosewood",
  BRAZILIAN_ROSEWOOD = "Brazilian Rosewood",
  MAHOGANY = "Mahogany",
  MAPLE = "Maple",
  COCOBOLO = "Cocobolo",
  CEDAR = "Cedar",
  ADIRONDACK = "Adirondack",
  ALDER = "Alder",
  SITKA = "Sitka",
}

export function getWoodName(wood: Wood): string {
  switch (wood) {
    case Wood.INDIAN_ROSEWOOD:
      return "Indian Rosewood";
    case Wood.BRAZILIAN_ROSEWOOD:
      return "Brazilian Rosewood";
    case Wood.MAHOGANY:
      return "Mahogany";
    case Wood.MAPLE:
      return "Maple";
    case Wood.COCOBOLO:
      return "Cocobolo";
    case Wood.CEDAR:
      return "Cedar";
    case Wood.ADIRONDACK:
      return "Adirondack";
    case Wood.ALDER:
      return "Alder";
    case Wood.SITKA:
      return "Sitka";
    default:
      return "unspecified";
  }
}
