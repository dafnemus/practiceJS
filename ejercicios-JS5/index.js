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
const amountLess5 = stock.filter((item) => item.amount <= 5);

console.log(amountLess5);
