/*
Realizar un programa que lea los lados de 4 triángulos, e informar:

De cada uno de ellos, qué tipo de triángulo es: equilátero (tres lados iguales), isósceles (dos lados iguales), o escaleno (ningún lado igual)
Cantidad de triángulos de cada tipo.
Tipo de triángulo del que hay menor cantidad.
*/

const aux = Math.round(Math.random() * 10);
let triangles = [];
let equilateral = [];
let isosceles = [];
let scalene = [];
let result = "";

const getTriangles = () => {
  for (let i = 1; i <= 4; i++) {
    const side1 = aux;
    const side2 = aux;
    const side3 = aux;
    triangles.push([side1, side2, side3]);
  }
  return triangles;
};

const getTriangleType = triangles.map((triangle) => {
  if (triangle[0] === triangle[1] && triangle[1] === triangle[2]) {
    console.log("Equilatero");
    equilateral.push(triangle);
  } else if (
    triangle[0] === triangle[1] ||
    triangle[1] === triangle[2] ||
    triangle[2] === triangle[0]
  ) {
    console.log("Isosceles");
    isosceles.push(triangle);
  } else {
    console.log("Escaleno");
    scalene.push(triangle);
  }
  console.log("Cantidad de triangulos equilateros", equilateral.length);
  console.log("Cantidad de triangulos isosceles", isosceles.length);
  console.log("Cantidad de triángulos escalesnos", scalene.length);
  return equilateral, isosceles, scalene;
});

const countTriangles = () => {
  if (equilateral <= isosceles && equilateral <= scalene) {
    result = "equilátero";
  } else if (isosceles <= equilateral && isosceles <= scalene) {
    result = "isósceles";
  } else {
    result = "escaleno";
  }
  console.log("Tipo triangulo que ahy menor cantidad es ", result);
  return result;
};

getTriangles();
getTriangleType();
countTriangles();
