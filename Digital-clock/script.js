function setTime() {
  let time = new Date();
  $(".sec").text(time.getSeconds());
  $(".min").text(time.getMinutes());
  $(".hour").text(time.getHours());
}

setInterval(setTime, 1000);