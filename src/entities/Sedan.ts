import { Traceble } from "../interfaces/Traceble";
import { Car } from "./Car";

export class Sedan extends Car implements Traceble {
  logGasAmount() {
    return `${this.gasAmount}`;
  }
}
