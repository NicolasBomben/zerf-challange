////se define la clase House que representa un alojamiento de tipo hotel.

import { Accommodation } from "./Accommodation";
import { HouseInfo } from "../../interfaces";

export class House extends Accommodation {
    private rooms: number;

    constructor(houseInfo: HouseInfo){
        super(houseInfo.address, `Casa/Departamento de ${houseInfo.rooms} ambientes`);
        this.rooms = houseInfo.rooms;
    }

    calculateCost(nights: number): number {
        const pricePerNight = this.getPricePerNight();
        return nights * pricePerNight;
    }

    private getPricePerNight(): number {
        if(this.rooms === 1) {
            return 15000; // monoambiente
        }else if(this.rooms >= 2 && this.rooms <= 4){
            return 30000; // entre 2 y 4 ambientes
        }else {
            return 50000; // mas de 4 ambientes
        }
    }

    getRooms(): number{
        return this.rooms;
    }
}