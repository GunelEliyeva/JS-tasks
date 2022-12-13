const catsAPI = "https://api.thecatapi.com/v1/breeds";
let box = document.querySelector(".box");

function fetchData() {
  fetch(`${catsAPI}`)
    .then((response) => response.json())
    .then((data) =>
      data.forEach((element) => {
        box.innerHTML += `
        <div class="cards">
        <div class="card">
        <img src="${element.image.url}" class="card-img-top" alt="">
        <div class="card-body">
        <h5 class="heading">Card title</h5>
        <p class="text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
        <a href="#" class="btn-go">Go somewhere</a></div></div></div>`;
      })
    )
    .catch((err) => console.log(err));
}
fetchData();

// function fetchData() {
//   fetch(`${catsAPI}`)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }

// fetchData();

// // const fetchCats = async () => {
// //   let response = await fetch(`${catsAPI}`);
// //   let data = await response.json();
// //   data.forEach(element => {
// //     let card=document.createElement("div")
// //     card.className="card";
// //     let image=document.createElement("img")
// //     image.className="image";
// //     image.src=element.image.url;
// //     card.appendChild(image)
// //     let name=document.createElement("h1")
// //   name.innerText=element.name;
// //   card.appendChild(name)
// //   let description=document.createElement("p")
// //   description.innerText=element.description;
// //   card.appendChild(description)
// //   let button=document.createElement("button")
// //   button.innerText="Go somewhere";
// //   let wiki=document.createElement("a")
// //   wiki.href=element.wikipedia_url;
// //   console.log(wiki)
// //   button.appendChild(wiki)
// //   card.appendChild(button)
// //   box.appendChild(card)
// //   });
// // };

// const fetchCats=async()=>{
//     let response = await fetch(`${catsAPI}`);
//     let data =await response.json();
//     data.forEach(element => {
//         let card=document.

//     });
// }

// // fetchCats();
