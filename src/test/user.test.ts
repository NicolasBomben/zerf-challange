import { describe, it, expect } from 'vitest';
import { User } from '../models/User';
import { Flight } from '../models/products/Flight';
import { InsufficientFundsException } from '../exceptions/InsufficientFundsExc';

describe('Usuario - Tests Esenciales', () => {
  it('deberia poder comprar cuando tiene presupuesto suficiente', () => {
    const user = new User('Juan', 100000);
    const flight = new Flight({
      departureDate: new Date('2024-01-15'),
      airline: 'Arolineas Argetinas',
      price: 50000
    });

    user.purchaseProduct(flight);
    
    expect(user.getBudget()).toBe(50000);
    expect(user.getPurchaseCount()).toBe(1);
  });

  it('deberia lanzar excepción cuando no tiene fondos suficientes', () => {
    const user = new User('Pedro', 30000);
    const flight = new Flight({
      departureDate: new Date('2024-01-15'),
      airline: 'Aerolienas Argentinas',
      price: 50000
    });

    expect(() => user.purchaseProduct(flight)).toThrow(InsufficientFundsException);
    expect(user.getBudget()).toBe(30000); // No cambió
  });

  it('deberia verificar correctamente si puede permitirse un producto', () => {
    const user = new User('Ana', 40000);
    const barato = new Flight({ departureDate: new Date(), airline: 'Económica', price: 30000 });
    const caro = new Flight({ departureDate: new Date(), airline: 'Premium', price: 60000 });

    expect(user.canAfford(barato)).toBe(true);
    expect(user.canAfford(caro)).toBe(false);
  });
});