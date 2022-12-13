let box = document.querySelector("#box");
let search = document.querySelector("#input");
let deleteBtn = document.querySelector("#delete-btn");
let editBtn = document.querySelector("#edit-btn");

let allUserData =
  JSON.parse(localStorage.getItem("user")) == null
    ? []
    : JSON.parse(localStorage.getItem("user"));

search.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    allUserData.push(search.value);
    box.innerHTML="";
    localStorage.setItem("user", JSON.stringify(allUserData));
    JSON.parse(localStorage.getItem("user")).forEach((element) => {
      let p = document.createElement("p");
      p.innerText = element;
      box.appendChild(p);
    });
  }
});
