let form = document.querySelector("form");
let allInputs = document.querySelectorAll(".input");

console.log(allInputs);

form.addEventListener("submit", function (e) {
  e.preventDefault();
});
