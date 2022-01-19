let counter = Number(document.getElementById("clicker__counter").innerHTML);

const cookie = document.getElementById("cookie");
cookie.onclick = function () {
  counter++;
  changeSizes();
  document.getElementById("clicker__counter").innerHTML = counter;
};

let changeSizes = () => {
  if (cookie.width == 200) {
    cookie.width = 300;
  } else {
    cookie.width = 200;
  }
};
