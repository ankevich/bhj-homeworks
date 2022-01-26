let dropdowns = Array.from(document.getElementsByClassName("dropdown"))

dropdowns.map(dropdown => {
  let dropdownValue = dropdown.querySelector(".dropdown__value");
  let dropdownList = dropdown.querySelector(".dropdown__list")
  let dropdownItems = Array.from(dropdown.querySelectorAll(".dropdown__item"))
  
  dropdownValue.onclick = () => {
    dropdownList.classList.toggle("dropdown__list_active");
  };
  
  dropdownItems.map((item) => {
      item.querySelector("a").onclick = () => {
      dropdownValue.textContent = item.querySelector("a").textContent;
      return false
    };
  });

})
