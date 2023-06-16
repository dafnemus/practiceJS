/*
Escribir un programa que pida ingresar coordenadas (x,y) que representan puntos en el plano.
Informar cuántos puntos se han ingresado en el primer, segundo, tercer y cuarto cuadrante. 
Al comenzar el programa se pide que se ingrese la cantidad de puntos a procesar.
*/

const aux = Math.round(Math.random() * 10);
let coordinates = [];
let firstQuadrant = [];
let secondQuadrant = [];
let thirdQuadrant = [];
let fourthQuadrant = [];

const getCoordinates = () => {
  for (let i = 1; i <= aux; i++) {
    const coord1 = Math.round((Math.random() - 0.5) * 12);
    const coord2 = Math.round((Math.random() - 0.5) * 12);
    coordinates.push([coord1, coord2]);
  }
  return coordinates;
};

const reportQuadrant = (list) => {
  list.map((item) => {
    const x = item[0];
    const y = item[1];
    if (x > 0 && y > 0) {
      firstQuadrant.push(item);
    } else if (x < 0 && y > 0) {
      secondQuadrant.push(item);
    } else if (x < 0 && y < 0) {
      thirdQuadrant.push(item);
    } else {
      fourthQuadrant.push(item);
    }
  });
};

getCoordinates();
console.log(coordinates);
reportQuadrant(coordinates);
console.log(
  `En el Primer Cuadrante hay un total de ${firstQuadrant} coordenadas`
);
console.log(
  `En el Segundo Cuadrante hay un total de ${secondQuadrant} coordenadas`
);
console.log(
  `En el Tercer Cuadrante hay un total de ${thirdQuadrant} coordenadas`
);
console.log(
  `En el Cuarto Cuadrante hay un total de ${fourthQuadrant} coordenadas`
);
