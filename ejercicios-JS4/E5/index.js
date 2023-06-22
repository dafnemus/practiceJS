const password = document.getElementById("password");

const onBlur = () => {
  if (password.value.length <= 7 || password.value.length > 20) {
    return alert("Error");
  }
};

console.log(password);
