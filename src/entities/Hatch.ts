import { Car } from "./Car";

export class Hatch extends Car {
  addGas(amount: number): void {
    amount -= (amount * 1) / 100;
    this.gasAmount += amount;
  }
}
