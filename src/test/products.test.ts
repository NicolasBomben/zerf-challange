import { describe, it, expect } from 'vitest';
import { Flight } from '../models/products/Flight';
import { Hotel } from '../models/products/Hotel';
import { House } from '../models/products/House';
import { Complex } from '../models/products/Complex';

describe('Productos - Tests Esenciales', () => {
  it('deberia tener el precio correcto para vuelos', () => {
    const flight = new Flight({
      departureDate: new Date('2024-01-15'),
      airline: 'Test Airline',
      price: 50000
    });
    expect(flight.getPrice()).toBe(50000);
  });

  it('deberia calcular precio de hotel: estrellas * noches * 10000', () => {
    const hotel = new Hotel({
      address: 'Hotel de Prueba',
      name: 'Plaza',
      stars: 4,
      type: 'hotel'
    });
    expect(hotel.calculateCost(3)).toBe(120000); // 4 * 3 * 10000
  });

  it('deberia calcular precio de casa segun cantidad de ambientes', () => {
  
    const mono = new House({ address: 'Prueba', rooms: 1, type: 'house' });
    expect(mono.calculateCost(1)).toBe(15000);
    
      
    const casa = new House({ address: 'Prueba', rooms: 3, type: 'house' });
    expect(casa.calculateCost(1)).toBe(30000);
    
  });

  it('deberia aplicar descuentos correctamente en complejos', () => {
    const complex = new Complex({
      address: 'Complejo de Prueba',
      type: 'complex',
      houses: [
        { address: 'Casa 1', rooms: 2, type: 'house' },
        { address: 'Casa 2', rooms: 3, type: 'house' }  
      ]
    });
    
    // Base: 60k, con 2 casas 20% descuento = 48k
    expect(complex.calculateCost(1)).toBe(48000);
  });
});