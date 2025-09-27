//esta clase representa un producto compuesto por otros productos.

import { Product } from './Product';
import { IProduct } from '../../interfaces';

export class Package extends Product {
    // coleccion de procutos( vuelos, alojamientos u otros paquetes.)
  private products: IProduct[];

  constructor(products: IProduct[], description?: string) {
    super(description || `Paquete con ${products.length} productos`);
    this.products = [...products];
  }

  getPrice(): number {
    return this.products.reduce((total, product) => total + product.getPrice(), 0);
  }


  //nuevamente con el spread retorno una copia para proteger.
  getProducts(): IProduct[] {
    return [...this.products];
  }

  addProduct(product: IProduct): void {
    this.products.push(product);
    this.description = `Paquete con ${this.products.length} productos`;
  }

  // eliminio producto por ID. devuelvo true si se elimino correctamente. y si se elimino se actualiza la desc.
  removeProduct(productId: string): boolean {
    const initialLength = this.products.length;
    this.products = this.products.filter(product => product.getId() !== productId);
    
    if (this.products.length < initialLength) {
      this.description = `Paquete con ${this.products.length} productos`;
      return true;
    }
    return false;
  }

  getProductCount(): number {
    return this.products.length;
  }
}