/*
Confeccionar un programa que lea 3 pares de datos, cada par de datos corresponde a la medida de la base y la altura de un triángulo. El programa deberá informar:
  De cada triángulo la medida de su base, su altura y su superficie.
  La cantidad de triángulos cuya superficie es mayor a 12.
*/

const triangles = [
  {
    base: 15,
    height: 8,
  },
  {
    base: 9,
    height: 14,
  },
  {
    base: 10,
    height: 5,
  },
];

triangles.map(({ base, height }) => {
  let superficie = (base * height) / 2;
  console.log(
    `Triángulo con base: ${base}cm y altura: ${height}cm posee una superficie de ${superficie}cm`
  );
});
