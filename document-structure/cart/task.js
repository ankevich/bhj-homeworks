let decButtons = Array.from(document.getElementsByClassName("product__quantity-control_dec"));
let incButtons = Array.from(document.getElementsByClassName("product__quantity-control_inc"));
let values = document.getElementsByClassName("product__quantity-value");

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
