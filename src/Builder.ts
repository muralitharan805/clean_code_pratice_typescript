export enum Builder {
  FENDER = "Fender",
  MARTIN = "Martin",
  GIBSON = "Gibson",
  COLLINGS = "Collings",
  OLSON = "Olson",
  RYAN = "Ryan",
  PRS = "PRS",
  ANY = "Unspecified",
}
export function getBuilderName(builder: Builder): string {
  switch (builder) {
    case Builder.FENDER:
      return "Fender";
    case Builder.MARTIN:
      return "Martin";
    case Builder.GIBSON:
      return "Gibson";
    case Builder.COLLINGS:
      return "Collings";
    case Builder.OLSON:
      return "Olson";
    case Builder.RYAN:
      return "Ryan";
    case Builder.PRS:
      return "PRS";
    case Builder.ANY:
      return "Unspecified";

    default:
      return "unspecified";
  }
}
