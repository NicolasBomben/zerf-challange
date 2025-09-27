import { Accommodation } from "./Accommodation";
import { House } from "./House";
import { ComplexInfo, HouseInfo } from "../../interfaces";

export class Complex extends Accommodation {
  private houses: House[];
  private static readonly MAX_DISCOUNT = 0.5; // 50%
  private static readonly DISCOUNT_PER_HOUSE = 0.1; // 10%

  constructor(complexInfo: ComplexInfo) {
    super(
      complexInfo.address,
      `Complejo con ${complexInfo.houses.length} casas`
    );
    this.houses = complexInfo.houses.map((houseInfo: HouseInfo) => new House(houseInfo));
  }

  // calculo todo el complejo
  calculateCost(nights: number): number {
    const totalUnits = this.houses.length;
    const basePrice = this.houses.reduce(
      (total, house) => total + house.calculateCost(nights),
      0
    );

    //Si se alquilan todas las unidades, se
    //aplica el 10% de descuento por cada una con un descuento acumulado
    //máximo del 50% sobre el precio total.
    const discount = Math.min(
      totalUnits * Complex.DISCOUNT_PER_HOUSE,
      Complex.MAX_DISCOUNT
    );
    return basePrice * (1 - discount);
  }

  //Si se alquila una sola, se cobra como una casa normal.
  calculateSingleHouseCost(houseIndex: number, nights: number): number {
    if (houseIndex < 0 || houseIndex >= this.houses.length) {
      throw new Error("Índice de casa inválido");
    }
    return this.houses[houseIndex].calculateCost(nights);
  }

  getHouses(): House[] {
    // con el operador spread devuelvo una copa del arreglo. asi se protege el original.
    return [...this.houses];
  }

  getHouseCount(): number {
    return this.houses.length;
  }
}
