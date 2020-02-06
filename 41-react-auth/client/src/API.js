const baseUrl = 'http://localhost:3001'
const signInUrl = baseUrl + '/signin'
const validateUrl = baseUrl + '/validate'
const inventoryUrl = baseUrl + '/inventory'

const get = url =>
  fetch(url, {
    headers: {
      Authorization: localStorage.token
    }
  }).then(resp => resp.json())

const post = (url, data) =>
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(resp => resp.json())

const signIn = (username, password) => post(signInUrl, { username, password })

const validate = () => get(validateUrl)

const getInventory = () => get(inventoryUrl)

export default { signIn, validate, getInventory }
