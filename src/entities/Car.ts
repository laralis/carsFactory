import { v4 as uuid } from "uuid";

export abstract class Car {
  private id: string;
  private name: string = "";
  private mileage: number = 0;
  protected gasAmount: number = 0;
  protected static count: number = 0;

  constructor(name: string, gasAmount: number, mileage: number) {
    this.name = name;
    this.gasAmount = gasAmount;
    this.mileage = mileage;
    this.id = uuid();
    Car.count++;
  }
  static getCount() {
    return Car.count;
  }
  addGas(amount: number) {
    if (amount > 0) {
      this.gasAmount += amount;
    } else {
      throw new Error("A quantidade de gasolina deve ser maior que 0");
    }
  }
  toString(){
    return `Nome: ${this.name} Milhagem: ${this.mileage} Gasolina: ${this.gasAmount}`
  }
}
