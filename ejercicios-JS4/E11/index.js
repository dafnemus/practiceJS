const div = document.getElementById("myDiv");
const changeColor = (event) => {
  if (event.type === "mousedown") {
    div.style.backgroundColor = "yellow";
  } else if (event.type === "mouseup") {
    div.style.backgroundColor = "red";
  }
};
