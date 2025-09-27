# CHALLENGE PARA ZERF - TRAVEL AGENCY

## Descripción
Este proyecto implementa un sistema de agencia de viajes, donde los usuarios pueden comprar distintos productos como vuelos, alojamientos o paquetes que combinan varios productos.

El objetivo fue modelar la solución usando Programación Orientada a Objetos cumpliendo con las consignas del enunciado, incluyendo el bonus de mostrar qué productos puede comprar un usuario según su presupuesto.

> Nota: El flujo principal del proyecto (`main`) se verá ejecutándose por consola en el navegador.
---

## Tecnologías y herramientas
- **Vite**: Elegido como entorno de configuración por su rapidez y simplicidad.  
- **TypeScript**: Para tipado estático y mayor seguridad en la implementación.  
- **Vitest**: Para testing, se utilizó por experiencia previa con React.

---

## Funcionalidades implementadas
1. **Usuarios**
   - Tienen nombre, presupuesto y historial de compras.  
   - Pueden comprar productos si tienen fondos suficientes; en caso contrario, se lanza una excepción.

2. **Productos**
   - Incluyen vuelos, alojamientos y paquetes (que pueden contener otros productos).  
   - El precio de los paquetes se calcula sumando los precios de sus productos internos.

3. **Agencia de viajes**
   - Permite registrar usuarios y productos disponibles.  
   - Ordena usuarios de mayor a menor según la cantidad de productos adquiridos.  
   - Muestra qué productos un usuario puede comprar según su presupuesto (bonus).

---

## Testing
- Se implementaron tests cortos y directos por cuestiones de tiempo pero eficientes para validar las funcionalidades principales:
  - Compra de productos y control de presupuesto.  
  - Cálculo de precios de paquetes.  
  - Ordenamiento de usuarios por cantidad de compras.  
  - Validación de productos asequibles según presupuesto.

---

## Consideraciones
- Se priorizó claridad y estructura de POO, permitiendo que nuevas clases de productos puedan integrarse fácilmente.  
- Se mantuvo encapsulación, devolviendo copias de arrays donde corresponde para proteger los datos internos.  
- Se aplicaron principios de diseño escalable utilizando el patrón Composite para paquetes que es un tema que estuve viendo en la facultad.

---

## Cómo levantar el proyecto

- **Clonar el repositorio**
```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_PROYECTO>

npm install

npm run dev

npm run test