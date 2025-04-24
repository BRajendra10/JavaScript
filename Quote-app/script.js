const quotes = document.querySelectorAll('.quote');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let index = 0;

function updateQuote() {
  quotes.forEach((q) => q.classList.remove('active'));

  quotes[index].classList.add('active');
}

prevBtn.onclick = () => {
  index = (index - 1 + quotes.length) % quotes.length;
  updateQuote();
};

nextBtn.onclick = () => {
  index = (index + 1) % quotes.length;
  updateQuote();
};

setInterval(() => {
  index = (index + 1) % quotes.length;
  updateQuote();
}, 3000);
