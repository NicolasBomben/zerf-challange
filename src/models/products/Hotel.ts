//se define la clase Hotel que representa un alojamiento de tipo hotel.


import { Accommodation } from "./Accommodation";
import { HotelInfo } from "../../interfaces";

export class Hotel extends Accommodation {
  private name: string;
  private stars: number;

  //represento el precio base por estrella.
  private static readonly PRICE_PER_STAR = 10000;

  constructor(hotelInfo: HotelInfo) {
    super(
      hotelInfo.address,
      `Hotel ${hotelInfo.name}, ${hotelInfo.stars} estrellas`
    );
    this.name = hotelInfo.name;
    this.stars = hotelInfo.stars;
  }

  calculateCost(nights: number): number {
    return nights * this.stars * Hotel.PRICE_PER_STAR;
  }

  getName(): string {
    return this.name;
  }

  getStars(): number {
    return this.stars;
  }
}
