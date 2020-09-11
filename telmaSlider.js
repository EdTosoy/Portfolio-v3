const slideTelma = document.querySelectorAll(".slideTelma");
const prevBtnTelma = document.querySelector(".prevBtnTelma");
const nextBtnTelma = document.querySelector(".nextBtnTelma");
const sliderTelma = document.querySelector(".sliderTelma");

let slideCounterTelma = 1;
const LENGTH_OF_SLIDETelma = `${sliderTelma.clientWidth}`;
const moveSlideTelma = () =>
  (sliderTelma.style.transform = `translateX(-${
    LENGTH_OF_SLIDETelma * slideCounterTelma
  }px)`);
moveSlideTelma();

nextBtnTelma.addEventListener("click", () => {
  if (slideCounterTelma >= slideTelma.length - 1) return;
  sliderTelma.style.transition = "transform 0.2s ease-in-out";
  slideCounterTelma++;
  moveSlideTelma();
});
prevBtnTelma.addEventListener("click", () => {
  if (slideCounterTelma <= 0) return;
  sliderTelma.style.transition = "transform 0.2s ease-in-out";
  slideCounterTelma--;
  moveSlideTelma();
});

sliderTelma.addEventListener("transitionend", () => {
  if (slideTelma[slideCounterTelma].id === "last-clone") {
    sliderTelma.style.transition = "none";
    slideCounterTelma = slideTelma.length - 2;
    moveSlideTelma();
  }
  if (slideTelma[slideCounterTelma].id === "first-clone") {
    sliderTelma.style.transition = "none";
    slideCounterTelma = slideTelma.length - slideCounterTelma;
    moveSlideTelma();
  }
});
