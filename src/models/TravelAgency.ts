//en esta clase implemento las funcionalidades adicionales.
//Funcionalidades adicionales
//1. Ordenar usuarios de mayor a menor según la cantidad de productos
//adquiridos.
//2. BONUS A partir del presupuesto de un usuario y la lista de productos
//disponibles, mostrar cuáles podría comprar.

import { User } from './User';
import { IProduct } from '../interfaces';

export class TravelAgency {
  private users: User[];
  private availableProducts: IProduct[];

  constructor() {
    this.users = [];
    this.availableProducts = [];
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  addProduct(product: IProduct): void {
    this.availableProducts.push(product);
  }

  getUsers(): User[] {
    return [...this.users];
  }

  getAvailableProducts(): IProduct[] {
    return [...this.availableProducts];
  }

  //ordenar ususrios de mayor a menor según la cantidad de productos.
  getUsersSortedByPurchases(): User[] {
    return [...this.users].sort((a, b) => b.getPurchaseCount() - a.getPurchaseCount());
  }

  // mostrar productos que un usuario puede comprar.
  getAffordableProducts(user: User): IProduct[] {
    return this.availableProducts.filter(product => user.canAfford(product));
  }
}