let images = Array.from(document.getElementsByClassName("slider__item"));

let prevButton = document.getElementsByClassName("slider__arrow_prev").item(0);
let nextButton = document.getElementsByClassName("slider__arrow_next").item(0);

let currentSlideNumber = 0;

nextButton.onclick = () => {
  currentSlideNumber++;
  images.map((image, index) => {
    if (index == currentSlideNumber) {
      image.classList.add("slider__item_active");
    } else {
      image.classList.remove("slider__item_active");
    }
  });

  if (currentSlideNumber >= images.length - 1) {
    currentSlideNumber = 0;
  }
};

prevButton.onclick = () => {
  currentSlideNumber--;
  images.map((image, index) => {
    if (index == currentSlideNumber) {
      image.classList.add("slider__item_active");
    } else {
      image.classList.remove("slider__item_active");
    }
  });

  if (currentSlideNumber <= 0) {
    currentSlideNumber = images.length - 1;
  }
};
