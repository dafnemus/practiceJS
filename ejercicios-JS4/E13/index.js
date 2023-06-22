const checkbox = document.getElementById("checkbox");
const btn = document.getElementById("btn");

const toggleBtn = () => {
  checkbox.checked ? (btn.disabled = false) : (btn.disabled = true);
};
