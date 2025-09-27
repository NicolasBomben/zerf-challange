//en este archivo estoy definiendo interfaces y tipos que se relacionan con productos y servicios.
import { User } from '../models/User';

export interface IProduct {
  getId(): string;
  getPrice(): number;
  getDescription(): string;
}

export interface IPurchasable extends IProduct {
  purchase(user: User): boolean;
}

export interface IAcommodation extends IProduct {
  getAddress(): string;
  calculateCost(nights: number): number;
}

export type AccommodationType = 'hotel' | 'house' | 'complex' ;

export interface FlightInfo {
  departureDate: Date;
  returnDate?: Date;
  airline: string;
  price: number;
}

export interface AccommodationInfo {
  address: string;
  type: AccommodationType;
}

export interface HotelInfo extends AccommodationInfo {
  name: string;
  stars: number;
  type: 'hotel';
}

export interface HouseInfo extends AccommodationInfo {
  rooms: number;
  type: 'house';
}

export interface ComplexInfo extends AccommodationInfo {
  houses: HouseInfo[];
  type: 'complex';
}
