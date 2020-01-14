document.addEventListener("DOMContentLoaded", () => {
  const baseUrl = "http://futuramaapi.herokuapp.com/api/quotes/";
  
  const quotesList = document.querySelector("#quotes-list");

  function getAllQuotes() {
    return fetch(baseUrl).then(resp => resp.json());
  }

  function clearAllQuotes() {
    while (quotesList.firstChild) {
      quotesList.firstChild.remove();
    }
  }

  function renderAllQuotes(quotes) {
    clearAllQuotes();
    quotes.forEach(createThenAppendQuoteDiv);
  }

  function createThenAppendQuoteDiv(quote) {
    debugger
    let quoteDiv = document.createElement("div");
    let quoteText = document.createElement("p");
    quoteText.innerText = quote.quote;
    let quoteImage = document.createElement("img");
    quoteImage.src = quote.image;
    quoteImage.style.display = "none";
    let quoteButton = document.createElement("button");
    quoteButton.innerText = "Show Character";
    quoteButton.addEventListener("click", e => {
      toggleImage(e, quoteImage);
    });
    quoteDiv.append(quoteText, quoteButton, quoteImage);
    quotesList.append(quoteDiv);
  }

  function toggleImage(event, image) {
    event.preventDefault();
    if (image.style.display === "none") {
      image.style.display = "block";
      event.target.innerText = "Hide Character";
    } else {
      image.style.display = "none";
      event.target.innerText = "Show Character";
    }
  }

  function getAndRenderAllQuotes() {
    getAllQuotes()
      .then(renderAllQuotes)
      .catch(error => alert(error.message));
  }

  document.body.onload = getAndRenderAllQuotes();
});
