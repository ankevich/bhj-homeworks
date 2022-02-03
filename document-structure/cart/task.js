let decButtons = Array.from(
  document.getElementsByClassName("product__quantity-control_dec")
);
let incButtons = Array.from(
  document.getElementsByClassName("product__quantity-control_inc")
);
let values = document.getElementsByClassName("product__quantity-value");
let addButtons = Array.from(document.getElementsByClassName("product__add"));
let cart = document.querySelector(".cart__products");

incButtons.map((button) => {
  button.onclick = () => {
    let value = button
      .closest(".product__quantity-controls")
      .querySelector(".product__quantity-value");

    value.textContent++;
  };
});

decButtons.map((button) => {
  button.onclick = () => {
    let value = button
      .closest(".product__quantity-controls")
      .querySelector(".product__quantity-value");
    if (value.textContent > 1) {
      value.textContent--;
    }
  };
});

addButtons.map((button) => {
  button.onclick = () => {
      let product = button.closest(".product")
      let dataId = product.getAttribute("data-id")
      let image = product.querySelector(".product__image").src
      let quantity = product.querySelector(".product__quantity-value").textContent
    cart.innerHTML += `<div class="cart__product" data-id="${dataId}">
    <img class="cart__product-image" src="${image}">
    <div class="cart__product-count">${quantity}</div>
</div>`;
  };
});
