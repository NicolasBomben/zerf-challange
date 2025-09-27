//esta clase extiende de products e implementa la interdaface IAcommodation.
//se establece una estructura comun para todos los alojamientos 
//y el metodo abstracto calculateCost para calcular el costo segun la cantidad de noches.
//permite crear diferentes tipos de alojamientos.

import { Product } from "./Product";
import { IAcommodation } from "../../interfaces";

export abstract class Accommodation extends Product implements IAcommodation {

    protected address: string;

    constructor(address: string, description: string){
        super(description);
        this.address = address;
    }

    getAddress(): string {
        return this.address;
    }

    abstract calculateCost(nights: number): number;

    getPrice(): number {

        //precio base de 1 noche, se puede sobreescribir.
        return this.calculateCost(1);
    }
}