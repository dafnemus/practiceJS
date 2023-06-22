const number = document.getElementById("number");
let num;
num = Math.random() * 3; //se guarda en num un valor comprendido entre 0.00001 y 2.99999
num = parseInt(num); //guardamos solo la parte entera de la variable num

number.textContent = num;

const openMailService = () => {
  if (num === 0) {
    window.location = "https://www.outlook.com";
  } else if (num === 1) {
    window.location = "https://mail.google.com";
  } else if (num === 2) {
    window.location = "https://mail.yahoo.com";
  }
};
