const slideFiit = document.querySelectorAll(".slideFiit");
const prevBtnFiit = document.querySelector(".prevBtnFiit");
const nextBtnFiit = document.querySelector(".nextBtnFiit");
const sliderFiit = document.querySelector(".sliderFiit");

let slideCounterFiit = 1;
const LENGTH_OF_SLIDEFiit = `${sliderFiit.clientWidth}`;
const moveSlideFiit = () =>
  (sliderFiit.style.transform = `translateX(-${
    LENGTH_OF_SLIDEFiit * slideCounterFiit
  }px)`);
moveSlideFiit();

nextBtnFiit.addEventListener("click", () => {
  if (slideCounterFiit >= slideFiit.length - 1) return;
  sliderFiit.style.transition = "transform 0.2s ease-in-out";
  slideCounterFiit++;
  moveSlideFiit();
});
prevBtnFiit.addEventListener("click", () => {
  if (slideCounterFiit <= 0) return;
  sliderFiit.style.transition = "transform 0.2s ease-in-out";
  slideCounterFiit--;
  moveSlideFiit();
});

sliderFiit.addEventListener("transitionend", () => {
  if (slideFiit[slideCounterFiit].id === "last-clone") {
    sliderFiit.style.transition = "none";
    slideCounterFiit = slideFiit.length - 2;
    moveSlideFiit();
  }
  if (slideFiit[slideCounterFiit].id === "first-clone") {
    sliderFiit.style.transition = "none";
    slideCounterFiit = slideFiit.length - slideCounterFiit;
    moveSlideFiit();
  }
});
