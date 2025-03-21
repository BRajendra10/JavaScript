let body = document.querySelector('body');
let color_box = document.querySelector('#color');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    let color = Math.floor(Math.random() * 16777216).toString(16);

    body.style.backgroundColor = `#${color}`;
    color_box.innerHTML = `#${color}`;
});

color_box.addEventListener('click',() => {
    navigator.clipboard.writeText(color_box.innerHTML);
});