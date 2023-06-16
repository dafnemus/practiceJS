// Se ingresan un conjunto de 5 alturas de personas por teclado. Mostrar la altura promedio de las personas.

const heightOfPeople = [150, 180, 165, 170, 175];
let aux = 0;

heightOfPeople.map((height) => {
  aux += height;
});

const average = aux / heightOfPeople.length;
console.log(
  `La altura promedio entre estas personas ${heightOfPeople} es de ${average}`
);
