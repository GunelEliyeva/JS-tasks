let input = document.querySelector("#search");
let addBtn = document.querySelector("#add-btn");
let deleteBtn = document.querySelector("#delete-btn");
let ulElement = document.querySelector("#ul-li");
let container = document.querySelector("#container");
addBtn.addEventListener("click", function () {
  if (input.value == "") {
    alert("Bos ola bilmez!");
  } else {
    let liElement = document.createElement("li");
    liElement.innerText = input.value;
    input.value = "";

    let headingElement = document.createElement("h3");
    liElement.appendChild(headingElement);
    headingElement.className = "h3";

    let spanElement = document.createElement("span");
    liElement.appendChild(spanElement);
    spanElement.className = "spann";

    let editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.className = "edit-button";
    spanElement.appendChild(editButton);

    let clearButton = document.createElement("button");
    clearButton.innerText = "Delete";
    clearButton.className = "clear";
    spanElement.appendChild(clearButton);

    ulElement.prepend(liElement);

    clearButton.addEventListener("click", function () {
      this.closest("li").remove();
    });

    editButton.addEventListener("click", function () {
      input.value = this.closest("li").children[0].innerText;
      editButton = this.closest("li");
      this.focus(input);
    });
  }
});

deleteBtn.addEventListener("click", function () {
  ulElement.innerHTML = "";
});
