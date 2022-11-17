const btnGetQuote = document.getElementById("btn-quote");
const quote = document.getElementById("quote");
const author = document.getElementById("author");

fetchQuote();

function fetchQuote() {
  fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      let randomText = data.data[0].quoteText;
      let randomAuthor = data.data[0].quoteAuthor;

      quote.innerText = randomText;
      author.innerText = randomAuthor;
    });
}

btnGetQuote.addEventListener("click", fetchQuote);
