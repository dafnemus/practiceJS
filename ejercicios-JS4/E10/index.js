const number = document.getElementById("number");

const duplicate = () => {
  number.innerText = parseInt(number.innerText) * 2;
  return number;
};
