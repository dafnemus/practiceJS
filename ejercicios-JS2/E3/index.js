// Escribir un programa que lea 10 notas de alumnos y nos informe cuántos tienen notas mayores o iguales a 7 y cuántos menores.
const studentGrades = [4, 7, 9, 3, 8, 5, 6, 6, 7, 10];
let approved = [];
let disapproved = [];

studentGrades.map((grade) => {
  grade >= 7 ? approved.push(grade) : disapproved.push(grade);
});
console.log(`Alumnos aprobados: ${approved}, Total: ${approved.length}`);
console.log(
  `Alumnos desaprobados: ${disapproved}, Total: ${disapproved.length}`
);
