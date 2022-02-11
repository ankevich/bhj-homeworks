let valutes = document.querySelector("#items");
let loader = document.querySelector('#loader')

const url = "https://netology-slow-rest.herokuapp.com/";
const xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === xhr.DONE) {
    loader.classList.remove('loader_active')
    let response = JSON.parse(xhr.responseText);
    let currentValutes = Object.values(response.response.Valute);
    currentValutes.map((valute) => {
        valutes.innerHTML += `
        <div class="item">
            <div class="item__code">${valute.CharCode}</div>
            <div class="item__value">${valute.Value}</div>
            <div class="item__currency">руб.</div>
        </div>`
    });
  }
});

xhr.open("GET", url);
xhr.send();



