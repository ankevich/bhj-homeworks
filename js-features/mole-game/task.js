let deadCounter = Number(document.getElementById("dead").innerHTML);
let lostCounter = Number(document.getElementById("lost").innerHTML);

let holes = Array.from(document.getElementsByClassName("hole"))

holes.map(hole => {
  hole.onclick = () => {
    if (hole.classList.contains("hole_has-mole")) {
        deadCounter++
        document.getElementById("dead").innerHTML = deadCounter
    } else {
        lostCounter++
        document.getElementById("lost").innerHTML = lostCounter
    }
  };
});
