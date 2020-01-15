const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

// When a user loads the page, they should see a card for each trainer, with their current team of Pokemon.

// Get all of the trainers
const fetchTrainers = () => {
  return fetch(TRAINERS_URL)
    .then(response => response.json())
}

// Iterate through all of the trainers and for each one, create a card
const renderTrainers = () => {
  fetchTrainers()
    .then(trainers => {
      for (let trainer of trainers) {
        renderTrainer(trainer)
      }
    })
}

// Populate the card with that trainer's information and an Add Pokemon button
const renderTrainer = trainer => {
  const card = document.createElement("div")
  card.classList.add("card")
  const p = document.createElement("p")
  p.innerText = trainer.name
  const button = document.createElement("button")
  button.addEventListener("click", () => {
    if (trainer.pokemons.length < 6) {
      addPokemon(ul, trainer)
    }
  })
  button.innerText = "Add Pokemon"
  const ul = document.createElement("ul")
  for (let pokemon of trainer.pokemons) {
    renderPokemon(ul, pokemon)
  }
  card.appendChild(p)
  card.appendChild(button)
  card.appendChild(ul)
  document.querySelector("main").appendChild(card)
}

// Within the card, iterate through all of that trainer's pokemon and create an li for that Pokemon with a Release Pokemon button
const renderPokemon = (ul, pokemon) => {
  const li = document.createElement("li")
  li.innerText = `${pokemon.nickname} (${pokemon.species})`
  const button = document.createElement("button")
  button.addEventListener("click", () => {
    releasePokemon(li, pokemon)
  })
  button.classList.add("release")
  button.innerText = "Release"
  li.appendChild(button)
  ul.appendChild(li)
}

// Whenever a user clicks "Add Pokemon" and that trainer has less than 6 Pokemon, they should get a new Pokemon

// Tell the server to create a new Pokemon
const addPokemon = (ul, trainer) => {
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      trainer_id: trainer.id
    })
  }
  fetch(POKEMONS_URL, configurationObject)
    .then(response => response.json())
    .then(data => renderPokemon(ul, data))
}

// Whenever a user clicks "Release Pokemon" on a specific Pokemon team, that specific Pokemon should be released from that team.
const releasePokemon = (li, pokemon) => {
  const configurationObject = {
    method: "DELETE"
  }
  fetch(`${POKEMONS_URL}/${pokemon.id}`, configurationObject)
    .then(response => response.json())
    .then(li.remove())
}

renderTrainers()
