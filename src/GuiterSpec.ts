import { Builder, getBuilderName } from "./Builder";
import { Type, getTypeName } from "./Type";
import { Wood, getWoodName } from "./Wood";

export class GuitarSpec {
  private builder: Builder;
  private model: string;
  private type: Type;
  private backWood: Wood;
  private topWood: Wood;

  constructor(
    builder: Builder,
    model: string,
    type: Type,
    backWood: Wood,
    topWood: Wood
  ) {
    this.builder = builder;
    this.model = model;
    this.type = type;
    this.backWood = backWood;
    this.topWood = topWood;
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
