const title = document.getElementById("title");
const changeColor = (event) => {
  if (event.type === "mouseenter") {
    title.style.backgroundColor = "yellow";
  } else if (event.type === "mouseleave") {
    title.style.backgroundColor = "transparent";
  }
};
