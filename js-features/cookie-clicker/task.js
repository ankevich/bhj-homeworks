let counter = Number(document.getElementById("clicker__counter").innerHTML);

const cookie = document.getElementById("cookie");
cookie.onclick = function () {
  counter++;
  cookie.width == 200 ? (cookie.width = 300) : (cookie.width = 200); //   changeSizes();
  //   cookie.width = cookie.width == 200 ? 300 : 200;
  document.getElementById("clicker__counter").innerHTML = counter;
};

// let changeSizes = () => {
//   if (cookie.width == 200) {
//     cookie.width = 300;
//   } else {
//     cookie.width = 200;
//   }
// };
