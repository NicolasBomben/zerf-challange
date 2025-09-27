//esta clase extiende de Product heredando su estructura. 
//Permite crear y manipular objetos que representan vuelos 
//con toda la informacion pedida y metodos para acceder a sus datos.

import { Product } from "./Product";
import { FlightInfo } from "../../interfaces";

export class Flight extends Product {
  private departureDate: Date;
  private returnDate?: Date;
  private airLine: string;
  private price: number;

  constructor(flightInfo: FlightInfo) {
    super(
      `Vuelo ${flightInfo.airline} - ${flightInfo.departureDate.toDateString()}`
    );
    this.departureDate = flightInfo.departureDate;
    this.returnDate = flightInfo.returnDate;
    this.airLine = flightInfo.airline;
    this.price = flightInfo.price;
  }

  getPrice(): number {
    return this.price;
  }

  getDepartureDate(): Date {
    return this.departureDate;
  }

  getReturnDate(): Date | undefined {
    return this.returnDate;
  }

  getAirline(): string {
    return this.airLine;
  }

  isRoundTrip(): boolean {
    return this.returnDate !== undefined;
  }
}
