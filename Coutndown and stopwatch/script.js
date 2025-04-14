const set_time_container = document.querySelector('.set-time-container');
const btn_set_time = document.querySelector('.btn-set-time');
const btns = document.querySelectorAll('.btn');

let sec = document.getElementById('sec');
let min = document.getElementById('min');
let hour = document.getElementById('hour');

let timer = 0;
let time = 0;
let isPaused = false;
let total_seconds = 0;

btns.forEach((btn) => {
    btn.addEventListener(('click'), (e) => {
        let target = e.currentTarget.classList;

        if(target.contains('btn-edit')){
            set_time_container.classList.add('active-set-time');
        }else if(target.contains('btn-close-set-time')){
            set_time_container.classList.remove('active-set-time');
        }else if(target.contains('btn-pause')){
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
    set_time_container.classList.remove('active-set-time');

    let type = document.querySelector('#timeType').value;
    let num = document.querySelector('#time').value;

    if(type == 'second') total_seconds = num;
    else if(type == 'minute') total_seconds = num * 60;
    else if (type === "hour") totalSeconds = num * 3600; 

    time = total_seconds;

    start_countdown();
});


function start_countdown() {
    timer = setInterval(() => {
        if(total_seconds <= 0){
            clearInterval(timer);
            return;
        }

        console.log(total_seconds);
        total_seconds--;

        const hrs = String(Math.floor(total_seconds / 3600)).padStart(2, '0');
        const mins = String(Math.floor((total_seconds % 3600) / 60)).padStart(2, '0');
        const secs = String(total_seconds % 60).padStart(2, '0');

        hour.innerHTML = hrs;
        min.innerHTML = mins;
        sec.innerHTML = secs;
    }, 1000);
}