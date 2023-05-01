import { Builder, getBuilderName } from "./Builder";
import { Type, getTypeName } from "./Type";
import { Wood, getWoodName } from "./Wood";

export class Guitar {
  private serialNumber: string;
  private builder: Builder;
  private model: string;
  private type: Type;
  private backWood: Wood;
  private topWood: Wood;
  private price: number;

  constructor(
    serialNumber: string,
    price: number,
    builder: Builder,
    model: string,
    type: Type,
    backWood: Wood,
    topWood: Wood
  ) {
    this.serialNumber = serialNumber;
    this.price = price;
    this.builder = builder;
    this.model = model;
    this.type = type;
    this.backWood = backWood;
    this.topWood = topWood;
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

  getBuilder(): string {
    return getBuilderName(this.builder);
  }

  getModel(): string {
    return this.model;
  }

  getType(): string {
    return getTypeName(this.type);
  }

  getBackWood(): string {
    return getWoodName(this.backWood);
  }

  getTopWood(): string {
    return getWoodName(this.topWood);
  }
}
