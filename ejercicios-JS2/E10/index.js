/*
    Desarrollar un programa que solicite la carga de 10 números e imprima la suma de los últimos 5 valores ingresados.
*/
const last5Numbers = (numbers) => {
  let sum = 0;
  for (let i = numbers.length - 1; i >= numbers.length - 5; i--) {
    sum += numbers[i];
  }
  return sum;
};

let numbers = [];

for (let i = 0; i < 10; i++) {
  let number = parseInt(prompt("Ingrese un número: "));
  numbers.push(number);
}

console.log(
  `La suma de los últimos 5 números ingresados es: ${last5Numbers(numbers)}`
);
