const slideBlizly = document.querySelectorAll(".slideBlizly");
const prevBtnBlizly = document.querySelector(".prevBtnBlizly");
const nextBtnBlizly = document.querySelector(".nextBtnBlizly");
const sliderBlizly = document.querySelector(".sliderBlizly");

let slideCounterBlizly = 1;
const LENGTH_OF_SLIDEBlizly = `${sliderBlizly.clientWidth}`;
const moveSlideBlizly = () =>
  (sliderBlizly.style.transform = `translateX(-${
    LENGTH_OF_SLIDEBlizly * slideCounterBlizly
  }px)`);
moveSlideBlizly();

nextBtnBlizly.addEventListener("click", () => {
  if (slideCounterBlizly >= slideBlizly.length - 1) return;
  sliderBlizly.style.transition = "transform 0.2s ease-in-out";
  slideCounterBlizly++;
  moveSlideBlizly();
});
prevBtnBlizly.addEventListener("click", () => {
  if (slideCounterBlizly <= 0) return;
  sliderBlizly.style.transition = "transform 0.2s ease-in-out";
  slideCounterBlizly--;
  moveSlideBlizly();
});

sliderBlizly.addEventListener("transitionend", () => {
  if (slideBlizly[slideCounterBlizly].id === "last-clone") {
    sliderBlizly.style.transition = "none";
    slideCounterBlizly = slideBlizly.length - 2;
    moveSlideBlizly();
  }
  if (slideBlizly[slideCounterBlizly].id === "first-clone") {
    sliderBlizly.style.transition = "none";
    slideCounterBlizly = slideBlizly.length - slideCounterBlizly;
    moveSlideBlizly();
  }
});
