let heading = document.querySelector(".content-heading");
let hero = document.querySelector(".hero");
hero.classList.add("img-1");

let buttons = document.querySelectorAll(".btn");
let modal = document.querySelector(".modal");

let track = document.querySelector(".carousel-track");
let items = document.querySelectorAll(".carousel-item");
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");
let index = 0;

// carousel
function slide(direction) {
  if (direction === "next") {
    index++;
    if (index >= items.length) {
      index = 0;
    }
  } else {
    index--;
    if (index < 0) {
      index = items.length - 1;
    }
  }
  track.style.transform = `translate(-${index * 275}px)`;
}

prevBtn.addEventListener("click", () => slide("prev"));
nextBtn.addEventListener("click", () => slide("next"));

setInterval(() => slide("next"), 2000);

// creating modal
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;

    if (styles.contains("navbar-toggler")) {
      modal.classList.add("show-modal");
    } else if (styles.contains("btn-close")) {
      modal.classList.remove("show-modal");
    }
  });
});

// adding dynamic background
items.forEach((item) => {
  item.addEventListener("click", (e) => {
    let myText = e.currentTarget.childNodes[1].children[1].innerText;
    let myTarget = e.currentTarget.classList;

    for(let i = 1; i <= 8; i++) {
      if(myTarget.contains(`img-${i}`)){
        hero.setAttribute(`class`, `img-${i}`);
        heading.innerText = myText;
      }
    }
  });
});