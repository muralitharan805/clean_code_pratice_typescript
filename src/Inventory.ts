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
    guitarSpec: GuitarSpec
  ): void {
    const guitar = new Guitar(serialNumber, price, guitarSpec);
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
      if (guitar.matches(searchGuitar)) matchingGuiter.push(guitarobj);
    }
    return matchingGuiter;
  }
}
