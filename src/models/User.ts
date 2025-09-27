//la calse User representa un cliente que puede comprar productos.
//Debe poder intentar contratar cualquier producto:
//1. Si el presupuesto cubre el costo, el producto se agrega a sus compras y
//el presupuesto se reduce.
//2. Sino, recibir una notificación de falta de fondos.

import { IProduct } from '../interfaces';
import { InsufficientFundsException } from '../exceptions/InsufficientFundsExc';

export interface Purchase {
  product: IProduct;
  purchaseDate: Date;
  price: number;
}

export class User {
  private name: string;
  private budget: number;
  private purchaseHistory: Purchase[];

  constructor(name: string, initialBudget: number) {
    this.name = name;
    this.budget = initialBudget;
    this.purchaseHistory = [];
  }

  getName(): string {
    return this.name;
  }

  getBudget(): number {
    return this.budget;
  }

  getPurchaseHistory(): Purchase[] {
    return [...this.purchaseHistory];
  }

  getPurchaseCount(): number {
    return this.purchaseHistory.length;
  }

  canAfford(product: IProduct): boolean {
    return this.budget >= product.getPrice();
  }

  purchaseProduct(product: IProduct): boolean {
    const price = product.getPrice();
    
    if (!this.canAfford(product)) {
      throw new InsufficientFundsException(price, this.budget);
    }

    this.budget -= price;
    this.purchaseHistory.push({
      product,
      purchaseDate: new Date(),
      price
    });

    return true;
  }

  getTotalSpent(): number {
    return this.purchaseHistory.reduce((total, purchase) => total + purchase.price, 0);
  }

  addBudget(amount: number): void {
    if (amount > 0) {
      this.budget += amount;
    }
  }
}