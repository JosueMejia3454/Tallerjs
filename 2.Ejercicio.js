'use strict';

// Calcular el sueldo a pagar deuna trabajador dado que se debe ingresar la cantidad de horas trabajadas y el valor de la hora en pesos.


const horasTrabajadas = parseFloat(prompt("Ingrese la cantidad de horas trabajadas:"));
const valorHora = parseFloat(prompt("Ingrese el valor de la hora en pesos:"));


const sueldo = horasTrabajadas * valorHora;


console.log(`El sueldo a pagar es: ${sueldo} pesos`)