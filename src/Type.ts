export enum Type {
  ACOUSTIC = "acoustic",
  ELECTRIC = "electric",
  UNSPECIFIED = "unspecified",
}

export function getTypeName(type: Type): string {
  switch (type) {
    case Type.ACOUSTIC:
      return "acoustic";
    case Type.ELECTRIC:
      return "electric";
    default:
      return "unspecified";
  }
}
