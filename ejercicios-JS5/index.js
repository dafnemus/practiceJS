const stock = [
  {
    name: "Remera",
    amount: 10,
    price: 150,
    availableColors: ["rojo", "azul"],
  },
  {
    name: "Pantalón",
    amount: 5,
    price: 30,
    availableColors: ["negro", "gris"],
  },
  {
    name: "Zapatos",
    amount: 3,
    price: 50,
    availableColors: ["blanco", "marrón"],
  },
  {
    name: "Camisa",
    amount: 20,
    price: 5,
    availableColors: ["negro", "blanco", "azul"],
  },
];

// 1. Filtrar los productos que tienen una cantidad menor o igual a 5.
// 2. Duplicar la cantidad de los productos restantes.
const amountLess5 = [];
const amountMore5 = [];
const filtered = stock.filter((item) => {
  if (item.amount <= 5) {
    amountLess5.push(item);
  } else {
    item.amount *= 2;
    amountMore5.push(item);
  }
});

console.log(amountLess5);
console.log(amountMore5);

// 3. Calcular el valor total de *todo* el inventario original.
const getTotal = stock.reduce((total, item) => {
  return total + item.amount * item.price;
}, 0);
