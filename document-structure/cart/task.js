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

let addSameProduct = (clickedProductId, quantity) => {
  let products = Array.from(document.querySelectorAll(".cart__product"))
  products.map((cartProduct) => {
    let cartProductDataId = cartProduct.getAttribute("data-id")

    if (clickedProductId == cartProductDataId ) {
      let count = cartProduct.querySelector(".cart__product-count").textContent
      let sum = Number(count) + Number(quantity)
      cartProduct.querySelector(".cart__product-count").textContent = sum
    }
  })
}

addButtons.map((button) => {
  button.onclick = () => {
      let product = button.closest(".product")
      
      let dataId = product.getAttribute("data-id")
      let image = product.querySelector(".product__image").src
      let quantity = product.querySelector(".product__quantity-value").textContent

      let cartProducts = Array.from(document.querySelectorAll(".cart__product"))
      let filteredProducts = cartProducts.filter((p) => p.getAttribute("data-id") == dataId)
      let isCartHasProduct = filteredProducts.length > 0

      if (isCartHasProduct) {
        addSameProduct(dataId, quantity)
      } else {
        cart.innerHTML += `
          <div class="cart__product" data-id="${dataId}">
            <img class="cart__product-image" src="${image}">
            <div class="cart__product-count">${quantity}</div>
          </div>`;
      }

  };
});
