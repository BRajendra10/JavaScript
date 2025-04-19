let quote = document.querySelector(".quote");
let author = document.querySelector(".author");

document.querySelector(".btn-new").addEventListener("click", () => {
  generate_quotes();
});

document.querySelector('.btn-copy').addEventListener('click', () => {
  navigator.clipboard.writeText(quote.innerHTML);
});

function generate_quotes() {
  let num = Math.floor(Math.random() * 30);
  let url = "https://dummyjson.com/quotes";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      quote.innerHTML = data.quotes[num].quote;
      author.innerHTML = ` ― ${data.quotes[num].author}`;
    });
}
