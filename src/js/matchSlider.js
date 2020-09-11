const slideMatch = document.querySelectorAll(".slideMatch");
const prevBtnMatch = document.querySelector(".prevBtnMatch");
const nextBtnMatch = document.querySelector(".nextBtnMatch");
const sliderMatch = document.querySelector(".sliderMatch");

let slideCounterMatch = 1;
const LENGTH_OF_SLIDEMatch = `${sliderMatch.clientWidth}`;
const moveSlideMatch = () =>
  (sliderMatch.style.transform = `translateX(-${
    LENGTH_OF_SLIDEMatch * slideCounterMatch
  }px)`);
moveSlideMatch();

nextBtnMatch.addEventListener("click", () => {
  if (slideCounterMatch >= slideMatch.length - 1) return;
  sliderMatch.style.transition = "transform 0.2s ease-in-out";
  slideCounterMatch++;
  moveSlideMatch();
});
prevBtnMatch.addEventListener("click", () => {
  if (slideCounterMatch <= 0) return;
  sliderMatch.style.transition = "transform 0.2s ease-in-out";
  slideCounterMatch--;
  moveSlideMatch();
});

sliderMatch.addEventListener("transitionend", () => {
  if (slideMatch[slideCounterMatch].id === "last-clone") {
    sliderMatch.style.transition = "none";
    slideCounterMatch = slideMatch.length - 2;
    moveSlideMatch();
  }
  if (slideMatch[slideCounterMatch].id === "first-clone") {
    sliderMatch.style.transition = "none";
    slideCounterMatch = slideMatch.length - slideCounterMatch;
    moveSlideMatch();
  }
});
