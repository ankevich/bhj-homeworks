let links = Array.from(document.getElementsByClassName("menu__link"));

links.map((link) => {
  let sibling = link.closest(".menu__item").querySelector("ul.menu");
  if (sibling != null) {
    link.onclick = () => {
      sibling.classList.toggle("menu_active");
      return false
    };
  }
});
