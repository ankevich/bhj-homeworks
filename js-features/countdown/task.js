let timer = Number(document.getElementById("timer").innerHTML);
console.log(timer);

let timerId = setInterval(() => {
  if (timer <= 0) {
    alert("Вы победили в конкурсе!");
    clearInterval(timerId);
  } else {
    timer--;
    document.getElementById("timer").innerHTML = timer;
  }
}, 1000);
