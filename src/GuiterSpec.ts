import { Builder, getBuilderName } from "./Builder";
import { Type, getTypeName } from "./Type";
import { Wood, getWoodName } from "./Wood";

export class GuitarSpec {
  private builder: Builder;
  private model: string;
  private type: Type;
  private backWood: Wood;
  private topWood: Wood;
  private numberString: number;

  constructor(
    builder: Builder,
    model: string,
    type: Type,
    numberString: number,
    backWood: Wood,
    topWood: Wood
  ) {
    this.builder = builder;
    this.model = model;
    this.type = type;
    this.backWood = backWood;
    this.topWood = topWood;
    this.numberString = numberString;
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
  getNumStrings() {
    return this.numberString;
  }

  matches(guitarSpec: GuitarSpec): boolean {
    if (this.builder != guitarSpec.builder) return false;
    if (this.type != guitarSpec.type) return false;
    if (this.numberString != guitarSpec.numberString) return false;
    if (this.backWood != guitarSpec.backWood) return false;
    if (this.topWood != guitarSpec.topWood) return false;
    if (
      this.model != null &&
      this.model != "" &&
      !(this.model.toLowerCase() == guitarSpec.model.toLowerCase())
    )
      return false;

    return true;
  }
}
