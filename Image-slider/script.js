const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currentIndex = 0;

function updateCarousel() {
  slides.style.transform = `translateX(-${currentIndex * 600}px)`;
}

prev.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
});

next.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
});

setInterval(() => {
  next.click();
}, 2000);
