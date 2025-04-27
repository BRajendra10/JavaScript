let btns = document.querySelectorAll('.btn');
const progress = document.getElementById('prograess');
const audio = document.getElementsByTagName('audio')[0];

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let target = e.currentTarget.classList;

        if(target.contains('btn-play')){
            audio.play();
            btn.classList.remove('btn-play');
            btn.classList.add('btn-pause');
            btn.innerHTML = '<i class="ri-pause-fill"></i>';
        }else if(target.contains('btn-pause')){
            audio.pause();
            btn.classList.remove('btn-pause');
            btn.classList.add('btn-play');
            btn.innerHTML = '<i class="ri-play-mini-fill"></i>';
        }
    });
});

audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
      const percent = (audio.currentTime / audio.duration) * 100;
      progress.value = percent;
    }
});

progress.addEventListener('input', () => {
    const seekTime = (progress.value / 100) * audio.duration;
    audio.currentTime = seekTime;
});