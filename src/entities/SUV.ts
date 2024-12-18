import { Car } from "./Car";

export class SUV extends Car {
  private maxLoad: number = 0;
  constructor(
    name: string,
    gasAmount: number,
    mileage: number,
    maxLoad: number
  ) {
    super(name, gasAmount, mileage);
    this.maxLoad = maxLoad;
  }
}
