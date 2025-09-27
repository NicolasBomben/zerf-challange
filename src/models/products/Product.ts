//clase abastracta product la cual implemente la interface IProduct. Lo que busco es que esta clase sirva como base para todos los productos.


import { IProduct } from "../../interfaces";

export abstract class Product implements IProduct {

    protected id: string;
    protected description: string;

    constructor(description: string) {
        this.id = this.generateId();
        this.description = description;
    }

    getId(): string {
        return this.id;
    }

    getDescription(): string {
        return this.description;
    }

    abstract getPrice(): number;

    private generateId(): string {
        return Math.random().toString(36).substr(2,9);
    }
}