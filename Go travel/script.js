let buttons = document.querySelectorAll(".btn");
let modal = document.querySelector(".modal");

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList;

        console.log(styles);

        if(styles.contains("navbar-toggler")) {
            modal.classList.add("show-modal");
        } else if(styles.contains("btn-close")){
            modal.classList.remove("show-modal");
        }
    });
});


// TODO: 
//      Make a carousel
//      add background when clicked on carousel item

let track = document.querySelector(".carousel-track");
let items = document.querySelectorAll(".carousel-item");
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

console.log(track);

// function slide() {
//     items.forEach((item) => {
//         item.style.translate = "-100%";
//     });
// }

// prevBtn.addEventListener("click", () => slide("prev"));
// nextBtn.addEventListener("click", () => slide("next"));

// setInterval(() => slide(), 2000);


let index = 0;

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
      track.style.transform = `translate(-${276}px)`;
}

prevBtn.addEventListener("click", () => slide("prev"));
nextBtn.addEventListener("click", () => slide("next"));

setInterval(() => slide("next"), 2000);