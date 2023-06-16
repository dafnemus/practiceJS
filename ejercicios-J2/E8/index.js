/*
Desarrollar un programa que permita cargar 5 números enteros y luego nos informe cuántos valores fueron pares y cuántos impares.
Emplear el operador "%" en la condición de la estructura condicional.
	if (valor%2==0)
El operador "%" retorna el resto de la división valor / 2. Por ejemplo: 12 % 2, retorna 0; 13 % 2, retorna 1, porque el resto de dividir 13 en 2 es 1.
*/

const list = [5, 4, 13, 16, 34];
let pair = [];
let odd = [];
list.map((number) => (number % 2 === 0 ? pair.push(number) : odd.push(number)));

console.log(`De la lista ${list}`);
console.log(`Son ${pair.length} números pares, ${pair}`);
console.log(`Son ${odd.length} números impares, ${odd}`);
