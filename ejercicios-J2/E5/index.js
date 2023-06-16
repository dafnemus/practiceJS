/*
En una empresa trabajan 5 empleados cuyos sueldos oscilan entre $100 y $500, 
realizar un programa que lea los sueldos que cobra cada empleado e informe cuántos empleados cobran entre $100 y $300
y cuántos cobran más de $300. Además el programa deberá informar el importe que gasta la empresa en sueldos al personal.
*/

const salaryEmpleoyees = [250, 333, 445, 306, 299, 180];
let more300 = [];
let less300 = [];
let salaryTotal = 0;
salaryEmpleoyees.map((salary) => {
  salary > 300 ? more300.push(salary) : less300.push(salary);
  salaryTotal += salary;
});

console.log(`Cantidad de empleados: ${salaryEmpleoyees.length}`);
console.log(`Salarios: ${salaryEmpleoyees}, gasto total: ${salaryTotal}`);
console.log(
  `Cantidad de empleados que cobran entre $100 y $300: ${less300.length}`
);
console.log(`Cantidad de empleados que cobran más de $300: ${more300.length}`);
