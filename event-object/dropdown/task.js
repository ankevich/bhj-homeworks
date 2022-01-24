let dropdownValue = document.getElementsByClassName("dropdown__value").item(0);
let dropdownList = document.getElementsByClassName("dropdown__list").item(0);
let dropdownItems = Array.from(document.getElementsByClassName("dropdown__item"));

dropdownValue.onclick = () => {
  dropdownList.classList.toggle("dropdown__list_active");
};

dropdownItems.map((item) => {
    item.querySelector("a").onclick = () => {
    dropdownValue.textContent = item.querySelector("a").textContent;
    return false
  };
});
