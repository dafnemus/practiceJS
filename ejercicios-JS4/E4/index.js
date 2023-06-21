const message = document.getElementById("message");

const showMessage = (item) => {
  message.textContent = `Presioné el botón: ${item}`;
  return message;
};

