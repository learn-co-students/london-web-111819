// API Functions

// When creating these generic API functions, we must always
// return the fetch request, so we can call them later and still chain
// promises (.then) onto the end of them, as we would normally do with
// the fetch request on its own.

function get(url) {
  return fetch(url).then(resp => resp.json())
}

function post(url, bodyObject) {
  return fetch(url, {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
    },
    body: JSON.stringify(bodyObject)
  }).then(resp => resp.json())
}

function patch(url, id, bodyObject) {
  return fetch(`${url}${id}`, {
    method: "PATCH",
    headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
    },
    body: JSON.stringify(bodyObject)
  }).then(resp => resp.json())
}

function destroy(url, id) {
  return fetch(`${url}${id}`, {
    method: "DELETE"
  })
}


// Constants / Global Variables

const baseUrl = "http://localhost:3000/toys/"

const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
const addToyForm = document.querySelector(".add-toy-form")
const toyCollection = document.querySelector("#toy-collection")

let addToy = false

// Functions

function createToyCard(toy) {
  let div = document.createElement("div")
  div.className = "card"
  let h2 = document.createElement("h2")
  h2.innerText = toy.name
  let img = document.createElement("img")
  img.src = toy.image
  img.className = "toy-avatar"
  let p = document.createElement("p")
  p.innerText = toy.likes
  let likeButton = document.createElement("button")
  likeButton.className = "like-btn"
  likeButton.innerText = "Like <3"
  likeButton.addEventListener("click", () => patchLikesThenUpdateToy(toy.id, p))
  // Here we are creating an anonymous arrow function that enables us to call the patchLikes function
  // when the arrow function is triggered, but with variables from the scope of the createToyCard passed in as arguments.
  // This is what's known as a closure. We have also done this when adding an event listener to the delete function below
  let deleteButton = document.createElement("button")
  deleteButton.innerText = "Delete"
  deleteButton.addEventListener("click", () => deleteToyFromServerThenClient(toy.id, div))
  div.append(h2, img, p, likeButton, deleteButton)
  toyCollection.append(div)
}

function getThenRenderAllToys() {
  get(baseUrl).then(toys => toys.forEach(createToyCard))
}

function postToyThenRenderToy(event) {
  event.preventDefault()
  let bodyObject = {
    name: event.target.name.value,
    image: event.target.image.value,
    likes: 0
  }
  post(baseUrl, bodyObject).then(toy => {
    createToyCard(toy)
    addToyForm.reset()
  })
}

function patchLikesThenUpdateToy(id, likesElement) {
  let bodyObject = {
    likes: parseInt(likesElement.innerText) + 1
  }
  patch(baseUrl, id, bodyObject).then(toy => {
    likesElement.innerText = toy.likes
  })
}

function deleteToyFromServerThenClient(id, div) {
  destroy(baseUrl, id).then(() => div.remove())
}

function toggleToyForm() {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
    toyForm.addEventListener("submit", postToyThenRenderToy )
  } else {
    toyForm.style.display = 'none'
    toyForm.removeEventListener("submit", postToyThenRenderToy)
  }
}

//  Event Listeners / Loading Functions

addBtn.addEventListener('click', toggleToyForm)

document.body.onload = getThenRenderAllToys