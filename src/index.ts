import { Hatch } from "./entities/Hatch";
import { Car } from "./entities/Car";
import { Sedan } from "./entities/Sedan";
import { SUV } from "./entities/SUV";

const listCars = [
  new Sedan("Chevrolet Onix", 100, 120),
  new Hatch("Fiat Mobi", 100, 1230),
  new SUV("Toyota SW4", 100, 100, 1100),
];
const a = new Sedan("Chevrolet Onix", 100, 120);

function logVeiculos(array: Car[]) {
  array.forEach((i) => console.log(i.toString()));
}
function abastecerVeiculo(array: Car[], quantidade: number) {
  array.forEach((i) => i.addGas(quantidade));
}

function totalVeiculos() {
  console.log(Car.getCount());
}
function logRastreavel(car: Sedan) {
  console.log(car.logGasAmount());
}
logVeiculos(listCars);
abastecerVeiculo(listCars, 200);

totalVeiculos();
logVeiculos(listCars);
logRastreavel(listCars[0] as Sedan)
logRastreavel(a)

