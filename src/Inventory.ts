import { Builder } from "./Builder";
import { Guitar } from "./Guiter";
import { GuitarSpec } from "./GuiterSpec";
import { Type } from "./Type";
import { Wood } from "./Wood";

export class Inventory {
  private guitars: Guitar[];

  constructor() {
    this.guitars = [];
  }

  public addGuitar(
    serialNumber: string,
    price: number,
    builder: Builder,
    model: string,
    type: Type,
    backWood: Wood,
    topWood: Wood
  ): void {
    const guitar = new Guitar(
      serialNumber,
      price,
      builder,
      model,
      type,
      backWood,
      topWood
    );
    this.guitars.push(guitar);
  }

  public getGuitar(serialNumber: string): Guitar | null {
    for (const guitar of this.guitars) {
      if (guitar.getSerialNumber() === serialNumber) {
        return guitar;
      }
    }
    return null;
  }

  public search(searchGuitar: GuitarSpec): Guitar[] | null {
    const matchingGuiter: any = [];
    for (const guitarobj of this.guitars) {
      // console.log(guitarobj);
      // console.log(guitarobj.getSpec().getBuilder());

      // Ignore serial number since that's unique
      // Ignore price since that's unique
      const guitar = guitarobj.getSpec();
      const builder = searchGuitar.getBuilder();
      if (builder && builder !== "" && builder !== guitar.getBuilder()) {
        continue;
      }
      const model = searchGuitar.getModel();
      if (model && model !== "" && model !== guitar.getModel()) {
        continue;
      }
      const type = searchGuitar.getType();
      if (type && type !== "" && type !== guitar.getType()) {
        continue;
      }
      const backWood = searchGuitar.getBackWood();
      if (backWood && backWood !== "" && backWood !== guitar.getBackWood()) {
        continue;
      }
      const topWood = searchGuitar.getTopWood();
      if (topWood && topWood !== "" && topWood !== guitar.getTopWood()) {
        continue;
      }
      matchingGuiter.push(guitarobj);
      return matchingGuiter;
    }
    return matchingGuiter;
  }
}
