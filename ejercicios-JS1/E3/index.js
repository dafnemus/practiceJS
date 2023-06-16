/*
Se ingresan tres valores por teclado, 
si todos son iguales se imprime la suma del primero con el segundo 
y a este resultado se lo multiplica por el tercero (tener en cuenta que puede haber tres condiciones simples). 
En el caso que no sean iguales, solo indica que los números no son iguales
*/
let value1 = parseInt(prompt("Ingrese el primer valor:"));
let value2 = parseInt(prompt("Ingrese el segundo valor:"));
let value3 = parseInt(prompt("Ingrese el tercer valor:"));

if (value1 === value2 && value2 === value3) {
  let result = (value1 + value2) * value3;
  console.log(`El resultado es: ${result}`);
} else {
  console.log("Si los valores no son iguales, no se puede realizar la cuenta");
}
