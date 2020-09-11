const slideJinada = document.querySelectorAll(".slideJinada");
const prevBtnJinada = document.querySelector(".prevBtnJinada");
const nextBtnJinada = document.querySelector(".nextBtnJinada");
const sliderJinada = document.querySelector(".sliderJinada");

let slideCounterJinada = 1;
const LENGTH_OF_SLIDEJinada = `${sliderJinada.clientWidth}`;
const moveSlideJinada = () =>
  (sliderJinada.style.transform = `translateX(-${
    LENGTH_OF_SLIDEJinada * slideCounterJinada
  }px)`);
moveSlideJinada();

nextBtnJinada.addEventListener("click", () => {
  if (slideCounterJinada >= slideJinada.length - 1) return;
  sliderJinada.style.transition = "transform 0.2s ease-in-out";
  slideCounterJinada++;
  moveSlideJinada();
});
prevBtnJinada.addEventListener("click", () => {
  if (slideCounterJinada <= 0) return;
  sliderJinada.style.transition = "transform 0.2s ease-in-out";
  slideCounterJinada--;
  moveSlideJinada();
});

sliderJinada.addEventListener("transitionend", () => {
  if (slideJinada[slideCounterJinada].id === "last-clone") {
    sliderJinada.style.transition = "none";
    slideCounterJinada = slideJinada.length - 2;
    moveSlideJinada();
  }
  if (slideJinada[slideCounterJinada].id === "first-clone") {
    sliderJinada.style.transition = "none";
    slideCounterJinada = slideJinada.length - slideCounterJinada;
    moveSlideJinada();
  }
});
