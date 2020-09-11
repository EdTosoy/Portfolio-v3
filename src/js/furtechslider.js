const slideFurtech = document.querySelectorAll(".slideFurtech");
const prevBtnFurtech = document.querySelector(".prevBtnFurtech");
const nextBtnFurtech = document.querySelector(".nextBtnFurtech");
const sliderFurtech = document.querySelector(".sliderFurtech");

let slideCounterFurtech = 1;
const LENGTH_OF_SLIDEFurtech = `${sliderFurtech.clientWidth}`;
const moveSlideFurtech = () =>
  (sliderFurtech.style.transform = `translateX(-${
    LENGTH_OF_SLIDEFurtech * slideCounterFurtech
  }px)`);
moveSlideFurtech();

nextBtnFurtech.addEventListener("click", () => {
  if (slideCounterFurtech >= slideFurtech.length - 1) return;
  sliderFurtech.style.transition = "transform 0.2s ease-in-out";
  slideCounterFurtech++;
  moveSlideFurtech();
});
prevBtnFurtech.addEventListener("click", () => {
  if (slideCounterFurtech <= 0) return;
  sliderFurtech.style.transition = "transform 0.2s ease-in-out";
  slideCounterFurtech--;
  moveSlideFurtech();
});

sliderFurtech.addEventListener("transitionend", () => {
  if (slideFurtech[slideCounterFurtech].id === "last-clone") {
    sliderFurtech.style.transition = "none";
    slideCounterFurtech = slideFurtech.length - 2;
    moveSlideFurtech();
  }
  if (slideFurtech[slideCounterFurtech].id === "first-clone") {
    sliderFurtech.style.transition = "none";
    slideCounterFurtech = slideFurtech.length - slideCounterFurtech;
    moveSlideFurtech();
  }
});
