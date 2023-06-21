const container = document.getElementById("container");
const computedStyle = window.getComputedStyle(container);
const bgColor = computedStyle.getPropertyValue("background-color");
console.log(container);
console.log("fondo:", bgColor);
