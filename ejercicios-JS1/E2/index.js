/*
Realizar un programa que pida cargar una fecha cualquiera,
luego verificar si dicha fecha corresponde a Navidad 
(se debe cargar por separado el día, el mes y el año)
*/
let day = parseInt(prompt("Ingrese el día:"));
let month = parseInt(prompt("Ingrese el mes:"));
let year = parseInt(prompt("Ingrese el año:"));

if (day === 25 && month === 12 && year) {
  console.log(
    `La fecha ingresada ${day}/${month}/${year} corresponde a Navidad.`
  );
} else {
  console.log(
    `La fecha ingresada ${day}/${month}/${year} no corresponde a Navidad.`
  );
}
