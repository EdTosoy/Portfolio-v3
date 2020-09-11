const slideDomicile = document.querySelectorAll(".slideDomicile");
const prevBtnDomicile = document.querySelector(".prevBtnDomicile");
const nextBtnDomicile = document.querySelector(".nextBtnDomicile");
const sliderDomicile = document.querySelector(".sliderDomicile");

let slideCounterDomicile = 1;
const LENGTH_OF_SLIDEDomicile = `${sliderDomicile.clientWidth}`;
const moveSlideDomicile = () =>
  (sliderDomicile.style.transform = `translateX(-${
    LENGTH_OF_SLIDEDomicile * slideCounterDomicile
  }px)`);
moveSlideDomicile();

nextBtnDomicile.addEventListener("click", () => {
  if (slideCounterDomicile >= slideDomicile.length - 1) return;
  sliderDomicile.style.transition = "transform 0.2s ease-in-out";
  slideCounterDomicile++;
  moveSlideDomicile();
});
prevBtnDomicile.addEventListener("click", () => {
  if (slideCounterDomicile <= 0) return;
  sliderDomicile.style.transition = "transform 0.2s ease-in-out";
  slideCounterDomicile--;
  moveSlideDomicile();
});

sliderDomicile.addEventListener("transitionend", () => {
  if (slideDomicile[slideCounterDomicile].id === "last-clone") {
    sliderDomicile.style.transition = "none";
    slideCounterDomicile = slideDomicile.length - 2;
    moveSlideDomicile();
  }
  if (slideDomicile[slideCounterDomicile].id === "first-clone") {
    sliderDomicile.style.transition = "none";
    slideCounterDomicile = slideDomicile.length - slideCounterDomicile;
    moveSlideDomicile();
  }
});
