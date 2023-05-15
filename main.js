const jokeBtn = document.getElementById("jokeBtn")
const jokeText = document.getElementById("jokeText")

jokeBtn.addEventListener('click', () => {
  console.log('Click')
  const url = 'https://api.chucknorris.io/jokes/random';
  fetch(url)
  .then(res => {
    return res.json();
  })
  .then((data) => {
    console.log(data.value.joke);
    jokeText.innerText = data.value;
  })
})