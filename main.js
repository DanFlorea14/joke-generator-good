const openBtn = document.querySelector(".open")
const modalContainer = document.querySelector(".container")
const closeBtn  = document.querySelector(".closeBtn");

openBtn.addEventListener("click", function(){
  modalContainer.classList.add("show")
})

closeBtn.addEventListener("click", function(){
  modalContainer.classList.remove("show")
})


const jokeBtn = document.getElementById("jokeBtn");
const jokeText = document.getElementById("jokeText");

jokeBtn.addEventListener('click', () => {
  console.log('Click')
  const url = 'https://api.chucknorris.io/jokes/random';
  fetch(url)
  .then(res => {
    return res.json();
  })
  .then((data) => {

    console.log(data)
    jokeText.innerText = data.value;
  })
});


const favoriteBtn = document.querySelector(".favoriteBtn");





