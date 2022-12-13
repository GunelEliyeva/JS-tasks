let form = document.querySelector("form");
let allInputs = document.querySelectorAll(".input");

let allUserData = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  allInputs.forEach((q) => {
    q.value === "" && alert("plase, fill all fields!");
  });

  let newUserObj = {
    email: "",
    password: "",
    username: "",
    telephone: "",
  };

  newUserObj.email = allInputs[0].value;
  newUserObj.password = allInputs[1].value;
  newUserObj.username = allInputs[2].value;
  newUserObj.telephone = allInputs[3].value;
  allUserData.push(newUserObj);
  
  localStorage.setItem("userData", JSON.stringify(allUserData));
  
});
