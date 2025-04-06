let timer;

document.getElementById("startBtn").addEventListener("click", () => {
  const num = parseInt(document.getElementById("numTime").value);
  const type = document.getElementById("timeType").value;

  let totalSeconds = 0;

  if (type === "second") totalSeconds = num;
  else if (type === "minute") totalSeconds = num * 60;
  else if (type === "hour") totalSeconds = num * 3600;

  if (isNaN(totalSeconds) || totalSeconds <= 0) {
    alert("Please select a valid number and type");
    return;
  }

  timer = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(timer);
      return;
    }

    totalSeconds--;

    const hrs = String(Math.floor(totalSeconds / 3600));
    const mins = String(Math.floor((totalSeconds % 3600) / 60));
    const secs = String(totalSeconds % 60);

    document.querySelector(".hour").textContent = hrs;
    document.querySelector(".min").textContent = mins;
    document.querySelector(".sec").textContent = secs;
  }, 1000);
});
