/*
Se ingresan por teclado tres números, si todos los valores ingresados son menores a 10, 
imprimir en la página la leyenda ' Todos los números son menores a diez'.
*/

let number1 = parseInt(prompt("Ingrese el primer número:"));
let number2 = parseInt(prompt("Ingrese el segundo número:"));
let number3 = parseInt(prompt("Ingrese el tercer número:"));
if (number1 < 10 && number2 < 10 && number3 < 10) {
  console.log("Todos los números son menores a diez.");
}
