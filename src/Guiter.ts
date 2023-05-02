import { Builder, getBuilderName } from "./Builder";
import { GuitarSpec } from "./GuiterSpec";
import { Type, getTypeName } from "./Type";
import { Wood, getWoodName } from "./Wood";

export class Guitar {
  private serialNumber: string;

  private price: number;

  guiterSpec: GuitarSpec;
  constructor(serialNumber: string, price: number, guiterSpec: GuitarSpec) {
    this.serialNumber = serialNumber;
    this.price = price;
    this.guiterSpec = guiterSpec;
  }

  getSerialNumber(): string {
    return this.serialNumber;
  }

  getPrice(): number {
    return this.price;
  }

  setPrice(newPrice: number): void {
    this.price = newPrice;
  }

  getSpec(): GuitarSpec {
    return this.guiterSpec;
  }
}
