// Confeccionar un programa que permita ingresar un valor del 1 al 10
// y nos muestre la tabla de multiplicar del mismo (los primeros 12 términos)
// Ejemplo: Si ingreso 3 deberá aparecer en pantalla los valores 3, 6, 9, hasta el 36.

let number = parseInt(prompt("Ingrese un número: "));
let table = [];
for (let i = 1; i <= 12; i++) {
  let value = i * number;
  table.push(value);
}

console.log(table);
