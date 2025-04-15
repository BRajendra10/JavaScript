const set_time_container = document.querySelector(".set-time-container");
const btn_set_time = document.querySelector(".set-time");
const btns = document.querySelectorAll(".btn");

let number = document.querySelector('.number');
let time_type = document.querySelector('.time-type');

let sec = document.getElementById("sec");
let min = document.getElementById("min");
let hour = document.getElementById("hour");

let timer = 0; // for storing timer interval
let time = 0; // for storing total seconds after seting timer/ time doesn't change
let num = 1; // for selecting time
let type = 'sec'; // for selecting time type
let isPaused = false; // for checking if pause butto is clicked or not
let total_seconds = 0; // for storing total seconds after seting timer/ time change

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let target = e.currentTarget.classList;

    if (target.contains("btn-seting")) {
      set_time_container.classList.add("active-set-time");
    } else if (target.contains("btn-close-set-time")) {
      set_time_container.classList.remove("active-set-time");
    } else if (target.contains("btn-minus")) {
      num > 0 ? num-- : (num = 60);
        number.innerHTML = num;
    } else if (target.contains("btn-plus")) {
        num < 60 ? num++ : (num = 0);
        number.innerHTML = num;
    } else if (target.contains("btn-left") || target.contains("btn-right")) {
        type = type === 'Hour' ? 'Min' : type === 'Min' ? 'Sec' : 'Hour';
        btn_type.textContent = type;
    } else if(target.contains('btn-pause')){
        clearInterval(timer);
        isPaused = true;
        btn.classList.remove('btn-pause');
        btn.classList.add('btn-start');
    }else if(target.contains('btn-start')){
        if (isPaused && total_seconds > 0) {
            start_countdown(); // restart the same logic
            isPaused = false;
            btn.classList.remove('btn-start');
            btn.classList.add('btn-pause');
        }
    }else if(target.contains('btn-restart')){
        total_seconds = time;
    }
  });
});

btn_set_time.addEventListener("click", () => {
  // first remove the set time container when set time button is clicked
  set_time_container.classList.remove("active-set-time");

  time_type = time_type.innerHTML;
  time_num = number.innerHTML;

  if (time_type == "sec") total_seconds = time_num;
  else if (time_type == "min") total_seconds = time_num * 60;
  else if (time_type === "hour") totalSeconds = time_num * 3600;

  time = total_seconds;

  start_countdown();
});

function start_countdown() {
  timer = setInterval(() => {
    if (total_seconds <= 0) {
      clearInterval(timer);
      return;
    }

    console.log(total_seconds);
    total_seconds--;

    const hrs = String(Math.floor(total_seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((total_seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(total_seconds % 60).padStart(2, "0");

    hour.innerHTML = hrs;
    min.innerHTML = mins;
    sec.innerHTML = secs;
  }, 1000);
}
