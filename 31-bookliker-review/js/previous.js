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
  });
};

const API = { get, patch };

//const

const booksUrl = "http://localhost:3000/books/";
const currentUser = { id: 1, username: "pouros" };
const listEl = document.querySelector("#list");
const showPanel = document.querySelector("#show-panel");

//functions - don't forget to invoke the master function!
const getAllBooks = () => {
  API.get(booksUrl).then(renderBookList);
};

const renderBookList = books => {
  books.forEach(book => createBookPreview(book));
};

const createBookPreview = book => {
  const li = document.createElement("li");
  const p = document.createElement("p");
  p.innerText = book.title;
  li.append(p);
  listEl.append(li);

  li.addEventListener("click", () => showBookDetails(book));
};

const showBookDetails = book => {
  while (showPanel.firstChild) showPanel.removeChild(showPanel.firstChild);

  const div = document.createElement("div");

  const h2 = document.createElement("h2");
  h2.innerText = book.title;

  const p = document.createElement("p");
  p.innerText = book.description;

  const img = document.createElement("img");
  img.src = book.img_url;

  const usersUl = document.createElement("ul");
  usersUl.class = "users-ul";

  book.users.forEach(bkUser => {
    let li = document.createElement("li");
    li.innerText = bkUser.username;
    li.id = `user-${bkUser.id}`;
    usersUl.append(li);
  });

  const button = document.createElement("button");
  if (hasUserAlreadyReadBook(book)) {
    button.innerText = "Unlike Me";
  } else {
    button.innerText = "Like Me";
  }

  button.addEventListener("click", () => handleButtonClick(book, usersUl, button));

  div.append(img, h2, p, button, usersUl);
  showPanel.append(div);
};

const handleButtonClick = (book, ul, button) => {
  if (!hasUserAlreadyReadBook(book)) {

    book.users.push(currentUser);
    
    bodyObj = {
      users: book.users
    };
    API.patch(booksUrl, book.id, bodyObj).then(makeLi(ul));
    button.innerText = "Unlike Me";

  } else {
    bodyObj = {
      users: [...book.users.filter(user => user.id !== currentUser.id)]
    }
    API.patch(booksUrl, book.id, bodyObj).then(removeLi);
    button.innerText = "Like Me";
  }
};

const makeLi = ul => {
  let li = document.createElement("li");
  li.innerText = currentUser.username;
  li.id = `user-${currentUser.id}`;
  ul.append(li);
};

const removeLi = () => {
  const foundLi = document.querySelector(`#user-${currentUser.id}`);
  foundLi.remove();
};

const hasUserAlreadyReadBook = book => {
  return book.users.find(bookUser => bookUser.id === currentUser.id);
};

getAllBooks();
