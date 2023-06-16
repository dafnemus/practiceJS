/*
Escribir un programa que pida ingresar la coordenada de un punto en el plano, es decir dos valores enteros x e y.
Posteriormente imprimir en pantalla en qué cuadrante se ubica dicho punto. (1º Cuadrante si x > 0 Y y > 0 , 2º Cuadrante: x < 0 Y y > 0, etc.)
*/

let x = parseInt(prompt("Ingrese la coordenada x: "));
let y = parseInt(prompt("Ingrese la coordenada y: "));

if (x > 0 && y > 0) {
  console.log("Estas en el Primer Cuadrante");
} else if (x < 0 && y > 0) {
  console.log("Estas en el Segundo Cuadrante");
} else if (x < 0 && y < 0) {
  console.log("Estas en el Tercer Cuadrante");
} else if (x > 0 && y < 0) {
  console.log("Estás en el Cuarto Cuadrante");
} else if (x < 0 && y === 0) {
  console.log("Estás sobre el Eje Y");
} else if (x === 0 && y > 0) {
  console.log("Estás sobre el Eje X");
} else if (x === 0 && y === 0) {
  console.log("Estats en el punto 0");
} else {
  console.error("Error");
}
