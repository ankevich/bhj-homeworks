let deadCounter = 0;
let lostCounter = 0;

let holes = Array.from(document.getElementsByClassName("hole"));

holes.map((hole) => {
  hole.onclick = () => {
    if (hole.classList.contains("hole_has-mole")) {
      deadCounter++;
      document.getElementById("dead").innerHTML = deadCounter;
    } else {
      lostCounter++;
      document.getElementById("lost").innerHTML = lostCounter;
    }
    checkVictory();
  };
});

let checkVictory = () => {
  if (deadCounter >= 10 && lostCounter < 5) {
    alert("Вы победили!");
    putin();
  } else if (lostCounter >= 5) {
    alert("Вы проиграли!");
    putin();
  }
};

let putin = () => {
  document.getElementById("dead").innerHTML = 0;
  document.getElementById("lost").innerHTML = 0;
  deadCounter = 0;
  lostCounter = 0;
};
