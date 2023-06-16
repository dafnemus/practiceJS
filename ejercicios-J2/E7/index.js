/*
Realizar un programa que permita cargar dos listas de 3 valores cada una.
Informar con un mensaje cuál de las dos listas tiene un valor acumulado mayor (mensajes 'Lista 1 mayor', 'Lista 2 mayor', 'Listas iguales’)
Tener en cuenta que puede haber dos o más estructuras repetitivas en un algoritmo.

*/

const sumList = (lista) => {
    let suma = 0;
    lista.map((item) => {
      suma += item;
    });
    return suma;
  };
  
  const list1 = [23, 59, 1];
  const list2 = [70, 12, 7];
  
  const totalList1 = sumList(list1);
  const totalList2 = sumList(list2);
  
  if (totalList1 > totalList2) {
    console.log("Lista 1 mayor");
  } else if (totalList2 > totalList1) {
    console.log("Lista 2 mayor");
  } else {
    console.log("Listas iguales");
  }
  