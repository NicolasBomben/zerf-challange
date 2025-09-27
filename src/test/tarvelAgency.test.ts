import { describe, it, expect } from "vitest";
import { TravelAgency } from "../models/TravelAgency";
import { User } from "../models/User";
import { Flight } from "../models/products/Flight";

describe("Agencia de Viajes - Tests Esenciales", () => {
  it("deberia ordenar usuarios por cantidad de productos adquiridos", () => {
    const agency = new TravelAgency();
    const user1 = new User("Usuario1", 200000);
    const user2 = new User("Usuario2", 200000);
    const user3 = new User("Usuario3", 200000);

    const flight1 = new Flight({
      departureDate: new Date(),
      airline: "aeroliena 1",
      price: 30000,
    });
    const flight2 = new Flight({
      departureDate: new Date(),
      airline: "aerolinea 2",
      price: 35000,
    });

    // User1: 2 compras
    // User2: 1 compra
    // User3: 0 compras
    user1.purchaseProduct(flight1);
    user1.purchaseProduct(flight2);
    user2.purchaseProduct(flight1);

    agency.addUser(user1);
    agency.addUser(user2);
    agency.addUser(user3);

    const sorted = agency.getUsersSortedByPurchases();

    expect(sorted[0].getName()).toBe("Usuario1"); // 2 compras
    expect(sorted[1].getName()).toBe("Usuario2"); // 1 compra
    expect(sorted[2].getName()).toBe("Usuario3"); // 0 compras
  });

  it("deberia devolver productos que el usuario puede comprar", () => {
    const agency = new TravelAgency();
    const user = new User("Juan", 40000);

    const barato = new Flight({
      departureDate: new Date(),
      airline: "economica",
      price: 25000,
    });
    const caro = new Flight({
      departureDate: new Date(),
      airline: "premium",
      price: 60000,
    });

    agency.addProduct(barato);
    agency.addProduct(caro);

    const affordable = agency.getAffordableProducts(user);

    expect(affordable).toHaveLength(1);
    expect(affordable[0].getId()).toBe(barato.getId());
  });

  it("deberia proporcionar estadisticas correctas de la agencia", () => {
    const agency = new TravelAgency();
    const user1 = new User("U1", 100000);
    const user2 = new User("U2", 100000);
    const flight = new Flight({
      departureDate: new Date(),
      airline: "arolienas argentinas",
      price: 30000,
    });

    user1.purchaseProduct(flight); // 1 compra total

    agency.addUser(user1);
    agency.addUser(user2);
    agency.addProduct(flight);
  });
});
