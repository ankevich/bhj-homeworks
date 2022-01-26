let modalMain = document.getElementById("modal_main");
let modalSuccess = document.getElementById("modal_success");
let closeButtons = Array.from(document.getElementsByClassName("modal__close"));

function showModal() {
  modalMain.classList.add("modal_active");
}
showModal();

closeButtons.map((button) => {
  button.onclick = () => {
    button.closest(".modal").classList.remove("modal_active");
  };
});

let success = modalMain.querySelector("a.show-success");
success.onclick = () => {
  modalMain.classList.remove("modal_active");
  modalSuccess.classList.add("modal_active");
};
