//api
const apiHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json"
};

const get = url => {
  return fetch(url).then(resp => resp.json());
};

const patch = (url, id, bodyObj) => {
  return fetch(url + id, {
    method: "PATCH",
    headers: apiHeaders,
    body: JSON.stringify(bodyObj)
  }).then(resp => resp.json());
};

const API = { get, patch };

//consts

const booksUrl = "http://localhost:3000/books/";
const listEl = document.querySelector("#list");
const showPanel = document.querySelector("#show-panel");
const currentUser = { id: 1, username: "pouros" };

//functions (don't forget to call the master function!)

const getAllBooks = () => {
  API.get(booksUrl).then(books => books.forEach(book => makeBookPreview(book)));
};

const makeBookPreview = book => {
  const li = document.createElement("li");
  li.innerText = book.title;
  li.addEventListener("click", () => makeBookDetail(book));
  listEl.append(li);
};

const makeBookDetail = book => {
  while (showPanel.firstChild) showPanel.removeChild(showPanel.firstChild);

  const h2 = document.createElement("h2");
  h2.innerText = book.title;

  const p = document.createElement("p");
  p.innerText = book.description;

  const img = document.createElement("img");
  img.src = book.img_url;

  const button = document.createElement("button");
  if (hasUserReadThisBook(book)) {
    button.innerText = "Unlike Me";
  } else {
    button.innerText = "Like Me";
  }

  const usersUl = document.createElement("ul");
  usersUl.id = "users-ul";

  button.addEventListener("click", () =>
    handleButtonClick(book, usersUl, button)
  );

  book.users.forEach(bookUser => {
    const li = document.createElement("li");
    li.innerText = bookUser.username;
    li.id = `user-${bookUser.id}`;
    usersUl.append(li);
  });

  showPanel.append(img, h2, p, button, usersUl);
};

const handleButtonClick = (book, ul, button) => {
  if (!hasUserReadThisBook(book)) {
    book.users.push(currentUser);
    API.patch(booksUrl, book.id, book).then(makeLi(ul));
    button.innerText = "Unlike Me";
  } else {
    book.users = book.users.filter(bkUsr => bkUsr.id !== currentUser.id);
    API.patch(booksUrl, book.id, book).then(removeLi);
    button.innerText = "Like Me";
  }
};

const makeLi = ul => {
  const li = document.createElement("li");
  li.innerText = currentUser.username;
  li.id = `user-${currentUser.id}`;
  ul.append(li);
};

const removeLi = () => {
  const foundLi = document.querySelector(`#user-${currentUser.id}`);
  foundLi.remove();
};

const hasUserReadThisBook = book => {
  return book.users.find(bookUsr => bookUsr.id === currentUser.id);
};

getAllBooks();
