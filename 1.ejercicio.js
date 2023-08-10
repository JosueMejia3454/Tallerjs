'use strict';

// Obtener números ingresados por el usuario
const num1 = parseFloat(prompt("Ingrese el primer número:"));
const num2 = parseFloat(prompt("Ingrese el segundo número:"));

// Realizar las operaciones
const suma = num1 + num2;
const resta = num1 - num2;
const multiplicacion = num1 * num2;

let division;
if (num2 !== 0) {
  division = num1 / num2;
} else {
  division = "No es posible dividir entre cero";
}

// Imprimir resultados
console.log(`Suma: ${suma}`);
console.log(`Resta: ${resta}`);
console.log(`Multiplicación: ${multiplicacion}`);
console.log(`División: ${division}`)