//en este archivo defino una excepción personalizada para cuando no hay fondos suficientes.
// con lo aprendido me parece una buena practica e implementacion tener excepciones custom que facilitan manejar el error.

export class InsufficientFundsException extends Error {
  constructor(required: number, available: number) {
    super(`Fondos insuficientes. Requerido: $${required}, Disponible: $${available}`);
    this.name = 'InsufficientFundsException';
  }
}