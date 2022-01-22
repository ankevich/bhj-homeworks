let modalMain = document.getElementById("modal_main");
let modalSuccess = document.getElementById("modal_success");

function showModal() {
  modalMain.classList.add("modal_active");
}
showModal();

let closeMain = modalMain.querySelector(".modal__content div.modal__close");
closeMain.onclick = () => {
  modalMain.classList.remove("modal_active");
};

let success = modalMain.querySelector("a.show-success");
success.onclick = () => {
  modalMain.classList.remove("modal_active");
  modalSuccess.classList.add("modal_active");
};

let closeSuccess = modalSuccess.querySelector(".modal__content div.modal__close");
closeSuccess.onclick = () => {
  modalSuccess.classList.remove("modal_active");
};
