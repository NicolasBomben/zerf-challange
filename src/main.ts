import { TravelAgency } from "./models/TravelAgency";
import { User } from "./models/User";
import { Flight } from "./models/products/Flight";
import { Hotel } from "./models/products/Hotel";
import { House } from "./models/products/House";
import { Complex } from "./models/products/Complex";
import { Package } from "./models/products/Package";
import { InsufficientFundsException } from "./exceptions/InsufficientFundsExc";

// Demo de funcionamiento
function runDemo() {
  console.log("=== DEMO TRAVEL AGENCY ===\n");

  // Crear agencia
  const agency = new TravelAgency();

  // Crear usuarios
  const user1 = new User("Juan Pérez", 150000);
  const user2 = new User("María García", 80000);
  const user3 = new User("Carlos López", 200000);

  agency.addUser(user1);
  agency.addUser(user2);
  agency.addUser(user3);

  // Crear productos
  const flight1 = new Flight({
    departureDate: new Date("2024-03-15"),
    returnDate: new Date("2024-03-22"),
    airline: "Aerolíneas Argentinas",
    price: 75000,
  });

  const flight2 = new Flight({
    departureDate: new Date("2024-04-10"),
    airline: "Fly bondy",
    price: 45000,
  });

  const hotel = new Hotel({
    address: "Av 9 de julio, Buenos Aires",
    name: "Hotel 123",
    stars: 4,
    type: "hotel",
  });

  const house = new House({
    address: "Calle 123, Buenos Aires",
    rooms: 3,
    type: "house",
  });

  const complex = new Complex({
    address: "Santa Rosa - complejo mis cabañas",
    type: "complex",
    houses: [
      { address: "Casa 1", rooms: 2, type: "house" },
      { address: "Casa 2", rooms: 3, type: "house" },
      { address: "Casa 3", rooms: 4, type: "house" },
    ],
  });

  // Crear paquete
  const packageProduct = new Package([flight1, hotel], "Paquete Buenos Aires");

  // Agregar productos a la agencia
  agency.addProduct(flight1);
  agency.addProduct(flight2);
  agency.addProduct(hotel);
  agency.addProduct(house);
  agency.addProduct(complex);
  agency.addProduct(packageProduct);

  console.log("1. PRODUCTOS DISPONIBLES:");
  agency.getAvailableProducts().forEach((product) => {
    console.log(`- ${product.getDescription()}: $${product.getPrice()}`);
  });

  console.log("\n2. COMPRAS DE USUARIOS:");

  try {
    // Juan compra vuelo y hotel
    user1.purchaseProduct(flight1);
    console.log(` ${user1.getName()} compró: ${flight1.getDescription()}`);

    user1.purchaseProduct(hotel);
    console.log(
      ` ${user1.getName()} compró: ${hotel.getDescription()} (1 noche): $${hotel.getPrice()}`
    );

    // María intenta comprar paquete (no tiene suficiente dinero)
    user2.purchaseProduct(packageProduct);
    console.log(
      `${user2.getName()} compró: ${packageProduct.getDescription()}`
    );
  } catch (error) {
    if (error instanceof InsufficientFundsException) {
      console.log(`Error: ${error.message}`);
    }
  }

  try {
    // Carlos compra casa y complejo
    user3.purchaseProduct(house);
    console.log(
      ` ${user3.getName()} compró: ${house.getDescription()} (1 noche): $${house.getPrice()}`
    );

    user3.purchaseProduct(complex);
    console.log(
      ` ${user3.getName()} compró: ${complex.getDescription()} (1 noche): $${complex.getPrice()}`
    );
  } catch (error) {
    if (error instanceof InsufficientFundsException) {
      console.log(` Error: ${error.message}`);
    }
  }

  console.log("\n3. USUARIOS ORDENADOS POR CANTIDAD DE COMPRAS:");
  const sortedUsers = agency.getUsersSortedByPurchases();
  sortedUsers.forEach((user, index) => {
    console.log(
      `${
        index + 1
      }. ${user.getName()}: ${user.getPurchaseCount()} compras - Presupuesto restante: $${user.getBudget()}`
    );
  });

  console.log("\n4. PRODUCTOS QUE CADA USUARIO PUEDE COMPRAR (BONUS):");
  agency.getUsers().forEach((user) => {
    const affordable = agency.getAffordableProducts(user);
    console.log(`${user.getName()} (Presupuesto: $${user.getBudget()}):`);
    if (affordable.length > 0) {
      affordable.forEach((product) => {
        console.log(`  - ${product.getDescription()}: $${product.getPrice()}`);
      });
    } else {
      console.log("  - No puede comprar ningún producto disponible");
    }
  });

  console.log("\n6. DEMOSTRACIÓN DE CÁLCULOS ESPECÍFICOS:");

  // Hotel por diferentes noches
  console.log(`Hotel ${hotel.getName()} (${hotel.getStars()} estrellas):`);
  console.log(`  - 1 noche: $${hotel.calculateCost(1)}`);
  console.log(`  - 3 noches: $${hotel.calculateCost(3)}`);
  console.log(`  - 7 noches: $${hotel.calculateCost(7)}`);

  // Casa por diferentes noches
  console.log(`Casa de ${house.getRooms()} ambientes:`);
  console.log(`  - 1 noche: $${house.calculateCost(1)}`);
  console.log(`  - 5 noches: $${house.calculateCost(5)}`);

  // Complejo - diferencia entre alquilar todas vs una casa
  console.log(`Complejo (${complex.getHouseCount()} casas):`);
  console.log(
    `  - Todas las casas (1 noche): $${complex.calculateCost(
      1
    )} (con descuento)`
  );
  console.log(
    `  - Casa individual (1 noche): $${complex.calculateSingleHouseCost(
      0,
      1
    )} (sin descuento)`
  );
}


runDemo();
